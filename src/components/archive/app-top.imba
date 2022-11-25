tag app-top
	css d:flex j:center a:center 
		h:1topbar
	css .menu-icon 
		# tween: background-color
		bg:gray2 @darkmode:gray8
		h:1topbar w:1topbar mr:auto
		cursor:pointer d:flex jc:center ai:center
	css svg
		# tween: stroke 1dur
		stroke: gray9 @darkmode:gray1
	css svg size:.5topbar
	css .nav-items p:1sp d:hflex g:3sp ff:'merriweather' fw:bold ls:1px fs:xs
	css li cursor:pointer 
		c:gray7 @darkmode:gray3
		@hover:hue6
	css .menu-open l:0
	
	# def toggleMenu
	# 	# ui.left = !ui.left
	# 	api.save!
	
	def toggleDarkmode
		api.toggleDark!
		# ui.darkmode = !ui.darkmode
		
		let root = document.getElementsByTagName( 'html' )[0]
		if state.dark
		then root.flags.add('mod-darkmode')
		else root.flags.remove('mod-darkmode')
	<self>
		<.menu-icon @click.toggleMenu>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" .w-6.h-6>
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		<ul.nav-items>
			<li route-to="/"> "home"
			<li route-to="/login"> "login"
			<li route-to="/open/"> "open"
			<li route-to="/closed/"> "closed"
			<li route-to="/letters">
				"Letter Chart "
				<span[ff:"open khmer school" fs:xl font-style:italic]> "ក"
			# <li route-to="/dictionary"> 
			# 	"Dicionary "
			# 	<i.fa.fa-book>
			# <li route-to="/leaderboard"> 
			# 	"Leaderboard "
			# 	<i.fa.fa-trophy>
			<li @click.toggleDarkmode> 
				"Darkmode "
				<i.fa.fa-moon>