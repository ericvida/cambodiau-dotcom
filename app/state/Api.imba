import state from './State'

class Api
	def init
		if state.dark
			setDarkmode!
		save!

	def clear
		state.reset!
		save!
		# LOG "cleared local storage"

	# API[epic=API, seq=7] SAVE
	def save
		# Using JSON to clean up all functions from state class and convert it to polay object
		imba.locals.state = JSON.parse(JSON.stringify(state))
		# store(STATEKEY, state)
		# LOG 'saved', state

	# API[epic=FrontEnd, seq=8] vida
	def toggleIpa
		state.ipa = !state.ipa
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
