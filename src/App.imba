import './global.imba'
# import './app-dashboard.imba'
tag App
	css d:vtc
	magic_code = ''
	email_input = ''
	
	
			
	def mount
		
		# CLOUD_MANAGER.pullFromCloud!
		LL UI
		# Calculate initial progress
		# CLOUD_MANAGER.calcProgress(LIBRARY)
		
		# If user is logged in, force a profile sync to ensure latest data
		# if CLOUD_MANAGER.get('user')
		# 	NOTE.gray("User logged in on app mount, ensuring data is fresh")
		# 	CLOUD_MANAGER.getUserProfile().then(do(result)
		# 			NOTE.gray("App mount profile sync complete:", result)
		# 			# Make sure to sync data again after profile sync
		# 			CLOUD_MANAGER.pullFromCloud!
		# 			# Recalculate progress with fresh data
		# 			CLOUD_MANAGER.calcProgress(LIBRARY, state.writing_system)
		# 		).catch(do(error)
		# 			console.error("App mount profile sync failed:", error)
		# 		)
	<self>
		css bg:gray1 d:flex gap:2em
		if UI.user is 'guest'
			<guest-page> 'guest page'
		else
			<div.col>
				if INSTANT_APP_ID is 'REPLACE_WITH_YOUR_PUBLIC_APP_ID'
					<p> 'Please set your InstantDB App ID on line 1 in ENV.imba'
				else
					if UI.user is 'code sent'
						<p> "Check your email for the magic code."
						<div.row>
							<input type="text" bind=magic_code placeholder="Enter magic code">
							<button @click=UI_MANAGER.loginWithCode(magic_code)> "Login"
					else
						<p> "Please enter your email and click 'get code' to receive a magic code."
						<div.row>
							<input [w:auto] type="text" bind=email_input placeholder="Enter your email">
							<button[px:1em] @click=UI_MANAGER.sendMagicCode(email_input)> "get code"
		
		# else # When user is logged in
		# 	# <div>
		# 	# 	<p> "Crush it {CLOUD_MANAGER.get('user.email', '').split('@').shift!}!"
		# 	# 	<button @click=(CLOUD_MANAGER.logout!, email_input = '')> "logout"
		# 	<app-dashboard>
imba.mount <App>