import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

tag course-editor
	get course
		return courses.courses[state.course]

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
	css h3 fs:.8em c:gray4 m:0
	css input
		bg: gray0 @focus:hue1
		shadow: 0 0 5px 0px gray2 inset
		rd:md
		p:1sp m:0
		w:100%

	def closeModal
		state.closeModals!

	def saveEditedCourse
		// TODO disable button while this is loading
		const courseRef = doc(db, COURSES_COLLECTION, course.id)
		await setDoc(courseRef, {
				# icon: course.icon
				# image: course.image
				info: course.info
				price: course.price
				slug: course.slug
				title: course.title
			}, { merge: true })
		console.log(
			'Updated the course'
		)
		// TODO make popup with message thAat it is saved


	def render
		<self ease>
			if course
				<.modal-bg @click.closeModal>
				<.card>
					<h1> "Course Editor"
					<section>
						<h3> "Course Title"
						<input bind=course.title type="text">
					<section>
						<h3> "Course slug"
						<input bind=course.slug type="text">
					<section>
						<h3> "Course Info"
						<input bind=course.info type="text">
					<section>
						<h3> "Price in USD"
						<input bind=course.price type="text">
					<section>
						<h3> "Lessons"
						<[d:vflex gap:1sp]>
							for own lessonid, lesson of course.lessons
								<.lesson-row[d:hflex gap:1sp ja:center]>
									<p[w:100%]> lesson.title
									<button[bg:gray1 @hover:hue2 rd:md h:50px w:100px] @click=(do()
										state.toggleLessonEditor lessonid
									)> "edit"
									<[d:vflex gap:10px]>
										<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👆" # move up
										<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👇" # move down

					<section[flex-grow:1]>
					<section[w:100% d:flex jc:end]>
						<button[w:200px p:.5sp ta:center as:end rd:md] @click=saveEditedCourse> "save"
							css bg:gray1 @hover:hue2
					