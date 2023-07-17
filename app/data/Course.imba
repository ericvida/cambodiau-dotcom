global.LOG = console.log
global.WARN = console.warn
global.ERROR = console.error

import { collection, doc, setDoc, getDocs } from "firebase/firestore"
import { db } from '../state/firebase'
import raw_fb_courses from './raw_fb_courses.json'

# import {en} from './input_bible_stories_eng'
# import {kh} from './input_bible_stories_khmer'
# import {courses} from './input_bible_stories_titles'

export const COURSES_COLLECTION = 'courses'
export const LESSONS_SUBCOLLECTION = 'lessons'

class CourseData
	worth_zero = [
		"?"
		"ៗ"
		"។"
		" "
		","
		"-"
		"-"
		"៖"
		";"
		"«"
		"»"
		"!"
		'"'
	]
	courses = {}
	raw_courses = []

	def constructor
		console.log('Initialized Course')
		# const consolidated_data = consolidateBibleStoryData!
		# If you change the course data locally and want to push the changes to firebase just uncomment the line below
		# saveGeneratedCourse window.structuredClone consolidated_data
		# enrichcourseData consolidated_data
		# convert array tree into object tree

	# This just merges the data.
	# The result should be similar to what we'll store in Firebase -- compact minimal data
	# Next step will be to save all this stuff to Firebase and pass to enrichcourseData courses from Firebase
	# After we have them in Firebase we will work over CMS tab where you'll be able to add/edit the courses and their lessons
	# def consolidateBibleStoryData
	# 	for course, ci in courses
	# 		for lesson, li in course.lessons # lesson
	# 			lesson.phrases = []
	# 			for phrase, index in kh[li]
	# 				let img = index is 0 ? "{li + 1}-{lesson.image}" : "{li + 1}-{index}"
	# 				lesson.phrases.push {
	# 					image: "https://github.com/ericvida/cambodiau-images/blob/main/obs-en-{img}.jpg?raw=true"
	# 					khmer: phrase
	# 					meaning: en[li][index]
	# 				}
	# 	return courses


	# def saveGeneratedCourse modules
	# 	for course in modules
	# 		const courseRef = doc(db, COURSES_COLLECTION, course.slug)

	# 		await setDoc(courseRef, {
	# 			icon: course.icon
	# 			slug: course.slug
	# 			image: course.image
	# 			info: course.info
	# 			price: course.price
	# 			title: course.title
	# 		})

	# 		await Promise.all(course.lessons.map(do(lesson)
	# 			const lessonCollectionRef = collection(courseRef, LESSONS_SUBCOLLECTION)
	# 			const lessonRef = doc(lessonCollectionRef)
	# 			return setDoc(lessonRef, lesson)
	# 		))


	# Finds all words used in each course, lesson, and phrase.
	# counts how many times the are use in phrase, lesson, and course.
	# and store that information for calculating progress later.
	def enrichcourseData course_data
		for course in course_data
			for lesson in course..lessons
				for phrase in lesson..phrases
					# Separate index from text in Khmer text
					const firstKhmerSpaceIndex = phrase.khmer.indexOf(' ')
					phrase.index_kh = phrase.khmer.slice(0, firstKhmerSpaceIndex)
					phrase.khmer = phrase.khmer.slice(firstKhmerSpaceIndex + 1).replace('\\', ' ')

					# Separate index from text in english text
					const firstEnSpaceIndex = phrase.meaning.indexOf(' ')
					phrase.index = parseInt(phrase.meaning.slice(0, firstEnSpaceIndex), 10)
					phrase.meaning = phrase.meaning.slice(firstKhmerSpaceIndex + 1).replace('\\', ' ')

					const split_khmer = phrase.khmer.split(' ')
					phrase.word_set = getSameWordSet(split_khmer)
					phrase.word_usage_count = getSameWordUsage(split_khmer)
					phrase.word_usage_count_sum = Object.values(getSameWordUsage(split_khmer)).reduce((do(a,b) a + b), 0)
					# phrase.khmer = phrase..khmer.split(' ') || ''
					# phrase.english = phrase..english.split(' ') || ''

				lesson.word_set = getChildrenWordSet(lesson..phrases)
				[lesson.word_usage_count, lesson.word_usage_count_sum] = getChildrenWordUsage(lesson..phrases)

			course.word_set = getChildrenWordSet(course..lessons)
			[course.word_usage_count, course.word_usage_count_sum] = getChildrenWordUsage(course..lessons)

		this.word_set = getChildrenWordSet(course_data)
		[this.word_usage_count, this.word_usage_count_sum] = getChildrenWordUsage(course_data)

		# this.courses = course_data
		# Create a map of courses and their lessons
		for course in course_data
			# No spread because lessons need special attention
			courses[course.slug] = {
				info: course.info
				title: course.title
				icon: course.icon
				price: course.price
				image: course.image
				slug: course.slug
				id: course.id
				word_set: course.word_set
				word_usage_count: course.word_usage_count
				word_usage_count_sum: course.word_usage_count_sum
				lessons: {}
			}
			for lesson in course.lessons
				courses[course.slug].lessons[lesson.slug] = lesson



	def getSameWordSet words
		return [...new Set(words)]

	def getSameWordUsage words
		let word_count = {}
		for item in words
			if worth_zero.includes item
				word_count[item] = 0
				continue

			if word_count[item]
				word_count[item] += 1
			else
				word_count[item] = 1
		return word_count

	def getChildrenWordSet children
		return [...new Set(children.flatMap(do(child) child.word_set))]

	def getChildrenWordUsage children
		let word_usage_count = {}
		let word_usage_count_sum = 0
		for child in children
			for own key, val of child.word_usage_count
				if word_usage_count[key]
					word_usage_count[key] += val
				else
					word_usage_count[key] = val
				word_usage_count_sum += word_usage_count[key]
		return [word_usage_count, word_usage_count_sum]

	def getChildrenWordUsageCount word-usage
		let counter = 0
		for own key, val of word-usage
			counter += val
		return counter

	def docDatWithId doc
		const data = doc.data()
		data.id = doc._key.path.segments.at(-1)
		return data

	def initCoursesFromFirebase
		if 'development === true'
			// use predownloaded data for development to speed up the process
			await setTimeout(0, console.log('fake async delay to make the mock function async'))
			raw_courses = raw_fb_courses
			enrichcourseData window.structuredClone raw_fb_courses
		else
			const querySnapshot = await getDocs(collection(db, COURSES_COLLECTION))

			const data = querySnapshot.docs.map(do(doc) docDatWithId(doc))

			await Promise.all(data.map(do(course)
				const lessonsRef = collection(db, COURSES_COLLECTION, course.slug, LESSONS_SUBCOLLECTION)
				const lessonsSnapshot = await getDocs(lessonsRef)
				course.lessons = lessonsSnapshot.docs.map(do(doc) docDatWithId(doc))
			))

			raw_courses = window.structuredClone data
			enrichcourseData data
		
		LOG('Initialized course data', raw_courses)

export const Course = new CourseData

extend tag Element
	get courses
		# return {}
		return Course

export default Course
# export let Course = {}
# LOG Course
