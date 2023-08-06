import {audio} from '../audio'
import {dictionary} from '../data/dictionary'
# CARD[epic=CARD, seq=30] word-card on right side of Lesson Page
tag word-card
	css .khmer
		lh:60px
		mt:20px
		ff:$khmer
		c:hue6
	css .phonetic
		ff:monospace fs:xl
		c:hue5 @darkmode:hue4
	
		# mt:auto
	
	css .resizeable
		margin:0
		padding:0
		height:40px
		width:100px
		bg:hue4
		overflow:hidden
	css .phonetic-wrapper
		cursor:pointer
	def mount
		fit_settings = {
			minSize: 16
			maxSize: 40
		}
	def render
		<self>
			css d:grid ai:center grid-template-columns:1fr 1fr 80px 80px
				w:100% gap:1sp
			let vida = dictionary[state.active_word]..vida
			let vida_auto = dictionary[state.active_word]..vida_auto
			let ipa = dictionary[state.active_word]..ipa
			<h2[ta:left]> "khmer"
			<h2[ta:right]> "vida / ipa / arpabet"
			<h2[ta:center]> "play"
			<h2[ta:center]> "learned"
			<%khmer-word title="Click to search this word on sealang.net dictionary." href="http://sealang.net/api/api.pl?query={state.active_word}&service=dictionary" target="_blank"> 
				state.active_word
			<div[d:flex jc:end]>
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
			<div[d:flex jc:center]>
				if audio.hasOwnProperty(state.active_word)
					<audio-player>
			<div[d:flex jc:center]>
				<toggle-learned>
tag toggle-learned
	<self .learned=state.user_learned.hasOwnProperty(state.active_word) @click=state.toggleLearned(state.active_word)>
		css h:30px 
			w:60px 
			rd:full
			ta:right
			bg:gray3 @darkmode:black/60
			cursor:pointer
			tween:all 1dur back-in-out
			&.learned
				bg:hue4 @darkmode:hue8
		<.switch .learned=state.user_learned.hasOwnProperty(state.active_word)>
			css ml:0px
				tween:all 1dur back-in-out
				h:30px rd:full 
				bd:3px 
				fs:xs c:black d:box
				w:fit-content px:1sp
				bc:gray3 @darkmode:gray8
				bg:gray0 @darkmode:gray7
				c:gray4
				w:30px
				&.learned
					bc:hue4 @darkmode:hue8
					bg:hue2 @darkmode:hue5
					c:hue8 @darkmode:hue1
					ml:22px