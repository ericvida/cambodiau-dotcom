import '../state/index'
import {audio} from '../audio'
import {dictionary} from '../data/dictionary'
import {clusters} from '../data/clusters'

# LAYOUT[epic=LAYOUT, seq=23] lesson-page
tag lesson-page
	prop modulus = {}

	css d:vflex @lg:hflex g:1sp
		# bg:red
	css .modulus-grid
		# flg:1 d:vflex g:1sp
		d:grid g:1sp
		gtc: 1fr @md: minmax(1rightbar, 3rightbar) 1rightbar
		# grid-template-areas: "a a b", "a a b"
	css .image 
		rd:1rd
		aspect-ratio: 2 / 1
		w:100%
	css .left, .right
		d:vflex
		gap:1sp
	css .phonetics
		ff:mono d:flex gap:0.5sp flex-wrap:wrap

	def render
		<self>
			if modulus.lessons
				let phrase = modulus.lessons[state.lesson]..phrases[state.phrase]
				<main.modulus-grid>
					<.left>
						if phrase.image
							<img src=phrase.image .image> phrase.image
						if state.admin
							<AdminTools>
						<WordNav.card @click.commit modulus=modulus phrase=phrase rt=route>
						<.card> 
							<h2> "Phonetics"
							<p.phonetics>
								if state.ipa
									for word in phrase..khmer.split(' ')
										let obj = dictionary[word]
										if obj..ipa || obj..vida || obj..vida_auto || word
											<span> obj..ipa || obj..vida || obj..vida_auto || word
										else
											<span> "n/a"
											<> ERROR word, "no phonetics available"
								else
									for word in phrase.khmer.split(' ')
										let obj = dictionary[word]
										if obj..vida || obj..vida_auto || obj..ipa || word
											<span> obj..vida || obj..vida_auto || obj..ipa || word
										unless obj..vida || obj..vida_auto || obj..ipa || word
											<span> "n/a"
											<> ERROR word, "no phonetics available"
						<.card>
							<h2> "Meaning"
							<p> phrase.meaning
					<.right>
						if state.active_word
							<word-card.card>
							if dictionary[state.active_word]..google
								<DefinitionCard.card>
							<SpellingCard.card>
						<ShortcutCard.card>
						
tag AdminTools
	css self
		nav
			d:flex
			g:1sp
		button
			list-style-type:none
			bg:gray2
			px:.6sp py:.5sp
			rd:sm
			@hover
				bg:hue3
	def togglePhraseEditor
		state.togglePhraseEditor!
		console.log state.show_phrase_editor
		imba.commit!
	<self>
		<nav>
			<button @click.togglePhraseEditor>
				"edit phrase"
				
				


# TAG[epic=NAV, seq=24] WordNav
tag WordNav
	prop modulus = {}

	css self
		d:hflex g:.4sp flf:wrap
	css .word-wrapper
		d:hflex flf:wrap g:.5sp
	css .word
			ff:$khmer
			fs:2xl
			lh:2em
			pt:.4em
			cursor:pointer
			px:0.5sp
			rd:md
			tween:all 1dur
			bg:hue0/50 @darkmode:hue5/20
			@hover, &.active
				bxs:0px 0px 0px 4px hue1 inset @darkmode: 0px 0px 0px 4px hue2/10 inset
		&.known
			bg:hue1 @darkmode:hue5/50
			@hover, &.active
				bxs:0px 0px 0px 4px hue2 inset @darkmode:0px 0px 0px 4px hue2/10 inset
	css .not_in_dict
		bg:rose1 @darkmode:rose5/20
		@hover, &.active
			bxs:0px 0px 0px 4px rose1 inset @darkmode: 0px 0px 0px 4px rose2/10 inset
		&.known
			bg:rose1 @darkmode:rose5/50
			@hover, &.active
				bxs:0px 0px 0px 4px rose2 inset @darkmode:0px 0px 0px 4px rose2/10 inset
	
	# Goes to the next word in the phrase
	def nextWord
		if word_index < last_word_index
			word_index++
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
		else 
			# if last word of phrase, goes to the first word of the next phrase
			nextPhrase!
		# LOG 'phrase', phrase_index, 'word', word_index, 'lastw', last_word_index

	# Goes to the previous word in the phrase
	def prevWord
		if word_index > 0
			word_index--
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
		else
			# if no previous word in this phrase goes to the last word of the previous phrase
			prevPhraseLast!
	# Goes to the first verse of the next phrase
	def nextPhrase
		if phrase_index < last_phrase_index
			phrase_index++
			word_index = 0
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	# Goes to the last word of hte previous phrase
	def prevPhraseLast
		if phrase_index > 0
			phrase_index--
			word_index = phrases[phrase_index].khmer.split(' ').length - 1
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
	# Goes to the first word of the previous phrase
	def prevPhraseZero
		if phrase_index > 0
			phrase_index--
			word_index = 0
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	def updateActiveWordData
		route_array = router.pathname.replace('/','').split('/')
		modulus_index = route_array[1]
		lesson_index = route_array[2]
		phrase_index = route_array[3]
		word_index = route_array[4]
		word = phrase.khmer.split(' ')[word_index]
		phrases = modulus..lessons[lesson_index].phrases || []
		last_phrase_index = Object.keys(phrases).length - 1
		last_word_index = phrase.khmer.split(' ').length - 1
		state.active_word = word

	def render
		updateActiveWordData!
		# @click=(state.active_word = khccmer_word)
		<self>
			<h2> phrase.title
			# TAG[epic=SHORTCUTS, seq=25] Word & Lesson Shortcuts
			
			<global 
				@hotkey('e|up')=prevPhraseZero
				@hotkey('r|down')=nextPhrase
				@hotkey('d|left')=prevWord 
				@hotkey('f|right')=nextWord
			>
			<div.word-wrapper>
				for khmer_word, ki in phrase.khmer.split(' ')
					<.word .active=(khmer_word is state.active_word) route-to="/modulus/{state.modulus}/{state.lesson}/{state.phrase}/{ki}" .known=state.user_learned.hasOwnProperty(khmer_word) .not_in_dict=!dictionary.hasOwnProperty(khmer_word)> khmer_word
# CARD[epic=CARD, seq=31] DefinitionCard
tag DefinitionCard
	<self>
		let word_object = dictionary[state.active_word]
		if word_object.def isnt false
			<h2> "Definition"
			<ol>
				for item in word_object.def
					let line = item.split('=')
					let use = line[0]
					let translations = line[1].split(' ')
					<li>
						<span.use> "{use.toUpperCase!} "
						<span.def> translations.join(', ')
		else
			<h2> "Google Definition"
			for defi in dictionary[state.active_word].google.split(' ')
				<p> defi

# CARD[epic=CARD, seq=32] ShortcutCard
tag ShortcutCard
	css .key
		mx:.5sp
			
	<self .shortcuts.card>
		# TAG[epic=SHORTCUTS, seq=20] Global Shortcuts
		
		<h2> "Shortcuts"
		<div>
			<span.key-text> "toggle learned"
			<span.key> "s"
			<span.key-text> "or"
			<span.key> "enter"
		<div>
			<span.key-text> "play audio "
			<span.key> "a"
			<span.key-text> "or"
			<span.key> "space" 
		<div>
			<span.key-text> "previous lesson"
			<span.key> "e"
			<span.key-text> "or"
			<span.key> "↑"
		<div>
			<span.key-text> "next lesson"
			<span.key> "r"
			<span.key-text> "or"
			<span.key> "↓" 
		<div>
			<span.key-text> "previous word"
			<span.key> "d"
			<span.key-text> "or"
			<span.key> "←"
		<div>
			<span.key-text> "next word"
			<span.key> "f"
			<span.key-text> "or"
			<span.key> "→"
		# <div>
		# 	<span.key-text> "play audio if available"
		# 	<span.key[ml:.5sp]> "a"
		<div>
			<span.key-text> "toggle dark mode"
			<span.key> "shift & d"
		<div>
			<span.key-text> "change phonetics system"
		<div>
			<span.key> "v"
			<span.key-text> "or"
			<span.key> "shift & i"
		<div>
			<span.key-text> "clear all progres"
			<span.key> "shift & c & l"
# CARD[epic=CARD, seq=33] SpellingCard
	
tag SpellingCard
	css bg:white
		d:vflex
	css .letter-row
		d:hgrid
	css .letter
		ff: $khmer fs:3xl
		&.C1, &.L1
			c:indigo4
		&.C2, &.L2
			c:rose5
		&.L2weak
			c:gray4
	css .vida
		ta:right
		ff:mono fs:md 
		c:gray4 @darkmode: gray7
	def render
		<self>
			# TODO: Add ipa to phonetics card when user selects ipa settings.
			<h2> "Word Spelling"
			# let khmerVowels = "ិ ី ឹ ឺ ុ ូ ួ ើ ឿ ៀ េ ែ ៃ ោ ៅ ំ ះ ៈ ៉ ៊ ់ ៌ ៍ ៎ ៏ ័ ៑ ្ ៓"
			# let khmerNumbers = "០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩"
			# let khmerSymbols = "។ ៕ ៖ ៗ ៘ ៙ ៚ ៛ ៜ ៝ "
			# let khmerAstrology = "៰ ៱ ៲ ៳ ៴ ៵ ៶ ៷ ៸ ៹"
			let kh_c1 = "([កខចឆដឋណតថបផសហឡអ])|"
			let kh_L2weak = "([្][ងញនមយរលវ])|"
			let kh_L2strong = "([្][គឃជឈឌឍទធពភ])|"
			let independent_vowels = "([ឯឥឦឲឧឩឱឨឳឪឫឬឭឮឰ])|"
			# ៈ yuukleapintu, inherent vowel of preceding r1 consonant plus glotall stop
			# ៈ yuukleapintu, /ea/ for preceding r2 consonant plus glotall stop
			let vowel_pairs = "ុ  ិ  ះ  ា  ំ  ោ  េ".split(' ')
			# # DIACRITICS
			# let symbol_r1 = ["៉"] # MUUSIKATOAN, turns r2 consonants to r1
			# let symbol_r2 = ["៊"] # 
			# let symbol_leg = ["្"]
			# let symbol_ahsda = ['៏'] # ahsda, specifies a consonant should use inherent vowel rather than as a final consonant.
			# let symbol_stress = ["់"]
			# let symbol_samyook = ["័"]
			# let symbol_exclam = ["៎"] # kakabat, raising intonation for exclamation or interjection
			# let symbol_robaat = ["៌"] # robaat, consonant above it appears and the robat itself is not pronounced.
			# let symbol_ckiller = ["៍"] # toandakhiat, causes consonant below to be silent or killed
			# let symbol_vkiller = ["៑"] # viriam, kills inherent vowel of a letter "sanskrit", mostly obsolete
			# let symbol_unknown_diacritics = ['៓'] # bathamasat, ???
			# # PUNCTUATION
			# let symbol_stop = ['។'] # khan, khmer full stop, ellipsis, or period, or abbreviation marker.
			# let symbol_ditto = ["ៗ"] # lek too, indicates repetition of previous word or words
			# let symbol_colon = ['៖'] # camnuc pii kuuh, the khmer colon
			# let symbol_chapter_stop = ['៕'] # bariyoosan, indicates the end of a chapter or section or an entire text.
			
			let kh_numbers = "[០១២៣៤៥៦៧៨៩]"
			let kh_symbols = "[។៕៖ៗ៘៙៚៛ៜ៝]"
			let kh_nuh = "([ន][ោ][ះ])|" # matches នេះ
			let kh_nih = "([ន][េ][ះ])|" # matches នៅះ
			let kh_leg = "([្][ក-ឡ])|" # matches ្ កខគឃ...
			let kh_aang = "([ា][ំ][ង])|" # matches ាំង
			let kh_av = "([ា][វ])|" # matches ាវ
			let kh_ov = "([ូ][វ])|" # matches ូវ
			let kh_uay = "([ួ][យ])|" # matches ួយ
			let kh_eaq = "([ា][ក-ឡ][់])|" # matches ាក់ខ់គ់ឃ់...
			let kh_bantok_piir = "([ក-ឡ][៉])|" # matches ក៉ខ៉គ៉ឃ៉...
			let kh_treisap = "([ក-ឡ][៊])|" # matches ក៊ខ៊គ៊ឃ៊...
			let kh_s_stress = "([ស][់])|" # matches ស់
			let kh_c_stress = "([ក-ឡ][់])|" # matches ក់ខ់គ់ឃ់...
			let kh_v = "([ិ-៑]+)|" # matches ិីឹឺុ... េះ ោះ ាះ ាំ ុំ
			let kh_c = "([ក-ឡ])|" # matches
			
			let regtest = new RegExp
				# kh_nuh +
				# kh_nih +
				# kh_eeh +
				kh_leg +
				kh_aang +
				kh_eaq +
				kh_bantok_piir +
				kh_treisap +
				kh_s_stress +
				kh_c_stress +
				kh_v +
				kh_c +
				'.', 'g'
			
			# let REGlegClusters = /(្[កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ])+/gi
			let testword = state.active_word
			let groups = testword.match regtest
			# # LOG groups
			for item in groups
				let cluster = clusters[item]
				let vowel = item.match /[ា-៑]/
				<div.letter-row>
					<span.letter.{cluster..type}> item
					<span.vida>
						<span> "{cluster..vida[0]}"
						if vowel
							<span> "|{cluster..vida[1]}"
						else
							<span> "({cluster..vida[1]})"