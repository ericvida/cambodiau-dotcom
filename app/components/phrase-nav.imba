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
				w:2phrasebar
				g:1sp
				gap:1sp
			if phrases
				for own phrase_id, phrase of phrases
					let isActive = state.phrase is phrase_id
					let progress = state.learning_data.phrase_progress[state.course][state.lesson][phrase_id]
					<> LOG progress
					let phrase_words_learned = state.learning_data.phrase_learned_usage[state.course][state.lesson][phrase_id]
					let phrase_words_used = phrase.word_usage_count_sum
					# <> LOG phrase.word_usage_count_sum
					<div[d:hflex gap:.5sp jc:space-around]>
						<.number-toggle route-to="/course/{state.course}/{state.lesson}/{phrase_id}/0">
							css	rd:full s:30px
								d:box
								bg:gray1 @darkmode:gray8
								c:gray5 @darkmode:gray4
								cursor:pointer
								@hover
									bg:gray3 @darkmode:gray7
							<progress-ring .active=isActive progress=progress size=30> 
								if phrase_id is 0 
									"t"
								else
									phrase_id
						<div[d:vflex]>
							<span> "{progress}% "
							<span> "{phrase_words_learned}/{phrase_words_used}"
			else
				<p> 'Loading...'