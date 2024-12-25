# TAG[epic=NAV, seq=1] main-nav
tag main-nav
	css self
		d:flex gap:1sp fs:10px
		h:1topbar
		p:.6sp
		# max-width:800px
		# mx:auto
	css button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		rd:md px:.5sp
		
	def signOut
		state.signOut!
		imba.commit!
	
	def render
		<self>
			
			<cambodiau-logo route-to="/">
				css 
					mr:auto 
					cursor:pointer
					py:.3sp
			# <button route-to="/store">
			# 	<div> "Store"
			<button route-to="/learning">
				<div> "Learning"
			<button route-to="/dictionary">
				<div> "Dictionary"
			<button route-to="/phonetics">
				<div> "Phonetics"
			
			# if state.user
			# 	<button @click.signOut>
			# 		<div> "Sign out"
			# else
			# 	<button route-to="/login">
			# 		<div> "Login"
			# 	<button route-to="/signup">
			# 		<div> "Signup"
			# if state.admin
			# 	<button @click=(state.show_editor = !state.show_editor)>
			# 		css bg:hue3
			# 		<div> "Editor"
					
