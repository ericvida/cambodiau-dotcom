
export class ProgressProcessor
	prop progress = {}
	def constructor library
		initProgressProps library
		checkLocal! # NOTE: loads state in local storage before calculating progress
		state.progress_flat = calcProgress library
		return progress
	
	def checkLocal 
		if imba.locals.state
			state = imba.locals.state
	
	def initProgressProps library_in
		progress.unique = library_in.unique
		progress.weight = library_in.weight
		for own key, val of library_in.collections
			unless progress[key]
				progress[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
		
		for own key, val of library_in.lessons
			unless progress[key]
				progress[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
		
		for own key, val of library_in.phrases
			unless progress[key]
				progress[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
	def learnWord word
		state.progress
	
	
	def calcProgress library_in
		### TODO
		Make word refs be generated at library_data.imba at static level, not here.
		###
		let progress_res = {}
		let temp_refs = {}
		
		for own col_key, collection of library_in.collections
			progress[col_key].weight_learned = 0
			progress[col_key].unique_learned = 0
			for own word, bool of state.user_learned
				if collection.words[word]
					progress[col_key].weight_learned += collection.words[word].weight
					progress[col_key].unique_learned++
			progress[col_key].unique_progress = Math.round((progress[col_key].unique_learned / progress[col_key].unique) * 100)
			progress[col_key].weight_progress = Math.round((progress[col_key].weight_learned / progress[col_key].weight) * 100)
		
		for own les_key, lesson of library_in.lessons
			progress[les_key].weight_learned = 0
			progress[les_key].unique_learned = 0
			for own word, bool of state.user_learned
				if lesson.words[word]
					progress[les_key].weight_learned += lesson.words[word].weight
					progress[les_key].unique_learned++
			progress[les_key].unique_progress = Math.round((progress[les_key].unique_learned / progress[les_key].unique) * 100)
			progress[les_key].weight_progress = Math.round((progress[les_key].weight_learned / progress[les_key].weight) * 100)
					
		for own phr_key, phrase of library_in.phrases
			progress[phr_key].weight_learned = 0
			progress[phr_key].unique_learned = 0
			for own word, bool of state.user_learned
				if phrase.words[word]
					progress[phr_key].weight_learned += phrase.words[word].weight
					progress[phr_key].unique_learned++
			progress[phr_key].unique_progress = Math.round((progress[phr_key].unique_learned / progress[phr_key].unique) * 100)
			progress[phr_key].weight_progress = Math.round((progress[phr_key].weight_learned / progress[phr_key].weight) * 100)
		return progress
	def countKeys obj
		Object.keys(obj).length
	def calcPercent learned, total
		Math.round(learned / total * 100)