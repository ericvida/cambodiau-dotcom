import {init, tx, id} from '@instantdb/core'

export class DataAPI
	prop local = {}
	prop instant = {}
	def resetLocal
		local.cid = 0
		local.lid = 0
		local.pid = 0
		local.wid = 0
		local.active_word = 'ជា'
		local.user_learned = {}
		local.progress_flat = {}
		local.pa = 'vida'
		local.ipa = no
		local.dark = no
		local.lesson_nav = yes
		local.phrase_nav = yes
		local.right_bar = yes
		
	def getLocal 
		if imba.locals.state
			local = imba.locals.state
		else
			WW 'No local state found'
			resetLocal!
		LL local
	def constructor
		initLocal!
		initInstant!
	
	def initLocal
		local = imba.locals(LOCAL_DB_NAME)
		local.user
		local.login? # null = waiting, yes, no
		local.sentCode? # yes, no
		local.error
		local.loading
		local.email_input
	
	def initInstant
		instant = init({ appId: INSTANT_APP_ID});
	
	def subscribeAuth
		instant.subscribeAuth do(auth)
			if auth.error
				console.error 'Error during authentication'
			elif auth.user
				local.user = auth.user
				local.login? = yes
				imba.commit!
				if local.user
					const query = 
						tasks: 
							$:
								where: 
									"$users.id": local.user.id
					const unsub = instant.subscribeQuery query, do(resp)
						if resp.error
							console.error('Uh oh!', resp.error.message)
						elif resp.data
							if resp.data.tasks
								local.tasks = resp.data.tasks or [] 
								imba.commit!
							else
								console.warn('Unexpected response structure:', resp)
						else
							console.warn('Unexpected response:', resp)
				else
					console.warn('User is not logged in. Skipping query.')
			else
				local.login? = true
				local.user = no
				imba.commit!
	
	def sendMagicCode
		if !local.email_input
			console.error('Email is required to send a magic code.')
			return
		console.log local.email_input, 'clicked login'
		await instant.auth.sendMagicCode({ email: local.email_input })
		local.sentCode? = true
		imba.commit!
	
	def logout
		console.log 'clicked logout'
		await instant.auth.signOut()
		local.user = no
		# FIXME -  after logout the email_input value is false, must be fixed.
		local.email_input = ''
		imba.commit!
	
	def loginWithCode magic_code
		if !local.email_input or !magic_code
			console.error('Both email and code are required to sign in.')
			return
		await instant.auth.signInWithMagicCode({ email: local.email_input, code: magic_code })
		local.email_input = false
		local.sentCode? = false
	
	def persistProgress progress
		let profileID = "26b9500e-dcaf-4867-bded-1edd4304c988"
		if !!profileID
			await instant.transact([
				tx.profile[profileID].update({
					progress: progress
					createdAt: Date.now()
				}).link({$users: local.user.id}) # link the task to the logged in user
			])
		else
			await instant.transact [
				tx.profile[id()].update({
					progress: progress
				})
			]