
global css
	@root
		1cardmin: 300px
		1cardmax: 600px
	.width-container
		min-width: 1cardmin @sm: calc(2cardmin + 2sp) @lg: calc(3cardmin + 4sp)
		max-width: 1200px
		mx:auto
	
	.stretchy-card
		min-width:300px 
		max-width:2cardmax
		w:100%
		p:1sp

# LAYOUT[epic=LAYOUT, seq=21] Home
tag modules-page
	def defaultCourseUrl id, course
		const firstLesson = Object.values(course.lessons)[0]
		return "/course/{id}/{firstLesson.slug}/0/0/"

	def render
		<self>
			css p:2sp
				bg:gray0
				min-height:100%
			<%content-wrapper>
				css mx:auto
					max-width:$max-content-width
				<h2> 'Modules'
					css fs:3xl 
						fw:bold
				<%card-grid>
					css d:grid
						gtc: minmax(300px, 2cardmax) @sm: repeat(2, minmax(300px, 2cardmax)) @lg: repeat(3, minmax(300px, 500px))
						gap:1sp
					if Object.keys(courses.courses).length
						for own course_slug, course of courses.courses
							<module-card route-to=defaultCourseUrl(course_slug, course) slug=course_slug course=course>
					else
						<loading-card>
						<loading-card>
						<loading-card>
					# <p> 'Loading...'


# CARD[epic=CARD, seq=28] module-card
tag module-card
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop slug
	<self%module-card .locked=course.locked>
		css d:vflex
			cursor: pointer
			bg:white
			p:1sp
			rd:md
			bxs:sm, xl
			gap:1sp
			@hover
				bg:white/70 @darkmode:gray8/50
				bxs: 0px 0px 0px 5px hue2, sm, xl
				
		if course.image
			<img.image src=course.image>
				css rd:md 
					of:hidden
					aspect-ratio: 16 / 9
		if state.learning_data.course_learned_usage
			<%card-info>
				css w:100% 
					gtr:1fr
					py:0sp
					# bg:gray1
				<h2> "{course.title}"
					css fs:2xl fw:bold
						c:gray5
						ta:center
						mb:1sp
				# <p> "{course.info}"
				# 	css fs:sm c:gray9
				# 		bg:gray0
				# 		p:1sp
				# 		ta:center
			<%progress>
				css ta:center
					d:vflex
				<progress-bar progress=state.learning_data.course_progress[slug]>
					css $fg:hue3 $bg:gray1 @darkmode:gray7
				<span.progress-percent> 
					css ff:monospace fs:xs
						c:gray4 @darkmode:gray6
					<span> "You have learned "
					<span> "{state.learning_data.course_progress[slug]}% "
						css c:hue6 @darkmode:hue3
					<span> "of {course.word_set.length} words"
				
tag loading-card
	css .loading-animation
		background-image: linear-gradient(90deg, gray1/50 0px, gray2/50 50%, gray1 100%)
		animation: loading 1s infinite linear alternate
		@keyframes loading
			0%
				background-position: -300px
			100%
			background-position: 100px
	<self>
		css bg:white
			p:1sp
			rd:md
			bxs:sm, xl
			gap:1sp
			d:vflex
		# fade animation
		css animation: fade .5s infinite linear alternate
			@keyframes fade
				0%
					opacity: .8
				100%
					opacity: 1

		<div.mock-image .loading-animation>
			css w:100% d:grid
				aspect-ratio: 16 / 9
				
		<%card-info>
			css w:100% 
				gtr:1fr
				py:0sp
				# bg:gray1
			<h2 .loading-animation>
				css fs:2xl fw:bold
					h:36px
					c:gray5
					ta:center
					bgc:gray1
					mx:auto
					# mb:1sp
					
			# <p .loading-animation>
			# 	css fs:sm c:gray9
			# 		bgc:gray0
			# 		p:1sp
			# 		ta:center
			# 		h:54px
		<%progress>
			css ta:center
				d:vflex
			<progress-bar progress=0>
				css $fg:hue4 $bg:gray1 @darkmode:gray7
			<span.progress-percent> 
				css ff:monospace fs:xs
					c:gray4 @darkmode:gray6
					mt:6px
					h:10px bg:gray1
					w:70% mx:auto