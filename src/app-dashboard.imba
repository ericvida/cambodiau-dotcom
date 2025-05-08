# import {learning_data_out} from './data/learning_data_out'

import fitty from 'fitty' # for fitting text in WordCard
import Fuzzy from './fuzzy.imba' # for fitting text in WordCard
import {audio} from './audio.imba'
import {clusters} from './data/clusters.imba' 
import {dictionary} from './data/dictionary.imba'
import {collections_data} from './data/collections_data.imba' # DELETE once dynamic library below is implemented
import {library_data} from './data/library_data.imba' # DELETE once dynamic library below is implemented


# import {state.learning_data} from './data'

# sealang-link: http://sealang.net/api/api.pl?query=ក&service=dictionary
const fuzzy = new Fuzzy
const STATEKEY = 'app-state-20221119'

### NOTE
This static state is necessary to prevent errors if progress
is calculated in the constructor of the progress class.
###
let state = {
	auth: yes
	dark: yes
	left: yes
	right: yes
	ipa: no
	collection: 0
	lesson: 0
	phrase: 0
	word: 0
	admin: true
	active_word: 'ជា'
	learning_data: [{}]
	user_learned: {}
	learned_usage: 0
	khmer_writing: true
	progress_flat: {
	}
}

class Api
	def init
		if imba.locals.state
			state = imba.locals.state
		else
			state = {
				auth: yes
				dark: yes
				left: yes
				right: yes
				ipa: no
				collection: 0
				lesson: 0
				phrase: 0
				word: 0
				admin: true
				active_word: 'ជា'
				learning_data: [{}]
				user_learned: {}
				learned_usage: 0
				khmer_writing: true
				progress_flat: {}
			}
		if state.dark
			setDarkmode!
		save!

	def clear
		state = {
			auth: yes
			dark: yes
			left: yes
			right: yes
			ipa: no
			collection: 0
			lesson: 0
			phrase: 0
			word: 0
			admin: true
			active_word: 'ជា'
			learning_data: [{}]
			user_learned: {}
			learned_usage: 0
			khmer_writing: true
			progress_flat: {}
		}
		save!

	def toggleLearned word
		if state.user_learned.hasOwnProperty(word)
			delete state.user_learned[word]
		else
			state.user_learned[word] = yes
		state.learning_data_flat = calcAllProgressFlat!
		save!
	def hasLearned word
		if state.user_learned.hasOwnProperty(word)
			return true
		else
			return false
	def calcAllProgressFlat
		### TODO
		Make word refs be generated at library_data.imba at static level, not here.
		###
		let progress_data = {}
		let temp_refs = {}
		for own phrase_key, phrase of library_data.phrases
			
			# NOTE: Init Progress data
			progress_data[phrase_key] = {words_learned: 0, words_total: library_data.phrases[phrase_key].weight, words_progress: 0}
			
			# NOTE: Init lesson data once]
			if !progress_data["{phrase.c}-{phrase.l}"]
				progress_data["{phrase.c}-{phrase.l}"] = {words_learned: 0, words_total: library_data.lessons["{phrase.c}-{phrase.l}"].weight, words_progress: 0}
			
			# NOTE: Init Progress data once
			if !progress_data[phrase.c]
				progress_data[phrase.c] = {words_learned: 0, words_total: library_data.collections[phrase.c].weight, words_progress: 0}
			
			for own word, val of phrase.words
				
				# NOTE: Add unique words to reference lists
				if temp_refs[word] isa Array
					temp_refs[word].push phrase_key
				else
					temp_refs[word] = [phrase_key]
					
				# NOTE: If word is learned add weight to progress data
				if hasLearned(word)
					progress_data[phrase_key].words_learned += val.weight | 0
					progress_data["{phrase.c}-{phrase.l}"].words_learned += val.weight | 0
					progress_data[phrase.c].words_learned += val.weight | 0
				
				# NOTE: count unique words in phrase
				progress_data[phrase_key].words_unique = countKeys(phrase.words)
				
				# NOTE: count unique words in lesson once
				if !progress_data["{phrase.c}-{phrase.l}"].words_unique
					progress_data["{phrase.c}-{phrase.l}"].words_unique = countKeys(library_data.lessons["{phrase.c}-{phrase.l}"].words)
				
				# NOTE: count unique words in collection once
				if !progress_data[phrase.c].words_unique
					progress_data[phrase.c].words_unique = countKeys(library_data.collections[phrase.c].words)
		
		for own key, value of temp_refs
			library_data.words[key].refs = value
		
		# NOTE: calculate progress for each colelction, lesson, phrase from data
		for own key, value of progress_data
			let learned = progress_data[key].words_learned
			let weight = progress_data[key].words_total
			progress_data[key].words_progress = calcPercent(learned, weight)
		
		for own key, value of library_data.collections
			value.words_learned = progress_data[key].words_learned
			value.words_progress = progress_data[key].words_progress
			value.words_total = progress_data[key].words_total
			value.words_unique = progress_data[key].words_unique
		
		for own key, value of library_data.lessons
			value.words_learned = progress_data[key].words_learned
			value.words_progress = progress_data[key].words_progress
			value.words_total = progress_data[key].words_total
			value.words_unique = progress_data[key].words_unique
		
		for own key, value of library_data.phrases
			value.words_learned = progress_data[key].words_learned
			value.words_progress = progress_data[key].words_progress
			value.words_total = progress_data[key].words_total
			value.words_unique = progress_data[key].words_unique
		
		return library_data
		
	def countKeys obj
		Object.keys(obj).length
	def calcPercent learned, total
		Math.round(learned / total * 100)
	
	# API[epic=API, seq=7] SAVE
	def save
		imba.locals.state = state
	
	# API[epic=API, seq=7] LOAD
	def load
		state = imba.locals.state if imba.locals.state

	# API[epic=FrontEnd, seq=8] vida
	def toggleIpa
		state.ipa = !state.ipa
		save!
		
		
	# API[epic=FrontEnd, seq=8] AUTH
	def toggleAuth
		state.auth = !state.auth
		save!
	# API[epic=FrontEnd, seq=9] DARKMODE
	def toggleDark
		state.dark = !state.dark
		if state.dark
		then setDarkmode!
		else unsetDarkmode!
		save!
	def setDarkmode
		let root = document.getElementsByTagName('html')[0]
		root.flags.add('mod-darkmode')
	def unsetDarkmode
		let root = document.getElementsByTagName( 'html' )[0]
		root.flags.remove('mod-darkmode')
	# API[epic=FrontEnd, seq=10] LOGIN
	def logIn
		if state.auth is no
			state.auth = yes
		save!
			
	# API[epic=FrontEnd, seq=11] LOGOUT
	def logOut
		if state.auth is yes
			state.auth = no
		save!

	def search needle, haystack
		let haystackLength = haystack.length # tlen
		let needleLength = needle.length # qlen
		if needleLength > haystackLength
			# even if return is implicit in imba
			# it only returns the last expression.
			# so without return here it would merely continue
			# executing the rest of the function
			return false

		if needleLength is haystackLength
			return needle is haystack
		
		let needleLetter = 0
		while needleLetter < needleLength
			let haystackLetter = 0
			let match = false
			let needleLetterCode = needle.charCodeAt(needleLetter++)
			while haystackLetter < haystackLength
				if haystack.charCodeAt(haystackLetter++) is needleLetterCode
					break match = true
			continue if match
			return false
		return true

let api = new Api


# LAYOUT[epic=LAYOUT, seq=19] App
tag app-dashboard
	css d:hflex
		tween: margin-left 2dur
		# min-height: 100vh
		w:100% 
		bg:white @darkmode:black
		&.open
			ml:0px
	def build 
		api.init!
		# state.learning_data_flat = api.calcAllProgressFlat!
		api.save!

	def render
		<self>
			<global 
				@hotkey("shift+d")=api.toggleDark!
				@hotkey("shift+i|v")=api.toggleIpa!
				@hotkey("shift+c+l")=api.clear!
				@hotkey("shift+a")=api.toggleAuth! # TODO: delete in production
				@hotkey('enter|s')=api.toggleLearned(state.active_word)
			>
			# if router.pathname is "/login"
			# 	<login-page[o@off:0% y@off:-200px ease:2dur] ease route="/login">
			<layout-pancakes>
				css gtr: calc(1topbar+2sp) auto 40px # sidebar content sidebar
					# >> * p:1sp # padding around immediate children
					# >> header d:flex ai:center px:1sp
					>> main bg:gray1 @darkmode:gray9/50
				<nav slot="top">
					<.width-container[p:1sp]>
						<TopNavigation>
				<div slot="middle">
					<landing-page route="/">
					# <user-page route="/@username">
					<app-dictionary-page route="/dictionary">
					<phonetics-page route="/phonetics">
					<info-page route="/info">
					# <cms-admin-page route="/cms">
					# <login-page route="/login">
					# <create-account-page route="/create">
					<.width-container>
						<CoursesPage route="/courses">
						<LearningPage route="/learn/:cid/:lid/:pid/:wid">
				<div slot="bottom">
						css c:gray9 @darkmode:gray1
							h:1bottombar
							d:hflex
							ai:center
							jc:center
							bg:hue3 @darkmode:hue8
							fs:xs
							gap:.20sp
						css a c:hue7 @darkmode:hue4
						<span> "Currently in Development. Give feedback via ->"
						# <a href="https://discord.gg/HkwUHrqv" target="_blank"> "Discord"
						# <span> " or "
						<a href="https://t.me/+GFitY1neUaQxMzQ1" target="_blank"> "Telegram"

# TAG[epic=PAGE, seq=1] landing-page
tag landing-page
	css self
		gap:1sp
	css h1
		mt:1sp fs:2xl
	css .button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		p:1sp rd:md
	<self[d:vtc @lg:hcc py:5sp gap:2sp]>
		<div [d:vtc @lg:vcl p:2sp gap:0.6sp]>
			<div [c:hue5 fw:bold fs:1.6em]> "Learn 4000+ Khmer words"
			<div [c:cool4 fw:thin fs:1.3em]> "by reading Bible stories"
			# <h1[p:1sp bg:cool0 bd:2px solid cool3 rd:md m:1sp]> "Learn 4000+ bible related words"
			<[h:2sp]>
			<button.button route-to="/learn/1/1/1/1/"> "Start Learning"
		<div>
			<iframe [w:450px @md:600px h:300px @md:400px] src="https://www.youtube.com/embed/20dpm0bNjIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

# TAG[epic=NAV, seq=1] TopNavigation
tag TopNavigation
	css self
		d:hflex gap:1sp
	css a, button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		d:vcc
		px:1sp rd:md
	def toggleLeftNav
		state.left = !state.left
		api.save!
		imba.commit!
	def logOut
		api.logOut!
		imba.commit!
	def render
		<self>
			<cambodiau-logo route-to="/" [width:200px mr:auto cursor:pointer]>
			<a route-to="/courses">
				<div> "Learn"
			<a route-to="/dictionary">
				<div> "app-dictionary"
			<a route-to="/phonetics">
				<div> "Phonetics"
			<a route-to="/info">
				<div> "Info"
			# <a route-to="/info">
			<a.button [d:hcc h:auto gap:0.6sp bg:white bg:sky0 @hover:sky1] href="https://t.me/+E5Y-uCV0oHQ5NWJl" target="_blank">
				<TelegramIcon [size:.5topbar solid red]> 
				<div> "Community"

tag app-dictionary-page
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
			let all_word_usage_count = collections_data.word_usage_count_sum
			let all_wordset_length = collections_data.word_set_count
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
				<app-dictionary>
				<WordCard.card[w:200px h:260px]>
# LAYOUT[epic=LAYOUT, seq=21] app-dictionary
tag app-dictionary
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


tag info-page
	
	def render
		<self [d:hcc p:2sp]>
			<div [c:cool7 p:2sp bg:white rd:md d:vcl]>
				<p> "This app stores your learning progress on your computer's browser."
				<p> "So use one device and one broswer to mark your progress. Also, don't clear your browser's data for this page."
				<p> "This app is an experiment. Let us know you are using it, and what features you want via telegram."
				<p> "We are working on something bigger and better."
				<a [d:block bg:cooler3 c:cool9 p:1sp rd:md my:1sp] href="https://t.me/+GFitY1neUaQxMzQ1" target="_blank"> "Telegram"
				<p> "This app was built by Eric Vida."
				
# TAG[epic=PAGE, seq=1] phonetics-page
tag phonetics-page
	css self
		p:1sp
		d:vflex
		# pt:1s
		pos:relative
	css .bg
		bg:gray1
		w:100% h:100vh
		d:block 
		pos:absolute 
		zi:0
	css .phonetics-layout
		zi:10
		max-width:800px mx:auto
		d:hflex gap:1sp
	
	def render
		<self>
			<.phonetics-layout>
				<PhoneticVowels>
				<WordCard.card>

tag PhoneticVowels
	css .chart-wrapper
		# c:gray9 @darkmode:gray0
		p:1sp
		d:vflex gap:2sp
		ai:end
	css .row
		d:hflex jc:space-between
		&.one
			w:200px
		&.two
			w:180px
		&.three
			w:160px
		&.four
			w:140px
	# css .dot
	# 	size:20px 
	# 	bg:gray9 @darkmode:gray2
	# 	rd:full
	# 	pos:relative
	# 	cursor:pointer
	# 	@hover
	# 		bg:hue7 @darkmode:hue3
	css span
		ff:monospace
		ta:center
		cursor:pointer
		bg:gray3 @darkmode:gray5
		@hover
			bg:hue2 @darkmode:hue7
		px:1sp py:.6sp rd:md
		# w:max-content
		# bd:1px solid red
		w:50px
	prop ipa = 1
	prop char = [
		["i","i","ពី"]
		["ụ","ɨ/v","ឈឺ"]
		["u","u","គូ"]
		["e","e","លេង"]
		["ẹ","ǝ","ឈើ"]
		["ọ","o/ʊə","គង់"]
		["ė","ɛ","ភ្នែក"] # លែង មែន
		["ạ","ɐ/ǝ","ដី"]
		["o","ɔ","គរ"]
		["a","a","ការ"]
		["ȯ","ɑ","ក៏"]
	]
	css nav
		d:hflex gap:1sp
		ai:center ja:center
		button
			px:1sp
			px:0.6sp
			rd:md
			cursor:pointer ta:center
			bg:gray4 @darkmode:gray6
			@hover
				bg:hue4 @darkmode:hue6
	def activeWord word
		state.active_word = char[word][2]
		api.save!
	
	def render
		<self>
			<nav>
				<button @click=api.toggleIpa!> 
					"Phonetic System: "
					if state.ipa then "IPA" else "Vida"
			if state.ipa is true
				ipa = 1
			else
				ipa = 0
			<.chart-wrapper>
				<div.row.one>
					<div.dot @click.activeWord(0)> 
						<span> char[0][ipa]
					<div.dot @click.activeWord(1)>
						<span> char[1][ipa]
					<div.dot @click.activeWord(2)>
						<span> char[2][ipa]
				<div.row.two>
					<div.dot @click.activeWord(3)> 
						<span> char[3][ipa]
					<div.dot @click.activeWord(4)>
						<span> char[4][ipa]
					<div.dot @click.activeWord(5)>
						<span> char[5][ipa]
				<div.row.three>
					<div.dot @click.activeWord(6)>
						<span> char[6][ipa]
					<div.dot @click.activeWord(7)>
						<span> char[7][ipa]
					<div.dot @click.activeWord(8)>
						<span> char[8][ipa]
				<div.row.four>
					<div.dot @click.activeWord(9)>
						<span> char[9][ipa]
					<div.dot>
					<div.dot @click.activeWord(10)>
						<span> char[10][ipa]
		
# TAG[epic=PAGE, seq=21] CoursesPage
tag CoursesPage
	css w:100%
		p:1sp
	def render
		<self.width-container>
			<.layout-card-grid>
				css gtc: repeat(2,1fr) # column num, size
					gtr: repeat(1,1fr) # row num, size
					max-width: 800px
					gap:1sp
				for own _cid, collection of LIBRARY.collections
					<CourseCard.stretchy-card collection=collection route-to="/learn/{_cid}/1/1/0">
		# <self.layout-card-flex-grid>

tag LearningPage
	def render
		<self>
			<div> <LessonNav.ln route="/learn/:cid/:lid/:pid/:wid">
			<div> <PhraseNav.pn route="/learn/:cid/:lid/:pid/:wid">
			<div> <LessonContent.lc route="/learn/:cid/:lid/:pid/:wid">
			<div> <RightBar.rb route="/learn/:cid/:lid/:pid/:wid">
	css self
		d:hflex
		py:1sp
		g:1sp
		
	css .ln, .lc, .pn, .rb
			d:vflex g:1sp
	css .ln
		w:1sidebar
		fls:0
	css .lc
		d:vflex g:1sp
	css .pn
		w:.1sidebar
		d:vflex g:1sp
		fls:0
	css .rb
		w:.8sidebar
		d:vflex g:1sp
		fls:0
	
# CARD[epic=CARD, seq=29] CourseCard
tag CourseCard
	css bg:white p:1sp d:vflex gap:2sp w:100%
		cursor:pointer
	css .pill rd:full fls:1 w:fit-content px:1sp py:.2sp
		bg:hue1 @darkmode:hue8/50
		c:hue6 @darkmode:hue4
	css .price 
		fw:bold
		# h:64px
		d:hflex ai:center jc:start gap:0.5sp
		my:2sp
	css .num
		fs:5xl lh:inherit ff:$copy
	css .text 
		fs:1xl lh:inherit ff:$heading
		c:warm4
	css .button
		rd:1rd ta:center p:1sp
		bg:gray3 @darkmode:gray7
		c:gray9 @darkmode:gray0
		@hover
			bg:hue5 @darkmode:hue5
		cursor:pointer
	def calcUniqueLearned unique
		let arr = []
		for own key, value of state.user_learned
			arr.push Object.keys(unique).includes(key)
		return arr.length
	def render
		let col_item = state.progress_flat[collection.key]
		<self.card> 
			<img src=IMAGES[collection.img]>
			<[d:hbs jc:space-between]>
				<h1.title[fs:2xl ff:sans-serif fw:bold ]> collection.name
				<span.pill[as:end]> "🇰🇭 khmer"
			<.description> "{collection.info}"
				<p[fs:xs c:cool4]> "You have learned {col_item.weight_learned}/{col_item.weight} words ({col_item.unique_learned}/{col_item.unique} unique)"
			<.progress[d:hcc gap:1sp]> 
				<ElementProgressBar .color=#context.active progress=col_item.weight_progress>
				<span> "{col_item.weight_progress}%"
			
		
tag RightBar
	def routed params
		rt = params
		state.rt = rt
		api.save!
	def render
		<self>
			if state.active_word
				<WordCard.card>
				if dictionary[state.active_word]..google
					<DefinitionCard.card>
				<SpellingCard.card>
			<ShortcutCard.card>



# LAYOUT[epic=LAYOUT, seq=23] LessonContent
tag LessonContent
	prop phrase
	css .image 
		rd:1rd
		aspect-ratio: 2 / 1
		w:100%
	def routed params
		rt = params
	def render
		phrase = LIBRARY.phrases[[rt.cid,rt.lid,rt.pid].join('-')]
		<self>
			if phrase
				<img$image src=IMAGES[phrase.img] .image>
				<MeaningCard phrase=phrase>
				<WordNav.card @click.commit route="/learn/:cid/:lid/:pid/:wid">
				# <PhoneticsCard phrase=phrase>
tag MeaningCard
	def render
		<self.card>
			<h2> "Meaning"
			<p> phrase.meaning
tag PhoneticsCard
	css .phonetics
		ff:mono d:flex gap:0.5sp flex-wrap:wrap
	<self.card>
		<h2> "Phonetics"
		<p.phonetics>
			if state.ipa
				for word in phrase.phrase
					let obj = dictionary[word]
					if obj..ipa or obj..vida or obj..vida_auto or word
						<span> obj..ipa or obj..vida or obj..vida_auto or word
					else
						<span> "n/a"
						<> EE word, "no phonetics available"
			else
				for word in phrase.phrase
					let obj = dictionary[word]
					if obj..vida or obj..vida_auto or obj..ipa or word
						<span> obj..vida or obj..vida_auto or obj..ipa or word
					unless obj..vida or obj..vida_auto or obj..ipa or word
						<span> "n/a"
						<> EE word, "no phonetics available"

# TAG[epic=NAV, seq=24] WordNav
tag WordNav
	# NOTE: relies on state.khmer_writing = true/false
	def routed params
		rt = params
		phrase = LIBRARY.phrases[[rt.cid,rt.lid,rt.pid].join('-')]
		state.active_word = phrase.kh_array[rt.wid]
	css self
		d:hflex g:.4sp flex-wrap:wrap
	css .word-wrapper
		d:hflex flex-wrap:wrap g:.5sp
	css .word
			ff:mono fs:md
			&.khmer
				ff:$khmer
				fs:xl
			lh:2em
			pt:.4em
			user-select:none
			cursor:pointer
			px:0.5sp
			rd:md
			tween:all 1dur
			bg:hue0/50 @darkmode:hue5/20
			@hover, &.active
				bxs:0px 0px 0px 4px hue1 inset @darkmode: 0px 0px 0px 4px hue2/10 inset
		&.known
			bg:hue1 @darkmode:hue5/50
			@hover, &.active
				bxs:0px 0px 0px 4px hue2 inset @darkmode:0px 0px 0px 4px hue2/10 inset
	css .not_in_dict
		bg:rose1 @darkmode:rose5/20
		@hover, &.active
			bxs:0px 0px 0px 4px rose1 inset @darkmode: 0px 0px 0px 4px rose2/10 inset
		&.known
			bg:rose1 @darkmode:rose5/50
			@hover, &.active
				bxs:0px 0px 0px 4px rose2 inset @darkmode:0px 0px 0px 4px rose2/10 inset
	css .no_phonetics
		bg:amber1 @darkmode:amber5/20
		@hover, &.active
			bxs:0px 0px 0px 4px amber1 inset @darkmode: 0px 0px 0px 4px amber2/10 inset
		&.known
			bg:amber1 @darkmode:amber5/50
			@hover, &.active
				bxs:0px 0px 0px 4px amber2 inset @darkmode:0px 0px 0px 4px amber2/10 inset

	def render
		# @click=(state.active_word = khccmer_word)
		<self>
			# TAG[epic=SHORTCUTS, seq=25] Word & Lesson Shortcuts
			<global 
				@hotkey('e|up')=prevPhraseFirstWord!
				@hotkey('r|down')=nextPhrase!
				@hotkey('d|left')=prevWord(phrase)
				@hotkey('f|right')=nextWord(phrase)
			>
			<audio$word_audio src="" type="audio/mpeg">
			# TODO: make a toggle to switch khmer to ipa and display khmer if ipa not available
			<ToggleSwitch .active=!state.khmer_writing @click.toggleKhmer [align-self:end]> 
				if !state.khmer_writing
					"phonetics"
				else
					<span [ff:mono]> "khmer"
			<div.word-wrapper [d:hflex flex-wrap:wrap]>
				for word, word_index in phrase.kh_array
					# phrase.key
					let in_dict = dictionary.hasOwnProperty(word)
					let ipa = dictionary[word]..ipa or false
					let vida = dictionary[word]..vida or false
					let vida_auto = dictionary[word]..vida_auto or false
					let no_phonetics = false
					let display_word = word
					if in_dict 
						if state.khmer_writing
							display_word = word
						elif state.ipa
							if !!ipa
								display_word = ipa
						else
							if !!vida
								display_word = vida
							elif !!vida_auto
								display_word = vida_auto
							else
								no_phonetics = true
								display_word
					<.word 
						.active=(word is state.active_word) 
						route-to="/learn/{phrase.cid}/{phrase.lid}/{phrase.pid}/{word_index}" 
						.known=state.user_learned.hasOwnProperty(word) 
						.not_in_dict=!in_dict
						.no_phonetics=no_phonetics
						@dblclick.playWord($word_audio, word) 
						@mousedown.pressAndHold(word, 1s)
						@mouseup.stopTimer
						.khmer=state.khmer_writing
						> display_word
	def toggleKhmer
		state.khmer_writing = !state.khmer_writing
		api.save!
	# Goes to the next word in the phrase
	def nextWord phrase
		### NOTE
		if current word is not the last word in the phrase,
		route to the next word. If it is the last word of the phrase,
		go to the first word of the next phrase.
		###
		let current_word_i = rt.wid
		let last_word_i = phrase.kh_array.length - 1
		let is_last_word = last_word_i == current_word_i
		if is_last_word
			nextPhrase!
		else
			let next_word_i = inc(rt.wid)
			state.active_word = phrase.kh_array[next_word_i]
			goTo rt.cid, rt.lid, rt.pid, next_word_i
		api.save!

	def nextPhrase
		let current_phrase_i = rt.pid
		let last_phrase_i = LIBRARY.phrases["{rt.cid}-{rt.lid}-{rt.pid}"].of
		let is_last_phrase = last_phrase_i == current_phrase_i
		if is_last_phrase
			nextLesson!
		else
			let next_phrase_i = inc(rt.pid)
			goTo rt.cid, rt.lid, next_phrase_i
			
	def nextLesson
		let current_lesson_i = rt.lid
		let last_lesson_i = LIBRARY.collections[rt.cid].of
		let is_last_lesson = last_lesson_i == current_lesson_i
		if is_last_lesson
			LOG '🎉 This is the last lesson for this collection!'
		else
			router.go("/learn/{rt.cid}/{inc(rt.lid)}/1/0")
	
	# NOTE: Goes to the previous word in the phrase
	def prevWord phrase
		### NOTE
		if current word is not the last word in the phrase,
		route to the next word. If it is the last word of the phrase,
		go to the first word of the next phrase.
		###
		let current_word_i = rt.wid
		let first_word_i = 0 # NOTE: words are zero index
		let is_first_word = first_word_i == current_word_i
		if is_first_word
			prevPhraseLastWord!
		else
			let prev_word_i = dec(rt.wid)
			state.active_word = phrase.kh_array[prev_word_i]
			goTo rt.cid, rt.lid, rt.pid, prev_word_i
		api.save!
	def prevPhraseLastWord
		let curr_phrase = LIBRARY.phrases[[rt.cid,rt.lid,rt.pid].join('-')]
		if curr_phrase.isFirst
			prevLessonLastPhraseLastWord!
		else
			let prev_phrase = LIBRARY.phrases[[rt.cid,rt.lid,dec(rt.pid)].join('-')]
			let last_word_i = prev_phrase.kh_array.length - 1
			goTo rt.cid, rt.lid, dec(rt.pid), last_word_i
			
	def prevPhraseFirstWord		
		let current_phrase = LIBRARY.phrases["{rt.cid}-{rt.lid}-{rt.pid}"]
		if current_phrase.isFirst
			prevLessonLastPhrase!
		else
			# let prev_phrase = state.learning_data_flat.phrases["{rt.cid}-{rt.lid}-{dec(rt.pid)}"]
			goTo rt.cid, rt.lid, dec(rt.pid), 0
			
	def prevLessonLastPhraseLastWord
		# NOTE: Current Lesson
		let cl = state.learning_data_flat.lessons["{rt.cid}-{rt.lid}"]
		if cl.isfirst
			LOG '🏁 this is the first lesson of the collection'
		else
			# NOTE: PreviousLesson
			let prev_lesson = state.learning_data_flat.lessons["{rt.cid}-{dec(rt.lid)}"]
			# NOTE: Prev Lesson, last phrase index
			prev_lesson.last_phrase_key = prev_lesson.phrase_keys[-1]
			prev_lesson.last_phrase_i = prev_lesson.phrase_keys.length
			let prev_phrase = state.learning_data_flat.phrases[prev_lesson.last_phrase_key]
			prev_lesson.last_word_i = prev_phrase.phrase.length - 1
			goTo rt.cid, prev_lesson.li, prev_lesson.last_phrase_i, prev_lesson.last_word_i
		
	# NOTE: router simplifier
	def goTo c, l, p, w
		if w
			router.go("/learn/{c}/{l}/{p}/{w}")
		elif p
			router.go("/learn/{c}/{l}/{p}/0")
		elif l
			router.go("/learn/{c}/{l}/1/0")
		elif c
			router.go("/learn/{c}/1/1/0")
		
	def playWord player, filename
		if !!audio[filename]
			player.src = audio[filename]
			player.play!
		else
			console.warn 'no audio'
	
	def inc num
		let res = Number(num) + 1
		return res
	
	def dec num
		let res = Number(num) - 1
		return res

	def handleHold word
		api.toggleLearned(state.active_word)
		stopTimer!
		resetTimer!
		imba.commit!
		
	step = 50 # NOTE: used
	elapsed = 0 # NOTE: used
	
	def pressAndHold word, duration
		state.active_word = word
		#interval = setInterval(&, step) do
			if elapsed >= duration 
			then (handleHold!)
			else elapsed = elapsed + step
		
	
	def stopTimer do #interval && clearInterval(#interval)
	def resetTimer do elapsed = 0; imba.commit!

# CARD[epic=CARD, seq=30] WordCard
tag WordCard
	css self 
		d:vflex ai:center gap:1sp
		w:100%
	css .khmer
		lh:60px
		mt:20px
		ff:$khmer
		c:hue6
	css .phonetic
		ff:monospace fs:xs
		c:hue5 @darkmode:hue4
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
		fitty($fit, fit_settings)
	def render
		<self>
			let vida = dictionary[state.active_word]..vida
			let vida_auto = dictionary[state.active_word]..vida_auto
			let ipa = dictionary[state.active_word]..ipa
			<a$fit.fit.khmer title="Click to search this word on sealang.net dictionary." href="http://sealang.net/api/api.pl?query={state.active_word}&service=dictionary" target="_blank"> 
				state.active_word
			<.phonetic-wrapper[d:hflex ai:center gap:0.5sp] @click=api.toggleIpa!>
				if state.ipa
					<span[fs:xs c:gray5]> "ipa"
					if ipa
						<div.phonetic> ipa
					else
						<div.phonetic[fs:xs]> "unavailable"
				else
					<span[fs:xs c:gray5]> "vida"
					if vida
						<div.phonetic> vida
					elif vida_auto
						<div.phonetic> vida_auto
					else
						<div.phonetic> "unavailable"
			<ToggleSwitch .active=state.user_learned.hasOwnProperty(state.active_word) @click=api.toggleLearned(state.active_word)> "learned"
			if audio.hasOwnProperty(state.active_word)
				<AudioPlayer>

tag ToggleSwitch
	css self
		h:30px w:110px rd:full
		bg:gray3 @darkmode:black/60
		cursor:pointer
		tween:all 1dur back-in-out
		&.active
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
		^.active
			bc:hue4 @darkmode:hue8
			bg:hue2 @darkmode:hue5
			c:hue8 @darkmode:hue1
			ml:20px
	def render
		<self>
			<.switch>
				<slot> "on"

tag AudioPlayer
	<self>
		# if state.collection > 0
		let word = ""
		if manual
			word = manual
		else
			word = state.active_word
		<audio$track @ended.commit src=audio[word] type="audio/mpeg" preload="auto">
		
		<.button-wrapper[d:hflex ai:center]>
			if $track.paused # when paused
				<div .play-audio[w:2em cursor:pointer] @hotkey('space|a') @click=$track.play> 
					<svg[size:24px] stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
						<path[stroke:indigo6 fill:indigo6]  d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			
			else # when playing
				<div .play-audio[w:2em cursor:pointer] @hotkey('space') @click=$track.pause> 
					<svg[size:24px] stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000" viewBox="0 0 24 24">
						<path[stroke:indigo6 fill:indigo2] d="M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6z"/>
					# <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					# 	<path[stroke:indigo6 fill:indigo2] d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					# 	<path[stroke:indigo6 fill:indigo6] d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
	
# CARD[epic=CARD, seq=31] DefinitionCard
tag DefinitionCard
	<self>
		let word_object = dictionary[state.active_word]
		if word_object.def isnt false
			<h2> "Definition"
			for item in word_object.def
				if item.includes('=')
					let line = item.split('=')
					let use = line[0]
					let translations = line[1].split('|')
					<ol [list-style:decimal pl:1sp]>
						for item, item_i in translations
							if item_i is 0
								<p.use [c:cool3]> "{use}"
							<li.def [fs:xs]> item
		else
			<h2> "Google Definition"
			for defi in dictionary[state.active_word].google.split('|')
				<p> defi

# CARD[epic=CARD, seq=32] ShortcutCard
tag ShortcutCard
	css .shortcut-wrapper
		d:grid gtc:1fr 1fr ai:center
	css .key-wrapper
		d:vcl gap:0.4sp w:100px
		&.horizontal
			d:hsl
	css .key-text 
		fs:xs 
		c:warm6 @darkmode:warm4
		wrap:wrap
		fls:1 flg:0
	css .key
		px:.4sp 
		rd:md 
		fs:.7em
		py:.2sp
		lh:1sp
		bd:1px solid warm4 @darkmode:1px solid indigo4
		c:warm5 @darkmode: indigo4
		ff:mono
	<self .shortcuts.card>
		# TAG[epic=SHORTCUTS, seq=20] Global Shortcuts
		
		<h2> "Shortcuts"
		<div.shortcut-wrapper>
			<span.key-text> "Toggle learned"
			<span.key-wrapper>
				<span.key> "s"
				<span.key> "enter"
				<span.key> "hold 1s"
		<div.shortcut-wrapper>
			<span.key-text> "Play audio "
			<span.key-wrapper>
				<span.key> "a"
				<span.key> "space"
				<span.key> "dbl tap"
		<div.shortcut-wrapper>
			<span.key-text> "Previous lesson"
			<span.key-wrapper.horizontal>
				<span.key> "e"
				<span.key> "↑"
		<div.shortcut-wrapper>
			<span.key-text> "Next lesson"
			<span.key-wrapper.horizontal>
				<span.key> "r"
				<span.key> "↓" 
		<div.shortcut-wrapper>
			<span.key-text> "Previous word"
			<span.key-wrapper.horizontal>
				<span.key> "d"
				<span.key> "←"
		<div.shortcut-wrapper>
			<span.key-text> "Next word"
			<span.key-wrapper.horizontal>
				<span.key> "f"
				<span.key> "→"
		<div.shortcut-wrapper>
			<span.key-text> "Toggle dark mode"
			<span.key-wrapper.horizontal>
				<span.key> "shift & d"
		<div.shortcut-wrapper>
			<span.key-text> "Change phonetics system"
			<span.key-wrapper>
				<span.key> "v"
				<span.key> "shift & i"
		<div.shortcut-wrapper>
			<span.key-text> "Clear all progres. Refresh browser after"
			<span.key> "shift & c & l"
# CARD[epic=CARD, seq=33] SpellingCard
tag SpellingCard
	css bg:white
		d:vflex
	css .letter-row
		d:hgrid
	css .letter
		ff: $khmer fs:3xl
		&.C1, &.L1
			c:indigo4
		&.C2, &.L2
			c:rose5
		&.L2weak
			c:gray4
	css .vida
		ta:right
		ff:mono fs:md 
		c:gray4 @darkmode: gray7
	def render
		<self>
			# TODO: Add ipa to phonetics card when user selects ipa settings.
			<h2> "Word Spelling"
			# let khmerVowels = "ិ ី ឹ ឺ ុ ូ ួ ើ ឿ ៀ េ ែ ៃ ោ ៅ ំ ះ ៈ ៉ ៊ ់ ៌ ៍ ៎ ៏ ័ ៑ ្ ៓"
			# let khmerNumbers = "០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩"
			# let khmerSymbols = "។ ៕ ៖ ៗ ៘ ៙ ៚ ៛ ៜ ៝ "
			# let khmerAstrology = "៰ ៱ ៲ ៳ ៴ ៵ ៶ ៷ ៸ ៹"
			let kh_c1 = "([កខចឆដឋណតថបផសហឡអ])|"
			let kh_L2weak = "([្][ងញនមយរលវ])|"
			let kh_L2strong = "([្][គឃជឈឌឍទធពភ])|"
			let independent_vowels = "([ឯឥឦឲឧឩឱឨឳឪឫឬឭឮឰ])|"
			# ៈ yuukleapintu, inherent vowel of preceding r1 consonant plus glotall stop
			# ៈ yuukleapintu, /ea/ for preceding r2 consonant plus glotall stop
			let vowel_pairs = "ុ  ិ  ះ  ា  ំ  ោ  េ".split(' ')
			# # DIACRITICS
			# let symbol_r1 = ["៉"] # MUUSIKATOAN, turns r2 consonants to r1
			# let symbol_r2 = ["៊"] # 
			# let symbol_leg = ["្"]
			# let symbol_ahsda = ['៏'] # ahsda, specifies a consonant should use inherent vowel rather than as a final consonant.
			# let symbol_stress = ["់"]
			# let symbol_samyook = ["័"]
			# let symbol_exclam = ["៎"] # kakabat, raising intonation for exclamation or interjection
			# let symbol_robaat = ["៌"] # robaat, consonant above it appears and the robat itself is not pronounced.
			# let symbol_ckiller = ["៍"] # toandakhiat, causes consonant below to be silent or killed
			# let symbol_vkiller = ["៑"] # viriam, kills inherent vowel of a letter "sanskrit", mostly obsolete
			# let symbol_unknown_diacritics = ['៓'] # bathamasat, ???
			# # PUNCTUATION
			# let symbol_stop = ['។'] # khan, khmer full stop, ellipsis, or period, or abbreviation marker.
			# let symbol_ditto = ["ៗ"] # lek too, indicates repetition of previous word or words
			# let symbol_colon = ['៖'] # camnuc pii kuuh, the khmer colon
			# let symbol_chapter_stop = ['៕'] # bariyoosan, indicates the end of a chapter or section or an entire text.
			
			let kh_numbers = "[០១២៣៤៥៦៧៨៩]"
			let kh_symbols = "[។៕៖ៗ៘៙៚៛ៜ៝]"
			let kh_nuh = "([ន][ោ][ះ])|" # matches នេះ
			let kh_nih = "([ន][េ][ះ])|" # matches នៅះ
			let kh_leg = "([្][ក-ឡ])|" # matches ្ កខគឃ...
			let kh_aang = "([ា][ំ][ង])|" # matches ាំង
			let kh_av = "([ា][វ])|" # matches ាវ
			let kh_ov = "([ូ][វ])|" # matches ូវ
			let kh_uay = "([ួ][យ])|" # matches ួយ
			let kh_eaq = "([ា][ក-ឡ][់])|" # matches ាក់ខ់គ់ឃ់...
			let kh_bantok_piir = "([ក-ឡ][៉])|" # matches ក៉ខ៉គ៉ឃ៉...
			let kh_treisap = "([ក-ឡ][៊])|" # matches ក៊ខ៊គ៊ឃ៊...
			let kh_s_stress = "([ស][់])|" # matches ស់
			let kh_c_stress = "([ក-ឡ][់])|" # matches ក់ខ់គ់ឃ់...
			let kh_v = "([ិ-៑]+)|" # matches ិីឹឺុ... េះ ោះ ាះ ាំ ុំ
			let kh_c = "([ក-ឡ])|" # matches
			
			# kh_nuh +
			# kh_nih +
			# kh_eeh +
			let regtest = new RegExp
				kh_leg + kh_aang + kh_eaq + kh_bantok_piir + kh_treisap + kh_s_stress +	kh_c_stress + kh_v + kh_c +	'.', 'g'
			
			# let REGlegClusters = /(្[កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ])+/gi
			let testword = state.active_word
			let groups = testword.match regtest
			for item in groups
				let cluster = clusters[item]
				let vowel = item.match /[ា-៑]/
				<div.letter-row>
					<span.letter.{cluster..type}> item
					<span.vida>
						<span> "{cluster..vida[0]}"
						if vowel
							<span> "|{cluster..vida[1]}"
						else
							<span> "({cluster..vida[1]})"

# TAG[epic=NAV, seq=34] LessonNav
tag LessonNav
	css self
		d:vflex g:1sp
	css .title-card 
		bg:white @darkmode:gray9
		rd:md
		p:1sp
	css .active bg:white
	css .icon-title
		d:hflex
	css .usage_word_count
		fs:xxs ff:mono c:gray6
	def routed params
		rt = params
	def render
		<self>
			let routed_collection = LIBRARY.collections[rt.cid]
			for own l_key, _lesson of LIBRARY.lessons
				<LessonNavItem 
					.active=(state.rt.lid == _lesson.lid) 
					route-to="/learn/{_lesson.cid}/{_lesson.lid}/1/0" 
					rt=rt
					lesson=_lesson
					>

# TAG[epic=NAV, seq=35] LessonNavItem
tag LessonNavItem
	prop lesson
	prop rt
	css self
		cursor:pointer
		rd:1rd
		w:100%
		px:1sp py:1sp
		c:gray5
		bg:white/50 @darkmode:gray8/20
		@hover
			bg:white @darkmode:gray8/50
	css ElementProgressBar 
			$bg:gray3
			$fg:gray7
		@hover
			bg:gray1
			ElementProgressBar
				$fg:indigo4
		@darkmode
			bg:gray9/50
			c:gray3
			ElementProgressBar
				$bg:gray8
				$fg:gray6
			&.hover, @hover
				bg:gray9
				ElementProgressBar
					$bg:gray8
					$fg:indigo4
	def render
		<self[w:100% ].lesson-button .chapter_active=no>
			<.chapter-text[d:hflex jc:space-between ai:end]>
				<.chapter-name> lesson.title.en
			let progress = state.progress_flat[lesson.key]
			<.chapter-number[opacity:80% fs:xs ff:monospace]> "{progress.weight_learned}/{progress.weight} words"
			<ElementProgressBar .color progress=progress.weight_progress>

# TAG[epic=NAV, seq=36] PhraseNav
tag PhraseNav
	css self
		c:gray9
		w:1phrasebar
		g:1sp
		d:vflex ai:center
	css .number-toggle 
		rd:full s:30px
		d:box
		bg:gray1 @darkmode:gray8
		@hover
			bg:gray3 @darkmode:gray7
		c:gray5 @darkmode:gray4
		pos:relative
		cursor:pointer
	def routed params
		rt = params
	def render
		<self>
			let phrases_num = LIBRARY.lessons[[rt.cid,rt.lid].join('-')].phrases
			for _pid in [1 .. phrases_num]
				let phrase = state.progress_flat[[rt.cid,rt.lid,_pid].join('-')]
				<.number-toggle route-to="/learn/{rt.cid}/{rt.lid}/{_pid}/0">
					<ElementProgressRing 
						.active=(rt.pid == _pid) # NOTE: if route matches phrase id.
						progress=phrase.weight_progress
						size=30> _pid


tag TelegramIcon
	css $brandcolor: #58a9e7
	<self>
		<svg viewBox="4 4 16 16">
			<path [fill:$brandcolor ]  
				d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
				/>

	
# ELEMENT[epic=ELEMENT, seq=41] Progress Bar
tag ElementProgressBar
	css w:100%
		$bg:gray2
		$fg:hue4
		@darkmode
			$bg:gray8
			$fg:hue6
	css .progress-bg
		h:10px w:100% rd:full pos:relative zi:0 of:hidden d:hflex
		bg:$bg
	css .progress-fg
		h:10px zi:10 flb:0%
		tween:all 1dur ease-in-out
		bg:$fg
	def render
		<self>
			<.progress-bg>
				<.progress-fg[flb:{progress+"%"}]>

# ELEMENT[epic=ELEMENT, seq=42] Icon Template
tag icon
	css self d:inline mb:4px
	css svg size:20px d:inline-block stroke:hue4

# ELEMENT[epic=ELEMENT, seq=47] Progress Ring
tag ElementProgressRing
	### SAMPLE TAG
	<ProgressRing[$progress-color: purple5 $progress-bg: purple1 
		$center-color: white $text-color: purple5 $stroke-percent: 80%] 
		progress=progress size=100> 
		<span> "habit"
		<span slot="subtitle"> "{progress}%"
	###
	prop size = 100
	css ta:center
		$progress-color: hue2 @darkmode:hue7
		$progress-bg: gray1 @darkmode:gray8
		$text-color: gray5 @darkmode:gray4
		$center-color: gray1 @darkmode:gray8
		&.active
			$progress-color: hue4 @darkmode:hue6
			$progress-bg: hue2 @darkmode:hue7
			$center-color: hue2 @darkmode:hue8
		@hover
			$progress-bg:gray2 @darkmode:gray7
			$progress-color: hue3 @darkmode:hue5
			$center-color:gray2 @darkmode: gray7
		$stroke-percent: 70%
		pos:absolute
	css &.disabled o:30%
	css .circular
		size:$size
		bg:none
		pos:relative
		.inner
			bg:$center-color
			pos:absolute
			zi:6
			top:50%
			left:50%
			size:$stroke-percent
			y: -50%	x: -50%
			rd:full
			ja:center
		.title
			zi:10
			fs:18px
			c:$text-color
			mt:7%
		.circle
			.bar
				pos:absolute
				size:100%
				bg:$progress-bg
				rd:100%
				tween: rotation 1dur ease-in-out
				# clip: rect(0px, 100px, 100px, 50px) # TODO ERIC: These numbers must be dynamic
				.progress
					bg:$progress-color
					pos:absolute
					size:100%
					rd:100%
					# clip: rect(0px, 50px, 100px, 0px) # TODO ERIC: These numbers must be dynamic
			.left rotate: -180deg 
			.right zi:3
	def render
		<self>
			<div .circular[size:{size+'px'}]>
				<div .inner[d:vflex]>
					<div .title[fs:sm lh:100%]> <slot>
				<div .circle>
					let step = 180 / 50
					let left_progress = 0
					let right_progress = 0
					if progress > 50
						left_progress = "{(progress - 50) * step}deg"
						right_progress = "180deg"
					else
						left_progress = "0deg"
						right_progress = "{(progress) * step}deg"
					css .bar 
						clip: rect(0px, {size + "px"}, {size + "px"}, {(size / 2) + "px"}) 
						transition: clip-path 1s
					css .progress 
						clip: rect(0px, {(size / 2) + "px"}, {size + "px"}, 0px) 
						transition: clip-path 1s
					<div .bar.left>
						<div .progress[rotate:{left_progress}]>
					<div .bar.right>
						<div .progress[rotate:{right_progress}]>