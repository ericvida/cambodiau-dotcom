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

