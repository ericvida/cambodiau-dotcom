let mock-active-word = "ឡើង"
let mock-word-data = {
	khmer_spellings: ["ឡើង"] # sometimes khmer words can have multiple acceptable spellings
	rank: "52" # this could generated from how many times a word is used in all the courses compared to other words. most of the current rankings came from someone else's analysis using web khmer data, not my course data.
	vida_pronunciations: ["laẹṇg"] # sometimes words can have multiple pronunciations
	vida_pronunciations_generated: "laẹṇg" # generated from online ipa, may not be accurate. I want to replace overtime with my own in the vida array above.
	ipa_pronunciations: ["laǝŋ"]
	word_definitions: [
		use_of_word: "verb"
		definition: "to go up|ascend|to rise, get up, take off (aircraft)|to climb|to get on|to board (a means of transport)|to swell|rise (of dough)|to increase|to grow"
		source: "vida"
		---
		use_of_word: ""
		definition: "to get on"
		source: "google translate"
		]
}
tag word-editor
	# transition
	css pos:absolute inset:0
		d:grid zi:12
		min-height: 100vh
		ja:center
		m:0
		o@off:0 ea:1s
		.card
			x@in:100px x@out:100px ea:1s
			d:flex zi:30 ofy:scroll
			min-width: 500px
			width: 60vw
			height: 80vh
			ofy:scroll
			
	css h3
			fs:.8em c:gray4 m:0
	css section
			w:100%
	css input
			bg: gray1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
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
		state.closeModals!
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
	<self ease>
		<.modal-bg @click.closeModal>
		<.card[d:flex zi:30]>
			<h1> 
				<span @click.toggleCourseEditor> "Course > "
				<span @click.toggleLessonEditor> "Lesson > "
				<span @click.togglePhraseEditor> "Phrase > "
				<span> "Word Editor"
			<section>
				<h3> "khmer spellings"
				<.word-group>
					for word in mock-word-data.khmer_spellings
						<input bind=word type="text">
					<button.add-button> "＋"
			<section>
				<h3> "vida pronunciations"
				<.word-group .vida-pronunciations>
					for word in mock-word-data.vida_pronunciations
						<input bind=word type="text">
					<button.add-button> "＋"
			<section>
				<h3> "ipa pronunciations (generated from vida)"
				<.word-group .ipa-pronunciations>
					for word in mock-word-data.ipa_pronunciations
						<.word-pill> word
			<section>
				<.definition-list>
					<.definition-grid>
						<h3> "definition"
						<h3> "use"
						<h3> "source"
					for item in mock-word-data.word_definitions
						<.definition-grid>
							<input.hdefinition bind=item.definition type="text">
							<input.use bind=item.use_of_word type="text">
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
			<div[flg:1]>
			<section>
				css w:100% d:flex jc:end
				<button[bg:gray1 @hover:hue2 py:.6sp px:1sp rd:md]> "save"