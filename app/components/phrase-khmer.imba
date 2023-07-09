# TAG[epic=NAV, seq=24] phrase-khmer
tag phrase-khmer
	prop course = {}

	css self
		d:hflex g:.4sp flf:wrap
	css .word-wrapper
		d:hflex flf:wrap g:.5sp
	css .word
			ff:$khmer
			fs:1xl
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
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
		else 
			# if last word of phrase, goes to the first word of the next phrase
			nextPhrase!
		# LOG 'phrase', phrase_index, 'word', word_index, 'lastw', last_word_index

	# Goes to the previous word in the phrase
	def prevWord
		if word_index > 0
			word_index--
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
		else
			# if no previous word in this phrase goes to the last word of the previous phrase
			prevPhraseLast!
	# Goes to the first verse of the next phrase
	def nextPhrase
		if phrase_index < last_phrase_index
			phrase_index++
			word_index = 0
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	# Goes to the last word of hte previous phrase
	def prevPhraseLast
		if phrase_index > 0
			phrase_index--
			word_index = phrases[phrase_index].khmer.split(' ').length - 1
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
	# Goes to the first word of the previous phrase
	def prevPhraseZero
		if phrase_index > 0
			phrase_index--
			word_index = 0
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	def updateActiveWordData
		route_array = router.pathname.replace('/','').split('/')
		course_index = route_array[1]
		lesson_index = route_array[2]
		phrase_index = route_array[3]
		word_index = route_array[4]
		word = phrase.khmer.split(' ')[word_index]
		phrases = course..lessons[lesson_index].phrases || []
		last_phrase_index = Object.keys(phrases).length - 1
		last_word_index = phrase.khmer.split(' ').length - 1
		state.active_word = word

	def render
		updateActiveWordData!
		# @click=(state.active_word = khccmer_word)
		<self>
			# <h2> phrase.title
			# TAG[epic=SHORTCUTS, seq=25] Word & Lesson Shortcuts
			
			<global 
				@hotkey('e|up')=prevPhraseZero
				@hotkey('r|down')=nextPhrase
				@hotkey('d|left')=prevWord 
				@hotkey('f|right')=nextWord
			>
			<h2> "Khmer"
				css c:hue3
			<div[d:hflex gap:.5sp]>
				<h2> "Spaced"
					css c:hue3
				<span> "/"
					css c:gray2
				<h2> "Joined"
					css c:gray2
			<div.word-wrapper>
				for khmer_word, ki in phrase.khmer.split(' ')
					<.word .active=(khmer_word is state.active_word) route-to="/course/{state.course}/{state.lesson}/{state.phrase}/{ki}" .known=state.user_learned.hasOwnProperty(khmer_word) .not_in_dict=!dictionary.hasOwnProperty(khmer_word)> khmer_word
