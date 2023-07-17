tag admin-tools
	def toggleEditor
		if state.show_editor
			state.hideEditor!
		else
			state.showEditor!
		imba.commit!
	def toggleCourseEditor
		state.toggleCourseEditor!
		imba.commit!
		
	def toggleLessonEditor
		state.toggleLessonEditor!
		imba.commit!

	def togglePhraseEditor
		state.togglePhraseEditor!
		imba.commit!

	def toggleWordEditor
		state.toggleWordEditor!
		imba.commit!

	def downloadJson
		# Downloads entire Course Data from Database in JSON format.
		window.alert('downloading json')

	def uploadJson
		# Upload Course Data that was modified locally from JSON format.
		window.alert('uploading json')
	def render
		<self>
			css pos:fixed
				d:vflex bg:indigo5 rd:xl
				b:6sp
				r:0.5sp
				zi:30
				fs:xxs
				p:.5sp
				g:0.5sp
				w:5sp
				button
					list-style-type:none
					bg:gray2
					px:.6sp
					rd:sm
					@hover
						bg:hue3
			<div[c:hue1 ta:center]> "Admin Tools"
			<button @click.toggleEditor>
				"template"
			<button @click.toggleCourseEditor>
				"course"
			<button @click.toggleLessonEditor>
				"lesson"
			<button @click.togglePhraseEditor>
				"phrase"
			<button @click.toggleWordEditor>
				"word"
			<button @click.downloadJson>
				"edit json"
			