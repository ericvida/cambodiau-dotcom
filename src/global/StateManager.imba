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
		if (result === null) || (result === undefined) || !result.hasOwnProperty(key)
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
export class StateManager
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
		# NOTE.gray("Initializing Store...")
		throttledSync = throttle(self.pushLocalToIDB.bind(self), 7500) # Throttle to every 7.5 seconds for better transaction handling
		initState!
		initInstantDB!
		subscribeToAuthChanges!
	
	# ========================
	# Initialization methods
	# ========================
	
	def initState
		# Initialize the state with defaults, then UI preferences from local storage if available
		resetState!
		
		try
			if imba.locals[LOCAL_DB_NAME]
				# Only restore UI preferences from local storage initially
				# User data will be overwritten by InstantDB when available
				const savedState = imba.locals[LOCAL_DB_NAME]
				
				# List of UI preferences to restore from local storage
				const uiPreferences = [
					'dark', 
					'ipa', 
					'lesson_nav', 
					'phrase_nav', 
					'right_bar', 
					'writing_system']
				
				# Restore only UI preferences
				for pref in uiPreferences
					if savedState[pref] != undefined
						state[pref] = savedState[pref]
				
				# If user is logged in from a previous session, temporarily restore progress
				# This will create a smoother experience until we get data from InstantDB
				if savedState.user..id
					NOTE.gray("Found saved user session, temporarily restoring progress")
					
					# These will be overridden once we get data from InstantDB
					if savedState.profileId
						state.profileId = savedState.profileId
					
					# Temporarily keep local progress data until remote is loaded
					if savedState.user_words
						state.user_words = deepCopy(savedState.user_words)
						
					if savedState.progress_khmer
						state.progress_khmer = deepCopy(savedState.progress_khmer)
						
					if savedState.progress_phonetic
						state.progress_phonetic = deepCopy(savedState.progress_phonetic)
				
				NOTE.gray("Restored UI preferences from local storage")
			else
				NOTE.gray("No local storage data found, using defaults")
		catch error
			console.error("Error initializing state:", error)
			# No need to reset state again as we already did that
	
	def resetState
		# Reset the state to default values"""
		state = deepCopy(DEFAULT_STATE)
		state.updated_progress_at = Date.now!
		saveToLocalStorage!
	
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
					state.error = auth.error.message
				elif auth.user
					const isNewLogin = !state.user || state.user.id !== auth.user.id
					state.user = auth.user
					state.login? = yes
					
					# Always subscribe to user data
					subscribeToUserData!
					
					# Always force a profile sync on both new login and browser refresh
					# This ensures we have the latest data in both scenarios
					NOTE.gray("User authenticated, forcing profile sync")
					getUserProfile().then(do(result)
							NOTE.gray("Profile sync complete:", result)
							
							# Critical: calculate progress after sync to update the UI
							if global.PROGRESS && global.LIBRARY
								NOTE.gray("Recalculating progress after profile sync")
								global.PROGRESS.calcProgress(global.LIBRARY)
								imba.commit!
						).catch(do(error)
							console.error("Profile sync failed:", error)
						)
				else
					state.login? = no
					state.user = null
				
				imba.commit!
				saveToLocalStorage!
		catch error
			console.error("Error subscribing to auth changes:", error)
	
	def subscribeToUserData
		# Subscribe to user-specific data in InstantDB"""
		if !state.user..id
			console.warn('User is not logged in. Skipping user data subscription.')
			return
			
		try
			const userId = state.user.id
			NOTE.gray('Subscribing to user data for user:', userId)
			
			const query = 
				profile:
					$:
						where:
							"$users.id": userId
							
			const unsub = instant.subscribeQuery query, do(resp)
				if resp.error
					console.error('Error in user data subscription:', resp.error.message)
					state.error = resp.error.message
				elif resp.data
					# Always prioritize remote data first
					NOTE.green("Received remote data: {Object.keys(resp.data)}")
					# Process profile data - this is critical for multi-browser sync
					if resp.data.profile
						const profiles = Object.values(resp.data.profile || {})
						WW resp.data.profile[0].user_words
						if profiles.length > 0
							# Found existing profile, use the first one
							NOTE.gray('Found existing profile for user')
							# Store the profile ID to prevent creating duplicates
							state.profileId = profiles[0].id
							
							# Apply remote data - this ensures we always have the latest
							pullFromCloudToLocal(resp.data)
							
							# Critical: Update UI and recalculate progress after sync
							if global.PROGRESS && global.LIBRARY
								NOTE.gray("Recalculating progress after real-time update")
								global.PROGRESS.calcProgress(global.LIBRARY)
								
							imba.commit!
						else
							# No profile found, we'll create one on first sync
							NOTE.gray('No existing profile found for user, will create on first sync')
							# Reset profile ID to ensure we create a new one
							state.profileId = null
							
							# Immediate sync to create profile if we have any data
							if (Object.keys(state.user_words || {}).length > 0) or (state.progress_khmer..library..weight_learned > 0) or (state.progress_phonetic..library..weight_learned > 0)
								NOTE.gray('Found local data, syncing to create profile')
								# Force a sync to create the profile
								queueForPushToIDB('writing_system', state.writing_system)
								pushLocalToIDB!
					
					# Save to local storage as a backup
					saveToLocalStorage!
				else
					console.warn('Unexpected response structure:', resp)
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
		saveToLocalStorage!
		
		# Queue for sync if signed in
		if state.user..id
			queueForPushToIDB(path, value)
		
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
		# Add an item to the sync queue"""
		syncQueue.push({ path, value, timestamp: Date.now! })
		throttledSync!
	
	def pushLocalToIDB
		# Sync local changes to InstantDB using optimized merging and batching"""
		if !state.user..id || isSyncing || syncQueue.length === 0
			return
			
		isSyncing = true
		const timestamp = Date.now!
		
		try
			# Organize changes by category to optimize transaction size
			const updates = {
				metadata: {
					updated_progress_at: timestamp,
					writing_system: state.writing_system
				},
				user_words: {},
				progress_khmer: {},
				progress_phonetic: {}
			}
			
			# List of properties that should NOT be synced to InstantDB
			const localOnlyProps = ['active_word', 'cid', 'lid', 'pid', 'wid']
			let hasMetadataChanges = false
			let hasUserWordChanges = false
			let hasKhmerProgressChanges = false
			let hasPhoneticProgressChanges = false
			
			# Process sync queue and categorize changes
			for item in syncQueue
				const pathParts = item.path.split('.')
				const rootProperty = pathParts[0]
				
				# Skip local-only properties
				if localOnlyProps.includes(rootProperty)
					continue
				
				# Handle different types of data differently for optimal syncing
				if rootProperty === 'user_words'
					hasUserWordChanges = true
					# Just flag it - we'll sync the whole object since it's usually small
				elif rootProperty === 'progress_khmer'
					hasKhmerProgressChanges = true
					# We'll build specific merge paths later
				elif rootProperty === 'progress_phonetic'
					hasPhoneticProgressChanges = true
					# We'll build specific merge paths later
				else
					# Handle metadata and other simple properties
					hasMetadataChanges = true
					updates.metadata[rootProperty] = item.value
			
			if !state.profileId
				# Check if the user already has a profile before creating a new one
				const checkProfile = new Promise do(resolve, reject)
					const userId = state.user.id
					# Query for user profile directly to check if it exists
					instant.subscribeQuery({profile:{$:{where:{"$users.id": userId }}}},
						do(resp)
							if resp.error
								console.error("Error checking for existing profile:", resp.error)
								reject(resp.error)
							else
								const profiles = Object.values(resp.data.profile || {})
								if profiles.length > 0
									# Found existing profile
									resolve({exists: true, profile: profiles[0]})
								else
									# No profile found
									resolve({exists: false})
					)
				
				# Process the profile check result
				checkProfile.then(do(result)
					if result.exists
						# Use the existing profile
						NOTE.gray("Found existing profile for user, using it instead of creating a new one")
						state.profileId = result.profile.id
						# Continue with the sync in the next cycle
						isSyncing = false
						pushLocalToIDB!
					else
						# Create a new profile since none exists
						const profileId = id!
						NOTE.gray("Creating new profile ID:", profileId, "for user:", state.user.id)
						
						# For new profiles, we send everything at once
						const fullProfile = {
							...updates.metadata,
							id: profileId,
							created_at: timestamp
						}
						
						# Add user words and progress data if available
						if state.user_words
							fullProfile.user_words = state.user_words
						if state.progress_khmer
							fullProfile.progress_khmer = state.progress_khmer
						if state.progress_phonetic
							fullProfile.progress_phonetic = state.progress_phonetic
							
						# Create the profile in a single transaction
						instant.transact(
							tx.profile[profileId].update(fullProfile).link({$users: state.user.id})
						).then(do(_result)
							state.profileId = profileId
							state.last_sync_at = timestamp
							syncQueue = []
							saveToLocalStorage!
							NOTE.gray("Successfully created profile in InstantDB")
						).catch(do(error)
							console.error("Error creating profile in InstantDB:", error)
							
							# Check for the unique constraint violation error
							if typeof error === 'object' && error.message && error.message.includes("$users is a unique attribute")
								NOTE.gray("Detected unique constraint violation - user already has a profile. Attempting to recover...")
								# Try to find the existing profile
								getUserProfile().then(do(result)
									if result.success
										NOTE.gray("Successfully recovered by finding existing profile")
									else
										console.warn("Could not find existing profile after constraint error")
								).catch(do(recoverError)
									console.error("Recovery attempt after constraint error failed:", recoverError)
								)
						).finally(do
							isSyncing = false
						)
				).catch(do(error)
					console.error("Error checking for existing profile:", error)
					isSyncing = false
				)
				
				return
			
			# If we have an existing profile, use batched transactions with merges
			const batchSize = 10 # Adjust based on payload sizes
			const batches = []
			let currentBatch = []
			
			# 1. Metadata changes - these are usually small and can be processed together
			if hasMetadataChanges
				currentBatch.push(tx.profile[state.profileId].merge(updates.metadata))
				
				# Add this batch if it's full
				if currentBatch.length >= batchSize
					batches.push([...currentBatch])
					currentBatch = []
			
			# 2. User words changes - usually smaller than progress data
			if hasUserWordChanges && state.user_words
				currentBatch.push(tx.profile[state.profileId].merge({user_words: state.user_words}))
				
				# Add this batch if it's full
				if currentBatch.length >= batchSize
					batches.push([...currentBatch])
					currentBatch = []
			
			# 3. Progress data - use targeted updates when possible to reduce payload size
			if hasKhmerProgressChanges && state.progress_khmer
				# For writing system toggle, we only need basic progress stats
				# not the full progress object which could be very large
				if updates.metadata.writing_system === 'khmer'
					# Just update the library-level stats for the UI
					const khmerStats = { 
						library: state.progress_khmer.library || {} 
					}
					currentBatch.push(tx.profile[state.profileId].merge({progress_khmer: khmerStats}))
				else
					# If other progress changes, sync the full object
					currentBatch.push(tx.profile[state.profileId].merge({progress_khmer: state.progress_khmer}))
			
			if hasPhoneticProgressChanges && state.progress_phonetic
				# Similar approach for phonetic progress
				if updates.metadata.writing_system === 'phonetic'
					# Just update the library-level stats for the UI
					const phoneticStats = { 
						library: state.progress_phonetic.library || {} 
					}
					currentBatch.push(tx.profile[state.profileId].merge({progress_phonetic: phoneticStats}))
				else
					# If other progress changes, sync the full object
					currentBatch.push(tx.profile[state.profileId].merge({progress_phonetic: state.progress_phonetic}))
				
			# Add any remaining changes to the batches
			if currentBatch.length > 0
				batches.push(currentBatch)
			
			# No changes to process
			if batches.length === 0
				isSyncing = false
				return
				
			# Process batches with retry logic
			const maxRetries = 3
			let retryCount = 0
			let currentBatchIndex = 0
			
			const processBatch = do
				if currentBatchIndex >= batches.length
					# All batches processed successfully
					state.last_sync_at = timestamp
					syncQueue = []
					saveToLocalStorage!
					NOTE.gray("Successfully synced all batches with InstantDB")
					isSyncing = false
					return
					
				NOTE.gray("Processing batch " + (currentBatchIndex + 1) + " of " + batches.length)
				
				instant.transact(batches[currentBatchIndex]).then( do(_result)
						# Move to next batch
						currentBatchIndex++
						retryCount = 0  # Reset retry counter for next batch
						processBatch!  # Process next batch
					).catch do(error)
						console.error("Error processing batch:", error)
						
						# Check for unique constraint violation
						if (error..message || "").includes("$users is a unique attribute")
							NOTE.gray("Detected unique constraint violation during batch processing. Attempting to recover...")
							# Try to find the existing profile
							getUserProfile().then(do(result)
								if result.success
									NOTE.gray("Successfully recovered by finding existing profile")
									# Resume processing from the next batch
									currentBatchIndex++
									retryCount = 0
									processBatch!
								else
									console.warn("Could not find existing profile after constraint error")
									isSyncing = false
							).catch(do(recoverError)
								console.error("Recovery attempt after constraint error failed:", recoverError)
								isSyncing = false
							)
						# Check for timeout errors - using a simpler condition
						elif retryCount < maxRetries && (error..message || "").includes('timeout')
							retryCount++
							NOTE.gray("Batch timed out. Retrying... (Attempt " + retryCount + " of " + maxRetries + ")")
							# Try again with exponential backoff
							setTimeout(&, 1000 * (retryCount * 2)) do
								processBatch!
						else
							# Skip this batch after max retries or non-timeout errors
							console.error("Failed to process batch after " + retryCount + " retries, skipping...")
							currentBatchIndex++
							retryCount = 0
							processBatch!  # Try next batch
			
			# Start processing batches
			processBatch!
		catch error
			console.error("Error preparing sync with InstantDB:", error)
			isSyncing = false
			# Display a user-friendly error message if possible
			const errorMsg = error..message || "An unknown error occurred during synchronization"
			state.error = errorMsg
	
	def pullFromCloudToLocal data
		# Process and apply remote data - remote data is the source of truth"""
		if !data
			console.warn("Cannot sync from remote: No data provided")
			return
			
		try
			# Handle profile data if present
			if data.profile
				for own key, profile of Object.values(data.profile)
					# Only process data for the current user
					if profile.$users && profile.$users.includes(state.user.id)
						NOTE.gray("Processing remote profile data for user:", state.user.id)
						
						# Store the profile ID for future updates
						state.profileId = profile.id
						
						# Prioritize remote data for user words - REPLACE rather than merge
						if profile.user_words
							state.user_words = deepCopy(profile.user_words)
						else
							console.warn("No user_words data in profile")
						
						# Prioritize remote data for khmer progress - REPLACE rather than merge
						if profile.progress_khmer
							NOTE.gray("Applying remote progress_khmer data:", 
								profile.progress_khmer.library..weight_learned, "weight_learned")
							state.progress_khmer = deepCopy(profile.progress_khmer)
						else
							console.warn("No progress_khmer data in profile")
							
						# Prioritize remote data for phonetic progress - REPLACE rather than merge
						if profile.progress_phonetic
							NOTE.gray("Applying remote progress_phonetic data:", 
								profile.progress_phonetic.library..weight_learned, "weight_learned")
							state.progress_phonetic = deepCopy(profile.progress_phonetic)
						else
							console.warn("No progress_phonetic data in profile")
						
						# Get writing system preference from server
						if profile.writing_system
							NOTE.gray("Setting writing system from remote:", profile.writing_system)
							state.writing_system = profile.writing_system
							
						# Update last received timestamp
						state.last_sync_at = profile.updated_progress_at || Date.now!
						
						# Store created_at if available
						if profile.created_at
							state.created_at = profile.created_at
						
						NOTE.gray("Remote data applied successfully")
						
						# Force a UI update and update display for current writing system
						if PROGRESS && LIBRARY
							NOTE.gray("Updating display for writing system:", state.writing_system)
							PROGRESS.updateDisplayFromSystem(state.writing_system, LIBRARY)
							# Also manually trigger a progress calculation to ensure consistency
							PROGRESS.calcProgress(global.LIBRARY)
							
						imba.commit!
			else
				console.warn("No profile data found in remote data")
			
			# Save changes to local storage as a backup
			saveToLocalStorage!
		catch error
			console.error("Error processing remote data:", error)
	
	def getUserProfile
		# Force a sync with InstantDB to ensure we have the latest data
		# This is useful when opening the app in a new browser or on refresh
		if !state.user..id
			console.warn("Cannot force sync: No user logged in")
			return Promise.reject("No user logged in")
			
		NOTE.gray("Forcing profile sync to ensure latest data")
		
		# Clear sync queue to prevent conflicts
		syncQueue = []
		
		# Create a promise to track completion
		return new Promise do(resolve, reject)
			const userId = state.user.id
			let unsubscriber = null
			
			# Query for user profile directly with subscription that we'll clean up after
			unsubscriber = instant.subscribeQuery({profile:{$:{where:{"$users.id": userId }}}},
				do(resp)
					if resp.error
						console.error("Error fetching profile:", resp.error)
						# Unsubscribe to prevent memory leaks
						if unsubscriber
							unsubscriber()
						reject(resp.error)
					elif resp.data
						const profiles = Object.values(resp.data.profile || {})
						
						if profiles.length > 0
							# Found existing profile
							NOTE.gray("Found profile in force sync, applying data")
							# Save the profileId to prevent duplicate profile creation
							state.profileId = profiles[0].id
							
							# Apply the remote data - this is crucial
							pullFromCloudToLocal(resp.data)
							
							# Update UI with current writing system
							if global.PROGRESS && global.LIBRARY
								NOTE.gray("Updating display from writing system:", state.writing_system)
								global.PROGRESS.updateDisplayFromSystem(state.writing_system)
								# Also recalculate progress to ensure everything is up-to-date
								global.PROGRESS.calcProgress(global.LIBRARY)
							
							# Save state to local storage
							saveToLocalStorage!
							
							# Force a UI update
							imba.commit!
							
							# Unsubscribe to prevent memory leaks
							if unsubscriber
								unsubscriber()
							
							# Resolve with success
							resolve({ success: true, message: "Profile synced successfully" })
						else
							# No profile found, but we still need to clean up
							NOTE.gray("No profile found during force sync")
							# Unsubscribe to prevent memory leaks
							if unsubscriber
								unsubscriber()
							resolve({ success: false, message: "No profile found" })
					else
						console.warn("Unexpected response structure:", resp)
						# Unsubscribe to prevent memory leaks
						if unsubscriber
							unsubscriber()
						reject("Unexpected response structure")
			)
	
	# ========================
	# Authentication methods
	# ========================
	
	def sendMagicCode
		# Send a magic code for authentication"""
		if !state.email_input
			console.error('Email is required to send a magic code.')
			return Promise.reject('Email is required')
		NOTE.gray('Sending magic code to:', state.email_input)
		state.sentCode? = true
		imba.commit!
		saveToLocalStorage!
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
		
		return instant.auth.signInWithMagicCode({ email: state.email_input, code }).then(do
				state.email_input = ''
				state.sentCode? = false
				saveToLocalStorage!
				return true
			).catch(do(error)
				console.error('Error logging in with magic code:', error)
				state.error = error.message || 'Failed to login'
				return Promise.reject(error)
			)
	
	def logout
		# Log out the current user"""
		NOTE.gray('Logging out user')
		
		return instant.auth.signOut().then(do
				state.user = null
				state.email_input = ''
				state.profileId = null  # Clear profile ID on logout
				saveToLocalStorage!
				return true
			).catch(do(error)
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
			
		# Avoid unnecessary updates if system hasn't changed
		if system == state.writing_system
			return system
		
		# Direct state update to reduce double updates
		state.writing_system = system
		
		# Only persist and queue for sync after both state and UI are updated
		saveToLocalStorage!
		
		# Update UI immediately without waiting for sync
		if global.PROGRESS
			global.PROGRESS.updateDisplayFromSystem(system)
		else
			console.warn('PROGRESS global not available for UI update')
		
		# Queue for sync after UI update is complete
		if state.user..id
			queueForPushToIDB('writing_system', system)
			
		return system
	
	def toggleWritingSystem
		# Toggle between 'khmer' and 'phonetic' writing systems
		const newSystem = state.writing_system === 'khmer' ? 'phonetic' : 'khmer'
		
		NOTE.gray("Toggling writing system from {state.writing_system} to {newSystem}")
		return setWritingSystem(newSystem)
	
	def getCurrentWritingSystem
		# Get the current writing system with data validation
		# This also ensures progress display is updated correctly
		const system = state.writing_system || 'khmer'
		
		# Ensure progress data is updated for the current system if needed
		if global.LIBRARY && global.PROGRESS
			updateProgress(global.LIBRARY, system)
		
		return system
	
	# ========================
	# Learning progress tracking
	# ========================
	
	def toggleLearnedWord word, writing_system = null
		# Toggle whether a word has been learned
		# writing_system can be 'khmer', 'phonetic', or null (uses current setting)
		if !word
			NOTE.gray('STATE_MANAGER.toggleLearnedWord','Word is required to toggle learned status.')
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
		
		# If both writing systems are false, remove the word entirely
		if !user_words[word].khmer and !user_words[word].phonetic
			delete user_words[word]
			
		# Update state
		set('user_words', user_words)
		LL user_words
		if state.user..id
			queueForPushToIDB('user_words', user_words)
			pushLocalToIDB!
	
	def hasLearnedWord word, writing_system = null
		# Check if a word has been learned
		# writing_system can be 'khmer', 'phonetic', or null (uses current setting)
		if !word
			return false
		
		# Determine which writing system to check, with fallback to default
		const system = writing_system || state.writing_system || 'khmer'
		
		# Check if the word is learned in the specified writing system
		return state.user_words..[word]..[system] === true
	
	def updateProgress library, writing_system = null
		# Update learning progress based on library data"""
		if !library
			console.warn('Cannot update progress: library data is missing')
			return
		
		try
			# Use specified writing system or get current one, with fallback to default
			const system = writing_system || state.writing_system || 'khmer'
			
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
