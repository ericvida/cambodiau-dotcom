import { getAuth, onAuthStateChanged } from "firebase/auth";

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
	learning_data: [{}]
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
	learning_data = [{}]
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
				user = firebaseUser.reloadUserInfo;
			else
				// User is signed out
				user = undefined
			save!
		)

	# API[epic=API, seq=7] SAVE
	def save
		# Using JSON to clean up all functions from state class and convert it to polay object
		imba.locals.state = JSON.parse(JSON.stringify(self))
		imba.commit!
		# store(STATEKEY, state)
		# LOG 'saved', state

	def setState desiredState
		for key in Object.keys(desiredState)
			self[key] = desiredState[key]

	def reset
		setState(initialState)

	def signOut
		auth.signOut()

const state = new State

extend tag Element
	get state
		return state

export default state

