tag left-navitem
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop course_active = no
	css self 
		d:hflex .course_active:vflex g:1sp ai:center p:1sp
		rd:1rd cursor@hover:pointer
		# mr: calc(1sp + 30px + 1sp)
		w:100%
		@hover
			bg:gray1 @darkmode:gray8/50
		&.course_active
			bg:gray2 @darkmode:gray8
		# bxs:0 2px 10px 2px gray3
	css .course-info
		w:100% g:.5sp d:vflex flg:1 fls:1
	css .course-stats
		d:hflex ai:flex-end gap:1sp
	css .course-name
		mr:auto fw:bold fs:20px flg:1 fls:1 ai:center d:hflex
	css .course-wordcount
		c:gray6 @darkmode:gray5 ff:monospace fs:xs fl:0 1
	
	css .course-actions
		d:hflex jc:space-between
		a c:white/30 @hover:hue5 fs:xs
	css .icon-lock
		d:vbox ai:center jc:center 
		svg size:20px fill:hue5
		.course-price
			c:hue5 ff:monospace
	# css .unlocked bg:red3
	
	def render
		<self .locked=locked .course_active=course_active>
			
			<.course-info>
				<.course-stats>
					<h2.course-name>
						<slot>
						<span[ml:0.3sp]> "{name}"
					<.course-wordcount[ta:right]>
						<div> progress
				# let active = self.flags.contains('active')
				<progress-bar[hue:indigo $bg:gray3 @darkmode:gray7]=course_active progress=progress>
			
			
			if locked
				<.icon-lock>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" .w-6.h-6>
						<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
					<.course-price[]> "${price}"
			