let mock-active-word = "ឡើង"
let mock-word-data = {
	khmer_spellings: ["ឡើង"] # sometimes khmer words can have multiple acceptable spellings
	rank: "52" # this could generated from how many times a word is used in all the modules compared to other words. most of the current rankings came from someone else's analysis using web khmer data, not my module data.
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
	css self
		o@off:0 ea:1s
		.card
			x@in:100px x@out:100px ea:1s
	css pos:absolute inset:0
		d:grid zi:12
		h:100vh 
		ja:center
		m:0
		.card  
			w:500px
			h:800px
			
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
	css %pill-wrapper
			flex-wrap:wrap
			d:flex gap:.4sp
	css %pill
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
	
	<self ease>
		<.modal-bg @click.closeModal>
		<.card[d:flex zi:30]>
			<h1> "Module > Lesson > Phrase > Word editor"
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
						<%pill> word
			<section>
				<h3> "definitions"
				<.definition-list>
					for item in mock-word-data.word_definitions
						<.definition-grid>
							<input.hdefinition bind=item.definition type="text">
							<input.use bind=item.use_of_word type="text">
							<input.source bind=item.source type="text">
					<button.add-button> "＋"
			<section>
				<h3> "audio"
				<button[bg:gray1 @hover:hue2 py:.6sp px:1sp rd:md]> "choose file"
			<div[flg:1]>
			<section>
				css w:100% d:flex jc:end
				<button[bg:gray1 @hover:hue2 py:.6sp px:1sp rd:md]> "save"
			# <section>
			# 	<h3> "khmer"
			# 	<input bind=mock-phrase-data.khmer type="text">
			# <section>
			# 	<h3> "words (parsed)"
			# 	<div%pill-wrapper>
			# 		for word in mock-phrase-data.khmer.split(' ')
			# 			# let obj = dictionary[word]
			# 			# console.log word
			# 			<span%pill 
			# 				.in-dictionary=(dictionary.hasOwnProperty(word) and (dictionary[word].def is true))
			# 				.in-dictionary-no-def=(dictionary.hasOwnProperty(word) and (dictionary[word].def is false))
			# 				.not-in-dictionary=(!dictionary.hasOwnProperty(word))
			# 			> word
			# <section[justify-self:flex-end]>
			# 	<h3> "vida phonetics (generated)"
			# 	<div%pill-wrapper>
			# 		for word in mock-phrase-data.khmer.split(' ')
			# 			# let obj = dictionary[word]
			# 			# console.log word
			# 			if dictionary.hasOwnProperty(word)
			# 				<span%pill 
			# 					.in-dictionary=(dictionary[word].def isnt false)
			# 					.in-dictionary-no-def=(dictionary[word].def is false)
			# 					> dictionary[word]..vida
			# 			else
			# 				<span%pill.not-in-dictionary> word
			# <section[flex-grow:1]>
			# <section[w:100% d:flex jc:end]>
			# 	<.button[w:200px p:.5sp ta:center as:end]> "save"
			# 		css bg:gray1 @hover:hue2