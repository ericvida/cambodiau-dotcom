import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'
import Course from '../data/Course'

tag editors-page
	def hideEditor
		state.hideEditor!
		imba.commit!
	
	def saveChanges
		LOG "save changes"
	
	def defaultCourseUrl courses
		const firstCourse = Object.values(courses)[0]
		const firstLesson = Object.values(course.lessons)[0]
		LOG firstCourse
		# return "/course/{firstCourse.slug}/{firstLesson.slug}/0/0/"
	def routeCourse
		imba.router.go(defaultCourseUrl!)
		LOG state.course, state.lesson, state.phrase, state.word

	# prop lesson = course.lessons[state.lesson]
	# prop phrase = lesson.phrases[state.phrase]
	<self[w:100%] ease>
		css o@off:0%
			tween: all .5s
			pos:fixed
			bg:black/10
			inset:0
			of:auto
			zi:30
		<%editor-nav>
			css d:flex jc:start gap:1sp p:1sp
				bg:black/50
				button bg:gray0 px:0.5sp py:.2sp rd:md 
					bxs:md
				.disabled
					bg:gray4
					pointer-events:none
					user-select:none
			<button @click=(state.active_editor = "json") .disabled=!state.course> "json"
			<button @click=(state.active_editor = "course") .disabled=!state.course> "course"
			<button @click=(state.active_editor = "lesson") .disabled=!state.lesson> "lesson"
			<button @click=(state.active_editor = "phrase") .disabled=(state.phrase is undefined)> "phrase"
			<button @click=(state.active_editor = "word") .disabled=(state.phrase is undefined)> "word"
			<[mx:auto]>
			<.right>
				<button @click.hideEditor> "close"
		<%modal-nav>
			<h1>
			css d:flex jc:start gap:1sp p:1sp
				bg:black/30
				button bg:gray0 px:0.5sp py:.2sp rd:md 
					bxs:md
			<.left>
				css d:grid
					gtc:1fr 1fr 1fr 1fr
					ta:center
					mr:auto
					gap:1sp
					label
						mr:0.5sp

				<div>
					<label for="course"> "course"
					<select#course name="course" bind=state.course>
						<option value="none" selected="selected">
						for own key, value of courses.courses
							<option value=value.slug> value.slug

				
				if state.course && courses
					<div>
						<label for="lesson"> "lesson"
						<select#lesson name="lesson" bind=state.lesson>
							<option value="none" selected="selected">
							for own key, value of courses.courses[state.course]..lessons
								<option value=value.slug> value.slug
					if state.lesson and courses.courses[state.course]..lessons[state.lesson]
						<div>
							<label for="phrase"> "phrase"
							<select#phrase name="phrase" bind=state.phrase>
								<option value="none" selected="selected">
								for value in courses.courses[state.course]..lessons[state.lesson]..phrases
									<option value=value.index> value.index
						if state.phrase and courses.courses[state.course]..lessons[state.lesson]..phrases[state.phrase]
							<div>
								<label for="word"> "word"
								<select#word name="word" bind=state.active_word>
									<option value="none" selected="selected">
									for khmer, khmer_index in courses.courses[state.course]..lessons[state.lesson]..phrases[state.phrase]..word_set
										<option value=khmer> khmer
		<%editor-content-wrapper>
			css max-width: $max-content-width
				mx: auto
				bg:white
				p:1sp
				mb:5sp
			css >>> h3
				fs:.8em c:gray4 m:0
			css >>> input
				bg: gray1
				shadow: 0 0 5px 0px gray2 inset
				rd:md
				p:1sp m:0
				w:100%
			switch state.active_editor
				when "json"
					<$json-editor>
						<[d:hflex]>
							<h2> "Entire Module Data"
								css mr:auto
							<button> "Save"
								css w:200px p:.5sp ta:center as:end rd:md
									bg:gray1 @hover:hue2
									mb:1sp
						<textarea placeholder="json">
							css bg:gray1
								w:100%
								h:300px
								bxs:md
				when "course"
					<course-editor>
				when "lesson"
					<lesson-editor>
				when "phrase"
					<phrase-editor>
				when "word"
					<word-editor>