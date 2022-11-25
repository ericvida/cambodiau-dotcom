tag rightbar-graduated-students
	css .avatars
		d:grid g:0.5sp  
		gtc: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
		# & > * + * ml:-3%
	css .avatar-img
		size:60px
		rd:full 
		bd:5px solid indigo1
		bc@@darkmode:gray9
	css .plus-num
		rd:full d:box
		bg:gray2/60 @darkmode: gray8
		c:gray5
		ff:"merriweather sans"
	
	def render
		<self>
			<div.card>
				<h2> "Enrolled Students"
				<.avatars>
					let top_nineteen = ["","","","","","","","","","","","","","","","","","","","29"]
					for item in top_nineteen
						if item is ""
							<img.avatar-img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=60">
						else
							<span.plus-num> "+{item}"

				# <rightbar-user>
				# <rightbar-user>
				# <rightbar-user>
				# <rightbar-user>
				# <rightbar-user>