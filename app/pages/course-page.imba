import Course from '../data/Course'
# TAG[epic=PAGE, seq=21] course-page
tag course-page
	css 1lessonnav: 360px
	css 1phrasenav: 180px
	def render
		# FIXME: Console.warn fires twice. Not sure why
		<self>
			css d:hflex w:auto
			<lesson-nav [ml:-1lessonnav]=!state.leftnav-lesson route="/course/:lesson" course=Course.courses[state.course]>
				css flb:1lessonnav
					min-height:100vh
					tween: margin-left 2dur
				
			<phrase-nav[ml:-1phrasenav]=!state.leftnav-phrase course=Course.courses[state.course]>
				css flb:1phrasenav
					min-height:100vh
					tween: margin-left 2dur
					
			<phrase-playground[flg:1] course=Course.courses[state.course]>