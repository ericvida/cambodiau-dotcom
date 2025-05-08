let zero_weight_characters = [
	"?"
	"ៗ"
	"។"
	" "
	","
	"-"
	"-"
	"៖"
	";"
	"«"
	"»"
	"!"
	'"'
]
export class LibraryProcessor
	library = {
		collections: {}
		lessons: {}
		phrases: {}
		words: {}
		unique: 0
		weight: 0
	}
	
	def constructor collection_array # NOTE ie. library
		flatten_content collection_array
		calcWordWeights!
		calcUniqueWords!
		return library
					
	def flatten_content collection_array # NOTE: ie. Library
		let first_index = 1 # NOTE: first index for collections
		let new_library = 
			collections: {}
			lessons: {}
			phrases: {}
			words: {}
			unique: 0
			weight: 0
		let temp_collections = {}
		for collection, index in collection_array
			let cid = if !!first_index then index + 1 else index
			temp_collections[cid] = collection
			
		for own cid, _collection of temp_collections
			let new_c = {}
			
			
			new_c.name = _collection.name
			new_c.info = _collection.info
			new_c.price = _collection.price
			new_c.slug = _collection.slug
			new_c.img = _collection.slug
			new_c.of = Object.keys(temp_collections).length
			new_c.cid = Number(cid)
			new_c.key = String(cid)
			new_c.content = _collection.content
			new_c.isFirst = (new_c.cid == first_index)
			if first_index == 0
				new_c.isLast = (new_c.cid == temp_collections.length - 1)
			if first_index == 1
				new_c.isLast = (new_c.cid == new_c.of) 
			
			new_c.lessons = 0
			new_c.weight = 0
			new_c.words = {}
			
			new_library.collections[new_c.key] = new_c
			
			for own _lid, _lesson of new_c.content
				new_c.lessons++
				let new_l = {}
				new_l.title = _lesson.title
				new_l.subtitle = _lesson.subtitle
				new_l.of = Object.keys(new_c.content).length
				new_l.cid = new_c.cid
				new_l.lid = Number(_lid)
				new_l.img = [new_c.img,new_l.lid].join('-')
				new_l.key = [new_l.cid,new_l.lid].join('-')
				new_l.phrases = 0
				new_l.weight = 0
				new_l.words = {}
				new_l.isFirst = (new_l.lid == first_index)
				new_l.isLast = (new_l.lid == new_l.of)
				new_library.lessons[new_l.key] = new_l
			
				for own _pid, _phrase of _lesson.phrases
					new_l.phrases++
					let new_p = {}
					new_p.cid = new_c.cid
					new_p.lid = new_l.lid
					new_p.pid = Number(_pid)
					new_p.img = [new_l.img,new_p.pid].join('-')
					new_p.key = [new_p.cid, new_p.lid, new_p.pid].join('-')
					new_p.of = Object.keys(_lesson.phrases).length
					new_p.kh_array = _phrase.kh.split(' ')
					new_p.meaning = _phrase.en
					new_p.weight = 0
					new_p.words = {}
					new_p.isFirst = new_p.pid == first_index
					new_p.isLast = (new_p.pid == new_p.of)
					new_library.phrases[new_p.key] = new_p
		library = new_library
	def calcWordWeights
		let new_library = library
		for own pkey, phrase of new_library.phrases
			let col_key = [phrase.cid].join('-')
			let les_key = [phrase.cid, phrase.lid].join('-')
			let phr_key = [phrase.cid, phrase.lid, phrase.pid].join('-')
			
			for word in phrase.kh_array
				unless !!new_library.words[word]
					new_library.words[word] = {weight:0, string:word}

				unless !!new_library.collections[col_key].words[word]
					new_library.collections[col_key].words[word] = {weight:0, string:word}
				
				unless !!new_library.lessons[les_key].words[word]
					new_library.lessons[les_key].words[word] = {weight:0, string:word}
				
				unless !!new_library.phrases[phr_key].words[word]
					new_library.phrases[phr_key].words[word] = {weight:0, string:word}
				
				unless zero_weight_characters.includes word
					new_library.collections[col_key].words[word].weight++
					new_library.collections[col_key].weight++
					new_library.lessons[les_key].words[word].weight++
					new_library.lessons[les_key].weight++
					new_library.phrases[phr_key].words[word].weight++
					new_library.phrases[phr_key].weight++
					new_library.words[word].weight++
					new_library.weight++
		library = new_library
	def calcUniqueWords
		library.unique = Object.keys(library.words).length
		for own key, val of library.collections
			val.unique = Object.keys(val.words).length
		for own key, val of library.lessons
			val.unique = Object.keys(val.words).length
		for own key, val of library.phrases
			val.unique = Object.keys(val.words).length