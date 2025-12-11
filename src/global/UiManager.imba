import {tx, id} from '@instantdb/core'
export class Ui
	def constructor 
		self = imba.locals[LOCAL_DB_NAME]
		phonetic_alphabet = 'vida' # 'vida' | 'ipa'
		dark = false
		navbars = [true,true,true] # leftbar 1, leftbar 2, rightbar
		writing_system = 'source' # source | phonetic
		# user = null
		user = 'guest' # guest | code sent | {email}
		loading = false
		email_input = ''
		rt = {	
			cid: 0
			lid: 0
			pid: 0
			wid: 0
		}
		active_word = ''
		user_words = {}
		progress_khmer = {}
		progress_phonetic = {}
		last_progress_update = 0

export class UiManager
	# prop local = {}
	def constructor
		void
		# Load initial data from the store
		# CLOUD_MANAGER.pullFromCloud!
		
	def initLocal
		# Initialize local data from store"""
		CLOUD_MANAGER.pullFromCloud!
	
	def sendMagicCode email_input
		if UI.email_input isnt email_input
			# Update local state from store
			CLOUD_MANAGER.set('email_input', email_input)
			CLOUD_MANAGER.pullFromCloud!
		
		# Send magic code via the Store"""
		if !UI.email_input
			console.error('Email is required to send a magic code.')
			return
		
		CLOUD_MANAGER.set('email_input', UI.email_input)
		CLOUD_MANAGER.sendMagicCode()
		
		# Update local state from store
		CLOUD_MANAGER.pullFromCloud!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
		
	def logout
		# Log out via the Store"""
		CLOUD_MANAGER.logout!
			.then(do()
				CLOUD_MANAGER.pullFromCloud!
				if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
					imba.commit!
			)
			.catch(do(error)
				console.error('Logout failed:', error)
			)
	
	def loginWithCode magic_code
		# Log in with magic code via the Store, then force profile sync for multi-browser consistency"""
		if !email_input || !magic_code
			console.error('Both email and code are required to sign in.')
			return
		
		CLOUD_MANAGER.set('email_input', email_input)
		CLOUD_MANAGER.loginWithCode(magic_code)
			.then(do()
				NOTE.gray("Login successful, forcing profile sync to ensure data consistency")
				# Force a sync with InstantDB to ensure we have the latest data
				# This is especially important when using different browsers
				return CLOUD_MANAGER.getUserProfile!
			)
			.then(do(result)
				NOTE.gray("Profile sync result:", result)
				CLOUD_MANAGER.pullFromCloud!
				if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
					imba.commit!
			)
			.catch(do(error)
				console.error('Login or sync failed:', error)
			)
	
	def save
		# Save changes to the Store"""
		# Store automatically persists changes,
		# but we should refresh our local cache
		CLOUD_MANAGER.pullFromCloud!