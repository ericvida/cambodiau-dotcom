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
		# <left-navitem moduul_active=yes locked=no name="Master moduul" price="99" progress="3500/4000" chapters=[
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
		for user_moduul, mi in user.moduuls
			<left-navitem  @click=(ui.moduul=mi) locked=yes name=user_moduul.title price=user_moduul.price progress="1000/5000">
				<i-{user_moduul.icon}>
		
		<[w:100% d:bbox flg:1]>
			<[d:box h:100px w:100%]>
			if ui.auth is yes
				<left-bar-user[w:100%] progress="400/4000">
			else
				<div[c:gray7 cursor@hover:pointer] @click=ui.login> "log in"

