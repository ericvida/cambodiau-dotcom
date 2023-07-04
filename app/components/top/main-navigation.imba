# TAG[epic=NAV, seq=1] main-navigation
tag main-navigation
	css self
		d:hflex gap:1sp fs:10px
	css a, button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		p:.4sp rd:md ai:center
	def toggleLeftNav
		state.left = !state.left
		api.save!
		LOG 'toggled nav', state.left
		imba.commit!
	def signOut
		state.signOut!
		imba.commit!

	def render
		<self>
			<cambodiau-logo route-to="/" [width:200px mr:auto cursor:pointer]>
			<a route-to="/store">
				<div> "Store"
			<a route-to="/learning">
				<div> "Learning"
			<a route-to="/dictionary">
				<div> "Dictionary"
			<a route-to="/phonetics">
				<div> "Phonetics"
			<a route-to="/phrase-editor">
				<div> "phrase"
			if state.user
				<a @click.signOut>
					<div> "Sign out"
				<a route-to="/cms">
					<div> "CMS"
			else
				<a route-to="/login">
					<div> "Login"
				<a route-to="/create">
					<div> "Create Account"