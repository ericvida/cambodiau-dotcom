import '../state/index'
import Fuzzy from '../fuzzy' # for fitting text in word-card
import Course from '../data/Course'
import {audio} from '../audio'
import {dictionary} from '../data/dictionary'
const fuzzy = new Fuzzy

tag dictionary-page
	css p:1sp w:100%
		
	css .page-wrapper
		d:hflex gap:1sp
		max-width:800px
		mx:auto
		
	def render
		<self>
			let learned_length = Object.keys(state.user_learned).length
			let dict_length = Object.keys(dictionary).length
			let learned_percent = state.learning_data.user_progress
			let learned_usage = state.learning_data.user_progress_learned_usage
			let all_word_usage_count = Course.word_usage_count_sum
			let all_wordset_length = Course.word_set..length # TODO: Eric changed to ..length from .length, fix issue instead
			let dict_percent = Math.floor((learned_length / dict_length) * 1000) / 10
			let lessons_percent = Math.floor((learned_length / all_wordset_length) * 1000) / 10
			<.page-wrapper>
				css .wrapper
					bg:hue3 @darkmode: hue9
					c:hue9 @darkmode: hue2
					p:1sp
					rd:md
				<div.wrapper[py:1sp mb:1sp ta:center w:100% d:vflex]>
					<h2> "You have learned "
					<p[m:0]> "{lessons_percent}% of all words used in all lessons. ({learned_length} of {all_wordset_length})"
					<p[m:0]> "{learned_percent}% of all word instances in all lessons. ({learned_usage} of {all_word_usage_count})"
					<p[m:0]> "{dict_percent}% of all words in this dictionary. ({learned_length} of {dict_length})"
			<.page-wrapper>
				<dictionary-list>
				<word-card.card[w:200px h:260px]>
				

# LAYOUT[epic=LAYOUT, seq=21] Dictionary
tag dictionary-list
	css c:gray8 @darkmode:gray2
		w:600px mx:auto
		d:vflex gap:.4sp
	css .row
		bg:gray1 @darkmode:gray8
		cursor:pointer
		@hover
			bg:hue1 @darkmode:hue8
		d:hgrid gap:1sp jc:space-between
		order:2
		px:1sp
		py:0.4sp
		rd:md
		&.learned
			bg:hue3/50 @darkmode:hue8/50
	css .mono
		ff:mono
	css .err
		c:red4 fs:xs
	css button-wrapper
		d:hflex
		ai:center
	css .play-audio
		w:2em
		cursor:pointer
	css svg size:24px
		path stroke:indigo6 fill:indigo6
	prop track = ""
	def toggleDictionaryAudio arg
		track = audio[arg]
		$track.src = audio[arg]
		LOG $track
		if $track.paused
			$track.play
		else
			$track.pause
	css .searchbar
		input
			d:hflex gap:1sp
			ai:center
			py:1sp
			px:1sp
			bg:gray2 @darkmode:gray7
			rd:md
			w:100%
			max-width:800px
			mx:auto
			order:1
			@focus
				bg:gray2 @darkmode:gray7
	prop query = ""
	def render
		<self>
			<.searchbar[order:0]>
				<h1>
				<input type="text" bind=query placeholder="search khmer | vida | ipa | definition">
			<.row[order:0] @click=api.toggleIpa!>
				<span> "khmer"
				<span> 
					if state.ipa then "ipa" else "vida"
				<span> "google"
			for own word, info of dictionary
				if fuzzy.search(query, word) | fuzzy.search(query, info..vida) | fuzzy.search(query, info..google) | fuzzy.search(query, info..ipa)
					<div.row .learned=(state.user_learned.hasOwnProperty(word)) @click=(state.active_word = word)>
						# if info..rank then <span.mono> info..rank else <span.err> '-'
						<a href="http://sealang.net/api/api.pl?query={word}&service=dictionary" target="_blank"> 
							<span.khmer> "{word}"
						if state.ipa
							if info..ipa then <span.mono> info..ipa else <span.err> 'ipa coming soon'
						else
							if (info..vida)
								<span.mono> info..vida
							elif (info..vida_auto)
								<span.mono.err> info..vida_auto 
							else
								<span.err> 'vida coming soon'
						if info..google	then <span> info..google else <span.err> '-'