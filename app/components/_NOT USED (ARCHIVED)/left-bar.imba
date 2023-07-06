tag left-bar
	css self
		# ml:-1lessonbar
		w:1lessonbar
		bg:warm0 @darkmode:gray9
		bdr:1px solid warm2 @darkmode:warm8
		ofy: scroll
		p:1sp
		d:vflex
		g:1sp
	<self>
		<[w:100% d:box flg:0 h:55px]>
			<cambodiau-logo route-to="/">
		# <left-navitem course_active=yes locked=no name="Master course" price="99" progress="3500/4000" chapters=[
		# 	title:"one"
		# 	progress:"4/10"
		# 	---
		# 	title:"two"
		# 	progress:"2/10"
		# 	---
		# 	title:"three"
		# 	progress:"3/10"
		# 	---
		# 	title:"four"
		# 	progress:"1/10"
		# 	]>
		# 	<i-gift>
		for user_course, mi in user.course
			<left-navitem  @click=(ui.course=mi) locked=yes name=user_course.title price=user_course.price progress="1000/5000">
				<i-{user_course.icon}>
		
		<[w:100% d:bbox flg:1]>
			<[d:box h:100px w:100%]>
			if ui.auth is yes
				<left-bar-user[w:100%] progress="400/4000">
			else
				<div[c:gray7 cursor@hover:pointer] @click=ui.login> "log in"

