# TODO: Make modal close when clicking outside of the modal
import '../state/index'
import {dictionary} from '../data/dictionary'

let mock-phrase-data = {
	english: "In the beginning God created the heavens and the earth."
	khmer: "កាល ដើម ដំបូង ព្រះ បានបង្កើត ផ្ទៃមេឃ  និង  ផែនដី ។"
}

tag phrase-editor
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
			
		h3
			fs:.8em c:gray4 m:0
		section
			w:100%
		input
			w:100%
			bg: gray1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
		%pill-wrapper
			flex-wrap:wrap
			d:flex gap:.4sp
			ff:monospace
		%pill
			bd:2px solid gray1
			px:.5sp
			rd:md
		.in-dictionary
			bg:amber3
		.in-dictionary-no-def
			bg:gray1
		.not-in-dictionary
			bg:rose3
	def closeModal
		state.closeModals!
	<self ease>
		<.modal-bg @click.closeModal>
		<.card[d:flex zi:30]>
			<h1> "module > lesson > phrase"
			<section>
				<h3> "meaning"
				<input bind=mock-phrase-data.english type="text">
			<section>
				<h3> "khmer"
				<input bind=mock-phrase-data.khmer type="text">
			<section>
				<h3> "words (parsed)"
				<div%pill-wrapper>
					for word in mock-phrase-data.khmer.split(' ')
						# let obj = dictionary[word]
						# console.log word
						<span%pill 
							.in-dictionary=(dictionary.hasOwnProperty(word) and (dictionary[word].def is true))
							.in-dictionary-no-def=(dictionary.hasOwnProperty(word) and (dictionary[word].def is false))
							.not-in-dictionary=(!dictionary.hasOwnProperty(word))
						> word
			<section[justify-self:flex-end]>
				<h3> "vida phonetics (generated)"
				<div%pill-wrapper>
					for word in mock-phrase-data.khmer.split(' ')
						# let obj = dictionary[word]
						# console.log word
						if dictionary.hasOwnProperty(word)
							<span%pill 
								.in-dictionary=(dictionary[word].def isnt false)
								.in-dictionary-no-def=(dictionary[word].def is false)
								> dictionary[word]..vida
						else
							<span%pill.not-in-dictionary> word
			<section[flex-grow:1]>
			<section[w:100% d:flex jc:end]>
				<.button[w:200px p:.5sp ta:center as:end]> "save"
					css bg:gray1 @hover:hue2