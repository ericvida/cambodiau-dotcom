export class ProgressProcessor
	def constructor _library
		initProgressProps _library
		DATA.initLocal! # NOTE: loads state in local storage before calculating progress
		calcProgress! _library
		return
		
	def initProgressProps _library
		this.library = {}
		this.library.unique = _library.unique
		this.library.weight = _library.weight
		this.library.words = _library.words
		this.library.unique_learned = 0
		this.library.weight_learned = 0
		this.library.unique_progress = 0
		this.library.weight_progress = 0
		
		for own key, val of _library.collections
			unless this[key]
				this[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
		
		for own key, val of _library.lessons
			unless this[key]
				this[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
		
		for own key, val of _library.phrases
			unless this[key]
				this[key] =
					unique: val.unique
					weight: val.weight
					words: val.words
					
	def calcProgress _library
		this.library.weight_learned = 0
		this.library.unique_learned = 0
		
		
		if _library.collections
		for own key, val of _library.collections
			for own word, bool of DATA.local.user_learned
				if val.words[word]
					this.library.weight_learned += val.words[word].weight
					this.library.unique_learned++
		this.library.unique_progress = Math.round((this.library.unique_learned / this.library.unique) * 100)
		this.library.weight_progress = Math.round((this.library.weight_learned / this.library.weight) * 100)
		
		for own col_key, collection of _library.collections
			this[col_key].weight_learned = 0
			this[col_key].unique_learned = 0
			for own word, bool of DATA.local.user_learned
				if collection.words[word]
					this[col_key].weight_learned += collection.words[word].weight
					this[col_key].unique_learned++
			this[col_key].unique_progress = Math.round((this[col_key].unique_learned / this[col_key].unique) * 100)
			this[col_key].weight_progress = Math.round((this[col_key].weight_learned / this[col_key].weight) * 100)
		
		for own les_key, lesson of _library.lessons
			this[les_key].weight_learned = 0
			this[les_key].unique_learned = 0
			for own word, bool of DATA.local.user_learned
				if lesson.words[word]
					this[les_key].weight_learned += lesson.words[word].weight
					this[les_key].unique_learned++
			this[les_key].unique_progress = Math.round((this[les_key].unique_learned / this[les_key].unique) * 100)
			this[les_key].weight_progress = Math.round((this[les_key].weight_learned / this[les_key].weight) * 100)
			
		for own phr_key, phrase of _library.phrases
			this[phr_key].weight_learned = 0
			this[phr_key].unique_learned = 0
			for own word, bool of DATA.local.user_learned
				if phrase.words[word]
					this[phr_key].weight_learned += phrase.words[word].weight
					this[phr_key].unique_learned++
			this[phr_key].unique_progress = Math.round((this[phr_key].unique_learned / this[phr_key].unique) * 100)
			this[phr_key].weight_progress = Math.round((this[phr_key].weight_learned / this[phr_key].weight) * 100)
		return this
	def countKeys obj
		Object.keys(obj).length
	def calcPercent learned, total
		Math.round(learned / total * 100)