import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

const emptyCourse = {
	title: ''
	slug: ''
	image: ''
	info: ''
	price: 0
}

tag course-editor
	get course
		return courses.courses[state.course]

	prop newCourse = { ...emptyCourse }

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
	
	def createNewCourse
		// TODO disable button while this is loading
		const courseRef = doc(db, COURSES_COLLECTION, newCourse.slug)
		await setDoc(courseRef, {
				# icon: course.icon
				image: newCourse.image
				info: newCourse.info
				price: newCourse.price
				slug: newCourse.slug
				title: newCourse.title
			})

		const lessonCollectionRef = collection(courseRef, LESSONS_SUBCOLLECTION)
		await setDoc(doc(lessonCollectionRef), {
			slug: 'default-lesson'
			title: 'Default Lesson'
			phrases: [{
				image: "https://placeholder.co/800x450",
				meaning: "0 Always add verse index at the beginning separated by space after it",
				khmer: "០ Some fancy Khmer text like រឿង ព្រះគម្ពីរ ទី ៣១ - ព្រះយេស៊ូ ដើរ លើ ទឹក ។ - រឿង ព្រះគម្ពីរ ពី ៖ ម៉ាថាយ ១៤ : ២២ - ៣៣ ; ម៉ាកុស ៦ : ៤៥ - ៥២ ; យ៉ូហាន ៦ : ១៦ - ២១"
			}]
			image: 2
		})

		console.log(
			"Created the {newCourse.title} course"
		)
		newCourse = { ...emptyCourse }

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
			
			else
				<form @submit.prevent.stop=createNewCourse>
					<[d:hflex]>
						<h1[mr:auto]> "Course Editor"
						<button @click=saveEditedCourse> "save"
							css w:200px p:.5sp ta:center as:end rd:md
							css bg:gray1 @hover:hue2
					<section>
						<h3> "Course Title"
						<input bind=newCourse.title type="text" required minLength=5>
					<section>
						<h3> "Course slug"
						<input bind=newCourse.slug type="text" required minLength=4>
					<section>
						<h3> "Course Info"
						<input bind=newCourse.info type="text">
					<section>
						<h3> "Price in USD"
						<input bind=newCourse.price type="number" required>
					<button type="submit" [p:0.5rem 2rem bgc:warmer2 @hover:rose2 rd:0.25rem c:rose9 tween: all 300ms bxs@hover:-2px 4px 8px rose2/40, -1px 2px 4px rose2/40 outline:none border:none]> 'Add Course'

	css
		section
			mb:0.5rem