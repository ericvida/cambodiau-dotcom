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
		let phrases = course..lessons[state.lesson]..phrases
		<self>
			css p:1sp d
			if phrases
				for own phrase_id, phrase of phrases
					let isActive = state.phrase is phrase_id
					let progress = state.learning_data.phrase_progress[state.course][state.lesson][phrase_id]
					let phrase_words_learned = state.learning_data.phrase_learned_usage[state.course][state.lesson][phrase_id]
					let phrase_words_used = phrase.word_usage_count_sum
					<%phrase-nav-item 
						route-to="/course/{state.course}/{state.lesson}/{phrase_id}/0"
						>
						css cursor:pointer
							gap:.5sp
							px:1sp
							py:.5sp
							bg:white @darkmode:gray8
							c:gray5 @darkmode:gray4
							d:hflex
							ai:center
							@hover
								bg:gray3 @darkmode:gray7
						<progress-ring size=40 .active=isActive progress=progress > 
						<%phrase-progress-info>
							<%phrase-title>
								css d:inline-block 
									w:auto 
									white-space:nowrap
								if phrase_id is 0 
									"N/A"
								else
									"Unit {Number(phrase_id)+1}"
							<div.progress-numbers>
								css opacity:80% 
									fs:xs 
									ff:monospace 
									white-space:nowrap
								"{progress}% ({phrase_words_learned}/{phrase_words_used})"
			else
				<p> 'Loading...'
