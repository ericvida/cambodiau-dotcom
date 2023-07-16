import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

# TODO: Make modal close when clicking outside of the modal
import {dictionary} from '../data/dictionary'

tag phrase-editor
	#phrase_hash = ''
	#lesson_phrases = []
	get phrase
		return #lesson_phrases[state.phrase]

	# transition
	css pos:fixed inset:0
		d:grid zi:12
		min-height: 100vh
		ja:center
		m:0
		o@off:0 ea:1s
		.card
			x@in:100px x@out:100px ea:1s
			d:flex zi:30 ofy:scroll
			min-width: 500px
			width: 60vw
			height: 80vh
			ofy:scroll
		h3
			fs:.8em c:gray4 m:0
		section
			w:100%
		input
			w:100%
			bg: gray1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
		.word-pill-wrapper
			flex-wrap:wrap
			d:flex gap:.4sp
			ff:monospace
		.word-pill
			bd:2px solid gray1
			px:.5sp
			rd:md
			cursor:pointer
		.found
			bg:gray1 @hover:gray2
			bc:gray2 @hover:gray3
			bs:solid
			bw:2px
		.not-defined
			bg:orange1 @hover:orange2
			bc:orange2 @hover:orange3
			bs:solid
			bw:2px
		.not-found
			bg:rose1 @hover:rose2
			bc:rose2 @hover:rose3
			bs:solid
			bw:2px

	def closeModal
		state.closeModals!

	def editWord
		closeModal!
		state.toggleWordEditor!
		imba.commit!

	def toggleCourseEditor
		closeModal!
		state.toggleCourseEditor!
		imba.commit!

	def toggleLessonEditor
		closeModal!
		state.toggleLessonEditor!
		imba.commit!
	
	def phraseLinkHash
		return "{state.course}{state.lesson}{state.phrase}"

	def saveEditedLesson
		// TODO disable button while this is loading
		const course = courses.courses[state.course]
		const courseRef = doc(db, COURSES_COLLECTION, course.id)
		const lessonCollectionRef = collection(courseRef, LESSONS_SUBCOLLECTION)
		const lesson = course..lessons[state.lesson]
		const lessonRef = doc(lessonCollectionRef, lesson.id)
		await setDoc(lessonRef, {
			phrases: #lesson_phrases
		}, { merge: true })
		// TODO make popup with message that it is saved
		console.log(
			'Updated lesson phrases', lesson, #lesson_phrases 
		)
	
	def getRawLessonPhrases
		for course in courses.raw_courses
			for lesson in course.lessons
				if lesson.slug == state.lesson
					console.log(lesson)
					#lesson_phrases = window.structuredClone lesson.phrases
					break
			if #lesson_phrases
				break
		#phrase_hash = phraseLinkHash!
		console.log('found lesson raw phrases')


	def render
		if courses.raw_courses.length && (#lesson_phrases.length === 0 || #phrase_hash != phraseLinkHash!)
			getRawLessonPhrases!

		<self ease>
			if phrase
				<.modal-bg @click.closeModal>
				<.card[d:flex zi:30]>
					<h1>
						<span @click.toggleCourseEditor> "Course > "
						<span @click.toggleLessonEditor> "Lesson > "
						<span> "Phrase Editor"
					<h1>
						<span @click.toggleCourseEditor> state.course, ' >'
						<span @click.toggleLessonEditor> state.lesson, ' >'
						<span> "Editing Phrase {state.phrase}"
					<section>
						<h3> "meaning"
						<input bind=phrase.meaning type="text">
					<section>
						<h3> "khmer"
						<input bind=phrase.khmer type="text">
					<section>
						<[d:hflex gap:1sp mb:1sp]>
							<h3> "words (parsed)"
							<span.word-pill .found> "defined"
							<span.word-pill .not-defined> "not defined"
							<span.word-pill .not-found> "not found"
						<div.word-pill-wrapper>
							for word in phrase.khmer.split(' ')
								# let obj = dictionary[word]
								# console.log word
								<span.word-pill
									@click.editWord
									.found=(dictionary.hasOwnProperty(word) and (dictionary[word].def is true))
									.not-defined=(dictionary.hasOwnProperty(word) and (dictionary[word].def is false))
									.not-found=(!dictionary.hasOwnProperty(word))> word
					<section[justify-self:flex-end]>
						<h3> "vida phonetics (generated)"
						<div.word-pill-wrapper>
							for word in phrase.khmer.split(' ')
								# let obj = dictionary[word]
								# console.log word
								if dictionary.hasOwnProperty(word)
									<span.word-pill 
										.found=(dictionary[word].def isnt false)
										.not-defined=(dictionary[word].def is false)
										@click.editWord> dictionary[word]..vida
								else
									<span.word-pill.not-found @click.editWord> word
					<section[flex-grow:1]>
					<section[w:100% d:flex jc:end]>
						<.button[w:200px p:.5sp ta:center as:end] @click=saveEditedLesson> "save"
							css bg:gray1 @hover:hue2