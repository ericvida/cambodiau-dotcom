# CARD[epic=CARD, seq=30] word-bar
tag word-bar
	css self
		d:hflex jc:space-between
		bg:gray0 @darkmode:gray9 
		p:1sp rd:md
		ai:center
	css .khmer
		c:hue5
	css .switch-wrapper
		h:30px w:110px rd:full
		bg:gray3 @darkmode:black/60
		cursor:pointer
		tween:all 1dur back-in-out
		&.learned
			bg:hue4 @darkmode:hue8
		# mt:auto
	css .switch
		ml:0px
		tween:all 1dur back-in-out
		h:30px rd:full 
		bd:3px fs:xs c:black d:box
		w:fit-content px:1sp
		bc:gray3 @darkmode:gray8
		bg:gray0 @darkmode:gray7
		c:gray4
		w:90px
		&.learned
			bc:hue4 @darkmode:hue8
			bg:hue2 @darkmode:hue5
			c:hue8 @darkmode:hue1
			ml:20px
	def mount
		fit_settings = {
			minSize: 16
			maxSize: 26
		}
	def render
		<self>
			let vida = dictionary[state.active_word]..vida
			let vida_auto = dictionary[state.active_word]..vida_auto
			let ipa = dictionary[state.active_word]..ipa
			<a$fit2.fit.khmer title="Click to search this word on sealang.net dictionary." href="http://sealang.net/api/api.pl?query={state.active_word}&service=dictionary" target="_blank"> 
				state.active_word
			if audio.hasOwnProperty(state.active_word)
				<audio-player-for-bar>
			<.phonetic-wrapper[d:hflex ai:center gap:0.5sp] @click=api.toggleIpa!>
				if state.ipa
					<span[fs:xs c:gray5]> "ipa"
					if ipa
						<div.phonetic> ipa
					else
						<div.phonetic[fs:xs]> "ipa coming soon"
				else
					<span[fs:xs c:gray5]> "vida"
					if vida
						<div.phonetic> vida
					elif vida_auto
						<div.phonetic> vida_auto
					else
						<div.phonetic> "vida coming soon"
			<.switch-wrapper .learned=state.user_learned.hasOwnProperty(state.active_word) @click=state.toggleLearned(state.active_word)>
				<.switch .learned=state.user_learned.hasOwnProperty(state.active_word)> "learned"