import './global.imba'
import './app-dashboard.imba'
tag App
	css d:vtc
	magic_code = ''
	@observable email_input = STATE_MANAGER.get('email_input', '')
	
	@autorun def persistEmailInput
		if STATE_MANAGER.get('email_input') != email_input
			STATE_MANAGER.set('email_input', email_input)
			UI.syncFromStore!
			
	def mount
		# The Store is initialized in its constructor
		# Sync the data from store
		UI.syncFromStore!
		
		# Calculate initial progress
		PROGRESS.calcProgress(LIBRARY)
		
		# If user is logged in, force a profile sync to ensure latest data
		if STATE_MANAGER.get('user')
			NOTE.gray("User logged in on app mount, ensuring data is fresh")
			STATE_MANAGER.getUserProfile().then(do(result)
					NOTE.gray("App mount profile sync complete:", result)
					# Make sure to sync data again after profile sync
					UI.syncFromStore!
					# Recalculate progress with fresh data
					PROGRESS.calcProgress(LIBRARY)
				).catch(do(error)
					console.error("App mount profile sync failed:", error)
				)
	<self>
		css bg:gray1 d:flex gap:2em
		
		unless STATE_MANAGER.get('user')
			<div.col>
				if INSTANT_APP_ID is 'REPLACE_WITH_YOUR_PUBLIC_APP_ID'
					<p> 'Please set your InstantDB App ID on line 1 in ENV.imba'
				else
					if STATE_MANAGER..state..sentCode?
						<p> "Check your email for the magic code."
						<div.row>
							<input type="text" bind=magic_code placeholder="Enter magic code">
							<button @click=UI.loginWithCode(magic_code)> "Login"
					else
						<p> "Please enter your email and click 'get code' to receive a magic code."
						<div.row>
							<input [w:auto] type="text" bind=email_input placeholder="Enter your email">
							<button[px:1em] @click=UI.sendMagicCode!> "get code"
		
		else # When user is logged in
			# <div>
			# 	<p> "Crush it {STATE_MANAGER.get('user.email', '').split('@').shift!}!"
			# 	<button @click=(STATE_MANAGER.logout!, email_input = '')> "logout"
			<app-dashboard>
imba.mount <App>