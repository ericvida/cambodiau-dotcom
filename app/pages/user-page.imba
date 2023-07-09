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
	def render
		<self>
			<h2[px:1sp fs:xl]> 'Courses'
			if courses.courses..length
				<.layout-card-grid>
					for own id, course of courses.courses
						<CourseCard.stretchy-card route-to="/course/{id}/0/0/0/" id=id course=course>
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
					<CourseCard route-to="/buy/{id}" id=id course=course>

# CARD[epic=CARD, seq=28] CourseCard
tag CourseCard
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop course_active = no

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
						<span.progress-percent> "{Math.floor((state.learning_data.course_learned_usage[id] / course.word_usage_count_sum)* 1000) / 10}%"
					<progress-bar[$fg:hue5 $bg:gray3 @darkmode:gray7] progress=state.learning_data.course_progress[id]>
					# TODO: Calculate Wordcount of used words for course, Lesson, Phrase
					<> LOG state.learning_data.course_progress[state.course]
				# if course.locked
				# 	<.icon-lock>
				# 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" .w-6.h-6>
				# 			<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
				# 		<.course-price[]> "${course.price}"
