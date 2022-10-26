tag user-login
	css &.hidden d:none
	css pos:absolute inset:0 zi:20
		d:box d:vflex gap:4sp
	css .bg pos:absolute inset:0 bg:red zi:20
		d:vflex d:box g:4sp
		bg:gray1 ..dark:gray7
	css .card
		w:400px p:2.4sp
		bg:white ..dark:gray9
		bxs:xs hue5,xs hue4,sm hue7,xxl hue5 ..dark:xs black, md black, xxl black
	css .form d:vflex g:1.6sp
	css .field-wrapper d:vflex g:0.5sp
		label us:none
	css .field w:100% h:40px rd:1rd px:0.6sp
		c:gray8 ..dark:gray2
		bg:gray2 ..dark:gray8
	css .options d:hflex g:.5sp ai:center
	css .forgot-link c:indigo4
	css .login-button w:100% px:1sp py:0.5sp ta:center rd:1rd cursor:pointer us:none
		bg:indigo5 ..dark:indigo7
		@hover
			bg:indigo6 ..dark:indigo6
		@active
			bg:indigo5 ..dark:indigo7
	<self  ease>
		<.bg route-to="/">
		<div[pos:absolute zi:30 d:vbox g:2sp]>
			<cambodiau-icon[cursor:pointer] route-to="/">
			<.card>
				<form.form action="#" method="POST">
					# <> "login"
					<div.field-wrapper>
						<label for="username"> "Public Username"
						<input.field .email name="username" autocomplete="username" required=""> 
					<div.field-wrapper>
						<label for="email"> "Email Address"
						<input.field .email name="email" autocomplete="email" required=""> 
					<div.field-wrapper>
						<label for="username"> "Password"
						<input.field .email name="username" autocomplete="username" required="">
					<.options>
						<input .email name="remember-me" type="checkbox" autocomplete="remember-me" required=""> 
						<label for="remember-me"> "Remember Me"
						<a[ml:auto fs:xs].forgot-link href=""> "Forgot your password?"
					<.login-button> "Sign In"