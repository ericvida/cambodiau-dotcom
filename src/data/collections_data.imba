global.LOG = console.log
global.WARN = console.warn
global.ERROR = console.error
import {en} from './input_bible_stories_eng'
import {kh} from './input_bible_stories_khmer'
import {titles} from './input_bible_stories_titles'

class CalculatecollectionUsageData
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
		let res = enrichcollectionData consolidated_data
		return res
		# convert array tree into object tree
	def consolidateBibleStoryData
		# make a regex that selects a space that has no space before or no space after
		# let singlespace = /(?<!\s)\s(?!\s)/gi
		# make a regext that selects two spaces that have a word before and after it
		# let doublespace = /(?<!\s)\s\s(?!\s)/gi
		let user_updated = []
		let res_user = titles
		let collections_updated = []
		for collection, ci in titles.collections
			let res_collection = collection
			let lessons_updated = []
			for lesson, li in collection.lessons # lesson
				let res_lesson = lesson
				res_lesson.phrases = kh[li]
				let phrases_updated = []
				let lesson_num_en = li
				for phrase, si in lesson.phrases
					let new_phrase = {}
					let str = phrase.replace(/\s\s/gi, "|_|").replace(/\s/gi, "|")
					let arr = str.split('|')
					let phrase_num_en = si
					let phrase_num_kh = arr[0]
					arr.shift!
					let text = arr.join('|')
					text = text.replace(/_/gi, ' ')
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
			
			res_collection.lessons = lessons_updated
			collections_updated.push res_collection
			# console.warn 'collections', res_collection, collections_updated
		
		res_user.collections = collections_updated
		user_updated = res_user
		# console.error 'user', res_user, user_updated
		
		return user_updated
	
	# Finds all words used in each collection, lesson, and phrase.
	# counts how many times the are use in phrase, lesson, and collection.
	# and store that information for calculating progress later.
	def enrichcollectionData user
		let res_user = user
		let user_updated = []
		for collection in user.collections
			let res_collection = collection
			let collection_updated = []
			for lesson in collection..lessons
				let res_lesson = lesson
				let lesson_updated = []
				for phrase in lesson..phrases
					let phrase_updated = phrase
					phrase_updated.word_set = getSameWordSet(phrase..khmer)
					phrase_updated.word_set_count = getSameWordSet(phrase..khmer).length
					phrase_updated.word_usage_count = getSameWordUsage(phrase..khmer)
					phrase_updated.word_usage_count_sum = phrase_updated.word_usage_count_sum = Object.values(getSameWordUsage(phrase..khmer)).reduce((do(a,b) a + b), 0)
					# phrase_updated.khmer = phrase_updated..khmer.split('|') || ''
					# phrase_updated.english = phrase_updated..english.split('|') || ''
					lesson_updated.push phrase_updated
				
				res_lesson.phrases = lesson_updated
				res_lesson.word_set = getChildrenWordSet(res_lesson..phrases)
				res_lesson.word_set_count = res_lesson..word_set.length
				res_lesson.word_usage_count = getChildrenWordUsage(res_lesson..phrases)
				res_lesson.word_usage_count_sum = getChildrenWordUsageCount(res_lesson..word_usage_count)
				collection_updated.push res_lesson
			
			res_collection.lessons = collection_updated
			res_collection.word_set = getChildrenWordSet(res_collection..lessons)
			res_collection.word_set_count = res_collection..word_set.length
			res_collection.word_usage_count = getChildrenWordUsage(res_collection..lessons)
			res_collection.word_usage_count_sum = getChildrenWordUsageCount(res_collection..word_usage_count)
			user_updated.push res_collection
		res_user.collections = user_updated
		res_user.word_set = getChildrenWordSet(res_user..collections)
		res_user.word_set_count = res_user..word_set.length
		res_user.word_usage_count = getChildrenWordUsage(res_user..collections)
		res_user.word_usage_count_sum = getChildrenWordUsageCount(res_user..word_usage_count)
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
		let allcollectionsSet = new Set
		for child in children
			child.word_set.forEach(do(x) allcollectionsSet.add(x))
		let res = [...allcollectionsSet]
		return res	
	
	def getChildrenWordUsage children
		let word_usage_count = {}
		for child in children
			let child_word_usage_count = child.word_usage_count
			for own key, val of child_word_usage_count
				if word_usage_count[key]
					word_usage_count[key] += val
				else
					word_usage_count[key] = val
		return word_usage_count

	def getChildrenWordUsageCount word-usage
		let counter = 0
		for own key, val of word-usage
			counter += val
		return counter

export let collections_data = new CalculatecollectionUsageData
# LOG collections_data
# To improve application speed.
# log collections_data above with command below
# copy object from console and paste into export let below
# then Comment out collections_data above.

# export let collections_data = {}

extend tag Element
	get collections_data
		return collections_data