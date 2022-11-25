tag module-closed
	css p:1sp d:vflex @lg:hflex g:1sp
		min-height: calc(100vh - 1topbar)
		max-width:1000px mx:auto
	css main flg:1 d:vflex g:1sp
	css .image 
		bg:hue5 p:1sp rd:1rd
		aspect-ratio: 16 / 9
	css .actions
		d:grid g:1sp jc:end gtc: 1fr 1fr
		button px:1.5sp py:1sp rd:1rd
			bg:hue3 c:hue9
			fw:bold
			fs:20px d:flex gap:1sp
			&.outline
				bg:none
	<self>
		<main>
			<div.image> "image"
			<[d:hgrid w:100% g:1sp gtc: 2fr 1fr]>
				<div.card> "card"
				<rightbar-module-contents>
			<[d:hgrid w:100% g:1sp gtc:1fr]> 
				<rightbar-graduated-students>
		<student-portal-rightbar>

tag buy-module
	css bg:white p:1sp d:vflex gap:2sp
	css .pill rd:full fls:1 w:fit-content px:1sp py:.2sp
		bg:hue1 ..dark:hue8/50
		c:hue6 ..dark:hue4
	css .price 
		fw:bold
		# h:64px
		d:hflex ai:center jc:start gap:0.5sp
		my:2sp
	css .num
		fs:5xl lh:inherit ff:$copy
	css .text 
		fs:1xl lh:inherit ff:$heading
		c:warm4
	css .button
		rd:1rd ta:center p:1sp
		bg:gray3 ..dark:gray7
		c:gray9 ..dark:gray0
		@hover
			bg:hue5 ..dark:hue5
		cursor:pointer
	# css .benefits
	<self.card> 
		<span.pill> name
		<.price>
			<span.num> "${price}"
			<span.text> " lifetime"
		<ul.benefits> for item in benefits
			<li> item
		<.button> "Get Started"
		
tag student-portal
	css d:hflex
		tween: margin-left 2dur
		&.open
			ml: 1leftbar
	css .page
		bg:warm1 ..dark:hsla(0,0%,7%,1)
		w:100vw
		d:block
	def render
		<self.open=state.sidebar>
			<left-bar>
			<.page[ofy:scroll h:100vh]> 
				<student-portal-topbar>
				<student-portal-main>

tag student-portal-main
	<self>
		<module-closed route="/closed/">
		<module-open route="/open/">
		
tag student-portal-rightbar
	css self
		flb:1rightbar
		d:vflex g:1sp
	<self>
		<buy-module name="Market Module" price=5 benefits=['One Module','5 chapters','400 words']>
		<buy-module[bd:5px solid hue5] name="All Modules" price=20 benefits=['5 modoules','40 chapters','2200 words']>
tag student-portal-topbar
	css d:flex j:center a:center 
		h:1topbar
	css .menu-icon 
		tween: background-color
		bg:gray2 ..dark:gray8
		h:1topbar w:1topbar mr:auto
		cursor:pointer d:flex jc:center ai:center
	css svg
		tween: stroke 1dur
		stroke: gray9 ..dark:gray1
		
	css svg size:.5topbar
	css .nav-items p:1sp d:hflex g:3sp ff:'merriweather' fw:bold ls:1px
	css li cursor:pointer 
		c:gray7 ..dark:gray3
		@hover:hue6
	css .menu-open l:0
	
	def toggleMenu
		state.sidebar = !state.sidebar
		db.save!
	
	def toggleDarkmode
		state.darkmode = !state.darkmode
		
		let root = document.getElementsByTagName( 'html' )[0]
		if state.darkmode 
		then root.flags.add('dark')
		else root.flags.remove('dark')
		
		db.save!
	<self>
		<.menu-icon @click.toggleMenu>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" .w-6.h-6>
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		<ul.nav-items>
			<li route-to="/"> "home"
			<li route-to="/login"> "login"
			<li route-to="/open/"> "open"
			<li route-to="/closed/"> "closed"
			<li> 
				"Letter Chart "
				<span[ff:"open khmer school" fs:xl font-style:italic]> "ក"
			<li> 
				"Dicionary "
				<i.fa.fa-book>
			<li> 
				"Leaderboard "
				<i.fa.fa-trophy>
			<li @click.toggleDarkmode> 
				"Darkmode "
				<i.fa.fa-moon>
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
					
tag bottom-bar
	css self
		d:block c:gray9 h:1bottombar w:100% d:box
		# mt:auto # pushes to bottom of viewport if parent is vflex
	css .wrapper
		bxs:md,xl 
		bg:white ..dark:gray8
		max-width:800px
		h:1bottombar 
		d:box
		rd:full 
		min-width:200px
		d:hflex 
		g:1sp
		p:.33bottombar
	css .number-toggle 
		rd:full s:30px
		d:box 
		bg:gray1 ..dark:gray9
		c:gray5 ..dark:gray4
		pos:relative
		cursor:pointer
	def render		
		<self>
			<.wrapper>
				<.number-toggle>
					<left-chevron>
				<.number-toggle.active>
					<progress-ring progress=40 size=30> "1"
				<.number-toggle>
					<progress-ring progress=20 size=30> "2"
				<.number-toggle>
					<progress-ring progress=20 size=30> "3"
				<.number-toggle>
					<progress-ring progress=20 size=30> "4"
				<.number-toggle>
					<progress-ring progress=20 size=30> "5"
				<.number-toggle>
					<progress-ring progress=20 size=30> "6"
				<.number-toggle>
					<progress-ring progress=20 size=30> "7"
				<.number-toggle>
					<progress-ring progress=20 size=30> "8"
				<.number-toggle>
					<right-chevron>
				
tag left-chevron
	<self>
		<svg[s:20px] xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
			
tag right-chevron
	<self>
		<svg[s:20px] xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
			
tag progress-ring
	### SAMPLE TAG
	<ProgressRing[$progress-color: purple5 $progress-bg: purple1 
		$center-color: white $text-color: purple5 $stroke-percent: 80%] 
		progress=progress size=100> 
		<span> "habit"
		<span slot="subtitle"> "{progress}%"
	###
	prop size = 100
	css ta:center
		$progress-color: hue2 ..dark:hue7
		$progress-bg: gray1 ..dark:gray9
		$text-color: gray5 ..dark:gray4
		$center-color: gray1 ..dark:gray9
		@hover
			$progress-bg:gray2
			$center-color:gray2
		$stroke-percent: 70%
		pos:absolute
	css &.disabled o:30%
	css .circular
		size:$size
		bg:none
		pos:relative
		.inner
			bg:$center-color
			pos:absolute
			zi:6
			top:50%
			left:50%
			size:$stroke-percent
			y: -50%	x: -50%
			rd:full
			ja:center
		.title
			zi:10
			fs:18px
			c:$text-color
			mt:7%
		.circle
			.bar
				pos:absolute
				size:100%
				bg:$progress-bg
				rd:100%
				# clip: rect(0px, 100px, 100px, 50px) # TODO ERIC: These numbers must be dynamic
				.progress
					bg:$progress-color
					pos:absolute
					size:100%
					rd:100%
					# clip: rect(0px, 50px, 100px, 0px) # TODO ERIC: These numbers must be dynamic
			.left rotate: -180deg tween: rotation 1dur
			.right zi:3 tween: rotation 1dur
	def render
		<self>
			<div .circular[size:{size+'px'}]>
				<div .inner[d:vflex]>
					<div .title[fs:sm lh:100%]> <slot>
				<div .circle>
					let step = 180 / 50
					let left_progress = 0
					let right_progress = 0
					if progress > 50
						left_progress = "{(progress - 50) * step}deg"
						right_progress = "180deg"
					else
						left_progress = "0deg"
						right_progress = "{(progress) * step}deg"
					css .bar clip: rect(0px, {size + "px"}, {size + "px"}, {(size / 2) + "px"}) 
					css .progress clip: rect(0px, {(size / 2) + "px"}, {size + "px"}, 0px) 
					<div .bar.left>
						<div .progress[rotate:{left_progress}]>
					<div .bar.right>
						<div .progress[rotate:{right_progress}]>