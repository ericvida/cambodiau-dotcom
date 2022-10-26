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
		