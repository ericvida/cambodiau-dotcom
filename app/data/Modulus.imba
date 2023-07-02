global.LOG = console.log
global.WARN = console.warn
global.ERROR = console.error

import { collection, doc, setDoc, getDocs } from "firebase/firestore"
import { db } from '../state/firebase'

# import {en} from './input_bible_stories_eng'
# import {kh} from './input_bible_stories_khmer'
# import {modulies} from './input_bible_stories_titles'

export const MODULES_COLLECTION = 'modules'
export const LESSONS_SUBCOLLECTION = 'lessons'

class ModulusData
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
	modules = []

	def constructor
		console.log('Initialized Modulus')
		# const consolidated_data = consolidateBibleStoryData!
		# If you change the modulus data locally and want to push the changes to firebase just uncomment the line below
		# saveGeneratedModule window.structuredClone consolidated_data.modulus
		# enrichmodulusData consolidated_data
		# convert array tree into object tree

	# This just merges the data.
	# The result should be similar to what we'll store in Firebase -- compact minimal data
	# Next step will be to save all this stuff to Firebase and pass to enrichmodulusData modules from Firebase
	# After we have them in Firebase we will work over CMS tab where you'll be able to add/edit the modules and their lessons
	# def consolidateBibleStoryData
	# 	for modulus, ci in modulies
	# 		for lesson, li in modulus.lessons # lesson
	# 			lesson.phrases = []
	# 			for phrase, index in kh[li]
	# 				let img = index is 0 ? "{li + 1}-{lesson.image}" : "{li + 1}-{index}"
	# 				lesson.phrases.push {
	# 					image: "https://github.com/ericvida/cambodiau-images/blob/main/obs-en-{img}.jpg?raw=true"
	# 					khmer: phrase
	# 					meaning: en[li][index]
	# 				}
	# 	return modulies



	# Finds all words used in each modulus, lesson, and phrase.
	# counts how many times the are use in phrase, lesson, and modulus.
	# and store that information for calculating progress later.
	def enrichmodulusData modulus_data
		for modulus in modulus_data
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

		this.word_set = getChildrenWordSet(modulus_data)
		[this.word_usage_count, this.word_usage_count_sum] = getChildrenWordUsage(modulus_data)

		this.modules = modulus_data
	
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

	def saveGeneratedModule modules
		for modulus in modules
			const moduleRef = doc(db, MODULES_COLLECTION, modulus.id)

			await setDoc(moduleRef, {
				icon: modulus.icon
				id: modulus.id
				image: modulus.image
				info: modulus.info
				price: modulus.price
				title: modulus.title
			})

			await Promise.all(modulus.lessons.map(do(lesson)
				const lessonCollectionRef = collection(moduleRef, LESSONS_SUBCOLLECTION)
				const lessonRef = doc(lessonCollectionRef, lesson.id)
				return setDoc(lessonRef, lesson)
			))

	def initModulsFromFirebase
		const querySnapshot = await getDocs(collection(db, MODULES_COLLECTION));

		const data = querySnapshot.docs.map(do(doc) doc.data())

		await Promise.all(data.map(do(modulus)
			const lessonsRef = collection(db, MODULES_COLLECTION, modulus.id, LESSONS_SUBCOLLECTION)
			const lessonsSnapshot = await getDocs(lessonsRef)
			modulus.lessons = lessonsSnapshot.docs.map(do(doc) doc.data())
		))

		raw_modules = window.structuredClone data

		enrichmodulusData data
		LOG('Initialized modulus data')
		

export const Modulus = new ModulusData

extend tag Element
	get modules
		# return {}
		return Modulus

export default Modulus
# export let Modulus = {}
# LOG Modulus
