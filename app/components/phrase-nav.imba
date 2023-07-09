# TAG[epic=NAV, seq=36] phrase-nav
tag phrase-nav
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
	def render
		let phrases = course..lessons[state.lesson].phrases
		<self>
			css p:1sp d:vflex
				c:gray9
				w:1phrasebar
				g:1sp
				gap:1sp
			if phrases
				for own id, phrase of phrases
					<.number-toggle route-to="/course/{state.course}/{state.lesson}/{id}/0">
						css	rd:full s:30px
							d:box
							bg:gray1 @darkmode:gray8
							c:gray5 @darkmode:gray4
							cursor:pointer
							@hover
								bg:gray3 @darkmode:gray7
						let isActive = state.phrase is id
						let progress = state.learning_data.phrase_progress[state.course][state.lesson][id]
						<progress-ring .active=isActive progress=progress size=30> 
							if id is 0 
								"t"
							else
								id
			else
				<p> 'Loading...'