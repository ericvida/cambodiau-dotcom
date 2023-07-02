import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore"
import { db } from '../state/firebase'

import Modulus from '../data/Modulus'

import { User } from './types.ts'

const initialState = {
	user: undefined
	dark: yes
	left: yes
	right: yes
	ipa: no
	modulus: 0
	lesson: 0
	phrase: 0
	word: 0
	admin: true
	active_word: 'ជា'
	learning_data: {}
	user_learned: {}
	learned_usage: 0
}

const auth = getAuth!

class State
	user\User = yes
	dark = yes
	left = yes
	right = yes
	ipa = no
	modulus = 0
	lesson = 0
	phrase = 0
	word = 0
	admin = true
	active_word = 'ជា'
	learning_data = {}
	user_learned = {}
	learned_usage = 0

	constructor
		if imba.locals.state
			setState imba.locals.state
		

		# Set Firebase listeners
		onAuthStateChanged(auth, do(firebaseUser)
			if firebaseUser
				# LOG(firebaseUser)
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				user = {
					uid: firebaseUser.uid
					email: firebaseUser.email
					name: firebaseUser.displayName
					provider: firebaseUser.providerData[0].providerId
					photoUrl: firebaseUser.photoURL
				};
				// fetch learned words from firebase
				getLearnedProgress!
			else
				// User is signed out
				user = undefined
				imba.router.go('/')
			save!
		)

	# API[epic=API, seq=7] SAVE
	def save
		# Using JSON to clean up all functions from state class and convert it to polay object
		imba.locals.state = JSON.parse(JSON.stringify(self))
		imba.commit!
		# LOG 'saved', state

	def setState desiredState
		for key in Object.keys(desiredState)
			self[key] = desiredState[key]

	def reset
		setState(initialState)

	def signOut
		auth.signOut()
	
	def getLearnedProgress
		const userRef = doc(db, 'users', user.uid)
		const WordsLearnedRef = collection(userRef, 'WordsLearned')
		const learnedWordsSnapshot = await getDoc(doc(WordsLearnedRef, 'Khmer'))
		user_learned = {...user_learned, ...learnedWordsSnapshot.data()}

	def saveLearnedProgress
		const userRef = doc(db, 'users', user.uid)
		const WordsLearnedRef = collection(userRef, 'WordsLearned')
		await setDoc(doc(WordsLearnedRef, 'Khmer'), user_learned);

	def toggleLearned word
		if user_learned.hasOwnProperty(word)
			delete user_learned[word]
		else
			user_learned[word] = yes
		# LOG 'toggled', word, user_learned.hasOwnProperty(word)
		calcAllProgress!
		saveLearnedProgress!
		save!

	# calculates progress from words already learned by the user
	def calcAllProgress
		learning_data.user_progress = calcUserProgress(Modulus)
		learning_data.user_progress_learned_usage = calcUserLearnedUsage(Modulus)
		learning_data.modulus_progress = calcModulusProgress(Modulus)
		learning_data.modulus_learned_usage = calcModulusLearnedUsage(Modulus)
		learning_data.lesson_progress = calcLessonProgress(Modulus)
		learning_data.lesson_learned_usage = calcLessonLearnedUsage(Modulus)
		learning_data.phrase_progress = calcPhraseProgress(Modulus)
		learning_data.phrase_learned_usage = calcPhraseLearnedUsage(Modulus)

	def calcUserProgress user_data
		return calcUsageProgressOfObject(user_data)

	def calcModulusProgress user
		let modulus_progress = []
		for modulus in user.modules
			modulus_progress.push calcUsageProgressOfObject(modulus)

		return modulus_progress

	def calcLessonProgress user
		let lesson_progress = []
		for modulus in user.modules
			let lesson_progress_two = []
			for lesson in modulus.lessons
				lesson_progress_two.push calcUsageProgressOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress

	def calcPhraseProgress user
		let phrase_progress = []
		for modulus in user.modules
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
		for own word, is_learned of user_learned
			# if word is not used in object
			if object.word_usage_count[word]
				percent += object.word_usage_count[word] / object.word_usage_count_sum
		percent = Math.round(percent * 100)
		return percent

	def calcUserLearnedUsage user
		return calcLearnedUsageOfObject(user)

	def calcModulusLearnedUsage user
		let modulus_progress = []
		for modulus in user.modules
			modulus_progress.push calcLearnedUsageOfObject(modulus)
		return modulus_progress

	def calcLessonLearnedUsage user
		let lesson_progress = []
		for modulus in user.modules
			let lesson_progress_two = []
			for lesson in modulus.lessons
				lesson_progress_two.push calcLearnedUsageOfObject(lesson)
			lesson_progress.push lesson_progress_two
		return lesson_progress

	def calcPhraseLearnedUsage user
		let phrase_progress = []
		for modulus in user.modules
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
		# LOG input, user_learned
		let learned_words_usage = 0
		# LOG(user_learned)
		for own word, is_learned of user_learned
			# If words_used containes word
			if words_used[word] and is_learned
				learned_words_usage += words_used[word]
		return Math.round(learned_words_usage)


const state = new State

extend tag Element
	get state
		return state

export default state

