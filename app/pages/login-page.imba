import { collection, doc, setDoc } from "firebase/firestore"
import { db } from '../state/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});	

const auth = getAuth();

# TAG[epic=Modal, seq=37] Login Page
tag login-page
	css p:2sp
	css &.hidden d:none
	css .bg pos:fixed inset:0 bg:red zi:20
		d:vflex d:box g:4sp
		bg:gray1 @darkmode:gray7
	css .card
		max-width:600px p:2.4sp
		bg:white @darkmode:gray9
		bxs:xs hue5,xs hue4,sm hue7,xxl hue5 @darkmode:xs black, md black, xxl black
	css .form d:vflex g:1.6sp w:500px
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
		signInWithPopup(auth, provider).then(do(result)
			console.log(result)
			const credential = GoogleAuthProvider.credentialFromResult(result)
			const token = credential.accessToken
			// The signed-in user info.
			const user = result.user

			imba.router.go('/learning')

			if user
				await setDoc(doc(db, 'users', user.uid), {
					uid: user.uid
					email: user.email
					name: user.displayName
					provider: user.providerData[0].providerId
					photoUrl: user.photoURL
				})
		).catch(do(error)
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData..email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.log(credential, error)
		)

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
							<label for="email"> "Email Address"
							<input.field .email name="email" autocomplete="email" required=""> 
						<div.field-wrapper>
							<label for="password"> "Password"
							<input.field .email name="password" autocomplete="username" required="">
						<.options>
							<input .email name="remember-me" type="checkbox" autocomplete="remember-me" required=""> 
							<label for="remember-me"> "Remember Me"
							<a[ml:auto fs:xs].forgot-link href=""> "Forgot your password?"
						<.login-button @click.mockAuthToggle> "Sign In"
						<hr[mt:1sp mb:.4sp]>
						<thirdparty-logings>

tag thirdparty-logings
	css .login-button-wrapper
		d:vflex gap:1sp
	
	css .login-button w:100% px:1sp py:0.5sp ta:center rd:1rd cursor:pointer us:none
		bd:2px solid gray3 gap:1sp
		p:1sp d:hflex ai:center jc:center
		.button-logo
			w:30px
		@hover
			bg:gray1 @darkmode:indigo6
		@active
			bg:gray2 @darkmode:indigo7
	<self>
		<div.login-button-wrapper>
			<.login-button @click.googleAuth>
				<GoogleIcon .button-logo>
				<span> "Sign In with Google"
			<.login-button @click.facebookAuth> 
				<FacebookIcon .button-logo>
				<span> "Sign In with Facebook"
			<.login-button @click.appleAuth> 
				<AppleIcon .button-logo>
				<span> "Sign In with Apple"

tag GoogleIcon
	css $googleyellow:#FBBC05
	css $googlered:#EB4335
		$googlegreen:#34A853
		$googleblue:#4285F4
	<self>
		<svg viewBox="-0.5 0 48 48">
			<g fill="none" fill-rule="evenodd">
				<path [fill:$googleyellow] d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24" />
				<path [fill:$googlered] d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51" />
				<path [fill:$googlegreen] d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053" />
				<path [fill:$googleblue] d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618" />

tag AppleIcon
	<self>
		<svg viewBox="-3.5 0 48 48">
			<path fill="#0B0B0A" fill-rule="evenodd" d="M27.175 7.792C28.74 5.772 29.927 2.915 29.498 0c-2.559.178-5.55 1.815-7.295 3.948-1.59 1.934-2.898 4.81-2.387 7.601 2.797.088 5.684-1.589 7.359-3.757ZM41 35.217c-1.12 2.495-1.658 3.61-3.1 5.82-2.012 3.085-4.848 6.926-8.366 6.954-3.122.034-3.928-2.046-8.167-2.02-4.239.022-5.122 2.06-8.25 2.029-3.516-.031-6.203-3.497-8.215-6.582-5.627-8.62-6.22-18.738-2.75-24.12 2.47-3.821 6.364-6.057 10.022-6.057 3.723 0 6.065 2.055 9.149 2.055 2.99 0 4.81-2.06 9.117-2.06 3.26 0 6.714 1.786 9.171 4.868C31.554 20.547 32.86 32.121 41 35.217Z" />		

tag FacebookIcon
	<self>
		<svg viewBox="0 0 48 48">
			<path fill="#4460A0" fill-rule="evenodd" d="M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.649 2.649 0 0 1 2.65 0H45.35A2.649 2.649 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48Z" />

tag LoginIllustration
	<self>
		<svg viewBox="0 0 1600 1200">
			# <path [fill:none] d="M0 0h1600v1200H0z" />
			<path fill="none" stroke="#3b116e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M425.08 118.55v121.62" />
			<path fill="#fff" d="M446.82 336.1c6.26-11.95 1.65-26.71-10.3-32.97-11.95-6.27-26.71-1.65-32.97 10.3-6.27 11.95-1.65 26.71 10.3 32.98 11.94 6.25 26.71 1.64 32.97-10.31Z" />
			<path fill="#8c2eff" d="m482.61 294.9-15.57-8.51a42.231 42.231 0 0 1-21.11-28.09l-2.38-10.81c-2.21-10.13-12.26-16.59-22.39-14.3-7.14 1.62-12.76 7.15-14.29 14.3l-2.39 10.81c-2.64 12-10.38 22.21-21.1 28.09l-15.58 8.51c-11.4 6.21-19.15 17.45-20.77 30.3h156.52c-1.79-12.85-9.53-24.09-20.94-30.3Z" />
			<path fill="none" stroke="#3b116e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M359.38 300.86h131.21" />
			<path fill="#3b116e" d="M421.08 233.11c-7.15 1.62-12.77 7.15-14.3 14.3l-2.38 10.81c-2.64 12-10.39 22.21-21.11 28.08l-15.57 8.51c-11.41 6.22-19.15 17.45-20.77 30.3h45.02c0-29.53 33.71-31.06 33.71-57.79 0-18.81-.43-34.72-.43-34.72-1.45.08-2.81.25-4.17.51Z" opacity=".3" />
			<path fill="#2b325a" d="M972.53 1014.55h-24.19V750.48c0-29.1-26.42-52.81-58.83-52.81H479.8c-32.42 0-58.83 23.71-58.83 52.81v264.07h-24.2V750.48c0-39.9 37.26-72.37 83.03-72.37h409.71c45.77 0 83.02 32.47 83.02 72.37v264.07Z" />
			<path fill="#9633ff" d="M787.72 678.11H682.46l-6.75-38.21-6.76-38.46h105.26l2.47 13.9 11.04 62.77Z" />
			<path fill="#3c007c" d="m675.71 639.9-6.76-38.46h105.26l2.47 13.9-100.97 24.56Z" opacity=".2" />
			<path fill="#9633ff" d="M859.58 608.71H586.17c-18.19 0-35.47-14.68-38.72-32.87l-33.14-187.65c-3.25-18.19 8.97-32.87 27.03-32.87h273.54c18.19 0 35.48 14.68 38.72 32.87l33.01 187.78c3.25 18.06-8.84 32.74-27.03 32.74Z" />
			<path fill="#fff" d="M845.42 588.96h-252.1c-11.7 0-22.74-9.48-24.82-21.05l-30.28-171.53c-2.08-11.69 5.72-21.05 17.42-21.05h252.09c11.7 0 22.74 9.49 24.82 21.05l30.28 171.53c1.95 11.57-5.85 21.05-17.41 21.05Z" />
			<path fill="none" stroke="#3c007c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M775.51 608.71H670.25" />
			<path fill="#c89eff" d="M1248.24 360.14h-67.26c-24.73 0-44.84 20.11-44.84 44.84 0 22.02 15.99 40.72 37.7 44.24v23.02l32.88-22.42h41.52c24.74 0 44.84-20.11 44.84-44.84 0-24.83-20.1-44.84-44.84-44.84Z" />
			<path fill="#fff" d="M1189.43 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14ZM1214.56 410.41c3.39 0 6.13-2.75 6.13-6.14a6.13 6.13 0 0 0-12.26 0c0 3.39 2.74 6.14 6.13 6.14ZM1239.8 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14Z" />
			<path fill="#a561ff" d="M621.05 425.82h62.33c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-62.33c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z" />
			<path fill="#c3afdd" d="M626.15 455.55h36.44c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-36.44c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#2b325a" d="M686.57 455.55h11.51c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-11.51c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z" />
			<path fill="#c3afdd" d="M631.25 485.28h8.95c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-8.95c-3.96 0-7.74-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#2b325a" d="M664.18 485.28h53.7c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-53.7c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#e3daef" d="M741.86 485.28h46.03c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-46.03c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#020202" d="M636.36 515.01h28.77c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-28.77c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z" />
			<path fill="#c3afdd" d="M689.1 515.01h6.4c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.96 7.19h-6.39c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#a561ff" d="M719.47 515.01h38.04c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-38.04c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#343434" d="M806.26 1014.24c3.02-5.73 5.93-11.17 8.65-16.81 3.89-8.26 6.7-14.57 9.13-20.3l.1-.2h-.1c-3.79-1.36-14.28-4.66-28.95-4.66-5.15 0-10.2.39-15.06 1.26h-.1l-6.02 25.46 32.06 15.93.29-.68Z" />
			<path fill="#c7cbff" d="M1043.13 473.18c1.75-9.42 4.08-21.57 5.83-31.38 1.45-7.77 2.72-25.45 3.3-28.85 0 0-59.85-54.7-66.65-51.98-9.23 3.59-15.54 8.84-20.11 16.03-4.27 6.8-6.99 15.35-10.49 25.75l-.88 2.62c-1.07.1-8.64 1.16-9.42 4.47-.87 3.5 3.69 9.52 4.37 10.3-6.02 18.94-5.92 29.24.49 38.08 3.88 5.44 11.95 8.75 21.47 8.75 4.08 0 7.87-.59 10.88-1.75l-2.53 15.54 63.74-7.58Z" />
			<path fill="#2a329e" d="m985.61 480.66 10.01-21.95c-7.68 4.27-13.7 6.51-13.7 6.51l-1.75 10.59 5.44 4.85Z" opacity=".2" />
			<path fill="none" stroke="#2a329e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M955.2 431.99c2.53.87 7.68.29 9.33-3.01" />
			<path fill="#231f20" d="M965.79 411.2c-1.5 0-2.72-1.22-2.72-2.72 0-1.51 1.22-2.72 2.72-2.72a2.71 2.71 0 0 1 2.72 2.72c0 1.5-1.21 2.72-2.72 2.72Z" />
			<path fill="none" stroke="#2a329e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1002.13 431.99 8.55-5.15" />
			<path fill="#231f20" d="M1077.03 393.9c-18.18 0-32.93-14.74-32.93-32.93 0-18.19 14.75-32.94 32.93-32.94 18.19 0 32.94 14.75 32.94 32.94 0 18.19-14.75 32.93-32.94 32.93Z" />
			<path fill="#c7cbff" d="m969.87 947.3 2.72-6.02v-.1c-1.16-10.69-2.91-21.67-5.05-32.64l-4.86-14.58-96.96 1.56 2.43 13.21c2.72 9.23 4.66 16.13 5.15 21.67l25.46 50.61 71.11-33.71Z" />
			<path fill="#343434" d="M975.7 1014.82v-.19c.2-6.61.2-13.12.2-19.43 0-7.68-.3-15.16-.59-22.35v-.19h-.19c-14.38 2.14-27.79 8.26-38.77 17.87l-.09.1 3.01 24.19h36.43Z" />
			<path fill="#a561ff" d="M926.54 1001.61c13.12-16.13 29.44-25.65 48.58-28.47h.19v-.68c-.19-2.81-.29-5.63-.48-8.25-.49-7.29-1.95-20.89-2.14-22.93 0-.1-.1-.2-.29-.2-36.73 1.75-60.92 21.57-65.97 26.04-.19.19-.49 0-.39-.19l3.4-21.28c.59-3.5-.19-7.09-2.33-9.91a13.136 13.136 0 0 0-8.65-5.44c-.68-.1-1.45-.2-2.23-.2H873.2c-.19 0-.29.1-.29.3.1 1.36.68 7.09.68 8.64-.1 23.42-10.49 32.94-20.6 42.07-4.85 4.37-9.42 8.55-12.72 14.09-1.17 1.94-2.04 3.98-2.82 6.12l-.1.29h89.19Z" />
			<path fill="#8c2eff" d="M967.64 908.73v-.19c-7.77-40.91-21.18-80.55-39.93-117.76l-6.03-11.75c42.17-.1 78.31-12.63 94.54-32.84 8.35-10.49 11.17-22.35 8.25-35.27-6.8-29.44-17.78-48.38-17.87-48.48l-.29-.58-.3 4.37c-5.24.58-128.43 15.55-166.52 60.72-25.55 30.31-2.23 94.83 16.42 146.61 4.57 12.73 8.94 24.77 12.14 35.17h99.59Z" />
			<path fill="#0e001f" d="M864.75 897.36c.2-.48 14.67-52.66 76.66-75.97l.19-.1-.1-.19c-4.37-10.59-9.03-20.8-13.89-30.41-1.94-3.79-3.11-6.22-3.69-7.29.1-.1.1-.1-.88-2.04v-.1l-94.24-28.08v.2c-4.17 33.61 13.12 81.61 27.01 120.08 3.11 8.46 5.93 16.42 8.45 23.9l.2.59.29-.59Z" opacity=".2" />
			<path fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m868.05 963.72 15.55 6.41M859.21 975.67l13.12 9.91" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m868.93 908.83 98.51-.2" />
			<path fill="#c7cbff" d="M835.12 948.66c4.08-11.27 7.77-23.22 10.69-33.81l.19-8.26-86.08-42.45-4.18 7.96c-2.52 13.22-3.98 20.79-5.15 23.42l5.44 57.8 74.13-2.91 4.96-1.75Z" />
			<path fill="#a561ff" d="M763.51 978.29c9.82-3.69 20.41-5.63 31.48-5.63 14.58 0 24.97 3.3 28.76 4.66l.2.1.09-.2c1.27-2.62 9.04-22.15 11.37-28.36l.1-.39-.39-.1c-14.28-6.51-29.63-9.81-45.57-9.81-14.77 0-28.51 4.06-27.88 3.69l11.37-16.42c4.85-7 3.11-16.61-3.89-21.47-.68-.49-18.65-9.13-18.65-9.13s-2.14 4.76-2.82 6.02c-10.59 20.89-24.1 24.77-37.21 28.47-6.32 1.74-12.24 3.49-17.68 6.99-1.75 1.17-3.4 2.53-4.86 3.89l.1.39 75.48 37.3Z" />
			<path fill="#8c2eff" d="M845.51 915.82c7.39-27.78 12.25-50.03 14.67-70.63 2.24-18.75 2.63-34.98 2.53-55.09l141.26.39c18.76 0 39.55-3.3 53.54-16.9 10-9.72 14.47-23.22 16.22-36.73 1.46-11.17 1.46-22.63-1.36-33.42-3.11-11.75-3.2-21.57-8.06-30.6l-8.84-13.7H954.23l-4.37 3.2c-1.56.3-29.25 5.35-61.5 14.09-55.09 14.96-76.75 28.18-85.21 36.63-22.73 23.41-28.17 54.21-35.75 96.77-1.26 6.99-2.52 14.28-3.98 21.86l-.97 5.24c-2.43 12.92-4.67 25.26-6.71 35.56l89.77 43.33Z" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M855.81 872.39c6.22-32.35 6.8-54.4 6.71-81.61" />
			<path fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m730.77 921.55 10.59 12.93M718.43 927.97l6.9 14.86" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m756.23 872.39 87.73 42.85" />
			<path fill="#c7cbff" d="m856.01 517.49-.2-3.79c-15.25-16.13-32.45-34.01-44.98-42.75-18.95-13.21-52.76-26.04-64.03-26.04-3.59 0-5.34 1.07-5.44 3.21-.09 5.92 8.26 11.07 19.92 18.16 1.17.69 2.43 1.46 3.69 2.24-1.46.29-2.91 1.65-3.79 3.5-1.36 3.01-.87 6.51 1.46 9.32-2.43.78-4.08 2.24-4.86 4.38-.87 2.62-.29 5.73 1.56 8.45-1.75 1.55-2.72 3.69-2.82 6.22-.1 3.79 1.85 7.48 3.89 9.32 3.1 3.11 6.12 5.64 11.27 5.64 1.26 0 2.62-.2 4.17-.49 6.03 7.58 13.61 12.73 21.38 14.38.97 1.56 2.43 4.76 4.56 9.23 1.66 3.4 3.6 7.68 5.93 12.34l1.94 1.36 46.35-34.68Z" />
			<path fill="#a561ff" d="M1071.11 697.32c52.85-18.95 54.02-57.32 49.06-88.61-2.72-17.58-9.52-40.8-18.55-63.63-8.36-21.08-17.3-38.38-23.32-44.98-13.51-14.87-34.59-18.56-36.82-18.85.19-.97.38-1.95.58-3.01.29-1.66.68-3.5 1.07-5.45v-.19h-62.57l-1.46 8.55h-2.43c-25.45 0-47.99 12.44-68.98 37.99l-23.41 26.72c-1.46-1.75-13.7-16.42-28.47-32.36l-.09-.09-48 37.4c21.18 41.58 42.36 65.77 62.86 71.6 3.5.98 7.19 1.46 10.98 1.46 28.37 0 57.13-27.4 60.23-30.41l8.17 68.79h105.41c9.52 14.38 15.45 34.58 15.45 34.88l.09.19h.2Z" />
			<path fill="#130821" d="m1055.37 662.25 11.76-44.01.19.09c5.93 3.11 7.38 11.95 9.13 22.15 2.43 14.77 5.54 33.13 24.19 40.23h.1c-7.38 6.41-17 12.04-29.63 16.61h-.2l-.09-.19c0-.3-5.93-20.5-15.45-34.88ZM984.83 662.25l-30.89-80.16-12.15 11.37 8.17 68.79h34.87Z" opacity=".2" />
			<path fill="none" stroke="#130821" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1055.47 662.15 17.48-65.09M1078.88 641.07l-14.67-7.1M941.89 593.17l16.23-16.32M884.47 546.54l.97 12.63" />
			<path fill="none" stroke="#2a329e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M764.29 468.03c6.8 0 18.36 2.34 22.74 4.96M763.03 481.54c6.8-.88 20.5 5.15 20.5 5.15M759.63 494.27c4.37-.88 13.7.87 19.72 5.14M775.27 514.18l-3.98-6.51M982.5 465.02c4.37-1.65 7.68-3.3 7.68-3.3" />
			<path fill="#231f20" d="M1152.33 552.75c3.21-14.47-4.27-28.46-20.11-37.4 7.97-21.47 6.22-42.17-5.05-58.49-11.66-16.81-31.58-26.52-54.8-26.52-7.19 0-14.47.97-21.86 2.82.29-1.66.58-3.21.88-4.57.38-1.94.68-3.6.87-4.76l.19-1.26c2.63-13.9 7.49-39.84-7.48-53.25-9.61-8.55-23.41-13.4-37.89-13.4-7.67 0-15.35 1.36-22.15 4.08-9.52 3.69-15.93 9.71-20.79 19.14 0 0 6.02 8.06 17.1 8.06 2.43 0 5.05-.39 4.67-.19-2.53 8.93 1.2 23.66 5.75 30.05l1.41 1.79.49.65c.9-.63 11.58-8.3 21.3-8.3 5.63 0 9.61 2.62 11.85 7.87 6.9 16.22-20.11 30.31-20.4 30.5h-.1v.1c-1.75 6.8-3.01 37.5 12.82 57.91 9.23 11.85 22.45 17.87 39.35 17.87 9.43 0 20.02-1.94 31.58-5.63 1.07 2.04 12.24 24.38 23.51 61.5 0 0 32.45.97 38.86-28.57Z" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m927.51 790.49-87.92-.78" />
			<path fill="#fff" d="M1007.86 462.01c-5.36 0-9.72-4.35-9.72-9.72 0-5.36 4.36-9.71 9.72-9.71s9.72 4.35 9.72 9.71c0 5.37-4.36 9.72-9.72 9.72Z" />
			<path fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1050.51 433.16c-4.18 1.45-8.55 3.49-12.53 5.53M1132.22 515.35c-2.14 5.05-4.86 10.01-7.77 14.67M1090.15 519.82c9.04-2.43 13.89-6.32 13.89-6.32" />
			<path fill="none" stroke="#130821" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m855.62 513.7-47.8 37.21" />
			<path fill="#343434" d="M748.16 986.07c4.86-3.21 10.01-5.83 15.45-7.78l.39-.19-75.68-37.79-.1.09c-3.5 3.31-6.32 7.09-8.36 11.47l-.09.19 68.39 34.01ZM917.12 1014.82c2.91-4.76 6.22-9.32 9.71-13.5l.2-.29h-89.48l-.1.09c-1.55 4.38-2.04 8.94-2.04 13.51v.19h81.71Z" />
			<path fill="none" stroke="#1f2321" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1066.17 814.2 48.2 198.89M972.51 814.2l-48.19 198.89M954.14 890.61h130.3" />
			<path fill="#2b325a" d="M946.37 788.68h145.84c10.82 0 19.53 6.56 19.53 14.7 0 8.13-8.71 14.69-19.53 14.69H946.37c-10.82 0-19.53-6.56-19.53-14.69 0-8.06 8.82-14.7 19.53-14.7Z" />
			<path fill="#1a1a1a" d="M927.26 806.22c1.78 6.72 9.66 11.85 19.11 11.85h145.84c10.82 0 19.53-6.56 19.53-14.69 0-3.32-1.47-6.33-3.88-8.78-25.52 6.33-55.97 10.99-88.94 13.2-33.49 2.21-64.89 1.5-91.66-1.58Z" opacity=".3" />
			<path fill="#a561ff" d="M520.39 678.22v-78.49h69.26v78.49h-69.26Z" />
			<path fill="#29193f" d="M555.02 620.04c-22.81 0-33.25-17.78-34.5-20.07-.01-.03-.01-.06-.01-.09 0-.02 0-.05.01-.07.02-.03.04-.05.07-.06.02-.01.04-.02.08-.02h68.32c.06 0 .14.02.19.05.07.03.11.09.15.14.04.06.05.13.05.19 0 .08-.01.14-.05.21-1.9 3.33-12.4 19.72-34.31 19.72Z" />
			<path fill="none" stroke="#1c1426" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M604.24 644.05c7.14 0 12.93-5.79 12.93-12.93 0-7.13-5.79-12.92-12.93-12.92s-12.93 5.79-12.93 12.92c0 7.14 5.79 12.93 12.93 12.93Z" />
			<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M335.31 860.49c-4.58-17.06-29.54-22.16-39.81 10.78-8.94 28.74-21.57 32.95-27.33 61.38-5.46 27.18 10.27 66.47 50.59 63.67 42.47-2.96 16.55-135.83 16.55-135.83Z" />
			<path fill="#8c2eff" d="m352.36 787.74 54.55 102.33-95.16 50.73-54.55-102.33 95.16-50.73Z" />
			<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M378.96 801.33h-.3c-16.39 0-29.69 13.3-29.69 29.69v27.7h59.68v-27.7c0-16.39-13.29-29.69-29.69-29.69Z" />
			<path fill="#9633ff" d="M378.89 829.18h-.67c-42.54 0-76.96 34.49-76.96 76.96v91.66c0 9.82 7.98 17.8 17.8 17.8h118.99c9.82 0 17.8-7.98 17.8-17.8v-91.58c.07-42.55-34.42-77.04-76.96-77.04 0 0 .07 0 0 0Z" />
			<path fill="#59268f" d="M409.39 923.72h-61.53c-9.97 0-18.09 8.13-18.09 18.1v38.77c0 9.97 8.12 18.1 18.09 18.1h61.53c9.97 0 18.09-8.13 18.09-18.1v-38.77c0-9.97-8.12-18.1-18.09-18.1Z" opacity=".3" />
			<path fill="#5f00d4" d="M409.14 927.83h-61.28c-8.48-.5-10.47 4.92-18.13 16v28.64c.04 9.97 8.16 18.09 18.13 18.09h61.53c9.97 0 18.09-8.12 18.09-18.09v-28.98c-5.89-14.09-8.73-15.17-18.34-16.16Z" />
			<path fill="#8c2eff" stroke="#272459" stroke-width="4" d="M409.39 915.6h-61.53c-9.97 0-18.09 8.12-18.09 18.09v9.75h97.71v-9.75c0-9.97-8.12-18.09-18.09-18.09Z" />
			<path fill="none" stroke="#fcfcfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M427.48 943.44H329.7" />
			<path fill="#8c2eff" d="M378.59 892.26c-8.16 0-14.77-6.62-14.77-14.77 0-8.17 6.61-14.78 14.77-14.78 8.15 0 14.77 6.61 14.77 14.78 0 8.15-6.62 14.77-14.77 14.77ZM1300.09 962.44h-.71c-7.13-.36-12.66-6.51-12.3-13.73.27-4.81 3.12-9 7.4-11.05 16.84-8.02 15.77-13.73 12.65-30.84-2.58-13.99-6.15-33.16 6.24-53.3 2.41-3.83 6.51-6.15 11.05-6.15 2.41 0 4.73.71 6.78 1.96 6.15 3.75 8.02 11.77 4.28 17.92-7.13 11.58-5.17 22.37-2.86 34.85 3.3 17.91 7.94 42.42-27 59.09-1.7.8-3.57 1.25-5.53 1.25Z" />
			<path fill="#3b116e" d="M1316.94 939.71c-5.08-1.87-9.9-4.1-14.44-6.68-2.05 1.51-4.73 3.03-8.02 4.63-4.28 2.05-7.13 6.33-7.4 11.05-.36 7.13 5.17 13.28 12.3 13.73h.71c1.96 0 3.83-.45 5.62-1.25 11.23-5.35 18.45-11.5 22.81-18.09-3.92-.8-7.75-1.96-11.58-3.39Z" opacity=".2" />
			<path fill="#8c2eff" d="M1068.26 1016.1c-.62-1.7-.98-3.48-.98-5.26 0-7.76 6.33-14.09 14.08-14.09h61.59l38.51 18.99-.09.36h-113.11Z" />
			<path fill="#9633ff" d="M1128.16 1016.1c-9.72 0-18.99-4.73-24.69-12.57l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l12.3-20.59c3.3-5.61 8.65-9.62 14.89-11.41l7.22-2.05.53-20.32c0-1.07.54-2.14 1.25-2.85s1.69-1.07 2.76-1.07c1.07 0 2.23.44 2.94 1.25 4.9 5.34 12.66 13.63 22.73 24.6 2.14 2.31 4.55 3.47 7.4 3.47 6.95 0 15.69-6.68 25.85-14.44 15.51-11.85 34.85-26.56 58.2-26.56 6.59 0 13.28 1.25 19.88 3.57 15.68 5.7 26.73 15.42 32.62 28.88 12.56 28.43-1.7 64.26-1.87 64.62l-.09.09h-179.6Z" />
			<path fill="#c89eff" d="M1104.45 1004.78c-.36-.45-.62-.81-.98-1.25l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l2.32-3.83h.53c4.73 0 8.47 2.4 9.36 5.97.98 3.92-3.56 11.14-8.64 13.81l-.09.09-.18-.17Z" />
			<path fill="none" stroke="#170f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1182.26 1015.92c-2.76-7.13.71-15.24 7.93-18.01 1.61-.62 3.3-.98 5.08-.98h24.42c-3.11-23.44 13.37-44.92 36.82-48.04 1.87-.27 3.74-.36 5.61-.36h1.16" />
			<path fill="#8c2eff" d="M1271.66 995.42c-3.12 0-6.06-.89-8.56-2.59-3.65-2.49-5.97-6.59-6.42-11.41-.44-4.81.9-9.8 3.84-13.99 3.92-5.62 10.07-9.09 16.22-9.09 3.12 0 6.06.89 8.56 2.58 3.65 2.5 5.97 6.6 6.41 11.41.45 4.82-.89 9.81-3.83 14-3.92 5.61-10.16 9.09-16.22 9.09ZM1236.1 945.68c-4.64 0-8.92-1.16-12.84-3.38-3.39-1.97-6.33-4.73-8.47-8.03l-.09-.17.18-.09c9.72-6.42 24.69-15.07 42.34-15.07 3.83 0 7.66.36 11.41 1.16h.18l-.09.18c-.81 2.32-1.87 4.55-3.12 6.68-6.6 11.59-17.92 18.72-29.5 18.72Z" />
			<path fill="none" stroke="#170f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1118.89 983.92c1.69 2.14 7.84 3.3 11.23 2.14" />
