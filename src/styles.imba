import '../node_modules/imba/preflight.css'
global css
	@root
		fs:16px 
		lh:24px 
		fw:400
		1sp:16px # space for gaps and paddings
		1dur:.20s # animation duration
		1leftbar: 400px # sidebar-width
		1topbar: 50px # top bar height and menu button size
		1rightbar: 260px # right bar size
		1bottombar:80px # right bar size
		1rd:6px # border radius standard
		# * tween:all 1dur
		$heading: 'Merriweather', serif
		$copy: 'Merriweather Sans', sans-serif
		hue:indigo
		ff: $copy
	h1,h2,h3,h4,h5,h6
		ff:$heading
	h1,h2,h3,h4,h5,h6
		c:gray7 ..dark:gray3
	app
		ofx:hidden
		c:gray9 
		&.dark: c:gray0
	.card
		bg:white ..dark: gray9
		d:vflex g:1sp
		rd:1rd p:1sp
		c:gray9 ..dark:gray1
		h2 c:gray4 ..dark:gray1 fs:lg
	a cursor:pointer
		@hover
			td:underline
