# CARD[epic=CARD, seq=33] word-characters	
tag word-characters
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