
# TAG[epic=Modal, seq=37] Login Page
tag signup-page
	css p:2sp
	css &.hidden d:none
	# css pos:absolute inset:0 zi:20
	# 	d:box d:vflex gap:4sp
	css .bg 
		pos:absolute inset:0 bg:red zi:20
		d:vflex d:box g:4sp
		bg:gray1 @darkmode:gray7
	css .card
		w:600px p:2.4sp
		bg:white @darkmode:gray9
		bxs:xs hue5,xs hue4,sm hue7,xxl hue5 @darkmode:xs black, md black, xxl black
	css .form d:vflex g:1.6sp
	css .field-wrapper d:vflex g:0.5sp
		label us:none
	css .field w:100% h:40px rd:1rd px:0.6sp
		c:gray8 @darkmode:gray2
		bg:gray2 @darkmode:gray8
	css .options d:hflex g:.5sp ai:center
	css .forgot-link c:indigo4
		
	css .login-button w:100% px:1sp py:0.5sp ta:center rd:1rd cursor:pointer us:none
		bd:2px solid gray3 gap:1sp
		p:1sp d:hflex ai:center jc:center
		.button-logo
			w:30px
		@hover
			bg:gray1 @darkmode:indigo6
		@active
			bg:gray2 @darkmode:indigo7
	def googleAuth
		imba.commit!

	def facebookAuth
		imba.commit!

	def appleAuth
		imba.commit!

	def mockAuthToggle
		imba.commit!

		
	def render
		<self>
			<div[d:hbox g:1sp]>
				# <LoginIllustration[w:600px]>
				<.card>
					<form.form action="#" method="POST">
						<div.field-wrapper>
							<label for="username"> "Desired Username"
							<input.field .email name="username" autocomplete="username" required=""> 
						<div.field-wrapper>
							<label for="email"> "Email Address"
							<input.field .email name="email" autocomplete="email" required=""> 
						<div.field-wrapper>
							<label for="password"> "Password"
							<input.field .email name="password" autocomplete="username" required="">
						<div.field-wrapper>
							<label for="confirmpassword"> "Confirm Password"
							<input.field .email name="confirmpassword" autocomplete="username" required="">
						<.options>
							<input .email name="remember-me" type="checkbox" autocomplete="remember-me" required=""> 
							<label for="remember-me"> "Remember Me"
						<.login-button @click.mockAuthToggle> "Signup"
						<hr[mt:1sp mb:.4sp]>
						<thirdparty-logings>
