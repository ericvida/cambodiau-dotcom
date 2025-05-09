import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore"
import { db } from '../state/firebase'

import Course from '../data/Course'

import { User } from './types.ts'

const initialState = {
	user: undefined
	dark: yes
	leftnav-lesson: yes
	leftnav-phrase: yes
	right: yes
	ipa: no
	course: 0
	lesson: 0
	phrase: 0
	word: 0
	admin: true
	active_word: 'ជា'
	learning_data: {}
	user_learned: {}
	learned_usage: 0
	show_course_editor: no
	show_lesson_editor: no
	show_phrase_editor: no
	show_word_editor: no
}

const auth = getAuth!

class State
	user\User = yes
	dark = yes
	leftnav-lesson = yes
	leftnav-phrase = yes
	right = yes
	ipa = no
	course = ''
	lesson = ''
	phrase = 0
	word = 0
	admin = true
	active_word = 'ជា'
	learning_data = {}
	user_learned = {}
	learned_usage = 0

	active_editor = 'course'

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

	def hideEditor
		show_editor = no
		save!
	def showEditor
		show_editor = yes
		save!

	def toggleCourseEditor
		active_editor = 'course'
		save!

	def toggleLessonEditor lesson_slug
		if lesson_slug and typeof lesson_slug is 'string'
			lesson = lesson_slug
		active_editor = 'lesson'
		save!

	def togglePhraseEditor phrase_id
		if phrase_id and typeof phrase_id is 'number'
			phrase = phrase_id
		active_editor = 'phrase'
		save!
	
	def toggleWordEditor
		active_editor = 'word'
		save!

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
		learning_data.user_progress = calcUsageProgressOfObject(Course)
		learning_data.user_progress_learned_usage = calcWordsUsedLearnedOfObject(Course)
		learning_data.course_progress = calcCourseProgress(Course)
		learning_data.course_learned_usage = calcCourseLearnedUsage(Course)
		learning_data.lesson_progress = calcLessonProgress(Course)
		learning_data.lesson_learned_usage = calcLessonLearnedUsage(Course)
		learning_data.phrase_progress = calcPhraseProgress(Course)
		learning_data.phrase_learned_usage = calcPhraseLearnedUsage(Course)

	def calcCourseProgress user
		let course_progress = {}
		for own courseid, course of user.courses
			course_progress[courseid] = calcUsageProgressOfObject(course)
		return course_progress

	def calcLessonProgress user
		let course_progress = {}
		for own courseid, course of user.courses
			let lesson_progress = {}
			for own lessonid, lesson of course.lessons
				lesson_progress[lessonid] = calcUsageProgressOfObject(lesson)
			course_progress[courseid] = lesson_progress
		return course_progress

	def calcPhraseProgress user
		let course_progress = {}
		for own courseid, course of user.courses
			let lesson_progress = {}
			for own lessonid, lesson of course.lessons
				let phrase_progress = []
				for phrase in lesson.phrases
					phrase_progress.push Math.round(calcUsageProgressOfObject(phrase))
				lesson_progress[lessonid] = phrase_progress
			course_progress[courseid] = lesson_progress
		return course_progress

	def calcUsageProgressOfObject object
		let percent = 0
		for own word, is_learned of user_learned
			# if word is not used in object
			if object.word_usage_count[word]
				percent += object.word_usage_count[word] / object.word_usage_count_sum
		percent = Number((percent * 100).toFixed(2))
		return percent

	def calcCourseLearnedUsage user
		let course_progress = {}
		for own courseid, course of user.courses
			course_progress[courseid] = calcWordsUsedLearnedOfObject(course)
		return course_progress

	def calcLessonLearnedUsage user
		let course_progress = {}
		for own courseid, course of user.courses
			let lesson_progress = {}
			for own id, lesson of course.lessons
				lesson_progress[id] = calcWordsUsedLearnedOfObject(lesson)
			course_progress[courseid] = lesson_progress
		return course_progress

	def calcPhraseLearnedUsage user
		let course_progress = {}
		for own courseid, course of user.courses
			let lesson_progress = {}
			for own lessonid, lesson of course.lessons
				let phrase_progress = []
				for phrase in lesson.phrases
					phrase_progress.push calcWordsUsedLearnedOfObject(phrase)
				lesson_progress[lessonid] = phrase_progress
			course_progress[courseid] = lesson_progress
		return course_progress

	# Calculates how many times a learned word has been used 
	def calcWordsUsedLearnedOfObject input
		let words_used = input.word_usage_count
		let words_used_learned = 0
		for own word, is_learned of user_learned
			# If words_used containes word
			if words_used[word]
				words_used_learned += words_used[word]
		return words_used_learned


const state = new State

extend tag Element
	get state
		return state

export default state

