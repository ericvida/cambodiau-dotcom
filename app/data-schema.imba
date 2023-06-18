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
	available_modulus: array
	proficiency_total_percent: 
		number # number calculated from all modulus
	proficiency_modulus_progress: 
		array / number # [10,...] - one array of numbers calculated from chapters
	proficiency_modulus_chapters_progress: 
		array / array / number # [[5,...],[]] - one array of arrays of numbers calculated from lessons
	proficiency_modulus_chapters_lessons_progress: 
		array / array / array / number [[[1,...,...],[]],[[],[]]] # progress calculated from words completed in modulus
	dictionary_learned:
		array > string # ['ក','កក',etc.] added by user when marked a word is marked learned in modulus
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
			this_word_use_count_in_purchased_modulus: number # calc from user_state

leaderboard: object
	user: object
		user_name: string
		user_image_url: string
		modulus_owned: array / strings
		words_learned: number

modulus_info: array
	modulus_info: object
		modulus_id: number
		modulus_name: string
		modulus_price: number
		modulus_description: string
		modulus_total_words: number
		modulus_total_lessons: number

learning_data: object
	title: string
	description: string
	word_set: object
	word_usage_count: object
	word_usage_count_sum: number
	modulus: array
		modulus: object
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
