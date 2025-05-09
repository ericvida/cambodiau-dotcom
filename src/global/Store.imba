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
	khmer_writing: yes
	
	# Navigation state
	cid: 0
	lid: 0
	pid: 0
	wid: 0
	active_word: 'ជា'
	
	# User data
	user_learned: {}
	progress: {
		library: {weight_learned: 0}
	}
	
	# Timestamps for sync management
	updated_at: 0
	last_sync_at: 0
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
		state.updated_at = Date.now!
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
		state.updated_at = Date.now!
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
				updated_at: timestamp
			}
			for own key, item of syncQueue
				# Add to the profile update object
				# Extract the leaf property name from the path
				const pathParts = item.path.split('.')
				const leafProperty = pathParts[pathParts.length - 1]
				profileUpdate[leafProperty] = item.value
			
			# Process user_learned and progress specially
			if state.user_learned
				profileUpdate.user_learned = state.user_learned
				
			if state.progress
				profileUpdate.progress = state.progress
			
			# Check if we already have a profile ID stored
			if state.profileId
				# Use the existing profile ID without trying to link it again (which would cause a unique constraint error)
				batch.push(
					tx.profile[state.profileId].update(profileUpdate)
				)
			else
				# Create a new profile and link it to the user if we don't have an existing profileId
				const profileId = id!
				batch.push(
					tx.profile[profileId].update({
						...profileUpdate,
						id: profileId
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
						
						# Update user learning data
						if profile.user_learned
							state.user_learned = {...state.user_learned, ...profile.user_learned}
						
						# Update progress data
						if profile.progress
							state.progress = {...state.progress, ...profile.progress}
						
						# Update last received timestamp
						state.last_sync_at = profile.updated_at || Date.now!
			
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
		
		return instant.auth.sendMagicCode({ email: state.email_input })
			.then(do
				state.sentCode? = true
				imba.commit!
				persistState!
				return true
			)
			.catch(do(error)
				console.error('Error sending magic code:', error)
				state.error = error.message || 'Failed to send magic code'
				return Promise.reject(error)
			)
	
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
	
	# ========================
	# Learning progress tracking
	# ========================
	
	def toggleLearnedWord word
		# Toggle whether a word has been learned"""
		if !word
			return
			
		const learned = {...state.user_learned || {}}
		
		if learned.hasOwnProperty(word)
			delete learned[word]
		else
			learned[word] = yes
		
		set('user_learned', learned)
		return !!learned[word]
	
	def hasLearnedWord word
		# Check if a word has been learned"""
		if !word
			return false
		
		# Use proper Imba optional chaining syntax (.. is optional chaining in Imba)
		return !!state..user_learned[word]
	
	def updateProgress library
		# Update learning progress based on library data"""
		if !library
			console.warn('Cannot update progress: library data is missing')
			return
		
		try
			# Create a deep copy of the current progress to modify
			const progress = deepCopy(state.progress || {})
			progress.library = progress.library || {}
			
			# Calculate library-level progress
			let libraryWeightLearned = 0
			let libraryUniqueWords = 0
			let libraryUniqueWordsLearned = 0
			
			const learned = state.user_learned || {}
			
			# Process collections
			if library.collections
				for own colKey, collection of library.collections
					progress[colKey] = progress[colKey] || {}
					let colWeightLearned = 0
					let colUniqueWords = collection.unique || 0
					let colUniqueWordsLearned = 0
					
					# Process words in this collection
					for own word, wordData of collection.words || {}
						if learned[word]
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
						if learned[word]
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
						if learned[word]
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
			libraryUniqueWordsLearned = Object.keys(learned).length
			
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
			
			# Set the updated progress
			set('progress', progress)
			return progress
		catch error
			console.error("Error updating progress:", error)
			return state.progress
	
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