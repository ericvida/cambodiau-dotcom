import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

tag course-editor
	get course
		return courses.courses[state.course]

	def closeModal
		state.hideEditor!

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
		<self >
			if course
				<[d:hflex]>
					<h1[mr:auto]> "Course Editor"
					<button @click=saveEditedCourse> "save"
						css w:200px p:.5sp ta:center as:end rd:md
						css bg:gray1 @hover:hue2
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
				# <section[flex-grow:1]>
				# <section[w:100% d:flex jc:end]>
			
					