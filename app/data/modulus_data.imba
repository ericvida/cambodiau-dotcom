global.LOG = console.log
global.WARN = console.warn
global.ERROR = console.error
import {en} from './input_bible_stories_eng'
import {kh} from './input_bible_stories_khmer'
import {titles} from './input_bible_stories_titles'

class CalculatemodulusUsageData
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
		let res = enrichmodulusData consolidated_data
		return res
		# convert array tree into object tree

	def consolidateBibleStoryData
		# make a regex that selects a space that has no space before or no space after
		# let singlespace = /(?<!\s)\s(?!\s)/gi
		# make a regext that selects two spaces that have a word before and after it
		# let doublespace = /(?<!\s)\s\s(?!\s)/gi
		let user_updated = []
		let res_user = titles
		let modulus_updated = []
		for modulus, ci in titles.modulus
			let res_modulus = modulus
			let lessons_updated = []
			for lesson, li in modulus.lessons # lesson
				let res_lesson = lesson
				res_lesson.phrases = kh[li]
				let phrases_updated = []
				let lesson_num_en = li
				for phrase, phrase_num_en in lesson.phrases
					let new_phrase = {}
					const firstSpaceIndex = phrase.indexOf(' ')
					let phrase_num_kh = phrase.slice(0, firstSpaceIndex)
					let text = phrase.slice(firstSpaceIndex + 1).replace('\\', ' ')
					let img = "0-0"
					if phrase_num_en is 0
						img = "{li + 1}-{lesson.image}"
					else
						img = "{li + 1}-{phrase_num_en}"
					phrases_updated.push {
						index: phrase_num_en
						image: "https://github.com/ericvida/cambodiau-images/blob/main/obs-en-{img}.jpg?raw=true"
						index_kh: phrase_num_kh
						khmer: text
						meaning: en[lesson_num_en][phrase_num_en]
					}

				res_lesson.phrases = phrases_updated
				lessons_updated.push res_lesson
				# console.log 'lessons', lessons_updated
			
			res_modulus.lessons = lessons_updated
			modulus_updated.push res_modulus
			# console.warn 'modulus', res_modulus, modulus_updated
		
		res_user.modulus = modulus_updated
		user_updated = res_user
		# console.error 'user', res_user, user_updated
		
		return user_updated
	
	# Finds all words used in each modulus, lesson, and phrase.
	# counts how many times the are use in phrase, lesson, and modulus.
	# and store that information for calculating progress later.
	def enrichmodulusData user
		let res_user = user
		let user_updated = []
		for modulus in user.modulus
			let res_modulus = modulus
			let modulus_updated = []
			for lesson in modulus..lessons
				let res_lesson = lesson
				let lesson_updated = []
				for phrase in lesson..phrases
					let phrase_updated = phrase
					const split_khmer = phrase..khmer.split(' ')
					phrase_updated.word_set = getSameWordSet(split_khmer)
					phrase_updated.word_usage_count = getSameWordUsage(split_khmer)
					phrase_updated.word_usage_count_sum = Object.values(getSameWordUsage(phrase..khmer)).reduce((do(a,b) a + b), 0)
					# phrase_updated.khmer = phrase_updated..khmer.split(' ') || ''
					# phrase_updated.english = phrase_updated..english.split(' ') || ''
					lesson_updated.push phrase_updated

				res_lesson.phrases = lesson_updated
				res_lesson.word_set = getChildrenWordSet(res_lesson..phrases)
				[res_lesson.word_usage_count, res_lesson.word_usage_count_sum] = getChildrenWordUsage(res_lesson..phrases)
				modulus_updated.push res_lesson

			res_modulus.lessons = modulus_updated
			res_modulus.word_set = getChildrenWordSet(res_modulus..lessons)
			[res_modulus.word_usage_count, res_modulus.word_usage_count_sum] = getChildrenWordUsage(res_modulus..lessons)
			user_updated.push res_modulus
		res_user.modulus = user_updated
		res_user.word_set = getChildrenWordSet(res_user..modulus)
		[res_user.word_usage_count, res_user.word_usage_count_sum] = getChildrenWordUsage(res_user..modulus)
		return res_user
	
	def getSameWordSet input
		return [...new Set(input)]
	
	def getSameWordUsage word_array
		let word_count = {}
		for item in word_array
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

export let modulus_data = new CalculatemodulusUsageData
LOG modulus_data
# To improve application speed.
# log modulus_data above with command below
# copy object from console and paste into export let below
# then Comment out modulus_data above.

# export let modulus_data = {}

extend tag Element
	get modulus_data
		return modulus_data
