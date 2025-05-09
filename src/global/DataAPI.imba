import {tx, id} from '@instantdb/core'

export class DataAPI
	prop local = {}
	
	def constructor
		# Load initial data from the store
		syncFromStore!
		
	def syncFromStore
		# Synchronize local state from the centralized store"""
		local = {
			updated_at: STORE.get('updated_at', 0),
			cid: STORE.get('cid', 0),
			lid: STORE.get('lid', 0),
			pid: STORE.get('pid', 0),
			wid: STORE.get('wid', 0),
			active_word: STORE.get('active_word', 'ជា'),
			user_learned: STORE.get('user_learned', {}),
			progress: STORE.get('progress', {library: {weight_learned: 0}}),
			pa: STORE.get('pa', 'vida'),
			ipa: STORE.get('ipa', false),
			dark: STORE.get('dark', false),
			lesson_nav: STORE.get('lesson_nav', true),
			phrase_nav: STORE.get('phrase_nav', true),
			right_bar: STORE.get('right_bar', true),
			khmer_writing: STORE.get('khmer_writing', true),
			user: STORE.get('user', null),
			login?: STORE.get('login?', null),
			sentCode?: STORE.get('sentCode?', null),
			error: STORE.get('error', null),
			loading: STORE.get('loading', false),
			email_input: STORE.get('email_input', '')
		}
		
	def updateStore key, value
		# Update a key in the store and sync back to local state"""
		STORE.set(key, value)
		syncFromStore!
	
	def resetLocal
		# Reset local data to defaults and propagate to the store"""
		STORE.resetState!
		syncFromStore!
		
	def initLocal
		# Initialize local data from store"""
		syncFromStore!
		
	def initInstant
		# No-op: InstantDB is now managed by the Store"""
		# InstantDB is now managed by the Store
		pass
	
	def subscribeAuth
		# No-op: Auth subscription is now managed by the Store"""
		# Auth subscription is now managed by the Store
		pass
	
	def sendMagicCode
		# Send magic code via the Store"""
		if !local.email_input
			console.error('Email is required to send a magic code.')
			return
		
		STORE.set('email_input', local.email_input)
		STORE.sendMagicCode!
		
		# Update local state from store
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
		
	def logout
		# Log out via the Store"""
		STORE.logout!
			.then(do()
				syncFromStore!
				if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
					imba.commit!
			)
			.catch(do(error)
				console.error('Logout failed:', error)
			)
	
	def loginWithCode magic_code
		# Log in with magic code via the Store"""
		if !local.email_input || !magic_code
			console.error('Both email and code are required to sign in.')
			return
		
		STORE.set('email_input', local.email_input)
		STORE.loginWithCode(magic_code)
			.then(do()
				syncFromStore!
				if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
					imba.commit!
			)
			.catch(do(error)
				console.error('Login failed:', error)
			)
	
	def persistProgress progress
		# Deprecated: Use STORE.updateProgress instead"""
		console.warn('persistProgress is deprecated, use STORE.updateProgress instead')
		return
	
	# Add compatibility methods that delegate to the Store
	
	def toggleLearned word
		# Toggle whether a word is learned via the Store"""
		STORE.toggleLearnedWord(word)
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def hasLearned word
		# Check if a word is learned via the Store"""
		return STORE.hasLearnedWord(word)
	
	def toggleDark
		# Toggle dark mode via the Store"""
		STORE.toggleDarkMode!
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def toggleIpa
		# Toggle IPA mode via the Store"""
		STORE.toggleIpa!
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def toggleLessonNav
		# Toggle lesson navigation visibility via the Store"""
		STORE.toggleLessonNav!
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def togglePhraseNav
		# Toggle phrase navigation visibility via the Store"""
		STORE.togglePhraseNav!
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def toggleRightBar
		# Toggle right sidebar visibility via the Store"""
		STORE.toggleRightBar!
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def setActiveWord word
		# Set the active word via the Store"""
		STORE.set('active_word', word)
		syncFromStore!
		if typeof window !== 'undefined' && typeof imba !== 'undefined' && imba.commit
			imba.commit!
	
	def save
		# Save changes to the Store"""
		# Store automatically persists changes,
		# but we should refresh our local cache
		syncFromStore!