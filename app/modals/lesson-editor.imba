import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

tag lesson-editor
	// TODO edit copy of lesson instead of the lesson itself.
	// Maybe create an edit copy on mount. idk
	get lesson
		return courses.courses[state.course]..lessons[state.lesson]

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
			
			
	css h3
			fs:.8em c:gray4 m:0
	css input
			bg: gray1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
			w:100%

	def closeModal
		state.closeModals!

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


	def render
		<self ease>
			if lesson
				<.modal-bg @click.closeModal>
				<.card[d:flex zi:30]>
					<span>
						<button @click.toggleCourseEditor [mr:3px]> "Course > "
						<button> "Lesson Editor"
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
					<section[w:100% d:flex jc:end]>
						<button[w:200px p:.5sp ta:center as:end rd:md] @click=saveEditedLesson> "save"
							css bg:gray1 @hover:hue2
			else
				<p> 'Loading...'