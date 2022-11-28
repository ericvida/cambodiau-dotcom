import {en} from './input_bible_stories_eng'
import {kh} from './input_bible_stories_khmer'
import {titles} from './input_bible_stories_titles'

class CalculateCourseUsageData
	prop worth_zero = [
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
	def constructor
		let consolidated_data = consolidateBibleStoryData!
		let res = enrichCourseData consolidated_data
		return res
		# convert array tree into object tree
	def consolidateBibleStoryData
		# make a regex that selects a space that has no space before or no space after
		let singlespace = /(?:\b)\s(?:\b)/gi
		# rege
		# make a regext that selects two spaces that have a word before and after it
		let doublespace = /(?:\b)\s\s(?:\b)/gi
		let user_updated = []
		let res_user = titles
		let courses_updated = []
		for course, ci in titles.courses
			let res_course = course
			let lessons_updated = []
			for lesson, li in course.lessons # lesson
				let res_lesson = lesson
				res_lesson.phrases = kh[li]
				let phrases_updated = []
				let lesson_num_en = li
				for phrase, si in lesson.phrases
					let new_phrase = {}
					let str = phrase.replace(singlespace, "|").replace(doublespace, '| |')
					let arr = str.split('|')
					let phrase_num_en = si
					let phrase_num_kh = arr[0]
					arr.shift!
					let text = arr.join('|')
					let img = "0-0"
					if si is 0
						img = "{li + 1}-{lesson.image}"
					else
						img = "{li + 1}-{si}"
					let res_phrase = {
						index: phrase_num_en
						image: "https://github.com/ericvida/cambodiau-images/blob/main/obs-en-{img}.jpg?raw=true"
						index_kh: phrase_num_kh
						khmer: text
						meaning: en[lesson_num_en][phrase_num_en]
						}
					phrases_updated.push res_phrase
				
				res_lesson.phrases = phrases_updated
				lessons_updated.push res_lesson
				# console.log 'lessons', lessons_updated
			
			res_course.lessons = lessons_updated
			courses_updated.push res_course
			# console.warn 'courses', res_course, courses_updated
		
		res_user.courses = courses_updated
		user_updated = res_user
		# console.error 'user', res_user, user_updated
		
		return user_updated
	
	# Finds all words used in each course, lesson, and phrase.
	# counts how many times the are use in phrase, lesson, and course.
	# and store that information for calculating progress later.
	def enrichCourseData user
		let res_user = user
		let user_updated = []
		for course in user.courses
			let res_course = course
			let course_updated = []
			for lesson in course..lessons
				let res_lesson = lesson
				let lesson_updated = []
				for phrase in lesson..phrases
					let phrase_updated = phrase
					phrase_updated.word_set = getSameWordSet(phrase..khmer)
					phrase_updated.word_set_count = getSameWordSet(phrase..khmer).length
					phrase_updated.word_usage = getSameWordUsage(phrase..khmer)
					phrase_updated.word_usage_count = phrase_updated.word_usage_count = Object.values(getSameWordUsage(phrase..khmer)).reduce((do(a,b) a + b), 0)
					# phrase_updated.khmer = phrase_updated..khmer.split('|') || ''
					# phrase_updated.english = phrase_updated..english.split('|') || ''
					lesson_updated.push phrase_updated
				
				res_lesson.phrases = lesson_updated
				res_lesson.word_set = getChildrenWordSet(res_lesson..phrases)
				res_lesson.word_set_count = res_lesson..word_set.length
				res_lesson.word_usage = getChildrenWordUsage(res_lesson..phrases)
				res_lesson.word_usage_count = getChildrenWordUsageCount(res_lesson..word_usage)
				course_updated.push res_lesson
			
			res_course.lessons = course_updated
			res_course.word_set = getChildrenWordSet(res_course..lessons)
			res_course.word_set_count = res_course..word_set.length
			res_course.word_usage = getChildrenWordUsage(res_course..lessons)
			res_course.word_usage_count = getChildrenWordUsageCount(res_course..word_usage)
			user_updated.push res_course
		res_user.courses = user_updated
		res_user.word_set = getChildrenWordSet(res_user..courses)
		res_user.word_set_count = res_user..word_set.length
		res_user.word_usage = getChildrenWordUsage(res_user..courses)
		res_user.word_usage_count = getChildrenWordUsageCount(res_user..word_usage)
		return res_user
	
	def getSameWordSet input
		let res = [...new Set(input.split('|'))]
		return res
	
	def getSameWordUsage input
		let word_array = input.split('|')
		let word_count = {}
		for item in word_array
			if word_count[item]
				if worth_zero.includes item
					word_count[item] = 0
				else
					word_count[item] += 1
			else
				if worth_zero.includes item
					word_count[item] = 0
				else
					word_count[item] = 1
		return word_count
		
	def getChildrenWordSet children
		let allModulesSet = new Set
		for child in children
			child.word_set.forEach(do(x) allModulesSet.add(x))
		let res = [...allModulesSet]
		return res	
	def getChildrenWordUsage children
		let word_usage = {}
		for child in children
			let child_word_usage = child.word_usage
			for own key, val of child_word_usage
				if word_usage[key]
					word_usage[key] += val
				else
					word_usage[key] = val
		return word_usage

	def getChildrenWordUsageCount word-usage
		let counter = 0
		for own key, val of word-usage
			counter += val
		return counter

export let courses_data = new CalculateCourseUsageData

# To improve application speed.
# log courses_data above with command below
# console.log courses_data 
# copy object from console and paste into export let below
# then Comment out courses_data above.

# export let courses_data = {}

extend tag Element
	get courses_data
		return courses_data