tag admin-tools
	css self
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
	<self>
		<div[c:hue9]> "Admin Tools:"
		<button @click.toggleCourseEditor>
			"course"
		<button @click.toggleLessonEditor>
			"lesson"
		<button @click.togglePhraseEditor>
			"phrase"
		<button @click.toggleWordEditor>
			"word"
		<div[c:hue9 fs:2em ff:sans]> "∙"
		<button @click.downloadJson>
			"download json"
		<button @click.uploadJson>
			"upload json"