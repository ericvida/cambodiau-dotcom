# LAYOUT[epic=LAYOUT, seq=21] Home
tag user-page
	css w:100%
		py:1sp
	def render
		<self>
			<.width-container>
				<UserPageOwnedCourse>
			# <UserPageLockedCourse>

# LAYOUT[epic=LAYOUT, seq=22] UserPageOwnedCourse
tag UserPageOwnedCourse
	def defaultCourseUrl id, course
		const firstLesson = Object.values(course.lessons)[0]
		return "/course/{id}/{firstLesson.slug}/0/0/"

	def render
		<self>
			<h2[px:1sp fs:xl]> 'Courses'
			if Object.keys(courses.courses).length
				<.layout-card-grid>
					for own course_slug, course of courses.courses
						<course-card.stretchy-card route-to=defaultCourseUrl(course_slug, course) slug=course_slug course=course>
			else
				<p> 'Loading...'

tag UserPageLockedCourse
	css self
		d:vflex gap:1sp
		p:1sp
		rd:md
		bg:gray2 @darkmode:gray8
		c:gray8 @darkmode:gray3
	css .card-wrapper
		d:hflex gap:1sp jc:start 
		@lt-lg
			d:vflex gap:1sp jc:start 
		flex-wrap:wrap 
	def render
		<self>
			<h2> "Purchased Courses"
			<.card-wrapper route="/">
				for own id, course of bible_data.course
					<course-card route-to="/buy/{id}" id=id course=course>

# CARD[epic=CARD, seq=28] course-card
tag course-card
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop course_active = no
	prop slug

	css self
		d:vflex .course_active:vflex ai:center
		rd:1rd cursor@hover:pointer
		@hover
			bg:gray0 @darkmode:gray8/50
		&.course_active
			bg:gray2 @darkmode:gray8
		# bxs:0 2px 10px 2px gray3
	css .image
		rd:md of:hidden
		bg:hue1 bd:0
		outline:none
		w:100%
		aspect-ratio: 16 / 9
	css .card-info
		w:100% d:grid 
		gtr:1fr
	css .card-title
		d:hflex
		jc:space-between
		ai:center
		pt:0.6sp
		pb:0.4sp
		h2
			fs:2xl
			fw:bold
	css .progress-percent
		c:gray4 @darkmode:gray5 
		ff:monospace
	
	css .course-actions
		d:hflex jc:space-between
		a c:white/30 @hover:hue5 fs:xs
	css .icon-lock
		d:vbox ai:center jc:center 
		bg:hue1 @darkmode:hue8
		p:1sp rd:md h:100%
		svg size:20px 
			fill:hue6 @darkmode:hue4
		.course-price
			c:hue6 @darkmode:hue4
			ff:monospace

	def render
		<self .locked=course.locked>
			<div.not-image> unless course.image
			<img.image src=course.image> if course.image
			if state.learning_data.course_learned_usage
				<.card-info>
					<.card-title>
						<h2> "{course.title}"
						<span.progress-percent> "{state.learning_data.course_progress[slug]}%"
					<progress-bar[$fg:hue5 $bg:gray3 @darkmode:gray7] progress=state.learning_data.course_progress[slug]>
