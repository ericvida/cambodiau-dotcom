tag sidebar-toggle
	css self
		bg:white @darkmode:gray7 @hover:hue2
		c:gray7	@darkmode:gray2
		rd:0 md md 0 px:.5sp
		mt:1sp
		py:0.5sp
	def toggleLessonNav
		if (state.leftnav-lesson is yes) and (state.leftnav-phrase is yes)
			state.leftnav-lesson = false
		elif (state.leftnav-lesson is no) and (state.leftnav-phrase is yes)
			state.leftnav-phrase = false
		else
			state.leftnav-lesson = true
			state.leftnav-phrase = true
		api.save!
		LOG 'toggled nav', state.leftnav-lesson, state.leftnav-phrase
		imba.commit!
	<self @click.toggleLessonNav>
		if state.leftnav-phrase
			if state.leftnav-lesson
				<svg%chevron-left-single [w:20px fs:xl]  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			else
				<svg%chevron-left-double [w:20px fs:xl] xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
		else
			<svg%chevron-right-double [w:20px fs:xl] xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />