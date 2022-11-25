ui_state: object
	logged_in: boolean
	darkmode: boolean
	leftbar: boolean
	rightbar: boolean

user_state: object
	id: number
	username: string
	user_image_url: string
	email: string
	leaderboard_rank: number
	password: string
	available_modules: array
	proficiency_total_percent: 
		number # number calculated from all modules
	proficiency_modules_progress: 
		array / number # [10,...] - one array of numbers calculated from chapters
	proficiency_modules_chapters_progress: 
		array / array / number # [[5,...],[]] - one array of arrays of numbers calculated from lessons
	proficiency_modules_chapters_lessons_progress: 
		array / array / array / number [[[1,...,...],[]],[[],[]]] # progress calculated from words completed in module
	dictionary_learned:
		array > string # ['ក','កក',etc.] added by user when marked a word is marked learned in modules
	dictionary_progress: # calculate from words_learned.length and dictionary.length
	alphabet_learned: array > string
	vida_learned: array > string
	alphabet_learned: array > string

vida_phonetic_system: object
	consonants:
		vida:
		ipa:
		audio:
	vowels:
		vida:
		ipa:
		audio:

alphabet: object
	consonants:
		length: number
		consonant:
			khmer:
			vida:
			ipa:
			audio:
			note:
	vowels:
		length: number
		vowel:
			khmer:
			vida:
			ipa:
			audio:
			note:
	independent_vowels:
		length: number
		ivowel:
			khmer:
			vida:
			ipa:
			audio:
			note:
	consonant_clusters:
		length: number
		ccluster:
			khmer:
			vida:
			ipa:
			audio:
			note:
	vowel_clusters:
		length: number
		vcluster:
			khmer:
			vida:
			ipa:
			audio:
			note:

dictionary: object 
	length: number
	words: array
		word: object
			khmer: string
			ipa: string
			vida: string
			audio_file: string
			learned: boolean # calculate from user state
			definitions: array
				definition: object
					word_use: string
					text: string
			this_word_use_count_in_purchased_modules: number # calc from user_state

leaderboard: object
	user: object
		user_name: string
		user_image_url: string
		modules_owned: array / strings
		words_learned: number

modules_info: array
	module_info: object
		module_id: number
		module_name: string
		module_price: number
		module_description: string
		module_total_words: number
		module_total_lessons: number

learning_data: object
	title: string
	description: string
	word_set: object
	word_set_count: number
	word_usage: object
	word_usage_count: number
	modules: array
		module: object
			id: number
			note: string
			title: string
			words_used_and_use_count: object
				string : number # "បាន": "3540"
			lessons: array
				lesson: object
					id: number
					note: string
					title: string
					words_used_and_use_count: object
						string : number # "បាន": "3540"
					phrases: array
						phrase: object
							id: number
							note: string
							title: string
							words_used_and_use_count: object
								string : number # "បាន": "3540"
							english_meaning: number
							words: array
								word: word
									khmer: string
									vida: string
									ipa: string
									literal: string