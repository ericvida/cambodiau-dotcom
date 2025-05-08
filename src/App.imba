import './global.imba'
import './app-dashboard.imba'
tag App
	css d:vtc
	magic_code = ''
	@observable email_input = if DATA..local..email_input then DATA.local.email_input else ''
	@autorun def persistEmailInput
		if DATA..local.email_input != email_input
			DATA.local.email_input = email_input
	def mount
		DATA.subscribeAuth!
	<self>
		css bg:gray1 d:flex gap:2em
		# <div.card>
		unless DATA..local..user
			<div.col>
				if INSTANT_APP_ID is 'REPLACE_WITH_YOUR_PUBLIC_APP_ID'
					<p> 'Please set your InstantDB App ID on line 1 in src/index.imba'
				else
					if DATA..local..sentCode?
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
			# 	<p> "Crush it {DATA.local.user.email.split('@').shift!}!"
			# 	<button @click=(DATA.logout!, email_input = '')> "logout"
			<app-dashboard>
imba.mount <App>