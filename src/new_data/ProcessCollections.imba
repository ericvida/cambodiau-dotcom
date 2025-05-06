import {bible_collection} from "./bible_collection.imba"
global.LOG = console.log
global.WARN = console.warn
global.ERR = console.error

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
class LibraryProcessor
	collections = {}
	lessons = {}
	phrases = {}
	words = {}
	unique = 0
	weight = 0
	
	def constructor collections_in
		flatten_content collections_in
		calcWordWeights!
		calcUniqueWords!
		
	def calcUniqueWords
		unique = Object.keys(words).length
		for own key, val of collections
			val.unique = Object.keys(val.words).length
		for own key, val of lessons
			val.unique = Object.keys(val.words).length
		for own key, val of phrases
			val.unique = Object.keys(val.words).length

	def calcWordWeights
		for own pkey, phrase of phrases
			let col_key = [phrase.cid].join('-')
			let les_key = [phrase.cid, phrase.lid].join('-')
			let phr_key = [phrase.cid, phrase.lid, phrase.pid].join('-')
			
			for word in phrase.kh_array
				unless !!words[word]
					words[word] = {weight:0, string:word}

				unless !!collections[col_key].words[word]
					collections[col_key].words[word] = {weight:0, string:word}
				
				unless !!lessons[les_key].words[word]
					lessons[les_key].words[word] = {weight:0, string:word}
				
				unless !!phrases[phr_key].words[word]
					phrases[phr_key].words[word] = {weight:0, string:word}
				
				unless zero_weight_characters.includes word
					collections[col_key].words[word].weight++
					collections[col_key].weight++
					lessons[les_key].words[word].weight++
					lessons[les_key].weight++
					phrases[phr_key].words[word].weight++
					phrases[phr_key].weight++
					words[word].weight++
					weight++
					
	def flatten_content collections_in
		for _collection, _ci in collections_in
			let new_c = _collection
			new_c.name = _collection.name
			new_c.info = _collection.info
			new_c.price = _collection.price
			new_c.slug = _collection.slug
			new_c.of = collections_in.length
			new_c.cid = Number(_collection.cid)
			new_c.key = "{new_c.cid}"
			new_c.isFirst = (_ci is 0)
			new_c.isLast = (_ci is collections_in.length - 1)
			new_c.lessons = 0
			new_c.weight = 0
			new_c.words = {}
			
			let ckey = "{new_c.cid}"
			collections[ckey] = new_c
			
			for own _lid, _lesson of new_c.content
				new_c.lessons++
				let new_l = {}
				new_l.title = _lesson.title
				new_l.subtitle = _lesson.subtitle
				new_l.of = Object.keys(new_c.content).length
				new_l.cid = new_c.cid
				new_l.lid = Number(_lid)
				new_l.key = [new_l.cid,new_l.lid].join('-')
				new_l.phrases = 0
				new_l.weight = 0
				new_l.words = {}
				new_l.isFirst = (_lid is 1)
				new_l.isLast = (_lid is new_l.of)
				let lkey = "{new_l.cid}-{new_l.lid}"
				lessons[lkey] = new_l
			
				for own _pid, _phrase of _lesson.phrases
					new_l.phrases++
					let new_p = {}
					new_p.cid = new_c.cid
					new_p.lid = new_l.lid
					new_p.pid = Number(_pid)
					new_p.key = [new_p.cid, new_p.lid, new_p.pid].join('-')
					new_p.of = Object.keys(_lesson.phrases).length
					new_p.kh_array = _phrase.kh.split(' ')
					new_p.meaning = _phrase.en
					new_p.weight = 0
					new_p.words = {}
					new_p.isFirst = new_p.pid == 1
					new_p.isLast = (new_p.pid == new_p.of)
		
					let pkey = "{new_p.cid}-{new_p.lid}-{new_p.pid}"
					phrases[pkey] = new_p

export let library = new LibraryProcessor([bible_collection])
		
	