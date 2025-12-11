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
	writing_system: 'source' # 'source' or 'phonetic'
	
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
	profile_id: null # ID of the user's profile in InstantDB
	# Timestamps for sync management
	updated_progress_at: 0
	last_sync_at: 0
	created_at: 0
}

### Utility functions
###
def deepCopy obj
	return JSON.parse(JSON.stringify(obj))

def safeAccessToNestedObjectProperty obj, path, defaultValue = null
	# Safely access nested object properties via a path string
	# Example: safeAccessToNestedObjectProperty({a: {b: {c: 1}}}, 'a.b.c') => 1
	if !obj
		return defaultValue
	
	const keys = path.split('.')
	let result = obj
	
	for key in keys
		if (result === null) or (result === undefined) or !result.hasOwnProperty(key)
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
export class CloudManager
	# Properties
	prop state = {} # Main state object
	prop instant = {} # InstantDB instance
	prop syncQueue = [] # Queue for changes that need to be synced
	prop isSyncing = false # Flag to prevent simultaneous syncs
	prop initialized = false # Flag to track initialization
	prop syncTimeout = null # Reference to setTimeout for throttling
	
	def pullFromCloud
		# Force a sync with InstantDB - optimistic, minimal approach
		if !UI.user..id
			return NOTE.red('User not logged in, cannot pull from cloud')
		# NOTE.green('Pulling from cloud')
		# Create a promise to track completion
		const userId = UI.user.id
		let resp = await instant.queryOnce(
			profile:
				$:
					where:
						"$users.id": userId
		)
		
		# Handle data if available
		if resp.data
			const profiles = Object.values(resp.data.profile or {})
			if profiles.length > 0
				# Apply data directly
				UI.profile_id = profiles[0].id
				# return resp.data.profile[0]
				
		let cloud = resp.data.profile[0]
		# Deep copy important data to avoid reference issues
		UI.user_words = JSON.parse(JSON.stringify(cloud['user_words']))
		UI.progress_khmer = JSON.parse(JSON.stringify(cloud['progress_khmer']))
		UI.progress_phonetic = JSON.parse(JSON.stringify(cloud['progress_phonetic']))
		UI.last_progress_update = cloud['last_progress_update']
	# Constructor
	def constructor
		NOTE.gray("Initializing Store...")
		# throttledSync = throttle(self.pushLocalToIDB.bind(self), 7500) # Throttle to every 7.5 seconds for better transaction handling
		initInstantDB!
		subscribeToAuthChanges!
	
	# ========================
	# Initialization methods
	# ========================
	
	def resetState
		# Reset the state to default values"""
		state = deepCopy(DEFAULT_STATE)
		UI.updated_progress_at = Date.now!
		# saveToLocalStorage!
	
	def initInstantDB
		# Initialize the InstantDB connection"""
		try
			instant = init({ appId: INSTANT_APP_ID })
			NOTE.gray("InstantDB initialized")
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
					UI.error = auth.error.message
				elif auth.user
					const isNewLogin = !UI.user or UI.user.id !== auth.user.id
					UI.user = auth.user
					UI.auth = 'user'
					
					# Always subscribe to user data
					subscribeToUserData!
					
					# Always force a profile sync on both new login and browser refresh
					# This ensures we have the latest data in both scenarios
					NOTE.gray("User authenticated, forcing profile sync")
					getUserProfile().then(do(result)
							NOTE.gray("Profile sync complete:", result)
							
							# Critical: calculate progress after sync to update the UI
							if LIBRARY
								NOTE.gray("Recalculating progress after profile sync")
								calcProgress(LIBRARY, UI.writing_system)
								imba.commit!
						).catch(do(error)
							console.error("Profile sync failed:", error)
						)
				else
					UI.auth = 'guest'
					UI.user = null
				
				imba.commit!
				# saveToLocalStorage!
		
		catch error
			console.error("Error subscribing to auth changes:", error)
	
	def subscribeToUserData
		# Subscribe to user-specific data in InstantDB"""
		if !UI.user..id
			console.warn('User is not logged in. Skipping user data subscription.')
			return
		try
			const userId = UI.user.id
			NOTE.gray('Subscribing to user data for user:', userId)
			
			const query = 
				profile:
					$:
						where:
							"$users.id": userId
							
			const unsub = instant.subscribeQuery query, do(resp)
				if resp.error
					console.error('Error in user data subscription:', resp.error.message)
					UI.error = resp.error.message
				elif resp.data
					# Always prioritize remote data first
					# Process profile data - this is critical for multi-browser sync
					if resp.data.profile
						const profiles = Object.values(resp.data.profile or {})
						if profiles.length > 0
							# Found existing profile, use the first one
							NOTE.gray('Found existing profile for user')
							# Store the profile ID to prevent creating duplicates
							UI.profile_id = profiles[0].id
							let data = profiles[0]
							UI.profile_id = data.id
							UI.progress_khmer = data.progress_khmer
							UI.progress_phonetic = data.progress_phonetic
							UI.user_words = data.user_words
							# Apply remote data - this ensures we always have the latest
							# TODO: making sure profile data is up to date
							pullFromCloud(resp.data)
							
							# Critical: Update UI and recalculate progress after sync
							if LIBRARY
								NOTE.gray("Recalculating progress after real-time update")
								calcProgress(LIBRARY)
							
							imba.commit!
						else
							# No profile found, we'll create one on first sync
							NOTE.gray('No existing profile found for user, will create on first sync')
							# Reset profile ID to ensure we create a new one
							UI.profile_id = null
							
							# Immediate sync to create profile if we have any data
							if (Object.keys(UI.user_words or {}).length > 0) or (UI.progress_khmer..library..weight_learned > 0) or (UI.progress_phonetic..library..weight_learned > 0)
								NOTE.gray('Found local data, syncing to create profile')
								# Force a sync to create the profile
								set('writing_system', UI.writing_system)
								pushToCloud!
					
					# Save to local storage as a backup
					# saveToLocalStorage!
				else
					console.warn('Unexpected response structure:', resp)
		catch error
			console.error("Error subscribing to user data:", error)
	
	# ========================
	# State Management
	# ========================
	
	def get path, defaultValue = null
		return UI[key] or defaultValue
	
	def set key, value
		UI[key] = value
		# Update timestamp and persist
		UI.updated_progress_at = Date.now!
		# pushToCloud!
		
	def saveToLocalStorage
		# Save the state to local storage"""
		try
			imba.locals[LOCAL_DB_NAME] = deepCopy(state)
		catch error
			console.error("Error persisting state to local storage:", error)
	
	# ========================
	# Synchronization with InstantDB
	# ========================
	
	def queueForPushToIDB path, value
		void
		# Add an item to the sync queue"""
		# syncQueue.push({ path, value, timestamp: Date.now! })
		# throttledSync!
	
	def pushToCloud
		if !UI.user..id or UI.profile_id
			return
		
		let package_for_cloud = {
			user_words: UI.user_words,
			progress_khmer: UI.progress_khmer,
			progress_phonetic: UI.progress_phonetic,
			last_progress_update: Date.now()
		}
		try
			await instant.transact(tx.profile[UI.profile_id].update(package_for_cloud))
		catch error
			EE "CLOUD_MANAGER.pushToCloud! error: {error}"
		
	def pushLocalToIDB
		void
		LL UI_keys
		# # Push local changes to InstantDB optimistically with minimal error handling
		# if !UI.user..id or !UI.profile_id
		# 	isSyncing = false
		# 	return
			
		# if isSyncing
		# 	return
			
		# isSyncing = true
		# const timestamp = Date.now!
		
		# # Create a simple update with all the current state
		# const update = {
		# 	updated_progress_at: timestamp,
		# 	writing_system: UI.writing_system,
		# 	user_words: UI.user_words,
		# 	progress_khmer: UI.progress_khmer,
		# 	progress_phonetic: UI.progress_phonetic
		# }
		
		# # Send the update optimistically
		# instant.transact(tx.profile[UI.profile_id].update(update))
		# 	.then(do
		# 		# Success - clear sync queue and update timestamp
		# 		syncQueue = []
		# 		UI.last_sync_at = timestamp
		# 		isSyncing = false
		# 	)
		# 	.catch(do
		# 		# Just reset syncing flag on error
		# 		isSyncing = false
		# 	)
	
	
	
	def getUserProfile
		# Force a sync with InstantDB - optimistic, minimal approach
		if !UI.user..id
			return Promise.resolve({ success: false })
			
		# Create a promise to track completion
		return new Promise do(resolve)
			const userId = UI.user.id
			let resp = await instant.queryOnce(
				profile:
					$:
						where:
							"$users.id": userId
			)
			# Handle data if available
			if resp.data
				const profiles = Object.values(resp.data.profile or {})
				if profiles.length > 0
					# Apply data directly
					UI.profile_id = profiles[0].id
					pullFromCloud(resp.data)
					
					# Update UI
					if LIBRARY
						PROGRESS.updateDisplayFromSystem(UI.writing_system)
						calcProgress(LIBRARY, UI.writing_system)
	# ========================
	# Authentication methods
	# ========================
	
	def sendMagicCode email_input
		# LL email_input, UI.email_input
		# Send a magic code for authentication"""

		if !email_input
			EE 'Email is required to send a magic code.'
		
		NOTE.gray('Sending magic code to:', UI.email_input)
		try
			instant.auth.sendMagicCode({ email: email_input })
		catch error
			console.error('Error sending magic code:', error)
			return Promise.reject(error)
		finally
			UI.user = 'code sent'
			
	
	def loginWithCode code
		# Login with a magic code"""
		if !UI.email_input or !code
			console.error('Both email and code are required to sign in.')
			return Promise.reject('Email and code required')
		
		return instant.auth.signInWithMagicCode({ email: UI.email_input, code }).then(do
				UI.email_input = ''
				UI.sentCode? = false
				# saveToLocalStorage!
				return true
			).catch(do(error)
				console.error('Error logging in with magic code:', error)
				UI.error = error.message or 'Failed to login'
				return Promise.reject(error)
			)
	
	def logout
		# Log out the current user"""
		NOTE.gray('Logging out user')
		
		return instant.auth.signOut().then(do
				UI.user = null
				UI.email_input = ''
				UI.profile_id = null  # Clear profile ID on logout
				# saveToLocalStorage!
				return true
			).catch(do(error)
				console.error('Error during logout:', error)
				UI.error = error.message or 'Failed to logout'
				return Promise.reject(error)
			)
	
	# ========================
	# User preferences
	# ========================
	
	def toggleDarkMode
		# Toggle dark mode"""
		set('dark', !UI.dark)
		return UI.dark
	
	def toggleIpa
		# Toggle IPA display"""
		set('ipa', !UI.ipa)
		return UI.ipa
	
	def toggleLessonNav
		# Toggle lesson navigation"""
		set('lesson_nav', !UI.lesson_nav)
		return UI.lesson_nav
	
	def togglePhraseNav
		# Toggle phrase navigation"""
		set('phrase_nav', !UI.phrase_nav)
		return UI.phrase_nav
	
	def toggleRightBar
		# Toggle right sidebar"""
		set('right_bar', !UI.right_bar)
		return UI.right_bar
		
	def setWritingSystem system
		# Set writing system to 'source' or 'phonetic'
		if !system or (system isnt 'source' and system isnt 'phonetic')
			console.warn('Invalid writing system:', system)
			return UI.writing_system or 'source'
			
		# Avoid unnecessary updates if system hasn't changed
		if system == UI.writing_system
			return system
		
		# Direct state update to reduce double updates
		UI.writing_system = system
		
		# Only persist and queue for sync after both state and UI are updated
		# saveToLocalStorage!
		
		# Update UI immediately without waiting for sync
		if PROGRESS
			PROGRESS.updateDisplayFromSystem(system)
		else
			console.warn('PROGRESS global not available for UI update')
		
		# Queue for sync after UI update is complete
		if UI.user..id
			set('writing_system', system)
			
		return system
	
	def toggleWritingSystem
		# Toggle between 'source' and 'phonetic' writing systems
		const newSystem = UI.writing_system === 'source' ? 'phonetic' : 'source'
		
		NOTE.gray("Toggling writing system from {UI.writing_system} to {newSystem}")
		return setWritingSystem(newSystem)
	
	def getCurrentWritingSystemProgress
		# Get the current writing system with data validation
		# This also ensures progress display is updated correctly
		const system = UI.writing_system or 'source'
		
		# Ensure progress data is updated for the current system if needed
		if LIBRARY
			calcProgress(LIBRARY, UI.writing_system)
		
		return system
	
	# ========================
	# Learning progress tracking
	# ========================
	
	def toggleLearnedWord word, writing_system = null
		# Toggle whether a word has been learned
		# writing_system can be 'source', 'phonetic', or null (uses current setting)
		if !word
			NOTE.gray('CLOUD_MANAGER.toggleLearnedWord','Word is required to toggle learned status.')
			return

		# Determine which writing system to toggle, with fallback to default
		const system = writing_system or UI.writing_system or 'source'
		
		if system isnt 'source' and system isnt 'phonetic'
			console.warn('Invalid writing system:', system)
			return
			
		const user_words = {...UI.user_words or {}}
		
		# Initialize the word entry if it doesn't exist
		if !user_words[word]
			user_words[word] = { khmer: no, phonetic: no }
			
		# Toggle the writing system
		user_words[word][system] = !user_words[word][system]
		
		# If both writing systems are false, remove the word entirely
		if !user_words[word].khmer and !user_words[word].phonetic
			delete user_words[word]
			
		# Update state
		set('user_words', user_words)
		
		# calculate progress
		if LIBRARY
			# LL state["progress_{system}"]
			calcProgress(system)
			UI["progress_{system}"]
			
		else
			NOTE.red('no library')
		
		# persist to iDB
			
		
		
		# After toggling the word, ensure local state is updated
		# CLOUD_MANAGER.pullFromCloud!
		imba.commit!
	
	
	def hasLearnedWord word, writing_system = null
		# Check if a word has been learned
		# writing_system can be 'source', 'phonetic', or null (uses current setting)
		if !word
			return false
		
		# Determine which writing system to check, with fallback to default
		const system = writing_system or UI.writing_system or 'source'
		
		# Check if the word is learned in the specified writing system
		return UI.user_words..[word]..[system] is true
	
	def calcProgress writing_system = null
		# Update learning progress based on library data"""
		let library = null
		if LIBRARY
			library = LIBRARY
		else
			console.warn('Cannot update progress: library data is missing')
		
		try
			# Use specified writing system or get current one, with fallback to default
			const system = writing_system or UI.writing_system or 'source'
			
			# Select the appropriate progress object based on writing system
			const progressKey = system === 'source' ? 'progress_khmer' : 'progress_phonetic'
			const progress = deepCopy(state[progressKey] or { library: {} })
			
			# Calculate library-level progress
			let libraryWeightLearned = 0
			let libraryUniqueWords = 0
			let libraryUniqueWordsLearned = 0
			
			# Get words learned in the current writing system
			const user_words = UI.user_words or {}
			# Create a helper function to check if a word is learned in the current system
			def isWordLearned word
				return user_words[word]..[system] === true
			
			# Process collections
			if library.collections
				for own colKey, collection of library.collections
					progress[colKey] = progress[colKey] or {}
					let colWeightLearned = 0
					let colUniqueWords = collection.unique or 0
					let colUniqueWordsLearned = 0
					
					# Process words in this collection
					for own word, wordData of collection.words or {}
						if isWordLearned(word)
							colWeightLearned += (wordData.weight or 0)
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
					progress[lesKey] = progress[lesKey] or {}
					let lesWeightLearned = 0
					let lesUniqueWords = lesson.unique or 0
					let lesUniqueWordsLearned = 0
					
					# Process words in this lesson
					for own word, wordData of lesson.words or {}
						if isWordLearned(word)
							lesWeightLearned += (wordData.weight or 0)
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
					progress[phrKey] = progress[phrKey] or {}
					let phrWeightLearned = 0
					let phrUniqueWords = phrase.unique or 0
					let phrUniqueWordsLearned = 0
					
					# Process words in this phrase
					for own word, wordData of phrase.words or {}
						if isWordLearned(word)
							phrWeightLearned += (wordData.weight or 0)
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
			libraryUniqueWords = library.unique or 0
			
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
		const system = writing_system or UI.writing_system or 'source'
		
		if system === 'source'
			return UI.progress_khmer or { library: { weight_learned: 0 } }
		elif system === 'phonetic'
			return UI.progress_phonetic or { library: { weight_learned: 0 } }
		else
			console.warn('Invalid writing system for progress:', system)
			return { library: { weight_learned: 0 } }
	
	def getTotalProgress
		# Get total progress combining both writing systems
		const khmerProgress = getProgressForSystem('source')
		const phoneticProgress = getProgressForSystem('phonetic')
		
		const totalProgress = {
			library: {
				weight_learned: (khmerProgress.library..weight_learned or 0) + (phoneticProgress.library..weight_learned or 0),
				unique_learned: (khmerProgress.library..unique_learned or 0) + (phoneticProgress.library..unique_learned or 0)
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
