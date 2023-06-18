tag letters-chart
	css self d:vflex
		min-height: calc(100vh - 1topbar)
	css .nav-wrapper
		d:hgrid
		p:1sp
		min-width:1000px mx:auto
		max-width:1000px mx:auto
	css .wrapper
		d:hgrid g:1sp gtc:3fr 1fr
		p:1sp
		width:1000px mx:auto
	css .modulus-grid
		d:grid gtc: 1fr g:1sp w:100%
		# gtr: auto auto auto auto
	css .rightbar
		d:vflex g:1sp
	def render
		<self> 
			<.nav-wrapper>
				<letters-nav>
			<.wrapper>
				<main.modulus-grid>
					<letters-consonants route="consonants">
					<letters-vowels route="vowels">
					# <div.pairing-exceptions.card>
					# 	<h2> "pairing-exceptions"
					# <div.independent-voewls.card>
					# 	<h2> "independent-voewls"
					# <div.numbers.card>
					# 	<h2> "numbers"
				<.rightbar>
					<.card>
						<h2> "Active Letter"
					<.card>
						<h2> "phonetics"
					<.card>
						<h2> "Active Letters"
					<.card>
						<h2> "Active Letters"


tag letters-nav < nav	
	css self w:100%
	css ul d:flex j:space-between w:100% g:1sp
	css li bg:gray3 px:1sp rd:1rd
	<self>
		<ul>
			<li route-to="consonants"> "consonants"
			<li route-to="vowels"> "Vowels"
			<li> "Independent Vowels"
			<li> "Pairings"
			<li> "Pairing Exceptions"
