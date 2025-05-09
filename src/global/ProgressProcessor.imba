export class ProgressProcessor
	prop progress = {}
	def constructor _library
		initProgressProps _library
		DATA.getLocal! # NOTE: loads state in local storage before calculating progress
		DATA.local.progress_flat = calcProgress _library
		LL DATA.local.progress_flat
		return 
	def getLocal 
		if imba.locals.state
			LL imba.locals.state
			state = imba.locals.state
		
	def initProgressProps _library
		progress.library = {}
		progress.library.unique = _library.unique
		progress.library.weight = _library.weight
		progress.library.words = _library.words
		progress.library.unique_learned = 0
		progress.library.weight_learned = 0
		progress.library.unique_progress = 0
		progress.library.weight_progress = 0
		
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
					
	def calcProgress _library
		progress.library.weight_learned = 0
		progress.library.unique_learned = 0
		
		
		if _library.collections
		for own key, val of _library.collections
			for own word, bool of DATA.local.user_learned
				if val.words[word]
					progress.library.weight_learned += val.words[word].weight
					progress.library.unique_learned++
		progress.library.unique_progress = Math.round((progress.library.unique_learned / progress.library.unique) * 100)
		progress.library.weight_progress = Math.round((progress.library.weight_learned / progress.library.weight) * 100)
		
		for own col_key, collection of _library.collections
			progress[col_key].weight_learned = 0
			progress[col_key].unique_learned = 0
			for own word, bool of DATA.local.user_learned
				if collection.words[word]
					progress[col_key].weight_learned += collection.words[word].weight
					progress[col_key].unique_learned++
			progress[col_key].unique_progress = Math.round((progress[col_key].unique_learned / progress[col_key].unique) * 100)
			progress[col_key].weight_progress = Math.round((progress[col_key].weight_learned / progress[col_key].weight) * 100)
		
		for own les_key, lesson of _library.lessons
			progress[les_key].weight_learned = 0
			progress[les_key].unique_learned = 0
			for own word, bool of DATA.local.user_learned
				if lesson.words[word]
					progress[les_key].weight_learned += lesson.words[word].weight
					progress[les_key].unique_learned++
			progress[les_key].unique_progress = Math.round((progress[les_key].unique_learned / progress[les_key].unique) * 100)
			progress[les_key].weight_progress = Math.round((progress[les_key].weight_learned / progress[les_key].weight) * 100)
			
		for own phr_key, phrase of _library.phrases
			progress[phr_key].weight_learned = 0
			progress[phr_key].unique_learned = 0
			for own word, bool of DATA.local.user_learned
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