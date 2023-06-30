global.LOG = console.log
global.WARN = console.warn
global.ERROR = console.error
import {en} from './input_bible_stories_eng'
import {kh} from './input_bible_stories_khmer'
import {titles} from './input_bible_stories_titles'

class CalculatemodulusUsageData
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

	def constructor
		const consolidated_data = consolidateBibleStoryData!
		LOG window.structuredClone consolidated_data.modulus[0]
		return enrichmodulusData consolidated_data
		# convert array tree into object tree

	# This just merges the data.
	# The result should be similar to what we'll store in Firebase -- compact minimal data
	# Next step will be to save all this stuff to Firebase and pass to enrichmodulusData modules from Firebase
	# After we have them in Firebase we will work over CMS tab where you'll be able to add/edit the modules and their lessons
	def consolidateBibleStoryData
		for modulus, ci in titles.modulus
			for lesson, li in modulus.lessons # lesson
				lesson.phrases = []
				for phrase, index in kh[li]
					let img = index is 0 ? "{li + 1}-{lesson.image}" : "{li + 1}-{index}"
					lesson.phrases.push {
						image: "https://github.com/ericvida/cambodiau-images/blob/main/obs-en-{img}.jpg?raw=true"
						khmer: phrase
						meaning: en[li][index]
					}
		return titles

	# Finds all words used in each modulus, lesson, and phrase.
	# counts how many times the are use in phrase, lesson, and modulus.
	# and store that information for calculating progress later.
	def enrichmodulusData user
		for modulus in user.modulus
			for lesson in modulus..lessons
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
					phrase.word_usage_count_sum = Object.values(getSameWordUsage(phrase.khmer)).reduce((do(a,b) a + b), 0)
					# phrase.khmer = phrase..khmer.split(' ') || ''
					# phrase.english = phrase..english.split(' ') || ''

				lesson.word_set = getChildrenWordSet(lesson..phrases)
				[lesson.word_usage_count, lesson.word_usage_count_sum] = getChildrenWordUsage(lesson..phrases)

			modulus.word_set = getChildrenWordSet(modulus..lessons)
			[modulus.word_usage_count, modulus.word_usage_count_sum] = getChildrenWordUsage(modulus..lessons)

		user.word_set = getChildrenWordSet(user..modulus)
		[user.word_usage_count, user.word_usage_count_sum] = getChildrenWordUsage(user..modulus)
		return user
	
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
