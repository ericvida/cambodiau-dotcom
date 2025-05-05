import '../node_modules/imba/preflight.css'
global css
	@root
		fs:16px 
		lh:24px 
		fw:400
		1sp:16px # space for gaps and paddings
		1dur:.20s # animation duration
		1lessonbar: 300px # sidebar-width
		1topbar: 60px # top bar height and menu button size
		1bottombar: 40px # top bar height and menu button size
		1rightbar: 240px # right bar size
		1phrasebar:60px # right bar size
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
		d:vflex 
		g:1sp
		rd:1rd
		p:1sp
		c:gray9 @darkmode:gray1
		h2 c:gray4 @darkmode:gray1 fs:lg
	a cursor:pointer
		@hover
			td:underline
	
# ui[epic=layout, seq=1] sidebar
tag layout-sidebar # left sidebar of content
	css self
		d:grid
		h:100vh
		gtc: minmax(250px, 25%) 1fr
	css .left
		bg:cooler1
	css .content
		bg:white
	<self>
		<section.left>
			<slot name="left">
		<section.content>
			<slot name="main-nav">
			<slot name="main">
### NOTE: How to use layout-sidebar
<layout-sidebar>
	css gtc: minmax(250px, 20%) 1fr # sidebar content
	<nav slot="left">
	<div> "content"
###
tag layout-sidebars
	css self
		d:grid
		min-height:100%
		pos:absolute inset:0
		gtc: minmax(250px, 20%) 1fr minmax(250px, 20%)
	css .left
		ofy:auto
		bdr:1px solid warm2
	css .content
		bg:white
		ofy:auto
		h:auto
		
	css .right
		bg:white
		p:1sp
		pl:0
		min-height: 100%
		d:vflex
		ofy:auto
		gap:1sp
		>> @first
			d:vflex
			gap:1sp
	css >>> .card
		p:1sp
		fs:sm
		bg: white 
		rd:md
		# bd:1px solid warm2
		bxs:0px 0px 1px 1px warm2 inset
		# bxs:md
	css >>> h2
			pb:0.3sp c:warm3
	css >>> h3
			fs:0.9em c:warm4
	
	
	css >>> .content-card
		ff: "Open Khmer School"
		fs: 2em
		rd:lg
		.title-wrapper
			bg:warm1
			ta:center
			w:100%
			pt:1em
			pb:0.6em
			d:hflex jc:center flex-wrap:wrap
		img
			rdt:lg
			w:100%
		.text-wrapper
			p:1sp
			w:100%
			# bg:indigo0/50
			bd:2px solid warm1
			bdt:0
			rdb:lg
		.khmer-word
			cursor: pointer
			c:warm8
			h:3em
			py:1sp
			&.title
				h:3em
				fs:xx-large
			@hover
				bg:warm0
				c:warm9
			@active, @focus
				bg:warm1
				c:warm9
			&.isKnown
				c:indigo5
			&.isActive
				bg:indigo1/50
			&.isCurrent
				bg:indigo1
	<self>
		<section.left>
			<slot name="left">
		<section.content>
			<slot name="main">
		<section.right>
			<slot name="right">
### NOTE: How to use layout-sidebars
<layout-sidebars>
	css gtc: minmax(250px, 20%) 1fr minmax(250px, 20%) # sidebar content sidebar
	<nav slot="left">
	<div> "content"
	<nav slot="right">
###

tag layout-pancakes
	css self
		d:grid
		gtr: auto 1fr 
		min-height:100vh
		# pos:absolute 
		# inset:0
		ofy:hidden
		w:100%
	
	css main
		ofy:auto
		pos:relative
	<self>
		<header>
			<slot name="top">
		<main>
			<slot name="middle">
		<footer>
			<slot name="bottom">
### NOTE: How to use LayoutPancakes
<layout-pancakes>
	css gtr: 80px 1fr 80px # sidebar content sidebar
		>> * p:1sp # padding around immediate children
	<nav slot="top">
	<div slot="middle"> "content"
	<nav slot="bottom">
###

tag layout-holygrail
	css self
		d:grid
		h:100vh
		# gt: auto 1fr auto / auto 1fr auto
		gtc: 200px 1fr 200px
		gtr: auto 1fr auto
		.header
			bg:cooler1
			gc: 1 / 4
		.left
			bg:cooler2
			gc: 1 / 2
		.main
			bg:white
			gc: 2 / 3
		.right
			bg:cooler2
			gc: 3 / 4
		.footer
			bg:indigo2
			gc: 1 / 4
	<self>
		<header.header> <slot name="header">
		<div.left> <slot name="left">
		<main.main> 
			<slot>
		<div.right> <slot name="right">
		<footer.footer> <slot name="footer">

### NOTE: How to use layout-holygrail
<layout-holygrail>
	css gtr: auto 1fr auto # header main footer
		gtc: minmax(200px, 20%) 1fr minmax(200px, 20%) # sidebar content sidebar
		>> * p:1sp # padding around immediate children
	<div slot="header"> "header"
	<div slot="left"> "Left Sidebar"
	<div> "Main content"
	<div slot="right"> "rightSidebar"
	<div slot="footer"> "footer"
###	
global css
	@root
		1cardmin: 300px
		1cardmax: 600px
	.width-container
		min-width: 1cardmin @sm: calc(2cardmin + 2sp) @lg: calc(3cardmin + 4sp)
		max-width: 1200px
		mx:auto
	.layout-card-grid
		w: 100%
		d:grid
		# gap:1sp
		mx:auto
		gtc: minmax(300px, 2cardmax) @sm: repeat(2, minmax(300px, 2cardmax)) @lg: repeat(3, minmax(300px, 500px))
		ai:center
	.stretchy-card
		min-width:300px 
		max-width:2cardmax
		w:100%
		p:1sp
		
### NOTE: How to use layout-card-grid
<layout-card-grid>
	css gtc: repeat(2,1fr) # column num, size
		gtr: repeat(1,1fr) # row num, size
		max-width: 800px
	<div.card>
	<div.card>
	<div.card>
###
tag layout-card-flex-grid # repeat-auto-max
	css self
		d:flex
		flex-wrap:wrap
		jc:start
		gap:1sp
	<self>
		<slot>



