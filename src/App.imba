# import {learning_data_out} from './data/learning_data_out'
import './assets/stylesheet.css'
import fitty from 'fitty' # for fitting text in WordCard
import Fuzzy from './fuzzy' # for fitting text in WordCard
import {audio} from './audio'
import {clusters} from './data/clusters'
import {dictionary} from './data/dictionary'
import {moduuls_data} from './data/moduuls_data'
# import {state.learning_data} from './data'
import './elements'
import './components'
import './icons'
import './styles.imba'
# sealang-link: http://sealang.net/api/api.pl?query=ក&service=dictionary
const fuzzy = new Fuzzy
const STATEKEY = 'app-state-20221119'

def logTime fn
	let startTime = performance.now!
	let res = fn
	let endTime = performance.now!
	# console.log "function took {startTime - endTime} ms"
	return res

let state = {
	auth: yes
	dark: yes
	left: yes
	right: yes
	ipa: no
	moduul: 0
	lesson: 0
	phrase: 0
	word: 0
	active_word: 'ជា'
	learning_data: [{}]
	user_learned: {}
	learned_usage: 0
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
				moduul: 0
				lesson: 0
				phrase: 0
				word: 0
				active_word: 'ជា'
				learning_data: [{}]
				user_learned: {}
				learned_usage: 0
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
			moduul: 0
			lesson: 0
			phrase: 0
			word: 0
			active_word: 'ជា'
			learning_data: [{}]
			user_learned: {}
			learned_usage: 0
		}
		save!
		# console.log "cleared local storage"

	def toggleLearned word
		if state.user_learned.hasOwnProperty(word)
			delete state.user_learned[word]
		else
			state.user_learned[word] = yes
		# console.log 'toggled', word, state.user_learned.hasOwnProperty(word)
		calcAllProgress!
		save!
	
	# calculates progress from words already learned by the user
	def calcAllProgress
		state.learning_data.user_progress = calcUserProgress(moduuls_data)
		state.learning_data.user_progress_learned_usage = calcUserLearnedUsage(moduuls_data)
		state.learning_data.moduul_progress = calcModuulProgress(moduuls_data)
		state.learning_data.moduul_learned_usage = calcModuulLearnedUsage(moduuls_data)
		state.learning_data.lesson_progress = calcLessonProgress(moduuls_data)
		state.learning_data.lesson_learned_usage = calcLessonLearnedUsage(moduuls_data)
		state.learning_data.phrase_progress = calcPhraseProgress(moduuls_data)
		state.learning_data.phrase_learned_usage = calcPhraseLearnedUsage(moduuls_data)
	
	def calcUserProgress user_data
		return calcUsageProgressOfObject(user_data)
	
	def calcModuulProgress user
		let moduul_progress = []
		for moduul in user.moduuls
			moduul_progress.push calcUsageProgressOfObject(moduul)

		return moduul_progress
	
	def calcLessonProgress user
		let lesson_progress = []
		for moduul in user.moduuls
			let lesson_progress_two = []
			for lesson in moduul.lessons
				lesson_progress_two.push calcUsageProgressOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress
	
	def calcPhraseProgress user
		let phrase_progress = []
		for moduul in user.moduuls
			let phrase_progress_two = []
			for lesson in moduul.lessons
				let phrase_progress_three = []
				for phrase in lesson.phrases
					phrase_progress_three.push calcUsageProgressOfObject(phrase)
				phrase_progress_two.push phrase_progress_three
			phrase_progress.push phrase_progress_two
		return phrase_progress
	
	def calcUsageProgressOfObject object
		let percent = 0
		for own word, word_state of state.user_learned
			# if word is not used in object
			if object.word_usage_count[word]
				percent += object.word_usage_count[word] / object.word_usage_count_sum
		percent = Math.round(percent * 100)
		return percent
	
	def calcUserLearnedUsage user
		return calcLearnedUsageOfObject(user)
	
	def calcModuulLearnedUsage user
		let moduul_progress = []
		for moduul in user.moduuls
			moduul_progress.push calcLearnedUsageOfObject(moduul)
		return moduul_progress
	
	def calcLessonLearnedUsage user
		let lesson_progress = []
		for moduul in user.moduuls
			let lesson_progress_two = []
			for lesson in moduul.lessons
				lesson_progress_two.push calcLearnedUsageOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress
	
	def calcPhraseLearnedUsage user
		let phrase_progress = []
		for moduul in user.moduuls
			let phrase_progress_two = []
			for lesson in moduul.lessons
				let phrase_progress_three = []
				for phrase in lesson.phrases
					phrase_progress_three.push calcLearnedUsageOfObject(phrase)
				phrase_progress_two.push phrase_progress_three
			phrase_progress.push phrase_progress_two
		return phrase_progress
	
	def calcLearnedUsageOfObject object
		let usage = 0
		for own word, word_state of state.user_learned
			# if word is not used in object
			if object.word_usage_count[word]
				usage += object.word_usage_count[word]
		usage = Math.round(usage)
		return usage

	# API[epic=API, seq=7] SAVE
	def save
		imba.locals.state = state
		# store(STATEKEY, state)
		# console.log 'saved', state
	
	# API[epic=API, seq=7] LOAD
	def load
		state = imba.locals.state if imba.locals.state
		# console.log 'loaded', state

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
			# console.log 'logged out'
		save!
	def search feather, haystack
		console.log feather, haystack
		let haystackLength = haystack.length # tlen
		let featherLength = feather.length # qlen
		if featherLength > haystackLength
			# even if return is implicit in imba
			# it only returns the last expression.
			# so without return here it would merely continue
			# executing the rest of the function
			return false

		if featherLength is haystackLength
			return feather is haystack
		
		let featherLetter = 0
		while featherLetter < featherLength
			let haystackLetter = 0
			let match = false
			let featherLetterCode = feather.charCodeAt(featherLetter++)
			while haystackLetter < haystackLength
				if haystack.charCodeAt(haystackLetter++) is featherLetterCode
					# console.log 'matched?'
					break match = true
			continue if match
			return false
		return true

let api = new Api
# set server address here. It should NOT end with a /
let serverAddress = 'http://api.cambodiau.com'
# CLASS[epic=CLASS, seq=12] Remote API
class RemoteAPI
	# API[epic=Remote, seq=13] callAPI
	# wrapper to call API
	def callAPI method, endpoint, data, token
		# let url = serverAddress + endpoint
		let body = data ? JSON.stringify(data) : null
		let headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			}

		if token 
			headers.Authorization = 'Bearer ' + token

		let res = await fetch(url, {
			method,
			headers,
			body
		})

		return await res.json()

	# API[epic=Remote, seq=14] register API call
	def register name, email, username, password
		let body = {
			name,
			email,
			username,
			password
			}
		let res = await callAPI 'POST', '/api/register', body

		if res.status === 201
			return true
		else
			console.log(res)
	
	# API[epic=Remote, seq=15] login API call
	def login email, password
		let body = {
			email,
			password
			}

		let res = await callAPI 'POST', '/api/login', body

		if res.status = 200
			return res.token
		else
			console.log(res)

	# API[epic=Remote, seq=16] logout API call
	def logout token
		await callAPI 'GET', '/api/logout', null, token

	# API[epic=Remote, seq=17] get user API call
	def getUser token
		let res = await callAPI 'GET', '/api/user', null, token

		if res.status == 200
			return res.user
		else
			console.log(res)


	# API[epic=Remote, seq=18] sample use
	def doStuff
		let name = 'qq'
		let email = 'aa@bb.ccd'
		let username = 'sdflask'
		let password = 'dlfkasdlkfjsflkj##lkj'

		register(name, email, username, password)

		# save token somewhere on local storage because it'll be needed for future calls
		let token = login(email, password)

		# get user data
		let user = getUser(token)
		console.log(user)

		# on logout clear token from local storage
		logout(token)

let remote = new RemoteAPI

# LAYOUT[epic=LAYOUT, seq=19] App
tag App
	css d:hflex
		tween: margin-left 2dur
		min-height: 100vh
		w:100% 
		bg:white @darkmode:black
		&.open
			ml:0px
	def saveRouteToState
		let route_array = router.pathname.replace('/','').split('/')
		state.moduul = route_array[1]
		state.lesson = route_array[2]
		state.phrase = route_array[3]
		state.word = route_array[4]
		api.save!
	
	def build 
		api.init!
		api.calcAllProgress!
		imba.router.on('change') do saveRouteToState!
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
			# 	<ModalLogin[o@off:0% y@off:-200px ease:2dur] ease route="/login">
			<layout-pancakes>
				css gtr: calc(1topbar+2sp) auto 40px # sidebar content sidebar
					# >> * p:1sp # padding around immediate children
					# >> header d:flex ai:center px:1sp
					>> main bg:gray1 @darkmode:gray9/50
				<nav slot="top">
					<.width-container[p:1sp]>
						<TopNavigation>
				<div slot="middle">
					<LandingPage route="/">
					<UserPage route="/@username">
					<DictionaryPage route="/dictionary">
					<PhoneticsPage route="/phonetics">
					<CMSAdminPage route="/cms">
					<ModalLogin route="/login">
					<.width-container>
						<ModuulPage route="/moduul">
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
						<span> "Currently in Development. Give feedback via "
						<a href="https://discord.gg/HkwUHrqv" target="_blank"> "Discord"
						<span> " or "
						<a href="https://t.me/+GFitY1neUaQxMzQ1" target="_blank"> "Telegram"

# TAG[epic=PAGE, seq=1] LandingPage
tag LandingPage
	css self
		gap:1sp
	css h1
		mt:1sp fs:2xl
	css .button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		p:1sp rd:md
	<self[mx:auto d:vflex ai:center]>
		<div[p:1sp bg:rose0 bd:2px solid rose3 rd:md m:1sp]> "Design of Landing Page will be improved soon. This a quick implementation."
		<h1 [ta:center]> "How to use CambodiaU"
		<iframe width="560" height="315" src="https://www.youtube.com/embed/20dpm0bNjIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
		<button.button route-to="/store"> "Purchase Modules"

# TAG[epic=NAV, seq=1] TopNavigation
tag TopNavigation
	css self
		d:hflex gap:1sp
	css a, button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		p:1sp rd:md
	def toggleLeftNav
		state.left = !state.left
		api.save!
		console.log 'toggled nav', state.left
		imba.commit!
	def logOut
		api.logOut!
		imba.commit!
	def render
		<self>
			<cambodiau-logo route-to="/" [width:200px mr:auto cursor:pointer]>
			<a route-to="/store">
				<div> "Store"
			<a route-to="/@username">
				<div> "My Learning"
			<a route-to="/dictionary">
				<div> "Dictionary"
			<a route-to="/phonetics">
				<div> "Phonetics"
			if state.auth
				<a @click.logOut>
					<div> "logout"
			else
				<a route-to="/login">
					<div> "login"
			<a route-to="/cms">
				<div> "CMS"

tag DictionaryPage
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
			let all_word_usage_count = moduuls_data.word_usage_count_sum
			let all_wordset_length = moduuls_data.word_set_count
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
				<Dictionary>
				<WordCard.card[w:200px h:260px]>
# LAYOUT[epic=LAYOUT, seq=21] Dictionary
tag Dictionary
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
		console.log $track
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
# LAYOUT[epic=LAYOUT, seq=21] Home
tag UserPage
	css w:100%
		py:1sp
	def render
		<self>
			<.width-container>
				<UserPageOwnedModuuls>
			# <UserPageLockedModuuls>
# TAG[epic=PAGE, seq=1] CMSAdminPage
tag CMSAdminPage
	def render
		<self>
			<h1[p:1sp bg:rose0 bd:2px solid rose3 rd:md m:1sp]> "Design of CMS interface will be improved soon. This a quick implementation."
			<div route="/cms/">
				<CMSLearnModuleList>
			# <CMSLessonList route="/cms/0/">
			# <CMSChapterList route="/cms/0/0/">

tag CMSLearnModuleList
	prop moduul_list = [
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
			for item in moduul_list
				<CMSModuulCard item=item>

tag CMSModuulCard
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



# LAYOUT[epic=PAGE, seq=1] PhoneticsPage
tag PhoneticsPage
	css self
		p:1sp
		d:vflex
		# pt:1s
		pos:relative
	css .bg
		bg:gray1
		w:100% h:100vh
		d:block pos:absolute 
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
		
# LAYOUT[epic=PAGE, seq=21] ModuulPage
tag ModuulPage
	css w:100% d:hgrid
		gtc: 1lessonbar 1phrasebar auto
		p:1sp
	css .moduul-moduul
		d:hflex w:100% 
	css .close-leftbar
		ml: -1lessonbar
	css .left-bar
		flb:1lessonbar
		h:100vh
	def render
		# FIXME: Console.warn fires twice. Not sure why
		# console.warn moduul
		<self>
			# <.lesson-nav-wrapper>
			<LessonNav route="/moduul/:lesson" moduul=moduuls_data.moduuls[state.moduul]>
			# <.phrase-nav-wrapper>
			<ChapterNav moduul=moduuls_data.moduuls[state.moduul]>
			<LessonLayout moduul=moduuls_data.moduuls[state.moduul]>
			# 	<.main-wrapper[mx:auto]>
# LAYOUT[epic=LAYOUT, seq=22] UserPageOwnedModuuls
tag UserPageOwnedModuuls
	def render
		<self>
			<h2[px:1sp fs:xl]>
			<.layout-card-grid>
				for own id, moduul of moduuls_data.moduuls
					<ModuulCard.stretchy-card route-to="/moduul/{id}/0/0/0/" id=id moduul=moduul>
					# <ModuulCard.stretchy-card route-to="/moduul/{id}/0/0/0/" id=id moduul=moduul>
					# <ModuulCard.stretchy-card route-to="/moduul/{id}/0/0/0/" id=id moduul=moduul>
					# <ModuulCard.stretchy-card route-to="/moduul/{id}/0/0/0/" id=id moduul=moduul>
tag UserPageLockedModuuls
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
				for own id, moduul of bible_data.moduuls
					<ModuulCard route-to="/buy/{id}" id=id moduul=moduul>

# LAYOUT[epic=LAYOUT, seq=23] LessonLayout
tag LessonLayout
	css d:vflex @lg:hflex g:1sp
		# bg:red
	css .moduul-grid
		# flg:1 d:vflex g:1sp
		d:grid g:1sp
		gtc: 1fr @md: minmax(1rightbar, 3rightbar) 1rightbar
		# grid-template-areas: "a a b", "a a b"
	css .image 
		rd:1rd
		aspect-ratio: 2 / 1
		w:100%
	css .left, .right
		d:vflex
		gap:1sp
	css .phonetics
		ff:mono d:flex gap:0.5sp flex-wrap:wrap
	def render
		let phrase = moduul.lessons[state.lesson].phrases[state.phrase]
		<self>
			<main.moduul-grid>
				<.left>
					if phrase.image
						<img src=phrase.image .image> phrase.image
					# <WordBar>
					<WordNav.card @click.commit moduul=moduul phrase=phrase rt=route>
					<.card> 
						<h2> "Phonetics"
						<p.phonetics>
							if state.ipa
								for word in phrase.khmer.split('|')
									let obj = dictionary[word]
									if obj..ipa || obj..vida || obj..vida_auto || word
										<span> obj..ipa || obj..vida || obj..vida_auto || word
									else
										<span> "n/a"
										<> console.error word, "no phonetics available"
							else
								for word in phrase.khmer.split('|')
									let obj = dictionary[word]
									if obj..vida || obj..vida_auto || obj..ipa || word
										<span> obj..vida || obj..vida_auto || obj..ipa || word
									unless obj..vida || obj..vida_auto || obj..ipa || word
										<span> "n/a"
										<> console.error word, "no phonetics available"
					<.card>
						<h2> "Meaning"
						<p> phrase.meaning
				<.right>
					if state.active_word
						<WordCard.card>
						if dictionary[state.active_word]..google
							<DefinitionCard.card>
						<SpellingCard.card>
					<ShortcutCard.card>

# TAG[epic=NAV, seq=24] WordNav
tag WordNav
	css self
		d:hflex g:.4sp flf:wrap
	css .word-wrapper
		d:hflex flf:wrap g:.5sp
	css .word
			ff:$khmer
			fs:2xl
			lh:2em
			pt:.4em
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
	
	# Goes to the next word in the phrase
	def nextWord
		if word_index < last_word_index
			word_index++
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
		else 
			# if last word of phrase, goes to the first word of the next phrase
			nextPhrase!
		# console.log 'phrase', phrase_index, 'word', word_index, 'lastw', last_word_index

	# Goes to the previous word in the phrase
	def prevWord
		if word_index > 0
			word_index--
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
		else
			# if no previous word in this phrase goes to the last word of the previous phrase
			prevPhraseLast!
	# Goes to the first verse of the next phrase
	def nextPhrase
		if phrase_index < last_phrase_index
			phrase_index++
			word_index = 0
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	# Goes to the last word of hte previous phrase
	def prevPhraseLast
		if phrase_index > 0
			phrase_index--
			word_index = phrases[phrase_index].khmer.split('|').length - 1
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
	# Goes to the first word of the previous phrase
	def prevPhraseZero
		if phrase_index > 0
			phrase_index--
			word_index = 0
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	def updateActiveWordData
		route_array = router.pathname.replace('/','').split('/')
		moduul_index = route_array[1]
		lesson_index = route_array[2]
		phrase_index = route_array[3]
		word_index = route_array[4]
		word = phrase.khmer.split('|')[word_index]
		phrases = moduul.lessons[lesson_index].phrases
		last_phrase_index = Object.keys(phrases).length - 1
		last_word_index = phrase.khmer.split('|').length - 1
		state.active_word = word
	def render
		updateActiveWordData!
		# @click=(state.active_word = khccmer_word)
		<self>
			<h2> phrase.title
			# TAG[epic=SHORTCUTS, seq=25] Word & Lesson Shortcuts
			
			<global 
				@hotkey('e|up')=prevPhraseZero
				@hotkey('r|down')=nextPhrase
				@hotkey('d|left')=prevWord 
				@hotkey('f|right')=nextWord
			>
			<div.word-wrapper>
				for khmer_word, ki in phrase.khmer.split('|')
					<.word .active=(khmer_word is state.active_word) route-to="/moduul/{state.moduul}/{state.lesson}/{state.phrase}/{ki}" .known=state.user_learned.hasOwnProperty(khmer_word) .not_in_dict=!dictionary.hasOwnProperty(khmer_word)> khmer_word

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
			<main.moduul-grid>
				<div.image> "image"
				<[d:hgrid w:100% g:1sp gtc: 2fr 1fr]>
					<div.card> "card"
					<rightbar-moduul-contents>
				<[d:hgrid w:100% g:1sp gtc:1fr]> 
					<rightbar-graduated-students>
			let buy-cards = [
				name: "Market moduul"
				price: 5
				benefits: ['One moduul','5 chapters','400 words']
				---
				name: "All moduuls"
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
			<img src=user_moduul.image>
			<.user-info>
				<div>
					<h2.user-name> "DinaLearns"
				<a.user-wordcount> "400/4000"
				<ProgressBar .color=#context.active progress=progress>
				<.user-stats>
					<a.user-settings route-to="/settings/"> "settings"
					<a.user-settings @click=state.logout> "logout"

# CARD[epic=CARD, seq=28] ModuulCard
tag ModuulCard
	# prop chapters = []
	prop link = "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60"
	prop locked = yes
	prop moduul_active = no
	css self
		d:vflex .moduul_active:vflex ai:center
		rd:1rd cursor@hover:pointer
		@hover
			bg:gray0 @darkmode:gray8/50
		&.moduul_active
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
	
	css .moduul-actions
		d:hflex jc:space-between
		a c:white/30 @hover:hue5 fs:xs
	css .icon-lock
		d:vbox ai:center jc:center 
		bg:hue1 @darkmode:hue8
		p:1sp rd:md h:100%
		svg size:20px 
			fill:hue6 @darkmode:hue4
		.moduul-price
			c:hue6 @darkmode:hue4
			ff:monospace
	
	def render
		<self .locked=moduul.locked>
			<div.not-image> unless moduul.image
			<img.image src=moduul.image> if moduul.image
			<.card-info>
				<.card-title>
					<h2> "{moduul.title}"
					<span.progress-percent> "{Math.floor((state.learning_data.moduul_learned_usage[id] / moduul.word_usage_count_sum)* 1000) / 10}%"
				<ProgressBar[$fg:hue5 $bg:gray3 @darkmode:gray7] progress=state.learning_data.moduul_progress[id]>
				# TODO: Calculate Wordcount of used words for moduul, Lesson, Phrase
				<> console.log state.learning_data.moduul_progress[state.moduul]
				# if moduul.locked
				# 	<.icon-lock>
				# 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" .w-6.h-6>
				# 			<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
				# 		<.moduul-price[]> "${moduul.price}"

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
		fitty($fit2, fit_settings)
	def render
		<self>
			let vida = dictionary[state.active_word]..vida
			let vida_auto = dictionary[state.active_word]..vida_auto
			let ipa = dictionary[state.active_word]..ipa
			<a$fit2.fit.khmer title="Click to search this word on sealang.net dictionary." href="http://sealang.net/api/api.pl?query={state.active_word}&service=dictionary" target="_blank"> 
				state.active_word
			if audio.hasOwnProperty(state.active_word)
				<AudioPlayerForBar>
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
			<.switch-wrapper .learned=state.user_learned.hasOwnProperty(state.active_word) @click=api.toggleLearned(state.active_word)>
				<.switch .learned=state.user_learned.hasOwnProperty(state.active_word)> "learned"
# CARD[epic=CARD, seq=30] WordCard
tag WordCard
	css self 
		d:vflex ai:center gap:1sp
		min-width:1rightbar
		w:100%
	css .khmer
		lh:60px
		mt:20px
		ff:$khmer
		c:hue6
	css .phonetic
		ff:monospace fs:xl
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
						<div.phonetic[fs:xs]> "ipa coming soon"
				else
					<span[fs:xs c:gray5]> "vida"
					if vida
						<div.phonetic> vida
					elif vida_auto
						<div.phonetic> vida_auto
					else
						<div.phonetic> "vida coming soon"
			<.switch-wrapper .learned=state.user_learned.hasOwnProperty(state.active_word) @click=api.toggleLearned(state.active_word)>
				<.switch .learned=state.user_learned.hasOwnProperty(state.active_word)> "learned"
			if audio.hasOwnProperty(state.active_word)
				<AudioPlayer>

tag AudioPlayerForBar
	<self>
		# if state.moduul > 0
		let word = ""
		if manual
			word = manual
		else
			word = state.active_word
		<audio$track2 @ended.commit src=audio[word] type="audio/mpeg" preload="metadata">
		
		<.button-wrapper[d:hflex ai:center]>
			if $track2.paused # when paused
				<div .play-audio[w:2em cursor:pointer] @hotkey('space|a') @click=$track2.play> 
					<svg[size:24px] stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
						<path[stroke:indigo6 fill:indigo6]  d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			
			else # when playing
				<div .play-audio[w:2em cursor:pointer] @hotkey('space') @click=$track2.pause> 
					<svg[size:24px] stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000" viewBox="0 0 24 24">
						<path[stroke:indigo6 fill:indigo2] d="M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6z"/>
					# <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					# 	<path[stroke:indigo6 fill:indigo2] d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					# 	<path[stroke:indigo6 fill:indigo6] d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
tag AudioPlayer
	<self>
		# if state.moduul > 0
		let word = ""
		if manual
			word = manual
		else
			word = state.active_word
		<audio$track @ended.commit src=audio[word] type="audio/mpeg" preload="metadata">
		
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
			# <> console.log word_object
			<ol>
				for item in word_object.def
					let line = item.split('=')
					let use = line[0]
					let translations = line[1].split('|')
					<li>
						<span.use> "{use.toUpperCase!} "
						<span.def> translations.join(', ')
		else
			<h2> "Google Definition"
			for defi in dictionary[state.active_word].google.split('|')
				<p> defi

# CARD[epic=CARD, seq=32] ShortcutCard
tag ShortcutCard
	css .key
		mx:.5sp
			
	<self .shortcuts.card>
		# TAG[epic=SHORTCUTS, seq=20] Global Shortcuts
		
		<h2> "Shortcuts"
		<div>
			<span.key-text> "toggle learned"
			<span.key> "s"
			<span.key-text> "or"
			<span.key> "enter"
		<div>
			<span.key-text> "play audio "
			<span.key> "a"
			<span.key-text> "or"
			<span.key> "space" 
		<div>
			<span.key-text> "previous lesson"
			<span.key> "e"
			<span.key-text> "or"
			<span.key> "↑"
		<div>
			<span.key-text> "next lesson"
			<span.key> "r"
			<span.key-text> "or"
			<span.key> "↓" 
		<div>
			<span.key-text> "previous word"
			<span.key> "d"
			<span.key-text> "or"
			<span.key> "←"
		<div>
			<span.key-text> "next word"
			<span.key> "f"
			<span.key-text> "or"
			<span.key> "→"
		# <div>
		# 	<span.key-text> "play audio if available"
		# 	<span.key[ml:.5sp]> "a"
		<div>
			<span.key-text> "toggle dark mode"
			<span.key> "shift & d"
		<div>
			<span.key-text> "change phonetics system"
		<div>
			<span.key> "v"
			<span.key-text> "or"
			<span.key> "shift & i"
		<div>
			<span.key-text> "clear all progres"
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
			
			let regtest = new RegExp
				# kh_nuh +
				# kh_nih +
				# kh_eeh +
				kh_leg +
				kh_aang +
				kh_eaq +
				kh_bantok_piir +
				kh_treisap +
				kh_s_stress +
				kh_c_stress +
				kh_v +
				kh_c +
				'.', 'g'
			
			# let REGlegClusters = /(្[កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ])+/gi
			let testword = state.active_word
			let groups = testword.match regtest
			# # console.log groups
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
		# ml:-1lessonbar
		h:100vh
		overflow-y:scroll
		w:1lessonbar
		ofy: scroll
		d:vflex
		g:1sp
	css .title-card 
		bg:white @darkmode:gray9
		rd:md
		p:1sp
	css .icon-title
		d:hflex
	css .usage_word_count
		fs:xxs ff:mono c:gray6
	def render
		<self>
			
			<.title-card>
				<.icon-title>
					<i-{moduul.icon}[pr:5px]>
					<h2 [fs:xl]> moduul.title
				<.usage_word_count> "{state.learning_data.moduul_learned_usage[state.moduul]}/{moduul.word_usage_count_sum} words"
				<ProgressBar[$bg:gray4/30 @darkmode:gray7] progress=state.learning_data.moduul_progress[state.moduul]>
			for own id, lesson of moduuls_data.moduuls[state.moduul].lessons
				<LessonNavItem .active=(id == state.lesson) route-to="/moduul/{state.moduul}/{id}/0/0" id=id lesson=lesson>

# TAG[epic=NAV, seq=35] LessonNavItem
tag LessonNavItem
	css self
		cursor:pointer
		rd:1rd
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
		let progress = "4/{lesson.word_usage_count_sum}"
		<self[w:100%].lesson-button .chapter_active=no>
			<.chapter-text[d:hflex jc:space-between ai:end]>
				<.chapter-name> lesson.title	
			let progress_string = "{state.learning_data.lesson_learned_usage[state.moduul][id]}/{lesson.word_usage_count_sum}"
			<.chapter-number[opacity:80% fs:xs ff:monospace]> "{progress_string} words"
			<ProgressBar .color progress=state.learning_data.lesson_progress[state.moduul][id]>

# TAG[epic=NAV, seq=36] ChapterNav
tag ChapterNav
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
	# Goes to the first verse of the next phrase
	def nextPhrase
		if phrase_index < last_phrase_index
			phrase_index++
			word_index = 0
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	# Goes to the last word of hte previous phrase
	def prevPhraseLast
		if phrase_index > 0
			phrase_index--
			word_index = phrases[phrase_index].khmer.split('|').length - 1
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
	# Goes to the first word of the previous phrase
	def prevPhraseZero
		if phrase_index > 0
			phrase_index--
			word_index = 0
			router.go("/moduul/{moduul_index}/{lesson_index}/{phrase_index}/{word_index}")
	def render
		let phrases = moduuls_data.moduuls[state.moduul].lessons[state.lesson].phrases
		let progress = 0
		<self>
			for own id, phrase of phrases
				<.number-toggle route-to="/moduul/{state.moduul}/{state.lesson}/{id}/0">
					let isActive = state.phrase is id
					let progress = state.learning_data.phrase_progress[state.moduul][state.lesson][id]
					<ElemProgressRing .active=isActive progress=progress size=30> 
						if id is 0 
							"t"
						else
							id


# TAG[epic=Modal, seq=37] Login Modal
tag ModalLogin
	css p:2sp
	css &.hidden d:none
	
	# css pos:absolute inset:0 zi:20
	# 	d:box d:vflex gap:4sp
	css .bg pos:absolute inset:0 bg:red zi:20
		d:vflex d:box g:4sp
		bg:gray1 @darkmode:gray7
	css .card
		max-width:600px p:2.4sp
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
		bg:indigo3 @darkmode:indigo7
		@hover
			bg:indigo6 @darkmode:indigo6
		@active
			bg:indigo5 @darkmode:indigo7
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
			# <.bg route-to="/">
			<div[d:vbox g:2sp]>
				# <cambodiau-icon[cursor:pointer] route-to="/">
				<.card>
					<form.form action="#" method="POST">
						# <> "login"
						<div[d:flex gap:1sp]>
							<.login-button[bg:rose2] @click.googleAuth> "Sign In with Google"
							<.login-button[bg:blue2] @click.facebookAuth> "Sign In with Facebook"
							<.login-button[bg:blue2] @click.appleAuth> "Sign In with Apple"
						<hr[mt:1sp mb:.4sp]>
						<p[ta:center c:gray6]> "Sign in with email"
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
						<p[ta:center c:gray6]> "Create account with email"
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
							<a[ml:auto fs:xs].forgot-link href=""> "Forgot your password?"
						<.login-button @click.mockAuthToggle> "Create Account"
					
# ELEMENT[epic=ELEMENT, seq=38] UserThumb
tag UserThumb
	css bg:hue5
		rd:full
	css img
		o@hover:50% tween:opacity .2s cursor:pointer
	def render
		<self>
			<img[s:40px rd:full] src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=60">

# ELEMENT[epic=ELEMENT, seq=39] Icon Left Chevron
tag IconLeftChevron
	<self>
		<svg[s:20px] xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />	

# ELEMENT[epic=ELEMENT, seq=40] Icon Right Chevron
tag IconRightChevron
	<self>
		<svg[s:20px] xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />

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

imba.mount <App>, document.getElementById "app"