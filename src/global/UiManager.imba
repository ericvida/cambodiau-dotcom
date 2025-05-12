import {tx, id} from '@instantdb/core'

export class UiManager
	prop local = {}
	
	def constructor
		# Load initial data from the store
		syncFromStore!
		
	def syncFromStore
		# Synchronize local state from the centralized store"""
		local = {
			updated_at: STATE_MANAGER.get('updated_progress_at', 0),
			last_sync_at: STATE_MANAGER.get('last_sync_at', 0),
			cid: STATE_MANAGER.get('cid', 0),
			lid: STATE_MANAGER.get('lid', 0),
			pid: STATE_MANAGER.get('pid', 0),
			wid: STATE_MANAGER.get('wid', 0),
			active_word: STATE_MANAGER.get('active_word', 'ជា'),
			# Deep copy important data to avoid reference issues
			user_words: JSON.parse(JSON.stringify(STATE_MANAGER.get('user_words', {}))),
			progress_khmer: JSON.parse(JSON.stringify(STATE_MANAGER.get('progress_khmer', {library: {weight_learned: 0}}))),
			progress_phonetic: JSON.parse(JSON.stringify(STATE_MANAGER.get('progress_phonetic', {library: {weight_learned: 0}}))),
			pa: STATE_MANAGER.get('pa', 'vida'),
			ipa: STATE_MANAGER.get('ipa', false),
			dark: STATE_MANAGER.get('dark', false),
			lesson_nav: STATE_MANAGER.get('lesson_nav', true),
			phrase_nav: STATE_MANAGER.get('phrase_nav', true),
			right_bar: STATE_MANAGER.get('right_bar', true),
			writing_system: STATE_MANAGER.get('writing_system', 'khmer'),
			user: STATE_MANAGER.get('user', null),
			login?: STATE_MANAGER.get('login?', null),
			sentCode?: STATE_MANAGER.get('sentCode?', null),
			error: STATE_MANAGER.get('error', null),
			loading: STATE_MANAGER.get('loading', false),
			email_input: STATE_MANAGER.get('email_input', '')
		}
		
		NOTE.gray ("DataAPI synced from store, writing system:", local.writing_system, 
			"progress:", local.progress_khmer..library..weight_learned, 
			"user words:", Object.keys(local.user_words || {}).length)
	
	def initLocal
		# Initialize local data from store"""
		syncFromStore!
		
	def sendMagicCode
		# Send magic code via the Store"""
		if !local.email_input
			console.error('Email is required to send a magic code.')
			return
		
		STATE_MANAGER.set('email_input', local.email_input)
		STATE_MANAGER.sendMagicCode!
		
		# Update local state from store
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
		
	def logout
		# Log out via the Store"""
		STATE_MANAGER.logout!
			.then(do()
				syncFromStore!
				if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
					imba.commit!
			)
			.catch(do(error)
				console.error('Logout failed:', error)
			)
	
	def loginWithCode magic_code
		# Log in with magic code via the Store, then force profile sync for multi-browser consistency"""
		if !local.email_input || !magic_code
			console.error('Both email and code are required to sign in.')
			return
		
		STATE_MANAGER.set('email_input', local.email_input)
		STATE_MANAGER.loginWithCode(magic_code)
			.then(do()
				NOTE.gray("Login successful, forcing profile sync to ensure data consistency")
				# Force a sync with InstantDB to ensure we have the latest data
				# This is especially important when using different browsers
				return STATE_MANAGER.getUserProfile!
			)
			.then(do(result)
				NOTE.gray("Profile sync result:", result)
				syncFromStore!
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
		syncFromStore!