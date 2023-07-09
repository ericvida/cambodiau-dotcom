import Course from '../data/Course'
# TAG[epic=PAGE, seq=21] course-page
tag course-page
	css .course-course
		d:hflex w:100% 
	css .close-leftbar
		ml: -1lessonbar
	css .left-bar
		flb:1lessonbar
		h:100vh
	def render
		# FIXME: Console.warn fires twice. Not sure why
		# WARN course
		<self>
			css d:hflex w:100%
			<lesson-nav route="/course/:lesson" course=Course.courses[state.course]>
			<phrase-nav course=Course.courses[state.course]>
			<phrase-playground course=Course.courses[state.course]>