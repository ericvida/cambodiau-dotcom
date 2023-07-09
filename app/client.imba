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
		Course.initCoursesFromFirebase().then(do()
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
			<%pancake-layout>
				css d:grid
					grid-template-rows: auto 1fr auto
					h:100vh
					w:100%
				<header>
					<main-nav>
				<main>
					<landing-page route="/">
					<store-page route="/store">
					<user-page route="/learning">
					<dictionary-page route="/dictionary">
					<phonetics-page route="/phonetics">
					<login-page route="/login">
					<signup-page route="/signup">
					<course-page route="/course">
				<footer>
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

imba.mount <App>, document.getElementById "app"
