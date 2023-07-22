# TAG[epic=NAV, seq=34] lesson-nav
tag lesson-nav
	prop course = {}
	def render
		<self>
			css d:vflex
			<%lesson-title-widget>
				css bg:gray1 @darkmode:gray9
					p:1sp
					w:100%
				<.icon-title>
					css d:hflex ai:end
						mb:0.5sp
					<h2 [fs:xl mr:auto]> course..title
						css h:26px lh:26px
					
				if state.learning_data.course_learned_usage
					<div>
						css d:vflex
						<progress-bar[$bg:gray2 @darkmode:gray7] progress=state.learning_data.course_progress[state.course]>
						<.usage_word_count>
							"{state.learning_data.course_progress[state.course]}% ({state.learning_data.course_learned_usage[state.course]}/{course..word_usage_count_sum})"
							css h:20px lh:26px ai:end d:flex
							css fs:xxs ff:mono c:gray6
			if course.lessons
				for own lesson_id, lesson of course.lessons
					let isActive = lesson_id === state.lesson
					<lesson-nav-item active=isActive @click.log(lesson_id, state.lesson) route-to="/course/{state.course}/{lesson_id}/0/0" lesson_id=lesson_id lesson=lesson>
			else
				<p> 'Loading...'

# TAG[epic=NAV, seq=35] lesson-nav-item
tag lesson-nav-item
	prop active
	css self
		cursor:pointer
		c:gray5
		p:1sp
		bg:white/50 @darkmode:gray8/20
		&.active
			bg:hue1
			c:hue8
			@hover
				bg:indigo15
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
		const progress = ((state.learning_data.lesson_progress[state.course][lesson_id] / lesson.word_usage_count_sum) * 100).toFixed(2)
		<self.lesson-button .active=active> # FIX: course active state, not working.
			if state.learning_data.lesson_learned_usage
				<[d:hflex gap:0.6sp]>
					<progress-ring .active=active size=40 progress=(progress)> 
					<div[d:vflex]>
						<div.lesson-name> lesson.title
						<div.progress-numbers[opacity:80% fs:xs ff:monospace]>
							<span> "{progress}% ({state.learning_data.lesson_learned_usage[state.course][lesson_id]}/{lesson.word_usage_count_sum})"
					# <progress-bar .color progress=state.learning_data.lesson_progress[state.course][lesson_id]>
