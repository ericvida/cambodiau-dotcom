let mock-active-word = "ឡើង"
let mock_word_data = {
	spellings: ["ឡើង"] # sometimes khmer words can have multiple acceptable spellings
	phonetics: [
		vida: ["laẹṇg"]
		ipa: ["laǝŋ"]
	]
	definitions: [
		use: "verb"
		text: "to go up|ascend|to rise, get up, take off (aircraft)|to climb|to get on|to board (a means of transport)|to swell|rise (of dough)|to increase|to grow"
		source: "vida"
		---
		use: ""
		text: "to get on"
		source: "google translate"
	]
}

def findByKey key
	for word in dictionary
		if word.khmer_spellings.includes(key)
			return word

tag word-editor
	# transition
		
	css section
			w:100%
	css .word-group input
			max-width:100%
			min-width:0%
			width:30%
	css button.add-button
		# bd:3px solid gray2 @hover:3px solid hue2
		shadow: 0 0 0px 3px gray2 inset @hover:0 0 0px 3px hue2 inset
		rd:md
		size:1.8em
		fs:2em
		bg:none @hover:hue0
		c:gray3 @hover:hue3
		fw:bold
	css .word-pill-wrapper
			flex-wrap:wrap
			d:flex gap:.4sp
	css .word-pill
			bd:2px solid gray1
			px:.5sp
			rd:md
	css .in-dictionary
			bg:amber3
	css .in-dictionary-no-def
			bg:gray1
	css .not-in-dictionary
			bg:rose3
	css .word-group
		d:flex gap:.5sp flex-wrap:wrap
	css .definition-list
		d:vflex gap:.5sp
	css .definition-grid
		d:hgrid gap:.5sp
		# w:100%
		grid-template-columns: auto 100px 100px
	css input.definition
		flg:1
	css .use, .source
		w:100px
	css .vida-pronunciations, .ipa-pronunciations
		ff:monospace
	def closeModal
		state.hideEditor!
	def toggleCourseEditor
		closeModal!
		state.toggleCourseEditor!
		imba.commit!
	def toggleLessonEditor
		closeModal!
		state.toggleLessonEditor!
		imba.commit!
	def togglePhraseEditor
		closeModal!
		state.togglePhraseEditor!
		imba.commit!
	<self>
		<%content-wrapper>
			css d:vflex zi:30
			<h1> 
				<span @click.toggleCourseEditor> "Course > "
				<span @click.toggleLessonEditor> "Lesson > "
				<span @click.togglePhraseEditor> "Phrase > "
				<span> "Word Editor"
			<section>
				<h3> "khmer spellings"
				<.word-group>
					for word in mock_word_data.spellings
						<input bind=word type="text">
					<button.add-button> "＋"
			<section>
				<h3> "vida pronunciations"
				<.word-group .vida-pronunciations>
					<input bind=mock_word_data.phonetics.vida type="text">
					<button.add-button> "＋"
			<section>
				<h3> "ipa pronunciations (generated from vida)"
				<.word-group .ipa-pronunciations>
					<.word-pill> mock_word_data.phonetics.ipa
			<section>
				<.definition-list>
					<.definition-grid>
						<h3> "definition"
						<h3> "use"
						<h3> "source"
					for item in mock_word_data.definitions
						<.definition-grid>
							<input.hdefinition bind=item.text type="text">
							<input.use bind=item.use type="text">
							<input.source bind=item.source type="text">
					<button.add-button> "＋"
			<section>
				<h3> "audio"
				<[d:hflex gap:1sp]>
					# if no audio file on server
					<button[bg:gray1 @hover:hue2 py:.6sp px:1sp rd:md]> "upload file" 
					# if has audio file
					<button[bg:hue1 @hover:hue2 py:.6sp px:1sp rd:md]> "play"
					<button[bg:gray1 @hover:rose2 py:.6sp px:1sp rd:md]> "delete file"
