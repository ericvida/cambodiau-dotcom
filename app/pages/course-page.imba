import Course from '../data/Course'
# TAG[epic=PAGE, seq=21] course-page
tag course-page
	css w:100% d:hgrid
		gtc: 1lessonbar 1phrasebar auto
		p:1sp
		pos:relative
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
			# <.lesson-list-wrapper>
			<lesson-list route="/course/:lesson" course=Course.courses[state.course]>
			# <.phrase-nav-wrapper>
			<phrase-nav course=Course.courses[state.course]>
			<lesson-viewer course=Course.courses[state.course]>
			# 	<.main-wrapper[mx:auto]>