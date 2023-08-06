import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

const newPhraseDefault = {
	image: "https://placeholder.co/800x450",
	meaning: "phrase one. Add english phrase here.",
	khmer: "ឃ្លា មួយ ។",
}
const newLessonDefault = {
	slug: 'lesson-default'
	title: 'Lesson-default'
	phrases: [{...newPhraseDefault}]
	image: 2
}



tag lesson-editor
	prop newLesson = {...newLessonDefault}
	// TODO edit copy of lesson instead of the lesson itself.
	// Maybe create an edit copy on mount. idk
	get lesson
		return courses.courses[state.course]..lessons[state.lesson]

	def closeModal
		state.hideEditor!

	def toggleCourseEditor
		closeModal!
		state.toggleCourseEditor!
		imba.commit!

	def saveEditedLesson
		// TODO disable button while this is loading
		const course = courses.courses[state.course]
		const courseRef = doc(db, COURSES_COLLECTION, course.id)
		const lessonCollectionRef = collection(courseRef, LESSONS_SUBCOLLECTION)
		const lessonRef = doc(lessonCollectionRef, lesson.id)
		await setDoc(lessonRef, {
			# image: lesson.image
			slug: lesson.slug
			title: lesson.title
		}, { merge: true })
		console.log(
			'Updated lesson', lesson.id, lesson.title
		)
		// TODO make popup with message thAat it is saved


	def addNewLesson
		// TODO disable button while this is loading
		const course = courses.courses[state.course]
		const courseRef = doc(db, COURSES_COLLECTION, course.id)
		const lessonCollectionRef = collection(courseRef, LESSONS_SUBCOLLECTION)
		await setDoc(doc(lessonCollectionRef), newLesson, { merge: true })

		newLesson = {...newLessonDefault}

		console.log(
			'Updated lesson', lesson.id, lesson.title
		)
		// TODO make popup with message thAat it is saved
	
	def addPhraseToLesson
		// TODO disable button while this is loading
		const course = courses.courses[state.course]
		const courseRef = doc(db, COURSES_COLLECTION, course.id)
		const lessonCollectionRef = collection(courseRef, LESSONS_SUBCOLLECTION)
		const lesson = course..lessons[state.lesson]
		const lessonRef = doc(lessonCollectionRef, lesson.id)
		await setDoc(lessonRef, {
			phrases: [...#lesson_phrases, newPhrase]
		}, { merge: true })

		newPhrase = {...newPhraseDefault}
		// TODO make popup with message that it is saved
		console.log(
			'Create lesson phrase', lesson, #lesson_phrases 
		)

	def render
		<self>
			if lesson
				<$content-wrapper>
					<[d:hflex]>
						<span[mr:auto]>
							<button @click.toggleCourseEditor [mr:3px]> "Course > "
							<button> "Lesson Editor"
						<button[w:200px p:.5sp ta:center as:end rd:md] @click=saveEditedLesson> "save"
							css bg:gray1 @hover:hue2
					<section>
						<h3> "Lesson Title"
						<input bind=lesson.title type="text">
					<section>
						<h3> "Lesson Slug"
						<input bind=lesson.slug type="text">
					<section>
						<h3> "Phrases"
						<[d:vflex gap:1sp]>
							for item, i in lesson.phrases
								<.lesson-row[d:hflex gap:1sp ja:center]>
									<p[overflow:hidden h:20px]> i+1, ". {item.meaning}"
										css white-space: nowrap;
											overflow: hidden;
											text-overflow: ellipsis;
											w:100%
									<button[bg:gray1 @hover:hue2 rd:md px:1sp h:50px w:100px] @click=(do()
										state.togglePhraseEditor i
									)> "edit"
									<[d:vflex gap:10px]>
											<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👆" # move up
											<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👇" # move down
					<section[flex-grow:1]>
			else
				<p> 'Loading...'