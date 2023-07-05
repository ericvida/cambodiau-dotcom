tag admin-tools
	css self
		w:100% bg:hue9
		h:1topbar
		p:1sp
		d:flex
		g:1sp
		button
			list-style-type:none
			bg:gray2
			px:.6sp
			rd:sm
			@hover
				bg:hue3
		d:flex
	def toggleModulusEditor
		state.toggleModulusEditor!
		LOG 'clicked toggle modulus'
		imba.commit!
	def toggleLessonEditor
		LOG 'clicked toggle lesson'
		state.toggleLessonEditor!
		imba.commit!
	def togglePhraseEditor
		state.togglePhraseEditor!
		imba.commit!
	def toggleWordEditor
		state.toggleWordEditor!
		imba.commit!
	<self>
		<div[c:hue3]> "edit active:"
		<button @click.toggleModulusEditor>
			"module"
		<button @click.toggleLessonEditor>
			"lesson"
		<button @click.togglePhraseEditor>
			"phrase"
		<button @click.toggleWordEditor>
			"word"