# import {learning_data_out} from './data/learning_data_out'

import './assets/stylesheet.css'
import Fuzzy from './fuzzy' # for fitting text in word-card
import {audio} from './audio'
import {dictionary} from './data/dictionary'
import Modulus from './data/Modulus'
# import {state.learning_data} from './data'
import './state/index'
import './elements'
import './components'
import './modals'
import './icons'
import './styles.imba'
import './pages/index'
# sealang-link: http://sealang.net/api/api.pl?query=ក&service=dictionary
const fuzzy = new Fuzzy

def logTime fn
	let startTime = performance.now!
	let res = fn
	let endTime = performance.now!
	# LOG "function took {startTime - endTime} ms"
	return res

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
		let route_array = router.pathname.slice(1).split('/')
		state.modulus = route_array[1]
		state.lesson = route_array[2]
		state.phrase = route_array[3]
		state.word = route_array[4]
		api.save!
	
	def build 
		api.init!
		Modulus.initModulsFromFirebase().then(do()
			state.calcAllProgress!
			log modules.modules
			imba.commit!
		)
		imba.router.on('change') do saveRouteToState!
	# FIXME: Not sure why state is not saving and being loaded

	def render
		<self>
			<global 
				@hotkey("shift+d")=api.toggleDark!
				@hotkey("shift+i|v")=api.toggleIpa!
				@hotkey("shift+c+l")=api.clear!
				@hotkey('enter|s')=state.toggleLearned(state.active_word)
			>
			# MODALS
			if state.show_modulus_editor
				<modulus-editor>
			if state.show_lesson_editor
				<lesson-editor>
			if state.show_phrase_editor
				<phrase-editor>
			if state.show_word_editor
				<word-editor>
			# if router.pathname is "/login"
			# 	<login-page[o@off:0% y@off:-200px ease:2dur] ease route="/login">
			<.layout-pancakes>
				css w:100%
					d:grid
					gtr: calc(1topbar) auto 40px # sidebar content sidebar
					min-height:100vh
					h:auto
					pos:absolute inset:0
					ofy:scroll
					# >> * p:1sp # padding around immediate children
					# >> header d:flex ai:center px:1sp
					.layout-middle
						h:auto
						ofy:auto
						pos:relative
				<.layout-top>
					<.width-container>
						<main-navigation>

				<.layout-middle>
					<admin-tools>
					<landing-page route="/">
					<user-page route="/learning">
					<dictionary-page route="/dictionary">
					<phonetics-page route="/phonetics">
					<cms-page route="/cms">
					<login-page route="/login">
					<CreateAccountPage route="/create">
					<.width-container route="/modulus">
						<ModulusPage>

				<.layout-bottom>
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

		
# TAG[epic=PAGE, seq=21] ModulusPage
tag ModulusPage
	css w:100% d:hgrid
		gtc: 1lessonbar 1phrasebar auto
		p:1sp
		pos:relative
	css .modulus-modulus
		d:hflex w:100% 
	css .close-leftbar
		ml: -1lessonbar
	css .left-bar
		flb:1lessonbar
		h:100vh
	def render
		# FIXME: Console.warn fires twice. Not sure why
		# WARN modulus
		<self>
			# <.lesson-nav-wrapper>
			<LessonNav route="/modulus/:lesson" modulus=Modulus.modules[state.modulus]>
			# <.phrase-nav-wrapper>
			<phrase-nav modulus=Modulus.modules[state.modulus]>
			<lesson-page modulus=Modulus.modules[state.modulus]>
			# 	<.main-wrapper[mx:auto]>




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
			<main.modulus-grid>
				<div.image> "image"
				<[d:hgrid w:100% g:1sp gtc: 2fr 1fr]>
					<div.card> "card"
					<rightbar-modulus-contents>
				<[d:hgrid w:100% g:1sp gtc:1fr]> 
					<rightbar-graduated-students>
			let buy-cards = [
				name: "Market modulus"
				price: 5
				benefits: ['One modulus','5 chapters','400 words']
				---
				name: "All modulus"
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
	def signOut
		# state.auth = no
		imba.commit

	def render
		<self>
			<img src=user_modulus.image>
			<.user-info>
				<div>
					<h2.user-name> "DinaLearns"
				<a.user-wordcount> "400/4000"
				<progress-bar .color=#context.active progress=progress>
				<.user-stats>
					<a.user-settings route-to="/settings/"> "settings"
					<a.user-settings @click=state.signOut> "Sign Out"

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
			<.switch-wrapper .learned=state.user_learned.hasOwnProperty(state.active_word) @click=state.toggleLearned(state.active_word)>
				<.switch .learned=state.user_learned.hasOwnProperty(state.active_word)> "learned"
# CARD[epic=CARD, seq=30] word-card
tag word-card
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
			<.switch-wrapper .learned=state.user_learned.hasOwnProperty(state.active_word) @click=state.toggleLearned(state.active_word)>
				<.switch .learned=state.user_learned.hasOwnProperty(state.active_word)> "learned"
			if audio.hasOwnProperty(state.active_word)
				<AudioPlayer>

tag AudioPlayerForBar
	def render
		console.log(audio[word])
		<self>
			# if state.modulus > 0
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
		# if state.modulus > 0
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
	


# TAG[epic=NAV, seq=34] LessonNav
tag LessonNav
	prop modulus = {}

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
					<i-{modulus.icon}[pr:5px]>
					<h2 [fs:xl]> modulus..title
				if state.learning_data.modulus_learned_usage
					<.usage_word_count>
						"{state.learning_data.modulus_learned_usage[state.modulus]}/{modulus..word_usage_count_sum} words"
					<progress-bar[$bg:gray4/30 @darkmode:gray7] progress=state.learning_data.modulus_progress[state.modulus]>
			if Modulus.modules[state.modulus]
				for own id, lesson of Modulus.modules[state.modulus].lessons
					<LessonNavItem .active=(id == state.lesson) route-to="/modulus/{state.modulus}/{id}/0/0" id=id lesson=lesson>
			else
				<p> 'Loading...'

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
	css progress-bar 
			$bg:gray3
			$fg:gray7
		@hover
			bg:gray1
			progress-bar
				$fg:indigo4
		@darkmode
			bg:gray9/50
			c:gray3
			progress-bar
				$bg:gray8
				$fg:gray6
			&.hover, @hover
				bg:gray9
				progress-bar
					$bg:gray8
					$fg:indigo4
	def render
		let progress = "4/{lesson.word_usage_count_sum}"
		<self[w:100%].lesson-button .chapter_active=no>
			<.chapter-text[d:hflex jc:space-between ai:end]>
				<.chapter-name> lesson.title
			if state.learning_data.lesson_learned_usage
				<.chapter-number[opacity:80% fs:xs ff:monospace]> "{state.learning_data.lesson_learned_usage[state.modulus][id]}/{lesson.word_usage_count_sum} words"
				<progress-bar .color progress=state.learning_data.lesson_progress[state.modulus][id]>

# TAG[epic=NAV, seq=36] phrase-nav
tag phrase-nav
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
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	# Goes to the last word of hte previous phrase
	def prevPhraseLast
		if phrase_index > 0
			phrase_index--
			word_index = phrases[phrase_index].khmer.split(' ').length - 1
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
	# Goes to the first word of the previous phrase
	def prevPhraseZero
		if phrase_index > 0
			phrase_index--
			word_index = 0
			router.go("/modulus/{modulus_index}/{lesson_index}/{phrase_index}/{word_index}")
	def render
		let phrases = Modulus.modules[state.modulus]..lessons[state.lesson].phrases
		<self>
			if phrases
				for own id, phrase of phrases
					<.number-toggle route-to="/modulus/{state.modulus}/{state.lesson}/{id}/0">
						let isActive = state.phrase is id
						let progress = state.learning_data.phrase_progress[state.modulus][state.lesson][id]
						<ElemProgressRing .active=isActive progress=progress size=30> 
							if id is 0 
								"t"
							else
								id
			else
				<p> 'Loading...'


# TAG[epic=Modal, seq=37] Login Page
tag CreateAccountPage
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
		imba.commit!

	def facebookAuth
		imba.commit!

	def appleAuth
		imba.commit!

	def mockAuthToggle
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
						<thirdparty-logings>
					
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
		zi:10
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
