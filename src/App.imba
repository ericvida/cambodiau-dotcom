import './global.imba'
import './app-dashboard.imba'
tag App
	css d:vtc
	magic_code = ''
	@observable email_input = STORE.get('email_input', '')
	
	@autorun def persistEmailInput
		if STORE.get('email_input') != email_input
			STORE.set('email_input', email_input)
			DATA.syncFromStore!
			
	def mount
		# The Store is initialized in its constructor
		# Just sync the data and progress
		DATA.syncFromStore!
		PROGRESS.calcProgress LIBRARY
	<self>
		css bg:gray1 d:flex gap:2em
		
		unless STORE.get('user')
			<div.col>
				if INSTANT_APP_ID is 'REPLACE_WITH_YOUR_PUBLIC_APP_ID'
					<p> 'Please set your InstantDB App ID on line 1 in ENV.imba'
				else
					if STORE.get('sentCode?')
						<p> "Check your email for the magic code."
						<div.row>
							<input type="text" bind=magic_code placeholder="Enter magic code">
							<button @click=DATA.loginWithCode(magic_code)> "Login"
					else
						<p> "Please enter your email and click 'get code' to receive a magic code."
						<div.row>
							<input [w:auto] type="text" bind=email_input placeholder="Enter your email">
							<button[px:1em] @click=DATA.sendMagicCode!> "get code"
		
		else # When user is logged in
			# <div>
			# 	<p> "Crush it {STORE.get('user.email', '').split('@').shift!}!"
			# 	<button @click=(STORE.logout!, email_input = '')> "logout"
			<app-dashboard>
imba.mount <App>