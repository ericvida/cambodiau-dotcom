# CARD[epic=CARD, seq=27] user-bio-card
tag user-bio-card
	css self d:hflex g:1sp ai:center p:0sp my:1sp
	css .user-image
		size:4sp
		rd:full 
		bd:3px solid gray1/20 bxs:sm,xl,xl
	css .user-info
		w:100% g:.5sp d:vflex ff: 'Merriweather Sans', sans-serif;
	css .user-stats
		d:hflex ai:flex-end 
		*@first mr:auto
	css .user-name
		mr:auto fw:bold fs:20px 
	css .user-wordcount
		c:gray4 @darkmode:gray6 fs:xxs 
	css .user-progress
		bg:gray2 @darkmode:gray8  h:10px w:100% rd:full pos:relative zi:0 of:hidden
		.progress-fg
			bg:hue5 h:10px w:100% rd:full pos:absolute t:0 r:90% zi:10 rdr:full
	# css .user-actions
	# 	d:hflex jc:space-between
	css .user-settings c:gray4 @darkmode:gray6 @hover:hue5 fs:xs
	def signOut
		# state.auth = no
		imba.commit

	def render
		<self>
			<img src=user_modulus.image>
			<.user-info>
				<div>
					<h2.user-name> "DinaLearns"
				<a.user-wordcount> "400/4000"
				<progress-bar .color=#context.active progress=progress>
				<.user-stats>
					<a.user-settings route-to="/settings/"> "settings"
					<a.user-settings @click=state.signOut> "Sign Out"