tag admin-tools
	css self
		with:100% bg:hue9
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
	def togglePhraseEditor
		state.togglePhraseEditor!
		imba.commit!
	def toggleWordEditor
		state.toggleWordEditor!
		imba.commit!
	<self>
		<div[c:hue3]> "edit active:"
		<button @click.togglePhraseEditor>
			"module"
		<button @click.togglePhraseEditor>
			"lesson"
		<button @click.togglePhraseEditor>
			"phrase"
		<button @click.toggleWordEditor>
			"word"