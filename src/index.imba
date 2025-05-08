import 'imba/preflight.css'
import '../ENV.imba'
import './services/_index.imba'
import * as PH from 'imba-phosphor-icons'
# import {ClientIDB} from './lib/instantdb-imba/index.imba'
import './app-dashboard.imba'



global css @root
	$icon-size: 28px
	div.row d:flex gap:1em
	div.col d:vflex gap:1em
	input c:gray9 px:10px rd:5px fs:16px flg:1 bxs:xs, inner py:5px h:$icon-size
	button c:gray9 bg:gray1 @hover:yellow3 rd:5px fs:16px h:$icon-size px:1em d:hcc
		&.icon p:0px size: $icon-size
	div.card max-width:600px bg:white rd:xl shadow:lg, md p:2em d:vflex jc:space-between ta:left gap:1em

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