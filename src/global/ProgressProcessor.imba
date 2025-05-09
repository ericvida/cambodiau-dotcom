

export class ProgressProcessor
	def constructor _library
		# Initialize progress properties
		initProgressProps(_library)
		
		# Calculate progress using the new store
		calcProgress(_library)
		
	def initProgressProps _library
		# Initialize library properties
		this.library = {}
		this.library.unique = _library..unique || 0
		this.library.weight = _library..weight || 0
		this.library.words = _library..words || {}
		this.library.unique_learned = 0
		this.library.weight_learned = 0
		this.library.unique_progress = 0
		this.library.weight_progress = 0
		
		# Initialize collections properties
		if _library..collections
			for own key, val of _library.collections
				unless this[key]
					this[key] = {
						unique: val..unique || 0,
						weight: val..weight || 0,
						words: val..words || {},
						unique_learned: 0,
						weight_learned: 0,
						unique_progress: 0,
						weight_progress: 0
					}
		
		# Initialize lessons properties
		if _library..lessons
			for own key, val of _library.lessons
				unless this[key]
					this[key] = {
						unique: val..unique || 0,
						weight: val..weight || 0,
						words: val..words || {},
						unique_learned: 0,
						weight_learned: 0,
						unique_progress: 0,
						weight_progress: 0
					}
		
		# Initialize phrases properties
		if _library..phrases
			for own key, val of _library.phrases
				unless this[key]
					this[key] = {
						unique: val..unique || 0,
						weight: val..weight || 0,
						words: val..words || {},
						unique_learned: 0,
						weight_learned: 0,
						unique_progress: 0,
						weight_progress: 0
					}
					
	def calcProgress _library
		# Use Store's updateProgress method, then update this object with the result
		const progressData = STORE.updateProgress(_library)
		
		# Update library properties
		this.library.weight_learned = progressData..library..weight_learned || 0
		this.library.unique_learned = progressData..library..unique_learned || 0
		this.library.unique_progress = progressData..library..unique_progress || 0
		this.library.weight_progress = progressData..library..weight_progress || 0
		
		# Update collections properties
		if _library..collections
			for own col_key, _collection of _library.collections
				if progressData[col_key]
					this[col_key].weight_learned = progressData[col_key].weight_learned || 0
					this[col_key].unique_learned = progressData[col_key].unique_learned || 0
					this[col_key].unique_progress = progressData[col_key].unique_progress || 0
					this[col_key].weight_progress = progressData[col_key].weight_progress || 0
		
		# Update lessons properties
		if _library..lessons
			for own les_key, _lesson of _library.lessons
				if progressData[les_key]
					this[les_key].weight_learned = progressData[les_key].weight_learned || 0
					this[les_key].unique_learned = progressData[les_key].unique_learned || 0
					this[les_key].unique_progress = progressData[les_key].unique_progress || 0
					this[les_key].weight_progress = progressData[les_key].weight_progress || 0
		
		# Update phrases properties
		if _library..phrases
			for own phr_key, _phrase of _library.phrases
				if progressData[phr_key]
					this[phr_key].weight_learned = progressData[phr_key].weight_learned || 0
					this[phr_key].unique_learned = progressData[phr_key].unique_learned || 0
					this[phr_key].unique_progress = progressData[phr_key].unique_progress || 0
					this[phr_key].weight_progress = progressData[phr_key].weight_progress || 0
		
		return this
	
	# Helper functions
	def countKeys obj
		return obj ? Object.keys(obj).length : 0
		
	def calcPercent learned, total
		return total > 0 ? Math.round(learned / total * 100) : 0