import {init, tx, id} from '@instantdb/core'
### Store.imba
# A centralized data store to manage application state and handle synchronization
# between local storage and InstantDB
###

### Constants
###
# Define default values for the store
const DEFAULT_STATE = {
	# User and authentication state
	user: null
	login?: null # null = waiting, yes, no
	sentCode?: null # yes, no
	email_input: ''
	error: null
	
	# UI preferences
	dark: no
	ipa: no
	lesson_nav: yes
	phrase_nav: yes
	right_bar: yes
	writing_system: 'khmer' # 'khmer' or 'phonetic'
	
	# Navigation state
	cid: 0
	lid: 0
	pid: 0
	wid: 0
	active_word: 'ជា'
	
	# User data
	user_words: {} # Format: { "word": { khmer: true|false, phonetic: true|false } }
	progress_khmer: { library: {weight_learned: 0} }
	progress_phonetic: { library: {weight_learned: 0} }
	
	# Timestamps for sync management
	updated_progress_at: 0
	last_sync_at: 0
	created_at: 0
}

### Utility functions
###
def deepCopy obj
	return JSON.parse(JSON.stringify(obj))

def safeAccess obj, path, defaultValue = null
	# Safely access nested object properties via a path string
	# Example: safeAccess({a: {b: {c: 1}}}, 'a.b.c') => 1
	if !obj
		return defaultValue
	
	const keys = path.split('.')
	let result = obj
	
	for key in keys
		if result === null || result === undefined || !result.hasOwnProperty(key)
			return defaultValue
		result = result[key]
	
	return result === undefined ? defaultValue : result

def throttle func, limit
	# Throttle a function to only run once per limit milliseconds"""
	let waiting = false
	
	return do(...args)
		if !waiting
			func(...args)
			waiting = true
			setTimeout(&, limit) do
				waiting = false

### Store Implementation
###
export class Store
	# Properties
	prop state = {} # Main state object
	prop instant = {} # InstantDB instance
	prop syncQueue = [] # Queue for changes that need to be synced
	prop isSyncing = false # Flag to prevent simultaneous syncs
	prop initialized = false # Flag to track initialization
	prop syncTimeout = null # Reference to setTimeout for throttling
	prop throttledSync
	
	# Constructor
	def constructor
		console.log("Initializing Store...")
		throttledSync = throttle(self.syncWithInstantDB.bind(self), 5000) # Throttle to every 5 seconds
		initState!
		initInstantDB!
		subscribeToAuthChanges!
	
	# ========================
	# Initialization methods
	# ========================
	
	def initState
		# Initialize the state from local storage or defaults"""
		try
			if imba.locals[LOCAL_DB_NAME]
				# Load from local storage
				const savedState = imba.locals[LOCAL_DB_NAME]
				state = deepCopy(savedState)
				console.log("Loaded state from local storage")
				
				# Initialize app with default values if needed
				console.log("Loaded state from local storage")
			else
				# Use defaults
				resetState!
				console.log("Initialized state with defaults")
		catch error
			console.error("Error initializing state:", error)
			resetState!
	
	def resetState
		# Reset the state to default values"""
		state = deepCopy(DEFAULT_STATE)
		state.updated_progress_at = Date.now!
		persistState!
	
	def initInstantDB
		# Initialize the InstantDB connection"""
		try
			instant = init({ appId: INSTANT_APP_ID })
			console.log("InstantDB initialized")
		catch error
			console.error("Error initializing InstantDB:", error)
	
	def subscribeToAuthChanges
		# Set up subscription to auth changes in InstantDB"""
		if !instant
			console.error("InstantDB not initialized, can't subscribe to auth")
			return
			
		try
			instant.subscribeAuth do(auth)
				if auth.error
					console.error('Error during authentication:', auth.error)
					state.error = auth.error.message
				elif auth.user
					state.user = auth.user
					state.login? = yes
					subscribeToUserData!
				else
					state.login? = no
					state.user = null
				
				imba.commit!
				persistState!
		catch error
			console.error("Error subscribing to auth changes:", error)
	
	def subscribeToUserData
		# Subscribe to user-specific data in InstantDB"""
		if !state.user..id
			console.warn('User is not logged in. Skipping user data subscription.')
			return
			
		try
			const userId = state.user.id
			const query = 
				profile:
					$:
						where:
							"$users.id": userId
				tasks: 
					$:
						where: 
							"$users.id": userId
							
			const unsub = instant.subscribeQuery query, do(resp)
				if resp.error
					console.error('Error in user data subscription:', resp.error.message)
					state.error = resp.error.message
				elif resp.data..tasks
					state.tasks = resp.data.tasks || []
					syncFromRemote(resp.data)
					imba.commit!
				else
					console.warn('Unexpected response structure:', resp)
					
				persistState!
		catch error
			console.error("Error subscribing to user data:", error)
	
	# ========================
	# State Management
	# ========================
	
	def get path, defaultValue = null
		# Get a value from the state by path"""
		return safeAccess(state, path, defaultValue)
	
	def set path, value
		# Set a value in the state by path"""
		const keys = path.split('.')
		const lastKey = keys.pop!
		
		let current = state
		
		# Navigate to the correct nesting level
		for key in keys
			if !current[key] || typeof current[key] !== 'object'
				current[key] = {}
			current = current[key]
		
		# Set the value
		current[lastKey] = value
		
		# Update timestamp and persist
		state.updated_progress_at = Date.now!
		persistState!
		
		# Queue for sync if signed in
		if state.user..id
			queueForSync(path, value)
	
	def persistState
		# Save the state to local storage"""
		try
			imba.locals[LOCAL_DB_NAME] = deepCopy(state)
		catch error
			console.error("Error persisting state to local storage:", error)
	
	# ========================
	# Synchronization with InstantDB
	# ========================
	
	def queueForSync path, value
		# Add an item to the sync queue"""
		syncQueue.push({ path, value, timestamp: Date.now! })
		throttledSync!
	
	def syncWithInstantDB
		# Sync local changes to InstantDB"""
		if !state.user..id || isSyncing || syncQueue.length === 0
			return
			
		isSyncing = true
		const batch = []
		const timestamp = Date.now!
		
		try
			# Group all changes into a single transaction
			let profileUpdate = {
				updated_progress_at: timestamp
			}
			
			# List of properties that should NOT be synced to InstantDB
			const localOnlyProps = ['active_word', 'cid', 'lid', 'pid', 'wid']
			
			for own key, item of syncQueue
				# Extract the leaf property name from the path
				const pathParts = item.path.split('.')
				const leafProperty = pathParts[pathParts.length - 1]
				
				# Only add properties that should be synced
				if !localOnlyProps.includes(leafProperty)
					profileUpdate[leafProperty] = item.value
			
			# Process user_words specially - this is important to sync
			if state.user_words
				profileUpdate.user_words = state.user_words
				
			# Sync both progress objects separately
			if state.progress_khmer
				profileUpdate.progress_khmer = state.progress_khmer
				
			if state.progress_phonetic
				profileUpdate.progress_phonetic = state.progress_phonetic
				
			# Always sync writing_system as it affects progress tracking
			profileUpdate.writing_system = state.writing_system
			
			# Check if we already have a profile ID stored
			if state.profileId
				# Use the existing profile ID without trying to link it again (which would cause a unique constraint error)
				console.log("Using existing profile ID:", state.profileId)
				batch.push(
					tx.profile[state.profileId].update(profileUpdate).link(
						{$users: state.user.id}
					)
				)
			else
				# Create a new profile and link it to the user if we don't have an existing profileId
				const profileId = id!
				console.log("Creating new profile ID:", profileId, "for user:", state.user.id)
				batch.push(
					tx.profile[profileId].update({
						...profileUpdate,
						id: profileId,
						created_at: timestamp # Add creation timestamp for new profiles
					}).link({$users: state.user.id})
				)
				# Store the new profile ID for future updates
				state.profileId = profileId
			
			# Execute the batch
			instant.transact(batch).then(do(_result)
				state.last_sync_at = timestamp
				syncQueue = []
				persistState!
				console.log("Successfully synced with InstantDB")
			).catch(do(error)
				console.error("Error syncing with InstantDB:", error)
			).finally(do
				isSyncing = false
			)
		catch error
			console.error("Error preparing sync with InstantDB:", error)
			isSyncing = false
	
	def syncFromRemote data
		# Process and apply remote data"""
		if !data
			return
			
		try
			# Handle profile data if present
			if data.profile
				for own key, profile of Object.values(data.profile)
					# Only process data for the current user
					if profile.$users && profile.$users.includes(state.user.id)
						
						# Store the profile ID for future updates
						state.profileId = profile.id
						
						# Update user words data
						if profile.user_words
							state.user_words = {...state.user_words, ...profile.user_words}
						
						# Update progress data for khmer
						if profile.progress_khmer
							state.progress_khmer = {...state.progress_khmer || {}, ...profile.progress_khmer}
							
						# Update progress data for phonetic
						if profile.progress_phonetic
							state.progress_phonetic = {...state.progress_phonetic || {}, ...profile.progress_phonetic}
						
						# Update last received timestamp
						state.last_sync_at = profile.updated_progress_at || Date.now!
						
						# Store created_at if available
						if profile.created_at and !state.created_at
							state.created_at = profile.created_at
			
			persistState!
		catch error
			console.error("Error processing remote data:", error)
	
	# ========================
	# Authentication methods
	# ========================
	
	def sendMagicCode
		# Send a magic code for authentication"""
		if !state.email_input
			console.error('Email is required to send a magic code.')
			return Promise.reject('Email is required')
		console.log('Sending magic code to:', state.email_input)
		state.sentCode? = true
		imba.commit!
		persistState!
		try
			instant.auth.sendMagicCode({ email: state.email_input })
		catch error
			console.error('Error sending magic code:', error)
			state.error = error.message || 'Failed to send magic code'
			return Promise.reject(error)
	
	def loginWithCode code
		# Login with a magic code"""
		if !state.email_input || !code
			console.error('Both email and code are required to sign in.')
			return Promise.reject('Email and code required')
		
		return instant.auth.signInWithMagicCode({ email: state.email_input, code })
			.then(do
				state.email_input = ''
				state.sentCode? = false
				persistState!
				return true
			)
			.catch(do(error)
				console.error('Error logging in with magic code:', error)
				state.error = error.message || 'Failed to login'
				return Promise.reject(error)
			)
	
	def logout
		# Log out the current user"""
		console.log('Logging out user')
		
		return instant.auth.signOut()
			.then(do
				state.user = null
				state.email_input = ''
				state.profileId = null  # Clear profile ID on logout
				persistState!
				return true
			)
			.catch(do(error)
				console.error('Error during logout:', error)
				state.error = error.message || 'Failed to logout'
				return Promise.reject(error)
			)
	
	# ========================
	# User preferences
	# ========================
	
	def toggleDarkMode
		# Toggle dark mode"""
		set('dark', !state.dark)
		return state.dark
	
	def toggleIpa
		# Toggle IPA display"""
		set('ipa', !state.ipa)
		return state.ipa
	
	def toggleLessonNav
		# Toggle lesson navigation"""
		set('lesson_nav', !state.lesson_nav)
		return state.lesson_nav
	
	def togglePhraseNav
		# Toggle phrase navigation"""
		set('phrase_nav', !state.phrase_nav)
		return state.phrase_nav
	
	def toggleRightBar
		# Toggle right sidebar"""
		set('right_bar', !state.right_bar)
		return state.right_bar
		
	def setWritingSystem system
		# Set writing system to 'khmer' or 'phonetic'
		if !system or (system isnt 'khmer' and system isnt 'phonetic')
			console.warn('Invalid writing system:', system)
			return state.writing_system or 'khmer'
		
		set('writing_system', system)
		return system no
	
	def toggleWritingSystem
		# Toggle between 'khmer' and 'phonetic' writing systems
		const newSystem = state.writing_system === 'khmer' ? 'phonetic' : 'khmer'
		return setWritingSystem(newSystem)
	
	# ========================
	# Learning progress tracking
	# ========================
	
	def toggleLearnedWord word, writing_system = null
		# Toggle whether a word has been learned
		# writing_system can be 'khmer', 'phonetic', or null (uses current setting)
		if !word
			return

		# Determine which writing system to toggle, with fallback to default
		const system = writing_system || state.writing_system || 'khmer'
		
		if system !== 'khmer' && system !== 'phonetic'
			console.warn('Invalid writing system:', system)
			return
		
		const user_words = {...state.user_words || {}}
		
		# Initialize the word entry if it doesn't exist
		if !user_words[word]
			user_words[word] = { khmer: no, phonetic: no }
			
		# Toggle the writing system
		user_words[word][system] = !user_words[word][system]
		
		# Update state
		set('user_words', user_words)
		
		return user_words[word][system]
	
	def hasLearnedWord word, writing_system = null
		# Check if a word has been learned
		# writing_system can be 'khmer', 'phonetic', or null (uses current setting)
		if !word
			return false
		
		# Determine which writing system to check, with fallback to default
		const system = writing_system || state.writing_system || 'khmer'
		
		# Check if the word is learned in the specified writing system
		return state.user_words..[word]..[system] === true
	
	def updateProgress library
		# Update learning progress based on library data"""
		if !library
			console.warn('Cannot update progress: library data is missing')
			return
		
		try
			# Get current writing system, with fallback to default
			const system = state.writing_system || 'khmer'
			
			# Select the appropriate progress object based on writing system
			const progressKey = system === 'khmer' ? 'progress_khmer' : 'progress_phonetic'
			const progress = deepCopy(state[progressKey] || { library: {} })
			
			# Calculate library-level progress
			let libraryWeightLearned = 0
			let libraryUniqueWords = 0
			let libraryUniqueWordsLearned = 0
			
			# Get words learned in the current writing system
			const user_words = state.user_words || {}
			# Create a helper function to check if a word is learned in the current system
			def isWordLearned word
				return user_words[word]..[system] === true
			
			# Process collections
			if library.collections
				for own colKey, collection of library.collections
					progress[colKey] = progress[colKey] || {}
					let colWeightLearned = 0
					let colUniqueWords = collection.unique || 0
					let colUniqueWordsLearned = 0
					
					# Process words in this collection
					for own word, wordData of collection.words || {}
						if isWordLearned(word)
							colWeightLearned += (wordData.weight || 0)
							colUniqueWordsLearned++
					
					# Update collection progress
					progress[colKey].weight_learned = colWeightLearned
					progress[colKey].unique_learned = colUniqueWordsLearned
					progress[colKey].weight_progress = 
						if (colWeightLearned > 0)
						and (collection.weight > 0)
						then Math.round((colWeightLearned / collection.weight) * 100) 
						else 0
					progress[colKey].unique_progress = 
						if (colUniqueWordsLearned > 0)
						and (colUniqueWords > 0)
						then Math.round((colUniqueWordsLearned / colUniqueWords) * 100)
						else 0
					
					# Add to library totals
					libraryWeightLearned += colWeightLearned
					
			# Process lessons
			if library.lessons
				for own lesKey, lesson of library.lessons
					progress[lesKey] = progress[lesKey] || {}
					let lesWeightLearned = 0
					let lesUniqueWords = lesson.unique || 0
					let lesUniqueWordsLearned = 0
					
					# Process words in this lesson
					for own word, wordData of lesson.words || {}
						if isWordLearned(word)
							lesWeightLearned += (wordData.weight || 0)
							lesUniqueWordsLearned++
					
					# Update lesson progress
					progress[lesKey].weight_learned = lesWeightLearned
					progress[lesKey].unique_learned = lesUniqueWordsLearned
					progress[lesKey].weight_progress = 
						if (lesWeightLearned > 0) and (lesson.weight > 0)
						then Math.round((lesWeightLearned / lesson.weight) * 100)
						else 0
					progress[lesKey].unique_progress = 
						if (lesUniqueWordsLearned > 0) and (lesUniqueWords > 0)
						then Math.round((lesUniqueWordsLearned / lesUniqueWords) * 100)
						else 0
					
			# Process phrases
			if library.phrases
				for own phrKey, phrase of library.phrases
					progress[phrKey] = progress[phrKey] || {}
					let phrWeightLearned = 0
					let phrUniqueWords = phrase.unique || 0
					let phrUniqueWordsLearned = 0
					
					# Process words in this phrase
					for own word, wordData of phrase.words || {}
						if isWordLearned(word)
							phrWeightLearned += (wordData.weight || 0)
							phrUniqueWordsLearned++
					
					# Update phrase progress
					progress[phrKey].weight_learned = phrWeightLearned
					progress[phrKey].unique_learned = phrUniqueWordsLearned
					progress[phrKey].weight_progress = 
						if (phrWeightLearned > 0) and (phrase.weight > 0)
						then Math.round((phrWeightLearned / phrase.weight) * 100)
						else 0
					progress[phrKey].unique_progress = 
						if (phrUniqueWordsLearned > 0) and (phrUniqueWords > 0)
						then Math.round((phrUniqueWordsLearned / phrUniqueWords) * 100)
						else 0
			
			# Update library progress
			libraryUniqueWords = library.unique || 0
			
			# Count words learned in current system
			libraryUniqueWordsLearned = 0
			for own word, data of user_words
				if data[system]
					libraryUniqueWordsLearned++
			
			progress.library.weight_learned = libraryWeightLearned
			progress.library.unique_learned = libraryUniqueWordsLearned
			progress.library.weight_progress = 
				if (libraryWeightLearned > 0) && (library.weight > 0)
				then Math.round((libraryWeightLearned / library.weight) * 100)
				else 0
			progress.library.unique_progress = 
				if (libraryUniqueWordsLearned > 0) and (libraryUniqueWords > 0)
				then Math.round((libraryUniqueWordsLearned / libraryUniqueWords) * 100)
				else 0
			
			# Set the updated progress for the specific writing system
			set(progressKey, progress)
			return progress
		catch error
			console.error("Error updating progress:", error)
			return getProgressForSystem()
	
	def getProgressForSystem writing_system = null
		# Get progress data for the specified writing system or current one
		const system = writing_system || state.writing_system || 'khmer'
		
		if system === 'khmer'
			return state.progress_khmer || { library: { weight_learned: 0 } }
		elif system === 'phonetic'
			return state.progress_phonetic || { library: { weight_learned: 0 } }
		else
			console.warn('Invalid writing system for progress:', system)
			return { library: { weight_learned: 0 } }
	
	def getTotalProgress
		# Get total progress combining both writing systems
		const khmerProgress = getProgressForSystem('khmer')
		const phoneticProgress = getProgressForSystem('phonetic')
		
		const totalProgress = {
			library: {
				weight_learned: (khmerProgress.library..weight_learned || 0) + (phoneticProgress.library..weight_learned || 0),
				unique_learned: (khmerProgress.library..unique_learned || 0) + (phoneticProgress.library..unique_learned || 0)
			}
		}
		
		return totalProgress
	
	# ========================
	# Word reference utilities
	# ========================
	
	def generateWordReferences library
		# Generate references for where each word is used"""
		if !library..phrases
			console.warn('Cannot generate word references: library phrase data is missing')
			return {}
		
		try
			const references = {}
			
			# Process each phrase
			for own phraseKey, phrase of library.phrases
				# Skip if no words in this phrase
				if !phrase..words
					continue
				
				# Process each word in the phrase
				for own word, _wordData of phrase.words
					if !references[word]
						references[word] = []
						
					references[word].push(phraseKey)
			
			return references
		catch error
			console.error("Error generating word references:", error)
			return {}
	
	def countKeys obj
		# Count the number of keys in an object"""
		return obj ? Object.keys(obj).length : 0

# Create a global singleton instance
export const STORE = new Store()
# Also assign to global for access anywhere
global.STORE = STORE