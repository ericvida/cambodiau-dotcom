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
		LOG this
		
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
			collections[col_key].words = {}
			collections[col_key].weight = 0
			lessons[les_key].words = {}
			lessons[les_key].weight = 0
			phrases[phr_key].words = {}
			phrases[phr_key].weight = 0
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
			new_c.isFirst = (_ci is 0)
			new_c.isLast = (_ci is collections_in.length - 1)
			new_c.cid = _ci + 1
			new_c.lessons = 0
			new_c.weight = 0
			let ckey = "{new_c.cid}"
			collections[ckey] = new_c
			for _lesson, _li in new_c.content
				new_c.lessons++
				let new_l = {}
				new_l.of = new_c.content.length
				new_l.cid = new_c.cid
				new_l.lid = _li + 1
				new_l.phrases = 0
				new_l.weight = 0
				let lkey = "{new_l.cid}-{new_l.lid}"
				lessons[lkey] = new_l
				for phrase, _pi in _lesson
					if _pi <= 0
						new_l.title = {en: phrase.en, kh: phrase.kh}
						new_l.subtitle = {en: phrase.en_sub, kh: phrase.kh_sub}
					else
						let new_p = {}
						new_l.phrases++
						new_p.cid = new_c.cid
						new_p.lid = new_l.lid
						new_p.pid = _pi
						new_p.of = _lesson.length - 1
						new_p.kh_array = phrase.kh.split(' ')
						new_p.weight = 0
						let pkey = "{new_p.cid}-{new_p.lid}-{new_p.pid}"
						phrases[pkey] = new_p

let library = new LibraryProcessor([bible_collection])
		
	