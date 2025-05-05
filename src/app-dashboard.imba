# import {learning_data_out} from './data/learning_data_out'

import fitty from 'fitty' # for fitting text in WordCard
import Fuzzy from './fuzzy.imba' # for fitting text in WordCard
import {audio} from './audio.imba'
import {images} from './images.imba'
import {clusters} from './data/clusters.imba'
import {dictionary} from './data/dictionary.imba'
import {collections_data} from './data/collections_data.imba'
import {library_data} from './data/library_data.imba'
# import {state.learning_data} from './data'
import './elements/index.imba'
import './components/index.imba'
import './icons/index.imba'
import './styles.imba'
# sealang-link: http://sealang.net/api/api.pl?query=ក&service=dictionary
const fuzzy = new Fuzzy
const STATEKEY = 'app-state-20221119'

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
		}
		save!

	def toggleLearned word
		if state.user_learned.hasOwnProperty(word)
			delete state.user_learned[word]
		else
			state.user_learned[word] = yes
		calcAllProgress! # DELETE: Delete when done with calcAllProgressFlat is implemented
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
	
	# calculates progress from words already learned by the user
	def calcAllProgress
		state.learning_data.user_progress = calcUserProgress(collections_data)
		
		# NOTE: Generating a Flat Progress "1-1-1":10% instead of 1: {1: {1: 10$}}
		let progress = {}
		progress.user = state.learning_data.user_progress
		state.learning_data.user_progress_learned_usage = calcUserLearnedUsage(collections_data)
		let col_array = state.learning_data.collection_progress = calcCollectionProgress(collections_data)
		for col_prog, col_i in col_array
			progress[col_i] = col_prog
		state.learning_data.collection_learned_usage = calcCollectionLearnedUsage(collections_data)
		let col_les_array = state.learning_data.lesson_progress = calcLessonProgress(collections_data)
		for les_array, ci in col_les_array
			for lesson_prog, li in les_array
				progress["{ci}-{li}"] = lesson_prog
		state.learning_data.lesson_learned_usage = calcLessonLearnedUsage(collections_data)
		let col_les_phr_array = state.learning_data.phrase_progress = calcPhraseProgress(collections_data)
		for lesson_array, ci in col_les_phr_array
			for phrase_prog, li in lesson_array
				for phrase_prog, pi in phrase_prog
					progress["{ci}-{li}-{pi}"] = phrase_prog
		state.learning_data.phrase_learned_usage = calcPhraseLearnedUsage(collections_data)
		API.persistProgress progress
		
	def calcUserProgress user_data
		return calcUsageProgressOfObject(user_data)
	
	def calcCollectionProgress user
		let collection_progress = []
		for collection in user.collections
			collection_progress.push calcUsageProgressOfObject(collection)

		return collection_progress
	
	def calcLessonProgress user
		let lesson_progress = []
		for collection in user.collections
			let lesson_progress_two = []
			for lesson in collection.lessons
				lesson_progress_two.push calcUsageProgressOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress
	
	def calcPhraseProgress user
		let phrase_progress = []
		for collection in user.collections
			let phrase_progress_two = []
			for lesson in collection.lessons
				let phrase_progress_three = []
				for phrase in lesson.phrases
					phrase_progress_three.push calcUsageProgressOfObject(phrase)
				phrase_progress_two.push phrase_progress_three
			phrase_progress.push phrase_progress_two
		return phrase_progress
	
	def calcUsageProgressOfObject object
		let percent = 0
		for own word, is_learned of state.user_learned
			# if word is not used in object
			if object.word_usage_count[word]
				percent += object.word_usage_count[word] / object.word_usage_count_sum
		percent = Math.round(percent * 100)
		return percent
	
	def calcUserLearnedUsage user
		return calcLearnedUsageOfObject(user)
	
	def calcCollectionLearnedUsage user
		let collection_progress = []
		for collection in user.collections
			collection_progress.push calcLearnedUsageOfObject(collection)
		return collection_progress
	
	def calcLessonLearnedUsage user
		let lesson_progress = []
		for collection in user.collections
			let lesson_progress_two = []
			for lesson in collection.lessons
				lesson_progress_two.push calcLearnedUsageOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress
	
	def calcPhraseLearnedUsage user
		let phrase_progress = []
		for collection in user.collections
			let phrase_progress_two = []
			for lesson in collection.lessons
				let phrase_progress_three = []
				for phrase in lesson.phrases
					phrase_progress_three.push calcLearnedUsageOfObject(phrase)
				phrase_progress_two.push phrase_progress_three
			phrase_progress.push phrase_progress_two
		return phrase_progress
	
	# Calculates how many times a learned word has been used 
	def calcLearnedUsageOfObject input
		let words_used = input.word_usage_count
		let learned_words_usage = 0
		for own word, is_learned of state.user_learned
			# If words_used containes word
			if words_used[word] and is_learned
				learned_words_usage += words_used[word]
		learned_words_usage = Math.round(learned_words_usage)
		return learned_words_usage

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
		api.calcAllProgress! # DELETE: Delete when progress working from state.learning_data_flat
		state.learning_data_flat = api.calcAllProgressFlat!
		api.save!
	# FIXME: Not sure why state is not saving and being loaded

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
						<LearningPage route="/learn/:ci/:li/:pi/:wi">
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
# LAYOUT[epic=LAYOUT, seq=21] Home
tag user-page
	css w:100%
		py:1sp
	def render
		<self>
			<.width-container>
				<user-page-owned-collections>
				
				
# TAG[epic=PAGE, seq=1] cms-admin-page
tag cms-admin-page
	def render
		<self>
			<h1[p:1sp bg:rose0 bd:2px solid cool3 rd:md m:1sp]> "Learn 4000+ bible related words"
			<div route="/cms/">
				<CMSLearnModuleList>
			# <CMSLessonList route="/cms/0/">
			# <CMSChapterList route="/cms/0/0/">

tag CMSLearnModuleList
	prop collection_list = [
		title: "module one"
		description: "description one"
		imageURL: "url one"
		price: 20
		language: "kh"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_set_length: 3
		word_usage_count: {"មួយ":4, "ពីរ":4, "បី":4}
		word_usage_count_sum: 12
		number_of_lessons: 2
		lessons: [
			title: "lesson one"
			imageURL: "lesson url one"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_set_length: 3
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
			---
			title: "lesson two"
			imageURL: "lesson url two"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_set_length: 3
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
		]
		---
		title: "module two"
		description: "description two"
		imageURL: "url two"
		price: 20
		language: "kh"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_set_length: 3
		word_usage_count: {"មួយ":4, "ពីរ":4, "បី":4}
		word_usage_count_sum: 12
		number_of_lessons: 2
		lessons: [
			title: "lesson one"
			imageURL: "lesson url one"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_set_length: 3
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
			---
			title: "lesson two"
			imageURL: "lesson url two"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_set_length: 3
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_set_length: 3
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
		]
	]
	def render
		<self[]>
			<button[ml:1sp px:.6sp bg:indigo2]> "Add Modules"
			for item in collection_list
				<cms-collection-card item=item>

tag cms-collection-card
	prop meta_is_editable = false
	def toggleEditable
		meta_is_editable = !meta_is_editable
		imba.commit!
	css .meta
		p:1sp
		my:1sp
		bd:2px rd:sm solid gray1
	css .editable
		bg:gray1
	<self[bg:white m:1sp p:1sp]> 
		<h1[fs:xl]> item.title
		<[d:flex gap:1sp]>
			# TODO: route-to needs to by dynamic
			<button[px:.4sp bg:indigo2 rd:sm] @click.toggleEditable> 
				if meta_is_editable
					"save module"
				else
					"edit module"
			<button[px:.4sp bg:cool2 rd:sm]> "delete"
		<pre>
			<code>
				<div.meta contentEditable=meta_is_editable .editable=meta_is_editable> 
					css h:300px of:auto
					JSON.stringify item, null, 4
		# <button[px:.4sp bg:indigo2 rd:sm] route-to="/cms/0"> "see lessons"
tag CMSLessonList
	prop lesson_list = [
		title: "lesson one"
		imageURL: "lesson url one"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_set_length: 3
		word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
		word_usage_count_sum: 6
		number_of_chapters: 2
		---
		title: "lesson two"
		imageURL: "lesson url two"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_set_length: 3
		word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
		word_usage_count_sum: 6
		number_of_lessons: 2
	]
	def render
		<self>
			<button[ml:1sp px:.6sp bg:indigo2]> "add lesson"
			for item in lesson_list
				<CMSLessonCard item=item >

tag CMSLessonCard
	prop meta_is_editable = false
	def toggleEditable
		meta_is_editable = !meta_is_editable
		imba.commit!
	css .meta
		p:1sp
		my:1sp
		bd:2px rd:sm solid gray1
	css .editable
		bg:gray1
	<self[bg:white m:1sp p:1sp]> 
		<[d:flex gap:1sp]>
			# TODO: route-to needs to by dynamic
			<button[px:.4sp bg:indigo2 rd:sm] @click.toggleEditable> 
				if meta_is_editable
					"save lesson"
				else
					"edit lesson"
			<button[px:.4sp bg:cool2 rd:sm]> "delete lesson"
		<pre>
			<code>
				<div.meta contentEditable=meta_is_editable .editable=meta_is_editable> 
					JSON.stringify item, null, 4
		<button[px:.4sp bg:indigo2 rd:sm] route-to="/cms/0/0"> "see chapters"

tag CMSChapterList
	prop chapter_list = [
		number_eng: "1"
		number_khmer: "១"
		khmer:  "មួយ ពីរ បី"
		english_meaning: "one two three"
		vida_phonetics: "muy pii bai"
		ipa_phonetics: "muy pii bai"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_set_length: 3
		word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
		word_usage_count_sum: 3
		---
		number_eng: "2"
		number_khmer: "២"
		khmer:  "មួយ ពីរ បី"
		english_meaning: "one two three"
		vida_phonetics: "muy pii bai"
		ipa_phonetics: "muy pii bai"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_set_length: 3
		word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
		word_usage_count_sum: 3
	]
	def render
		<self>
			<button[ml:1sp px:.6sp bg:indigo2]> "add chapter"
			for item in chapter_list
				<CMSChapterCard item=item>
		
tag CMSChapterCard
	prop meta_is_editable = false
	def toggleEditable
		meta_is_editable = !meta_is_editable
		imba.commit!
	css .meta
		p:1sp
		my:1sp
		bd:2px rd:sm solid gray1
	css .editable
		bg:gray1
	<self[bg:white m:1sp p:1sp]> 
		<[d:flex gap:1sp]>
			# TODO: route-to needs to by dynamic
			<button[px:.4sp bg:indigo2 rd:sm] @click.toggleEditable> 
				if meta_is_editable
					"save chapter"
				else
					"edit chapter"
			<button[px:.4sp bg:cool2 rd:sm]> "delete chapter"
		<pre>
			<code>
				<div.meta contentEditable=meta_is_editable .editable=meta_is_editable> 
					JSON.stringify item, null, 4


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
				for own ci, collection of state.learning_data_flat.collections
					<CourseCard.stretchy-card collection=collection route-to="/learn/{ci}/1/1/0">
		# <self.layout-card-flex-grid>

tag LearningPage
	def routed params
		rt=params
	def render
		<self>
			<LessonNav.ln rt=rt>
			<PhraseNav.pn rt=rt>
			<LessonContent.lc rt=rt>
			<RightBar.rb rt=rt>
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
	prop name = "Collection"
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
	<self.card> 
		<img src=images["{collection.img}"]>
		<[d:hbs jc:space-between]>
			<h1.title[fs:2xl ff:sans-serif fw:bold ]> collection.title
			<span.pill[as:end]> "🇰🇭 khmer"
		<.description> "{collection.info}"
			let unique_learned = Object.keys(collection.words_learned).length
			<p[fs:xs c:cool4]> "You have learned {collection.words_learned}/{collection.words_total} words ({calcUniqueLearned(collection.words)}/{collection.words_unique} unique)"
		<.progress[d:hcc gap:1sp]> 
			<ProgressBar .color=#context.active progress=collection.words_progress>
			<span> "{collection.words_progress}%"
			
			
# LAYOUT[epic=LAYOUT, seq=22] user-page-owned-collections
tag user-page-owned-collections
	def render
		<self>
			<h2[px:1sp fs:xl]>
			<.div.layout-card-grid>
				for own id, collection of collections_data.collections
					<collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
					# <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
					# <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
					# <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
tag user-page-locked-collections
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
				for own id, collection of bible_data.collections
					<collection-card route-to="/buy/{id}" id=id collection=collection>

tag RightBar
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
	prop rt
	prop phrase
	css .image 
		rd:1rd
		aspect-ratio: 2 / 1
		w:100%
	def render
		phrase = state.learning_data_flat.phrases["{rt.ci}-{rt.li}-{rt.pi}"]
		<self>
			if phrase
				<img$image src=images["{phrase.img}"] .image>
				<MeaningCard phrase=phrase>
				<WordNav.card @click.commit route="/learn/:ci/:li/:pi/:wi">
				# <PhoneticsCard phrase=phrase>
tag MeaningCard
	def render
		<self.card>
			<h2> "Meaning"
			<p> phrase.translation
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
						<> ERROR word, "no phonetics available"
			else
				for word in phrase.phrase
					let obj = dictionary[word]
					if obj..vida or obj..vida_auto or obj..ipa or word
						<span> obj..vida or obj..vida_auto or obj..ipa or word
					unless obj..vida or obj..vida_auto or obj..ipa or word
						<span> "n/a"
						<> ERROR word, "no phonetics available"

# TAG[epic=NAV, seq=24] WordNav
tag WordNav
	# NOTE: relies on state.khmer_writing = true/false
	def routed params
		rt = params
		phrase = state.learning_data_flat.phrases["{rt.ci}-{rt.li}-{rt.pi}"]
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
				for word, word_index in phrase.phrase
					let phrase_key = "{phrase.c}-{phrase.l}-{phrase.p}"
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
								display_word = khmer
					<.word 
						.active=(word is state.active_word) 
						route-to="/learn/{phrase.c}/{phrase.l}/{phrase.p}/{word_index}" 
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
		imba.commit!
	# Goes to the next word in the phrase
	def nextWord phrase
		### NOTE
		if current word is not the last word in the phrase,
		route to the next word. If it is the last word of the phrase,
		go to the first word of the next phrase.
		###
		let current_word_i = rt.wi
		let last_word_of_phrase_i = phrase..phrase.length - 1
		let is_last_word = last_word_of_phrase_i == current_word_i
		if is_last_word
			nextPhrase!
		else
			let next_word_i = inc(rt.wi)
			state.active_word = phrase.phrase[next_word_i]
			goTo rt.ci, rt.li, rt.pi, next_word_i
			
	def nextPhrase
		let current_phrase_i = rt.pi
		let last_phrase_of_lesson_i = state.learning_data_flat.lessons["{rt.ci}-{rt.li}"].phrase_keys.length
		let is_last_phrase = last_phrase_of_lesson_i == current_phrase_i
		if is_last_phrase
			nextLesson!
		else
			let next_phrase_i = inc(rt.pi)
			goTo rt.ci, rt.li, next_phrase_i
		
	def nextLesson
		let current_lesson_i = rt.li
		let last_lesson_of_collection_i = state.learning_data_flat.collections[rt.ci].lesson_keys.length
		let is_last_lesson = last_lesson_of_collection_i == current_lesson_i
		if is_last_lesson
			LOG '🎉 This is the last lesson for this collection!'
		else
			router.go("/learn/{rt.ci}/{inc(rt.li)}/1/0")
	
	# NOTE: Goes to the previous word in the phrase
	def prevWord phrase
		### NOTE
		if current word is not the last word in the phrase,
		route to the next word. If it is the last word of the phrase,
		go to the first word of the next phrase.
		###
		let current_word_i = rt.wi
		let first_word_of_phrase_i = 0 # NOTE: words are zero index
		let is_first_word = first_word_of_phrase_i == current_word_i
		if is_first_word
			prevPhraseLastWord!
		else
			let prev_word_i = dec(rt.wi)
			state.active_word = phrase.phrase[prev_word_i]
			goTo rt.ci, rt.li, rt.pi, prev_word_i
				
	def prevPhraseLastWord
		let current_phrase = state.learning_data_flat.phrases["{rt.ci}-{rt.li}-{rt.pi}"]
		if current_phrase.isfirst
			prevLessonLastPhraseLastWord!
		else
			let prev_phrase = state.learning_data_flat.phrases["{rt.ci}-{rt.li}-{dec(rt.pi)}"]
			prev_phrase.last_word_i = prev_phrase.phrase.length - 1
			goTo rt.ci, rt.li, dec(rt.pi), prev_phrase.last_word_i
			
	def prevPhraseFirstWord		
		let current_phrase = state.learning_data_flat.phrases["{rt.ci}-{rt.li}-{rt.pi}"]
		if current_phrase.isfirst
			prevLessonLastPhrase!
		else
			# let prev_phrase = state.learning_data_flat.phrases["{rt.ci}-{rt.li}-{dec(rt.pi)}"]
			goTo rt.ci, rt.li, dec(rt.pi), 0
			
	def prevLessonLastPhraseLastWord
		# NOTE: Current Lesson
		let cl = state.learning_data_flat.lessons["{rt.ci}-{rt.li}"]
		if cl.isfirst
			LOG '🏁 this is the first lesson of the collection'
		else
			# NOTE: PreviousLesson
			let prev_lesson = state.learning_data_flat.lessons["{rt.ci}-{dec(rt.li)}"]
			# NOTE: Prev Lesson, last phrase index
			prev_lesson.last_phrase_key = prev_lesson.phrase_keys[-1]
			prev_lesson.last_phrase_i = prev_lesson.phrase_keys.length
			let prev_phrase = state.learning_data_flat.phrases[prev_lesson.last_phrase_key]
			prev_lesson.last_word_i = prev_phrase.phrase.length - 1
			LOG prev_lesson
			goTo rt.ci, prev_lesson.li, prev_lesson.last_phrase_i, prev_lesson.last_word_i
		
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
	

# LAYOUT[epic=LAYOUT, seq=26] LearnModulePreview
tag LearnModulePreview
	css p:1sp d:vgrid @lg:hgrid g:1sp
		gtc:none @lg:2fr 1fr
		min-height: calc(100vh - 1topbar)
		max-width:1000px mx:auto
	css .buy-cards
		d:hflex @lg:vflex g:1sp
	css main flg:1 d:vflex g:1sp w:100%
	css .image 
		bg:hue5 p:1sp rd:1rd
		aspect-ratio: 16 / 9
	css .actions
		d:grid g:1sp jc:end gtc: 1fr 1fr
		button px:1.5sp py:1sp rd:1rd
			bg:hue3 c:hue9
			fw:bold
			fs:20px d:flex gap:1sp
			&.outline
				bg:none
	def render
		<self>
			<main.collection-grid>
				<div.image> "image"
				<[d:hgrid w:100% g:1sp gtc: 2fr 1fr]>
					<div.card> "card"
					<rightbar-collection-contents>
				<[d:hgrid w:100% g:1sp gtc:1fr]> 
					<rightbar-graduated-students>
			let buy-cards = [
				name: "Market collection"
				price: 5
				benefits: ['One collection','5 chapters','400 words']
				---
				name: "All collections"
				price: 20
				benefits: ['5 modoules','40 chapters','2200 words']
			]
			<.buy-cards>
				for card in buy-cards
					<SellCard name=card.name price=card.price benefits=card.benefits>


# CARD[epic=CARD, seq=27] UserCard
tag UserCard
	css self d:hflex g:1sp ai:center p:0sp my:1sp
	css .user-image
		size:4sp
		rd:full 
		bd:3px solid gray1/20 bxs:sm,xl,xl
	css .user-info
		w:100% g:.5sp d:vflex ff: 'Merriweather Sans', sans-serif;
	css .user-stats
		d:hflex ai:flex-end 
		*@first mr:auto
	css .user-name
		mr:auto fw:bold fs:20px 
	css .user-wordcount
		c:gray4 @darkmode:gray6 fs:xxs 
	css .user-progress
		bg:gray2 @darkmode:gray8  h:10px w:100% rd:full pos:relative zi:0 of:hidden
		.progress-fg
			bg:hue5 h:10px w:100% rd:full pos:absolute t:0 r:90% zi:10 rdr:full
	# css .user-actions
	# 	d:hflex jc:space-between
	css .user-settings c:gray4 @darkmode:gray6 @hover:hue5 fs:xs
	def logOut
		state.auth = no
		imba.commit
	def render
		<self>
			<img src=user_collection.image>
			<.user-info>
				<div>
					<h2.user-name> "DinaLearns"
				<a.user-wordcount> "400/4000"
				<ProgressBar .color=#context.active progress=progress>
				<.user-stats>
					<a.user-settings route-to="/settings/"> "settings"
					<a.user-settings @click=state.logout> "logout"

# CARD[epic=CARD, seq=28] collection-card
tag collection-card
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop collection_active = no
	css self
		d:vflex .collection_active:vflex ai:center
		rd:1rd cursor@hover:pointer
		@hover
			bg:gray0 @darkmode:gray8/50
		&.collection_active
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
	
	css .collection-actions
		d:hflex jc:space-between
		a c:white/30 @hover:hue5 fs:xs
	css .icon-lock
		d:vbox ai:center jc:center 
		bg:hue1 @darkmode:hue8
		p:1sp rd:md h:100%
		svg size:20px 
			fill:hue6 @darkmode:hue4
		.collection-price
			c:hue6 @darkmode:hue4
			ff:monospace
	
	def render
		<self .locked=collection.locked>
			<div.not-image> unless collection.image
			<img.image src=images["{collection.img}"]> if collection.image
			<.card-info>
				<.card-title>
					<h2> "{collection.title}"
					<span.progress-percent> "{Math.floor((state.learning_data.collection_learned_usage[id] / collection.word_usage_count_sum)* 1000) / 10}%"
				<ProgressBar[$fg:hue5 $bg:gray3 @darkmode:gray7] progress=state.learning_data.collection_progress[id]>
				# TODO: Calculate Wordcount of used words for collection, Lesson, Phrase
				# if collection.locked
				# 	<.icon-lock>
				# 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" .w-6.h-6>
				# 			<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
				# 		<.collection-price[]> "${collection.price}"

# CARD[epic=CARD, seq=29] SellCard
tag SellCard
	css bg:white p:1sp d:vflex gap:2sp w:100%
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
	# css .benefits
	<self.card> 
		<span.pill> name
		<.price>
			<span.num> "${price}"
			<span.text> " lifetime"
		<ul.benefits> for item in benefits
			<li> item
		<.button> "Get Started"

# CARD[epic=CARD, seq=30] WordBar
tag WordBar
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
		.learned
			bc:hue4 @darkmode:hue8
			bg:hue2 @darkmode:hue5
			c:hue8 @darkmode:hue1
			ml:20px
	def mount
		fit_settings = {
			minSize: 16
			maxSize: 26
		}
		fitty($fit2, fit_settings)
	def render
		<self>
			let vida = dictionary[state.active_word]..vida
			let vida_auto = dictionary[state.active_word]..vida_auto
			let ipa = dictionary[state.active_word]..ipa
			<a$fit2.fit.khmer title="Click to search this word on sealang.net dictionary." href="http://sealang.net/api/api.pl?query={state.active_word}&service=dictionary" target="_blank"> 
				state.active_word
			if audio.hasOwnProperty(state.active_word)
				<AudioPlayer>
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
						<div.phonetic [fs:2xl]> "request"
			<ToggleSwitch .learned=state.user_learned.hasOwnProperty(state.active_word) @click=api.toggleLearned(state.active_word)> "learned"
				



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
	prop rt
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
	def render
		<self>
			let active_collection = state.learning_data_flat.collections[rt.ci]
			for lesson_key in active_collection.lesson_keys
				let keys = [...lesson_key.split('-')]
				let col_key = keys[0]
				let les_key = keys[1]
				let lesson_item = state.learning_data_flat.lessons[lesson_key]
				<LessonNavItem 
					.active=(rt.li is les_key) 
					route-to="/learn/{col_key}/{les_key}/1/0" 
					lesson=lesson_item
					rt=rt
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
	css ProgressBar 
			$bg:gray3
			$fg:gray7
		@hover
			bg:gray1
			ProgressBar
				$fg:indigo4
		@darkmode
			bg:gray9/50
			c:gray3
			ProgressBar
				$bg:gray8
				$fg:gray6
			&.hover, @hover
				bg:gray9
				ProgressBar
					$bg:gray8
					$fg:indigo4
	def render
		<self[w:100% ].lesson-button .chapter_active=no>
			<.chapter-text[d:hflex jc:space-between ai:end]>
				<.chapter-name> lesson.title
			let progress_string = "{lesson.words_progress}"
			<.chapter-number[opacity:80% fs:xs ff:monospace]> "{lesson.words_learned}/{lesson.words_total} words"
			<ProgressBar .color progress=lesson.words_progress>

# TAG[epic=NAV, seq=36] PhraseNav
tag PhraseNav
	prop rt
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
	def render
		<self>
			let lesson = state.learning_data_flat.lessons["{rt.ci}-{rt.li}"]
			for phrase_key in lesson.phrase_keys
				let phrase_item = state.learning_data_flat.phrases[phrase_key]
				let keys = [...phrase_key.split('-')]
				let col_key = keys[0]
				let les_key = keys[1]
				let phr_key = keys[2]
				if phrase_item
					<.number-toggle route-to="/learn/{col_key}/{les_key}/{phr_key}/0">
						<ElemProgressRing 
							.active=(rt.pi == phrase_item.p) # NOTE: if route matches phrase id.
							progress=phrase_item.words_progress
							size=30> phrase_item.p

# TAG[epic=Modal, seq=37] Login Page
tag login-page
	css p:2sp
	css &.hidden d:none
	css .bg pos:absolute inset:0 bg:red zi:20
		d:vflex d:box g:4sp
		bg:gray1 @darkmode:gray7
	css .card
		max-width:600px p:2.4sp
		bg:white @darkmode:gray9
		bxs:xs hue5,xs hue4,sm hue7,xxl hue5 @darkmode:xs black, md black, xxl black
	css .form d:vflex g:1.6sp w:500px
	css .field-wrapper d:vflex g:0.5sp
		label us:none
	css .field w:100% h:40px rd:1rd px:0.6sp
		c:gray8 @darkmode:gray2
		bg:gray2 @darkmode:gray8
	css .options d:hflex g:.5sp ai:center
	css .forgot-link c:indigo4
	css .login-button w:100% px:1sp py:0.5sp ta:center rd:1rd cursor:pointer us:none
		bd:2px solid gray3 gap:1sp
		p:1sp d:hflex ai:center jc:center
		.button-logo
			w:30px
		@hover
			bg:gray1 @darkmode:indigo6
		@active
			bg:gray2 @darkmode:indigo7
	def googleAuth
		api.logIn!
		imba.commit!
	def facebookAuth
		api.logIn!
		imba.commit!
	def appleAuth
		api.logIn!
		imba.commit!
	def mockAuthToggle
		api.logIn!
		imba.commit!
		
	def render
		<self>
			<div[d:hbox g:1sp]>
				# <LoginIllustration[w:600px]>
				<.card>
					<form.form action="#" method="POST">
						<div.field-wrapper>
							<label for="email"> "Email Address"
							<input.field .email name="email" autocomplete="email" required=""> 
						<div.field-wrapper>
							<label for="password"> "Password"
							<input.field .email name="password" autocomplete="username" required="">
						<.options>
							<input .email name="remember-me" type="checkbox" autocomplete="remember-me" required=""> 
							<label for="remember-me"> "Remember Me"
							<a[ml:auto fs:xs].forgot-link href=""> "Forgot your password?"
						<.login-button @click.mockAuthToggle> "Sign In"
						<hr[mt:1sp mb:.4sp]>
						<ThirdPartyLogins>

tag ThirdPartyLogins
	css .login-button-wrapper
		d:vflex gap:1sp
	
	css .login-button w:100% px:1sp py:0.5sp ta:center rd:1rd cursor:pointer us:none
		bd:2px solid gray3 gap:1sp
		p:1sp d:hflex ai:center jc:center
		.button-logo
			w:30px
		@hover
			bg:gray1 @darkmode:indigo6
		@active
			bg:gray2 @darkmode:indigo7
	<self>
		<div.login-button-wrapper>
			<.login-button @click.googleAuth>
				<GoogleIcon .button-logo>
				<span> "Sign In with Google"
			<.login-button @click.facebookAuth> 
				<FacebookIcon .button-logo>
				<span> "Sign In with Facebook"
			<.login-button @click.appleAuth> 
				<AppleIcon .button-logo>
				<span> "Sign In with Apple"
tag GoogleIcon
	css $googleyellow:#FBBC05
	css $googlered:#EB4335
		$googlegreen:#34A853
		$googleblue:#4285F4
	<self>
		<svg viewBox="-0.5 0 48 48">
			<g fill="none" fill-rule="evenodd">
				<path [fill:$googleyellow] d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24" />
				<path [fill:$googlered] d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51" />
				<path [fill:$googlegreen] d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053" />
				<path [fill:$googleblue] d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618" />

tag TelegramIcon
	css $brandcolor: #58a9e7
	<self>
		<svg viewBox="4 4 16 16">
			<path [fill:$brandcolor ]  
				d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
				/>
tag AppleIcon
	<self>
		<svg viewBox="-3.5 0 48 48">
			<path fill="#0B0B0A" fill-rule="evenodd" d="M27.175 7.792C28.74 5.772 29.927 2.915 29.498 0c-2.559.178-5.55 1.815-7.295 3.948-1.59 1.934-2.898 4.81-2.387 7.601 2.797.088 5.684-1.589 7.359-3.757ZM41 35.217c-1.12 2.495-1.658 3.61-3.1 5.82-2.012 3.085-4.848 6.926-8.366 6.954-3.122.034-3.928-2.046-8.167-2.02-4.239.022-5.122 2.06-8.25 2.029-3.516-.031-6.203-3.497-8.215-6.582-5.627-8.62-6.22-18.738-2.75-24.12 2.47-3.821 6.364-6.057 10.022-6.057 3.723 0 6.065 2.055 9.149 2.055 2.99 0 4.81-2.06 9.117-2.06 3.26 0 6.714 1.786 9.171 4.868C31.554 20.547 32.86 32.121 41 35.217Z" />		
tag FacebookIcon
	<self>
		<svg viewBox="0 0 48 48">
			<path fill="#4460A0" fill-rule="evenodd" d="M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.649 2.649 0 0 1 2.65 0H45.35A2.649 2.649 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48Z" />
tag LoginIllustration
	<self>
		<svg viewBox="0 0 1600 1200">
			# <path [fill:none] d="M0 0h1600v1200H0z" />
			<path fill="none" stroke="#3b116e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M425.08 118.55v121.62" />
			<path fill="#fff" d="M446.82 336.1c6.26-11.95 1.65-26.71-10.3-32.97-11.95-6.27-26.71-1.65-32.97 10.3-6.27 11.95-1.65 26.71 10.3 32.98 11.94 6.25 26.71 1.64 32.97-10.31Z" />
			<path fill="#8c2eff" d="m482.61 294.9-15.57-8.51a42.231 42.231 0 0 1-21.11-28.09l-2.38-10.81c-2.21-10.13-12.26-16.59-22.39-14.3-7.14 1.62-12.76 7.15-14.29 14.3l-2.39 10.81c-2.64 12-10.38 22.21-21.1 28.09l-15.58 8.51c-11.4 6.21-19.15 17.45-20.77 30.3h156.52c-1.79-12.85-9.53-24.09-20.94-30.3Z" />
			<path fill="none" stroke="#3b116e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M359.38 300.86h131.21" />
			<path fill="#3b116e" d="M421.08 233.11c-7.15 1.62-12.77 7.15-14.3 14.3l-2.38 10.81c-2.64 12-10.39 22.21-21.11 28.08l-15.57 8.51c-11.41 6.22-19.15 17.45-20.77 30.3h45.02c0-29.53 33.71-31.06 33.71-57.79 0-18.81-.43-34.72-.43-34.72-1.45.08-2.81.25-4.17.51Z" opacity=".3" />
			<path fill="#2b325a" d="M972.53 1014.55h-24.19V750.48c0-29.1-26.42-52.81-58.83-52.81H479.8c-32.42 0-58.83 23.71-58.83 52.81v264.07h-24.2V750.48c0-39.9 37.26-72.37 83.03-72.37h409.71c45.77 0 83.02 32.47 83.02 72.37v264.07Z" />
			<path fill="#9633ff" d="M787.72 678.11H682.46l-6.75-38.21-6.76-38.46h105.26l2.47 13.9 11.04 62.77Z" />
			<path fill="#3c007c" d="m675.71 639.9-6.76-38.46h105.26l2.47 13.9-100.97 24.56Z" opacity=".2" />
			<path fill="#9633ff" d="M859.58 608.71H586.17c-18.19 0-35.47-14.68-38.72-32.87l-33.14-187.65c-3.25-18.19 8.97-32.87 27.03-32.87h273.54c18.19 0 35.48 14.68 38.72 32.87l33.01 187.78c3.25 18.06-8.84 32.74-27.03 32.74Z" />
			<path fill="#fff" d="M845.42 588.96h-252.1c-11.7 0-22.74-9.48-24.82-21.05l-30.28-171.53c-2.08-11.69 5.72-21.05 17.42-21.05h252.09c11.7 0 22.74 9.49 24.82 21.05l30.28 171.53c1.95 11.57-5.85 21.05-17.41 21.05Z" />
			<path fill="none" stroke="#3c007c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M775.51 608.71H670.25" />
			<path fill="#c89eff" d="M1248.24 360.14h-67.26c-24.73 0-44.84 20.11-44.84 44.84 0 22.02 15.99 40.72 37.7 44.24v23.02l32.88-22.42h41.52c24.74 0 44.84-20.11 44.84-44.84 0-24.83-20.1-44.84-44.84-44.84Z" />
			<path fill="#fff" d="M1189.43 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14ZM1214.56 410.41c3.39 0 6.13-2.75 6.13-6.14a6.13 6.13 0 0 0-12.26 0c0 3.39 2.74 6.14 6.13 6.14ZM1239.8 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14Z" />
			<path fill="#a561ff" d="M621.05 425.82h62.33c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-62.33c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z" />
			<path fill="#c3afdd" d="M626.15 455.55h36.44c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-36.44c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#2b325a" d="M686.57 455.55h11.51c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-11.51c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z" />
			<path fill="#c3afdd" d="M631.25 485.28h8.95c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-8.95c-3.96 0-7.74-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#2b325a" d="M664.18 485.28h53.7c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-53.7c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#e3daef" d="M741.86 485.28h46.03c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-46.03c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#020202" d="M636.36 515.01h28.77c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-28.77c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z" />
			<path fill="#c3afdd" d="M689.1 515.01h6.4c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.96 7.19h-6.39c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#a561ff" d="M719.47 515.01h38.04c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-38.04c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z" />
			<path fill="#343434" d="M806.26 1014.24c3.02-5.73 5.93-11.17 8.65-16.81 3.89-8.26 6.7-14.57 9.13-20.3l.1-.2h-.1c-3.79-1.36-14.28-4.66-28.95-4.66-5.15 0-10.2.39-15.06 1.26h-.1l-6.02 25.46 32.06 15.93.29-.68Z" />
			<path fill="#c7cbff" d="M1043.13 473.18c1.75-9.42 4.08-21.57 5.83-31.38 1.45-7.77 2.72-25.45 3.3-28.85 0 0-59.85-54.7-66.65-51.98-9.23 3.59-15.54 8.84-20.11 16.03-4.27 6.8-6.99 15.35-10.49 25.75l-.88 2.62c-1.07.1-8.64 1.16-9.42 4.47-.87 3.5 3.69 9.52 4.37 10.3-6.02 18.94-5.92 29.24.49 38.08 3.88 5.44 11.95 8.75 21.47 8.75 4.08 0 7.87-.59 10.88-1.75l-2.53 15.54 63.74-7.58Z" />
			<path fill="#2a329e" d="m985.61 480.66 10.01-21.95c-7.68 4.27-13.7 6.51-13.7 6.51l-1.75 10.59 5.44 4.85Z" opacity=".2" />
			<path fill="none" stroke="#2a329e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M955.2 431.99c2.53.87 7.68.29 9.33-3.01" />
			<path fill="#231f20" d="M965.79 411.2c-1.5 0-2.72-1.22-2.72-2.72 0-1.51 1.22-2.72 2.72-2.72a2.71 2.71 0 0 1 2.72 2.72c0 1.5-1.21 2.72-2.72 2.72Z" />
			<path fill="none" stroke="#2a329e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1002.13 431.99 8.55-5.15" />
			<path fill="#231f20" d="M1077.03 393.9c-18.18 0-32.93-14.74-32.93-32.93 0-18.19 14.75-32.94 32.93-32.94 18.19 0 32.94 14.75 32.94 32.94 0 18.19-14.75 32.93-32.94 32.93Z" />
			<path fill="#c7cbff" d="m969.87 947.3 2.72-6.02v-.1c-1.16-10.69-2.91-21.67-5.05-32.64l-4.86-14.58-96.96 1.56 2.43 13.21c2.72 9.23 4.66 16.13 5.15 21.67l25.46 50.61 71.11-33.71Z" />
			<path fill="#343434" d="M975.7 1014.82v-.19c.2-6.61.2-13.12.2-19.43 0-7.68-.3-15.16-.59-22.35v-.19h-.19c-14.38 2.14-27.79 8.26-38.77 17.87l-.09.1 3.01 24.19h36.43Z" />
			<path fill="#a561ff" d="M926.54 1001.61c13.12-16.13 29.44-25.65 48.58-28.47h.19v-.68c-.19-2.81-.29-5.63-.48-8.25-.49-7.29-1.95-20.89-2.14-22.93 0-.1-.1-.2-.29-.2-36.73 1.75-60.92 21.57-65.97 26.04-.19.19-.49 0-.39-.19l3.4-21.28c.59-3.5-.19-7.09-2.33-9.91a13.136 13.136 0 0 0-8.65-5.44c-.68-.1-1.45-.2-2.23-.2H873.2c-.19 0-.29.1-.29.3.1 1.36.68 7.09.68 8.64-.1 23.42-10.49 32.94-20.6 42.07-4.85 4.37-9.42 8.55-12.72 14.09-1.17 1.94-2.04 3.98-2.82 6.12l-.1.29h89.19Z" />
			<path fill="#8c2eff" d="M967.64 908.73v-.19c-7.77-40.91-21.18-80.55-39.93-117.76l-6.03-11.75c42.17-.1 78.31-12.63 94.54-32.84 8.35-10.49 11.17-22.35 8.25-35.27-6.8-29.44-17.78-48.38-17.87-48.48l-.29-.58-.3 4.37c-5.24.58-128.43 15.55-166.52 60.72-25.55 30.31-2.23 94.83 16.42 146.61 4.57 12.73 8.94 24.77 12.14 35.17h99.59Z" />
			<path fill="#0e001f" d="M864.75 897.36c.2-.48 14.67-52.66 76.66-75.97l.19-.1-.1-.19c-4.37-10.59-9.03-20.8-13.89-30.41-1.94-3.79-3.11-6.22-3.69-7.29.1-.1.1-.1-.88-2.04v-.1l-94.24-28.08v.2c-4.17 33.61 13.12 81.61 27.01 120.08 3.11 8.46 5.93 16.42 8.45 23.9l.2.59.29-.59Z" opacity=".2" />
			<path fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m868.05 963.72 15.55 6.41M859.21 975.67l13.12 9.91" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m868.93 908.83 98.51-.2" />
			<path fill="#c7cbff" d="M835.12 948.66c4.08-11.27 7.77-23.22 10.69-33.81l.19-8.26-86.08-42.45-4.18 7.96c-2.52 13.22-3.98 20.79-5.15 23.42l5.44 57.8 74.13-2.91 4.96-1.75Z" />
			<path fill="#a561ff" d="M763.51 978.29c9.82-3.69 20.41-5.63 31.48-5.63 14.58 0 24.97 3.3 28.76 4.66l.2.1.09-.2c1.27-2.62 9.04-22.15 11.37-28.36l.1-.39-.39-.1c-14.28-6.51-29.63-9.81-45.57-9.81-14.77 0-28.51 4.06-27.88 3.69l11.37-16.42c4.85-7 3.11-16.61-3.89-21.47-.68-.49-18.65-9.13-18.65-9.13s-2.14 4.76-2.82 6.02c-10.59 20.89-24.1 24.77-37.21 28.47-6.32 1.74-12.24 3.49-17.68 6.99-1.75 1.17-3.4 2.53-4.86 3.89l.1.39 75.48 37.3Z" />
			<path fill="#8c2eff" d="M845.51 915.82c7.39-27.78 12.25-50.03 14.67-70.63 2.24-18.75 2.63-34.98 2.53-55.09l141.26.39c18.76 0 39.55-3.3 53.54-16.9 10-9.72 14.47-23.22 16.22-36.73 1.46-11.17 1.46-22.63-1.36-33.42-3.11-11.75-3.2-21.57-8.06-30.6l-8.84-13.7H954.23l-4.37 3.2c-1.56.3-29.25 5.35-61.5 14.09-55.09 14.96-76.75 28.18-85.21 36.63-22.73 23.41-28.17 54.21-35.75 96.77-1.26 6.99-2.52 14.28-3.98 21.86l-.97 5.24c-2.43 12.92-4.67 25.26-6.71 35.56l89.77 43.33Z" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M855.81 872.39c6.22-32.35 6.8-54.4 6.71-81.61" />
			<path fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m730.77 921.55 10.59 12.93M718.43 927.97l6.9 14.86" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m756.23 872.39 87.73 42.85" />
			<path fill="#c7cbff" d="m856.01 517.49-.2-3.79c-15.25-16.13-32.45-34.01-44.98-42.75-18.95-13.21-52.76-26.04-64.03-26.04-3.59 0-5.34 1.07-5.44 3.21-.09 5.92 8.26 11.07 19.92 18.16 1.17.69 2.43 1.46 3.69 2.24-1.46.29-2.91 1.65-3.79 3.5-1.36 3.01-.87 6.51 1.46 9.32-2.43.78-4.08 2.24-4.86 4.38-.87 2.62-.29 5.73 1.56 8.45-1.75 1.55-2.72 3.69-2.82 6.22-.1 3.79 1.85 7.48 3.89 9.32 3.1 3.11 6.12 5.64 11.27 5.64 1.26 0 2.62-.2 4.17-.49 6.03 7.58 13.61 12.73 21.38 14.38.97 1.56 2.43 4.76 4.56 9.23 1.66 3.4 3.6 7.68 5.93 12.34l1.94 1.36 46.35-34.68Z" />
			<path fill="#a561ff" d="M1071.11 697.32c52.85-18.95 54.02-57.32 49.06-88.61-2.72-17.58-9.52-40.8-18.55-63.63-8.36-21.08-17.3-38.38-23.32-44.98-13.51-14.87-34.59-18.56-36.82-18.85.19-.97.38-1.95.58-3.01.29-1.66.68-3.5 1.07-5.45v-.19h-62.57l-1.46 8.55h-2.43c-25.45 0-47.99 12.44-68.98 37.99l-23.41 26.72c-1.46-1.75-13.7-16.42-28.47-32.36l-.09-.09-48 37.4c21.18 41.58 42.36 65.77 62.86 71.6 3.5.98 7.19 1.46 10.98 1.46 28.37 0 57.13-27.4 60.23-30.41l8.17 68.79h105.41c9.52 14.38 15.45 34.58 15.45 34.88l.09.19h.2Z" />
			<path fill="#130821" d="m1055.37 662.25 11.76-44.01.19.09c5.93 3.11 7.38 11.95 9.13 22.15 2.43 14.77 5.54 33.13 24.19 40.23h.1c-7.38 6.41-17 12.04-29.63 16.61h-.2l-.09-.19c0-.3-5.93-20.5-15.45-34.88ZM984.83 662.25l-30.89-80.16-12.15 11.37 8.17 68.79h34.87Z" opacity=".2" />
			<path fill="none" stroke="#130821" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1055.47 662.15 17.48-65.09M1078.88 641.07l-14.67-7.1M941.89 593.17l16.23-16.32M884.47 546.54l.97 12.63" />
			<path fill="none" stroke="#2a329e" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M764.29 468.03c6.8 0 18.36 2.34 22.74 4.96M763.03 481.54c6.8-.88 20.5 5.15 20.5 5.15M759.63 494.27c4.37-.88 13.7.87 19.72 5.14M775.27 514.18l-3.98-6.51M982.5 465.02c4.37-1.65 7.68-3.3 7.68-3.3" />
			<path fill="#231f20" d="M1152.33 552.75c3.21-14.47-4.27-28.46-20.11-37.4 7.97-21.47 6.22-42.17-5.05-58.49-11.66-16.81-31.58-26.52-54.8-26.52-7.19 0-14.47.97-21.86 2.82.29-1.66.58-3.21.88-4.57.38-1.94.68-3.6.87-4.76l.19-1.26c2.63-13.9 7.49-39.84-7.48-53.25-9.61-8.55-23.41-13.4-37.89-13.4-7.67 0-15.35 1.36-22.15 4.08-9.52 3.69-15.93 9.71-20.79 19.14 0 0 6.02 8.06 17.1 8.06 2.43 0 5.05-.39 4.67-.19-2.53 8.93 1.2 23.66 5.75 30.05l1.41 1.79.49.65c.9-.63 11.58-8.3 21.3-8.3 5.63 0 9.61 2.62 11.85 7.87 6.9 16.22-20.11 30.31-20.4 30.5h-.1v.1c-1.75 6.8-3.01 37.5 12.82 57.91 9.23 11.85 22.45 17.87 39.35 17.87 9.43 0 20.02-1.94 31.58-5.63 1.07 2.04 12.24 24.38 23.51 61.5 0 0 32.45.97 38.86-28.57Z" />
			<path fill="none" stroke="#0e001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m927.51 790.49-87.92-.78" />
			<path fill="#fff" d="M1007.86 462.01c-5.36 0-9.72-4.35-9.72-9.72 0-5.36 4.36-9.71 9.72-9.71s9.72 4.35 9.72 9.71c0 5.37-4.36 9.72-9.72 9.72Z" />
			<path fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1050.51 433.16c-4.18 1.45-8.55 3.49-12.53 5.53M1132.22 515.35c-2.14 5.05-4.86 10.01-7.77 14.67M1090.15 519.82c9.04-2.43 13.89-6.32 13.89-6.32" />
			<path fill="none" stroke="#130821" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m855.62 513.7-47.8 37.21" />
			<path fill="#343434" d="M748.16 986.07c4.86-3.21 10.01-5.83 15.45-7.78l.39-.19-75.68-37.79-.1.09c-3.5 3.31-6.32 7.09-8.36 11.47l-.09.19 68.39 34.01ZM917.12 1014.82c2.91-4.76 6.22-9.32 9.71-13.5l.2-.29h-89.48l-.1.09c-1.55 4.38-2.04 8.94-2.04 13.51v.19h81.71Z" />
			<path fill="none" stroke="#1f2321" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1066.17 814.2 48.2 198.89M972.51 814.2l-48.19 198.89M954.14 890.61h130.3" />
			<path fill="#2b325a" d="M946.37 788.68h145.84c10.82 0 19.53 6.56 19.53 14.7 0 8.13-8.71 14.69-19.53 14.69H946.37c-10.82 0-19.53-6.56-19.53-14.69 0-8.06 8.82-14.7 19.53-14.7Z" />
			<path fill="#1a1a1a" d="M927.26 806.22c1.78 6.72 9.66 11.85 19.11 11.85h145.84c10.82 0 19.53-6.56 19.53-14.69 0-3.32-1.47-6.33-3.88-8.78-25.52 6.33-55.97 10.99-88.94 13.2-33.49 2.21-64.89 1.5-91.66-1.58Z" opacity=".3" />
			<path fill="#a561ff" d="M520.39 678.22v-78.49h69.26v78.49h-69.26Z" />
			<path fill="#29193f" d="M555.02 620.04c-22.81 0-33.25-17.78-34.5-20.07-.01-.03-.01-.06-.01-.09 0-.02 0-.05.01-.07.02-.03.04-.05.07-.06.02-.01.04-.02.08-.02h68.32c.06 0 .14.02.19.05.07.03.11.09.15.14.04.06.05.13.05.19 0 .08-.01.14-.05.21-1.9 3.33-12.4 19.72-34.31 19.72Z" />
			<path fill="none" stroke="#1c1426" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M604.24 644.05c7.14 0 12.93-5.79 12.93-12.93 0-7.13-5.79-12.92-12.93-12.92s-12.93 5.79-12.93 12.92c0 7.14 5.79 12.93 12.93 12.93Z" />
			<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M335.31 860.49c-4.58-17.06-29.54-22.16-39.81 10.78-8.94 28.74-21.57 32.95-27.33 61.38-5.46 27.18 10.27 66.47 50.59 63.67 42.47-2.96 16.55-135.83 16.55-135.83Z" />
			<path fill="#8c2eff" d="m352.36 787.74 54.55 102.33-95.16 50.73-54.55-102.33 95.16-50.73Z" />
			<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M378.96 801.33h-.3c-16.39 0-29.69 13.3-29.69 29.69v27.7h59.68v-27.7c0-16.39-13.29-29.69-29.69-29.69Z" />
			<path fill="#9633ff" d="M378.89 829.18h-.67c-42.54 0-76.96 34.49-76.96 76.96v91.66c0 9.82 7.98 17.8 17.8 17.8h118.99c9.82 0 17.8-7.98 17.8-17.8v-91.58c.07-42.55-34.42-77.04-76.96-77.04 0 0 .07 0 0 0Z" />
			<path fill="#59268f" d="M409.39 923.72h-61.53c-9.97 0-18.09 8.13-18.09 18.1v38.77c0 9.97 8.12 18.1 18.09 18.1h61.53c9.97 0 18.09-8.13 18.09-18.1v-38.77c0-9.97-8.12-18.1-18.09-18.1Z" opacity=".3" />
			<path fill="#5f00d4" d="M409.14 927.83h-61.28c-8.48-.5-10.47 4.92-18.13 16v28.64c.04 9.97 8.16 18.09 18.13 18.09h61.53c9.97 0 18.09-8.12 18.09-18.09v-28.98c-5.89-14.09-8.73-15.17-18.34-16.16Z" />
			<path fill="#8c2eff" stroke="#272459" stroke-width="4" d="M409.39 915.6h-61.53c-9.97 0-18.09 8.12-18.09 18.09v9.75h97.71v-9.75c0-9.97-8.12-18.09-18.09-18.09Z" />
			<path fill="none" stroke="#fcfcfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M427.48 943.44H329.7" />
			<path fill="#8c2eff" d="M378.59 892.26c-8.16 0-14.77-6.62-14.77-14.77 0-8.17 6.61-14.78 14.77-14.78 8.15 0 14.77 6.61 14.77 14.78 0 8.15-6.62 14.77-14.77 14.77ZM1300.09 962.44h-.71c-7.13-.36-12.66-6.51-12.3-13.73.27-4.81 3.12-9 7.4-11.05 16.84-8.02 15.77-13.73 12.65-30.84-2.58-13.99-6.15-33.16 6.24-53.3 2.41-3.83 6.51-6.15 11.05-6.15 2.41 0 4.73.71 6.78 1.96 6.15 3.75 8.02 11.77 4.28 17.92-7.13 11.58-5.17 22.37-2.86 34.85 3.3 17.91 7.94 42.42-27 59.09-1.7.8-3.57 1.25-5.53 1.25Z" />
			<path fill="#3b116e" d="M1316.94 939.71c-5.08-1.87-9.9-4.1-14.44-6.68-2.05 1.51-4.73 3.03-8.02 4.63-4.28 2.05-7.13 6.33-7.4 11.05-.36 7.13 5.17 13.28 12.3 13.73h.71c1.96 0 3.83-.45 5.62-1.25 11.23-5.35 18.45-11.5 22.81-18.09-3.92-.8-7.75-1.96-11.58-3.39Z" opacity=".2" />
			<path fill="#8c2eff" d="M1068.26 1016.1c-.62-1.7-.98-3.48-.98-5.26 0-7.76 6.33-14.09 14.08-14.09h61.59l38.51 18.99-.09.36h-113.11Z" />
			<path fill="#9633ff" d="M1128.16 1016.1c-9.72 0-18.99-4.73-24.69-12.57l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l12.3-20.59c3.3-5.61 8.65-9.62 14.89-11.41l7.22-2.05.53-20.32c0-1.07.54-2.14 1.25-2.85s1.69-1.07 2.76-1.07c1.07 0 2.23.44 2.94 1.25 4.9 5.34 12.66 13.63 22.73 24.6 2.14 2.31 4.55 3.47 7.4 3.47 6.95 0 15.69-6.68 25.85-14.44 15.51-11.85 34.85-26.56 58.2-26.56 6.59 0 13.28 1.25 19.88 3.57 15.68 5.7 26.73 15.42 32.62 28.88 12.56 28.43-1.7 64.26-1.87 64.62l-.09.09h-179.6Z" />
			<path fill="#c89eff" d="M1104.45 1004.78c-.36-.45-.62-.81-.98-1.25l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l2.32-3.83h.53c4.73 0 8.47 2.4 9.36 5.97.98 3.92-3.56 11.14-8.64 13.81l-.09.09-.18-.17Z" />
			<path fill="none" stroke="#170f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1182.26 1015.92c-2.76-7.13.71-15.24 7.93-18.01 1.61-.62 3.3-.98 5.08-.98h24.42c-3.11-23.44 13.37-44.92 36.82-48.04 1.87-.27 3.74-.36 5.61-.36h1.16" />
			<path fill="#8c2eff" d="M1271.66 995.42c-3.12 0-6.06-.89-8.56-2.59-3.65-2.49-5.97-6.59-6.42-11.41-.44-4.81.9-9.8 3.84-13.99 3.92-5.62 10.07-9.09 16.22-9.09 3.12 0 6.06.89 8.56 2.58 3.65 2.5 5.97 6.6 6.41 11.41.45 4.82-.89 9.81-3.83 14-3.92 5.61-10.16 9.09-16.22 9.09ZM1236.1 945.68c-4.64 0-8.92-1.16-12.84-3.38-3.39-1.97-6.33-4.73-8.47-8.03l-.09-.17.18-.09c9.72-6.42 24.69-15.07 42.34-15.07 3.83 0 7.66.36 11.41 1.16h.18l-.09.18c-.81 2.32-1.87 4.55-3.12 6.68-6.6 11.59-17.92 18.72-29.5 18.72Z" />
			<path fill="none" stroke="#170f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1118.89 983.92c1.69 2.14 7.84 3.3 11.23 2.14" />

# TAG[epic=Modal, seq=37] Login Page
tag create-account-page
	css p:2sp
	css &.hidden d:none
	# css pos:absolute inset:0 zi:20
	# 	d:box d:vflex gap:4sp
	css .bg pos:absolute inset:0 bg:red zi:20
		d:vflex d:box g:4sp
		bg:gray1 @darkmode:gray7
	css .card
		w:600px p:2.4sp
		bg:white @darkmode:gray9
		bxs:xs hue5,xs hue4,sm hue7,xxl hue5 @darkmode:xs black, md black, xxl black
	css .form d:vflex g:1.6sp
	css .field-wrapper d:vflex g:0.5sp
		label us:none
	css .field w:100% h:40px rd:1rd px:0.6sp
		c:gray8 @darkmode:gray2
		bg:gray2 @darkmode:gray8
	css .options d:hflex g:.5sp ai:center
	css .forgot-link c:indigo4
		
	css .login-button w:100% px:1sp py:0.5sp ta:center rd:1rd cursor:pointer us:none
		bd:2px solid gray3 gap:1sp
		p:1sp d:hflex ai:center jc:center
		.button-logo
			w:30px
		@hover
			bg:gray1 @darkmode:indigo6
		@active
			bg:gray2 @darkmode:indigo7
	def googleAuth
		api.logIn!
		imba.commit!
	def facebookAuth
		api.logIn!
		imba.commit!
	def appleAuth
		api.logIn!
		imba.commit!
	def mockAuthToggle
		api.logIn!
		imba.commit!
		
	def render
		<self>
			<div[d:hbox g:1sp]>
				# <LoginIllustration[w:600px]>
				<.card>
					<form.form action="#" method="POST">
						<div.field-wrapper>
							<label for="username"> "Desired Username"
							<input.field .email name="username" autocomplete="username" required=""> 
						<div.field-wrapper>
							<label for="email"> "Email Address"
							<input.field .email name="email" autocomplete="email" required=""> 
						<div.field-wrapper>
							<label for="password"> "Password"
							<input.field .email name="password" autocomplete="username" required="">
						<div.field-wrapper>
							<label for="confirmpassword"> "Confirm Password"
							<input.field .email name="confirmpassword" autocomplete="username" required="">
						<.options>
							<input .email name="remember-me" type="checkbox" autocomplete="remember-me" required=""> 
							<label for="remember-me"> "Remember Me"
						<.login-button @click.mockAuthToggle> "Create Account"
						<hr[mt:1sp mb:.4sp]>
						<ThirdPartyLogins>
	
# ELEMENT[epic=ELEMENT, seq=41] Progress Bar
tag ProgressBar
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
			# let split_progress = progress.split('/')
			# let progress_percent = (split_progress[0] / split_progress[1] * 100)
			<.progress-bg>
				<.progress-fg[flb:{progress+"%"}]>

# ELEMENT[epic=ELEMENT, seq=42] Icon Template
tag icon
	css self d:inline mb:4px
	css svg size:20px d:inline-block stroke:hue4

# ELEMENT[epic=ELEMENT, seq=43] Gift Icon
tag i-gift < icon
	<self>
		<svg xmlns="http://www.w3.org/2000/svg" .icon.icon-tabler.icon-tabler-gift width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="3" y="8" width="18" height="4" rx="1" />
			<line x1="12" y1="8" x2="12" y2="21" />
			<path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
			<path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />

# ELEMENT[epic=ELEMENT, seq=44] Market Icon
tag i-market < icon
	<self>
		<svg xmlns="http://www.w3.org/2000/svg" .icon.icon-tabler.icon-tabler-building-store width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="3" y1="21" x2="21" y2="21" />
			<path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
			<line x1="5" y1="21" x2="5" y2="10.85" />
			<line x1="19" y1="21" x2="19" y2="10.85" />
			<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />

# ELEMENT[epic=ELEMENT, seq=45] Compass Icon
tag i-compass < icon
	<self>
		<svg xmlns="http://www.w3.org/2000/svg" .icon.icon-tabler.icon-tabler-compass width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<polyline points="8 16 10 10 16 8 14 14 8 16" />
			<circle cx="12" cy="12" r="9" />
			<line x1="12" y1="3" x2="12" y2="5" />
			<line x1="12" y1="19" x2="12" y2="21" />
			<line x1="3" y1="12" x2="5" y2="12" />
			<line x1="19" y1="12" x2="21" y2="12" />

# ELEMENT[epic=ELEMENT, seq=46] People Icon
tag i-people < icon
	<self>
		<svg xmlns="http://www.w3.org/2000/svg" .icon.icon-tabler.icon-tabler-friends width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="7" cy="5" r="2" />
			<path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
			<circle cx="17" cy="5" r="2" />
			<path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />

# ELEMENT[epic=ELEMENT, seq=47] Progress Ring

tag ElemProgressRing
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