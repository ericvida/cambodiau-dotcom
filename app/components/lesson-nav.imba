# TAG[epic=NAV, seq=34] lesson-nav
tag lesson-nav
	prop course = {}
	def render
		<self>
			css d:vflex
			<%lesson-title-widget>
				css bg:gray0/50 @darkmode:gray9
					rd:1rd
					p:1sp
					w:100%
					bd:2px solid gray1
				<.icon-title>
					css d:hflex ai:end
						mb:0.5sp
					<i-{course.icon}>
						css h:25px mr:.3sp
					<h2 [fs:xl mr:auto]> course..title
						css h:26px lh:26px
					if state.learning_data.course_learned_usage
						<.usage_word_count> "{state.learning_data.course_learned_usage[state.course]}/{course..word_usage_count_sum}"
							css h:26px lh:26px ai:end d:flex
							css fs:xxs ff:mono c:gray6
					
				if state.learning_data.course_learned_usage
					<progress-bar[$bg:gray2 @darkmode:gray7] progress=state.learning_data.course_progress[state.course]>
			if course
				for own id, lesson of course.lessons
					<lesson-nav-item .active=(id == state.lesson) route-to="/course/{state.course}/{id}/0/0" id=id lesson=lesson>
			else
				<p> 'Loading...'

# TAG[epic=NAV, seq=35] lesson-nav-item
tag lesson-nav-item
	css self
		cursor:pointer
		rd:1rd
		c:gray5
		p:1sp
		bg:white/50 @darkmode:gray8/20
		@hover
			bg:gray0 @darkmode:gray8/50
			bxs:0px 0px 0px 2px gray1
	css progress-bar 
			$bg:gray1
			$fg:hue3
		@hover
			bg:gray1
			progress-bar
				$fg:indigo4
		@darkmode
			bg:gray9/50
			c:gray3
			progress-bar
				$bg:gray8
				$fg:gray6
			&.hover, @hover
				bg:gray9
				progress-bar
					$bg:gray8
					$fg:indigo4
	def render
		let progress = "4/{lesson.word_usage_count_sum}"
		<self.lesson-button .course_active=course_active> # FIX: course active state, not working.
			if state.learning_data.lesson_learned_usage
				<[d:hflex gap:0.6sp]>
					<progress-ring size=40 progress=state.learning_data.lesson_progress[state.course][id]> 
						<span> "{state.learning_data.lesson_progress[state.course][id]}"
					<div[d:vflex]>
						<div.lesson-name> lesson.title
						<div.progress-numbers[opacity:80% fs:xs ff:monospace]> "{state.learning_data.lesson_learned_usage[state.course][id]}/{lesson.word_usage_count_sum}"
					# <progress-bar .color progress=state.learning_data.lesson_progress[state.course][id]>