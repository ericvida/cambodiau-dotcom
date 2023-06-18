# LAYOUT[epic=LAYOUT, seq=21] Home
tag user-page
	css w:100%
		py:1sp
	def render
		<self>
			<.width-container>
				<UserPageOwnedModulus>
			# <UserPageLockedModulus>

# LAYOUT[epic=LAYOUT, seq=22] UserPageOwnedModulus
tag UserPageOwnedModulus
	def render
		<self>
			<h2[px:1sp fs:xl]>
			<.layout-card-grid>
				for own id, modulus of modulus_data.modulus
					<ModulusCard.stretchy-card route-to="/modulus/{id}/0/0/0/" id=id modulus=modulus>
					# <ModulusCard.stretchy-card route-to="/modulus/{id}/0/0/0/" id=id modulus=modulus>
					# <ModulusCard.stretchy-card route-to="/modulus/{id}/0/0/0/" id=id modulus=modulus>
					# <ModulusCard.stretchy-card route-to="/modulus/{id}/0/0/0/" id=id modulus=modulus>

tag UserPageLockedModulus
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
			<h2> "Purchased Modules"
			
			<.card-wrapper route="/">
				for own id, modulus of bible_data.modulus
					<ModulusCard route-to="/buy/{id}" id=id modulus=modulus>


# CARD[epic=CARD, seq=28] ModulusCard
tag ModulusCard
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop modulus_active = no
	css self
		d:vflex .modulus_active:vflex ai:center
		rd:1rd cursor@hover:pointer
		@hover
			bg:gray0 @darkmode:gray8/50
		&.modulus_active
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
	
	css .modulus-actions
		d:hflex jc:space-between
		a c:white/30 @hover:hue5 fs:xs
	css .icon-lock
		d:vbox ai:center jc:center 
		bg:hue1 @darkmode:hue8
		p:1sp rd:md h:100%
		svg size:20px 
			fill:hue6 @darkmode:hue4
		.modulus-price
			c:hue6 @darkmode:hue4
			ff:monospace
	
	def render
		<self .locked=modulus.locked>
			<div.not-image> unless modulus.image
			<img.image src=modulus.image> if modulus.image
			<.card-info>
				<.card-title>
					<h2> "{modulus.title}"
					<span.progress-percent> "{Math.floor((state.learning_data.modulus_learned_usage[id] / modulus.word_usage_count_sum)* 1000) / 10}%"
				<progress-bar[$fg:hue5 $bg:gray3 @darkmode:gray7] progress=state.learning_data.modulus_progress[id]>
				# TODO: Calculate Wordcount of used words for modulus, Lesson, Phrase
				<> LOG state.learning_data.modulus_progress[state.modulus]
				# if modulus.locked
				# 	<.icon-lock>
				# 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" .w-6.h-6>
				# 			<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
				# 		<.modulus-price[]> "${modulus.price}"
