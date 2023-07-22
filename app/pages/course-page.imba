import Course from '../data/Course'
# TAG[epic=PAGE, seq=21] course-page
tag course-page
	css 1lnw: 300px # lesson nav width
		1pnw: 180px # phrase nav width
	def render
		# FIXME: Console.warn fires twice. Not sure why
		<self [ml:-1lnw]=!state.leftnav-lesson [ml: calc(-1pnw + -1lnw)]=!state.leftnav-phrase > # sidebar toggle animation
			css d:grid gtc:1lnw 1pnw 1fr
				tween: margin-left 2dur
			
			<lesson-nav  route="/course/:lesson" course=Course.courses[state.course]> # lesson nav width
				css min-height:100vh
				
			<phrase-nav course=Course.courses[state.course]> # phrase nav width
				css min-height:100vh
					
			<phrase-playground[flg:1] course=Course.courses[state.course]>