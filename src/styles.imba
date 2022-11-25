import '../node_modules/imba/preflight.css'
global css
	@root
		fs:16px 
		lh:24px 
		fw:400
		1sp:16px # space for gaps and paddings
		1dur:.20s # animation duration
		1leftbar: 300px # sidebar-width
		1topbar: 60px # top bar height and menu button size
		1rightbar: 260px # right bar size
		1phrasenav:60px # right bar size
		1rd:6px # border radius standard
		# * tween:all 1dur
		$heading: 'Merriweather', serif
		$copy: 'Merriweather Sans', sans-serif
		$khmer: 'Open Khmer School', serif
		hue:indigo
		ff: $copy
	h1,h2,h3,h4,h5,h6
		ff:$heading
	h1,h2,h3,h4,h5,h6
		c:gray7 @darkmode:gray3
	app
		ofx:hidden
		c:gray9 @darkmode:gray0
	.card
		bg:white @darkmode: gray9
		d:vflex g:1sp
		rd:1rd p:1sp
		c:gray9 @darkmode:gray1
		h2 c:gray4 @darkmode:gray1 fs:lg
	a cursor:pointer
		@hover
			td:underline
	.key
		px:.4sp rd:md fs:.7em py:.2sp lh:1sp
		bd:1px solid warm4 @darkmode:1px solid indigo4
		c:warm5 @darkmode: indigo4
		pb:.3em
		ff:mono
	.key-text fs:xs 
		c:warm6 @darkmode:warm4