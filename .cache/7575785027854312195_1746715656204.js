import {__init__$, inited$, register$, iterable$} from 'imba/runtime';

/*body*/
let zero_weight_characters = [
	"?",
	"ៗ",
	"។",
	" ",
	",",
	"-",
	"-",
	"៖",
	";",
	"«",
	"»",
	"!",
	'"'
];
let c$0 = Symbol();
export class LibraryProcessor {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		this.library = ($$ && ($0 = $$.library) !== undefined) ? ($0) : {
			collections: {},
			lessons: {},
			phrases: {},
			words: {},
			unique: 0,
			weight: 0
		};
		
	}
	constructor(collection_array){ // NOTE ie. library
		this[__init__$]();
		this.flatten_content(collection_array);
		this.calcWordWeights();
		this.calcUniqueWords();
		return this.library;
		
		inited$(this,c$0);
	}
	flatten_content(collection_array){ // NOTE: ie. Library
		let first_index = 1;// NOTE: first index for collections
		let new_library = {
			collections: {},
			lessons: {},
			phrases: {},
			words: {},
			unique: 0,
			weight: 0
		};
		let temp_collections = {};
		for (let index = 0, $1 = iterable$(collection_array), $2 = $1.length; index < $2; index++) {
			let collection = $1[index];
			let cid = (!!first_index) ? (
				index + 1
			) : 
				index
			;
			temp_collections[cid] = collection;
			
		};
		for (let $3 = 0, $4 = Object.keys(temp_collections), $13 = $4.length, cid, _collection; $3 < $13; $3++){
			cid = $4[$3];_collection = temp_collections[cid];let new_c = {};
			
			
			new_c.name = _collection.name;
			new_c.info = _collection.info;
			new_c.price = _collection.price;
			new_c.slug = _collection.slug;
			new_c.img = _collection.slug;
			new_c.of = Object.keys(temp_collections).length;
			new_c.cid = Number(cid);
			new_c.key = String(cid);
			new_c.content = _collection.content;
			new_c.isFirst = (new_c.cid == first_index);
			if (first_index == 0) {
				new_c.isLast = (new_c.cid == temp_collections.length - 1);
			};
			if (first_index == 1) {
				new_c.isLast = (new_c.cid == new_c.of);
			};
			
			new_c.lessons = 0;
			new_c.weight = 0;
			new_c.words = {};
			
			new_library.collections[new_c.key] = new_c;
			
			for (let $7 = new_c.content, $5 = 0, $6 = Object.keys($7), $12 = $6.length, _lid, _lesson; $5 < $12; $5++){
				_lid = $6[$5];_lesson = $7[_lid];new_c.lessons++;
				let new_l = {};
				new_l.title = _lesson.title;
				new_l.subtitle = _lesson.subtitle;
				new_l.of = Object.keys(new_c.content).length;
				new_l.cid = new_c.cid;
				new_l.lid = Number(_lid);
				new_l.img = [new_c.img,new_l.lid].join('-');
				new_l.key = [new_l.cid,new_l.lid].join('-');
				new_l.phrases = 0;
				new_l.weight = 0;
				new_l.words = {};
				new_l.isFirst = (new_l.lid == first_index);
				new_l.isLast = (new_l.lid == new_l.of);
				new_library.lessons[new_l.key] = new_l;
				
				for (let $10 = _lesson.phrases, $8 = 0, $9 = Object.keys($10), $11 = $9.length, _pid, _phrase; $8 < $11; $8++){
					_pid = $9[$8];_phrase = $10[_pid];new_l.phrases++;
					let new_p = {};
					new_p.cid = new_c.cid;
					new_p.lid = new_l.lid;
					new_p.pid = Number(_pid);
					new_p.img = [new_l.img,new_p.pid].join('-');
					new_p.key = [new_p.cid,new_p.lid,new_p.pid].join('-');
					new_p.of = Object.keys(_lesson.phrases).length;
					new_p.kh_array = _phrase.kh.split(' ');
					new_p.meaning = _phrase.en;
					new_p.weight = 0;
					new_p.words = {};
					new_p.isFirst = new_p.pid == first_index;
					new_p.isLast = (new_p.pid == new_p.of);
					new_library.phrases[new_p.key] = new_p;
				};
			};
		};
		return this.library = new_library;
	}
	calcWordWeights(){
		let new_library = this.library;
		for (let $16 = new_library.phrases, $14 = 0, $15 = Object.keys($16), $20 = $15.length, pkey, phrase; $14 < $20; $14++){
			pkey = $15[$14];phrase = $16[pkey];let col_key = [phrase.cid].join('-');
			let les_key = [phrase.cid,phrase.lid].join('-');
			let phr_key = [phrase.cid,phrase.lid,phrase.pid].join('-');
			
			for (let $17 = 0, $18 = iterable$(phrase.kh_array), $19 = $18.length; $17 < $19; $17++) {
				let word = $18[$17];
				if (!(!(!new_library.words[word]))) {
					new_library.words[word] = {weight: 0,string: word};
				};
				
				if (!(!(!new_library.collections[col_key].words[word]))) {
					new_library.collections[col_key].words[word] = {weight: 0,string: word};
				};
				
				if (!(!(!new_library.lessons[les_key].words[word]))) {
					new_library.lessons[les_key].words[word] = {weight: 0,string: word};
				};
				
				if (!(!(!new_library.phrases[phr_key].words[word]))) {
					new_library.phrases[phr_key].words[word] = {weight: 0,string: word};
				};
				
				if (!(zero_weight_characters.includes(word))) {
					new_library.collections[col_key].words[word].weight++;
					new_library.collections[col_key].weight++;
					new_library.lessons[les_key].words[word].weight++;
					new_library.lessons[les_key].weight++;
					new_library.phrases[phr_key].words[word].weight++;
					new_library.phrases[phr_key].weight++;
					new_library.words[word].weight++;
					new_library.weight++;
				};
			};
		};
		return this.library = new_library;
	}
	calcUniqueWords(){
		var $29;
		this.library.unique = Object.keys(this.library.words).length;
		for (let $23 = this.library.collections, $21 = 0, $22 = Object.keys($23), $24 = $22.length, key, val; $21 < $24; $21++){
			key = $22[$21];val = $23[key];val.unique = Object.keys(val.words).length;
		};
		for (let $27 = this.library.lessons, $25 = 0, $26 = Object.keys($27), $28 = $26.length, key, val; $25 < $28; $25++){
			key = $26[$25];val = $27[key];val.unique = Object.keys(val.words).length;
		};
		$29 = [];
		for (let $32 = this.library.phrases, $30 = 0, $31 = Object.keys($32), $33 = $31.length, key, val; $30 < $33; $30++){
			key = $31[$30];val = $32[key];$29.push((val.unique = Object.keys(val.words).length));
		};
		return $29;
	}
	static { register$(this,c$0,'LibraryProcessor',16) }
};
