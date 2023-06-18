import state from './State'
import {modulus_data} from '../data/modulus_data'

class Api
	def init
		if state.dark
			setDarkmode!
		save!

	def clear
		state.reset!
		save!
		# LOG "cleared local storage"

	def toggleLearned word
		if state.user_learned.hasOwnProperty(word)
			delete state.user_learned[word]
		else
			state.user_learned[word] = yes
		# LOG 'toggled', word, state.user_learned.hasOwnProperty(word)
		calcAllProgress!
		save!
	
	# calculates progress from words already learned by the user
	def calcAllProgress
		state.learning_data.user_progress = calcUserProgress(modulus_data)
		state.learning_data.user_progress_learned_usage = calcUserLearnedUsage(modulus_data)
		state.learning_data.modulus_progress = calcModulusProgress(modulus_data)
		state.learning_data.modulus_learned_usage = calcModulusLearnedUsage(modulus_data)
		state.learning_data.lesson_progress = calcLessonProgress(modulus_data)
		state.learning_data.lesson_learned_usage = calcLessonLearnedUsage(modulus_data)
		state.learning_data.phrase_progress = calcPhraseProgress(modulus_data)
		state.learning_data.phrase_learned_usage = calcPhraseLearnedUsage(modulus_data)
	
	def calcUserProgress user_data
		return calcUsageProgressOfObject(user_data)
	
	def calcModulusProgress user
		let modulus_progress = []
		for modulus in user.modulus
			modulus_progress.push calcUsageProgressOfObject(modulus)

		return modulus_progress
	
	def calcLessonProgress user
		let lesson_progress = []
		for modulus in user.modulus
			let lesson_progress_two = []
			for lesson in modulus.lessons
				lesson_progress_two.push calcUsageProgressOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress
	
	def calcPhraseProgress user
		let phrase_progress = []
		for modulus in user.modulus
			let phrase_progress_two = []
			for lesson in modulus.lessons
				let phrase_progress_three = []
				for phrase in lesson.phrases
					phrase_progress_three.push calcUsageProgressOfObject(phrase)
				phrase_progress_two.push phrase_progress_three
			phrase_progress.push phrase_progress_two
		return phrase_progress
	
	def calcUsageProgressOfObject object
		let percent = 0
		for own word, is_learned of state.user_learned
			# if word is not used in object
			if object.word_usage_count[word]
				percent += object.word_usage_count[word] / object.word_usage_count_sum
		percent = Math.round(percent * 100)
		return percent
	
	def calcUserLearnedUsage user
		return calcLearnedUsageOfObject(user)
	
	def calcModulusLearnedUsage user
		let modulus_progress = []
		for modulus in user.modulus
			modulus_progress.push calcLearnedUsageOfObject(modulus)
		return modulus_progress
	
	def calcLessonLearnedUsage user
		let lesson_progress = []
		for modulus in user.modulus
			let lesson_progress_two = []
			for lesson in modulus.lessons
				lesson_progress_two.push calcLearnedUsageOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress
	
	def calcPhraseLearnedUsage user
		let phrase_progress = []
		for modulus in user.modulus
			let phrase_progress_two = []
			for lesson in modulus.lessons
				let phrase_progress_three = []
				for phrase in lesson.phrases
					phrase_progress_three.push calcLearnedUsageOfObject(phrase)
				phrase_progress_two.push phrase_progress_three
			phrase_progress.push phrase_progress_two
		return phrase_progress
	
	# Calculates how many times a learned word has been used 
	def calcLearnedUsageOfObject input
		let words_used = input.word_usage_count
		# LOG input, state.user_learned
		let learned_words_usage = 0
		# LOG(state.user_learned)
		for own word, is_learned of state.user_learned
			# If words_used containes word
			if words_used[word] and is_learned
				learned_words_usage += words_used[word]
		return Math.round(learned_words_usage)

	# API[epic=API, seq=7] SAVE
	def save
		# Using JSON to clean up all functions from state class and convert it to polay object
		imba.locals.state = JSON.parse(JSON.stringify(state))
		# store(STATEKEY, state)
		# LOG 'saved', state

	# API[epic=API, seq=7] LOAD
	def load
		state.setState(imba.locals.state) if imba.locals.state
		# LOG 'loaded', state

	# API[epic=FrontEnd, seq=8] vida
	def toggleIpa
		state.ipa = !state.ipa
		save!

	# API[epic=FrontEnd, seq=8] AUTH
	def toggleAuth
		# state.user = !state.user
		save!

	# API[epic=FrontEnd, seq=9] DARKMODE
	def toggleDark
		state.dark = !state.dark
		if state.dark
		then setDarkmode!
		else unsetDarkmode!
		save!

	def setDarkmode
		let root = document.getElementsByTagName('html')[0]
		root.flags.add('mod-darkmode')

	def unsetDarkmode
		let root = document.getElementsByTagName( 'html' )[0]
		root.flags.remove('mod-darkmode')

	def search needle, haystack
		# LOG needle, haystack
		let haystackLength = haystack.length # tlen
		let needleLength = needle.length # qlen
		if needleLength > haystackLength
			# even if return is implicit in imba
			# it only returns the last expression.
			# so without return here it would merely continue
			# executing the rest of the function
			return false

		if needleLength is haystackLength
			return needle is haystack
		
		let needleLetter = 0
		while needleLetter < needleLength
			let haystackLetter = 0
			let match = false
			let needleLetterCode = needle.charCodeAt(needleLetter++)
			while haystackLetter < haystackLength
				if haystack.charCodeAt(haystackLetter++) is needleLetterCode
					# LOG 'matched?'
					break match = true
			continue if match
			return false
		return true

let api = new Api

extend tag Element
	get api
		return api

export default api
