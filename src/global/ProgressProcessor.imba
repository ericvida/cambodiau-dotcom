export class ProgressProcessor
	prop progress = {}
	def constructor _library
		initProgressProps _library
		checkLocal! # NOTE: loads state in local storage before calculating progress
		state.progress_flat = calcProgress _library
		return progress
	
	def checkLocal 
		if imba.locals.state
			state = imba.locals.state
	
	def initProgressProps _library
		progress.unique = _library.unique
		progress.weight = _library.weight
		progress.words = _library.words
		progress.unique_learned = 0
		progress.weight_learned = 0
		progress.unique_progress = 0
		progress.weight_progress = 0
		
		for own key, val of _library.collections
			unless progress[key]
				progress[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
		
		for own key, val of _library.lessons
			unless progress[key]
				progress[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
		
		for own key, val of _library.phrases
			unless progress[key]
				progress[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
	def learnWord word
		state.progress
	
	
	def calcProgress _library
		progress.weight_learned = 0
		progress.unique_learned = 0
		
		
		if _library.collections
		for own key, val of _library.collections
			for own word, bool of state.user_learned
				if val.words[word]
					progress.weight_learned += val.words[word].weight
					progress.unique_learned++
		progress.unique_progress = Math.round((progress.unique_learned / progress.unique) * 100)
		progress.weight_progress = Math.round((progress.weight_learned / progress.weight) * 100)
		
		for own col_key, collection of _library.collections
			progress[col_key].weight_learned = 0
			progress[col_key].unique_learned = 0
			for own word, bool of state.user_learned
				if collection.words[word]
					progress[col_key].weight_learned += collection.words[word].weight
					progress[col_key].unique_learned++
			progress[col_key].unique_progress = Math.round((progress[col_key].unique_learned / progress[col_key].unique) * 100)
			progress[col_key].weight_progress = Math.round((progress[col_key].weight_learned / progress[col_key].weight) * 100)
		
		for own les_key, lesson of _library.lessons
			progress[les_key].weight_learned = 0
			progress[les_key].unique_learned = 0
			for own word, bool of state.user_learned
				if lesson.words[word]
					progress[les_key].weight_learned += lesson.words[word].weight
					progress[les_key].unique_learned++
			progress[les_key].unique_progress = Math.round((progress[les_key].unique_learned / progress[les_key].unique) * 100)
			progress[les_key].weight_progress = Math.round((progress[les_key].weight_learned / progress[les_key].weight) * 100)
			
		for own phr_key, phrase of _library.phrases
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