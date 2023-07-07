# import {learning_data_out} from './data/learning_data_out'

import './assets/stylesheet.css'
import Fuzzy from './fuzzy' # for fitting text in word-card
import {audio} from './audio'
import {dictionary} from './data/dictionary'
import Course from './data/Course'
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
		state.course = route_array[1]
		state.lesson = route_array[2]
		state.phrase = route_array[3]
		state.word = route_array[4]
		api.save!
	
	def build 
		api.init!
		Course.initModulsFromFirebase().then(do()
			state.calcAllProgress!
			log courses.courses
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
			if state.show_course_editor
				<course-editor>
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
						<main-nav>

				<.layout-middle>
					<landing-page route="/">
					<store-page route="/store">
					<user-page route="/learning">
					<dictionary-page route="/dictionary">
					<phonetics-page route="/phonetics">
					<login-page route="/login">
					<CreateAccountPage route="/create">
					<course-page route="/course">

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
						if admin = yes
							<admin-tools>
						else
							<span> "Currently in Development. Give feedback via "
							<a href="https://discord.gg/HkwUHrqv" target="_blank"> "Discord"
							<span> " or "
							<a href="https://t.me/+GFitY1neUaQxMzQ1" target="_blank"> "Telegram"










# TAG[epic=NAV, seq=34] lesson-list
tag lesson-list
	prop course = {}
	def render
		<self>
			css h:100vh
				d:vflex
			<%lesson-title-widget>
				css bg:gray0/50 @darkmode:gray9
					rd:md
					p:1sp
					bd:2px solid gray1
				<.icon-title>
					css d:hflex ai:end
						mb:0.5sp
					<i-{course.icon}>
						css h:25px mr:.3sp
					<h2 [fs:xl mr:auto]> course..title
						css h:26px lh:26px
					if state.learning_data.course_learned_usage
						<.usage_word_count> "{state.learning_data.course_learned_usage[state.course]}/{course..word_usage_count_sum}"
							css h:26px lh:26px ai:end d:flex
							css fs:xxs ff:mono c:gray6
					
				if state.learning_data.course_learned_usage
					<progress-bar[$bg:gray2 @darkmode:gray7] progress=state.learning_data.course_progress[state.course]>
			if Course.courses[state.course]
				for own id, lesson of Course.courses[state.course].lessons
					<lesson-list-item .active=(id == state.lesson) route-to="/course/{state.course}/{id}/0/0" id=id lesson=lesson>
			else
				<p> 'Loading...'

# TAG[epic=NAV, seq=35] lesson-list-item
tag lesson-list-item
	css self
		cursor:pointer
		rd:1rd
		c:gray5
		bg:white/50 @darkmode:gray8/20
		@hover
			bg:gray1 @darkmode:gray8/50
	css progress-bar 
			$bg:gray1
			$fg:hue3
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
		<self[w:100%].lesson-button .course_active=course_active> # FIX: course active state, not working.
			
			<.lesson-name> lesson.title
			if state.learning_data.lesson_learned_usage
				<.progress-numbers[opacity:80% fs:xs ff:monospace]> "{state.learning_data.lesson_learned_usage[state.course][id]}/{lesson.word_usage_count_sum} words"
				<progress-bar .color progress=state.learning_data.lesson_progress[state.course][id]>

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
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
	
	# Goes to the last word of hte previous phrase
	def prevPhraseLast
		if phrase_index > 0
			phrase_index--
			word_index = phrases[phrase_index].khmer.split(' ').length - 1
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
	# Goes to the first word of the previous phrase
	def prevPhraseZero
		if phrase_index > 0
			phrase_index--
			word_index = 0
			router.go("/course/{course_index}/{lesson_index}/{phrase_index}/{word_index}")
	def render
		let phrases = Course.courses[state.course]..lessons[state.lesson].phrases
		<self>
			if phrases
				for own id, phrase of phrases
					<.number-toggle route-to="/course/{state.course}/{state.lesson}/{id}/0">
						let isActive = state.phrase is id
						let progress = state.learning_data.phrase_progress[state.course][state.lesson][id]
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
	css self d:inline
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
