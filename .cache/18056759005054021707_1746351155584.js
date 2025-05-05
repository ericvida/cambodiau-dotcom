import {register$, __init__$, isa$, iterable$, is$} from 'imba/runtime';
import {use_events as imba_use_events, use_events_hotkey as imba_use_events_hotkey, use_dom_bind as imba_use_dom_bind, use_events_mouse as imba_use_events_mouse, styles as imba_styles, locals as imba_locals, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, use_dom_teleport as imba_use_dom_teleport, use_slots as imba_use_slots, createElement as imba_createElement, use_router as imba_use_router, commit as imba_commit, createKeyedList as imba_createKeyedList, createIndexedList as imba_createIndexedList, renderContext as imba_renderContext, createLiveFragment as imba_createLiveFragment, createSVGElement as imba_createSVGElement, use_styles as imba_use_styles, getSuperTagType as imba_getSuperTagType} from 'imba';
(imba_use_events(),imba_use_events_hotkey(),imba_use_dom_bind(),imba_use_events_mouse(),imba_use_dom_teleport(),imba_use_slots(),imba_use_router(),imba_use_styles());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $getSlot$ = Symbol.for('#getSlot'), $afterReconcile$ = Symbol.for('#afterReconcile'), $placeChild$ = Symbol.for('#placeChild'), $getRenderContext$ = Symbol.for('#getRenderContext'), $$up$ = Symbol.for('##up'), $interval$ = Symbol.for('#interval'), $context$ = Symbol.for('#context');
var $87 = Symbol(), $90 = Symbol(), $94 = Symbol(), $103 = Symbol(), $107 = Symbol(), $111 = Symbol(), $115 = Symbol(), $119 = Symbol(), $123 = Symbol(), $127 = Symbol(), $131 = Symbol(), $135 = Symbol(), $139 = Symbol(), $147 = Symbol(), $154 = Symbol(), $162 = Symbol(), $164 = Symbol(), $168 = Symbol(), $173 = Symbol(), $178 = Symbol(), $183 = Symbol(), $190 = Symbol(), $193 = Symbol(), $197 = Symbol(), $199 = Symbol(), $200 = Symbol(), $201 = Symbol(), $202 = Symbol(), $203 = Symbol(), $204 = Symbol(), $206 = Symbol(), $208 = Symbol(), $209 = Symbol(), $210 = Symbol(), $211 = Symbol(), $212 = Symbol(), $213 = Symbol(), $215 = Symbol(), $217 = Symbol(), $218 = Symbol(), $219 = Symbol(), $220 = Symbol(), $221 = Symbol(), $222 = Symbol(), $225 = Symbol(), $229 = Symbol(), $235 = Symbol(), $240 = Symbol(), $243 = Symbol(), $248 = Symbol(), $250 = Symbol(), $252 = Symbol(), $260 = Symbol(), $263 = Symbol(), $264 = Symbol(), $266 = Symbol(), $269 = Symbol(), $272 = Symbol(), $275 = Symbol(), $277 = Symbol(), $279 = Symbol(), $283 = Symbol(), $284 = Symbol(), $285 = Symbol(), $288 = Symbol(), $292 = Symbol(), $293 = Symbol(), $294 = Symbol(), $298 = Symbol(), $299 = Symbol(), $300 = Symbol(), $303 = Symbol(), $305 = Symbol(), $309 = Symbol(), $310 = Symbol(), $311 = Symbol(), $314 = Symbol(), $319 = Symbol(), $323 = Symbol(), $329 = Symbol(), $333 = Symbol(), $337 = Symbol(), $343 = Symbol(), $345 = Symbol(), $354 = Symbol(), $359 = Symbol(), $362 = Symbol(), $364 = Symbol(), $365 = Symbol(), $368 = Symbol(), $372 = Symbol(), $377 = Symbol(), $380 = Symbol(), $382 = Symbol(), $383 = Symbol(), $384 = Symbol(), $385 = Symbol(), $386 = Symbol(), $390 = Symbol(), $392 = Symbol(), $401 = Symbol(), $406 = Symbol(), $409 = Symbol(), $413 = Symbol(), $418 = Symbol(), $421 = Symbol(), $423 = Symbol(), $424 = Symbol(), $425 = Symbol(), $426 = Symbol(), $427 = Symbol(), $429 = Symbol(), $435 = Symbol(), $437 = Symbol(), $446 = Symbol(), $451 = Symbol(), $454 = Symbol(), $458 = Symbol(), $463 = Symbol(), $466 = Symbol(), $468 = Symbol(), $469 = Symbol(), $470 = Symbol(), $471 = Symbol(), $472 = Symbol(), $476 = Symbol(), $488 = Symbol(), $492 = Symbol(), $496 = Symbol(), $502 = Symbol(), $505 = Symbol(), $509 = Symbol(), $514 = Symbol(), $516 = Symbol(), $517 = Symbol(), $520 = Symbol(), $522 = Symbol(), $523 = Symbol(), $526 = Symbol(), $528 = Symbol(), $529 = Symbol(), $533 = Symbol(), $535 = Symbol(), $536 = Symbol(), $539 = Symbol(), $541 = Symbol(), $542 = Symbol(), $545 = Symbol(), $547 = Symbol(), $548 = Symbol(), $552 = Symbol(), $554 = Symbol(), $555 = Symbol(), $558 = Symbol(), $560 = Symbol(), $561 = Symbol(), $564 = Symbol(), $566 = Symbol(), $567 = Symbol(), $571 = Symbol(), $573 = Symbol(), $574 = Symbol(), $578 = Symbol(), $580 = Symbol(), $581 = Symbol(), $585 = Symbol(), $587 = Symbol(), $590 = Symbol(), $600 = Symbol(), $601 = Symbol(), $606 = Symbol(), $610 = Symbol(), $614 = Symbol(), $618 = Symbol(), $622 = Symbol(), $626 = Symbol(), $632 = Symbol(), $635 = Symbol(), $637 = Symbol(), $638 = Symbol(), $640 = Symbol(), $642 = Symbol(), $643 = Symbol(), $645 = Symbol(), $647 = Symbol(), $648 = Symbol(), $650 = Symbol(), $652 = Symbol(), $653 = Symbol(), $655 = Symbol(), $657 = Symbol(), $658 = Symbol(), $662 = Symbol(), $666 = Symbol(), $667 = Symbol(), $677 = Symbol(), $679 = Symbol(), $680 = Symbol(), $685 = Symbol(), $689 = Symbol(), $692 = Symbol(), $702 = Symbol(), $704 = Symbol(), $705 = Symbol(), $710 = Symbol(), $712 = Symbol(), $715 = Symbol(), $719 = Symbol(), $722 = Symbol(), $725 = Symbol(), $728 = Symbol(), $730 = Symbol(), $734 = Symbol(), $736 = Symbol(), $743 = Symbol(), $747 = Symbol(), $748 = Symbol(), $751 = Symbol(), $756 = Symbol(), $760 = Symbol(), $761 = Symbol(), $762 = Symbol(), $764 = Symbol(), $771 = Symbol(), $775 = Symbol(), $776 = Symbol(), $779 = Symbol(), $784 = Symbol(), $788 = Symbol(), $789 = Symbol(), $790 = Symbol(), $792 = Symbol(), $796 = Symbol(), $798 = Symbol(), $799 = Symbol(), $800 = Symbol(), $806 = Symbol(), $809 = Symbol(), $812 = Symbol(), $815 = Symbol(), $816 = Symbol(), $817 = Symbol(), $819 = Symbol(), $822 = Symbol(), $823 = Symbol(), $827 = Symbol(), $833 = Symbol(), $835 = Symbol(), $837 = Symbol(), $838 = Symbol(), $840 = Symbol(), $844 = Symbol(), $848 = Symbol(), $849 = Symbol(), $857 = Symbol(), $858 = Symbol(), $860 = Symbol(), $861 = Symbol(), $862 = Symbol(), $863 = Symbol(), $864 = Symbol(), $865 = Symbol(), $867 = Symbol(), $868 = Symbol(), $869 = Symbol(), $874 = Symbol(), $880 = Symbol(), $885 = Symbol(), $889 = Symbol(), $890 = Symbol(), $899 = Symbol(), $901 = Symbol(), $902 = Symbol(), $907 = Symbol(), $909 = Symbol(), $912 = Symbol(), $919 = Symbol(), $922 = Symbol(), $923 = Symbol(), $925 = Symbol(), $928 = Symbol(), $935 = Symbol(), $936 = Symbol(), $937 = Symbol(), $941 = Symbol(), $944 = Symbol(), $946 = Symbol(), $949 = Symbol(), $951 = Symbol(), $955 = Symbol(), $957 = Symbol(), $959 = Symbol(), $961 = Symbol(), $962 = Symbol(), $964 = Symbol(), $967 = Symbol(), $972 = Symbol(), $974 = Symbol(), $976 = Symbol(), $977 = Symbol(), $980 = Symbol(), $982 = Symbol(), $983 = Symbol(), $986 = Symbol(), $987 = Symbol(), $997 = Symbol(), $998 = Symbol(), $1004 = Symbol(), $1006 = Symbol(), $1009 = Symbol(), $1011 = Symbol(), $1012 = Symbol(), $1014 = Symbol(), $1017 = Symbol(), $1019 = Symbol(), $1024 = Symbol(), $1027 = Symbol(), $1031 = Symbol(), $1032 = Symbol(), $1033 = Symbol(), $1036 = Symbol(), $1039 = Symbol(), $1043 = Symbol(), $1044 = Symbol(), $1045 = Symbol(), $1049 = Symbol(), $1050 = Symbol(), $1051 = Symbol(), $1054 = Symbol(), $1055 = Symbol(), $1057 = Symbol(), $1060 = Symbol(), $1061 = Symbol(), $1064 = Symbol(), $1067 = Symbol(), $1068 = Symbol(), $1073 = Symbol(), $1075 = Symbol(), $1078 = Symbol(), $1080 = Symbol(), $1081 = Symbol(), $1083 = Symbol(), $1088 = Symbol(), $1091 = Symbol(), $1095 = Symbol(), $1096 = Symbol(), $1097 = Symbol(), $1100 = Symbol(), $1103 = Symbol(), $1107 = Symbol(), $1108 = Symbol(), $1109 = Symbol(), $1113 = Symbol(), $1114 = Symbol(), $1115 = Symbol(), $1118 = Symbol(), $1119 = Symbol(), $1121 = Symbol(), $1124 = Symbol(), $1125 = Symbol(), $1128 = Symbol(), $1131 = Symbol(), $1132 = Symbol(), $1135 = Symbol(), $1138 = Symbol(), $1142 = Symbol(), $1144 = Symbol(), $1147 = Symbol(), $1150 = Symbol(), $1152 = Symbol(), $1157 = Symbol(), $1162 = Symbol(), $1166 = Symbol(), $1169 = Symbol(), $1172 = Symbol(), $1175 = Symbol(), $1183 = Symbol(), $1187 = Symbol(), $1189 = Symbol(), $1190 = Symbol(), $1191 = Symbol(), $1193 = Symbol(), $1195 = Symbol(), $1196 = Symbol(), $1197 = Symbol(), $1199 = Symbol(), $1202 = Symbol(), $1211 = Symbol(), $1212 = Symbol(), $1214 = Symbol(), $1215 = Symbol(), $1219 = Symbol(), $1268 = Symbol(), $1270 = Symbol(), $1280 = Symbol(), $1283 = Symbol(), $1284 = Symbol(), $1286 = Symbol(), $1287 = Symbol(), $1289 = Symbol(), $1291 = Symbol(), $1293 = Symbol(), $1295 = Symbol(), $1299 = Symbol(), $1300 = Symbol(), $1301 = Symbol(), $1305 = Symbol(), $1306 = Symbol(), $1307 = Symbol(), $1312 = Symbol(), $1313 = Symbol(), $1322 = Symbol(), $1323 = Symbol(), $1325 = Symbol(), $1326 = Symbol(), $1331 = Symbol(), $1332 = Symbol(), $1335 = Symbol(), $1337 = Symbol(), $1338 = Symbol(), $1340 = Symbol(), $1342 = Symbol(), $1343 = Symbol(), $1344 = Symbol(), $1345 = Symbol(), $1347 = Symbol(), $1350 = Symbol(), $1355 = Symbol(), $1357 = Symbol(), $1364 = Symbol(), $1367 = Symbol(), $1370 = Symbol(), $1374 = Symbol(), $1375 = Symbol(), $1377 = Symbol(), $1378 = Symbol(), $1379 = Symbol(), $1381 = Symbol(), $1385 = Symbol(), $1403 = Symbol(), $1409 = Symbol(), $1413 = Symbol(), $1419 = Symbol(), $1425 = Symbol(), $1432 = Symbol(), $1442 = Symbol(), $1448 = Symbol(), $1454 = Symbol(), $1534 = Symbol(), $1557 = Symbol(), $1563 = Symbol(), $1566 = Symbol(), $1569 = Symbol(), $1574 = Symbol(), $1585 = Symbol(), $1597 = Symbol(), $1610 = Symbol(), $1621 = Symbol(), $1623 = Symbol(), $1626 = Symbol(), $1630 = Symbol(), $1634 = Symbol(), $1636 = Symbol(), $1637 = Symbol(), $1639 = Symbol(), $1640 = Symbol(), $1641 = Symbol(), $1642 = Symbol(), $1645 = Symbol(), $1648 = Symbol(), $1651 = Symbol(), $1654 = Symbol();

/*body*/
// import {learning_data_out} from './data/learning_data_out'

import fitty from 'fitty';// for fitting text in WordCard
import Fuzzy from './fuzzy.imba';// for fitting text in WordCard
import {audio} from './audio.imba';
import {images} from './images.imba';
import {clusters} from './data/clusters.imba';
import {dictionary} from './data/dictionary.imba';
import {collections_data} from './data/collections_data.imba';
import {library_data} from './data/library_data.imba';
// import {state.learning_data} from './data'
import './elements/index.imba';
import './components/index.imba';
import './icons/index.imba';
import './styles.imba';
// sealang-link: http://sealang.net/api/api.pl?query=ក&service=dictionary
const fuzzy = new Fuzzy;
const STATEKEY = 'app-state-20221119';

let state = {
	auth: true,
	dark: true,
	left: true,
	right: true,
	ipa: false,
	collection: 0,
	lesson: 0,
	phrase: 0,
	word: 0,
	admin: true,
	active_word: 'ជា',
	learning_data: [{}],
	user_learned: {},
	learned_usage: 0
};

let c$0 = Symbol();
class Api {
	init(){
		if (imba_locals.state) {
			state = imba_locals.state;
		} else {
			state = {
				auth: true,
				dark: true,
				left: true,
				right: true,
				ipa: false,
				collection: 0,
				lesson: 0,
				phrase: 0,
				word: 0,
				admin: true,
				active_word: 'ជា',
				learning_data: [{}],
				user_learned: {},
				learned_usage: 0
			};
		};
		if (state.dark) {
			this.setDarkmode();
		};
		return this.save();
	}
	
	clear(){
		state = {
			auth: true,
			dark: true,
			left: true,
			right: true,
			ipa: false,
			collection: 0,
			lesson: 0,
			phrase: 0,
			word: 0,
			admin: true,
			active_word: 'ជា',
			learning_data: [{}],
			user_learned: {},
			learned_usage: 0
		};
		return this.save();
	}
	
	toggleLearned(word){
		var $1;
		if (state.user_learned.hasOwnProperty(word)) {
			((($1 = state.user_learned[word]),delete state.user_learned[word], $1));
		} else {
			state.user_learned[word] = true;
		};
		this.calcAllProgress();// DELETE: Delete when done with calcAllProgressFlat is implemented
		state.learning_data_flat = this.calcAllProgressFlat();
		return this.save();
	}
	hasLearned(word){
		if (state.user_learned.hasOwnProperty(word)) {
			return true;
		} else {
			return false;
		};
	}
	calcAllProgressFlat(){
		/* TODO
				Make word refs be generated at library_data.imba at static level, not here.
				*/
		
		let progress_data = {};
		let temp_refs = {};
		for (let $4 = library_data.phrases, $2 = 0, $3 = Object.keys($4), $9 = $3.length, phrase_key, phrase; $2 < $9; $2++){
			// NOTE: Init Progress data
			phrase_key = $3[$2];phrase = $4[phrase_key];progress_data[phrase_key] = {words_learned: 0,words_total: library_data.phrases[phrase_key].weight,words_progress: 0};
			
			// NOTE: Init lesson data once]
			if (!(progress_data[("" + (phrase.c) + "-" + (phrase.l))])) {
				progress_data[("" + (phrase.c) + "-" + (phrase.l))] = {words_learned: 0,words_total: library_data.lessons[("" + (phrase.c) + "-" + (phrase.l))].weight,words_progress: 0};
			};
			
			// NOTE: Init Progress data once
			if (!progress_data[phrase.c]) {
				progress_data[phrase.c] = {words_learned: 0,words_total: library_data.collections[phrase.c].weight,words_progress: 0};
			};
			
			for (let $7 = phrase.words, $5 = 0, $6 = Object.keys($7), $8 = $6.length, word, val; $5 < $8; $5++){
				// NOTE: Add unique words to reference lists
				word = $6[$5];val = $7[word];if (isa$(temp_refs[word],Array)) {
					temp_refs[word].push(phrase_key);
				} else {
					temp_refs[word] = [phrase_key];
					
				};
				// NOTE: If word is learned add weight to progress data
				if (this.hasLearned(word)) {
					progress_data[phrase_key].words_learned += val.weight | 0;
					progress_data[("" + (phrase.c) + "-" + (phrase.l))].words_learned += val.weight | 0;
					progress_data[phrase.c].words_learned += val.weight | 0;
				};
				
				// NOTE: count unique words in phrase
				progress_data[phrase_key].words_unique = this.countKeys(phrase.words);
				
				// NOTE: count unique words in lesson once
				if (!(progress_data[("" + (phrase.c) + "-" + (phrase.l))].words_unique)) {
					progress_data[("" + (phrase.c) + "-" + (phrase.l))].words_unique = this.countKeys(library_data.lessons[("" + (phrase.c) + "-" + (phrase.l))].words);
				};
				
				// NOTE: count unique words in collection once
				if (!progress_data[phrase.c].words_unique) {
					progress_data[phrase.c].words_unique = this.countKeys(library_data.collections[phrase.c].words);
				};
			};
		};
		
		for (let $10 = 0, $11 = Object.keys(temp_refs), $12 = $11.length, key, value; $10 < $12; $10++){
			key = $11[$10];value = temp_refs[key];library_data.words[key].refs = value;
		};
		
		// NOTE: calculate progress for each colelction, lesson, phrase from data
		for (let $13 = 0, $14 = Object.keys(progress_data), $15 = $14.length, key, value; $13 < $15; $13++){
			key = $14[$13];value = progress_data[key];let learned = progress_data[key].words_learned;
			let weight = progress_data[key].words_total;
			progress_data[key].words_progress = this.calcPercent(learned,weight);
		};
		
		for (let $18 = library_data.collections, $16 = 0, $17 = Object.keys($18), $19 = $17.length, key, value; $16 < $19; $16++){
			key = $17[$16];value = $18[key];value.words_learned = progress_data[key].words_learned;
			value.words_progress = progress_data[key].words_progress;
			value.words_total = progress_data[key].words_total;
			value.words_unique = progress_data[key].words_unique;
		};
		
		for (let $22 = library_data.lessons, $20 = 0, $21 = Object.keys($22), $23 = $21.length, key, value; $20 < $23; $20++){
			key = $21[$20];value = $22[key];value.words_learned = progress_data[key].words_learned;
			value.words_progress = progress_data[key].words_progress;
			value.words_total = progress_data[key].words_total;
			value.words_unique = progress_data[key].words_unique;
		};
		
		for (let $26 = library_data.phrases, $24 = 0, $25 = Object.keys($26), $27 = $25.length, key, value; $24 < $27; $24++){
			key = $25[$24];value = $26[key];value.words_learned = progress_data[key].words_learned;
			value.words_progress = progress_data[key].words_progress;
			value.words_total = progress_data[key].words_total;
			value.words_unique = progress_data[key].words_unique;
		};
		
		return library_data;
		
		
	}
	countKeys(obj){
		return Object.keys(obj).length;
	}
	calcPercent(learned,total){
		return Math.round(learned / total * 100);
	}
	
	// calculates progress from words already learned by the user
	calcAllProgress(){
		state.learning_data.user_progress = this.calcUserProgress(collections_data);
		
		// NOTE: Generating a Flat Progress "1-1-1":10% instead of 1: {1: {1: 10$}}
		let progress = {};
		progress.user = state.learning_data.user_progress;
		state.learning_data.user_progress_learned_usage = this.calcUserLearnedUsage(collections_data);
		let col_array = state.learning_data.collection_progress = this.calcCollectionProgress(collections_data);
		for (let col_i = 0, $28 = iterable$(col_array), $29 = $28.length; col_i < $29; col_i++) {
			let col_prog = $28[col_i];
			progress[col_i] = col_prog;
		};
		state.learning_data.collection_learned_usage = this.calcCollectionLearnedUsage(collections_data);
		let col_les_array = state.learning_data.lesson_progress = this.calcLessonProgress(collections_data);
		for (let ci = 0, $30 = iterable$(col_les_array), $33 = $30.length; ci < $33; ci++) {
			let les_array = $30[ci];
			for (let li = 0, $31 = iterable$(les_array), $32 = $31.length; li < $32; li++) {
				let lesson_prog = $31[li];
				progress[("" + ci + "-" + li)] = lesson_prog;
			};
		};
		state.learning_data.lesson_learned_usage = this.calcLessonLearnedUsage(collections_data);
		let col_les_phr_array = state.learning_data.phrase_progress = this.calcPhraseProgress(collections_data);
		for (let ci = 0, $34 = iterable$(col_les_phr_array), $39 = $34.length; ci < $39; ci++) {
			let lesson_array = $34[ci];
			for (let li = 0, $35 = iterable$(lesson_array), $38 = $35.length; li < $38; li++) {
				let phrase_prog = $35[li];
				for (let pi = 0, $36 = iterable$(phrase_prog), $37 = $36.length; pi < $37; pi++) {
					let phrase_prog = $36[pi];
					progress[("" + ci + "-" + li + "-" + pi)] = phrase_prog;
				};
			};
		};
		state.learning_data.phrase_learned_usage = this.calcPhraseLearnedUsage(collections_data);
		return API.persistProgress(progress);
		
	}
	calcUserProgress(user_data){
		return this.calcUsageProgressOfObject(user_data);
	}
	
	calcCollectionProgress(user){
		let collection_progress = [];
		for (let $40 = 0, $41 = iterable$(user.collections), $42 = $41.length; $40 < $42; $40++) {
			let collection = $41[$40];
			collection_progress.push(this.calcUsageProgressOfObject(collection));
		};
		
		return collection_progress;
	}
	
	calcLessonProgress(user){
		let lesson_progress = [];
		for (let $43 = 0, $44 = iterable$(user.collections), $48 = $44.length; $43 < $48; $43++) {
			let collection = $44[$43];
			let lesson_progress_two = [];
			for (let $45 = 0, $46 = iterable$(collection.lessons), $47 = $46.length; $45 < $47; $45++) {
				let lesson = $46[$45];
				lesson_progress_two.push(this.calcUsageProgressOfObject(lesson));
			};
			lesson_progress.push(lesson_progress_two);
		};
		return lesson_progress;
	}
	
	calcPhraseProgress(user){
		let phrase_progress = [];
		for (let $49 = 0, $50 = iterable$(user.collections), $57 = $50.length; $49 < $57; $49++) {
			let collection = $50[$49];
			let phrase_progress_two = [];
			for (let $51 = 0, $52 = iterable$(collection.lessons), $56 = $52.length; $51 < $56; $51++) {
				let lesson = $52[$51];
				let phrase_progress_three = [];
				for (let $53 = 0, $54 = iterable$(lesson.phrases), $55 = $54.length; $53 < $55; $53++) {
					let phrase = $54[$53];
					phrase_progress_three.push(this.calcUsageProgressOfObject(phrase));
				};
				phrase_progress_two.push(phrase_progress_three);
			};
			phrase_progress.push(phrase_progress_two);
		};
		return phrase_progress;
	}
	
	calcUsageProgressOfObject(object){
		let percent = 0;
		for (let $60 = state.user_learned, $58 = 0, $59 = Object.keys($60), $61 = $59.length, word, is_learned; $58 < $61; $58++){
			// if word is not used in object
			word = $59[$58];is_learned = $60[word];if (object.word_usage_count[word]) {
				percent += object.word_usage_count[word] / object.word_usage_count_sum;
			};
		};
		percent = Math.round(percent * 100);
		return percent;
	}
	
	calcUserLearnedUsage(user){
		return this.calcLearnedUsageOfObject(user);
	}
	
	calcCollectionLearnedUsage(user){
		let collection_progress = [];
		for (let $62 = 0, $63 = iterable$(user.collections), $64 = $63.length; $62 < $64; $62++) {
			let collection = $63[$62];
			collection_progress.push(this.calcLearnedUsageOfObject(collection));
		};
		return collection_progress;
	}
	
	calcLessonLearnedUsage(user){
		let lesson_progress = [];
		for (let $65 = 0, $66 = iterable$(user.collections), $70 = $66.length; $65 < $70; $65++) {
			let collection = $66[$65];
			let lesson_progress_two = [];
			for (let $67 = 0, $68 = iterable$(collection.lessons), $69 = $68.length; $67 < $69; $67++) {
				let lesson = $68[$67];
				lesson_progress_two.push(this.calcLearnedUsageOfObject(lesson));
			};
			lesson_progress.push(lesson_progress_two);
		};
		return lesson_progress;
	}
	
	calcPhraseLearnedUsage(user){
		let phrase_progress = [];
		for (let $71 = 0, $72 = iterable$(user.collections), $79 = $72.length; $71 < $79; $71++) {
			let collection = $72[$71];
			let phrase_progress_two = [];
			for (let $73 = 0, $74 = iterable$(collection.lessons), $78 = $74.length; $73 < $78; $73++) {
				let lesson = $74[$73];
				let phrase_progress_three = [];
				for (let $75 = 0, $76 = iterable$(lesson.phrases), $77 = $76.length; $75 < $77; $75++) {
					let phrase = $76[$75];
					phrase_progress_three.push(this.calcLearnedUsageOfObject(phrase));
				};
				phrase_progress_two.push(phrase_progress_three);
			};
			phrase_progress.push(phrase_progress_two);
		};
		return phrase_progress;
	}
	
	// Calculates how many times a learned word has been used 
	calcLearnedUsageOfObject(input){
		let words_used = input.word_usage_count;
		let learned_words_usage = 0;
		for (let $82 = state.user_learned, $80 = 0, $81 = Object.keys($82), $83 = $81.length, word, is_learned; $80 < $83; $80++){
			// If words_used containes word
			word = $81[$80];is_learned = $82[word];if (words_used[word] && is_learned) {
				learned_words_usage += words_used[word];
			};
		};
		learned_words_usage = Math.round(learned_words_usage);
		return learned_words_usage;
	}
	
	// API[epic=API, seq=7] SAVE
	save(){
		return imba_locals.state = state;
	}
	
	// API[epic=API, seq=7] LOAD
	load(){
		if (imba_locals.state) { return state = imba_locals.state };
	}
	
	// API[epic=FrontEnd, seq=8] vida
	toggleIpa(){
		state.ipa = !state.ipa;
		return this.save();
		
		
	}
	// API[epic=FrontEnd, seq=8] AUTH
	toggleAuth(){
		state.auth = !state.auth;
		return this.save();
	}
	// API[epic=FrontEnd, seq=9] DARKMODE
	toggleDark(){
		state.dark = !state.dark;
		if (state.dark) { this.setDarkmode() } else {
			this.unsetDarkmode();
		};
		return this.save();
	}
	setDarkmode(){
		let root = globalThis.document.getElementsByTagName('html')[0];
		return root.flags.add('mod-darkmode');
	}
	unsetDarkmode(){
		let root = globalThis.document.getElementsByTagName('html')[0];
		return root.flags.remove('mod-darkmode');
	}
	// API[epic=FrontEnd, seq=10] LOGIN
	logIn(){
		if (is$(state.auth,false)) {
			state.auth = true;
		};
		return this.save();
		
	}
	// API[epic=FrontEnd, seq=11] LOGOUT
	logOut(){
		if (is$(state.auth,true)) {
			state.auth = false;
		};
		return this.save();
	}
	
	search(needle,haystack){
		let haystackLength = haystack.length;// tlen
		let needleLength = needle.length;// qlen
		if (needleLength > haystackLength) {
			// even if return is implicit in imba
						// it only returns the last expression.
						// so without return here it would merely continue
						// executing the rest of the function
			return false;
		};
		
		if (is$(needleLength,haystackLength)) {
			return is$(needle,haystack);
		};
		
		let needleLetter = 0;
		while (needleLetter < needleLength){
			let haystackLetter = 0;
			let match = false;
			let needleLetterCode = needle.charCodeAt(needleLetter++);
			while (haystackLetter < haystackLength){
				if (is$(haystack.charCodeAt(haystackLetter++),needleLetterCode)) {
					match = true;break;
				};
			};
			if (match) { continue; };
			return false;
		};
		return true;
	}
	static { register$(this,c$0,'Api',0) }
};
let api = new Api;

// LAYOUT[epic=LAYOUT, seq=19] App
let c$1 = Symbol();
class AppDashboardComponent extends imba_Component {
	
	build(){
		api.init();
		api.calcAllProgress();// DELETE: Delete when progress working from state.learning_data_flat
		state.learning_data_flat = api.calcAllProgressFlat();
		return api.save();
	}
	// FIXME: Not sure why state is not saving and being loaded
	
	render(){
		var $84, $85, $86, $88 = this._ns_ || '', $89, $91, $92, $93, $95, $96, $97, $98, $99, $100, $101, $102, $104, $105, $106, $108, $109, $110, $112, $113, $114, $116, $117, $118, $120, $121, $122, $124, $125, $126, $128, $129, $130, $132, $133, $134, $136, $137, $138, $140, $141, $142, $143;
		$84=this;
		$84[$beforeReconcile$]();
		($85=$86=1,$84[$87] === 1) || ($85=$86=0,$84[$87]=1);
		($91=$92=1,$89=$84[$90]) || ($91=$92=0,$84[$90]=$89=imba_createComponent('i-global',$84,`${$88}`,null));
		$91 || ($89.on$(`hotkey`,{options: ["shift+d"],$_: [function(e,$$) {
			return api.toggleDark();
		}]},this));
		$91 || ($89.on$(`hotkey`,{options: ["shift+i|v"],$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$91 || ($89.on$(`hotkey`,{options: ["shift+c+l"],$_: [function(e,$$) {
			return api.clear();
		}]},this));
		$91 || ($89.on$(`hotkey`,{options: ["shift+a"],$_: [function(e,$$) {
			return api.toggleAuth();
		}]},this));
		$91 || ($89.on$(`hotkey`,{options: ['enter|s'],$_: [function(e,$$) {
			return api.toggleLearned(state.active_word);
		}]},this));
		$91 || !$89.setup || $89.setup($92);
		$89[$afterVisit$]($92);
		$91 || $84[$appendChild$]($89);
		;
		($95=$96=1,$93=$84[$94]) || ($95=$96=0,$84[$94]=$93=imba_createComponent('layout-pancakes',$84,`mnu25o-ai ${$88}`,null));
		$97 = $93[$getSlot$]('top',$84);
		$98 = $93[$getSlot$]('middle',$84);
		$99 = $93[$getSlot$]('bottom',$84);
		$95 || ($100=imba_createElement('nav',$97,`${$88}`,null));
		$95 || ($100.slot="top");
		$95 || ($101=imba_createElement('div',$100,`mnu25o-ak width-container ${$88}`,null));
		($104=$105=1,$102=$84[$103]) || ($104=$105=0,$84[$103]=$102=imba_createComponent(TopNavigation,$101,`${$88}`,null));
		$104 || !$102.setup || $102.setup($105);
		$102[$afterVisit$]($105);
		$104 || $101[$appendChild$]($102);
		;
		;
		;
		($108=$109=1,$106=$84[$107]) || ($108=$109=0,$84[$107]=$106=imba_createElement('div',$98,`${$88}`,null));
		$108 || ($106.slot="middle");
		($112=$113=1,$110=$106[$111]) || ($112=$113=0,$106[$111]=$110=imba_createComponent('landing-page',$106,`${$88}`,null));
		$112 || ($110.route="/");
		$112 || !$110.setup || $110.setup($113);
		$110[$afterVisit$]($113);
		$112 || $106[$appendChild$]($110);
		;
		($116=$117=1,$114=$106[$115]) || ($116=$117=0,$106[$115]=$114=imba_createComponent('user-page',$106,`${$88}`,null));
		$116 || ($114.route="/@username");
		$116 || !$114.setup || $114.setup($117);
		$114[$afterVisit$]($117);
		$116 || $106[$appendChild$]($114);
		;
		($120=$121=1,$118=$106[$119]) || ($120=$121=0,$106[$119]=$118=imba_createComponent('app-dictionary-page',$106,`${$88}`,null));
		$120 || ($118.route="/dictionary");
		$120 || !$118.setup || $118.setup($121);
		$118[$afterVisit$]($121);
		$120 || $106[$appendChild$]($118);
		;
		($124=$125=1,$122=$106[$123]) || ($124=$125=0,$106[$123]=$122=imba_createComponent('phonetics-page',$106,`${$88}`,null));
		$124 || ($122.route="/phonetics");
		$124 || !$122.setup || $122.setup($125);
		$122[$afterVisit$]($125);
		$124 || $106[$appendChild$]($122);
		;
		($128=$129=1,$126=$106[$127]) || ($128=$129=0,$106[$127]=$126=imba_createComponent('info-page',$106,`${$88}`,null));
		$128 || ($126.route="/info");
		$128 || !$126.setup || $126.setup($129);
		$126[$afterVisit$]($129);
		$128 || $106[$appendChild$]($126);
		;
		($132=$133=1,$130=$106[$131]) || ($132=$133=0,$106[$131]=$130=imba_createElement('div',$106,`width-container ${$88}`,null));
		($136=$137=1,$134=$130[$135]) || ($136=$137=0,$130[$135]=$134=imba_createComponent(CollectionPage,$130,`${$88}`,null));
		$136 || ($134.route="/learn");
		$136 || !$134.setup || $134.setup($137);
		$134[$afterVisit$]($137);
		$136 || $130[$appendChild$]($134);
		;
		$132 || !$130.setup || $130.setup($133);
		$130[$afterVisit$]($133);
		;
		$108 || !$106.setup || $106.setup($109);
		$106[$afterVisit$]($109);
		;
		($140=$141=1,$138=$84[$139]) || ($140=$141=0,$84[$139]=$138=imba_createElement('div',$99,`mnu25o-au ${$88}`,null));
		$140 || ($138.slot="bottom");
		$140 || ($142=imba_createElement('span',$138,`mnu25o_au ${$88}`,"Currently in Development. Give feedback via ->"));
		;
		$140 || ($143=imba_createElement('a',$138,`mnu25o_au ${$88}`,"Telegram"));
		$140 || ($143.href="https://t.me/+GFitY1neUaQxMzQ1");
		$140 || ($143.target="_blank");
		;
		;
		$95 || !$93.setup || $93.setup($96);
		$93[$afterVisit$]($96);
		$95 || $84[$appendChild$]($93);
		;
		$84[$afterReconcile$]($86);
		return $84;
	}
	static {
		register$(this,c$1,'app-dashboard',2);
		imba_defineTag('app-dashboard',this,{cssid: 'mnu25o-af'});
	}
};

// TAG[epic=PAGE, seq=1] landing-page
let c$2 = Symbol();
class LandingPageComponent extends imba_Component {
	
	render(){
		var $144, $145, $146, $148 = this._ns_ || '', $149, $150, $151, $152, $153, $155, $156, $157, $158;
		$144=this;
		$144[$beforeReconcile$]();
		($145=$146=1,$144[$147] === 1) || ($145=$146=0,$144[$147]=1);
		((!$145||$146&2) && $144.flagSelf$('mnu25o-ay'));
		$145 || ($149=imba_createElement('div',$144,`mnu25o-az ${$148}`,null));
		$145 || ($150=imba_createElement('div',$149,`mnu25o-ba ${$148}`,"Learn 4000+ Khmer words"));
		;
		$145 || ($151=imba_createElement('div',$149,`mnu25o-bb ${$148}`,"by reading Bible stories"));
		;
		$145 || ($152=imba_createElement('div',$149,`mnu25o-bc ${$148}`,null));
		;
		($155=$156=1,$153=$144[$154]) || ($155=$156=0,$144[$154]=$153=imba_createElement('button',$149,`button ${$148}`,"Start Learning"));
		$155 || ($153.routeΞto="/collection/0/0/0/0/");
		$155 || !$153.setup || $153.setup($156);
		$153[$afterVisit$]($156);
		;
		;
		$145 || ($157=imba_createElement('div',$144,`${$148}`,null));
		$145 || ($158=imba_createElement('iframe',$157,`mnu25o-bf ${$148}`,null));
		$145 || ($158.src="https://www.youtube.com/embed/20dpm0bNjIU");
		$145 || ($158.title="YouTube video player");
		$145 || ($158.frameBorder="0");
		$145 || ($158.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
		$145 || ($158.allowfullscreen='allowfullscreen');
		;
		;
		$144[$afterReconcile$]($146);
		return $144;
	}
	static {
		register$(this,c$2,'landing-page',2);
		imba_defineTag('landing-page',this,{cssns: 'mnu25o_ax',cssid: 'mnu25o-ax'});
	}
};

// TAG[epic=NAV, seq=1] TopNavigation
let c$3 = Symbol();
class TopNavigation extends imba_Component {
	
	toggleLeftNav(){
		state.left = !state.left;
		api.save();
		return imba_commit();
	}
	logOut(){
		api.logOut();
		return imba_commit();
	}
	render(){
		var $159, $160, $161, $163, $165, $166, $167, $169, $170, $171, $172, $174, $175, $176, $177, $179, $180, $181, $182, $184, $185, $186;
		$159=this;
		$159[$beforeReconcile$]();
		($160=$161=1,$159[$162] === 1) || ($160=$161=0,$159[$162]=1);
		($165=$166=1,$163=$159[$164]) || ($165=$166=0,$159[$164]=$163=imba_createComponent('cambodiau-logo',$159,'mnu25o-bi mnu25o_bg',null));
		$165 || ($163.routeΞto="/");
		$165 || !$163.setup || $163.setup($166);
		$163[$afterVisit$]($166);
		$165 || $159[$appendChild$]($163);
		;
		($169=$170=1,$167=$159[$168]) || ($169=$170=0,$159[$168]=$167=imba_createElement('a',$159,'mnu25o_bg',null));
		$169 || ($167.routeΞto="/learn");
		$169 || ($171=imba_createElement('div',$167,'mnu25o_bg',"Learn"));
		;
		$169 || !$167.setup || $167.setup($170);
		$167[$afterVisit$]($170);
		;
		($174=$175=1,$172=$159[$173]) || ($174=$175=0,$159[$173]=$172=imba_createElement('a',$159,'mnu25o_bg',null));
		$174 || ($172.routeΞto="/dictionary");
		$174 || ($176=imba_createElement('div',$172,'mnu25o_bg',"app-dictionary"));
		;
		$174 || !$172.setup || $172.setup($175);
		$172[$afterVisit$]($175);
		;
		($179=$180=1,$177=$159[$178]) || ($179=$180=0,$159[$178]=$177=imba_createElement('a',$159,'mnu25o_bg',null));
		$179 || ($177.routeΞto="/phonetics");
		$179 || ($181=imba_createElement('div',$177,'mnu25o_bg',"Phonetics"));
		;
		$179 || !$177.setup || $177.setup($180);
		$177[$afterVisit$]($180);
		;
		($184=$185=1,$182=$159[$183]) || ($184=$185=0,$159[$183]=$182=imba_createElement('a',$159,'mnu25o_bg',null));
		$184 || ($182.routeΞto="/info");
		$184 || ($186=imba_createElement('div',$182,'mnu25o_bg',"Info"));
		;
		$184 || !$182.setup || $182.setup($185);
		$182[$afterVisit$]($185);
		;
		$159[$afterReconcile$]($161);
		return $159;
	}
	static {
		register$(this,c$3,'TopNavigation',2);
		imba_defineTag('top-navigation-mnu25o-br',this,{cssns: 'mnu25o_bg',cssid: 'mnu25o-bg',name: 'TopNavigation'});
	}
};

let c$4 = Symbol();
class AppDictionaryPageComponent extends imba_Component {
	
	render(){
		var $187, $188, $189, $191 = this._ns_ || '', $192, $194, $195, $196, $198, $205, $207, $214, $216, $223, $224, $226, $227, $228, $230, $231;
		{$187=this;
		$187[$beforeReconcile$]();
		($188=$189=1,$187[$190] === 1) || ($188=$189=0,$187[$190]=1);
		let learned_length = Object.keys(state.user_learned).length;
		let dict_length = Object.keys(dictionary).length;
		let learned_percent = state.learning_data.user_progress;
		let learned_usage = state.learning_data.user_progress_learned_usage;
		let all_word_usage_count = collections_data.word_usage_count_sum;
		let all_wordset_length = collections_data.word_set_count;
		let dict_percent = Math.floor((learned_length / dict_length) * 1000) / 10;
		let lessons_percent = Math.floor((learned_length / all_wordset_length) * 1000) / 10;
		($192=$187[$193]) || ($187[$193]=$192=imba_createElement('div',$187,`page-wrapper ${$191}`,null));
		$188 || ($194=imba_createElement('div',$192,`mnu25o-bv wrapper mnu25o_bu ${$191}`,null));
		$188 || ($195=imba_createElement('h2',$194,`mnu25o_bu ${$191}`,"You have learned "));
		;
		($196=$187[$197]) || ($187[$197]=$196=imba_createElement('p',$194,`mnu25o-bx mnu25o_bu ${$191}`,null));
		($198=lessons_percent,($198===$187[$200]&&$188) || ($187[$199] = $196[$placeChild$]($187[$200]=$198,128,$187[$199])));
		$188 || $196[$placeChild$]("% of all words used in all lessons. (");
		($198=learned_length,($198===$187[$202]&&$188) || ($187[$201] = $196[$placeChild$]($187[$202]=$198,0,$187[$201])));
		$188 || $196[$placeChild$](" of ");
		($198=all_wordset_length,($198===$187[$204]&&$188) || ($187[$203] = $196[$placeChild$]($187[$204]=$198,0,$187[$203])));
		$188 || $196[$placeChild$](")");
		;
		($205=$187[$206]) || ($187[$206]=$205=imba_createElement('p',$194,`mnu25o-by mnu25o_bu ${$191}`,null));
		($207=learned_percent,($207===$187[$209]&&$188) || ($187[$208] = $205[$placeChild$]($187[$209]=$207,128,$187[$208])));
		$188 || $205[$placeChild$]("% of all word instances in all lessons. (");
		($207=learned_usage,($207===$187[$211]&&$188) || ($187[$210] = $205[$placeChild$]($187[$211]=$207,0,$187[$210])));
		$188 || $205[$placeChild$](" of ");
		($207=all_word_usage_count,($207===$187[$213]&&$188) || ($187[$212] = $205[$placeChild$]($187[$213]=$207,0,$187[$212])));
		$188 || $205[$placeChild$](")");
		;
		($214=$187[$215]) || ($187[$215]=$214=imba_createElement('p',$194,`mnu25o-bz mnu25o_bu ${$191}`,null));
		($216=dict_percent,($216===$187[$218]&&$188) || ($187[$217] = $214[$placeChild$]($187[$218]=$216,128,$187[$217])));
		$188 || $214[$placeChild$]("% of all words in this dictionary. (");
		($216=learned_length,($216===$187[$220]&&$188) || ($187[$219] = $214[$placeChild$]($187[$220]=$216,0,$187[$219])));
		$188 || $214[$placeChild$](" of ");
		($216=dict_length,($216===$187[$222]&&$188) || ($187[$221] = $214[$placeChild$]($187[$222]=$216,0,$187[$221])));
		$188 || $214[$placeChild$](")");
		;
		;
		;
		$188 || ($223=imba_createElement('div',$187,`page-wrapper ${$191}`,null));
		($226=$227=1,$224=$187[$225]) || ($226=$227=0,$187[$225]=$224=imba_createComponent('app-dictionary',$223,`${$191}`,null));
		$226 || !$224.setup || $224.setup($227);
		$224[$afterVisit$]($227);
		$226 || $223[$appendChild$]($224);
		;
		($230=$231=1,$228=$187[$229]) || ($230=$231=0,$187[$229]=$228=imba_createComponent(WordCard,$223,`mnu25o-cc card ${$191}`,null));
		$230 || !$228.setup || $228.setup($231);
		$228[$afterVisit$]($231);
		$230 || $223[$appendChild$]($228);
		;
		;
		$187[$afterReconcile$]($189);
		return $187;
		};
	}
	static {
		register$(this,c$4,'app-dictionary-page',2);
		imba_defineTag('app-dictionary-page',this,{cssns: 'mnu25o_bs',cssid: 'mnu25o-bs'});
	}
};
let c$5 = Symbol();
class AppDictionaryComponent extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.track = ($$ && ($0 = $$.track) !== undefined) ? ($0) : "";
		this.query = ($$ && ($0 = $$.query) !== undefined) ? ($0) : "";
		
	}
	render(){
		var $249, $278, $304, $232, $233, $234, $236 = this._ns_ || '', $237, $238, $239, $241, $242, $244, $245, $246, $247, $251, $253, $254, $255, $258, $261, $259, $262, $265, $267, $268, $270, $271, $273, $274, $276, $280, $281, $282, $286, $287, $289, $290, $291, $295, $296, $297, $301, $302, $306, $307, $308, $312, $313;
		$232=this;
		$232[$beforeReconcile$]();
		($233=$234=1,$232[$235] === 1) || ($233=$234=0,$232[$235]=1);
		$233 || ($237=imba_createElement('div',$232,`mnu25o-cf searchbar ${$236}`,null));
		$233 || ($238=imba_createElement('h1',$237,`${$236}`,null));
		;
		($241=$242=1,$239=$232[$240]) || ($241=$242=0,$232[$240]=$239=imba_createElement('input',$237,`${$236}`,null));
		$241 || ($239.type="text");
		$244=$232[$243] || ($232[$243]=$239.bind$('data',[this,'query']));
		$241 || ($239.placeholder="search khmer | vida | ipa | definition");
		$241 || !$239.setup || $239.setup($242);
		$239[$afterVisit$]($242);
		;
		;
		$233 || ($245=imba_createElement('div',$232,`mnu25o-ci row ${$236}`,null));
		$233 || ($245.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$233 || ($246=imba_createElement('span',$245,`${$236}`,"khmer"));
		;
		($247=$232[$248]) || ($232[$248]=$247=imba_createElement('span',$245,`${$236}`,null));
		$249 = null;
		if (state.ipa) { ($249="ipa") } else {
			($249="vida");
		};
		($232[$250] = $247[$placeChild$]($249,0,$232[$250]));
		;
		$233 || ($251=imba_createElement('span',$245,`${$236}`,"google"));
		;
		;
		($253 = $232[$252]) || ($232[$252]=$253=imba_createKeyedList(1280,$232));
		$254 = 0;
		$255=$253.$;
		for (let $256 = 0, $257 = Object.keys(dictionary), $315 = $257.length, word, info; $256 < $315; $256++){
			word = $257[$256];info = dictionary[word];if (fuzzy.search(this.query,word) | fuzzy.search(this.query,info?.vida) | fuzzy.search(this.query,info?.google) | fuzzy.search(this.query,info?.ipa)) {
				($261=$262=1,$258=($259=$255[$getRenderContext$]($260)).get($254)) || ($261=$262=0,$259.set($254,$258=imba_createElement('div',$253,`row ${$236}`,null)));
				$261||($258[$$up$]=$253);
				($265=(state.user_learned.hasOwnProperty(word)||undefined),$265===$258[$264]||($262|=2,$258[$264]=$265));
				$267 = $258[$266] || ($258[$266]={$_: [function(e,$$,_2) {
					return state.active_word = _2;
				},null]});
				$267.$_[1]=word;
				$261 || $258.on$(`click`,$267,this);
				($262&2 && $258.flag$(`row ${$236}`+' '+($258[$264] ? `learned` : '')));
				($270=$271=1,$268=$258[$269]) || ($270=$271=0,$258[$269]=$268=imba_createElement('a',$258,`${$236}`,null));
				($273=("http://sealang.net/api/api.pl?query=" + word + "&service=dictionary"),$273===$258[$272] || ($268.href=$258[$272]=$273));
				$270 || ($268.target="_blank");
				($274=$258[$275]) || ($258[$275]=$274=imba_createElement('span',$268,`khmer ${$236}`,null));
				($276=word,$276===$258[$277] || $274.text$(String($258[$277]=$276)));
				;
				;
				$278 = null;
				if (state.ipa) {
					if (info?.ipa) { ($280=$281=1,$278=$258[$279]) || ($280=$281=0,$258[$279]=$278=imba_createElement('span',null,`mono ${$236}`,null));
					$280||($278[$$up$]=$258);
					($282=info?.ipa,($282===$278[$284]&&$280) || ($278[$283] = $278[$placeChild$]($278[$284]=$282,384,$278[$283])));
					 } else {
						($286=$287=1,$278=$258[$285]) || ($286=$287=0,$258[$285]=$278=imba_createElement('span',null,`err ${$236}`,'ipa coming soon'));
						$286||($278[$$up$]=$258);
					};
				} else {
					if ((info?.vida)) {
						($289=$290=1,$278=$258[$288]) || ($289=$290=0,$258[$288]=$278=imba_createElement('span',null,`mono ${$236}`,null));
						$289||($278[$$up$]=$258);
						($291=info?.vida,($291===$278[$293]&&$289) || ($278[$292] = $278[$placeChild$]($278[$293]=$291,384,$278[$292])));
						
					} else if ((info?.vida_auto)) {
						($295=$296=1,$278=$258[$294]) || ($295=$296=0,$258[$294]=$278=imba_createElement('span',null,`mono err ${$236}`,null));
						$295||($278[$$up$]=$258);
						($297=info?.vida_auto,($297===$278[$299]&&$295) || ($278[$298] = $278[$placeChild$]($278[$299]=$297,384,$278[$298])));
						
					} else {
						($301=$302=1,$278=$258[$300]) || ($301=$302=0,$258[$300]=$278=imba_createElement('span',null,`err ${$236}`,'vida coming soon'));
						$301||($278[$$up$]=$258);
						
					};
				};
				($258[$303] = $258[$placeChild$]($278,0,$258[$303]));
				$304 = null;
				if (info?.google) { ($306=$307=1,$304=$258[$305]) || ($306=$307=0,$258[$305]=$304=imba_createElement('span',null,`${$236}`,null));
				$306||($304[$$up$]=$258);
				($308=info?.google,($308===$304[$310]&&$306) || ($304[$309] = $304[$placeChild$]($304[$310]=$308,384,$304[$309])));
				 } else {
					($312=$313=1,$304=$258[$311]) || ($312=$313=0,$258[$311]=$304=imba_createElement('span',null,`err ${$236}`,'-'));
					$312||($304[$$up$]=$258);
				};
				($258[$314] = $258[$placeChild$]($304,0,$258[$314]));
				$253.push($258,$254++,$259);
			};
		};$253[$afterVisit$]($254);;
		$232[$afterReconcile$]($234);
		return $232;
	}
	static {
		register$(this,c$5,'app-dictionary',2);
		imba_defineTag('app-dictionary',this,{cssns: 'mnu25o_cd',cssid: 'mnu25o-cd'});
	}
};
let c$6 = Symbol();
class UserPageComponent extends imba_Component {
	
	render(){
		var $316, $317, $318, $320 = this._ns_ || '', $321, $322, $324, $325;
		$316=this;
		$316[$beforeReconcile$]();
		($317=$318=1,$316[$319] === 1) || ($317=$318=0,$316[$319]=1);
		$317 || ($321=imba_createElement('div',$316,`width-container ${$320}`,null));
		($324=$325=1,$322=$316[$323]) || ($324=$325=0,$316[$323]=$322=imba_createComponent('user-page-owned-collections',$321,`${$320}`,null));
		$324 || !$322.setup || $322.setup($325);
		$322[$afterVisit$]($325);
		$324 || $321[$appendChild$]($322);
		;
		;
		$316[$afterReconcile$]($318);
		return $316;
	}
	static {
		register$(this,c$6,'user-page',2);
		imba_defineTag('user-page',this,{cssid: 'mnu25o-cw'});
	}
};
// TAG[epic=PAGE, seq=1] cms-admin-page
let c$7 = Symbol();
class CmsAdminPageComponent extends imba_Component {
	render(){
		var $326, $327, $328, $330 = this._ns_ || '', $331, $332, $334, $335, $336, $338, $339;
		$326=this;
		$326[$beforeReconcile$]();
		($327=$328=1,$326[$329] === 1) || ($327=$328=0,$326[$329]=1);
		$327 || ($331=imba_createElement('h1',$326,`mnu25o-db ${$330}`,"Learn 4000+ bible related words"));
		;
		($334=$335=1,$332=$326[$333]) || ($334=$335=0,$326[$333]=$332=imba_createElement('div',$326,`${$330}`,null));
		$334 || ($332.route="/cms/");
		($338=$339=1,$336=$326[$337]) || ($338=$339=0,$326[$337]=$336=imba_createComponent(CMSLearnModuleList,$332,`${$330}`,null));
		$338 || !$336.setup || $336.setup($339);
		$336[$afterVisit$]($339);
		$338 || $332[$appendChild$]($336);
		;
		$334 || !$332.setup || $332.setup($335);
		$332[$afterVisit$]($335);
		;
		$326[$afterReconcile$]($328);
		return $326;
	}
	static {
		register$(this,c$7,'cms-admin-page',2);
		imba_defineTag('cms-admin-page',this,{});
	}
};

let c$8 = Symbol();
class CMSLearnModuleList extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.collection_list = ($$ && ($0 = $$.collection_list) !== undefined) ? ($0) : [
			{title: "module one",
			description: "description one",
			imageURL: "url one",
			price: 20,
			language: "kh",
			word_set: ["មួយ","ពីរ","បី"],
			word_set_length: 3,
			word_usage_count: {"មួយ": 4,"ពីរ": 4,"បី": 4},
			word_usage_count_sum: 12,
			number_of_lessons: 2,
			lessons: [
				{title: "lesson one",
				imageURL: "lesson url one",
				word_set: ["មួយ","ពីរ","បី"],
				word_set_length: 3,
				word_usage_count: {"មួយ": 2,"ពីរ": 2,"បី": 2},
				word_usage_count_sum: 6,
				number_of_chapters: 2,
				chapters: [
					{number_eng: "1",
					number_khmer: "១",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3},
					{number_eng: "2",
					number_khmer: "២",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3}
				]},
				{title: "lesson two",
				imageURL: "lesson url two",
				word_set: ["មួយ","ពីរ","បី"],
				word_set_length: 3,
				word_usage_count: {"មួយ": 2,"ពីរ": 2,"បី": 2},
				word_usage_count_sum: 6,
				number_of_chapters: 2,
				chapters: [
					{number_eng: "1",
					number_khmer: "១",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3},
					{number_eng: "2",
					number_khmer: "២",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3}
				]}
			]},
			{title: "module two",
			description: "description two",
			imageURL: "url two",
			price: 20,
			language: "kh",
			word_set: ["មួយ","ពីរ","បី"],
			word_set_length: 3,
			word_usage_count: {"មួយ": 4,"ពីរ": 4,"បី": 4},
			word_usage_count_sum: 12,
			number_of_lessons: 2,
			lessons: [
				{title: "lesson one",
				imageURL: "lesson url one",
				word_set: ["មួយ","ពីរ","បី"],
				word_set_length: 3,
				word_usage_count: {"មួយ": 2,"ពីរ": 2,"បី": 2},
				word_usage_count_sum: 6,
				number_of_chapters: 2,
				chapters: [
					{number_eng: "1",
					number_khmer: "១",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3},
					{number_eng: "2",
					number_khmer: "២",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3}
				]},
				{title: "lesson two",
				imageURL: "lesson url two",
				word_set: ["មួយ","ពីរ","បី"],
				word_set_length: 3,
				word_usage_count: {"មួយ": 2,"ពីរ": 2,"បី": 2},
				word_usage_count_sum: 6,
				number_of_chapters: 2,
				chapters: [
					{number_eng: "1",
					number_khmer: "១",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3},
					{number_eng: "2",
					number_khmer: "២",
					khmer: "មួយ ពីរ បី",
					english_meaning: "one two three",
					vida_phonetics: "muy pii bai",
					ipa_phonetics: "muy pii bai",
					word_set: ["មួយ","ពីរ","បី"],
					word_set_length: 3,
					word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
					word_usage_count_sum: 3}
				]}
			]}
		];
		
	}
	render(){
		var $340, $341, $342, $344, $346, $347, $348, $351, $352, $353;
		$340=this;
		$340[$beforeReconcile$]();
		($341=$342=1,$340[$343] === 1) || ($341=$342=0,$340[$343]=1);
		$341 || ($344=imba_createElement('button',$340,'mnu25o-df',"Add Modules"));
		;
		($346 = $340[$345]) || ($340[$345]=$346=imba_createIndexedList(256,$340));
		$347 = 0;
		$348=$346.$;
		for (let $349 = 0, $350 = iterable$(this.collection_list), $355 = $350.length; $349 < $355; $349++) {
			let item = $350[$349];
			($352=$353=1,$351=$348[$347]) || ($352=$353=0,$348[$347]=$351=imba_createComponent('cms-collection-card',$346,null,null));
			$352||($351[$$up$]=$346);
			(item===$351[$354] || ($351.item=$351[$354]=item));
			$352 || !$351.setup || $351.setup($353);
			$351[$afterVisit$]($353);
			$347++;
			
		};$346[$afterVisit$]($347);;
		$340[$afterReconcile$]($342);
		return $340;
	}
	static {
		register$(this,c$8,'CMSLearnModuleList',2);
		imba_defineTag('cmslearn-module-list-mnu25o-dh',this,{name: 'CMSLearnModuleList'});
	}
};

let c$9 = Symbol();
class CmsCollectionCardComponent extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.meta_is_editable = ($$ && ($0 = $$.meta_is_editable) !== undefined) ? ($0) : false;
		
	}
	toggleEditable(){
		this.meta_is_editable = !(this.meta_is_editable);
		return imba_commit();
	}
	render(){
		var $371, $356, $357, $358, $360 = this._ns_ || '', $361, $363, $366, $367, $369, $370, $373, $374, $375, $376, $378, $379, $381;
		$356=this;
		$356[$beforeReconcile$]();
		($357=$358=1,$356[$359] === 1) || ($357=$358=0,$356[$359]=1);
		((!$357||$358&2) && $356.flagSelf$('mnu25o-dj'));
		($361=$356[$362]) || ($356[$362]=$361=imba_createElement('h1',$356,`mnu25o-dk ${$360}`,null));
		($363=this.item.title,($363===$356[$365]&&$357) || ($356[$364] = $361[$placeChild$]($356[$365]=$363,384,$356[$364])));
		;
		$357 || ($366=imba_createElement('div',$356,`mnu25o-dl ${$360}`,null));
		($369=$370=1,$367=$356[$368]) || ($369=$370=0,$356[$368]=$367=imba_createElement('button',$366,`mnu25o-dm ${$360}`,null));
		$369 || ($367.on$(`click`,{toggleEditable: true},this));
		$371 = null;
		if (this.meta_is_editable) {
			($371="save module");
		} else {
			($371="edit module");
		};
		($356[$372] = $367[$placeChild$]($371,0,$356[$372]));
		;
		$357 || ($373=imba_createElement('button',$366,`mnu25o-dn ${$360}`,"delete"));
		;
		;
		$357 || ($374=imba_createElement('pre',$356,`${$360}`,null));
		$357 || ($375=imba_createElement('code',$374,`${$360}`,null));
		($378=$379=1,$376=$356[$377]) || ($378=$379=0,$356[$377]=$376=imba_createElement('div',$375,`mnu25o-dq meta ${$360}`,null));
		($381=this.meta_is_editable,$381===$356[$380] || ($376.contentEditable=$356[$380]=$381));
		($381=(this.meta_is_editable||undefined),$381===$356[$383]||($379|=2,$356[$383]=$381));
		($379&2 && $376.flag$(`mnu25o-dq meta ${$360}`+' '+($356[$383] ? `editable` : '')));
		(imba_renderContext.context=($356[$385] || ($356[$385]={_:$376})),$381=JSON.stringify(this.item,null,4),imba_renderContext.context=null,($381===$356[$386]&&$378) || ($356[$384] = $376[$placeChild$]($356[$386]=$381,256,$356[$384])));
		;
		;
		;
		$356[$afterReconcile$]($358);
		return $356;
	}
	static {
		register$(this,c$9,'cms-collection-card',2);
		imba_defineTag('cms-collection-card',this,{cssns: 'mnu25o_di'});
	}
};
let c$10 = Symbol();
class CMSLessonList extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.lesson_list = ($$ && ($0 = $$.lesson_list) !== undefined) ? ($0) : [
			{title: "lesson one",
			imageURL: "lesson url one",
			word_set: ["មួយ","ពីរ","បី"],
			word_set_length: 3,
			word_usage_count: {"មួយ": 2,"ពីរ": 2,"បី": 2},
			word_usage_count_sum: 6,
			number_of_chapters: 2},
			{title: "lesson two",
			imageURL: "lesson url two",
			word_set: ["មួយ","ពីរ","បី"],
			word_set_length: 3,
			word_usage_count: {"មួយ": 2,"ពីរ": 2,"បី": 2},
			word_usage_count_sum: 6,
			number_of_lessons: 2}
		];
		
	}
	render(){
		var $387, $388, $389, $391, $393, $394, $395, $398, $399, $400;
		$387=this;
		$387[$beforeReconcile$]();
		($388=$389=1,$387[$390] === 1) || ($388=$389=0,$387[$390]=1);
		$388 || ($391=imba_createElement('button',$387,'mnu25o-ds',"add lesson"));
		;
		($393 = $387[$392]) || ($387[$392]=$393=imba_createIndexedList(256,$387));
		$394 = 0;
		$395=$393.$;
		for (let $396 = 0, $397 = iterable$(this.lesson_list), $402 = $397.length; $396 < $402; $396++) {
			let item = $397[$396];
			($399=$400=1,$398=$395[$394]) || ($399=$400=0,$395[$394]=$398=imba_createComponent(CMSLessonCard,$393,null,null));
			$399||($398[$$up$]=$393);
			(item===$398[$401] || ($398.item=$398[$401]=item));
			$399 || !$398.setup || $398.setup($400);
			$398[$afterVisit$]($400);
			$394++;
			
		};$393[$afterVisit$]($394);;
		$387[$afterReconcile$]($389);
		return $387;
	}
	static {
		register$(this,c$10,'CMSLessonList',2);
		imba_defineTag('cmslesson-list-mnu25o-du',this,{name: 'CMSLessonList'});
	}
};

let c$11 = Symbol();
class CMSLessonCard extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.meta_is_editable = ($$ && ($0 = $$.meta_is_editable) !== undefined) ? ($0) : false;
		
	}
	toggleEditable(){
		this.meta_is_editable = !(this.meta_is_editable);
		return imba_commit();
	}
	render(){
		var $412, $403, $404, $405, $407, $408, $410, $411, $414, $415, $416, $417, $419, $420, $422, $428, $430, $431;
		$403=this;
		$403[$beforeReconcile$]();
		($404=$405=1,$403[$406] === 1) || ($404=$405=0,$403[$406]=1);
		((!$404||$405&2) && $403.flagSelf$('mnu25o-dw'));
		$404 || ($407=imba_createElement('div',$403,'mnu25o-dx mnu25o_dv',null));
		($410=$411=1,$408=$403[$409]) || ($410=$411=0,$403[$409]=$408=imba_createElement('button',$407,'mnu25o-dy mnu25o_dv',null));
		$410 || ($408.on$(`click`,{toggleEditable: true},this));
		$412 = null;
		if (this.meta_is_editable) {
			($412="save lesson");
		} else {
			($412="edit lesson");
		};
		($403[$413] = $408[$placeChild$]($412,0,$403[$413]));
		;
		$404 || ($414=imba_createElement('button',$407,'mnu25o-dz mnu25o_dv',"delete lesson"));
		;
		;
		$404 || ($415=imba_createElement('pre',$403,'mnu25o_dv',null));
		$404 || ($416=imba_createElement('code',$415,'mnu25o_dv',null));
		($419=$420=1,$417=$403[$418]) || ($419=$420=0,$403[$418]=$417=imba_createElement('div',$416,'meta mnu25o_dv',null));
		($422=this.meta_is_editable,$422===$403[$421] || ($417.contentEditable=$403[$421]=$422));
		($422=(this.meta_is_editable||undefined),$422===$403[$424]||($420|=2,$403[$424]=$422));
		($420&2 && $417.flag$('meta mnu25o_dv'+' '+($403[$424] ? `editable` : '')));
		(imba_renderContext.context=($403[$426] || ($403[$426]={_:$417})),$422=JSON.stringify(this.item,null,4),imba_renderContext.context=null,($422===$403[$427]&&$419) || ($403[$425] = $417[$placeChild$]($403[$427]=$422,384,$403[$425])));
		;
		;
		;
		($430=$431=1,$428=$403[$429]) || ($430=$431=0,$403[$429]=$428=imba_createElement('button',$403,'mnu25o-ed mnu25o_dv',"see chapters"));
		$430 || ($428.routeΞto="/cms/0/0");
		$430 || !$428.setup || $428.setup($431);
		$428[$afterVisit$]($431);
		;
		$403[$afterReconcile$]($405);
		return $403;
	}
	static {
		register$(this,c$11,'CMSLessonCard',2);
		imba_defineTag('cmslesson-card-mnu25o-ee',this,{cssns: 'mnu25o_dv',name: 'CMSLessonCard'});
	}
};

let c$12 = Symbol();
class CMSChapterList extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.chapter_list = ($$ && ($0 = $$.chapter_list) !== undefined) ? ($0) : [
			{number_eng: "1",
			number_khmer: "១",
			khmer: "មួយ ពីរ បី",
			english_meaning: "one two three",
			vida_phonetics: "muy pii bai",
			ipa_phonetics: "muy pii bai",
			word_set: ["មួយ","ពីរ","បី"],
			word_set_length: 3,
			word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
			word_usage_count_sum: 3},
			{number_eng: "2",
			number_khmer: "២",
			khmer: "មួយ ពីរ បី",
			english_meaning: "one two three",
			vida_phonetics: "muy pii bai",
			ipa_phonetics: "muy pii bai",
			word_set: ["មួយ","ពីរ","បី"],
			word_set_length: 3,
			word_usage_count: {"មួយ": 1,"ពីរ": 1,"បី": 1},
			word_usage_count_sum: 3}
		];
		
	}
	render(){
		var $432, $433, $434, $436, $438, $439, $440, $443, $444, $445;
		$432=this;
		$432[$beforeReconcile$]();
		($433=$434=1,$432[$435] === 1) || ($433=$434=0,$432[$435]=1);
		$433 || ($436=imba_createElement('button',$432,'mnu25o-eg',"add chapter"));
		;
		($438 = $432[$437]) || ($432[$437]=$438=imba_createIndexedList(256,$432));
		$439 = 0;
		$440=$438.$;
		for (let $441 = 0, $442 = iterable$(this.chapter_list), $447 = $442.length; $441 < $447; $441++) {
			let item = $442[$441];
			($444=$445=1,$443=$440[$439]) || ($444=$445=0,$440[$439]=$443=imba_createComponent(CMSChapterCard,$438,null,null));
			$444||($443[$$up$]=$438);
			(item===$443[$446] || ($443.item=$443[$446]=item));
			$444 || !$443.setup || $443.setup($445);
			$443[$afterVisit$]($445);
			$439++;
			
		};$438[$afterVisit$]($439);;
		$432[$afterReconcile$]($434);
		return $432;
		
	}
	static {
		register$(this,c$12,'CMSChapterList',2);
		imba_defineTag('cmschapter-list-mnu25o-ei',this,{name: 'CMSChapterList'});
	}
};
let c$13 = Symbol();
class CMSChapterCard extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.meta_is_editable = ($$ && ($0 = $$.meta_is_editable) !== undefined) ? ($0) : false;
		
	}
	toggleEditable(){
		this.meta_is_editable = !(this.meta_is_editable);
		return imba_commit();
	}
	render(){
		var $457, $448, $449, $450, $452, $453, $455, $456, $459, $460, $461, $462, $464, $465, $467;
		$448=this;
		$448[$beforeReconcile$]();
		($449=$450=1,$448[$451] === 1) || ($449=$450=0,$448[$451]=1);
		((!$449||$450&2) && $448.flagSelf$('mnu25o-ek'));
		$449 || ($452=imba_createElement('div',$448,'mnu25o-el mnu25o_ej',null));
		($455=$456=1,$453=$448[$454]) || ($455=$456=0,$448[$454]=$453=imba_createElement('button',$452,'mnu25o-em mnu25o_ej',null));
		$455 || ($453.on$(`click`,{toggleEditable: true},this));
		$457 = null;
		if (this.meta_is_editable) {
			($457="save chapter");
		} else {
			($457="edit chapter");
		};
		($448[$458] = $453[$placeChild$]($457,0,$448[$458]));
		;
		$449 || ($459=imba_createElement('button',$452,'mnu25o-en mnu25o_ej',"delete chapter"));
		;
		;
		$449 || ($460=imba_createElement('pre',$448,'mnu25o_ej',null));
		$449 || ($461=imba_createElement('code',$460,'mnu25o_ej',null));
		($464=$465=1,$462=$448[$463]) || ($464=$465=0,$448[$463]=$462=imba_createElement('div',$461,'meta mnu25o_ej',null));
		($467=this.meta_is_editable,$467===$448[$466] || ($462.contentEditable=$448[$466]=$467));
		($467=(this.meta_is_editable||undefined),$467===$448[$469]||($465|=2,$448[$469]=$467));
		($465&2 && $462.flag$('meta mnu25o_ej'+' '+($448[$469] ? `editable` : '')));
		(imba_renderContext.context=($448[$471] || ($448[$471]={_:$462})),$467=JSON.stringify(this.item,null,4),imba_renderContext.context=null,($467===$448[$472]&&$464) || ($448[$470] = $462[$placeChild$]($448[$472]=$467,384,$448[$470])));
		;
		;
		;
		$448[$afterReconcile$]($450);
		return $448;
	}
	static {
		register$(this,c$13,'CMSChapterCard',2);
		imba_defineTag('cmschapter-card-mnu25o-er',this,{cssns: 'mnu25o_ej',name: 'CMSChapterCard'});
	}
};


let c$14 = Symbol();
class InfoPageComponent extends imba_Component {
	render(){
		var $473, $474, $475, $477 = this._ns_ || '', $478, $479, $480, $481, $482, $483, $484;
		$473=this;
		$473[$beforeReconcile$]();
		($474=$475=1,$473[$476] === 1) || ($474=$475=0,$473[$476]=1);
		((!$474||$475&2) && $473.flagSelf$('mnu25o-es'));
		$474 || ($478=imba_createElement('div',$473,`mnu25o-et ${$477}`,null));
		$474 || ($479=imba_createElement('p',$478,`${$477}`,"This app stores your learning progress on your computer's browser."));
		;
		$474 || ($480=imba_createElement('p',$478,`${$477}`,"So use one device and one broswer to mark your progress. Also, don't clear your browser's data for this page."));
		;
		$474 || ($481=imba_createElement('p',$478,`${$477}`,"This app is an experiment. Let us know you are using it, and what features you want via telegram."));
		;
		$474 || ($482=imba_createElement('p',$478,`${$477}`,"We are working on something bigger and better."));
		;
		$474 || ($483=imba_createElement('a',$478,`mnu25o-ey ${$477}`,"Telegram"));
		$474 || ($483.href="https://t.me/+GFitY1neUaQxMzQ1");
		$474 || ($483.target="_blank");
		;
		$474 || ($484=imba_createElement('p',$478,`${$477}`,"This app was built by Eric Vida."));
		;
		;
		$473[$afterReconcile$]($475);
		return $473;
	}
	static {
		register$(this,c$14,'info-page',2);
		imba_defineTag('info-page',this,{});
	}
};
// TAG[epic=PAGE, seq=1] phonetics-page
let c$15 = Symbol();
class PhoneticsPageComponent extends imba_Component {
	
	render(){
		var $485, $486, $487, $489 = this._ns_ || '', $490, $491, $493, $494, $495, $497, $498;
		$485=this;
		$485[$beforeReconcile$]();
		($486=$487=1,$485[$488] === 1) || ($486=$487=0,$485[$488]=1);
		$486 || ($490=imba_createElement('div',$485,`phonetics-layout ${$489}`,null));
		($493=$494=1,$491=$485[$492]) || ($493=$494=0,$485[$492]=$491=imba_createComponent(PhoneticVowels,$490,`${$489}`,null));
		$493 || !$491.setup || $491.setup($494);
		$491[$afterVisit$]($494);
		$493 || $490[$appendChild$]($491);
		;
		($497=$498=1,$495=$485[$496]) || ($497=$498=0,$485[$496]=$495=imba_createComponent(WordCard,$490,`card ${$489}`,null));
		$497 || !$495.setup || $495.setup($498);
		$495[$afterVisit$]($498);
		$497 || $490[$appendChild$]($495);
		;
		;
		$485[$afterReconcile$]($487);
		return $485;
	}
	static {
		register$(this,c$15,'phonetics-page',2);
		imba_defineTag('phonetics-page',this,{cssns: 'mnu25o_fa',cssid: 'mnu25o-fa'});
	}
};

let c$16 = Symbol();
class PhoneticVowels extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.ipa = ($$ && ($0 = $$.ipa) !== undefined) ? ($0) : 1;
		this.char = ($$ && ($0 = $$.char) !== undefined) ? ($0) : [
			["i","i","ពី"],
			["ụ","ɨ/v","ឈឺ"],
			["u","u","គូ"],
			["e","e","លេង"],
			["ẹ","ǝ","ឈើ"],
			["ọ","o/ʊə","គង់"],
			["ė","ɛ","ភ្នែក"],// លែង មែន
			["ạ","ɐ/ǝ","ដី"],
			["o","ɔ","គរ"],
			["a","a","ការ"],
			["ȯ","ɑ","ក៏"]
		];
		
	}
	
	// css .dot
	// 	size:20px 
	// 	bg:gray9 @darkmode:gray2
	// 	rd:full
	// 	pos:relative
	// 	cursor:pointer
	// 	@hover
	// 		bg:hue7 @darkmode:hue3
	
	activeWord(word){
		state.active_word = this.char[word][2];
		return api.save();
	}
	
	render(){
		var $508, $499, $500, $501, $503, $504, $506, $507, $510, $511, $512, $513, $515, $518, $519, $521, $524, $525, $527, $530, $531, $532, $534, $537, $538, $540, $543, $544, $546, $549, $550, $551, $553, $556, $557, $559, $562, $563, $565, $568, $569, $570, $572, $575, $576, $577, $579;
		$499=this;
		$499[$beforeReconcile$]();
		($500=$501=1,$499[$502] === 1) || ($500=$501=0,$499[$502]=1);
		$500 || ($503=imba_createElement('nav',$499,'mnu25o_ff',null));
		($506=$507=1,$504=$499[$505]) || ($506=$507=0,$499[$505]=$504=imba_createElement('button',$503,'mnu25o_ff',null));
		$506 || ($504.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$506 || $504[$placeChild$]("Phonetic System: ");
		$508 = null;
		if (state.ipa) { ($508="IPA") } else {
			($508="Vida");
		};
		($499[$509] = $504[$placeChild$]($508,0,$499[$509]));
		;
		;
		if (is$(state.ipa,true)) {
			this.ipa = 1;
		} else {
			this.ipa = 0;
		};
		$500 || ($510=imba_createElement('div',$499,'chart-wrapper mnu25o_ff',null));
		$500 || ($511=imba_createElement('div',$510,'row one mnu25o_ff',null));
		$500 || ($512=imba_createElement('div',$511,'dot mnu25o_ff',null));
		$500 || ($512.on$(`click`,{activeWord: [0]},this));
		($513=$499[$514]) || ($499[$514]=$513=imba_createElement('span',$512,'mnu25o_ff',null));
		($515=this.char[0][this.ipa],($515===$499[$517]&&$500) || ($499[$516] = $513[$placeChild$]($499[$517]=$515,384,$499[$516])));
		;
		;
		$500 || ($518=imba_createElement('div',$511,'dot mnu25o_ff',null));
		$500 || ($518.on$(`click`,{activeWord: [1]},this));
		($519=$499[$520]) || ($499[$520]=$519=imba_createElement('span',$518,'mnu25o_ff',null));
		($521=this.char[1][this.ipa],($521===$499[$523]&&$500) || ($499[$522] = $519[$placeChild$]($499[$523]=$521,384,$499[$522])));
		;
		;
		$500 || ($524=imba_createElement('div',$511,'dot mnu25o_ff',null));
		$500 || ($524.on$(`click`,{activeWord: [2]},this));
		($525=$499[$526]) || ($499[$526]=$525=imba_createElement('span',$524,'mnu25o_ff',null));
		($527=this.char[2][this.ipa],($527===$499[$529]&&$500) || ($499[$528] = $525[$placeChild$]($499[$529]=$527,384,$499[$528])));
		;
		;
		;
		$500 || ($530=imba_createElement('div',$510,'row two mnu25o_ff',null));
		$500 || ($531=imba_createElement('div',$530,'dot mnu25o_ff',null));
		$500 || ($531.on$(`click`,{activeWord: [3]},this));
		($532=$499[$533]) || ($499[$533]=$532=imba_createElement('span',$531,'mnu25o_ff',null));
		($534=this.char[3][this.ipa],($534===$499[$536]&&$500) || ($499[$535] = $532[$placeChild$]($499[$536]=$534,384,$499[$535])));
		;
		;
		$500 || ($537=imba_createElement('div',$530,'dot mnu25o_ff',null));
		$500 || ($537.on$(`click`,{activeWord: [4]},this));
		($538=$499[$539]) || ($499[$539]=$538=imba_createElement('span',$537,'mnu25o_ff',null));
		($540=this.char[4][this.ipa],($540===$499[$542]&&$500) || ($499[$541] = $538[$placeChild$]($499[$542]=$540,384,$499[$541])));
		;
		;
		$500 || ($543=imba_createElement('div',$530,'dot mnu25o_ff',null));
		$500 || ($543.on$(`click`,{activeWord: [5]},this));
		($544=$499[$545]) || ($499[$545]=$544=imba_createElement('span',$543,'mnu25o_ff',null));
		($546=this.char[5][this.ipa],($546===$499[$548]&&$500) || ($499[$547] = $544[$placeChild$]($499[$548]=$546,384,$499[$547])));
		;
		;
		;
		$500 || ($549=imba_createElement('div',$510,'row three mnu25o_ff',null));
		$500 || ($550=imba_createElement('div',$549,'dot mnu25o_ff',null));
		$500 || ($550.on$(`click`,{activeWord: [6]},this));
		($551=$499[$552]) || ($499[$552]=$551=imba_createElement('span',$550,'mnu25o_ff',null));
		($553=this.char[6][this.ipa],($553===$499[$555]&&$500) || ($499[$554] = $551[$placeChild$]($499[$555]=$553,384,$499[$554])));
		;
		;
		$500 || ($556=imba_createElement('div',$549,'dot mnu25o_ff',null));
		$500 || ($556.on$(`click`,{activeWord: [7]},this));
		($557=$499[$558]) || ($499[$558]=$557=imba_createElement('span',$556,'mnu25o_ff',null));
		($559=this.char[7][this.ipa],($559===$499[$561]&&$500) || ($499[$560] = $557[$placeChild$]($499[$561]=$559,384,$499[$560])));
		;
		;
		$500 || ($562=imba_createElement('div',$549,'dot mnu25o_ff',null));
		$500 || ($562.on$(`click`,{activeWord: [8]},this));
		($563=$499[$564]) || ($499[$564]=$563=imba_createElement('span',$562,'mnu25o_ff',null));
		($565=this.char[8][this.ipa],($565===$499[$567]&&$500) || ($499[$566] = $563[$placeChild$]($499[$567]=$565,384,$499[$566])));
		;
		;
		;
		$500 || ($568=imba_createElement('div',$510,'row four mnu25o_ff',null));
		$500 || ($569=imba_createElement('div',$568,'dot mnu25o_ff',null));
		$500 || ($569.on$(`click`,{activeWord: [9]},this));
		($570=$499[$571]) || ($499[$571]=$570=imba_createElement('span',$569,'mnu25o_ff',null));
		($572=this.char[9][this.ipa],($572===$499[$574]&&$500) || ($499[$573] = $570[$placeChild$]($499[$574]=$572,384,$499[$573])));
		;
		;
		$500 || ($575=imba_createElement('div',$568,'dot mnu25o_ff',null));
		;
		$500 || ($576=imba_createElement('div',$568,'dot mnu25o_ff',null));
		$500 || ($576.on$(`click`,{activeWord: [10]},this));
		($577=$499[$578]) || ($499[$578]=$577=imba_createElement('span',$576,'mnu25o_ff',null));
		($579=this.char[10][this.ipa],($579===$499[$581]&&$500) || ($499[$580] = $577[$placeChild$]($499[$581]=$579,384,$499[$580])));
		;
		;
		;
		;
		$499[$afterReconcile$]($501);
		return $499;
		
	}
	static {
		register$(this,c$16,'PhoneticVowels',2);
		imba_defineTag('phonetic-vowels-mnu25o-gl',this,{cssns: 'mnu25o_ff',name: 'PhoneticVowels'});
	}
};
// TAG[epic=PAGE, seq=21] CollectionPage
let c$17 = Symbol();
class CollectionPage extends imba_Component {
	
	render(){
		// FIXME: Console.warn fires twice. Not sure why
		var $582, $583, $584, $586, $588, $589, $591, $592, $593, $597, $598, $599, $602, $604, $605, $607, $608, $609, $611, $612, $613, $615, $616, $617, $619, $620, $621, $623, $624, $625, $627, $628;
		$582=this;
		$582[$beforeReconcile$]();
		($583=$584=1,$582[$585] === 1) || ($583=$584=0,$582[$585]=1);
		($588=$589=1,$586=$582[$587]) || ($588=$589=0,$582[$587]=$586=imba_createElement('div',$582,'mnu25o-go mnu25o_gm',null));
		$588 || ($586.route="/learn/");
		($591 = $582[$590]) || ($582[$590]=$591=imba_createIndexedList(384,$586));
		$592 = 0;
		$593=$591.$;
		for (let $596 = state.learning_data_flat.collections, $594 = 0, $595 = Object.keys($596), $603 = $595.length, ci, collection; $594 < $603; $594++){
			ci = $595[$594];collection = $596[ci];($598=$599=1,$597=$593[$592]) || ($598=$599=0,$593[$592]=$597=imba_createComponent(CollectionCard,$591,'mnu25o_gm',null));
			$598||($597[$$up$]=$591);
			(collection===$597[$600] || ($597.collection=$597[$600]=collection));
			($602=("/learn/" + ci),$602===$597[$601] || ($597.routeΞto=$597[$601]=$602));
			$598 || !$597.setup || $597.setup($599);
			$597[$afterVisit$]($599);
			$592++;
			
		};$591[$afterVisit$]($592);;
		$588 || !$586.setup || $586.setup($589);
		$586[$afterVisit$]($589);
		;
		$583 || ($604=imba_createElement('div',$582,'mnu25o-gq mnu25o_gm',null));
		($607=$608=1,$605=$582[$606]) || ($607=$608=0,$582[$606]=$605=imba_createElement('div',$604,'lesson-nav-wrapper mnu25o_gm',null));
		($611=$612=1,$609=$605[$610]) || ($611=$612=0,$605[$610]=$609=imba_createComponent(LessonNav,$605,'mnu25o_gm',null));
		$611 || ($609.route="/learn/:learning_id");
		$611 || !$609.setup || $609.setup($612);
		$609[$afterVisit$]($612);
		$611 || $605[$appendChild$]($609);
		;
		$607 || !$605.setup || $605.setup($608);
		$605[$afterVisit$]($608);
		;
		($615=$616=1,$613=$582[$614]) || ($615=$616=0,$582[$614]=$613=imba_createElement('div',$604,'phrase-nav-wrapper mnu25o_gm',null));
		($619=$620=1,$617=$613[$618]) || ($619=$620=0,$613[$618]=$617=imba_createComponent(PhraseNav,$613,'mnu25o_gm',null));
		$619 || ($617.route="/learn/:learning_id");
		$619 || !$617.setup || $617.setup($620);
		$617[$afterVisit$]($620);
		$619 || $613[$appendChild$]($617);
		;
		$615 || !$613.setup || $613.setup($616);
		$613[$afterVisit$]($616);
		;
		($623=$624=1,$621=$582[$622]) || ($623=$624=0,$582[$622]=$621=imba_createElement('div',$604,'main-wrapper mnu25o_gm',null));
		($627=$628=1,$625=$621[$626]) || ($627=$628=0,$621[$626]=$625=imba_createComponent(LessonLayout,$621,'mnu25o_gm',null));
		$627 || ($625.route="/learn/:learning_id");
		$627 || !$625.setup || $625.setup($628);
		$625[$afterVisit$]($628);
		$627 || $621[$appendChild$]($625);
		;
		$623 || !$621.setup || $621.setup($624);
		$621[$afterVisit$]($624);
		;
		;
		$582[$afterReconcile$]($584);
		return $582;
	}
	static {
		register$(this,c$17,'CollectionPage',2);
		imba_defineTag('collection-page-mnu25o-gx',this,{cssns: 'mnu25o_gm',cssid: 'mnu25o-gm',name: 'CollectionPage'});
	}
};
// CARD[epic=CARD, seq=29] CollectionCard
let c$18 = Symbol();
class CollectionCard extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.name = ($$ && ($0 = $$.name) !== undefined) ? ($0) : "Collection";
		this.price = ($$ && ($0 = $$.price) !== undefined) ? ($0) : 0;
		this.benefits = ($$ && ($0 = $$.benefits) !== undefined) ? ($0) : [
			"Benefit 1",
			"Benefit 2",
			"Benefit 3"
		];
		
	}
	
	// css .benefits
	render(){
		var $629, $630, $631, $633, $634, $636, $639, $641, $644, $646, $649, $651, $654, $656;
		$629=this;
		$629[$beforeReconcile$]();
		($630=$631=1,$629[$632] === 1) || ($630=$631=0,$629[$632]=1);
		((!$630||$631&2) && $629.flagSelf$('card'));
		$630 || ($633=imba_createElement('span',$629,'pill mnu25o_gy',"🇰🇭 khmer"));
		;
		($634=$629[$635]) || ($629[$635]=$634=imba_createElement('div',$629,'title mnu25o_gy',null));
		($636=this.collection.title,($636===$629[$638]&&$630) || ($629[$637] = $634[$placeChild$]($629[$638]=$636,384,$629[$637])));
		;
		($639=$629[$640]) || ($629[$640]=$639=imba_createElement('div',$629,'mnu25o_gy',null));
		($641=this.collection.words_learned,($641===$629[$643]&&$630) || ($629[$642] = $639[$placeChild$]($629[$643]=$641,128,$629[$642])));
		$630 || $639[$placeChild$](" learned");
		;
		($644=$629[$645]) || ($629[$645]=$644=imba_createElement('div',$629,'mnu25o_gy',null));
		($646=this.collection.words_total,($646===$629[$648]&&$630) || ($629[$647] = $644[$placeChild$]($629[$648]=$646,128,$629[$647])));
		$630 || $644[$placeChild$](" total");
		;
		($649=$629[$650]) || ($629[$650]=$649=imba_createElement('div',$629,'mnu25o_gy',null));
		($651=this.collection.words_unique,($651===$629[$653]&&$630) || ($629[$652] = $649[$placeChild$]($629[$653]=$651,128,$629[$652])));
		$630 || $649[$placeChild$](" unique");
		;
		($654=$629[$655]) || ($629[$655]=$654=imba_createElement('div',$629,'progress mnu25o_gy',null));
		($656=this.collection.words_progress,($656===$629[$658]&&$630) || ($629[$657] = $654[$placeChild$]($629[$658]=$656,128,$629[$657])));
		$630 || $654[$placeChild$]("%");
		;
		$629[$afterReconcile$]($631);
		return $629;
	}
	static {
		register$(this,c$18,'CollectionCard',2);
		imba_defineTag('collection-card-mnu25o-hg',this,{cssns: 'mnu25o_gy',cssid: 'mnu25o-gy',name: 'CollectionCard'});
	}
};
// LAYOUT[epic=LAYOUT, seq=22] user-page-owned-collections
let c$19 = Symbol();
class UserPageOwnedCollectionsComponent extends imba_Component {
	render(){
		var $659, $660, $661, $663 = this._ns_ || '', $664, $665, $668, $669, $670, $674, $675, $676, $678;
		$659=this;
		$659[$beforeReconcile$]();
		($660=$661=1,$659[$662] === 1) || ($660=$661=0,$659[$662]=1);
		$660 || ($664=imba_createElement('h2',$659,`mnu25o-hi ${$663}`,null));
		;
		($665=$659[$666]) || ($659[$666]=$665=imba_createElement('div',$659,`layout-card-grid ${$663}`,null));
		($668 = $659[$667]) || ($659[$667]=$668=imba_createIndexedList(384,$665));
		$669 = 0;
		$670=$668.$;
		for (let $673 = collections_data.collections, $671 = 0, $672 = Object.keys($673), $681 = $672.length, id, collection; $671 < $681; $671++){
			id = $672[$671];collection = $673[id];($675=$676=1,$674=$670[$669]) || ($675=$676=0,$670[$669]=$674=imba_createComponent('collection-card',$668,`stretchy-card ${$663}`,null));
			$675||($674[$$up$]=$668);
			($678=("/collection/" + id + "/0/0/0/"),$678===$674[$677] || ($674.routeΞto=$674[$677]=$678));
			(id===$674[$679] || ($674.id=$674[$679]=id));
			(collection===$674[$680] || ($674.collection=$674[$680]=collection));
			$675 || !$674.setup || $674.setup($676);
			$674[$afterVisit$]($676);
			$669++;
			
			// <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
			// <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
			// <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
		};$668[$afterVisit$]($669);;
		;
		$659[$afterReconcile$]($661);
		return $659;
	}
	static {
		register$(this,c$19,'user-page-owned-collections',2);
		imba_defineTag('user-page-owned-collections',this,{});
	}
};
let c$20 = Symbol();
class UserPageLockedCollectionsComponent extends imba_Component {
	
	render(){
		var $682, $683, $684, $686 = this._ns_ || '', $687, $688, $690, $691, $693, $694, $695, $699, $700, $701, $703;
		$682=this;
		$682[$beforeReconcile$]();
		($683=$684=1,$682[$685] === 1) || ($683=$684=0,$682[$685]=1);
		$683 || ($687=imba_createElement('h2',$682,`${$686}`,"Purchased Modules"));
		;
		($690=$691=1,$688=$682[$689]) || ($690=$691=0,$682[$689]=$688=imba_createElement('div',$682,`card-wrapper ${$686}`,null));
		$690 || ($688.route="/");
		($693 = $682[$692]) || ($682[$692]=$693=imba_createIndexedList(384,$688));
		$694 = 0;
		$695=$693.$;
		for (let $698 = this.bible_data.collections, $696 = 0, $697 = Object.keys($698), $706 = $697.length, id, collection; $696 < $706; $696++){
			id = $697[$696];collection = $698[id];($700=$701=1,$699=$695[$694]) || ($700=$701=0,$695[$694]=$699=imba_createComponent('collection-card',$693,`${$686}`,null));
			$700||($699[$$up$]=$693);
			($703=("/buy/" + id),$703===$699[$702] || ($699.routeΞto=$699[$702]=$703));
			(id===$699[$704] || ($699.id=$699[$704]=id));
			(collection===$699[$705] || ($699.collection=$699[$705]=collection));
			$700 || !$699.setup || $699.setup($701);
			$699[$afterVisit$]($701);
			$694++;
			
		};$693[$afterVisit$]($694);;
		$690 || !$688.setup || $688.setup($691);
		$688[$afterVisit$]($691);
		;
		$682[$afterReconcile$]($684);
		return $682;
	}
	static {
		register$(this,c$20,'user-page-locked-collections',2);
		imba_defineTag('user-page-locked-collections',this,{cssns: 'mnu25o_hl',cssid: 'mnu25o-hl'});
	}
};

// LAYOUT[epic=LAYOUT, seq=23] LessonLayout
let c$21 = Symbol();
class LessonLayout extends imba_Component {
	get $image(){
		let el=imba_createElement('img',null,'image mnu25o_hq $image',null);
		return (Object.defineProperty(this,'$image',{value:el}),el);
	}
	
	mount(){
		this.learning_id = this.route.params.learning_id;
		return this.phrase = state.learning_data_flat.phrases[this.route.params.learning_id];
	}
	render(){
		var $735, $803, $804, $805, $713, $714, $707, $708, $709, $711, $716, $717, $718, $720, $721, $723, $724, $726, $727, $729, $731, $732, $733, $737, $738, $741, $744, $742, $745, $746, $749, $752, $750, $753, $754, $757, $755, $758, $759, $765, $766, $769, $772, $770, $773, $774, $777, $780, $778, $781, $782, $785, $783, $786, $787, $793, $794, $795, $797, $801, $802, $807, $808, $810, $811, $813, $814, $818, $820, $821;
		$707=this;
		$707[$beforeReconcile$]();
		($708=$709=1,$707[$710] === 1) || ($708=$709=0,$707[$710]=1);
		($711=$707[$712]) || ($707[$712]=$711=imba_createElement('main',$707,'collection-grid mnu25o_hq',null));
		$713 = $714 = null;
		if (this.phrase) {
			($716=$717=1,$713=$707[$715]) || ($716=$717=0,$707[$715]=$713=imba_createElement('div',null,'left mnu25o_hq',null));
			$716||($713[$$up$]=$711);
			($720=$721=1,$718=$713[$719]) || ($720=$721=0,$713[$719]=($718=this.$image,$718[$$up$]=$713,$718));
			($723=images[("" + (this.phrase.img))],$723===$713[$722] || ($718.src=$713[$722]=$723));
			$720 || $713[$appendChild$]($718);
			;
			($726=$727=1,$724=$713[$725]) || ($726=$727=0,$713[$725]=$724=imba_createComponent(WordNav,$713,'card mnu25o_hq',null));
			$726 || ($724.on$(`click`,{commit: true},this));
			($729=this.phrase_key,$729===$713[$728] || ($724.phrase_key=$713[$728]=$729));
			($729=this.phrase,$729===$713[$730] || ($724.phrase=$713[$730]=$729));
			$726 || ($724.route="/:page/:learning_id/:word");
			$726 || !$724.setup || $724.setup($727);
			$724[$afterVisit$]($727);
			$726 || $713[$appendChild$]($724);
			;
			$716 || ($731=imba_createElement('div',$713,'card mnu25o_hq',null));
			$716 || ($732=imba_createElement('h2',$731,'mnu25o_hq',"Phonetics"));
			;
			($733=$713[$734]) || ($713[$734]=$733=imba_createElement('p',$731,'phonetics mnu25o_hq',null));
			$735 = null;
			if (state.ipa) {
				($735 = $713[$736]) || ($713[$736]=$735=imba_createKeyedList(1024,null));
				$735[$$up$] = $733;
				$737 = 0;
				$738=$735.$;
				for (let $739 = 0, $740 = iterable$(this.phrase.phrase), $763 = $740.length; $739 < $763; $739++) {
					let word = $740[$739];
					let obj = dictionary[word];
					if (obj?.ipa || obj?.vida || obj?.vida_auto || word) {
						($744=$745=1,$741=($742=$738[$getRenderContext$]($743)).get($737)) || ($744=$745=0,$742.set($737,$741=imba_createElement('span',$735,'mnu25o_hq',null)));
						$744||($741[$$up$]=$735);
						($746=obj?.ipa || obj?.vida || obj?.vida_auto || word,($746===$741[$748]&&$744) || ($741[$747] = $741[$placeChild$]($741[$748]=$746,384,$741[$747])));
						$735.push($741,$737++,$742);
						
					} else {
						($752=$753=1,$749=($750=$738[$getRenderContext$]($751)).get($737)) || ($752=$753=0,$750.set($737,$749=imba_createElement('span',$735,'mnu25o_hq',"n/a")));
						$752||($749[$$up$]=$735);
						$735.push($749,$737++,$750);
						
						($757=$758=1,$754=($755=$738[$getRenderContext$]($756)).get($737)) || ($757=$758=0,$755.set($737,$754=imba_createLiveFragment(4096,$735)));
						$757||($754[$$up$]=$735);
						(imba_renderContext.context=($754[$761] || ($754[$761]={_:$754})),$759=ERROR(word,"no phonetics available"),imba_renderContext.context=null,($759===$754[$762]&&$757) || ($754[$760] = $754[$placeChild$]($754[$762]=$759,0,$754[$760])));
						$735.push($754,$737++,$755);
						
					};
				};$735[$afterVisit$]($737);
			} else {
				($735 = $713[$764]) || ($713[$764]=$735=imba_createKeyedList(1024,null));
				$735[$$up$] = $733;
				$765 = 0;
				$766=$735.$;
				for (let $767 = 0, $768 = iterable$(this.phrase.phrase), $791 = $768.length; $767 < $791; $767++) {
					let word = $768[$767];
					let obj = dictionary[word];
					if (obj?.vida || obj?.vida_auto || obj?.ipa || word) {
						($772=$773=1,$769=($770=$766[$getRenderContext$]($771)).get($765)) || ($772=$773=0,$770.set($765,$769=imba_createElement('span',$735,'mnu25o_hq',null)));
						$772||($769[$$up$]=$735);
						($774=obj?.vida || obj?.vida_auto || obj?.ipa || word,($774===$769[$776]&&$772) || ($769[$775] = $769[$placeChild$]($769[$776]=$774,384,$769[$775])));
						$735.push($769,$765++,$770);
						
					};
					if (!(obj?.vida || obj?.vida_auto || obj?.ipa || word)) {
						($780=$781=1,$777=($778=$766[$getRenderContext$]($779)).get($765)) || ($780=$781=0,$778.set($765,$777=imba_createElement('span',$735,'mnu25o_hq',"n/a")));
						$780||($777[$$up$]=$735);
						$735.push($777,$765++,$778);
						
						($785=$786=1,$782=($783=$766[$getRenderContext$]($784)).get($765)) || ($785=$786=0,$783.set($765,$782=imba_createLiveFragment(4096,$735)));
						$785||($782[$$up$]=$735);
						(imba_renderContext.context=($782[$789] || ($782[$789]={_:$782})),$787=ERROR(word,"no phonetics available"),imba_renderContext.context=null,($787===$782[$790]&&$785) || ($782[$788] = $782[$placeChild$]($782[$790]=$787,0,$782[$788])));
						$735.push($782,$765++,$783);
						
					};
				};$735[$afterVisit$]($765);
			};
			($713[$792] = $733[$placeChild$]($735,0,$713[$792]));
			;
			;
			$716 || ($793=imba_createElement('div',$713,'card mnu25o_hq',null));
			$716 || ($794=imba_createElement('h2',$793,'mnu25o_hq',"Meaning"));
			;
			($795=$713[$796]) || ($713[$796]=$795=imba_createElement('p',$793,'mnu25o_hq',null));
			($797=this.phrase.meaning,($797===$713[$799]&&$716) || ($713[$798] = $795[$placeChild$]($713[$799]=$797,384,$713[$798])));
			;
			;
			$716 || !$713.setup || $713.setup($717);
			$713[$afterVisit$]($717);
			
			($801=$802=1,$714=$707[$800]) || ($801=$802=0,$707[$800]=$714=imba_createElement('div',null,'right mnu25o_hq',null));
			$801||($714[$$up$]=$711);
			$803 = $804 = $805 = null;
			if (state.active_word) {
				($807=$808=1,$803=$714[$806]) || ($807=$808=0,$714[$806]=$803=imba_createComponent(WordCard,null,'card mnu25o_hq',null));
				$807||($803[$$up$]=$714);
				$807 || !$803.setup || $803.setup($808);
				$803[$afterVisit$]($808);
				
				if (dictionary[state.active_word]?.google) {
					($810=$811=1,$804=$714[$809]) || ($810=$811=0,$714[$809]=$804=imba_createComponent(DefinitionCard,null,'card mnu25o_hq',null));
					$810||($804[$$up$]=$714);
					$810 || !$804.setup || $804.setup($811);
					$804[$afterVisit$]($811);
					
				};
				($813=$814=1,$805=$714[$812]) || ($813=$814=0,$714[$812]=$805=imba_createComponent(SpellingCard,null,'card mnu25o_hq',null));
				$813||($805[$$up$]=$714);
				$813 || !$805.setup || $805.setup($814);
				$805[$afterVisit$]($814);
				
			};
			($714[$815] = $714[$placeChild$]($803,0,$714[$815]));
			($714[$816] = $714[$placeChild$]($804,0,$714[$816]));
			($714[$817] = $714[$placeChild$]($805,0,$714[$817]));
			($820=$821=1,$818=$714[$819]) || ($820=$821=0,$714[$819]=$818=imba_createComponent(ShortcutCard,$714,'card mnu25o_hq',null));
			$820 || !$818.setup || $818.setup($821);
			$818[$afterVisit$]($821);
			$820 || $714[$appendChild$]($818);
			;
		};
		($707[$822] = $711[$placeChild$]($713,0,$707[$822]));
		($707[$823] = $711[$placeChild$]($714,0,$707[$823]));
		;
		$707[$afterReconcile$]($709);
		return $707;
	}
	static {
		register$(this,c$21,'LessonLayout',2);
		imba_defineTag('lesson-layout-mnu25o-in',this,{cssns: 'mnu25o_hq',cssid: 'mnu25o-hq',name: 'LessonLayout'});
	}
};
let c$22 = Symbol();
class AdminTools extends imba_Component {
	
	render(){
		var $824, $825, $826, $828, $829;
		$824=this;
		$824[$beforeReconcile$]();
		($825=$826=1,$824[$827] === 1) || ($825=$826=0,$824[$827]=1);
		$825 || ($828=imba_createElement('nav',$824,'mnu25o_io',null));
		$825 || ($829=imba_createElement('button',$828,'mnu25o_io',"edit phrase"));
		;
		;
		$824[$afterReconcile$]($826);
		return $824;
	}
	static {
		register$(this,c$22,'AdminTools',2);
		imba_defineTag('admin-tools-mnu25o-is',this,{cssns: 'mnu25o_io',cssid: 'mnu25o-io',name: 'AdminTools'});
	}
};
let c$23 = Symbol();
class WordNav extends imba_Component {
	get $word_audio(){
		let el=imba_createElement('audio',null,'mnu25o_it $word_audio',null);
		return (Object.defineProperty(this,'$word_audio',{value:el}),el);
	}
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.step = ($$ && ($0 = $$.step) !== undefined) ? ($0) : 50;
		this.elapsed = ($$ && ($0 = $$.elapsed) !== undefined) ? ($0) : 0;
		
	}
	routed(params){
		let ids = params.learning_id.split('-');
		this._ci = ids[0];
		this._li = ids[1];
		this._pi = ids[2];
		return this._wi = params.word;
	}
	// Goes to the next word in the phrase
	nextWord(phrase){
		let last_wi = phrase?.phrase.length - 1;
		return console.log('true or false',last_wi == this._wi);
		// let last_wi = state.learning_data_flat.phrases[phrase_key].phrase.length - 1
		// if _wi < last_wi
		// 	router.go("/learn/{_ci}-{_li}-{_pi}/{incValue(_wi)}")
		// else
		// 	nextPhrase!
	}
	nextPhrase(){
		let final_index = state.learning_data_flat.lessons[("" + this._ci + "-" + this._li)].phrase_keys.length - 1;
		if (this._pi < final_index) {
			this._wi = 0;
			return this.router.go(("/learn/" + this._ci + "-" + this._li + "-" + this.incValue(this._pi) + "/" + this._wi));
		} else {
			return this.nextLesson();
		};
	}
	nextLesson(){
		let final_index = state.learning_data_flat.collections[this._ci].lesson_keys.length - 1;
		if (this._li < final_index) {
			this._pi = "01";
			this._wi = 0;
			return this.router.go(("/learn/" + this._ci + "-" + this.incValue(this._li) + "-" + this._pi + "/" + this._wi));
		} else {
			return LOG('final lesson for this collection');
		};
	}
	
	incValue(string){
		if (("" + string).length > 1) {
			return this.formatNum(parseInt(string) + 1);
		} else {
			return parseInt(string) + 1;
		};
	}
	decValue(string){
		if (("" + string).length > 1) {
			return this.formatNum(parseInt(string) - 1);
		} else {
			return parseInt(string) - 1;
		};
	}
	formatNum(num){
		return num.toString().padStart(2,'0');;
	}
	// NOTE: Goes to the previous word in the phrase
	prevWord(){
		if (this.word_index > 0) {
			this.word_index--;
			return this.router.go(("/learn/" + this.collection_index + "-" + this.lesson_index + "-" + this.phrase_index + "/" + this.word_index));
		} else {
			// NOTE: if no previous word in this phrase goes to the last word of the previous phrase
			return this.prevPhraseLast();
		};
	}
	// NOTE: Goes to the first verse of the next phrase
	// def nextPhrase
	// 	if phrase_index < last_phrase_index
	// 		phrase_index++
	// 		word_index = 0
	// 		router.go("/learn/{collection_index}-{lesson_index}-{phrase_index}/{word_index}")
	
	// Goes to the last word of hte previous phrase
	prevPhraseLast(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = this.phrases[this.phrase_index].phrase.length - 1;
			return this.router.go(("/learn/" + this.collection_index + "-" + this.lesson_index + "-" + this.phrase_index + "/" + this.word_index));
		};
	}
	// Goes to the first word of the previous phrase
	prevPhraseZero(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = 0;
			return this.router.go(("/learn/" + this.collection_index + "-" + this.lesson_index + "-" + this.phrase_index + "/" + this.word_index));
		};
	}
	
	updateActiveWordData(){
		let phrase;
		let phrase_key = ("" + (state.collection) + "-" + (state.lesson) + "-" + (state.phrase));
		let lesson_key = ("" + (state.collection) + "-" + (state.lesson));
		let collection_key = ("" + (state.collection));
		let collection = state.collection;
		let lesson = state.lesson;
		return phrase = state.phrase;
		// collection_index = route_array[1]
		// lesson_index = route_array[2]
		// phrase_index = route_array[3]
		// LOG 'word index', route.params.learning_id
		// word_index = route_array[4]
		// word = phrase.phrase[word_index]
		// phrases = state.learning_data_flat.lessons[lesson_key].phrases
		// last_phrase_index = Object.keys(phrases).length - 1
		// last_word_index = phrase.phrase.length - 1
		// state.active_word = word
	}
	
	playWord(player,filename){
		if (!(!audio[filename])) {
			player.src = audio[filename];
			return player.play();
		} else {
			return console.warn('no audio');
		};
	}
	
	handleHold(word){
		api.toggleLearned(state.active_word);
		this.stopTimer();
		this.resetTimer();
		return imba_commit();
		
	}
	pressAndHold(word,duration){
		var self = this;
		state.active_word = word;
		return this[$interval$] = setInterval(function() {
			if (self.elapsed >= duration) { return self.handleHold() } else {
				return self.elapsed = self.elapsed + self.step;
			};
		},this.step);
	}
	
	stopTimer(){
		return this[$interval$] && clearInterval(this[$interval$]);
	}
	resetTimer(){
		this.elapsed = 0;;return imba_commit();
	}
	
	render(){
		var self = this, $830, $831, $832, $834, $836, $839, $841, $842, $843, $845, $846, $847, $850, $851, $852, $854, $855, $856, $859, $866;
		this.updateActiveWordData();
		// @click=(state.active_word = khccmer_word)
		$830=this;
		$830[$beforeReconcile$]();
		($831=$832=1,$830[$833] === 1) || ($831=$832=0,$830[$833]=1);
		($834=$830[$835]) || ($830[$835]=$834=imba_createElement('h2',$830,'mnu25o_it',null));
		($836=this.phrase.title,($836===$830[$838]&&$831) || ($830[$837] = $834[$placeChild$]($830[$838]=$836,384,$830[$837])));
		;
		($841=$842=1,$839=$830[$840]) || ($841=$842=0,$830[$840]=$839=imba_createComponent('i-global',$830,'mnu25o_it',null));
		$841 || ($839.on$(`hotkey`,{options: ['e|up'],$_: [function(e,$$) {
			return self.prevPhraseZero();
		}]},this));
		$841 || ($839.on$(`hotkey`,{options: ['r|down'],$_: [function(e,$$) {
			return self.nextPhrase();
		}]},this));
		$841 || ($839.on$(`hotkey`,{options: ['d|left'],$_: [function(e,$$) {
			return self.prevWord();
		}]},this));
		$841 || ($839.on$(`hotkey`,{options: ['f|right'],$_: [function(e,$$) {
			return self.nextWord(self.phrase);
		}]},this));
		$841 || !$839.setup || $839.setup($842);
		$839[$afterVisit$]($842);
		$841 || $830[$appendChild$]($839);
		;
		($845=$846=1,$843=$830[$844]) || ($845=$846=0,$830[$844]=($843=this.$word_audio,$843[$$up$]=$830,$843));
		$845 || ($843.src="");
		$845 || ($843.type="audio/mpeg");
		$845 || $830[$appendChild$]($843);
		;
		($847=$830[$848]) || ($830[$848]=$847=imba_createElement('div',$830,'word-wrapper mnu25o_it',null));
		($850 = $830[$849]) || ($830[$849]=$850=imba_createIndexedList(384,$847));
		$851 = 0;
		$852=$850.$;
		for (let word_index = 0, $853 = iterable$(this.phrase.phrase), $870 = $853.length; word_index < $870; word_index++) {
			let word = $853[word_index];
			let phrase_key = ("" + (this.phrase.c) + "-" + (this.phrase.l) + "-" + (this.phrase.p));
			($855=$856=1,$854=$852[$851]) || ($855=$856=0,$852[$851]=$854=imba_createElement('div',$850,'word mnu25o_it',null));
			$855||($854[$$up$]=$850);
			($859=(is$(word,state.active_word)||undefined),$859===$854[$858]||($856|=2,$854[$858]=$859));
			($859=("/learn/" + phrase_key + "/" + word_index),$859===$854[$860] || ($854.routeΞto=$854[$860]=$859));
			($859=(state.user_learned.hasOwnProperty(word)||undefined),$859===$854[$862]||($856|=2,$854[$862]=$859));
			($859=(!(dictionary.hasOwnProperty(word))||undefined),$859===$854[$864]||($856|=2,$854[$864]=$859));
			$866 = $854[$865] || ($854[$865]={playWord: [null,null]});
			$866.playWord[0]=this.$word_audio;
			$866.playWord[1]=word;
			$855 || $854.on$(`dblclick`,$866,this);
			$866 = $854[$867] || ($854[$867]={pressAndHold: [null,null]});
			$866.pressAndHold[0]=word;
			$866.pressAndHold[1]=(1 * 1000);
			$855 || $854.on$(`mousedown`,$866,this);
			$855 || ($854.on$(`mouseup`,{stopTimer: true},this));
			($856&2 && $854.flag$('word mnu25o_it'+' '+($854[$858] ? `active` : '')+' '+($854[$862] ? `known` : '')+' '+($854[$864] ? `not_in_dict` : '')));
			($859=word,($859===$854[$869]&&$855) || ($854[$868] = $854[$placeChild$]($854[$869]=$859,384,$854[$868])));
			$855 || !$854.setup || $854.setup($856);
			$854[$afterVisit$]($856);
			$851++;
			
		};$850[$afterVisit$]($851);;
		;
		$830[$afterReconcile$]($832);
		return $830;
	}
	static {
		register$(this,c$23,'WordNav',2);
		imba_defineTag('word-nav-mnu25o-ja',this,{cssns: 'mnu25o_it',cssid: 'mnu25o-it',name: 'WordNav'});
	}
};

// LAYOUT[epic=LAYOUT, seq=26] LearnModulePreview
let c$24 = Symbol();
class LearnModulePreview extends imba_Component {
	
	render(){
		var $871, $872, $873, $875, $876, $877, $878, $879, $881, $882, $883, $884, $886, $887, $888, $891, $892, $893, $896, $897, $898, $900;
		{$871=this;
		$871[$beforeReconcile$]();
		($872=$873=1,$871[$874] === 1) || ($872=$873=0,$871[$874]=1);
		$872 || ($875=imba_createElement('main',$871,'collection-grid mnu25o_jb',null));
		$872 || ($876=imba_createElement('div',$875,'image mnu25o_jb',"image"));
		;
		$872 || ($877=imba_createElement('div',$875,'mnu25o-jf mnu25o_jb',null));
		$872 || ($878=imba_createElement('div',$877,'card mnu25o_jb',"card"));
		;
		($881=$882=1,$879=$871[$880]) || ($881=$882=0,$871[$880]=$879=imba_createComponent('rightbar-collection-contents',$877,'mnu25o_jb',null));
		$881 || !$879.setup || $879.setup($882);
		$879[$afterVisit$]($882);
		$881 || $877[$appendChild$]($879);
		;
		;
		$872 || ($883=imba_createElement('div',$875,'mnu25o-ji mnu25o_jb',null));
		($886=$887=1,$884=$871[$885]) || ($886=$887=0,$871[$885]=$884=imba_createComponent('rightbar-graduated-students',$883,'mnu25o_jb',null));
		$886 || !$884.setup || $884.setup($887);
		$884[$afterVisit$]($887);
		$886 || $883[$appendChild$]($884);
		;
		;
		;
		let buyΞcards = [
			{name: "Market collection",
			price: 5,
			benefits: ['One collection','5 chapters','400 words']},
			{name: "All collections",
			price: 20,
			benefits: ['5 modoules','40 chapters','2200 words']}
		];
		($888=$871[$889]) || ($871[$889]=$888=imba_createElement('div',$871,'buy-cards mnu25o_jb',null));
		($891 = $871[$890]) || ($871[$890]=$891=imba_createIndexedList(384,$888));
		$892 = 0;
		$893=$891.$;
		for (let $894 = 0, $895 = iterable$(buyΞcards), $903 = $895.length; $894 < $903; $894++) {
			let card = $895[$894];
			($897=$898=1,$896=$893[$892]) || ($897=$898=0,$893[$892]=$896=imba_createComponent(SellCard,$891,'mnu25o_jb',null));
			$897||($896[$$up$]=$891);
			($900=card.name,$900===$896[$899] || ($896.name=$896[$899]=$900));
			($900=card.price,$900===$896[$901] || ($896.price=$896[$901]=$900));
			($900=card.benefits,$900===$896[$902] || ($896.benefits=$896[$902]=$900));
			$897 || !$896.setup || $896.setup($898);
			$896[$afterVisit$]($898);
			$892++;
			
		};$891[$afterVisit$]($892);;
		;
		$871[$afterReconcile$]($873);
		return $871;
		};
	}
	static {
		register$(this,c$24,'LearnModulePreview',2);
		imba_defineTag('learn-module-preview-mnu25o-jm',this,{cssns: 'mnu25o_jb',cssid: 'mnu25o-jb',name: 'LearnModulePreview'});
	}
};


// CARD[epic=CARD, seq=27] UserCard
let c$25 = Symbol();
class UserCard extends imba_Component {
	
	
	// css .user-actions
	// 	d:hflex jc:space-between
	
	logOut(){
		state.auth = false;
		return imba_commit;
	}
	render(){
		var $904, $905, $906, $908, $910, $911, $913, $914, $915, $916, $917, $918, $920, $921, $924, $926, $927, $929, $930, $931;
		$904=this;
		$904[$beforeReconcile$]();
		($905=$906=1,$904[$907] === 1) || ($905=$906=0,$904[$907]=1);
		($910=$911=1,$908=$904[$909]) || ($910=$911=0,$904[$909]=$908=imba_createElement('img',$904,'mnu25o_jn',null));
		($913=this.user_collection.image,$913===$904[$912] || ($908.src=$904[$912]=$913));
		;
		$905 || ($914=imba_createElement('div',$904,'user-info mnu25o_jn',null));
		$905 || ($915=imba_createElement('div',$914,'mnu25o_jn',null));
		$905 || ($916=imba_createElement('h2',$915,'user-name mnu25o_jn',"DinaLearns"));
		;
		;
		$905 || ($917=imba_createElement('a',$914,'user-wordcount mnu25o_jn',"400/4000"));
		;
		($920=$921=1,$918=$904[$919]) || ($920=$921=0,$904[$919]=$918=imba_createComponent(ProgressBar,$914,'mnu25o_jn',null));
		($924=(this[$context$].active||undefined),$924===$904[$923]||($921|=2,$904[$923]=$924));
		($924=this.progress,$924===$904[$925] || ($918.progress=$904[$925]=$924));
		($921&2 && $918.flag$('mnu25o_jn'+' '+($904[$923] ? `color` : '')));
		$920 || !$918.setup || $918.setup($921);
		$918[$afterVisit$]($921);
		$920 || $914[$appendChild$]($918);
		;
		$905 || ($926=imba_createElement('div',$914,'user-stats mnu25o_jn',null));
		($929=$930=1,$927=$904[$928]) || ($929=$930=0,$904[$928]=$927=imba_createElement('a',$926,'user-settings mnu25o_jn',"settings"));
		$929 || ($927.routeΞto="/settings/");
		$929 || !$927.setup || $927.setup($930);
		$927[$afterVisit$]($930);
		;
		$905 || ($931=imba_createElement('a',$926,'user-settings mnu25o_jn',"logout"));
		$905 || ($931.on$(`click`,{$_: [function(e,$$) {
			return state.logout(e);
		}]},this));
		;
		;
		;
		$904[$afterReconcile$]($906);
		return $904;
	}
	static {
		register$(this,c$25,'UserCard',2);
		imba_defineTag('user-card-mnu25o-jy',this,{cssns: 'mnu25o_jn',cssid: 'mnu25o-jn',name: 'UserCard'});
	}
};

// CARD[epic=CARD, seq=28] collection-card
let c$26 = Symbol();
class CollectionCardComponent extends imba_Component {
	// prop chapters = []
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.link = ($$ && ($0 = $$.link) !== undefined) ? ($0) : "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&h=100&q=60";
		this.locked = ($$ && ($0 = $$.locked) !== undefined) ? ($0) : true;
		this.collection_active = ($$ && ($0 = $$.collection_active) !== undefined) ? ($0) : false;
		
	}
	render(){
		var $939, $945, $932, $933, $934, $938, $940 = this._ns_ || '', $942, $943, $947, $948, $950, $952, $953, $954, $956, $958, $960, $963, $965, $966, $968;
		$932=this;
		$932[$beforeReconcile$]();
		($933=$934=1,$932[$935] === 1) || ($933=$934=0,$932[$935]=1);
		($938=(this.collection.locked||undefined),$938===$932[$937]||($934|=2,$932[$937]=$938));
		((!$933||$934&2) && $932.flagSelf$(($932[$937] ? `locked` : '')));
		$939 = null;
		if (!(this.collection.image)) { ($942=$943=1,$939=$932[$941]) || ($942=$943=0,$932[$941]=$939=imba_createElement('div',null,`not-image ${$940}`,null));
		$942||($939[$$up$]=$932);
		 };
		($932[$944] = $932[$placeChild$]($939,0,$932[$944]));
		$945 = null;
		if (this.collection.image) { ($947=$948=1,$945=$932[$946]) || ($947=$948=0,$932[$946]=$945=imba_createElement('img',null,`image ${$940}`,null));
		$947||($945[$$up$]=$932);
		($950=this.collection.image,$950===$945[$949] || ($945.src=$945[$949]=$950));
		 };
		($932[$951] = $932[$placeChild$]($945,0,$932[$951]));
		$933 || ($952=imba_createElement('div',$932,`card-info ${$940}`,null));
		$933 || ($953=imba_createElement('div',$952,`card-title ${$940}`,null));
		($954=$932[$955]) || ($932[$955]=$954=imba_createElement('h2',$953,`${$940}`,null));
		($956=this.collection.title,$956===$932[$957] || $954.text$(String($932[$957]=$956)));
		;
		($958=$932[$959]) || ($932[$959]=$958=imba_createElement('span',$953,`progress-percent ${$940}`,null));
		($960=Math.floor((state.learning_data.collection_learned_usage[this.id] / this.collection.word_usage_count_sum) * 1000) / 10,($960===$932[$962]&&$933) || ($932[$961] = $958[$placeChild$]($932[$962]=$960,128,$932[$961])));
		$933 || $958[$placeChild$]("%");
		;
		;
		($965=$966=1,$963=$932[$964]) || ($965=$966=0,$932[$964]=$963=imba_createComponent(ProgressBar,$952,`mnu25o-kh ${$940}`,null));
		($968=state.learning_data.collection_progress[this.id],$968===$932[$967] || ($963.progress=$932[$967]=$968));
		$965 || !$963.setup || $963.setup($966);
		$963[$afterVisit$]($966);
		$965 || $952[$appendChild$]($963);
		;
		;
		$932[$afterReconcile$]($934);
		return $932;
	}
	static {
		register$(this,c$26,'collection-card',2);
		imba_defineTag('collection-card',this,{cssns: 'mnu25o_jz',cssid: 'mnu25o-jz'});
	}
};

// CARD[epic=CARD, seq=29] SellCard
let c$27 = Symbol();
class SellCard extends imba_Component {
	
	
	// css .benefits
	render(){
		var $969, $970, $971, $973, $975, $978, $979, $981, $984, $985, $988, $989, $990, $993, $994, $995, $996, $1000;
		$969=this;
		$969[$beforeReconcile$]();
		($970=$971=1,$969[$972] === 1) || ($970=$971=0,$969[$972]=1);
		((!$970||$971&2) && $969.flagSelf$('card'));
		($973=$969[$974]) || ($969[$974]=$973=imba_createElement('span',$969,'pill mnu25o_ki',null));
		($975=this.name,($975===$969[$977]&&$970) || ($969[$976] = $973[$placeChild$]($969[$977]=$975,384,$969[$976])));
		;
		$970 || ($978=imba_createElement('div',$969,'price mnu25o_ki',null));
		($979=$969[$980]) || ($969[$980]=$979=imba_createElement('span',$978,'num mnu25o_ki',null));
		$970 || $979[$placeChild$]("$");
		($981=this.price,($981===$969[$983]&&$970) || ($969[$982] = $979[$placeChild$]($969[$983]=$981,256,$969[$982])));
		;
		$970 || ($984=imba_createElement('span',$978,'text mnu25o_ki'," lifetime"));
		;
		;
		($985=$969[$986]) || ($969[$986]=$985=imba_createElement('ul',$969,'benefits mnu25o_ki',null));
		($988 = $969[$987]) || ($969[$987]=$988=imba_createIndexedList(384,$985));
		$989 = 0;
		$990=$988.$;
		for (let $991 = 0, $992 = iterable$(this.benefits), $999 = $992.length; $991 < $999; $991++) {
			let item = $992[$991];
			($994=$995=1,$993=$990[$989]) || ($994=$995=0,$990[$989]=$993=imba_createElement('li',$988,'mnu25o_ki',null));
			$994||($993[$$up$]=$988);
			($996=item,($996===$993[$998]&&$994) || ($993[$997] = $993[$placeChild$]($993[$998]=$996,384,$993[$997])));
			$989++;
			
		};$988[$afterVisit$]($989);;
		;
		$970 || ($1000=imba_createElement('div',$969,'button mnu25o_ki',"Get Started"));
		;
		$969[$afterReconcile$]($971);
		return $969;
	}
	static {
		register$(this,c$27,'SellCard',2);
		imba_defineTag('sell-card-mnu25o-kr',this,{cssns: 'mnu25o_ki',cssid: 'mnu25o-ki',name: 'SellCard'});
	}
};

// CARD[epic=CARD, seq=30] WordBar
let c$28 = Symbol();
class WordBar extends imba_Component {
	get $fit2(){
		let el=imba_createElement('a',null,'fit khmer mnu25o_ks $fit2',null);
		return (Object.defineProperty(this,'$fit2',{value:el}),el);
	}
	
	mount(){
		this.fit_settings = {
			minSize: 16,
			maxSize: 26
		};
		return fitty(this.$fit2,this.fit_settings);
	}
	render(){
		var $1013, $1022, $1023, $1001, $1002, $1003, $1005, $1007, $1008, $1010, $1015, $1016, $1018, $1020, $1021, $1025, $1026, $1028, $1029, $1030, $1034, $1035, $1037, $1038, $1040, $1041, $1042, $1046, $1047, $1048, $1052, $1053, $1056, $1058, $1059, $1062, $1063, $1065, $1066, $1069;
		{$1001=this;
		$1001[$beforeReconcile$]();
		($1002=$1003=1,$1001[$1004] === 1) || ($1002=$1003=0,$1001[$1004]=1);
		let vida = dictionary[state.active_word]?.vida;
		let vida_auto = dictionary[state.active_word]?.vida_auto;
		let ipa = dictionary[state.active_word]?.ipa;
		($1007=$1008=1,$1005=$1001[$1006]) || ($1007=$1008=0,$1001[$1006]=($1005=this.$fit2,$1005[$$up$]=$1001,$1005));
		$1007 || ($1005.title="Click to search this word on sealang.net dictionary.");
		($1010=("http://sealang.net/api/api.pl?query=" + (state.active_word) + "&service=dictionary"),$1010===$1001[$1009] || ($1005.href=$1001[$1009]=$1010));
		$1007 || ($1005.target="_blank");
		($1010=state.active_word,($1010===$1001[$1012]&&$1007) || ($1001[$1011] = $1005[$placeChild$]($1001[$1012]=$1010,384,$1001[$1011])));
		$1007 || $1001[$appendChild$]($1005);
		;
		$1013 = null;
		if (audio.hasOwnProperty(state.active_word)) {
			($1015=$1016=1,$1013=$1001[$1014]) || ($1015=$1016=0,$1001[$1014]=$1013=imba_createComponent(AudioPlayer,null,'mnu25o_ks',null));
			$1015||($1013[$$up$]=$1001);
			$1015 || !$1013.setup || $1013.setup($1016);
			$1013[$afterVisit$]($1016);
			
		};
		($1001[$1017] = $1001[$placeChild$]($1013,0,$1001[$1017]));
		($1020=$1021=1,$1018=$1001[$1019]) || ($1020=$1021=0,$1001[$1019]=$1018=imba_createElement('div',$1001,'mnu25o-kw phonetic-wrapper mnu25o_ks',null));
		$1020 || ($1018.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$1022 = $1023 = null;
		if (state.ipa) {
			($1025=$1026=1,$1022=$1001[$1024]) || ($1025=$1026=0,$1001[$1024]=$1022=imba_createElement('span',null,'mnu25o-kx mnu25o_ks',"ipa"));
			$1025||($1022[$$up$]=$1018);
			
			if (ipa) {
				($1028=$1029=1,$1023=$1001[$1027]) || ($1028=$1029=0,$1001[$1027]=$1023=imba_createElement('div',null,'phonetic mnu25o_ks',null));
				$1028||($1023[$$up$]=$1018);
				($1030=ipa,($1030===$1023[$1032]&&$1028) || ($1023[$1031] = $1023[$placeChild$]($1023[$1032]=$1030,384,$1023[$1031])));
				
			} else {
				($1034=$1035=1,$1023=$1001[$1033]) || ($1034=$1035=0,$1001[$1033]=$1023=imba_createElement('div',null,'mnu25o-kz phonetic mnu25o_ks',"ipa coming soon"));
				$1034||($1023[$$up$]=$1018);
				
			};
		} else {
			($1037=$1038=1,$1022=$1001[$1036]) || ($1037=$1038=0,$1001[$1036]=$1022=imba_createElement('span',null,'mnu25o-la mnu25o_ks',"vida"));
			$1037||($1022[$$up$]=$1018);
			
			if (vida) {
				($1040=$1041=1,$1023=$1001[$1039]) || ($1040=$1041=0,$1001[$1039]=$1023=imba_createElement('div',null,'phonetic mnu25o_ks',null));
				$1040||($1023[$$up$]=$1018);
				($1042=vida,($1042===$1023[$1044]&&$1040) || ($1023[$1043] = $1023[$placeChild$]($1023[$1044]=$1042,384,$1023[$1043])));
				
			} else if (vida_auto) {
				($1046=$1047=1,$1023=$1001[$1045]) || ($1046=$1047=0,$1001[$1045]=$1023=imba_createElement('div',null,'phonetic mnu25o_ks',null));
				$1046||($1023[$$up$]=$1018);
				($1048=vida_auto,($1048===$1023[$1050]&&$1046) || ($1023[$1049] = $1023[$placeChild$]($1023[$1050]=$1048,384,$1023[$1049])));
				
			} else {
				($1052=$1053=1,$1023=$1001[$1051]) || ($1052=$1053=0,$1001[$1051]=$1023=imba_createElement('div',null,'mnu25o-ld phonetic mnu25o_ks',"request"));
				$1052||($1023[$$up$]=$1018);
				
			};
		};
		($1001[$1054] = $1018[$placeChild$]($1022,0,$1001[$1054]));
		($1001[$1055] = $1018[$placeChild$]($1023,0,$1001[$1055]));
		;
		($1058=$1059=1,$1056=$1001[$1057]) || ($1058=$1059=0,$1001[$1057]=$1056=imba_createElement('div',$1001,'switch-wrapper mnu25o_ks',null));
		($1062=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$1062===$1001[$1061]||($1059|=2,$1001[$1061]=$1062));
		$1058 || ($1056.on$(`click`,{$_: [function(e,$$) {
			return api.toggleLearned(state.active_word);
		}]},this));
		($1059&2 && $1056.flag$('switch-wrapper mnu25o_ks'+' '+($1001[$1061] ? `learned` : '')));
		($1065=$1066=1,$1063=$1001[$1064]) || ($1065=$1066=0,$1001[$1064]=$1063=imba_createElement('div',$1056,'switch mnu25o_ks',"learned"));
		($1069=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$1069===$1001[$1068]||($1066|=2,$1001[$1068]=$1069));
		($1066&2 && $1063.flag$('switch mnu25o_ks'+' '+($1001[$1068] ? `learned` : '')));
		;
		;
		$1001[$afterReconcile$]($1003);
		return $1001;
		};
	}
	static {
		register$(this,c$28,'WordBar',2);
		imba_defineTag('word-bar-mnu25o-lg',this,{cssns: 'mnu25o_ks',cssid: 'mnu25o-ks',name: 'WordBar'});
	}
};
let c$29 = Symbol();
class WordCard extends imba_Component {
	get $fit(){
		let el=imba_createElement('a',null,'fit khmer mnu25o_lh $fit',null);
		return (Object.defineProperty(this,'$fit',{value:el}),el);
	}
	
	mount(){
		this.fit_settings = {
			minSize: 16,
			maxSize: 40
		};
		return fitty(this.$fit,this.fit_settings);
	}
	render(){
		var $1086, $1087, $1134, $1070, $1071, $1072, $1074, $1076, $1077, $1079, $1082, $1084, $1085, $1089, $1090, $1092, $1093, $1094, $1098, $1099, $1101, $1102, $1104, $1105, $1106, $1110, $1111, $1112, $1116, $1117, $1120, $1122, $1123, $1126, $1127, $1129, $1130, $1133, $1136, $1137;
		{$1070=this;
		$1070[$beforeReconcile$]();
		($1071=$1072=1,$1070[$1073] === 1) || ($1071=$1072=0,$1070[$1073]=1);
		let vida = dictionary[state.active_word]?.vida;
		let vida_auto = dictionary[state.active_word]?.vida_auto;
		let ipa = dictionary[state.active_word]?.ipa;
		($1076=$1077=1,$1074=$1070[$1075]) || ($1076=$1077=0,$1070[$1075]=($1074=this.$fit,$1074[$$up$]=$1070,$1074));
		$1076 || ($1074.title="Click to search this word on sealang.net dictionary.");
		($1079=("http://sealang.net/api/api.pl?query=" + (state.active_word) + "&service=dictionary"),$1079===$1070[$1078] || ($1074.href=$1070[$1078]=$1079));
		$1076 || ($1074.target="_blank");
		($1079=state.active_word,($1079===$1070[$1081]&&$1076) || ($1070[$1080] = $1074[$placeChild$]($1070[$1081]=$1079,384,$1070[$1080])));
		$1076 || $1070[$appendChild$]($1074);
		;
		($1084=$1085=1,$1082=$1070[$1083]) || ($1084=$1085=0,$1070[$1083]=$1082=imba_createElement('div',$1070,'mnu25o-lk phonetic-wrapper mnu25o_lh',null));
		$1084 || ($1082.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$1086 = $1087 = null;
		if (state.ipa) {
			($1089=$1090=1,$1086=$1070[$1088]) || ($1089=$1090=0,$1070[$1088]=$1086=imba_createElement('span',null,'mnu25o-ll mnu25o_lh',"ipa"));
			$1089||($1086[$$up$]=$1082);
			
			if (ipa) {
				($1092=$1093=1,$1087=$1070[$1091]) || ($1092=$1093=0,$1070[$1091]=$1087=imba_createElement('div',null,'phonetic mnu25o_lh',null));
				$1092||($1087[$$up$]=$1082);
				($1094=ipa,($1094===$1087[$1096]&&$1092) || ($1087[$1095] = $1087[$placeChild$]($1087[$1096]=$1094,384,$1087[$1095])));
				
			} else {
				($1098=$1099=1,$1087=$1070[$1097]) || ($1098=$1099=0,$1070[$1097]=$1087=imba_createElement('div',null,'mnu25o-ln phonetic mnu25o_lh',"unavailable"));
				$1098||($1087[$$up$]=$1082);
				
			};
		} else {
			($1101=$1102=1,$1086=$1070[$1100]) || ($1101=$1102=0,$1070[$1100]=$1086=imba_createElement('span',null,'mnu25o-lo mnu25o_lh',"vida"));
			$1101||($1086[$$up$]=$1082);
			
			if (vida) {
				($1104=$1105=1,$1087=$1070[$1103]) || ($1104=$1105=0,$1070[$1103]=$1087=imba_createElement('div',null,'phonetic mnu25o_lh',null));
				$1104||($1087[$$up$]=$1082);
				($1106=vida,($1106===$1087[$1108]&&$1104) || ($1087[$1107] = $1087[$placeChild$]($1087[$1108]=$1106,384,$1087[$1107])));
				
			} else if (vida_auto) {
				($1110=$1111=1,$1087=$1070[$1109]) || ($1110=$1111=0,$1070[$1109]=$1087=imba_createElement('div',null,'phonetic mnu25o_lh',null));
				$1110||($1087[$$up$]=$1082);
				($1112=vida_auto,($1112===$1087[$1114]&&$1110) || ($1087[$1113] = $1087[$placeChild$]($1087[$1114]=$1112,384,$1087[$1113])));
				
			} else {
				($1116=$1117=1,$1087=$1070[$1115]) || ($1116=$1117=0,$1070[$1115]=$1087=imba_createElement('div',null,'phonetic mnu25o_lh',"unavailable"));
				$1116||($1087[$$up$]=$1082);
				
			};
		};
		($1070[$1118] = $1082[$placeChild$]($1086,0,$1070[$1118]));
		($1070[$1119] = $1082[$placeChild$]($1087,0,$1070[$1119]));
		;
		($1122=$1123=1,$1120=$1070[$1121]) || ($1122=$1123=0,$1070[$1121]=$1120=imba_createElement('div',$1070,'switch-wrapper mnu25o_lh',null));
		($1126=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$1126===$1070[$1125]||($1123|=2,$1070[$1125]=$1126));
		$1122 || ($1120.on$(`click`,{$_: [function(e,$$) {
			return api.toggleLearned(state.active_word);
		}]},this));
		($1123&2 && $1120.flag$('switch-wrapper mnu25o_lh'+' '+($1070[$1125] ? `learned` : '')));
		($1129=$1130=1,$1127=$1070[$1128]) || ($1129=$1130=0,$1070[$1128]=$1127=imba_createElement('div',$1120,'switch mnu25o_lh',"learned"));
		($1133=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$1133===$1070[$1132]||($1130|=2,$1070[$1132]=$1133));
		($1130&2 && $1127.flag$('switch mnu25o_lh'+' '+($1070[$1132] ? `learned` : '')));
		;
		;
		$1134 = null;
		if (audio.hasOwnProperty(state.active_word)) {
			($1136=$1137=1,$1134=$1070[$1135]) || ($1136=$1137=0,$1070[$1135]=$1134=imba_createComponent(AudioPlayer,null,'mnu25o_lh',null));
			$1136||($1134[$$up$]=$1070);
			$1136 || !$1134.setup || $1134.setup($1137);
			$1134[$afterVisit$]($1137);
			
		};
		($1070[$1138] = $1070[$placeChild$]($1134,0,$1070[$1138]));
		$1070[$afterReconcile$]($1072);
		return $1070;
		};
	}
	static {
		register$(this,c$29,'WordCard',2);
		imba_defineTag('word-card-mnu25o-lv',this,{cssns: 'mnu25o_lh',cssid: 'mnu25o-lh',name: 'WordCard'});
	}
};

let c$30 = Symbol();
class AudioPlayer extends imba_Component {
	get $track(){
		let el=imba_createElement('audio',null,'$track',null);
		return (Object.defineProperty(this,'$track',{value:el}),el);
	}
	render(){
		var self = this, $1151, $1139, $1140, $1141, $1143, $1145, $1146, $1148, $1149, $1153, $1154, $1155, $1156, $1158, $1159, $1160, $1161;
		{$1139=this;
		$1139[$beforeReconcile$]();
		($1140=$1141=1,$1139[$1142] === 1) || ($1140=$1141=0,$1139[$1142]=1);
		let word = "";
		if (this.manual) {
			word = this.manual;
		} else {
			word = state.active_word;
		};
		($1145=$1146=1,$1143=$1139[$1144]) || ($1145=$1146=0,$1139[$1144]=($1143=this.$track,$1143[$$up$]=$1139,$1143));
		$1145 || ($1143.on$(`ended`,{commit: true},this));
		($1148=audio[word],$1148===$1139[$1147] || ($1143.src=$1139[$1147]=$1148));
		$1145 || ($1143.type="audio/mpeg");
		$1145 || ($1143.preload="auto");
		$1145 || $1139[$appendChild$]($1143);
		;
		($1149=$1139[$1150]) || ($1139[$1150]=$1149=imba_createElement('div',$1139,'mnu25o-ly button-wrapper',null));
		$1151 = null;
		if (this.$track.paused) { // when paused
			($1153=$1154=1,$1151=$1139[$1152]) || ($1153=$1154=0,$1139[$1152]=$1151=imba_createElement('div',null,'mnu25o-lz play-audio',null));
			$1153||($1151[$$up$]=$1149);
			$1153 || ($1151.on$(`hotkey`,{options: ['space|a']},this));
			$1153 || ($1151.on$(`click`,{$_: [function(e,$$) {
				return self.$track.play(e);
			}]},this));
			$1153 || ($1155=imba_createSVGElement('svg',$1151,'mnu25o-ma',null));
			$1153 || ($1155.set$('stroke-width',"1.5"));
			$1153 || ($1155.set$('viewBox',"0 0 24 24"));
			$1153 || ($1155.set$('fill',"none"));
			$1153 || ($1155.set$('xmlns',"http://www.w3.org/2000/svg"));
			$1153 || ($1155.set$('color',"#000000"));
			$1153 || ($1156=imba_createSVGElement('path',$1155,'mnu25o-mb',null));
			$1153 || ($1156.set$('d',"M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z"));
			$1153 || ($1156.set$('stroke',"#000000"));
			$1153 || ($1156.set$('stroke-width',"1.5"));
			$1153 || ($1156.set$('stroke-linecap',"round"));
			$1153 || ($1156.set$('stroke-linejoin',"round"));
			;
			;
		} else { // when playing
			($1158=$1159=1,$1151=$1139[$1157]) || ($1158=$1159=0,$1139[$1157]=$1151=imba_createElement('div',null,'mnu25o-mc play-audio',null));
			$1158||($1151[$$up$]=$1149);
			$1158 || ($1151.on$(`hotkey`,{options: ['space']},this));
			$1158 || ($1151.on$(`click`,{$_: [function(e,$$) {
				return self.$track.pause(e);
			}]},this));
			$1158 || ($1160=imba_createSVGElement('svg',$1151,'mnu25o-md',null));
			$1158 || ($1160.set$('stroke-width',"1.5"));
			$1158 || ($1160.set$('fill',"none"));
			$1158 || ($1160.set$('xmlns',"http://www.w3.org/2000/svg"));
			$1158 || ($1160.set$('color',"#000"));
			$1158 || ($1160.set$('viewBox',"0 0 24 24"));
			$1158 || ($1161=imba_createSVGElement('path',$1160,'mnu25o-me',null));
			$1158 || ($1161.set$('d',"M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6z"));
			;
			;
		};
		($1139[$1162] = $1149[$placeChild$]($1151,0,$1139[$1162]));
		;
		$1139[$afterReconcile$]($1141);
		return $1139;
		};
	}
	static {
		register$(this,c$30,'AudioPlayer',2);
		imba_defineTag('audio-player-mnu25o-mf',this,{name: 'AudioPlayer'});
	}
};
// CARD[epic=CARD, seq=31] DefinitionCard
let c$31 = Symbol();
class DefinitionCard extends imba_Component {
	render(){
		var $1167, $1168, $1163, $1164, $1165, $1170, $1171, $1173, $1174, $1176, $1177, $1178, $1181, $1184, $1182, $1185, $1186, $1188, $1192, $1194, $1200, $1201, $1203, $1204, $1207, $1208, $1209, $1210;
		{$1163=this;
		$1163[$beforeReconcile$]();
		($1164=$1165=1,$1163[$1166] === 1) || ($1164=$1165=0,$1163[$1166]=1);
		let word_object = dictionary[state.active_word];
		$1167 = $1168 = null;
		if (!(is$(word_object.def,false))) {
			($1170=$1171=1,$1167=$1163[$1169]) || ($1170=$1171=0,$1163[$1169]=$1167=imba_createElement('h2',null,null,"Definition"));
			$1170||($1167[$$up$]=$1163);
			
			($1173=$1174=1,$1168=$1163[$1172]) || ($1173=$1174=0,$1163[$1172]=$1168=imba_createElement('ol',null,null,null));
			$1173||($1168[$$up$]=$1163);
			($1176 = $1168[$1175]) || ($1168[$1175]=$1176=imba_createKeyedList(1408,$1168));
			$1177 = 0;
			$1178=$1176.$;
			for (let $1179 = 0, $1180 = iterable$(word_object.def), $1198 = $1180.length; $1179 < $1198; $1179++) {
				let item = $1180[$1179];
				if (item.includes('=')) {
					let line = item.split('=');
					let use = line[0];
					let translations = line[1].split('|');
					($1184=$1185=1,$1181=($1182=$1178[$getRenderContext$]($1183)).get($1177)) || ($1184=$1185=0,$1182.set($1177,$1181=imba_createElement('li',$1176,null,null)));
					$1184||($1181[$$up$]=$1176);
					($1186=$1181[$1187]) || ($1181[$1187]=$1186=imba_createElement('span',$1181,'use',null));
					(imba_renderContext.context=($1181[$1190] || ($1181[$1190]={_:$1186})),$1188=use.toUpperCase(),imba_renderContext.context=null,($1188===$1181[$1191]&&$1184) || ($1181[$1189] = $1186[$placeChild$]($1181[$1191]=$1188,128,$1181[$1189])));
					$1184 || $1186[$placeChild$](" ");
					;
					($1192=$1181[$1193]) || ($1181[$1193]=$1192=imba_createElement('span',$1181,'def',null));
					(imba_renderContext.context=($1181[$1196] || ($1181[$1196]={_:$1192})),$1194=translations.join(', '),imba_renderContext.context=null,($1194===$1181[$1197]&&$1184) || ($1181[$1195] = $1192[$placeChild$]($1181[$1197]=$1194,384,$1181[$1195])));
					;
					$1176.push($1181,$1177++,$1182);
				};
			};$1176[$afterVisit$]($1177);;
		} else {
			($1200=$1201=1,$1167=$1163[$1199]) || ($1200=$1201=0,$1163[$1199]=$1167=imba_createElement('h2',null,null,"Google Definition"));
			$1200||($1167[$$up$]=$1163);
			
			($1168 = $1163[$1202]) || ($1163[$1202]=$1168=imba_createIndexedList(0,null));
			$1168[$$up$] = $1163;
			$1203 = 0;
			$1204=$1168.$;
			for (let $1205 = 0, $1206 = iterable$(dictionary[state.active_word].google.split('|')), $1213 = $1206.length; $1205 < $1213; $1205++) {
				let defi = $1206[$1205];
				($1208=$1209=1,$1207=$1204[$1203]) || ($1208=$1209=0,$1204[$1203]=$1207=imba_createElement('p',$1168,null,null));
				$1208||($1207[$$up$]=$1168);
				($1210=defi,($1210===$1207[$1212]&&$1208) || ($1207[$1211] = $1207[$placeChild$]($1207[$1212]=$1210,384,$1207[$1211])));
				$1203++;
				
			};$1168[$afterVisit$]($1203);
		};
		($1163[$1214] = $1163[$placeChild$]($1167,0,$1163[$1214]));
		($1163[$1215] = $1163[$placeChild$]($1168,0,$1163[$1215]));
		$1163[$afterReconcile$]($1165);
		return $1163;
		};
	}
	static {
		register$(this,c$31,'DefinitionCard',2);
		imba_defineTag('definition-card-mnu25o-mo',this,{name: 'DefinitionCard'});
	}
};

// CARD[epic=CARD, seq=32] ShortcutCard
let c$32 = Symbol();
class ShortcutCard extends imba_Component {
	
	render(){
		var $1216, $1217, $1218, $1220, $1221, $1222, $1223, $1224, $1225, $1226, $1227, $1228, $1229, $1230, $1231, $1232, $1233, $1234, $1235, $1236, $1237, $1238, $1239, $1240, $1241, $1242, $1243, $1244, $1245, $1246, $1247, $1248, $1249, $1250, $1251, $1252, $1253, $1254, $1255, $1256, $1257, $1258, $1259, $1260, $1261, $1262, $1263, $1264;
		$1216=this;
		$1216[$beforeReconcile$]();
		($1217=$1218=1,$1216[$1219] === 1) || ($1217=$1218=0,$1216[$1219]=1);
		((!$1217||$1218&2) && $1216.flagSelf$('shortcuts card'));
		$1217 || ($1220=imba_createElement('h2',$1216,'mnu25o_mp',"Shortcuts"));
		;
		$1217 || ($1221=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1222=imba_createElement('span',$1221,'key-text mnu25o_mp',"Toggle learned"));
		;
		$1217 || ($1223=imba_createElement('span',$1221,'key-wrapper mnu25o_mp',null));
		$1217 || ($1224=imba_createElement('span',$1223,'key mnu25o_mp',"s"));
		;
		$1217 || ($1225=imba_createElement('span',$1223,'key mnu25o_mp',"enter"));
		;
		$1217 || ($1226=imba_createElement('span',$1223,'key mnu25o_mp',"hold 1s"));
		;
		;
		;
		$1217 || ($1227=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1228=imba_createElement('span',$1227,'key-text mnu25o_mp',"Play audio "));
		;
		$1217 || ($1229=imba_createElement('span',$1227,'key-wrapper mnu25o_mp',null));
		$1217 || ($1230=imba_createElement('span',$1229,'key mnu25o_mp',"a"));
		;
		$1217 || ($1231=imba_createElement('span',$1229,'key mnu25o_mp',"space"));
		;
		$1217 || ($1232=imba_createElement('span',$1229,'key mnu25o_mp',"dbl tap"));
		;
		;
		;
		$1217 || ($1233=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1234=imba_createElement('span',$1233,'key-text mnu25o_mp',"Previous lesson"));
		;
		$1217 || ($1235=imba_createElement('span',$1233,'key-wrapper horizontal mnu25o_mp',null));
		$1217 || ($1236=imba_createElement('span',$1235,'key mnu25o_mp',"e"));
		;
		$1217 || ($1237=imba_createElement('span',$1235,'key mnu25o_mp',"↑"));
		;
		;
		;
		$1217 || ($1238=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1239=imba_createElement('span',$1238,'key-text mnu25o_mp',"Next lesson"));
		;
		$1217 || ($1240=imba_createElement('span',$1238,'key-wrapper horizontal mnu25o_mp',null));
		$1217 || ($1241=imba_createElement('span',$1240,'key mnu25o_mp',"r"));
		;
		$1217 || ($1242=imba_createElement('span',$1240,'key mnu25o_mp',"↓"));
		;
		;
		;
		$1217 || ($1243=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1244=imba_createElement('span',$1243,'key-text mnu25o_mp',"Previous word"));
		;
		$1217 || ($1245=imba_createElement('span',$1243,'key-wrapper horizontal mnu25o_mp',null));
		$1217 || ($1246=imba_createElement('span',$1245,'key mnu25o_mp',"d"));
		;
		$1217 || ($1247=imba_createElement('span',$1245,'key mnu25o_mp',"←"));
		;
		;
		;
		$1217 || ($1248=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1249=imba_createElement('span',$1248,'key-text mnu25o_mp',"Next word"));
		;
		$1217 || ($1250=imba_createElement('span',$1248,'key-wrapper horizontal mnu25o_mp',null));
		$1217 || ($1251=imba_createElement('span',$1250,'key mnu25o_mp',"f"));
		;
		$1217 || ($1252=imba_createElement('span',$1250,'key mnu25o_mp',"→"));
		;
		;
		;
		$1217 || ($1253=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1254=imba_createElement('span',$1253,'key-text mnu25o_mp',"Toggle dark mode"));
		;
		$1217 || ($1255=imba_createElement('span',$1253,'key-wrapper horizontal mnu25o_mp',null));
		$1217 || ($1256=imba_createElement('span',$1255,'key mnu25o_mp',"shift & d"));
		;
		;
		;
		$1217 || ($1257=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1258=imba_createElement('span',$1257,'key-text mnu25o_mp',"Change phonetics system"));
		;
		$1217 || ($1259=imba_createElement('span',$1257,'key-wrapper mnu25o_mp',null));
		$1217 || ($1260=imba_createElement('span',$1259,'key mnu25o_mp',"v"));
		;
		$1217 || ($1261=imba_createElement('span',$1259,'key mnu25o_mp',"shift & i"));
		;
		;
		;
		$1217 || ($1262=imba_createElement('div',$1216,'shortcut-wrapper mnu25o_mp',null));
		$1217 || ($1263=imba_createElement('span',$1262,'key-text mnu25o_mp',"Clear all progres. Refresh browser after"));
		;
		$1217 || ($1264=imba_createElement('span',$1262,'key mnu25o_mp',"shift & c & l"));
		;
		;
		$1216[$afterReconcile$]($1218);
		return $1216;
	}
	static {
		register$(this,c$32,'ShortcutCard',2);
		imba_defineTag('shortcut-card-mnu25o-ok',this,{cssns: 'mnu25o_mp',name: 'ShortcutCard'});
	}
};
let c$33 = Symbol();
class SpellingCard extends imba_Component {
	
	render(){
		var $1294, $1265, $1266, $1267, $1269, $1271, $1272, $1273, $1276, $1277, $1278, $1279, $1281, $1282, $1285, $1288, $1290, $1292, $1296, $1297, $1298, $1302, $1303, $1304;
		{$1265=this;
		$1265[$beforeReconcile$]();
		($1266=$1267=1,$1265[$1268] === 1) || ($1266=$1267=0,$1265[$1268]=1);
		$1266 || ($1269=imba_createElement('h2',$1265,'mnu25o_ol',"Word Spelling"));
		;
		let kh_c1 = "([កខចឆដឋណតថបផសហឡអ])|";
		let kh_L2weak = "([្][ងញនមយរលវ])|";
		let kh_L2strong = "([្][គឃជឈឌឍទធពភ])|";
		let independent_vowels = "([ឯឥឦឲឧឩឱឨឳឪឫឬឭឮឰ])|";
		let vowel_pairs = "ុ  ិ  ះ  ា  ំ  ោ  េ".split(' ');
		let kh_numbers = "[០១២៣៤៥៦៧៨៩]";
		let kh_symbols = "[។៕៖ៗ៘៙៚៛ៜ៝]";
		let kh_nuh = "([ន][ោ][ះ])|";
		let kh_nih = "([ន][េ][ះ])|";
		let kh_leg = "([្][ក-ឡ])|";
		let kh_aang = "([ា][ំ][ង])|";
		let kh_av = "([ា][វ])|";
		let kh_ov = "([ូ][វ])|";
		let kh_uay = "([ួ][យ])|";
		let kh_eaq = "([ា][ក-ឡ][់])|";
		let kh_bantok_piir = "([ក-ឡ][៉])|";
		let kh_treisap = "([ក-ឡ][៊])|";
		let kh_s_stress = "([ស][់])|";
		let kh_c_stress = "([ក-ឡ][់])|";
		let kh_v = "([ិ-៑]+)|";
		let kh_c = "([ក-ឡ])|";
		let regtest = new RegExp(
			kh_leg + kh_aang + kh_eaq + kh_bantok_piir + kh_treisap + kh_s_stress + kh_c_stress + kh_v + kh_c + '.','g'
		);
		let testword = state.active_word;
		let groups = testword.match(regtest);
		($1271 = $1265[$1270]) || ($1265[$1270]=$1271=imba_createIndexedList(256,$1265));
		$1272 = 0;
		$1273=$1271.$;
		for (let $1274 = 0, $1275 = iterable$(groups), $1308 = $1275.length; $1274 < $1308; $1274++) {
			let item = $1275[$1274];
			let cluster = clusters[item];
			let vowel = item.match(/[ា-៑]/);
			($1277=$1278=1,$1276=$1273[$1272]) || ($1277=$1278=0,$1273[$1272]=$1276=imba_createElement('div',$1271,'letter-row mnu25o_ol',null));
			$1277||($1276[$$up$]=$1271);
			($1281=$1282=1,$1279=$1276[$1280]) || ($1281=$1282=0,$1276[$1280]=$1279=imba_createElement('span',$1276,'letter mnu25o_ol',null));
			($1285=cluster?.type,$1285===$1276[$1284]||($1282|=2,$1276[$1284]=$1285));
			($1282&2 && $1279.flag$('letter mnu25o_ol'+' '+($1276[$1284]||'')));
			($1285=item,($1285===$1276[$1287]&&$1281) || ($1276[$1286] = $1279[$placeChild$]($1276[$1287]=$1285,384,$1276[$1286])));
			;
			($1288=$1276[$1289]) || ($1276[$1289]=$1288=imba_createElement('span',$1276,'vida mnu25o_ol',null));
			($1290=$1276[$1291]) || ($1276[$1291]=$1290=imba_createElement('span',$1288,'mnu25o_ol',null));
			($1292=cluster?.vida[0],$1292===$1276[$1293] || $1290.text$(String($1276[$1293]=$1292)));
			;
			$1294 = null;
			if (vowel) {
				($1296=$1297=1,$1294=$1276[$1295]) || ($1296=$1297=0,$1276[$1295]=$1294=imba_createElement('span',null,'mnu25o_ol',null));
				$1296||($1294[$$up$]=$1288);
				$1296 || $1294[$placeChild$]("|");
				($1298=cluster?.vida[1],($1298===$1294[$1300]&&$1296) || ($1294[$1299] = $1294[$placeChild$]($1294[$1300]=$1298,256,$1294[$1299])));
				
			} else {
				($1302=$1303=1,$1294=$1276[$1301]) || ($1302=$1303=0,$1276[$1301]=$1294=imba_createElement('span',null,'mnu25o_ol',null));
				$1302||($1294[$$up$]=$1288);
				$1302 || $1294[$placeChild$]("(");
				($1304=cluster?.vida[1],($1304===$1294[$1306]&&$1302) || ($1294[$1305] = $1294[$placeChild$]($1294[$1306]=$1304,0,$1294[$1305])));
				$1302 || $1294[$placeChild$](")");
				
			};
			($1276[$1307] = $1288[$placeChild$]($1294,0,$1276[$1307]));
			;
			$1272++;
		};$1271[$afterVisit$]($1272);;
		$1265[$afterReconcile$]($1267);
		return $1265;
		};
	}
	static {
		register$(this,c$33,'SpellingCard',2);
		imba_defineTag('spelling-card-mnu25o-ou',this,{cssns: 'mnu25o_ol',cssid: 'mnu25o-ol',name: 'SpellingCard'});
	}
};

// TAG[epic=NAV, seq=34] LessonNav
let c$34 = Symbol();
class LessonNav extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		super[__init__$](...arguments);
		this.lessons = $$ ? $$.lessons : undefined;
		
	}
	routed(params,test){
		let [col,les,phr] = params.learning_id.split('-');
		state.collection = col;
		state.lesson = les || false;
		state.phrase = phr || false;
		return api.save();
	}
	render(){
		var $1309, $1310, $1311, $1314, $1315, $1316, $1319, $1320, $1321, $1324;
		{$1309=this;
		$1309[$beforeReconcile$]();
		($1310=$1311=1,$1309[$1312] === 1) || ($1310=$1311=0,$1309[$1312]=1);
		let active_collection = state.learning_data_flat.collections[state.collection];
		($1314 = $1309[$1313]) || ($1309[$1313]=$1314=imba_createIndexedList(384,$1309));
		$1315 = 0;
		$1316=$1314.$;
		for (let $1317 = 0, $1318 = iterable$(active_collection.lesson_keys), $1327 = $1318.length; $1317 < $1327; $1317++) {
			let lesson_key = $1318[$1317];
			let lesson_item = state.learning_data_flat.lessons[lesson_key];
			($1320=$1321=1,$1319=$1316[$1315]) || ($1320=$1321=0,$1316[$1315]=$1319=imba_createComponent(LessonNavItem,$1314,'mnu25o_ov',null));
			$1320||($1319[$$up$]=$1314);
			($1324=(is$(state.lesson,lesson_key.split('-')[1])||undefined),$1324===$1319[$1323]||($1321|=2,$1319[$1323]=$1324));
			($1324=("/learn/" + lesson_key + "-1/1"),$1324===$1319[$1325] || ($1319.routeΞto=$1319[$1325]=$1324));
			($1324=state.learning_data_flat.lessons[lesson_key],$1324===$1319[$1326] || ($1319.lesson=$1319[$1326]=$1324));
			($1321&2 && $1319.flag$('mnu25o_ov'+' '+($1319[$1323] ? `active` : '')));
			$1320 || !$1319.setup || $1319.setup($1321);
			$1319[$afterVisit$]($1321);
			$1315++;
			
		};$1314[$afterVisit$]($1315);;
		$1309[$afterReconcile$]($1311);
		return $1309;
		};
	}
	static {
		register$(this,c$34,'LessonNav',2);
		imba_defineTag('lesson-nav-mnu25o-oy',this,{cssns: 'mnu25o_ov',cssid: 'mnu25o-ov',name: 'LessonNav'});
	}
};

// TAG[epic=NAV, seq=35] LessonNavItem
let c$35 = Symbol();
class LessonNavItem extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		super[__init__$](...arguments);
		this.lesson = $$ ? $$.lesson : undefined;
		
	}
	render(){
		var $1328, $1329, $1330, $1333, $1334, $1336, $1339, $1341, $1346, $1348, $1349, $1351;
		{$1328=this;
		$1328[$beforeReconcile$]();
		($1329=$1330=1,$1328[$1331] === 1) || ($1329=$1330=0,$1328[$1331]=1);
		((!$1329||$1330&2) && $1328.flagSelf$('mnu25o-pa lesson-button'+' '+'`chapter_active`'));
		$1329 || ($1333=imba_createElement('div',$1328,'mnu25o-pb chapter-text mnu25o_oz',null));
		($1334=$1328[$1335]) || ($1328[$1335]=$1334=imba_createElement('div',$1333,'chapter-name mnu25o_oz',null));
		($1336=this.lesson.title,($1336===$1328[$1338]&&$1329) || ($1328[$1337] = $1334[$placeChild$]($1328[$1338]=$1336,384,$1328[$1337])));
		;
		;
		let progress_string = ("" + (this.lesson.words_progress));
		($1339=$1328[$1340]) || ($1328[$1340]=$1339=imba_createElement('div',$1328,'mnu25o-pd chapter-number mnu25o_oz',null));
		($1341=this.lesson.words_learned,($1341===$1328[$1343]&&$1329) || ($1328[$1342] = $1339[$placeChild$]($1328[$1343]=$1341,128,$1328[$1342])));
		$1329 || $1339[$placeChild$]("/");
		($1341=this.lesson.words_total,($1341===$1328[$1345]&&$1329) || ($1328[$1344] = $1339[$placeChild$]($1328[$1345]=$1341,0,$1328[$1344])));
		$1329 || $1339[$placeChild$](" words");
		;
		($1348=$1349=1,$1346=$1328[$1347]) || ($1348=$1349=0,$1328[$1347]=$1346=imba_createComponent(ProgressBar,$1328,'color mnu25o_oz',null));
		($1351=this.lesson.words_progress,$1351===$1328[$1350] || ($1346.progress=$1328[$1350]=$1351));
		$1348 || !$1346.setup || $1346.setup($1349);
		$1346[$afterVisit$]($1349);
		$1348 || $1328[$appendChild$]($1346);
		;
		$1328[$afterReconcile$]($1330);
		return $1328;
		};
	}
	static {
		register$(this,c$35,'LessonNavItem',2);
		imba_defineTag('lesson-nav-item-mnu25o-pf',this,{cssns: 'mnu25o_oz',cssid: 'mnu25o-oz',name: 'LessonNavItem'});
	}
};

// TAG[epic=NAV, seq=36] PhraseNav
let c$36 = Symbol();
class PhraseNav extends imba_Component {
	
	
	
	// NOTE: Goes to the first verse of the next phrase
	nextPhrase(){
		if (this.phrase_index < this.last_phrase_index) {
			this.phrase_index++;
			this.word_index = 0;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	
	// NOTE: Goes to the last word of hte previous phrase
	prevPhraseLast(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = this.phrases[this.phrase_index].khmer.split('|').length - 1;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	
	// NOTE: Goes to the first word of the previous phrase
	prevPhraseZero(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = 0;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	routed(params,test){
		let [col,les,phr] = params.learning_id.split('-');
		state.collection = col;
		state.lesson = les || false;
		state.phrase = phr || false;
		return api.save();
	}
	build(){
		this.phrases = state.learning_data_flat.phrases;
		return this.progress = 0;
	}
	render(){
		var $1356, $1352, $1353, $1354, $1358, $1359, $1362, $1365, $1363, $1366, $1368, $1369, $1371, $1372, $1373, $1376;
		$1352=this;
		$1352[$beforeReconcile$]();
		($1353=$1354=1,$1352[$1355] === 1) || ($1353=$1354=0,$1352[$1355]=1);
		$1356 = null;
		if (state.lesson) {
			let lesson = state.learning_data_flat.lessons[("" + (state.collection) + "-" + (state.lesson))];
			($1356 = $1352[$1357]) || ($1352[$1357]=$1356=imba_createKeyedList(1024,null));
			$1356[$$up$] = $1352;
			$1358 = 0;
			$1359=$1356.$;
			for (let $1360 = 0, $1361 = iterable$(lesson.phrase_keys), $1380 = $1361.length; $1360 < $1380; $1360++) {
				let phrase_key = $1361[$1360];
				let phrase_item = state.learning_data_flat.phrases[phrase_key];
				if (phrase_item) {
					{($1365=$1366=1,$1362=($1363=$1359[$getRenderContext$]($1364)).get($1358)) || ($1365=$1366=0,$1363.set($1358,$1362=imba_createElement('div',$1356,'number-toggle mnu25o_pg',null)));
					$1365||($1362[$$up$]=$1356);
					($1368=("/learn/" + phrase_key + "/1"),$1368===$1362[$1367] || ($1362.routeΞto=$1362[$1367]=$1368));
					let isActive = state.phrase == phrase_item.p;
					($1371=$1372=1,$1369=$1362[$1370]) || ($1371=$1372=0,$1362[$1370]=$1369=imba_createComponent(ElemProgressRing,$1362,'mnu25o_pg',null));
					$1373 = $1369[$getSlot$]('__',$1362);
					($1376=(isActive||undefined),$1376===$1362[$1375]||($1372|=2,$1362[$1375]=$1376));
					($1376=phrase_item.words_progress,$1376===$1362[$1377] || ($1369.progress=$1362[$1377]=$1376));
					$1371 || ($1369.size=30);
					($1372&2 && $1369.flag$('mnu25o_pg'+' '+($1362[$1375] ? `active` : '')));
					($1376=phrase_item.p,($1376===$1362[$1379]&&$1371) || ($1362[$1378] = $1373[$placeChild$]($1362[$1379]=$1376,384,$1362[$1378])));
					$1371 || !$1369.setup || $1369.setup($1372);
					$1369[$afterVisit$]($1372);
					$1371 || $1362[$appendChild$]($1369);
					;
					$1365 || !$1362.setup || $1362.setup($1366);
					$1362[$afterVisit$]($1366);
					$1356.push($1362,$1358++,$1363);
					};
				};
			};$1356[$afterVisit$]($1358);
		};
		($1352[$1381] = $1352[$placeChild$]($1356,0,$1352[$1381]));
		$1352[$afterReconcile$]($1354);
		return $1352;
	}
	static {
		register$(this,c$36,'PhraseNav',2);
		imba_defineTag('phrase-nav-mnu25o-pk',this,{cssns: 'mnu25o_pg',cssid: 'mnu25o-pg',name: 'PhraseNav'});
	}
};

// TAG[epic=Modal, seq=37] Login Page
let c$37 = Symbol();
class LoginPageComponent extends imba_Component {
	
	googleAuth(){
		api.logIn();
		return imba_commit();
	}
	facebookAuth(){
		api.logIn();
		return imba_commit();
	}
	appleAuth(){
		api.logIn();
		return imba_commit();
	}
	mockAuthToggle(){
		api.logIn();
		return imba_commit();
		
	}
	render(){
		var $1382, $1383, $1384, $1386 = this._ns_ || '', $1387, $1388, $1389, $1390, $1391, $1392, $1393, $1394, $1395, $1396, $1397, $1398, $1399, $1400, $1401, $1402, $1404, $1405;
		$1382=this;
		$1382[$beforeReconcile$]();
		($1383=$1384=1,$1382[$1385] === 1) || ($1383=$1384=0,$1382[$1385]=1);
		$1383 || ($1387=imba_createElement('div',$1382,`mnu25o-pn ${$1386}`,null));
		$1383 || ($1388=imba_createElement('div',$1387,`card ${$1386}`,null));
		$1383 || ($1389=imba_createElement('form',$1388,`form ${$1386}`,null));
		$1383 || ($1389.action="#");
		$1383 || ($1389.method="POST");
		$1383 || ($1390=imba_createElement('div',$1389,`field-wrapper ${$1386}`,null));
		$1383 || ($1391=imba_createElement('label',$1390,`${$1386}`,"Email Address"));
		$1383 || ($1391.set$('for',"email"));
		;
		$1383 || ($1392=imba_createElement('input',$1390,`field email ${$1386}`,null));
		$1383 || ($1392.name="email");
		$1383 || ($1392.set$('autocomplete',"email"));
		$1383 || ($1392.required="");
		;
		;
		$1383 || ($1393=imba_createElement('div',$1389,`field-wrapper ${$1386}`,null));
		$1383 || ($1394=imba_createElement('label',$1393,`${$1386}`,"Password"));
		$1383 || ($1394.set$('for',"password"));
		;
		$1383 || ($1395=imba_createElement('input',$1393,`field email ${$1386}`,null));
		$1383 || ($1395.name="password");
		$1383 || ($1395.set$('autocomplete',"username"));
		$1383 || ($1395.required="");
		;
		;
		$1383 || ($1396=imba_createElement('div',$1389,`options ${$1386}`,null));
		$1383 || ($1397=imba_createElement('input',$1396,`email ${$1386}`,null));
		$1383 || ($1397.name="remember-me");
		$1383 || ($1397.type="checkbox");
		$1383 || ($1397.set$('autocomplete',"remember-me"));
		$1383 || ($1397.required="");
		;
		$1383 || ($1398=imba_createElement('label',$1396,`${$1386}`,"Remember Me"));
		$1383 || ($1398.set$('for',"remember-me"));
		;
		$1383 || ($1399=imba_createElement('a',$1396,`mnu25o-pz forgot-link ${$1386}`,"Forgot your password?"));
		$1383 || ($1399.href="");
		;
		;
		$1383 || ($1400=imba_createElement('div',$1389,`login-button ${$1386}`,"Sign In"));
		$1383 || ($1400.on$(`click`,{mockAuthToggle: true},this));
		;
		$1383 || ($1401=imba_createElement('hr',$1389,`mnu25o-qb ${$1386}`,null));
		;
		($1404=$1405=1,$1402=$1382[$1403]) || ($1404=$1405=0,$1382[$1403]=$1402=imba_createComponent(ThirdPartyLogins,$1389,`${$1386}`,null));
		$1404 || !$1402.setup || $1402.setup($1405);
		$1402[$afterVisit$]($1405);
		$1404 || $1389[$appendChild$]($1402);
		;
		;
		;
		;
		$1382[$afterReconcile$]($1384);
		return $1382;
	}
	static {
		register$(this,c$37,'login-page',2);
		imba_defineTag('login-page',this,{cssns: 'mnu25o_pl',cssid: 'mnu25o-pl'});
	}
};

let c$38 = Symbol();
class ThirdPartyLogins extends imba_Component {
	
	
	render(){
		var $1406, $1407, $1408, $1410, $1411, $1412, $1414, $1415, $1416, $1417, $1418, $1420, $1421, $1422, $1423, $1424, $1426, $1427, $1428;
		$1406=this;
		$1406[$beforeReconcile$]();
		($1407=$1408=1,$1406[$1409] === 1) || ($1407=$1408=0,$1406[$1409]=1);
		$1407 || ($1410=imba_createElement('div',$1406,'login-button-wrapper mnu25o_qd',null));
		$1407 || ($1411=imba_createElement('div',$1410,'login-button mnu25o_qd',null));
		$1407 || ($1411.on$(`click`,{googleAuth: true},this));
		($1414=$1415=1,$1412=$1406[$1413]) || ($1414=$1415=0,$1406[$1413]=$1412=imba_createComponent(GoogleIcon,$1411,'button-logo mnu25o_qd',null));
		$1414 || !$1412.setup || $1412.setup($1415);
		$1412[$afterVisit$]($1415);
		$1414 || $1411[$appendChild$]($1412);
		;
		$1407 || ($1416=imba_createElement('span',$1411,'mnu25o_qd',"Sign In with Google"));
		;
		;
		$1407 || ($1417=imba_createElement('div',$1410,'login-button mnu25o_qd',null));
		$1407 || ($1417.on$(`click`,{facebookAuth: true},this));
		($1420=$1421=1,$1418=$1406[$1419]) || ($1420=$1421=0,$1406[$1419]=$1418=imba_createComponent(FacebookIcon,$1417,'button-logo mnu25o_qd',null));
		$1420 || !$1418.setup || $1418.setup($1421);
		$1418[$afterVisit$]($1421);
		$1420 || $1417[$appendChild$]($1418);
		;
		$1407 || ($1422=imba_createElement('span',$1417,'mnu25o_qd',"Sign In with Facebook"));
		;
		;
		$1407 || ($1423=imba_createElement('div',$1410,'login-button mnu25o_qd',null));
		$1407 || ($1423.on$(`click`,{appleAuth: true},this));
		($1426=$1427=1,$1424=$1406[$1425]) || ($1426=$1427=0,$1406[$1425]=$1424=imba_createComponent(AppleIcon,$1423,'button-logo mnu25o_qd',null));
		$1426 || !$1424.setup || $1424.setup($1427);
		$1424[$afterVisit$]($1427);
		$1426 || $1423[$appendChild$]($1424);
		;
		$1407 || ($1428=imba_createElement('span',$1423,'mnu25o_qd',"Sign In with Apple"));
		;
		;
		;
		$1406[$afterReconcile$]($1408);
		return $1406;
	}
	static {
		register$(this,c$38,'ThirdPartyLogins',2);
		imba_defineTag('third-party-logins-mnu25o-qp',this,{cssns: 'mnu25o_qd',name: 'ThirdPartyLogins'});
	}
};
let c$39 = Symbol();
class GoogleIcon extends imba_Component {
	
	render(){
		var $1429, $1430, $1431, $1433, $1434, $1435, $1436, $1437, $1438;
		$1429=this;
		$1429[$beforeReconcile$]();
		($1430=$1431=1,$1429[$1432] === 1) || ($1430=$1431=0,$1429[$1432]=1);
		$1430 || ($1433=imba_createSVGElement('svg',$1429,null,null));
		$1430 || ($1433.set$('viewBox',"-0.5 0 48 48"));
		$1430 || ($1434=imba_createSVGElement('g',$1433,null,null));
		$1430 || ($1434.set$('fill',"none"));
		$1430 || ($1434.set$('fill-rule',"evenodd"));
		$1430 || ($1435=imba_createSVGElement('path',$1434,'mnu25o-qu',null));
		$1430 || ($1435.set$('d',"M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"));
		;
		$1430 || ($1436=imba_createSVGElement('path',$1434,'mnu25o-qv',null));
		$1430 || ($1436.set$('d',"M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"));
		;
		$1430 || ($1437=imba_createSVGElement('path',$1434,'mnu25o-qw',null));
		$1430 || ($1437.set$('d',"M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"));
		;
		$1430 || ($1438=imba_createSVGElement('path',$1434,'mnu25o-qx',null));
		$1430 || ($1438.set$('d',"M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"));
		;
		;
		;
		$1429[$afterReconcile$]($1431);
		return $1429;
	}
	static {
		register$(this,c$39,'GoogleIcon',2);
		imba_defineTag('google-icon-mnu25o-qy',this,{cssid: 'mnu25o-qq',name: 'GoogleIcon'});
	}
};
let c$40 = Symbol();
class AppleIcon extends imba_Component {
	render(){
		var $1439, $1440, $1441, $1443, $1444;
		$1439=this;
		$1439[$beforeReconcile$]();
		($1440=$1441=1,$1439[$1442] === 1) || ($1440=$1441=0,$1439[$1442]=1);
		$1440 || ($1443=imba_createSVGElement('svg',$1439,null,null));
		$1440 || ($1443.set$('viewBox',"-3.5 0 48 48"));
		$1440 || ($1444=imba_createSVGElement('path',$1443,null,null));
		$1440 || ($1444.set$('fill',"#0B0B0A"));
		$1440 || ($1444.set$('fill-rule',"evenodd"));
		$1440 || ($1444.set$('d',"M27.175 7.792C28.74 5.772 29.927 2.915 29.498 0c-2.559.178-5.55 1.815-7.295 3.948-1.59 1.934-2.898 4.81-2.387 7.601 2.797.088 5.684-1.589 7.359-3.757ZM41 35.217c-1.12 2.495-1.658 3.61-3.1 5.82-2.012 3.085-4.848 6.926-8.366 6.954-3.122.034-3.928-2.046-8.167-2.02-4.239.022-5.122 2.06-8.25 2.029-3.516-.031-6.203-3.497-8.215-6.582-5.627-8.62-6.22-18.738-2.75-24.12 2.47-3.821 6.364-6.057 10.022-6.057 3.723 0 6.065 2.055 9.149 2.055 2.99 0 4.81-2.06 9.117-2.06 3.26 0 6.714 1.786 9.171 4.868C31.554 20.547 32.86 32.121 41 35.217Z"));
		;
		;
		$1439[$afterReconcile$]($1441);
		return $1439;
	}
	static {
		register$(this,c$40,'AppleIcon',2);
		imba_defineTag('apple-icon-mnu25o-rc',this,{name: 'AppleIcon'});
	}
};
let c$41 = Symbol();
class FacebookIcon extends imba_Component {
	render(){
		var $1445, $1446, $1447, $1449, $1450;
		$1445=this;
		$1445[$beforeReconcile$]();
		($1446=$1447=1,$1445[$1448] === 1) || ($1446=$1447=0,$1445[$1448]=1);
		$1446 || ($1449=imba_createSVGElement('svg',$1445,null,null));
		$1446 || ($1449.set$('viewBox',"0 0 48 48"));
		$1446 || ($1450=imba_createSVGElement('path',$1449,null,null));
		$1446 || ($1450.set$('fill',"#4460A0"));
		$1446 || ($1450.set$('fill-rule',"evenodd"));
		$1446 || ($1450.set$('d',"M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.649 2.649 0 0 1 2.65 0H45.35A2.649 2.649 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48Z"));
		;
		;
		$1445[$afterReconcile$]($1447);
		return $1445;
	}
	static {
		register$(this,c$41,'FacebookIcon',2);
		imba_defineTag('facebook-icon-mnu25o-rg',this,{name: 'FacebookIcon'});
	}
};
let c$42 = Symbol();
class LoginIllustration extends imba_Component {
	render(){
		var $1451, $1452, $1453, $1455, $1456, $1457, $1458, $1459, $1460, $1461, $1462, $1463, $1464, $1465, $1466, $1467, $1468, $1469, $1470, $1471, $1472, $1473, $1474, $1475, $1476, $1477, $1478, $1479, $1480, $1481, $1482, $1483, $1484, $1485, $1486, $1487, $1488, $1489, $1490, $1491, $1492, $1493, $1494, $1495, $1496, $1497, $1498, $1499, $1500, $1501, $1502, $1503, $1504, $1505, $1506, $1507, $1508, $1509, $1510, $1511, $1512, $1513, $1514, $1515, $1516, $1517, $1518, $1519, $1520, $1521, $1522, $1523, $1524, $1525, $1526, $1527, $1528, $1529, $1530;
		$1451=this;
		$1451[$beforeReconcile$]();
		($1452=$1453=1,$1451[$1454] === 1) || ($1452=$1453=0,$1451[$1454]=1);
		$1452 || ($1455=imba_createSVGElement('svg',$1451,null,null));
		$1452 || ($1455.set$('viewBox',"0 0 1600 1200"));
		$1452 || ($1456=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1456.set$('fill',"none"));
		$1452 || ($1456.set$('stroke',"#3b116e"));
		$1452 || ($1456.set$('stroke-linecap',"round"));
		$1452 || ($1456.set$('stroke-linejoin',"round"));
		$1452 || ($1456.set$('stroke-width',"4"));
		$1452 || ($1456.set$('d',"M425.08 118.55v121.62"));
		;
		$1452 || ($1457=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1457.set$('fill',"#fff"));
		$1452 || ($1457.set$('d',"M446.82 336.1c6.26-11.95 1.65-26.71-10.3-32.97-11.95-6.27-26.71-1.65-32.97 10.3-6.27 11.95-1.65 26.71 10.3 32.98 11.94 6.25 26.71 1.64 32.97-10.31Z"));
		;
		$1452 || ($1458=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1458.set$('fill',"#8c2eff"));
		$1452 || ($1458.set$('d',"m482.61 294.9-15.57-8.51a42.231 42.231 0 0 1-21.11-28.09l-2.38-10.81c-2.21-10.13-12.26-16.59-22.39-14.3-7.14 1.62-12.76 7.15-14.29 14.3l-2.39 10.81c-2.64 12-10.38 22.21-21.1 28.09l-15.58 8.51c-11.4 6.21-19.15 17.45-20.77 30.3h156.52c-1.79-12.85-9.53-24.09-20.94-30.3Z"));
		;
		$1452 || ($1459=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1459.set$('fill',"none"));
		$1452 || ($1459.set$('stroke',"#3b116e"));
		$1452 || ($1459.set$('stroke-linecap',"round"));
		$1452 || ($1459.set$('stroke-linejoin',"round"));
		$1452 || ($1459.set$('stroke-width',"4"));
		$1452 || ($1459.set$('d',"M359.38 300.86h131.21"));
		;
		$1452 || ($1460=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1460.set$('fill',"#3b116e"));
		$1452 || ($1460.set$('d',"M421.08 233.11c-7.15 1.62-12.77 7.15-14.3 14.3l-2.38 10.81c-2.64 12-10.39 22.21-21.11 28.08l-15.57 8.51c-11.41 6.22-19.15 17.45-20.77 30.3h45.02c0-29.53 33.71-31.06 33.71-57.79 0-18.81-.43-34.72-.43-34.72-1.45.08-2.81.25-4.17.51Z"));
		$1452 || ($1460.set$('opacity',".3"));
		;
		$1452 || ($1461=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1461.set$('fill',"#2b325a"));
		$1452 || ($1461.set$('d',"M972.53 1014.55h-24.19V750.48c0-29.1-26.42-52.81-58.83-52.81H479.8c-32.42 0-58.83 23.71-58.83 52.81v264.07h-24.2V750.48c0-39.9 37.26-72.37 83.03-72.37h409.71c45.77 0 83.02 32.47 83.02 72.37v264.07Z"));
		;
		$1452 || ($1462=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1462.set$('fill',"#9633ff"));
		$1452 || ($1462.set$('d',"M787.72 678.11H682.46l-6.75-38.21-6.76-38.46h105.26l2.47 13.9 11.04 62.77Z"));
		;
		$1452 || ($1463=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1463.set$('fill',"#3c007c"));
		$1452 || ($1463.set$('d',"m675.71 639.9-6.76-38.46h105.26l2.47 13.9-100.97 24.56Z"));
		$1452 || ($1463.set$('opacity',".2"));
		;
		$1452 || ($1464=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1464.set$('fill',"#9633ff"));
		$1452 || ($1464.set$('d',"M859.58 608.71H586.17c-18.19 0-35.47-14.68-38.72-32.87l-33.14-187.65c-3.25-18.19 8.97-32.87 27.03-32.87h273.54c18.19 0 35.48 14.68 38.72 32.87l33.01 187.78c3.25 18.06-8.84 32.74-27.03 32.74Z"));
		;
		$1452 || ($1465=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1465.set$('fill',"#fff"));
		$1452 || ($1465.set$('d',"M845.42 588.96h-252.1c-11.7 0-22.74-9.48-24.82-21.05l-30.28-171.53c-2.08-11.69 5.72-21.05 17.42-21.05h252.09c11.7 0 22.74 9.49 24.82 21.05l30.28 171.53c1.95 11.57-5.85 21.05-17.41 21.05Z"));
		;
		$1452 || ($1466=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1466.set$('fill',"none"));
		$1452 || ($1466.set$('stroke',"#3c007c"));
		$1452 || ($1466.set$('stroke-linecap',"round"));
		$1452 || ($1466.set$('stroke-linejoin',"round"));
		$1452 || ($1466.set$('stroke-width',"4"));
		$1452 || ($1466.set$('d',"M775.51 608.71H670.25"));
		;
		$1452 || ($1467=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1467.set$('fill',"#c89eff"));
		$1452 || ($1467.set$('d',"M1248.24 360.14h-67.26c-24.73 0-44.84 20.11-44.84 44.84 0 22.02 15.99 40.72 37.7 44.24v23.02l32.88-22.42h41.52c24.74 0 44.84-20.11 44.84-44.84 0-24.83-20.1-44.84-44.84-44.84Z"));
		;
		$1452 || ($1468=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1468.set$('fill',"#fff"));
		$1452 || ($1468.set$('d',"M1189.43 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14ZM1214.56 410.41c3.39 0 6.13-2.75 6.13-6.14a6.13 6.13 0 0 0-12.26 0c0 3.39 2.74 6.14 6.13 6.14ZM1239.8 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14Z"));
		;
		$1452 || ($1469=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1469.set$('fill',"#a561ff"));
		$1452 || ($1469.set$('d',"M621.05 425.82h62.33c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-62.33c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z"));
		;
		$1452 || ($1470=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1470.set$('fill',"#c3afdd"));
		$1452 || ($1470.set$('d',"M626.15 455.55h36.44c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-36.44c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1452 || ($1471=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1471.set$('fill',"#2b325a"));
		$1452 || ($1471.set$('d',"M686.57 455.55h11.51c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-11.51c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z"));
		;
		$1452 || ($1472=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1472.set$('fill',"#c3afdd"));
		$1452 || ($1472.set$('d',"M631.25 485.28h8.95c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-8.95c-3.96 0-7.74-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1452 || ($1473=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1473.set$('fill',"#2b325a"));
		$1452 || ($1473.set$('d',"M664.18 485.28h53.7c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-53.7c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1452 || ($1474=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1474.set$('fill',"#e3daef"));
		$1452 || ($1474.set$('d',"M741.86 485.28h46.03c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-46.03c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1452 || ($1475=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1475.set$('fill',"#020202"));
		$1452 || ($1475.set$('d',"M636.36 515.01h28.77c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-28.77c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z"));
		;
		$1452 || ($1476=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1476.set$('fill',"#c3afdd"));
		$1452 || ($1476.set$('d',"M689.1 515.01h6.4c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.96 7.19h-6.39c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1452 || ($1477=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1477.set$('fill',"#a561ff"));
		$1452 || ($1477.set$('d',"M719.47 515.01h38.04c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-38.04c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1452 || ($1478=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1478.set$('fill',"#343434"));
		$1452 || ($1478.set$('d',"M806.26 1014.24c3.02-5.73 5.93-11.17 8.65-16.81 3.89-8.26 6.7-14.57 9.13-20.3l.1-.2h-.1c-3.79-1.36-14.28-4.66-28.95-4.66-5.15 0-10.2.39-15.06 1.26h-.1l-6.02 25.46 32.06 15.93.29-.68Z"));
		;
		$1452 || ($1479=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1479.set$('fill',"#c7cbff"));
		$1452 || ($1479.set$('d',"M1043.13 473.18c1.75-9.42 4.08-21.57 5.83-31.38 1.45-7.77 2.72-25.45 3.3-28.85 0 0-59.85-54.7-66.65-51.98-9.23 3.59-15.54 8.84-20.11 16.03-4.27 6.8-6.99 15.35-10.49 25.75l-.88 2.62c-1.07.1-8.64 1.16-9.42 4.47-.87 3.5 3.69 9.52 4.37 10.3-6.02 18.94-5.92 29.24.49 38.08 3.88 5.44 11.95 8.75 21.47 8.75 4.08 0 7.87-.59 10.88-1.75l-2.53 15.54 63.74-7.58Z"));
		;
		$1452 || ($1480=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1480.set$('fill',"#2a329e"));
		$1452 || ($1480.set$('d',"m985.61 480.66 10.01-21.95c-7.68 4.27-13.7 6.51-13.7 6.51l-1.75 10.59 5.44 4.85Z"));
		$1452 || ($1480.set$('opacity',".2"));
		;
		$1452 || ($1481=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1481.set$('fill',"none"));
		$1452 || ($1481.set$('stroke',"#2a329e"));
		$1452 || ($1481.set$('stroke-linecap',"round"));
		$1452 || ($1481.set$('stroke-linejoin',"round"));
		$1452 || ($1481.set$('stroke-width',"4"));
		$1452 || ($1481.set$('d',"M955.2 431.99c2.53.87 7.68.29 9.33-3.01"));
		;
		$1452 || ($1482=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1482.set$('fill',"#231f20"));
		$1452 || ($1482.set$('d',"M965.79 411.2c-1.5 0-2.72-1.22-2.72-2.72 0-1.51 1.22-2.72 2.72-2.72a2.71 2.71 0 0 1 2.72 2.72c0 1.5-1.21 2.72-2.72 2.72Z"));
		;
		$1452 || ($1483=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1483.set$('fill',"none"));
		$1452 || ($1483.set$('stroke',"#2a329e"));
		$1452 || ($1483.set$('stroke-linecap',"round"));
		$1452 || ($1483.set$('stroke-linejoin',"round"));
		$1452 || ($1483.set$('stroke-width',"4"));
		$1452 || ($1483.set$('d',"m1002.13 431.99 8.55-5.15"));
		;
		$1452 || ($1484=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1484.set$('fill',"#231f20"));
		$1452 || ($1484.set$('d',"M1077.03 393.9c-18.18 0-32.93-14.74-32.93-32.93 0-18.19 14.75-32.94 32.93-32.94 18.19 0 32.94 14.75 32.94 32.94 0 18.19-14.75 32.93-32.94 32.93Z"));
		;
		$1452 || ($1485=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1485.set$('fill',"#c7cbff"));
		$1452 || ($1485.set$('d',"m969.87 947.3 2.72-6.02v-.1c-1.16-10.69-2.91-21.67-5.05-32.64l-4.86-14.58-96.96 1.56 2.43 13.21c2.72 9.23 4.66 16.13 5.15 21.67l25.46 50.61 71.11-33.71Z"));
		;
		$1452 || ($1486=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1486.set$('fill',"#343434"));
		$1452 || ($1486.set$('d',"M975.7 1014.82v-.19c.2-6.61.2-13.12.2-19.43 0-7.68-.3-15.16-.59-22.35v-.19h-.19c-14.38 2.14-27.79 8.26-38.77 17.87l-.09.1 3.01 24.19h36.43Z"));
		;
		$1452 || ($1487=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1487.set$('fill',"#a561ff"));
		$1452 || ($1487.set$('d',"M926.54 1001.61c13.12-16.13 29.44-25.65 48.58-28.47h.19v-.68c-.19-2.81-.29-5.63-.48-8.25-.49-7.29-1.95-20.89-2.14-22.93 0-.1-.1-.2-.29-.2-36.73 1.75-60.92 21.57-65.97 26.04-.19.19-.49 0-.39-.19l3.4-21.28c.59-3.5-.19-7.09-2.33-9.91a13.136 13.136 0 0 0-8.65-5.44c-.68-.1-1.45-.2-2.23-.2H873.2c-.19 0-.29.1-.29.3.1 1.36.68 7.09.68 8.64-.1 23.42-10.49 32.94-20.6 42.07-4.85 4.37-9.42 8.55-12.72 14.09-1.17 1.94-2.04 3.98-2.82 6.12l-.1.29h89.19Z"));
		;
		$1452 || ($1488=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1488.set$('fill',"#8c2eff"));
		$1452 || ($1488.set$('d',"M967.64 908.73v-.19c-7.77-40.91-21.18-80.55-39.93-117.76l-6.03-11.75c42.17-.1 78.31-12.63 94.54-32.84 8.35-10.49 11.17-22.35 8.25-35.27-6.8-29.44-17.78-48.38-17.87-48.48l-.29-.58-.3 4.37c-5.24.58-128.43 15.55-166.52 60.72-25.55 30.31-2.23 94.83 16.42 146.61 4.57 12.73 8.94 24.77 12.14 35.17h99.59Z"));
		;
		$1452 || ($1489=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1489.set$('fill',"#0e001f"));
		$1452 || ($1489.set$('d',"M864.75 897.36c.2-.48 14.67-52.66 76.66-75.97l.19-.1-.1-.19c-4.37-10.59-9.03-20.8-13.89-30.41-1.94-3.79-3.11-6.22-3.69-7.29.1-.1.1-.1-.88-2.04v-.1l-94.24-28.08v.2c-4.17 33.61 13.12 81.61 27.01 120.08 3.11 8.46 5.93 16.42 8.45 23.9l.2.59.29-.59Z"));
		$1452 || ($1489.set$('opacity',".2"));
		;
		$1452 || ($1490=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1490.set$('fill',"none"));
		$1452 || ($1490.set$('stroke',"#343434"));
		$1452 || ($1490.set$('stroke-linecap',"round"));
		$1452 || ($1490.set$('stroke-linejoin',"round"));
		$1452 || ($1490.set$('stroke-width',"4"));
		$1452 || ($1490.set$('d',"m868.05 963.72 15.55 6.41M859.21 975.67l13.12 9.91"));
		;
		$1452 || ($1491=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1491.set$('fill',"none"));
		$1452 || ($1491.set$('stroke',"#0e001f"));
		$1452 || ($1491.set$('stroke-linecap',"round"));
		$1452 || ($1491.set$('stroke-linejoin',"round"));
		$1452 || ($1491.set$('stroke-width',"4"));
		$1452 || ($1491.set$('d',"m868.93 908.83 98.51-.2"));
		;
		$1452 || ($1492=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1492.set$('fill',"#c7cbff"));
		$1452 || ($1492.set$('d',"M835.12 948.66c4.08-11.27 7.77-23.22 10.69-33.81l.19-8.26-86.08-42.45-4.18 7.96c-2.52 13.22-3.98 20.79-5.15 23.42l5.44 57.8 74.13-2.91 4.96-1.75Z"));
		;
		$1452 || ($1493=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1493.set$('fill',"#a561ff"));
		$1452 || ($1493.set$('d',"M763.51 978.29c9.82-3.69 20.41-5.63 31.48-5.63 14.58 0 24.97 3.3 28.76 4.66l.2.1.09-.2c1.27-2.62 9.04-22.15 11.37-28.36l.1-.39-.39-.1c-14.28-6.51-29.63-9.81-45.57-9.81-14.77 0-28.51 4.06-27.88 3.69l11.37-16.42c4.85-7 3.11-16.61-3.89-21.47-.68-.49-18.65-9.13-18.65-9.13s-2.14 4.76-2.82 6.02c-10.59 20.89-24.1 24.77-37.21 28.47-6.32 1.74-12.24 3.49-17.68 6.99-1.75 1.17-3.4 2.53-4.86 3.89l.1.39 75.48 37.3Z"));
		;
		$1452 || ($1494=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1494.set$('fill',"#8c2eff"));
		$1452 || ($1494.set$('d',"M845.51 915.82c7.39-27.78 12.25-50.03 14.67-70.63 2.24-18.75 2.63-34.98 2.53-55.09l141.26.39c18.76 0 39.55-3.3 53.54-16.9 10-9.72 14.47-23.22 16.22-36.73 1.46-11.17 1.46-22.63-1.36-33.42-3.11-11.75-3.2-21.57-8.06-30.6l-8.84-13.7H954.23l-4.37 3.2c-1.56.3-29.25 5.35-61.5 14.09-55.09 14.96-76.75 28.18-85.21 36.63-22.73 23.41-28.17 54.21-35.75 96.77-1.26 6.99-2.52 14.28-3.98 21.86l-.97 5.24c-2.43 12.92-4.67 25.26-6.71 35.56l89.77 43.33Z"));
		;
		$1452 || ($1495=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1495.set$('fill',"none"));
		$1452 || ($1495.set$('stroke',"#0e001f"));
		$1452 || ($1495.set$('stroke-linecap',"round"));
		$1452 || ($1495.set$('stroke-linejoin',"round"));
		$1452 || ($1495.set$('stroke-width',"4"));
		$1452 || ($1495.set$('d',"M855.81 872.39c6.22-32.35 6.8-54.4 6.71-81.61"));
		;
		$1452 || ($1496=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1496.set$('fill',"none"));
		$1452 || ($1496.set$('stroke',"#343434"));
		$1452 || ($1496.set$('stroke-linecap',"round"));
		$1452 || ($1496.set$('stroke-linejoin',"round"));
		$1452 || ($1496.set$('stroke-width',"4"));
		$1452 || ($1496.set$('d',"m730.77 921.55 10.59 12.93M718.43 927.97l6.9 14.86"));
		;
		$1452 || ($1497=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1497.set$('fill',"none"));
		$1452 || ($1497.set$('stroke',"#0e001f"));
		$1452 || ($1497.set$('stroke-linecap',"round"));
		$1452 || ($1497.set$('stroke-linejoin',"round"));
		$1452 || ($1497.set$('stroke-width',"4"));
		$1452 || ($1497.set$('d',"m756.23 872.39 87.73 42.85"));
		;
		$1452 || ($1498=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1498.set$('fill',"#c7cbff"));
		$1452 || ($1498.set$('d',"m856.01 517.49-.2-3.79c-15.25-16.13-32.45-34.01-44.98-42.75-18.95-13.21-52.76-26.04-64.03-26.04-3.59 0-5.34 1.07-5.44 3.21-.09 5.92 8.26 11.07 19.92 18.16 1.17.69 2.43 1.46 3.69 2.24-1.46.29-2.91 1.65-3.79 3.5-1.36 3.01-.87 6.51 1.46 9.32-2.43.78-4.08 2.24-4.86 4.38-.87 2.62-.29 5.73 1.56 8.45-1.75 1.55-2.72 3.69-2.82 6.22-.1 3.79 1.85 7.48 3.89 9.32 3.1 3.11 6.12 5.64 11.27 5.64 1.26 0 2.62-.2 4.17-.49 6.03 7.58 13.61 12.73 21.38 14.38.97 1.56 2.43 4.76 4.56 9.23 1.66 3.4 3.6 7.68 5.93 12.34l1.94 1.36 46.35-34.68Z"));
		;
		$1452 || ($1499=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1499.set$('fill',"#a561ff"));
		$1452 || ($1499.set$('d',"M1071.11 697.32c52.85-18.95 54.02-57.32 49.06-88.61-2.72-17.58-9.52-40.8-18.55-63.63-8.36-21.08-17.3-38.38-23.32-44.98-13.51-14.87-34.59-18.56-36.82-18.85.19-.97.38-1.95.58-3.01.29-1.66.68-3.5 1.07-5.45v-.19h-62.57l-1.46 8.55h-2.43c-25.45 0-47.99 12.44-68.98 37.99l-23.41 26.72c-1.46-1.75-13.7-16.42-28.47-32.36l-.09-.09-48 37.4c21.18 41.58 42.36 65.77 62.86 71.6 3.5.98 7.19 1.46 10.98 1.46 28.37 0 57.13-27.4 60.23-30.41l8.17 68.79h105.41c9.52 14.38 15.45 34.58 15.45 34.88l.09.19h.2Z"));
		;
		$1452 || ($1500=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1500.set$('fill',"#130821"));
		$1452 || ($1500.set$('d',"m1055.37 662.25 11.76-44.01.19.09c5.93 3.11 7.38 11.95 9.13 22.15 2.43 14.77 5.54 33.13 24.19 40.23h.1c-7.38 6.41-17 12.04-29.63 16.61h-.2l-.09-.19c0-.3-5.93-20.5-15.45-34.88ZM984.83 662.25l-30.89-80.16-12.15 11.37 8.17 68.79h34.87Z"));
		$1452 || ($1500.set$('opacity',".2"));
		;
		$1452 || ($1501=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1501.set$('fill',"none"));
		$1452 || ($1501.set$('stroke',"#130821"));
		$1452 || ($1501.set$('stroke-linecap',"round"));
		$1452 || ($1501.set$('stroke-linejoin',"round"));
		$1452 || ($1501.set$('stroke-width',"4"));
		$1452 || ($1501.set$('d',"m1055.47 662.15 17.48-65.09M1078.88 641.07l-14.67-7.1M941.89 593.17l16.23-16.32M884.47 546.54l.97 12.63"));
		;
		$1452 || ($1502=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1502.set$('fill',"none"));
		$1452 || ($1502.set$('stroke',"#2a329e"));
		$1452 || ($1502.set$('stroke-linecap',"round"));
		$1452 || ($1502.set$('stroke-linejoin',"round"));
		$1452 || ($1502.set$('stroke-width',"4"));
		$1452 || ($1502.set$('d',"M764.29 468.03c6.8 0 18.36 2.34 22.74 4.96M763.03 481.54c6.8-.88 20.5 5.15 20.5 5.15M759.63 494.27c4.37-.88 13.7.87 19.72 5.14M775.27 514.18l-3.98-6.51M982.5 465.02c4.37-1.65 7.68-3.3 7.68-3.3"));
		;
		$1452 || ($1503=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1503.set$('fill',"#231f20"));
		$1452 || ($1503.set$('d',"M1152.33 552.75c3.21-14.47-4.27-28.46-20.11-37.4 7.97-21.47 6.22-42.17-5.05-58.49-11.66-16.81-31.58-26.52-54.8-26.52-7.19 0-14.47.97-21.86 2.82.29-1.66.58-3.21.88-4.57.38-1.94.68-3.6.87-4.76l.19-1.26c2.63-13.9 7.49-39.84-7.48-53.25-9.61-8.55-23.41-13.4-37.89-13.4-7.67 0-15.35 1.36-22.15 4.08-9.52 3.69-15.93 9.71-20.79 19.14 0 0 6.02 8.06 17.1 8.06 2.43 0 5.05-.39 4.67-.19-2.53 8.93 1.2 23.66 5.75 30.05l1.41 1.79.49.65c.9-.63 11.58-8.3 21.3-8.3 5.63 0 9.61 2.62 11.85 7.87 6.9 16.22-20.11 30.31-20.4 30.5h-.1v.1c-1.75 6.8-3.01 37.5 12.82 57.91 9.23 11.85 22.45 17.87 39.35 17.87 9.43 0 20.02-1.94 31.58-5.63 1.07 2.04 12.24 24.38 23.51 61.5 0 0 32.45.97 38.86-28.57Z"));
		;
		$1452 || ($1504=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1504.set$('fill',"none"));
		$1452 || ($1504.set$('stroke',"#0e001f"));
		$1452 || ($1504.set$('stroke-linecap',"round"));
		$1452 || ($1504.set$('stroke-linejoin',"round"));
		$1452 || ($1504.set$('stroke-width',"4"));
		$1452 || ($1504.set$('d',"m927.51 790.49-87.92-.78"));
		;
		$1452 || ($1505=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1505.set$('fill',"#fff"));
		$1452 || ($1505.set$('d',"M1007.86 462.01c-5.36 0-9.72-4.35-9.72-9.72 0-5.36 4.36-9.71 9.72-9.71s9.72 4.35 9.72 9.71c0 5.37-4.36 9.72-9.72 9.72Z"));
		;
		$1452 || ($1506=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1506.set$('fill',"none"));
		$1452 || ($1506.set$('stroke',"#231f20"));
		$1452 || ($1506.set$('stroke-linecap',"round"));
		$1452 || ($1506.set$('stroke-linejoin',"round"));
		$1452 || ($1506.set$('stroke-width',"4"));
		$1452 || ($1506.set$('d',"M1050.51 433.16c-4.18 1.45-8.55 3.49-12.53 5.53M1132.22 515.35c-2.14 5.05-4.86 10.01-7.77 14.67M1090.15 519.82c9.04-2.43 13.89-6.32 13.89-6.32"));
		;
		$1452 || ($1507=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1507.set$('fill',"none"));
		$1452 || ($1507.set$('stroke',"#130821"));
		$1452 || ($1507.set$('stroke-linecap',"round"));
		$1452 || ($1507.set$('stroke-linejoin',"round"));
		$1452 || ($1507.set$('stroke-width',"4"));
		$1452 || ($1507.set$('d',"m855.62 513.7-47.8 37.21"));
		;
		$1452 || ($1508=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1508.set$('fill',"#343434"));
		$1452 || ($1508.set$('d',"M748.16 986.07c4.86-3.21 10.01-5.83 15.45-7.78l.39-.19-75.68-37.79-.1.09c-3.5 3.31-6.32 7.09-8.36 11.47l-.09.19 68.39 34.01ZM917.12 1014.82c2.91-4.76 6.22-9.32 9.71-13.5l.2-.29h-89.48l-.1.09c-1.55 4.38-2.04 8.94-2.04 13.51v.19h81.71Z"));
		;
		$1452 || ($1509=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1509.set$('fill',"none"));
		$1452 || ($1509.set$('stroke',"#1f2321"));
		$1452 || ($1509.set$('stroke-linecap',"round"));
		$1452 || ($1509.set$('stroke-linejoin',"round"));
		$1452 || ($1509.set$('stroke-width',"4"));
		$1452 || ($1509.set$('d',"m1066.17 814.2 48.2 198.89M972.51 814.2l-48.19 198.89M954.14 890.61h130.3"));
		;
		$1452 || ($1510=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1510.set$('fill',"#2b325a"));
		$1452 || ($1510.set$('d',"M946.37 788.68h145.84c10.82 0 19.53 6.56 19.53 14.7 0 8.13-8.71 14.69-19.53 14.69H946.37c-10.82 0-19.53-6.56-19.53-14.69 0-8.06 8.82-14.7 19.53-14.7Z"));
		;
		$1452 || ($1511=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1511.set$('fill',"#1a1a1a"));
		$1452 || ($1511.set$('d',"M927.26 806.22c1.78 6.72 9.66 11.85 19.11 11.85h145.84c10.82 0 19.53-6.56 19.53-14.69 0-3.32-1.47-6.33-3.88-8.78-25.52 6.33-55.97 10.99-88.94 13.2-33.49 2.21-64.89 1.5-91.66-1.58Z"));
		$1452 || ($1511.set$('opacity',".3"));
		;
		$1452 || ($1512=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1512.set$('fill',"#a561ff"));
		$1452 || ($1512.set$('d',"M520.39 678.22v-78.49h69.26v78.49h-69.26Z"));
		;
		$1452 || ($1513=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1513.set$('fill',"#29193f"));
		$1452 || ($1513.set$('d',"M555.02 620.04c-22.81 0-33.25-17.78-34.5-20.07-.01-.03-.01-.06-.01-.09 0-.02 0-.05.01-.07.02-.03.04-.05.07-.06.02-.01.04-.02.08-.02h68.32c.06 0 .14.02.19.05.07.03.11.09.15.14.04.06.05.13.05.19 0 .08-.01.14-.05.21-1.9 3.33-12.4 19.72-34.31 19.72Z"));
		;
		$1452 || ($1514=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1514.set$('fill',"none"));
		$1452 || ($1514.set$('stroke',"#1c1426"));
		$1452 || ($1514.set$('stroke-linecap',"round"));
		$1452 || ($1514.set$('stroke-linejoin',"round"));
		$1452 || ($1514.set$('stroke-width',"4"));
		$1452 || ($1514.set$('d',"M604.24 644.05c7.14 0 12.93-5.79 12.93-12.93 0-7.13-5.79-12.92-12.93-12.92s-12.93 5.79-12.93 12.92c0 7.14 5.79 12.93 12.93 12.93Z"));
		;
		$1452 || ($1515=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1515.set$('fill',"none"));
		$1452 || ($1515.set$('stroke',"#fff"));
		$1452 || ($1515.set$('stroke-linecap',"round"));
		$1452 || ($1515.set$('stroke-linejoin',"round"));
		$1452 || ($1515.set$('stroke-width',"4"));
		$1452 || ($1515.set$('d',"M335.31 860.49c-4.58-17.06-29.54-22.16-39.81 10.78-8.94 28.74-21.57 32.95-27.33 61.38-5.46 27.18 10.27 66.47 50.59 63.67 42.47-2.96 16.55-135.83 16.55-135.83Z"));
		;
		$1452 || ($1516=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1516.set$('fill',"#8c2eff"));
		$1452 || ($1516.set$('d',"m352.36 787.74 54.55 102.33-95.16 50.73-54.55-102.33 95.16-50.73Z"));
		;
		$1452 || ($1517=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1517.set$('fill',"none"));
		$1452 || ($1517.set$('stroke',"#fff"));
		$1452 || ($1517.set$('stroke-linecap',"round"));
		$1452 || ($1517.set$('stroke-linejoin',"round"));
		$1452 || ($1517.set$('stroke-width',"4"));
		$1452 || ($1517.set$('d',"M378.96 801.33h-.3c-16.39 0-29.69 13.3-29.69 29.69v27.7h59.68v-27.7c0-16.39-13.29-29.69-29.69-29.69Z"));
		;
		$1452 || ($1518=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1518.set$('fill',"#9633ff"));
		$1452 || ($1518.set$('d',"M378.89 829.18h-.67c-42.54 0-76.96 34.49-76.96 76.96v91.66c0 9.82 7.98 17.8 17.8 17.8h118.99c9.82 0 17.8-7.98 17.8-17.8v-91.58c.07-42.55-34.42-77.04-76.96-77.04 0 0 .07 0 0 0Z"));
		;
		$1452 || ($1519=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1519.set$('fill',"#59268f"));
		$1452 || ($1519.set$('d',"M409.39 923.72h-61.53c-9.97 0-18.09 8.13-18.09 18.1v38.77c0 9.97 8.12 18.1 18.09 18.1h61.53c9.97 0 18.09-8.13 18.09-18.1v-38.77c0-9.97-8.12-18.1-18.09-18.1Z"));
		$1452 || ($1519.set$('opacity',".3"));
		;
		$1452 || ($1520=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1520.set$('fill',"#5f00d4"));
		$1452 || ($1520.set$('d',"M409.14 927.83h-61.28c-8.48-.5-10.47 4.92-18.13 16v28.64c.04 9.97 8.16 18.09 18.13 18.09h61.53c9.97 0 18.09-8.12 18.09-18.09v-28.98c-5.89-14.09-8.73-15.17-18.34-16.16Z"));
		;
		$1452 || ($1521=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1521.set$('fill',"#8c2eff"));
		$1452 || ($1521.set$('stroke',"#272459"));
		$1452 || ($1521.set$('stroke-width',"4"));
		$1452 || ($1521.set$('d',"M409.39 915.6h-61.53c-9.97 0-18.09 8.12-18.09 18.09v9.75h97.71v-9.75c0-9.97-8.12-18.09-18.09-18.09Z"));
		;
		$1452 || ($1522=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1522.set$('fill',"none"));
		$1452 || ($1522.set$('stroke',"#fcfcfc"));
		$1452 || ($1522.set$('stroke-linecap',"round"));
		$1452 || ($1522.set$('stroke-linejoin',"round"));
		$1452 || ($1522.set$('stroke-width',"4"));
		$1452 || ($1522.set$('d',"M427.48 943.44H329.7"));
		;
		$1452 || ($1523=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1523.set$('fill',"#8c2eff"));
		$1452 || ($1523.set$('d',"M378.59 892.26c-8.16 0-14.77-6.62-14.77-14.77 0-8.17 6.61-14.78 14.77-14.78 8.15 0 14.77 6.61 14.77 14.78 0 8.15-6.62 14.77-14.77 14.77ZM1300.09 962.44h-.71c-7.13-.36-12.66-6.51-12.3-13.73.27-4.81 3.12-9 7.4-11.05 16.84-8.02 15.77-13.73 12.65-30.84-2.58-13.99-6.15-33.16 6.24-53.3 2.41-3.83 6.51-6.15 11.05-6.15 2.41 0 4.73.71 6.78 1.96 6.15 3.75 8.02 11.77 4.28 17.92-7.13 11.58-5.17 22.37-2.86 34.85 3.3 17.91 7.94 42.42-27 59.09-1.7.8-3.57 1.25-5.53 1.25Z"));
		;
		$1452 || ($1524=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1524.set$('fill',"#3b116e"));
		$1452 || ($1524.set$('d',"M1316.94 939.71c-5.08-1.87-9.9-4.1-14.44-6.68-2.05 1.51-4.73 3.03-8.02 4.63-4.28 2.05-7.13 6.33-7.4 11.05-.36 7.13 5.17 13.28 12.3 13.73h.71c1.96 0 3.83-.45 5.62-1.25 11.23-5.35 18.45-11.5 22.81-18.09-3.92-.8-7.75-1.96-11.58-3.39Z"));
		$1452 || ($1524.set$('opacity',".2"));
		;
		$1452 || ($1525=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1525.set$('fill',"#8c2eff"));
		$1452 || ($1525.set$('d',"M1068.26 1016.1c-.62-1.7-.98-3.48-.98-5.26 0-7.76 6.33-14.09 14.08-14.09h61.59l38.51 18.99-.09.36h-113.11Z"));
		;
		$1452 || ($1526=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1526.set$('fill',"#9633ff"));
		$1452 || ($1526.set$('d',"M1128.16 1016.1c-9.72 0-18.99-4.73-24.69-12.57l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l12.3-20.59c3.3-5.61 8.65-9.62 14.89-11.41l7.22-2.05.53-20.32c0-1.07.54-2.14 1.25-2.85s1.69-1.07 2.76-1.07c1.07 0 2.23.44 2.94 1.25 4.9 5.34 12.66 13.63 22.73 24.6 2.14 2.31 4.55 3.47 7.4 3.47 6.95 0 15.69-6.68 25.85-14.44 15.51-11.85 34.85-26.56 58.2-26.56 6.59 0 13.28 1.25 19.88 3.57 15.68 5.7 26.73 15.42 32.62 28.88 12.56 28.43-1.7 64.26-1.87 64.62l-.09.09h-179.6Z"));
		;
		$1452 || ($1527=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1527.set$('fill',"#c89eff"));
		$1452 || ($1527.set$('d',"M1104.45 1004.78c-.36-.45-.62-.81-.98-1.25l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l2.32-3.83h.53c4.73 0 8.47 2.4 9.36 5.97.98 3.92-3.56 11.14-8.64 13.81l-.09.09-.18-.17Z"));
		;
		$1452 || ($1528=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1528.set$('fill',"none"));
		$1452 || ($1528.set$('stroke',"#170f20"));
		$1452 || ($1528.set$('stroke-linecap',"round"));
		$1452 || ($1528.set$('stroke-linejoin',"round"));
		$1452 || ($1528.set$('stroke-width',"4"));
		$1452 || ($1528.set$('d',"M1182.26 1015.92c-2.76-7.13.71-15.24 7.93-18.01 1.61-.62 3.3-.98 5.08-.98h24.42c-3.11-23.44 13.37-44.92 36.82-48.04 1.87-.27 3.74-.36 5.61-.36h1.16"));
		;
		$1452 || ($1529=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1529.set$('fill',"#8c2eff"));
		$1452 || ($1529.set$('d',"M1271.66 995.42c-3.12 0-6.06-.89-8.56-2.59-3.65-2.49-5.97-6.59-6.42-11.41-.44-4.81.9-9.8 3.84-13.99 3.92-5.62 10.07-9.09 16.22-9.09 3.12 0 6.06.89 8.56 2.58 3.65 2.5 5.97 6.6 6.41 11.41.45 4.82-.89 9.81-3.83 14-3.92 5.61-10.16 9.09-16.22 9.09ZM1236.1 945.68c-4.64 0-8.92-1.16-12.84-3.38-3.39-1.97-6.33-4.73-8.47-8.03l-.09-.17.18-.09c9.72-6.42 24.69-15.07 42.34-15.07 3.83 0 7.66.36 11.41 1.16h.18l-.09.18c-.81 2.32-1.87 4.55-3.12 6.68-6.6 11.59-17.92 18.72-29.5 18.72Z"));
		;
		$1452 || ($1530=imba_createSVGElement('path',$1455,null,null));
		$1452 || ($1530.set$('fill',"none"));
		$1452 || ($1530.set$('stroke',"#170f20"));
		$1452 || ($1530.set$('stroke-linecap',"round"));
		$1452 || ($1530.set$('stroke-linejoin',"round"));
		$1452 || ($1530.set$('stroke-width',"4"));
		$1452 || ($1530.set$('d',"M1118.89 983.92c1.69 2.14 7.84 3.3 11.23 2.14"));
		;
		;
		$1451[$afterReconcile$]($1453);
		return $1451;
	}
	static {
		register$(this,c$42,'LoginIllustration',2);
		imba_defineTag('login-illustration-mnu25o-ug',this,{name: 'LoginIllustration'});
	}
};

// TAG[epic=Modal, seq=37] Login Page
let c$43 = Symbol();
class CreateAccountPageComponent extends imba_Component {
	
	
	// css pos:absolute inset:0 zi:20
	// 	d:box d:vflex gap:4sp
	
	googleAuth(){
		api.logIn();
		return imba_commit();
	}
	facebookAuth(){
		api.logIn();
		return imba_commit();
	}
	appleAuth(){
		api.logIn();
		return imba_commit();
	}
	mockAuthToggle(){
		api.logIn();
		return imba_commit();
		
	}
	render(){
		var $1531, $1532, $1533, $1535 = this._ns_ || '', $1536, $1537, $1538, $1539, $1540, $1541, $1542, $1543, $1544, $1545, $1546, $1547, $1548, $1549, $1550, $1551, $1552, $1553, $1554, $1555, $1556, $1558, $1559;
		$1531=this;
		$1531[$beforeReconcile$]();
		($1532=$1533=1,$1531[$1534] === 1) || ($1532=$1533=0,$1531[$1534]=1);
		$1532 || ($1536=imba_createElement('div',$1531,`mnu25o-uj ${$1535}`,null));
		$1532 || ($1537=imba_createElement('div',$1536,`card ${$1535}`,null));
		$1532 || ($1538=imba_createElement('form',$1537,`form ${$1535}`,null));
		$1532 || ($1538.action="#");
		$1532 || ($1538.method="POST");
		$1532 || ($1539=imba_createElement('div',$1538,`field-wrapper ${$1535}`,null));
		$1532 || ($1540=imba_createElement('label',$1539,`${$1535}`,"Desired Username"));
		$1532 || ($1540.set$('for',"username"));
		;
		$1532 || ($1541=imba_createElement('input',$1539,`field email ${$1535}`,null));
		$1532 || ($1541.name="username");
		$1532 || ($1541.set$('autocomplete',"username"));
		$1532 || ($1541.required="");
		;
		;
		$1532 || ($1542=imba_createElement('div',$1538,`field-wrapper ${$1535}`,null));
		$1532 || ($1543=imba_createElement('label',$1542,`${$1535}`,"Email Address"));
		$1532 || ($1543.set$('for',"email"));
		;
		$1532 || ($1544=imba_createElement('input',$1542,`field email ${$1535}`,null));
		$1532 || ($1544.name="email");
		$1532 || ($1544.set$('autocomplete',"email"));
		$1532 || ($1544.required="");
		;
		;
		$1532 || ($1545=imba_createElement('div',$1538,`field-wrapper ${$1535}`,null));
		$1532 || ($1546=imba_createElement('label',$1545,`${$1535}`,"Password"));
		$1532 || ($1546.set$('for',"password"));
		;
		$1532 || ($1547=imba_createElement('input',$1545,`field email ${$1535}`,null));
		$1532 || ($1547.name="password");
		$1532 || ($1547.set$('autocomplete',"username"));
		$1532 || ($1547.required="");
		;
		;
		$1532 || ($1548=imba_createElement('div',$1538,`field-wrapper ${$1535}`,null));
		$1532 || ($1549=imba_createElement('label',$1548,`${$1535}`,"Confirm Password"));
		$1532 || ($1549.set$('for',"confirmpassword"));
		;
		$1532 || ($1550=imba_createElement('input',$1548,`field email ${$1535}`,null));
		$1532 || ($1550.name="confirmpassword");
		$1532 || ($1550.set$('autocomplete',"username"));
		$1532 || ($1550.required="");
		;
		;
		$1532 || ($1551=imba_createElement('div',$1538,`options ${$1535}`,null));
		$1532 || ($1552=imba_createElement('input',$1551,`email ${$1535}`,null));
		$1532 || ($1552.name="remember-me");
		$1532 || ($1552.type="checkbox");
		$1532 || ($1552.set$('autocomplete',"remember-me"));
		$1532 || ($1552.required="");
		;
		$1532 || ($1553=imba_createElement('label',$1551,`${$1535}`,"Remember Me"));
		$1532 || ($1553.set$('for',"remember-me"));
		;
		;
		$1532 || ($1554=imba_createElement('div',$1538,`login-button ${$1535}`,"Create Account"));
		$1532 || ($1554.on$(`click`,{mockAuthToggle: true},this));
		;
		$1532 || ($1555=imba_createElement('hr',$1538,`mnu25o-vc ${$1535}`,null));
		;
		($1558=$1559=1,$1556=$1531[$1557]) || ($1558=$1559=0,$1531[$1557]=$1556=imba_createComponent(ThirdPartyLogins,$1538,`${$1535}`,null));
		$1558 || !$1556.setup || $1556.setup($1559);
		$1556[$afterVisit$]($1559);
		$1558 || $1538[$appendChild$]($1556);
		;
		;
		;
		;
		$1531[$afterReconcile$]($1533);
		return $1531;
	}
	static {
		register$(this,c$43,'create-account-page',2);
		imba_defineTag('create-account-page',this,{cssns: 'mnu25o_uh',cssid: 'mnu25o-uh'});
	}
};
// ELEMENT[epic=ELEMENT, seq=41] Progress Bar
let c$44 = Symbol();
class ProgressBar extends imba_Component {
	
	render(){
		var $1560, $1561, $1562, $1564, $1565, $1567, $1568, $1570;
		$1560=this;
		$1560[$beforeReconcile$]();
		($1561=$1562=1,$1560[$1563] === 1) || ($1561=$1562=0,$1560[$1563]=1);
		$1561 || ($1564=imba_createElement('div',$1560,'progress-bg mnu25o_ve',null));
		($1567=$1568=1,$1565=$1560[$1566]) || ($1567=$1568=0,$1560[$1566]=$1565=imba_createElement('div',$1564,'mnu25o-vh progress-fg mnu25o_ve',null));
		($1570=this.progress + "%",$1570===$1560[$1569] || ($1565.css$var('--mnu25o_vi',$1560[$1569]=$1570,null,'flb')));
		;
		;
		$1560[$afterReconcile$]($1562);
		return $1560;
	}
	static {
		register$(this,c$44,'ProgressBar',2);
		imba_defineTag('progress-bar-mnu25o-vj',this,{cssns: 'mnu25o_ve',cssid: 'mnu25o-ve',name: 'ProgressBar'});
	}
};

// ELEMENT[epic=ELEMENT, seq=42] Icon Template
let c$45 = Symbol();
class IconComponent extends imba_Component {
	
	static {
		register$(this,c$45,'icon',2);
		imba_defineTag('icon',this,{cssns: 'mnu25o_vk',cssid: 'mnu25o-vk'});
	}
};

// ELEMENT[epic=ELEMENT, seq=43] Gift Icon
let c$46 = Symbol();
class IGiftComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1571, $1572, $1573, $1575 = this._ns_ || '', $1576, $1577, $1578, $1579, $1580, $1581;
		$1571=this;
		$1571[$beforeReconcile$]();
		($1572=$1573=1,$1571[$1574] === 1) || ($1572=$1573=0,$1571[$1574]=1);
		$1572 || ($1576=imba_createSVGElement('svg',$1571,`icon icon-tabler icon-tabler-gift ${$1575}`,null));
		$1572 || ($1576.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1572 || ($1576.set$('width',"44"));
		$1572 || ($1576.set$('height',"44"));
		$1572 || ($1576.set$('viewBox',"0 0 24 24"));
		$1572 || ($1576.set$('stroke-width',"1.5"));
		$1572 || ($1576.set$('stroke',"currentColor"));
		$1572 || ($1576.set$('fill',"none"));
		$1572 || ($1576.set$('stroke-linecap',"round"));
		$1572 || ($1576.set$('stroke-linejoin',"round"));
		$1572 || ($1577=imba_createSVGElement('path',$1576,`${$1575}`,null));
		$1572 || ($1577.set$('stroke',"none"));
		$1572 || ($1577.set$('d',"M0 0h24v24H0z"));
		$1572 || ($1577.set$('fill',"none"));
		;
		$1572 || ($1578=imba_createSVGElement('rect',$1576,`${$1575}`,null));
		$1572 || ($1578.set$('x',"3"));
		$1572 || ($1578.set$('y',"8"));
		$1572 || ($1578.set$('width',"18"));
		$1572 || ($1578.set$('height',"4"));
		$1572 || ($1578.set$('rx',"1"));
		;
		$1572 || ($1579=imba_createSVGElement('line',$1576,`${$1575}`,null));
		$1572 || ($1579.set$('x1',"12"));
		$1572 || ($1579.set$('y1',"8"));
		$1572 || ($1579.set$('x2',"12"));
		$1572 || ($1579.set$('y2',"21"));
		;
		$1572 || ($1580=imba_createSVGElement('path',$1576,`${$1575}`,null));
		$1572 || ($1580.set$('d',"M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"));
		;
		$1572 || ($1581=imba_createSVGElement('path',$1576,`${$1575}`,null));
		$1572 || ($1581.set$('d',"M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"));
		;
		;
		$1571[$afterReconcile$]($1573);
		return $1571;
	}
	static {
		register$(this,c$46,'i-gift',2);
		imba_defineTag('i-gift',this,{});
	}
};

// ELEMENT[epic=ELEMENT, seq=44] Market Icon
let c$47 = Symbol();
class IMarketComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1582, $1583, $1584, $1586 = this._ns_ || '', $1587, $1588, $1589, $1590, $1591, $1592, $1593;
		$1582=this;
		$1582[$beforeReconcile$]();
		($1583=$1584=1,$1582[$1585] === 1) || ($1583=$1584=0,$1582[$1585]=1);
		$1583 || ($1587=imba_createSVGElement('svg',$1582,`icon icon-tabler icon-tabler-building-store ${$1586}`,null));
		$1583 || ($1587.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1583 || ($1587.set$('width',"44"));
		$1583 || ($1587.set$('height',"44"));
		$1583 || ($1587.set$('viewBox',"0 0 24 24"));
		$1583 || ($1587.set$('stroke-width',"1.5"));
		$1583 || ($1587.set$('stroke',"currentColor"));
		$1583 || ($1587.set$('fill',"none"));
		$1583 || ($1587.set$('stroke-linecap',"round"));
		$1583 || ($1587.set$('stroke-linejoin',"round"));
		$1583 || ($1588=imba_createSVGElement('path',$1587,`${$1586}`,null));
		$1583 || ($1588.set$('stroke',"none"));
		$1583 || ($1588.set$('d',"M0 0h24v24H0z"));
		$1583 || ($1588.set$('fill',"none"));
		;
		$1583 || ($1589=imba_createSVGElement('line',$1587,`${$1586}`,null));
		$1583 || ($1589.set$('x1',"3"));
		$1583 || ($1589.set$('y1',"21"));
		$1583 || ($1589.set$('x2',"21"));
		$1583 || ($1589.set$('y2',"21"));
		;
		$1583 || ($1590=imba_createSVGElement('path',$1587,`${$1586}`,null));
		$1583 || ($1590.set$('d',"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"));
		;
		$1583 || ($1591=imba_createSVGElement('line',$1587,`${$1586}`,null));
		$1583 || ($1591.set$('x1',"5"));
		$1583 || ($1591.set$('y1',"21"));
		$1583 || ($1591.set$('x2',"5"));
		$1583 || ($1591.set$('y2',"10.85"));
		;
		$1583 || ($1592=imba_createSVGElement('line',$1587,`${$1586}`,null));
		$1583 || ($1592.set$('x1',"19"));
		$1583 || ($1592.set$('y1',"21"));
		$1583 || ($1592.set$('x2',"19"));
		$1583 || ($1592.set$('y2',"10.85"));
		;
		$1583 || ($1593=imba_createSVGElement('path',$1587,`${$1586}`,null));
		$1583 || ($1593.set$('d',"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"));
		;
		;
		$1582[$afterReconcile$]($1584);
		return $1582;
	}
	static {
		register$(this,c$47,'i-market',2);
		imba_defineTag('i-market',this,{});
	}
};

// ELEMENT[epic=ELEMENT, seq=45] Compass Icon
let c$48 = Symbol();
class ICompassComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1594, $1595, $1596, $1598 = this._ns_ || '', $1599, $1600, $1601, $1602, $1603, $1604, $1605, $1606;
		$1594=this;
		$1594[$beforeReconcile$]();
		($1595=$1596=1,$1594[$1597] === 1) || ($1595=$1596=0,$1594[$1597]=1);
		$1595 || ($1599=imba_createSVGElement('svg',$1594,`icon icon-tabler icon-tabler-compass ${$1598}`,null));
		$1595 || ($1599.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1595 || ($1599.set$('width',"44"));
		$1595 || ($1599.set$('height',"44"));
		$1595 || ($1599.set$('viewBox',"0 0 24 24"));
		$1595 || ($1599.set$('stroke-width',"1.5"));
		$1595 || ($1599.set$('stroke',"currentColor"));
		$1595 || ($1599.set$('fill',"none"));
		$1595 || ($1599.set$('stroke-linecap',"round"));
		$1595 || ($1599.set$('stroke-linejoin',"round"));
		$1595 || ($1600=imba_createSVGElement('path',$1599,`${$1598}`,null));
		$1595 || ($1600.set$('stroke',"none"));
		$1595 || ($1600.set$('d',"M0 0h24v24H0z"));
		$1595 || ($1600.set$('fill',"none"));
		;
		$1595 || ($1601=imba_createSVGElement('polyline',$1599,`${$1598}`,null));
		$1595 || ($1601.set$('points',"8 16 10 10 16 8 14 14 8 16"));
		;
		$1595 || ($1602=imba_createSVGElement('circle',$1599,`${$1598}`,null));
		$1595 || ($1602.set$('cx',"12"));
		$1595 || ($1602.set$('cy',"12"));
		$1595 || ($1602.set$('r',"9"));
		;
		$1595 || ($1603=imba_createSVGElement('line',$1599,`${$1598}`,null));
		$1595 || ($1603.set$('x1',"12"));
		$1595 || ($1603.set$('y1',"3"));
		$1595 || ($1603.set$('x2',"12"));
		$1595 || ($1603.set$('y2',"5"));
		;
		$1595 || ($1604=imba_createSVGElement('line',$1599,`${$1598}`,null));
		$1595 || ($1604.set$('x1',"12"));
		$1595 || ($1604.set$('y1',"19"));
		$1595 || ($1604.set$('x2',"12"));
		$1595 || ($1604.set$('y2',"21"));
		;
		$1595 || ($1605=imba_createSVGElement('line',$1599,`${$1598}`,null));
		$1595 || ($1605.set$('x1',"3"));
		$1595 || ($1605.set$('y1',"12"));
		$1595 || ($1605.set$('x2',"5"));
		$1595 || ($1605.set$('y2',"12"));
		;
		$1595 || ($1606=imba_createSVGElement('line',$1599,`${$1598}`,null));
		$1595 || ($1606.set$('x1',"19"));
		$1595 || ($1606.set$('y1',"12"));
		$1595 || ($1606.set$('x2',"21"));
		$1595 || ($1606.set$('y2',"12"));
		;
		;
		$1594[$afterReconcile$]($1596);
		return $1594;
	}
	static {
		register$(this,c$48,'i-compass',2);
		imba_defineTag('i-compass',this,{});
	}
};

// ELEMENT[epic=ELEMENT, seq=46] People Icon
let c$49 = Symbol();
class IPeopleComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1607, $1608, $1609, $1611 = this._ns_ || '', $1612, $1613, $1614, $1615, $1616, $1617;
		$1607=this;
		$1607[$beforeReconcile$]();
		($1608=$1609=1,$1607[$1610] === 1) || ($1608=$1609=0,$1607[$1610]=1);
		$1608 || ($1612=imba_createSVGElement('svg',$1607,`icon icon-tabler icon-tabler-friends ${$1611}`,null));
		$1608 || ($1612.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1608 || ($1612.set$('width',"44"));
		$1608 || ($1612.set$('height',"44"));
		$1608 || ($1612.set$('viewBox',"0 0 24 24"));
		$1608 || ($1612.set$('stroke-width',"1.5"));
		$1608 || ($1612.set$('stroke',"currentColor"));
		$1608 || ($1612.set$('fill',"none"));
		$1608 || ($1612.set$('stroke-linecap',"round"));
		$1608 || ($1612.set$('stroke-linejoin',"round"));
		$1608 || ($1613=imba_createSVGElement('path',$1612,`${$1611}`,null));
		$1608 || ($1613.set$('stroke',"none"));
		$1608 || ($1613.set$('d',"M0 0h24v24H0z"));
		$1608 || ($1613.set$('fill',"none"));
		;
		$1608 || ($1614=imba_createSVGElement('circle',$1612,`${$1611}`,null));
		$1608 || ($1614.set$('cx',"7"));
		$1608 || ($1614.set$('cy',"5"));
		$1608 || ($1614.set$('r',"2"));
		;
		$1608 || ($1615=imba_createSVGElement('path',$1612,`${$1611}`,null));
		$1608 || ($1615.set$('d',"M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"));
		;
		$1608 || ($1616=imba_createSVGElement('circle',$1612,`${$1611}`,null));
		$1608 || ($1616.set$('cx',"17"));
		$1608 || ($1616.set$('cy',"5"));
		$1608 || ($1616.set$('r',"2"));
		;
		$1608 || ($1617=imba_createSVGElement('path',$1612,`${$1611}`,null));
		$1608 || ($1617.set$('d',"M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"));
		;
		;
		$1607[$afterReconcile$]($1609);
		return $1607;
	}
	static {
		register$(this,c$49,'i-people',2);
		imba_defineTag('i-people',this,{});
	}
};

// ELEMENT[epic=ELEMENT, seq=47] Progress Ring

let c$50 = Symbol();
class ElemProgressRing extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.size = ($$ && ($0 = $$.size) !== undefined) ? ($0) : 100;
		
	}
	/* SAMPLE TAG
		<ProgressRing[$progress-color: purple5 $progress-bg: purple1 
			$center-color: white $text-color: purple5 $stroke-percent: 80%] 
			progress=progress size=100> 
			<span> "habit"
			<span slot="subtitle"> "{progress}%"
		*/
	
	render(){
		var $1618, $1619, $1620, $1622, $1624, $1625, $1627, $1628, $1629, $1631, $1632, $1633, $1635, $1638, $1643, $1644, $1646, $1647, $1649, $1650, $1652, $1653;
		$1618=this;
		$1618[$beforeReconcile$]();
		($1619=$1620=1,$1618[$1621] === 1) || ($1619=$1620=0,$1618[$1621]=1);
		($1624=$1625=1,$1622=$1618[$1623]) || ($1624=$1625=0,$1618[$1623]=$1622=imba_createElement('div',$1618,'mnu25o-ws circular mnu25o_wq',null));
		($1627=this.size + 'px',$1627===$1618[$1626] || ($1622.css$var('--mnu25o_wt',$1618[$1626]=$1627,null,'s')));
		$1624 || ($1628=imba_createElement('div',$1622,'mnu25o-wu inner mnu25o_wq',null));
		($1631=$1632=1,$1629=$1618[$1630]) || ($1631=$1632=0,$1618[$1630]=$1629=imba_createElement('div',$1628,'mnu25o-wv title mnu25o_wq',null));
		$1633=$1618.__slots.__;
		($1629[$1634] = $1629[$placeChild$]($1633,384,$1629[$1634]));
		;
		$1631 || !$1629.setup || $1629.setup($1632);
		$1629[$afterVisit$]($1632);
		;
		;
		{($1635=$1618[$1636]) || ($1618[$1636]=$1635=imba_createElement('div',$1622,'circle mnu25o_wq',null));
		let step = 180 / 50;
		let left_progress = 0;
		let right_progress = 0;
		if (this.progress > 50) {
			left_progress = ("" + ((this.progress - 50) * step) + "deg");
			right_progress = "180deg";
		} else {
			left_progress = "0deg";
			right_progress = ("" + ((this.progress) * step) + "deg");
		};
		($1638=this.size + "px",$1638===$1618[$1637] || ($1635.css$var('--mnu25o_wy',$1618[$1637]=$1638,null,'clip')));
		($1638=this.size + "px",$1638===$1618[$1639] || ($1635.css$var('--mnu25o_wz',$1618[$1639]=$1638,null,'clip')));
		($1638=(this.size / 2) + "px",$1638===$1618[$1640] || ($1635.css$var('--mnu25o_xa',$1618[$1640]=$1638,null,'clip')));
		($1638=(this.size / 2) + "px",$1638===$1618[$1641] || ($1635.css$var('--mnu25o_xb',$1618[$1641]=$1638,null,'clip')));
		($1638=this.size + "px",$1638===$1618[$1642] || ($1635.css$var('--mnu25o_xc',$1618[$1642]=$1638,null,'clip')));
		$1624 || ($1643=imba_createElement('div',$1635,'bar left mnu25o_wx mnu25o_wq',null));
		($1646=$1647=1,$1644=$1618[$1645]) || ($1646=$1647=0,$1618[$1645]=$1644=imba_createElement('div',$1643,'mnu25o-xe progress mnu25o_wx mnu25o_wq',null));
		(left_progress===$1618[$1648] || ($1644.css$var('--mnu25o_xf',$1618[$1648]=left_progress,null,'rotate')));
		;
		;
		$1624 || ($1649=imba_createElement('div',$1635,'bar right mnu25o_wx mnu25o_wq',null));
		($1652=$1653=1,$1650=$1618[$1651]) || ($1652=$1653=0,$1618[$1651]=$1650=imba_createElement('div',$1649,'mnu25o-xh progress mnu25o_wx mnu25o_wq',null));
		(right_progress===$1618[$1654] || ($1650.css$var('--mnu25o_xi',$1618[$1654]=right_progress,null,'rotate')));
		;
		;
		};
		;
		$1618[$afterReconcile$]($1620);
		return $1618;
		
	}
	static {
		register$(this,c$50,'ElemProgressRing',2);
		imba_defineTag('elem-progress-ring-mnu25o-xj',this,{cssns: 'mnu25o_wq',cssid: 'mnu25o-wq',name: 'ElemProgressRing'});
	}
};

imba_styles.register('mnu25o',".mnu25o-af, .mnu25o_wx.bar, .mnu25o_it.word, .mnu25o_ks.switch, .mnu25o_lh.switch, .mnu25o_wx.progress, .mnu25o_ve.progress-fg, .mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.bar {\n--e_ad:0ms;--e_af:cubic-bezier(0.23, 1, 0.32, 1);--e_aw:0ms;\n--e_sd:var(--e_ad);--e_sf:var(--e_af);--e_sw:var(--e_aw);\n--e_od:var(--e_sd);--e_of:var(--e_sf);--e_ow:var(--e_sw);\n--e_cd:var(--e_sd);--e_cf:var(--e_sf);--e_cw:var(--e_sw);\n--e_bd:var(--e_sd);--e_bf:var(--e_sf);--e_bw:var(--e_sw);\n--e_td:var(--e_bd);--e_tf:var(--e_bf);--e_tw:var(--e_bw);\n--e_b:var(--e_bd) var(--e_bf) var(--e_bw);\n--e_c:var(--e_cd) var(--e_cf) var(--e_cw);\n--e_rest:any;\ntransition:\n\tall var(--e_ad) var(--e_af) var(--e_aw),\n\topacity var(--e_od) var(--e_of) var(--e_ow),\n\ttransform var(--e_td) var(--e_tf) var(--e_tw),\n\tcolor var(--e_c),background-color var(--e_c),border-color var(--e_c),fill var(--e_c),stroke var(--e_c), outline-color var(--e_c), box-shadow var(--e_c), filter var(--e_c),\n\tinset var(--e_b), width var(--e_b),height var(--e_b),max-width var(--e_b),max-height var(--e_b),min-width var(--e_b),min-height var(--e_b),border-width var(--e_b),outline-width var(--e_b),stroke-width var(--e_b),margin var(--e_b),padding var(--e_b),\n\tvar(--e_rest);\n}\n\n.mnu25o-xe, .mnu25o-xh, .mnu25o_wq.circular .mnu25o_wq.inner, .mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.left {\n--t_x:0;--t_y:0;--t_rotate:0;\n--t_scale:1;--t_scale-x:1;--t_scale-y:1;\ntransform: translate(var(--t_x),var(--t_y)) rotate(var(--t_rotate))\n\tscaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\n}\n\n.mnu25o-af {display: flex;\nflex-direction: row;\n--e_rest: margin-left calc(var(--u_dur,1dur) * 2) !important;\nwidth: 100%;\nbackground: hsla(0.00,0.00%,100.00%,100%);}\n.mnu25o-af.\\@darkmode {background: hsla(0.00,0.00%,0.00%,100%);}\n.mnu25o-af.open {margin-left: 0px;}\n\n.mnu25o-ai:not(#_):not(#_) {grid-template-rows: calc(var(--u_topbar,1topbar) + calc(var(--u_sp,1sp) * 2)) auto 40px;}\n.mnu25o-ai > main:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o-ai > main.\\@darkmode:not(#_):not(._0) {background: hsla(240.00,5.88%,10.00%,50%);}\n\n.mnu25o-ak:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);}\n\n.mnu25o-au:not(#_):not(#_) {color: hsla(240.00,5.88%,10.00%,100%);\nheight: var(--u_bottombar,1bottombar);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\nbackground: hsla(var(--hue3),1);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ngap: calc(var(--u_sp,1sp) * 0.2);\n--u_rg: calc(var(--u_sp,1sp) * 0.2);\n--u_cg: calc(var(--u_sp,1sp) * 0.2);}\n.mnu25o-au.\\@darkmode:not(#_):not(#_) {color: hsla(240.00,4.76%,95.88%,100%);\nbackground: hsla(var(--hue8),1);}\n\na.mnu25o_au:not(#_) {color: hsla(var(--hue7),1);}\na.mnu25o_au.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\napp-dashboard { display:block; }\n\n.mnu25o-ax {gap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nh1.mnu25o_ax:not(#_) {margin-top: var(--u_sp,1sp);\nfont-size: 24px;\nline-height: 36px;\n--u_lh: 36px;}\n\n.mnu25o_ax.button:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,5.26%,26.08%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\n.mnu25o_ax.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(240.00,5.88%,90.00%,100%);}\n\n.mnu25o-ay:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;\npadding-top: calc(var(--u_sp,1sp) * 5);\npadding-bottom: calc(var(--u_sp,1sp) * 5);\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);}\n@media (min-width: 1024px){\n.mnu25o-ay:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;}\n}\n\n.mnu25o-az:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;\npadding: calc(var(--u_sp,1sp) * 2);\ngap: calc(var(--u_sp,1sp) * 0.6);\n--u_rg: calc(var(--u_sp,1sp) * 0.6);\n--u_cg: calc(var(--u_sp,1sp) * 0.6);}\n@media (min-width: 1024px){\n.mnu25o-az:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;}\n}\n\n.mnu25o-ba:not(#_):not(#_):not(#_) {color: hsla(var(--hue5),1);\nfont-weight: bold;\nfont-size: 1.6em;}\n\n.mnu25o-bb:not(#_):not(#_):not(#_) {color: hsla(217.89,10.61%,64.90%,100%);\nfont-weight: thin;\nfont-size: 1.3em;}\n\n.mnu25o-bc:not(#_):not(#_):not(#_) {height: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o-bf:not(#_):not(#_):not(#_) {width: 450px;\nheight: 300px;}\n@media (min-width: 768px){\n.mnu25o-bf:not(#_):not(#_):not(#_) {width: 600px;\nheight: 400px;}\n}\n\nlanding-page { display:block; }\n\n.mnu25o-bg {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\na.mnu25o_bg:not(#_),button.mnu25o_bg:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,5.26%,26.08%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\na.mnu25o_bg.\\@darkmode:not(#_),button.mnu25o_bg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(240.00,5.88%,90.00%,100%);}\n\n.mnu25o-bi:not(#_):not(#_):not(#_) {width: 200px;\nmargin-right: auto;\ncursor: pointer;}\n\ntop-navigation-mnu25o-br { display:block; }\n\n.mnu25o-bs {padding: var(--u_sp,1sp);\nwidth: 100%;}\n\n.mnu25o_bs.page-wrapper:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;}\n\n.mnu25o_bu.wrapper:not(#_) {background: hsla(var(--hue3),1);\ncolor: hsla(var(--hue9),1);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\n.mnu25o_bu.wrapper.\\@darkmode:not(#_) {background: hsla(var(--hue9),1);\ncolor: hsla(var(--hue2),1);}\n\n.mnu25o-bv:not(#_):not(#_):not(#_) {padding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\ntext-align: center;\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;}\n\n.mnu25o-bx:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.mnu25o-by:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.mnu25o-bz:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.mnu25o-cc:not(#_):not(#_):not(#_) {width: 200px;\nheight: 260px;}\n\napp-dictionary-page { display:block; }\n\n.mnu25o-cd {color: hsla(240.00,3.70%,15.88%,100%);\nwidth: 600px;\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);}\n.mnu25o-cd.\\@darkmode {color: hsla(240.00,5.88%,90.00%,100%);}\n\n.mnu25o_cd.row:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\ncursor: pointer;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: space-between;\norder: 2;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.4);\npadding-bottom: calc(var(--u_sp,1sp) * 0.4);\nborder-radius: 4px;}\n.mnu25o_cd.row.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n.mnu25o_cd.row:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue1),1);}\n.mnu25o_cd.row:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n.mnu25o_cd.row.learned:not(#_) {background: hsla(var(--hue3),50%);}\n.mnu25o_cd.row.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);}\n\n.mnu25o_cd.mono:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n\n.mnu25o_cd.err:not(#_) {color: hsla(0.00,90.60%,70.78%,100%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\nbutton-wrapper.mnu25o_cd:not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;}\n\n.mnu25o_cd.play-audio:not(#_) {width: 2em;\ncursor: pointer;}\n\nsvg.mnu25o_cd:not(#_) {width: 24px;\nheight: 24px;}\nsvg.mnu25o_cd :is(path,path-tag).mnu25o_cd:not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(243.40,75.36%,58.63%,100%);}\n\n\n.mnu25o_cd.searchbar input.mnu25o_cd:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nbackground: hsla(240.00,5.88%,90.00%,100%);\nborder-radius: 4px;\nwidth: 100%;\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;\norder: 1;}\n.mnu25o_cd.searchbar input.mnu25o_cd.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o_cd.searchbar input.mnu25o_cd:is(:focus,.\\@focus):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_cd.searchbar input.mnu25o_cd:is(:focus,.\\@focus).\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.mnu25o-cf:not(#_):not(#_):not(#_) {order: 0;}\n\n.mnu25o-ci:not(#_):not(#_):not(#_) {order: 0;}\n\napp-dictionary { display:block; }\n\n.mnu25o-cw {width: 100%;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);}\n\nuser-page { display:block; }\n\n.mnu25o-db:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);\nbackground: hsla(355.71,100.00%,97.25%,100%);\nborder: 2px solid hsla(216.00,12.20%,83.92%,100%);\nborder-radius: 4px;\nmargin: var(--u_sp,1sp);}\n\ncms-admin-page { display:block; }\n\n.mnu25o-df:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(228.00,96.49%,88.82%,100%);}\n\ncmslearn-module-list-mnu25o-dh { display:block; }\n\n.mnu25o_di.meta:not(#_) {padding: var(--u_sp,1sp);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\nborder-style: solid;\nborder-width: 2px;\nborder-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}\n\n.mnu25o_di.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n\n.mnu25o-dj:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nmargin: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);}\n\n.mnu25o-dk:not(#_):not(#_):not(#_) {font-size: 20px;\nline-height: 30px;\n--u_lh: 30px;}\n\n.mnu25o-dl:not(#_):not(#_):not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o-dm:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\n.mnu25o-dn:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(220.00,13.04%,90.98%,100%);\nborder-radius: 3px;}\n\n.mnu25o-dq:not(#_):not(#_) {height: 300px;\noverflow: auto;}\n\ncms-collection-card { display:block; }\n\n.mnu25o-ds:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(228.00,96.49%,88.82%,100%);}\n\ncmslesson-list-mnu25o-du { display:block; }\n\n.mnu25o_dv.meta:not(#_) {padding: var(--u_sp,1sp);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\nborder-style: solid;\nborder-width: 2px;\nborder-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}\n\n.mnu25o_dv.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n\n.mnu25o-dw:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nmargin: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);}\n\n.mnu25o-dx:not(#_):not(#_):not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o-dy:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\n.mnu25o-dz:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(220.00,13.04%,90.98%,100%);\nborder-radius: 3px;}\n\n.mnu25o-ed:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\ncmslesson-card-mnu25o-ee { display:block; }\n\n.mnu25o-eg:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(228.00,96.49%,88.82%,100%);}\n\ncmschapter-list-mnu25o-ei { display:block; }\n\n.mnu25o_ej.meta:not(#_) {padding: var(--u_sp,1sp);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\nborder-style: solid;\nborder-width: 2px;\nborder-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}\n\n.mnu25o_ej.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n\n.mnu25o-ek:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nmargin: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);}\n\n.mnu25o-el:not(#_):not(#_):not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o-em:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\n.mnu25o-en:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(220.00,13.04%,90.98%,100%);\nborder-radius: 3px;}\n\ncmschapter-card-mnu25o-er { display:block; }\n\n.mnu25o-es:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;\npadding: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o-et:not(#_):not(#_):not(#_) {color: hsla(216.92,19.12%,26.67%,100%);\npadding: calc(var(--u_sp,1sp) * 2);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;}\n\n.mnu25o-ey:not(#_):not(#_):not(#_) {display: block;\nbackground: hsla(212.73,26.83%,83.92%,100%);\ncolor: hsla(220.91,39.29%,10.98%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);}\n\ninfo-page { display:block; }\n\n.mnu25o-fa {padding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\nposition: relative;}\n\n.mnu25o_fa.bg:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\nwidth: 100%;\nheight: 100vh;\ndisplay: block;\nposition: absolute;\nz-index: 0;}\n\n.mnu25o_fa.phonetics-layout:not(#_) {z-index: 10;\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nphonetics-page { display:block; }\n\n.mnu25o_ff.chart-wrapper:not(#_) {padding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nalign-items: end;}\n\n.mnu25o_ff.row:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;}\n.mnu25o_ff.row.one:not(#_) {width: 200px;}\n.mnu25o_ff.row.two:not(#_) {width: 180px;}\n.mnu25o_ff.row.three:not(#_) {width: 160px;}\n.mnu25o_ff.row.four:not(#_) {width: 140px;}\n\nspan.mnu25o_ff:not(#_) {font-family: var(--font-monospace,monospace);\ntext-align: center;\ncursor: pointer;\nbackground: hsla(240.00,4.88%,83.92%,100%);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.6);\npadding-bottom: calc(var(--u_sp,1sp) * 0.6);\nborder-radius: 4px;\nwidth: 50px;}\nspan.mnu25o_ff.\\@darkmode:not(#_) {background: hsla(240.00,3.83%,46.08%,100%);}\nspan.mnu25o_ff:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue2),1);}\nspan.mnu25o_ff:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue7),1);}\n\nnav.mnu25o_ff:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\nplace-content: center;\nplace-items: center;}\nnav.mnu25o_ff button.mnu25o_ff:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nborder-radius: 4px;\ncursor: pointer;\ntext-align: center;\nbackground: hsla(240.00,5.03%,64.90%,100%);}\nnav.mnu25o_ff button.mnu25o_ff.\\@darkmode:not(#_) {background: hsla(240.00,5.20%,33.92%,100%);}\nnav.mnu25o_ff button.mnu25o_ff:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue4),1);}\nnav.mnu25o_ff button.mnu25o_ff:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue6),1);}\n\nphonetic-vowels-mnu25o-gl { display:block; }\n\n.mnu25o-gm {width: 100%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngrid-template-columns: var(--u_lessonbar,1lessonbar) var(--u_phrasebar,1phrasebar) auto;\npadding: var(--u_sp,1sp);}\n\n.mnu25o_gm.collection-collection:not(#_) {display: flex;\nflex-direction: row;\nwidth: 100%;}\n\n.mnu25o_gm.close-leftbar:not(#_) {margin-left: calc(var(--u_lessonbar,1lessonbar) * -1);}\n\n.mnu25o_gm.left-bar:not(#_) {flex-basis: var(--u_lessonbar,1lessonbar);\nheight: 100vh;}\n\n.mnu25o-go:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;}\n\n.mnu25o-gq:not(#_):not(#_):not(#_) {display: flex;}\n\ncollection-page-mnu25o-gx { display:block; }\n\n.mnu25o-gy {background: hsla(0.00,0.00%,100.00%,100%);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nwidth: 100%;\ncursor: pointer;}\n\n.mnu25o_gy.pill:not(#_) {border-radius: 9999px;\nflex-shrink: 1;\nwidth: fit-content;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nbackground: hsla(var(--hue1),1);\ncolor: hsla(var(--hue6),1);}\n.mnu25o_gy.pill.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);\ncolor: hsla(var(--hue4),1);}\n\n.mnu25o_gy.price:not(#_) {font-weight: bold;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: start;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nmargin-top: calc(var(--u_sp,1sp) * 2);\nmargin-bottom: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o_gy.num:not(#_) {font-size: 48px;\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--copy);}\n\n.mnu25o_gy.text:not(#_) {font-size: var(--u_xl,1xl);\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--heading);\ncolor: hsla(0.00,0.00%,63.92%,100%);}\n\n.mnu25o_gy.button:not(#_) {border-radius: var(--u_rd,1rd);\ntext-align: center;\npadding: var(--u_sp,1sp);\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncolor: hsla(240.00,5.88%,10.00%,100%);\ncursor: pointer;}\n.mnu25o_gy.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(0.00,0.00%,98.04%,100%);}\n.mnu25o_gy.button:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue5),1);}\n.mnu25o_gy.button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue5),1);}\n\ncollection-card-mnu25o-hg { display:block; }\n\n.mnu25o-hi:not(#_):not(#_):not(#_) {padding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nfont-size: 20px;\nline-height: 30px;\n--u_lh: 30px;}\n\nuser-page-owned-collections { display:block; }\n\n.mnu25o-hl {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nbackground: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,3.70%,15.88%,100%);}\n.mnu25o-hl.\\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);\ncolor: hsla(240.00,4.88%,83.92%,100%);}\n\n.mnu25o_hl.card-wrapper:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: start;\nflex-wrap: wrap;}\n@media (max-width: 1023px){\n.mnu25o_hl.card-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: start;}\n}\n\nuser-page-locked-collections { display:block; }\n\n.mnu25o-hq {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n@media (min-width: 1024px){\n.mnu25o-hq {display: flex;\nflex-direction: row;}\n}\n\n.mnu25o_hq.collection-grid:not(#_) {display: grid;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 1fr;}\n@media (min-width: 768px){\n.mnu25o_hq.collection-grid:not(#_) {grid-template-columns: minmax(var(--u_rightbar,1rightbar), calc(var(--u_rightbar,1rightbar) * 3)) var(--u_rightbar,1rightbar);}\n}\n\n.mnu25o_hq.image:not(#_) {border-radius: var(--u_rd,1rd);\naspect-ratio: 2 / 1;\nwidth: 100%;}\n\n.mnu25o_hq.left:not(#_),.mnu25o_hq.right:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_hq.phonetics:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\ndisplay: flex;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nflex-wrap: wrap;}\n\nlesson-layout-mnu25o-in { display:block; }\n\n\nnav.mnu25o_io:not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\nbutton.mnu25o_io:not(#_) {list-style-type: none;\nbackground: hsla(240.00,5.88%,90.00%,100%);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\nborder-radius: 3px;}\nbutton.mnu25o_io:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue3),1);}\n\nadmin-tools-mnu25o-is { display:block; }\n\n.mnu25o-it {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);\nflex-flow: wrap;}\n\n.mnu25o_it.word-wrapper:not(#_) {display: flex;\nflex-direction: row;\nflex-flow: wrap;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.mnu25o_it.word:not(#_) {font-family: var(--khmer);\nfont-size: 24px;\nline-height: 2em;\n--u_lh: 2em;\npadding-top: .4em;\nuser-select: none;\n-webkit-user-select: none;\ncursor: pointer;\npadding-left: calc(var(--u_sp,1sp) * 0.5);\npadding-right: calc(var(--u_sp,1sp) * 0.5);\nborder-radius: 4px;\n--e_rest: all var(--u_dur,1dur) !important;\nbackground: hsla(var(--hue0),50%);}\n.mnu25o_it.word.\\@darkmode:not(#_) {background: hsla(var(--hue5),20%);}\n.mnu25o_it.word:is(:hover,.\\@hover):not(#_),.mnu25o_it.word.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue1),1) inset;}\n.mnu25o_it.word:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_it.word.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}\n.mnu25o_it.word.known:not(#_) {background: hsla(var(--hue1),1);}\n.mnu25o_it.word.known.\\@darkmode:not(#_) {background: hsla(var(--hue5),50%);}\n.mnu25o_it.word.known:is(:hover,.\\@hover):not(#_),.mnu25o_it.word.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),1) inset;}\n.mnu25o_it.word.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_it.word.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}\n\n.mnu25o_it.not_in_dict:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}\n.mnu25o_it.not_in_dict.\\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,20%);}\n.mnu25o_it.not_in_dict:is(:hover,.\\@hover):not(#_),.mnu25o_it.not_in_dict.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(355.56,100.00%,94.71%,100%) inset;}\n.mnu25o_it.not_in_dict:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_it.not_in_dict.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}\n.mnu25o_it.not_in_dict.known:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}\n.mnu25o_it.not_in_dict.known.\\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,50%);}\n.mnu25o_it.not_in_dict.known:is(:hover,.\\@hover):not(#_),.mnu25o_it.not_in_dict.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,100%) inset;}\n.mnu25o_it.not_in_dict.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_it.not_in_dict.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}\n\nword-nav-mnu25o-ja { display:block; }\n\n.mnu25o-jb {padding: var(--u_sp,1sp);\ndisplay: grid;\ngrid-auto-flow: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: none;\nmin-height: calc(100vh - var(--u_topbar,1topbar));\nmax-width: 1000px;\nmargin-left: auto;\nmargin-right: auto;}\n@media (min-width: 1024px){\n.mnu25o-jb {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngrid-template-columns: 2fr 1fr;}\n}\n\n.mnu25o_jb.buy-cards:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n@media (min-width: 1024px){\n.mnu25o_jb.buy-cards:not(#_) {display: flex;\nflex-direction: column;}\n}\n\nmain.mnu25o_jb:not(#_) {flex-grow: 1;\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nwidth: 100%;}\n\n.mnu25o_jb.image:not(#_) {background: hsla(var(--hue5),1);\npadding: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\naspect-ratio: 16 / 9;}\n\n.mnu25o_jb.actions:not(#_) {display: grid;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: end;\ngrid-template-columns: 1fr 1fr;}\n.mnu25o_jb.actions button.mnu25o_jb:not(#_) {padding-left: calc(var(--u_sp,1sp) * 1.5);\npadding-right: calc(var(--u_sp,1sp) * 1.5);\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\nbackground: hsla(var(--hue3),1);\ncolor: hsla(var(--hue9),1);\nfont-weight: bold;\nfont-size: 20px;\ndisplay: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n.mnu25o_jb.actions button.mnu25o_jb.outline:not(#_) {background: none;}\n\n.mnu25o-jf:not(#_):not(#_):not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\nwidth: 100%;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 2fr 1fr;}\n\n.mnu25o-ji:not(#_):not(#_):not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\nwidth: 100%;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 1fr;}\n\nlearn-module-preview-mnu25o-jm { display:block; }\n\n.mnu25o-jn {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\npadding: calc(var(--u_sp,1sp) * 0);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);}\n\n.mnu25o_jn.user-image:not(#_) {width: calc(var(--u_sp,1sp) * 4);\nheight: calc(var(--u_sp,1sp) * 4);\nborder-radius: 9999px;\nborder: 3px solid hsla(240.00,4.76%,95.88%,20%);\nbox-shadow: var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4)));}\n\n.mnu25o_jn.user-info:not(#_) {width: 100%;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\ndisplay: flex;\nflex-direction: column;\nfont-family: 'Merriweather Sans', sans-serif;}\n\n.mnu25o_jn.user-stats:not(#_) {display: flex;\nflex-direction: row;\nalign-items: flex-end;}\n.mnu25o_jn.user-stats *:first-child:not(#_):not(._0) {margin-right: auto;}\n\n.mnu25o_jn.user-name:not(#_) {margin-right: auto;\nfont-weight: bold;\nfont-size: 20px;}\n\n.mnu25o_jn.user-wordcount:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-size: 10px;\nline-height: 16px;\n--u_lh: 16px;}\n.mnu25o_jn.user-wordcount.\\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}\n\n.mnu25o_jn.user-progress:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\nheight: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: relative;\nz-index: 0;\noverflow: hidden;}\n.mnu25o_jn.user-progress.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n.mnu25o_jn.user-progress .mnu25o_jn.progress-fg:not(#_) {background: hsla(var(--hue5),1);\nheight: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: absolute;\ntop: 0rem;\nright: 90%;\nz-index: 10;\nborder-top-right-radius: 9999px;\nborder-bottom-right-radius: 9999px;}\n\n.mnu25o_jn.user-settings:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n.mnu25o_jn.user-settings.\\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}\n.mnu25o_jn.user-settings:is(:hover,.\\@hover):not(#_) {color: hsla(var(--hue5),1);}\n\nuser-card-mnu25o-jy { display:block; }\n\n.mnu25o-jz {display: flex;\nflex-direction: column;\nalign-items: center;\nborder-radius: var(--u_rd,1rd);}\n.mnu25o-jz.collection_active {display: flex;\nflex-direction: column;}\n.mnu25o-jz:is(:hover,.\\@hover) {cursor: pointer;}\n.mnu25o-jz:is(:hover,.\\@hover) {background: hsla(0.00,0.00%,98.04%,100%);}\n.mnu25o-jz:is(:hover,.\\@hover).\\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}\n.mnu25o-jz.collection_active {background: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o-jz.collection_active.\\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);}\n\n.mnu25o_jz.image:not(#_) {border-radius: 4px;\noverflow: hidden;\nbackground: hsla(var(--hue1),1);\nborder-style: solid;\nborder-width: 0;\noutline: none;\nwidth: 100%;\naspect-ratio: 16 / 9;}\n\n.mnu25o_jz.card-info:not(#_) {width: 100%;\ndisplay: grid;\ngrid-template-rows: 1fr;}\n\n.mnu25o_jz.card-title:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\npadding-top: calc(var(--u_sp,1sp) * 0.6);\npadding-bottom: calc(var(--u_sp,1sp) * 0.4);}\n.mnu25o_jz.card-title h2.mnu25o_jz:not(#_) {font-size: 24px;\nline-height: 36px;\n--u_lh: 36px;\nfont-weight: bold;}\n\n.mnu25o_jz.progress-percent:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-family: var(--font-monospace,monospace);}\n.mnu25o_jz.progress-percent.\\@darkmode:not(#_) {color: hsla(240.00,3.83%,46.08%,100%);}\n\n.mnu25o_jz.collection-actions:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;}\n.mnu25o_jz.collection-actions a.mnu25o_jz:not(#_) {color: hsla(0.00,0.00%,100.00%,30%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n.mnu25o_jz.collection-actions a.mnu25o_jz:is(:hover,.\\@hover):not(#_) {color: hsla(var(--hue5),1);}\n\n.mnu25o_jz.icon-lock:not(#_) {display: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nbackground: hsla(var(--hue1),1);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nheight: 100%;}\n.mnu25o_jz.icon-lock.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n.mnu25o_jz.icon-lock svg.mnu25o_jz:not(#_) {width: 20px;\nheight: 20px;\nfill: hsla(var(--hue6),1);}\n.mnu25o_jz.icon-lock svg.mnu25o_jz.\\@darkmode:not(#_) {fill: hsla(var(--hue4),1);}\n.mnu25o_jz.icon-lock .mnu25o_jz.collection-price:not(#_) {color: hsla(var(--hue6),1);\nfont-family: var(--font-monospace,monospace);}\n.mnu25o_jz.icon-lock .mnu25o_jz.collection-price.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\n.mnu25o-kh:not(#_):not(#_):not(#_) {--fg: hsla(var(--hue5),1);\n--bg: hsla(240.00,4.88%,83.92%,100%);}\n.mnu25o-kh.\\@darkmode:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.26%,26.08%,100%);}\n\ncollection-card { display:block; }\n\n.mnu25o-ki {background: hsla(0.00,0.00%,100.00%,100%);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nwidth: 100%;}\n\n.mnu25o_ki.pill:not(#_) {border-radius: 9999px;\nflex-shrink: 1;\nwidth: fit-content;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nbackground: hsla(var(--hue1),1);\ncolor: hsla(var(--hue6),1);}\n.mnu25o_ki.pill.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);\ncolor: hsla(var(--hue4),1);}\n\n.mnu25o_ki.price:not(#_) {font-weight: bold;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: start;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nmargin-top: calc(var(--u_sp,1sp) * 2);\nmargin-bottom: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o_ki.num:not(#_) {font-size: 48px;\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--copy);}\n\n.mnu25o_ki.text:not(#_) {font-size: var(--u_xl,1xl);\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--heading);\ncolor: hsla(0.00,0.00%,63.92%,100%);}\n\n.mnu25o_ki.button:not(#_) {border-radius: var(--u_rd,1rd);\ntext-align: center;\npadding: var(--u_sp,1sp);\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncolor: hsla(240.00,5.88%,10.00%,100%);\ncursor: pointer;}\n.mnu25o_ki.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(0.00,0.00%,98.04%,100%);}\n.mnu25o_ki.button:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue5),1);}\n.mnu25o_ki.button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue5),1);}\n\nsell-card-mnu25o-kr { display:block; }\n\n.mnu25o-ks {display: flex;\nflex-direction: row;\njustify-content: space-between;\nbackground: hsla(0.00,0.00%,98.04%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nalign-items: center;}\n.mnu25o-ks.\\@darkmode {background: hsla(240.00,5.88%,10.00%,100%);}\n\n.mnu25o_ks.khmer:not(#_) {color: hsla(var(--hue5),1);}\n\n.mnu25o_ks.switch-wrapper:not(#_) {height: 30px;\nwidth: 110px;\nborder-radius: 9999px;\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncursor: pointer;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}\n.mnu25o_ks.switch-wrapper.\\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}\n.mnu25o_ks.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}\n.mnu25o_ks.switch-wrapper.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n\n.mnu25o_ks.switch:not(#_) {margin-left: 0px;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;\nheight: 30px;\nborder-radius: 9999px;\nborder-style: solid;\nborder-width: 3px;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-color: hsla(240.00,4.88%,83.92%,100%);\nbackground: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);\nwidth: 90px;}\n.mnu25o_ks.switch.\\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o_ks.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);\nbackground: hsla(var(--hue2),1);\ncolor: hsla(var(--hue8),1);\nmargin-left: 20px;}\n.mnu25o_ks.switch.learned.\\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);\nbackground: hsla(var(--hue5),1);\ncolor: hsla(var(--hue1),1);}\n\n.mnu25o-kw:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.mnu25o-kx:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.mnu25o-kz:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.mnu25o-la:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.mnu25o-ld:not(#_):not(#_):not(#_) {font-size: 24px;\nline-height: 36px;\n--u_lh: 36px;}\n\nword-bar-mnu25o-lg { display:block; }\n\n.mnu25o-lh {display: flex;\nflex-direction: column;\nalign-items: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nmin-width: var(--u_rightbar,1rightbar);\nwidth: 100%;}\n\n.mnu25o_lh.khmer:not(#_) {line-height: 60px;\n--u_lh: 60px;\nmargin-top: 20px;\nfont-family: var(--khmer);\ncolor: hsla(var(--hue6),1);}\n\n.mnu25o_lh.phonetic:not(#_) {font-family: var(--font-monospace,monospace);\nfont-size: 20px;\nline-height: 30px;\n--u_lh: 30px;\ncolor: hsla(var(--hue5),1);}\n.mnu25o_lh.phonetic.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\n.mnu25o_lh.switch-wrapper:not(#_) {height: 30px;\nwidth: 110px;\nborder-radius: 9999px;\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncursor: pointer;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}\n.mnu25o_lh.switch-wrapper.\\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}\n.mnu25o_lh.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}\n.mnu25o_lh.switch-wrapper.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n\n.mnu25o_lh.switch:not(#_) {margin-left: 0px;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;\nheight: 30px;\nborder-radius: 9999px;\nborder-style: solid;\nborder-width: 3px;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-color: hsla(240.00,4.88%,83.92%,100%);\nbackground: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);\nwidth: 90px;}\n.mnu25o_lh.switch.\\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o_lh.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);\nbackground: hsla(var(--hue2),1);\ncolor: hsla(var(--hue8),1);\nmargin-left: 20px;}\n.mnu25o_lh.switch.learned.\\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);\nbackground: hsla(var(--hue5),1);\ncolor: hsla(var(--hue1),1);}\n\n.mnu25o_lh.resizeable:not(#_) {margin: 0rem;\npadding: 0rem;\nheight: 40px;\nwidth: 100px;\nbackground: hsla(var(--hue4),1);\noverflow: hidden;}\n\n.mnu25o_lh.phonetic-wrapper:not(#_) {cursor: pointer;}\n\n.mnu25o-lk:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.mnu25o-ll:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.mnu25o-ln:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.mnu25o-lo:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\nword-card-mnu25o-lv { display:block; }\n\n.mnu25o-ly:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;}\n\n.mnu25o-lz:not(#_):not(#_):not(#_) {width: 2em;\ncursor: pointer;}\n\n.mnu25o-ma:not(#_):not(#_):not(#_) {width: 24px;\nheight: 24px;}\n\n.mnu25o-mb:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(243.40,75.36%,58.63%,100%);}\n\n.mnu25o-mc:not(#_):not(#_):not(#_) {width: 2em;\ncursor: pointer;}\n\n.mnu25o-md:not(#_):not(#_):not(#_) {width: 24px;\nheight: 24px;}\n\n.mnu25o-me:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(228.00,96.49%,88.82%,100%);}\n\naudio-player-mnu25o-mf { display:block; }\n\ndefinition-card-mnu25o-mo { display:block; }\n\n.mnu25o_mp.shortcut-wrapper:not(#_) {display: grid;\ngrid-template-columns: 1fr 1fr;\nalign-items: center;}\n\n.mnu25o_mp.key-wrapper:not(#_) {display: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);\nwidth: 100px;}\n.mnu25o_mp.key-wrapper.horizontal:not(#_) {display: flex;\nflex-direction: row;\njustify-content: flex-start;\nalign-items: stretch;\nalign-content: stretch;}\n\n.mnu25o_mp.key-text:not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(0.00,0.00%,32.16%,100%);\nwrap: wrap;\nflex-shrink: 1;\nflex-grow: 0;}\n.mnu25o_mp.key-text.\\@darkmode:not(#_) {color: hsla(0.00,0.00%,63.92%,100%);}\n\n.mnu25o_mp.key:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nborder-radius: 4px;\nfont-size: .7em;\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nline-height: var(--u_sp,1sp);\n--u_lh: var(--u_sp,1sp);\nborder: 1px solid hsla(0.00,0.00%,63.92%,100%);\ncolor: hsla(0.00,0.00%,45.10%,100%);\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n.mnu25o_mp.key.\\@darkmode:not(#_) {border: 1px solid hsla(234.45,89.47%,73.92%,100%);\ncolor: hsla(234.45,89.47%,73.92%,100%);}\n\nshortcut-card-mnu25o-ok { display:block; }\n\n.mnu25o-ol {background: hsla(0.00,0.00%,100.00%,100%);\ndisplay: flex;\nflex-direction: column;}\n\n.mnu25o_ol.letter-row:not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;}\n\n.mnu25o_ol.letter:not(#_) {font-family: var(--khmer);\nfont-size: 30px;\nline-height: 46px;\n--u_lh: 46px;}\n.mnu25o_ol.letter.C1:not(#_),.mnu25o_ol.letter.L1:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n.mnu25o_ol.letter.C2:not(#_),.mnu25o_ol.letter.L2:not(#_) {color: hsla(349.72,89.16%,60.20%,100%);}\n.mnu25o_ol.letter.L2weak:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);}\n\n.mnu25o_ol.vida:not(#_) {text-align: right;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\nfont-size: 16px;\nline-height: 24px;\n--u_lh: 24px;\ncolor: hsla(240.00,5.03%,64.90%,100%);}\n.mnu25o_ol.vida.\\@darkmode:not(#_) {color: hsla(240.00,5.26%,26.08%,100%);}\n\nspelling-card-mnu25o-ou { display:block; }\n\n.mnu25o-ov {height: 100vh;\nwidth: var(--u_lessonbar,1lessonbar);\noverflow-y: scroll;\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_ov.title-card:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\npadding: var(--u_sp,1sp);}\n.mnu25o_ov.title-card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}\n\n.mnu25o_ov.active:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);}\n\n.mnu25o_ov.icon-title:not(#_) {display: flex;\nflex-direction: row;}\n\n.mnu25o_ov.usage_word_count:not(#_) {font-size: 10px;\nline-height: 16px;\n--u_lh: 16px;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\ncolor: hsla(240.00,5.20%,33.92%,100%);}\n\nlesson-nav-mnu25o-oy { display:block; }\n\n.mnu25o-oz {cursor: pointer;\nborder-radius: var(--u_rd,1rd);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\ncolor: hsla(240.00,3.83%,46.08%,100%);\nbackground: hsla(0.00,0.00%,100.00%,50%);}\n.mnu25o-oz.\\@darkmode {background: hsla(240.00,3.70%,15.88%,20%);}\n.mnu25o-oz:is(:hover,.\\@hover) {background: hsla(0.00,0.00%,100.00%,100%);}\n.mnu25o-oz:is(:hover,.\\@hover).\\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}\n\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--bg: hsla(240.00,4.88%,83.92%,100%);\n--fg: hsla(240.00,5.26%,26.08%,100%);}\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz:is(:hover,.\\@hover) :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--fg: hsla(234.45,89.47%,73.92%,100%);}\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,50%);\ncolor: hsla(240.00,4.88%,83.92%,100%);}\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\\@darkmode :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(240.00,5.20%,33.92%,100%);}\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\\@darkmode.hover:not(#_),:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\\@darkmode:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}\n:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\\@darkmode.hover :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_),:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\\@darkmode:is(:hover,.\\@hover) :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(234.45,89.47%,73.92%,100%);}\n\n.mnu25o-pa:not(#_):not(#_):not(#_) {width: 100%;}\n\n.mnu25o-pb:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: end;}\n\n.mnu25o-pd:not(#_):not(#_):not(#_) {opacity: 80%;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\nfont-family: var(--font-monospace,monospace);}\n\nlesson-nav-item-mnu25o-pf { display:block; }\n\n.mnu25o-pg {color: hsla(240.00,5.88%,10.00%,100%);\nwidth: var(--u_phrasebar,1phrasebar);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\nalign-items: center;}\n\n.mnu25o_pg.number-toggle:not(#_) {border-radius: 9999px;\nwidth: 30px;\nheight: 30px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nbackground: hsla(240.00,4.76%,95.88%,100%);\ncolor: hsla(240.00,3.83%,46.08%,100%);\nposition: relative;\ncursor: pointer;}\n.mnu25o_pg.number-toggle.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);}\n.mnu25o_pg.number-toggle:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.88%,83.92%,100%);}\n.mnu25o_pg.number-toggle:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\nphrase-nav-mnu25o-pk { display:block; }\n\n.mnu25o-pl {padding: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o-pl.hidden {display: none;}\n\n.mnu25o_pl.bg:not(#_) {position: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\nz-index: 20;\nflex-direction: column;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ngap: calc(var(--u_sp,1sp) * 4);\n--u_rg: calc(var(--u_sp,1sp) * 4);\n--u_cg: calc(var(--u_sp,1sp) * 4);\nbackground: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o_pl.bg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.mnu25o_pl.card:not(#_) {max-width: 600px;\npadding: calc(var(--u_sp,1sp) * 2.4);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: var(--hue4);\n--bxs-sm-color: var(--hue7);\n--bxs-xxl-color: var(--hue5);}\n.mnu25o_pl.card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: 0,0%,0%;\n--bxs-md-color: 0,0%,0%;\n--bxs-xxl-color: 0,0%,0%;}\n\n.mnu25o_pl.form:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 1.6);\n--u_rg: calc(var(--u_sp,1sp) * 1.6);\n--u_cg: calc(var(--u_sp,1sp) * 1.6);\nwidth: 500px;}\n\n.mnu25o_pl.field-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n.mnu25o_pl.field-wrapper label.mnu25o_pl:not(#_) {user-select: none;\n-webkit-user-select: none;}\n\n.mnu25o_pl.field:not(#_) {width: 100%;\nheight: 40px;\nborder-radius: var(--u_rd,1rd);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\ncolor: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_pl.field.\\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);\nbackground: hsla(240.00,3.70%,15.88%,100%);}\n\n.mnu25o_pl.options:not(#_) {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nalign-items: center;}\n\n.mnu25o_pl.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n\n.mnu25o_pl.login-button:not(#_) {width: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\ntext-align: center;\nborder-radius: var(--u_rd,1rd);\ncursor: pointer;\nuser-select: none;\n-webkit-user-select: none;\nborder: 2px solid hsla(240.00,4.88%,83.92%,100%);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;}\n.mnu25o_pl.login-button .mnu25o_pl.button-logo:not(#_) {width: 30px;}\n.mnu25o_pl.login-button:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o_pl.login-button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}\n.mnu25o_pl.login-button:is(:active,.\\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_pl.login-button:is(:active,.\\@active).\\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}\n\n.mnu25o-pn:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o-pz:not(#_):not(#_):not(#_) {margin-left: auto;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.mnu25o-qb:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);\nmargin-bottom: calc(var(--u_sp,1sp) * 0.4);}\n\nlogin-page { display:block; }\n\n.mnu25o_qd.login-button-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_qd.login-button:not(#_) {width: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\ntext-align: center;\nborder-radius: var(--u_rd,1rd);\ncursor: pointer;\nuser-select: none;\n-webkit-user-select: none;\nborder: 2px solid hsla(240.00,4.88%,83.92%,100%);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;}\n.mnu25o_qd.login-button .mnu25o_qd.button-logo:not(#_) {width: 30px;}\n.mnu25o_qd.login-button:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o_qd.login-button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}\n.mnu25o_qd.login-button:is(:active,.\\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_qd.login-button:is(:active,.\\@active).\\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}\n\nthird-party-logins-mnu25o-qp { display:block; }\n\n.mnu25o-qq {--googleyellow: #FBBC05;}\n\n.mnu25o-qq {--googlered: #EB4335;\n--googlegreen: #34A853;\n--googleblue: #4285F4;}\n\n.mnu25o-qu:not(#_):not(#_):not(#_) {fill: var(--googleyellow);}\n\n.mnu25o-qv:not(#_):not(#_):not(#_) {fill: var(--googlered);}\n\n.mnu25o-qw:not(#_):not(#_):not(#_) {fill: var(--googlegreen);}\n\n.mnu25o-qx:not(#_):not(#_):not(#_) {fill: var(--googleblue);}\n\ngoogle-icon-mnu25o-qy { display:block; }\n\napple-icon-mnu25o-rc { display:block; }\n\nfacebook-icon-mnu25o-rg { display:block; }\n\nlogin-illustration-mnu25o-ug { display:block; }\n\n.mnu25o-uh {padding: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o-uh.hidden {display: none;}\n\n.mnu25o_uh.bg:not(#_) {position: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\nz-index: 20;\nflex-direction: column;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ngap: calc(var(--u_sp,1sp) * 4);\n--u_rg: calc(var(--u_sp,1sp) * 4);\n--u_cg: calc(var(--u_sp,1sp) * 4);\nbackground: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o_uh.bg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.mnu25o_uh.card:not(#_) {width: 600px;\npadding: calc(var(--u_sp,1sp) * 2.4);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: var(--hue4);\n--bxs-sm-color: var(--hue7);\n--bxs-xxl-color: var(--hue5);}\n.mnu25o_uh.card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: 0,0%,0%;\n--bxs-md-color: 0,0%,0%;\n--bxs-xxl-color: 0,0%,0%;}\n\n.mnu25o_uh.form:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 1.6);\n--u_rg: calc(var(--u_sp,1sp) * 1.6);\n--u_cg: calc(var(--u_sp,1sp) * 1.6);}\n\n.mnu25o_uh.field-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n.mnu25o_uh.field-wrapper label.mnu25o_uh:not(#_) {user-select: none;\n-webkit-user-select: none;}\n\n.mnu25o_uh.field:not(#_) {width: 100%;\nheight: 40px;\nborder-radius: var(--u_rd,1rd);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\ncolor: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_uh.field.\\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);\nbackground: hsla(240.00,3.70%,15.88%,100%);}\n\n.mnu25o_uh.options:not(#_) {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nalign-items: center;}\n\n.mnu25o_uh.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n\n.mnu25o_uh.login-button:not(#_) {width: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\ntext-align: center;\nborder-radius: var(--u_rd,1rd);\ncursor: pointer;\nuser-select: none;\n-webkit-user-select: none;\nborder: 2px solid hsla(240.00,4.88%,83.92%,100%);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;}\n.mnu25o_uh.login-button .mnu25o_uh.button-logo:not(#_) {width: 30px;}\n.mnu25o_uh.login-button:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o_uh.login-button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}\n.mnu25o_uh.login-button:is(:active,.\\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_uh.login-button:is(:active,.\\@active).\\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}\n\n.mnu25o-uj:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o-vc:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);\nmargin-bottom: calc(var(--u_sp,1sp) * 0.4);}\n\ncreate-account-page { display:block; }\n\n.mnu25o-ve {width: 100%;\n--bg: hsla(240.00,5.88%,90.00%,100%);\n--fg: hsla(var(--hue4),1);}\n.mnu25o-ve.\\@darkmode {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(var(--hue6),1);}\n\n.mnu25o_ve.progress-bg:not(#_) {height: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: relative;\nz-index: 0;\noverflow: hidden;\ndisplay: flex;\nflex-direction: row;\nbackground: var(--bg);}\n\n.mnu25o_ve.progress-fg:not(#_) {height: 10px;\nz-index: 10;\nflex-basis: 0%;\n--e_rest: all var(--u_dur,1dur) ease-in-out !important;\nbackground: var(--fg);}\n\n.mnu25o-vh:not(#_):not(#_):not(#_) {flex-basis: var(--mnu25o_vi);}\n\nprogress-bar-mnu25o-vj { display:block; }\n\n.mnu25o-vk {display: inline;\nmargin-bottom: 4px;}\n\nsvg.mnu25o_vk:not(#_) {width: 20px;\nheight: 20px;\ndisplay: inline-block;\nstroke: hsla(var(--hue4),1);}\n\nicon-tag { display:block; }\n\ni-gift { display:block; }\n\ni-market { display:block; }\n\ni-compass { display:block; }\n\ni-people { display:block; }\n\n.mnu25o-wq {text-align: center;\n--progress-color: hsla(var(--hue2),1);\n--progress-bg: hsla(240.00,4.76%,95.88%,100%);\n--text-color: hsla(240.00,3.83%,46.08%,100%);\n--center-color: hsla(240.00,4.76%,95.88%,100%);\n--stroke-percent: 70%;\nposition: absolute;}\n.mnu25o-wq.\\@darkmode {--progress-color: hsla(var(--hue7),1);\n--progress-bg: hsla(240.00,3.70%,15.88%,100%);\n--text-color: hsla(240.00,5.03%,64.90%,100%);\n--center-color: hsla(240.00,3.70%,15.88%,100%);}\n.mnu25o-wq.active {--progress-color: hsla(var(--hue4),1);\n--progress-bg: hsla(var(--hue2),1);\n--center-color: hsla(var(--hue2),1);}\n.mnu25o-wq.active.\\@darkmode {--progress-color: hsla(var(--hue6),1);\n--progress-bg: hsla(var(--hue7),1);\n--center-color: hsla(var(--hue8),1);}\n.mnu25o-wq:is(:hover,.\\@hover) {--progress-bg: hsla(240.00,5.88%,90.00%,100%);\n--progress-color: hsla(var(--hue3),1);\n--center-color: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o-wq:is(:hover,.\\@hover).\\@darkmode {--progress-bg: hsla(240.00,5.26%,26.08%,100%);\n--progress-color: hsla(var(--hue5),1);\n--center-color: hsla(240.00,5.26%,26.08%,100%);}\n\n.mnu25o-wq.disabled {opacity: 30%;}\n\n.mnu25o_wq.circular:not(#_) {width: var(--size);\nheight: var(--size);\nbackground: none;\nposition: relative;}\n.mnu25o_wq.circular .mnu25o_wq.inner:not(#_) {background: var(--center-color);\nposition: absolute;\nz-index: 6;\ntop: 50%;\nleft: 50%;\nwidth: var(--stroke-percent);\nheight: var(--stroke-percent);\n--t_y: -50% !important;\n--t_x: -50% !important;\nborder-radius: 9999px;\nplace-content: center;\nplace-items: center;}\n.mnu25o_wq.circular .mnu25o_wq.title:not(#_) {z-index: 10;\nfont-size: 18px;\ncolor: var(--text-color);\nmargin-top: 7%;}\n\n.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.bar:not(#_) {position: absolute;\nwidth: 100%;\nheight: 100%;\nbackground: var(--progress-bg);\nborder-radius: 100%;\n--e_rest: rotation var(--u_dur,1dur) ease-in-out !important;}\n.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.bar .mnu25o_wq.progress:not(#_) {background: var(--progress-color);\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nborder-radius: 100%;}\n.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.left:not(#_) {--t_rotate: -180deg !important;}\n.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.right:not(#_) {z-index: 3;}\n\n.mnu25o-ws:not(#_):not(#_):not(#_) {width: var(--mnu25o_wt);\nheight: var(--mnu25o_wt);}\n\n.mnu25o-wu:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;}\n\n.mnu25o-wv:not(#_):not(#_):not(#_) {font-size: 14px;\nline-height: 100%;\n--u_lh: 100%;}\n\n.mnu25o_wx.bar:not(#_) {clip: rect(0px, var(--mnu25o_wy), var(--mnu25o_wz), var(--mnu25o_xa));\n--e_rest: clip-path 1s !important;}\n\n.mnu25o_wx.progress:not(#_) {clip: rect(0px, var(--mnu25o_xb), var(--mnu25o_xc), 0px);\n--e_rest: clip-path 1s !important;}\n\n.mnu25o-xe:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_xf) !important;}\n\n.mnu25o-xh:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_xi) !important;}\n\nelem-progress-ring-mnu25o-xj { display:block; }");
/*
.mnu25o-af, .mnu25o_wx.bar, .mnu25o_it.word, .mnu25o_ks.switch, .mnu25o_lh.switch, .mnu25o_wx.progress, .mnu25o_ve.progress-fg, .mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.bar {
--e_ad:0ms;--e_af:cubic-bezier(0.23, 1, 0.32, 1);--e_aw:0ms;
--e_sd:var(--e_ad);--e_sf:var(--e_af);--e_sw:var(--e_aw);
--e_od:var(--e_sd);--e_of:var(--e_sf);--e_ow:var(--e_sw);
--e_cd:var(--e_sd);--e_cf:var(--e_sf);--e_cw:var(--e_sw);
--e_bd:var(--e_sd);--e_bf:var(--e_sf);--e_bw:var(--e_sw);
--e_td:var(--e_bd);--e_tf:var(--e_bf);--e_tw:var(--e_bw);
--e_b:var(--e_bd) var(--e_bf) var(--e_bw);
--e_c:var(--e_cd) var(--e_cf) var(--e_cw);
--e_rest:any;
transition:
	all var(--e_ad) var(--e_af) var(--e_aw),
	opacity var(--e_od) var(--e_of) var(--e_ow),
	transform var(--e_td) var(--e_tf) var(--e_tw),
	color var(--e_c),background-color var(--e_c),border-color var(--e_c),fill var(--e_c),stroke var(--e_c), outline-color var(--e_c), box-shadow var(--e_c), filter var(--e_c),
	inset var(--e_b), width var(--e_b),height var(--e_b),max-width var(--e_b),max-height var(--e_b),min-width var(--e_b),min-height var(--e_b),border-width var(--e_b),outline-width var(--e_b),stroke-width var(--e_b),margin var(--e_b),padding var(--e_b),
	var(--e_rest);
}

.mnu25o-xe, .mnu25o-xh, .mnu25o_wq.circular .mnu25o_wq.inner, .mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.left {
--t_x:0;--t_y:0;--t_rotate:0;
--t_scale:1;--t_scale-x:1;--t_scale-y:1;
transform: translate(var(--t_x),var(--t_y)) rotate(var(--t_rotate))
	scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
}

.mnu25o-af {display: flex;
flex-direction: row;
--e_rest: margin-left calc(var(--u_dur,1dur) * 2) !important;
width: 100%;
background: hsla(0.00,0.00%,100.00%,100%);}
.mnu25o-af.\@darkmode {background: hsla(0.00,0.00%,0.00%,100%);}
.mnu25o-af.open {margin-left: 0px;}

.mnu25o-ai:not(#_):not(#_) {grid-template-rows: calc(var(--u_topbar,1topbar) + calc(var(--u_sp,1sp) * 2)) auto 40px;}
.mnu25o-ai > main:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.mnu25o-ai > main.\@darkmode:not(#_):not(._0) {background: hsla(240.00,5.88%,10.00%,50%);}

.mnu25o-ak:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);}

.mnu25o-au:not(#_):not(#_) {color: hsla(240.00,5.88%,10.00%,100%);
height: var(--u_bottombar,1bottombar);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background: hsla(var(--hue3),1);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
gap: calc(var(--u_sp,1sp) * 0.2);
--u_rg: calc(var(--u_sp,1sp) * 0.2);
--u_cg: calc(var(--u_sp,1sp) * 0.2);}
.mnu25o-au.\@darkmode:not(#_):not(#_) {color: hsla(240.00,4.76%,95.88%,100%);
background: hsla(var(--hue8),1);}

a.mnu25o_au:not(#_) {color: hsla(var(--hue7),1);}
a.mnu25o_au.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

app-dashboard { display:block; }

.mnu25o-ax {gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

h1.mnu25o_ax:not(#_) {margin-top: var(--u_sp,1sp);
font-size: 24px;
line-height: 36px;
--u_lh: 36px;}

.mnu25o_ax.button:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
color: hsla(240.00,5.26%,26.08%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;}
.mnu25o_ax.button.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(240.00,5.88%,90.00%,100%);}

.mnu25o-ay:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;
padding-top: calc(var(--u_sp,1sp) * 5);
padding-bottom: calc(var(--u_sp,1sp) * 5);
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);}
@media (min-width: 1024px){
.mnu25o-ay:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;}
}

.mnu25o-az:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;
padding: calc(var(--u_sp,1sp) * 2);
gap: calc(var(--u_sp,1sp) * 0.6);
--u_rg: calc(var(--u_sp,1sp) * 0.6);
--u_cg: calc(var(--u_sp,1sp) * 0.6);}
@media (min-width: 1024px){
.mnu25o-az:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;}
}

.mnu25o-ba:not(#_):not(#_):not(#_) {color: hsla(var(--hue5),1);
font-weight: bold;
font-size: 1.6em;}

.mnu25o-bb:not(#_):not(#_):not(#_) {color: hsla(217.89,10.61%,64.90%,100%);
font-weight: thin;
font-size: 1.3em;}

.mnu25o-bc:not(#_):not(#_):not(#_) {height: calc(var(--u_sp,1sp) * 2);}

.mnu25o-bf:not(#_):not(#_):not(#_) {width: 450px;
height: 300px;}
@media (min-width: 768px){
.mnu25o-bf:not(#_):not(#_):not(#_) {width: 600px;
height: 400px;}
}

landing-page { display:block; }

.mnu25o-bg {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

a.mnu25o_bg:not(#_),button.mnu25o_bg:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
color: hsla(240.00,5.26%,26.08%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;}
a.mnu25o_bg.\@darkmode:not(#_),button.mnu25o_bg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(240.00,5.88%,90.00%,100%);}

.mnu25o-bi:not(#_):not(#_):not(#_) {width: 200px;
margin-right: auto;
cursor: pointer;}

top-navigation-mnu25o-br { display:block; }

.mnu25o-bs {padding: var(--u_sp,1sp);
width: 100%;}

.mnu25o_bs.page-wrapper:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
max-width: 800px;
margin-left: auto;
margin-right: auto;}

.mnu25o_bu.wrapper:not(#_) {background: hsla(var(--hue3),1);
color: hsla(var(--hue9),1);
padding: var(--u_sp,1sp);
border-radius: 4px;}
.mnu25o_bu.wrapper.\@darkmode:not(#_) {background: hsla(var(--hue9),1);
color: hsla(var(--hue2),1);}

.mnu25o-bv:not(#_):not(#_):not(#_) {padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
text-align: center;
width: 100%;
display: flex;
flex-direction: column;}

.mnu25o-bx:not(#_):not(#_):not(#_) {margin: 0rem;}

.mnu25o-by:not(#_):not(#_):not(#_) {margin: 0rem;}

.mnu25o-bz:not(#_):not(#_):not(#_) {margin: 0rem;}

.mnu25o-cc:not(#_):not(#_):not(#_) {width: 200px;
height: 260px;}

app-dictionary-page { display:block; }

.mnu25o-cd {color: hsla(240.00,3.70%,15.88%,100%);
width: 600px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);}
.mnu25o-cd.\@darkmode {color: hsla(240.00,5.88%,90.00%,100%);}

.mnu25o_cd.row:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
cursor: pointer;
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: space-between;
order: 2;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.4);
padding-bottom: calc(var(--u_sp,1sp) * 0.4);
border-radius: 4px;}
.mnu25o_cd.row.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}
.mnu25o_cd.row:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue1),1);}
.mnu25o_cd.row:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue8),1);}
.mnu25o_cd.row.learned:not(#_) {background: hsla(var(--hue3),50%);}
.mnu25o_cd.row.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);}

.mnu25o_cd.mono:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);}

.mnu25o_cd.err:not(#_) {color: hsla(0.00,90.60%,70.78%,100%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

button-wrapper.mnu25o_cd:not(#_) {display: flex;
flex-direction: row;
align-items: center;}

.mnu25o_cd.play-audio:not(#_) {width: 2em;
cursor: pointer;}

svg.mnu25o_cd:not(#_) {width: 24px;
height: 24px;}
svg.mnu25o_cd :is(path,path-tag).mnu25o_cd:not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(243.40,75.36%,58.63%,100%);}


.mnu25o_cd.searchbar input.mnu25o_cd:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
align-items: center;
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
background: hsla(240.00,5.88%,90.00%,100%);
border-radius: 4px;
width: 100%;
max-width: 800px;
margin-left: auto;
margin-right: auto;
order: 1;}
.mnu25o_cd.searchbar input.mnu25o_cd.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o_cd.searchbar input.mnu25o_cd:is(:focus,.\@focus):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_cd.searchbar input.mnu25o_cd:is(:focus,.\@focus).\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.mnu25o-cf:not(#_):not(#_):not(#_) {order: 0;}

.mnu25o-ci:not(#_):not(#_):not(#_) {order: 0;}

app-dictionary { display:block; }

.mnu25o-cw {width: 100%;
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);}

user-page { display:block; }

.mnu25o-db:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);
background: hsla(355.71,100.00%,97.25%,100%);
border: 2px solid hsla(216.00,12.20%,83.92%,100%);
border-radius: 4px;
margin: var(--u_sp,1sp);}

cms-admin-page { display:block; }

.mnu25o-df:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
background: hsla(228.00,96.49%,88.82%,100%);}

cmslearn-module-list-mnu25o-dh { display:block; }

.mnu25o_di.meta:not(#_) {padding: var(--u_sp,1sp);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
border-style: solid;
border-width: 2px;
border-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}

.mnu25o_di.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}

.mnu25o-dj:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
margin: var(--u_sp,1sp);
padding: var(--u_sp,1sp);}

.mnu25o-dk:not(#_):not(#_):not(#_) {font-size: 20px;
line-height: 30px;
--u_lh: 30px;}

.mnu25o-dl:not(#_):not(#_):not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o-dm:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

.mnu25o-dn:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(220.00,13.04%,90.98%,100%);
border-radius: 3px;}

.mnu25o-dq:not(#_):not(#_) {height: 300px;
overflow: auto;}

cms-collection-card { display:block; }

.mnu25o-ds:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
background: hsla(228.00,96.49%,88.82%,100%);}

cmslesson-list-mnu25o-du { display:block; }

.mnu25o_dv.meta:not(#_) {padding: var(--u_sp,1sp);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
border-style: solid;
border-width: 2px;
border-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}

.mnu25o_dv.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}

.mnu25o-dw:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
margin: var(--u_sp,1sp);
padding: var(--u_sp,1sp);}

.mnu25o-dx:not(#_):not(#_):not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o-dy:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

.mnu25o-dz:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(220.00,13.04%,90.98%,100%);
border-radius: 3px;}

.mnu25o-ed:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

cmslesson-card-mnu25o-ee { display:block; }

.mnu25o-eg:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
background: hsla(228.00,96.49%,88.82%,100%);}

cmschapter-list-mnu25o-ei { display:block; }

.mnu25o_ej.meta:not(#_) {padding: var(--u_sp,1sp);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
border-style: solid;
border-width: 2px;
border-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}

.mnu25o_ej.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}

.mnu25o-ek:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
margin: var(--u_sp,1sp);
padding: var(--u_sp,1sp);}

.mnu25o-el:not(#_):not(#_):not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o-em:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

.mnu25o-en:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(220.00,13.04%,90.98%,100%);
border-radius: 3px;}

cmschapter-card-mnu25o-er { display:block; }

.mnu25o-es:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
padding: calc(var(--u_sp,1sp) * 2);}

.mnu25o-et:not(#_):not(#_):not(#_) {color: hsla(216.92,19.12%,26.67%,100%);
padding: calc(var(--u_sp,1sp) * 2);
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;}

.mnu25o-ey:not(#_):not(#_):not(#_) {display: block;
background: hsla(212.73,26.83%,83.92%,100%);
color: hsla(220.91,39.29%,10.98%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);}

info-page { display:block; }

.mnu25o-fa {padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
position: relative;}

.mnu25o_fa.bg:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
width: 100%;
height: 100vh;
display: block;
position: absolute;
z-index: 0;}

.mnu25o_fa.phonetics-layout:not(#_) {z-index: 10;
max-width: 800px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

phonetics-page { display:block; }

.mnu25o_ff.chart-wrapper:not(#_) {padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
align-items: end;}

.mnu25o_ff.row:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;}
.mnu25o_ff.row.one:not(#_) {width: 200px;}
.mnu25o_ff.row.two:not(#_) {width: 180px;}
.mnu25o_ff.row.three:not(#_) {width: 160px;}
.mnu25o_ff.row.four:not(#_) {width: 140px;}

span.mnu25o_ff:not(#_) {font-family: var(--font-monospace,monospace);
text-align: center;
cursor: pointer;
background: hsla(240.00,4.88%,83.92%,100%);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.6);
padding-bottom: calc(var(--u_sp,1sp) * 0.6);
border-radius: 4px;
width: 50px;}
span.mnu25o_ff.\@darkmode:not(#_) {background: hsla(240.00,3.83%,46.08%,100%);}
span.mnu25o_ff:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue2),1);}
span.mnu25o_ff:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue7),1);}

nav.mnu25o_ff:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
align-items: center;
place-content: center;
place-items: center;}
nav.mnu25o_ff button.mnu25o_ff:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
border-radius: 4px;
cursor: pointer;
text-align: center;
background: hsla(240.00,5.03%,64.90%,100%);}
nav.mnu25o_ff button.mnu25o_ff.\@darkmode:not(#_) {background: hsla(240.00,5.20%,33.92%,100%);}
nav.mnu25o_ff button.mnu25o_ff:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue4),1);}
nav.mnu25o_ff button.mnu25o_ff:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue6),1);}

phonetic-vowels-mnu25o-gl { display:block; }

.mnu25o-gm {width: 100%;
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-template-columns: var(--u_lessonbar,1lessonbar) var(--u_phrasebar,1phrasebar) auto;
padding: var(--u_sp,1sp);}

.mnu25o_gm.collection-collection:not(#_) {display: flex;
flex-direction: row;
width: 100%;}

.mnu25o_gm.close-leftbar:not(#_) {margin-left: calc(var(--u_lessonbar,1lessonbar) * -1);}

.mnu25o_gm.left-bar:not(#_) {flex-basis: var(--u_lessonbar,1lessonbar);
height: 100vh;}

.mnu25o-go:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;}

.mnu25o-gq:not(#_):not(#_):not(#_) {display: flex;}

collection-page-mnu25o-gx { display:block; }

.mnu25o-gy {background: hsla(0.00,0.00%,100.00%,100%);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
width: 100%;
cursor: pointer;}

.mnu25o_gy.pill:not(#_) {border-radius: 9999px;
flex-shrink: 1;
width: fit-content;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.2);
padding-bottom: calc(var(--u_sp,1sp) * 0.2);
background: hsla(var(--hue1),1);
color: hsla(var(--hue6),1);}
.mnu25o_gy.pill.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);
color: hsla(var(--hue4),1);}

.mnu25o_gy.price:not(#_) {font-weight: bold;
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
margin-top: calc(var(--u_sp,1sp) * 2);
margin-bottom: calc(var(--u_sp,1sp) * 2);}

.mnu25o_gy.num:not(#_) {font-size: 48px;
line-height: inherit;
--u_lh: inherit;
font-family: var(--copy);}

.mnu25o_gy.text:not(#_) {font-size: var(--u_xl,1xl);
line-height: inherit;
--u_lh: inherit;
font-family: var(--heading);
color: hsla(0.00,0.00%,63.92%,100%);}

.mnu25o_gy.button:not(#_) {border-radius: var(--u_rd,1rd);
text-align: center;
padding: var(--u_sp,1sp);
background: hsla(240.00,4.88%,83.92%,100%);
color: hsla(240.00,5.88%,10.00%,100%);
cursor: pointer;}
.mnu25o_gy.button.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(0.00,0.00%,98.04%,100%);}
.mnu25o_gy.button:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue5),1);}
.mnu25o_gy.button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue5),1);}

collection-card-mnu25o-hg { display:block; }

.mnu25o-hi:not(#_):not(#_):not(#_) {padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
font-size: 20px;
line-height: 30px;
--u_lh: 30px;}

user-page-owned-collections { display:block; }

.mnu25o-hl {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
padding: var(--u_sp,1sp);
border-radius: 4px;
background: hsla(240.00,5.88%,90.00%,100%);
color: hsla(240.00,3.70%,15.88%,100%);}
.mnu25o-hl.\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);
color: hsla(240.00,4.88%,83.92%,100%);}

.mnu25o_hl.card-wrapper:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: start;
flex-wrap: wrap;}
@media (max-width: 1023px){
.mnu25o_hl.card-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: start;}
}

user-page-locked-collections { display:block; }

.mnu25o-hq {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
@media (min-width: 1024px){
.mnu25o-hq {display: flex;
flex-direction: row;}
}

.mnu25o_hq.collection-grid:not(#_) {display: grid;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 1fr;}
@media (min-width: 768px){
.mnu25o_hq.collection-grid:not(#_) {grid-template-columns: minmax(var(--u_rightbar,1rightbar), calc(var(--u_rightbar,1rightbar) * 3)) var(--u_rightbar,1rightbar);}
}

.mnu25o_hq.image:not(#_) {border-radius: var(--u_rd,1rd);
aspect-ratio: 2 / 1;
width: 100%;}

.mnu25o_hq.left:not(#_),.mnu25o_hq.right:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_hq.phonetics:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
display: flex;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
flex-wrap: wrap;}

lesson-layout-mnu25o-in { display:block; }


nav.mnu25o_io:not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
button.mnu25o_io:not(#_) {list-style-type: none;
background: hsla(240.00,5.88%,90.00%,100%);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
padding-top: calc(var(--u_sp,1sp) * 0.5);
padding-bottom: calc(var(--u_sp,1sp) * 0.5);
border-radius: 3px;}
button.mnu25o_io:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue3),1);}

admin-tools-mnu25o-is { display:block; }

.mnu25o-it {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);
flex-flow: wrap;}

.mnu25o_it.word-wrapper:not(#_) {display: flex;
flex-direction: row;
flex-flow: wrap;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.mnu25o_it.word:not(#_) {font-family: var(--khmer);
font-size: 24px;
line-height: 2em;
--u_lh: 2em;
padding-top: .4em;
user-select: none;
-webkit-user-select: none;
cursor: pointer;
padding-left: calc(var(--u_sp,1sp) * 0.5);
padding-right: calc(var(--u_sp,1sp) * 0.5);
border-radius: 4px;
--e_rest: all var(--u_dur,1dur) !important;
background: hsla(var(--hue0),50%);}
.mnu25o_it.word.\@darkmode:not(#_) {background: hsla(var(--hue5),20%);}
.mnu25o_it.word:is(:hover,.\@hover):not(#_),.mnu25o_it.word.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue1),1) inset;}
.mnu25o_it.word:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_it.word.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}
.mnu25o_it.word.known:not(#_) {background: hsla(var(--hue1),1);}
.mnu25o_it.word.known.\@darkmode:not(#_) {background: hsla(var(--hue5),50%);}
.mnu25o_it.word.known:is(:hover,.\@hover):not(#_),.mnu25o_it.word.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),1) inset;}
.mnu25o_it.word.known:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_it.word.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}

.mnu25o_it.not_in_dict:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}
.mnu25o_it.not_in_dict.\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,20%);}
.mnu25o_it.not_in_dict:is(:hover,.\@hover):not(#_),.mnu25o_it.not_in_dict.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(355.56,100.00%,94.71%,100%) inset;}
.mnu25o_it.not_in_dict:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_it.not_in_dict.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}
.mnu25o_it.not_in_dict.known:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}
.mnu25o_it.not_in_dict.known.\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,50%);}
.mnu25o_it.not_in_dict.known:is(:hover,.\@hover):not(#_),.mnu25o_it.not_in_dict.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,100%) inset;}
.mnu25o_it.not_in_dict.known:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_it.not_in_dict.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}

word-nav-mnu25o-ja { display:block; }

.mnu25o-jb {padding: var(--u_sp,1sp);
display: grid;
grid-auto-flow: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: none;
min-height: calc(100vh - var(--u_topbar,1topbar));
max-width: 1000px;
margin-left: auto;
margin-right: auto;}
@media (min-width: 1024px){
.mnu25o-jb {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-template-columns: 2fr 1fr;}
}

.mnu25o_jb.buy-cards:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
@media (min-width: 1024px){
.mnu25o_jb.buy-cards:not(#_) {display: flex;
flex-direction: column;}
}

main.mnu25o_jb:not(#_) {flex-grow: 1;
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
width: 100%;}

.mnu25o_jb.image:not(#_) {background: hsla(var(--hue5),1);
padding: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);
aspect-ratio: 16 / 9;}

.mnu25o_jb.actions:not(#_) {display: grid;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: end;
grid-template-columns: 1fr 1fr;}
.mnu25o_jb.actions button.mnu25o_jb:not(#_) {padding-left: calc(var(--u_sp,1sp) * 1.5);
padding-right: calc(var(--u_sp,1sp) * 1.5);
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);
background: hsla(var(--hue3),1);
color: hsla(var(--hue9),1);
font-weight: bold;
font-size: 20px;
display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
.mnu25o_jb.actions button.mnu25o_jb.outline:not(#_) {background: none;}

.mnu25o-jf:not(#_):not(#_):not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
width: 100%;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 2fr 1fr;}

.mnu25o-ji:not(#_):not(#_):not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
width: 100%;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 1fr;}

learn-module-preview-mnu25o-jm { display:block; }

.mnu25o-jn {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
align-items: center;
padding: calc(var(--u_sp,1sp) * 0);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);}

.mnu25o_jn.user-image:not(#_) {width: calc(var(--u_sp,1sp) * 4);
height: calc(var(--u_sp,1sp) * 4);
border-radius: 9999px;
border: 3px solid hsla(240.00,4.76%,95.88%,20%);
box-shadow: var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4)));}

.mnu25o_jn.user-info:not(#_) {width: 100%;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
display: flex;
flex-direction: column;
font-family: 'Merriweather Sans', sans-serif;}

.mnu25o_jn.user-stats:not(#_) {display: flex;
flex-direction: row;
align-items: flex-end;}
.mnu25o_jn.user-stats *:first-child:not(#_):not(._0) {margin-right: auto;}

.mnu25o_jn.user-name:not(#_) {margin-right: auto;
font-weight: bold;
font-size: 20px;}

.mnu25o_jn.user-wordcount:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);
font-size: 10px;
line-height: 16px;
--u_lh: 16px;}
.mnu25o_jn.user-wordcount.\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}

.mnu25o_jn.user-progress:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
height: 10px;
width: 100%;
border-radius: 9999px;
position: relative;
z-index: 0;
overflow: hidden;}
.mnu25o_jn.user-progress.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}
.mnu25o_jn.user-progress .mnu25o_jn.progress-fg:not(#_) {background: hsla(var(--hue5),1);
height: 10px;
width: 100%;
border-radius: 9999px;
position: absolute;
top: 0rem;
right: 90%;
z-index: 10;
border-top-right-radius: 9999px;
border-bottom-right-radius: 9999px;}

.mnu25o_jn.user-settings:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}
.mnu25o_jn.user-settings.\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}
.mnu25o_jn.user-settings:is(:hover,.\@hover):not(#_) {color: hsla(var(--hue5),1);}

user-card-mnu25o-jy { display:block; }

.mnu25o-jz {display: flex;
flex-direction: column;
align-items: center;
border-radius: var(--u_rd,1rd);}
.mnu25o-jz.collection_active {display: flex;
flex-direction: column;}
.mnu25o-jz:is(:hover,.\@hover) {cursor: pointer;}
.mnu25o-jz:is(:hover,.\@hover) {background: hsla(0.00,0.00%,98.04%,100%);}
.mnu25o-jz:is(:hover,.\@hover).\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}
.mnu25o-jz.collection_active {background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o-jz.collection_active.\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);}

.mnu25o_jz.image:not(#_) {border-radius: 4px;
overflow: hidden;
background: hsla(var(--hue1),1);
border-style: solid;
border-width: 0;
outline: none;
width: 100%;
aspect-ratio: 16 / 9;}

.mnu25o_jz.card-info:not(#_) {width: 100%;
display: grid;
grid-template-rows: 1fr;}

.mnu25o_jz.card-title:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-top: calc(var(--u_sp,1sp) * 0.6);
padding-bottom: calc(var(--u_sp,1sp) * 0.4);}
.mnu25o_jz.card-title h2.mnu25o_jz:not(#_) {font-size: 24px;
line-height: 36px;
--u_lh: 36px;
font-weight: bold;}

.mnu25o_jz.progress-percent:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);
font-family: var(--font-monospace,monospace);}
.mnu25o_jz.progress-percent.\@darkmode:not(#_) {color: hsla(240.00,3.83%,46.08%,100%);}

.mnu25o_jz.collection-actions:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;}
.mnu25o_jz.collection-actions a.mnu25o_jz:not(#_) {color: hsla(0.00,0.00%,100.00%,30%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}
.mnu25o_jz.collection-actions a.mnu25o_jz:is(:hover,.\@hover):not(#_) {color: hsla(var(--hue5),1);}

.mnu25o_jz.icon-lock:not(#_) {display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: hsla(var(--hue1),1);
padding: var(--u_sp,1sp);
border-radius: 4px;
height: 100%;}
.mnu25o_jz.icon-lock.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}
.mnu25o_jz.icon-lock svg.mnu25o_jz:not(#_) {width: 20px;
height: 20px;
fill: hsla(var(--hue6),1);}
.mnu25o_jz.icon-lock svg.mnu25o_jz.\@darkmode:not(#_) {fill: hsla(var(--hue4),1);}
.mnu25o_jz.icon-lock .mnu25o_jz.collection-price:not(#_) {color: hsla(var(--hue6),1);
font-family: var(--font-monospace,monospace);}
.mnu25o_jz.icon-lock .mnu25o_jz.collection-price.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

.mnu25o-kh:not(#_):not(#_):not(#_) {--fg: hsla(var(--hue5),1);
--bg: hsla(240.00,4.88%,83.92%,100%);}
.mnu25o-kh.\@darkmode:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.26%,26.08%,100%);}

collection-card { display:block; }

.mnu25o-ki {background: hsla(0.00,0.00%,100.00%,100%);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
width: 100%;}

.mnu25o_ki.pill:not(#_) {border-radius: 9999px;
flex-shrink: 1;
width: fit-content;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.2);
padding-bottom: calc(var(--u_sp,1sp) * 0.2);
background: hsla(var(--hue1),1);
color: hsla(var(--hue6),1);}
.mnu25o_ki.pill.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);
color: hsla(var(--hue4),1);}

.mnu25o_ki.price:not(#_) {font-weight: bold;
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
margin-top: calc(var(--u_sp,1sp) * 2);
margin-bottom: calc(var(--u_sp,1sp) * 2);}

.mnu25o_ki.num:not(#_) {font-size: 48px;
line-height: inherit;
--u_lh: inherit;
font-family: var(--copy);}

.mnu25o_ki.text:not(#_) {font-size: var(--u_xl,1xl);
line-height: inherit;
--u_lh: inherit;
font-family: var(--heading);
color: hsla(0.00,0.00%,63.92%,100%);}

.mnu25o_ki.button:not(#_) {border-radius: var(--u_rd,1rd);
text-align: center;
padding: var(--u_sp,1sp);
background: hsla(240.00,4.88%,83.92%,100%);
color: hsla(240.00,5.88%,10.00%,100%);
cursor: pointer;}
.mnu25o_ki.button.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(0.00,0.00%,98.04%,100%);}
.mnu25o_ki.button:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue5),1);}
.mnu25o_ki.button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue5),1);}

sell-card-mnu25o-kr { display:block; }

.mnu25o-ks {display: flex;
flex-direction: row;
justify-content: space-between;
background: hsla(0.00,0.00%,98.04%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;
align-items: center;}
.mnu25o-ks.\@darkmode {background: hsla(240.00,5.88%,10.00%,100%);}

.mnu25o_ks.khmer:not(#_) {color: hsla(var(--hue5),1);}

.mnu25o_ks.switch-wrapper:not(#_) {height: 30px;
width: 110px;
border-radius: 9999px;
background: hsla(240.00,4.88%,83.92%,100%);
cursor: pointer;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}
.mnu25o_ks.switch-wrapper.\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}
.mnu25o_ks.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}
.mnu25o_ks.switch-wrapper.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}

.mnu25o_ks.switch:not(#_) {margin-left: 0px;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
height: 30px;
border-radius: 9999px;
border-style: solid;
border-width: 3px;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
display: flex;
align-items: center;
justify-content: center;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
border-color: hsla(240.00,4.88%,83.92%,100%);
background: hsla(0.00,0.00%,98.04%,100%);
color: hsla(240.00,5.03%,64.90%,100%);
width: 90px;}
.mnu25o_ks.switch.\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o_ks.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);
background: hsla(var(--hue2),1);
color: hsla(var(--hue8),1);
margin-left: 20px;}
.mnu25o_ks.switch.learned.\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);
background: hsla(var(--hue5),1);
color: hsla(var(--hue1),1);}

.mnu25o-kw:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.mnu25o-kx:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.mnu25o-kz:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.mnu25o-la:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.mnu25o-ld:not(#_):not(#_):not(#_) {font-size: 24px;
line-height: 36px;
--u_lh: 36px;}

word-bar-mnu25o-lg { display:block; }

.mnu25o-lh {display: flex;
flex-direction: column;
align-items: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
min-width: var(--u_rightbar,1rightbar);
width: 100%;}

.mnu25o_lh.khmer:not(#_) {line-height: 60px;
--u_lh: 60px;
margin-top: 20px;
font-family: var(--khmer);
color: hsla(var(--hue6),1);}

.mnu25o_lh.phonetic:not(#_) {font-family: var(--font-monospace,monospace);
font-size: 20px;
line-height: 30px;
--u_lh: 30px;
color: hsla(var(--hue5),1);}
.mnu25o_lh.phonetic.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

.mnu25o_lh.switch-wrapper:not(#_) {height: 30px;
width: 110px;
border-radius: 9999px;
background: hsla(240.00,4.88%,83.92%,100%);
cursor: pointer;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}
.mnu25o_lh.switch-wrapper.\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}
.mnu25o_lh.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}
.mnu25o_lh.switch-wrapper.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}

.mnu25o_lh.switch:not(#_) {margin-left: 0px;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
height: 30px;
border-radius: 9999px;
border-style: solid;
border-width: 3px;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
display: flex;
align-items: center;
justify-content: center;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
border-color: hsla(240.00,4.88%,83.92%,100%);
background: hsla(0.00,0.00%,98.04%,100%);
color: hsla(240.00,5.03%,64.90%,100%);
width: 90px;}
.mnu25o_lh.switch.\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o_lh.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);
background: hsla(var(--hue2),1);
color: hsla(var(--hue8),1);
margin-left: 20px;}
.mnu25o_lh.switch.learned.\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);
background: hsla(var(--hue5),1);
color: hsla(var(--hue1),1);}

.mnu25o_lh.resizeable:not(#_) {margin: 0rem;
padding: 0rem;
height: 40px;
width: 100px;
background: hsla(var(--hue4),1);
overflow: hidden;}

.mnu25o_lh.phonetic-wrapper:not(#_) {cursor: pointer;}

.mnu25o-lk:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.mnu25o-ll:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.mnu25o-ln:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.mnu25o-lo:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

word-card-mnu25o-lv { display:block; }

.mnu25o-ly:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;}

.mnu25o-lz:not(#_):not(#_):not(#_) {width: 2em;
cursor: pointer;}

.mnu25o-ma:not(#_):not(#_):not(#_) {width: 24px;
height: 24px;}

.mnu25o-mb:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(243.40,75.36%,58.63%,100%);}

.mnu25o-mc:not(#_):not(#_):not(#_) {width: 2em;
cursor: pointer;}

.mnu25o-md:not(#_):not(#_):not(#_) {width: 24px;
height: 24px;}

.mnu25o-me:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(228.00,96.49%,88.82%,100%);}

audio-player-mnu25o-mf { display:block; }

definition-card-mnu25o-mo { display:block; }

.mnu25o_mp.shortcut-wrapper:not(#_) {display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;}

.mnu25o_mp.key-wrapper:not(#_) {display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);
width: 100px;}
.mnu25o_mp.key-wrapper.horizontal:not(#_) {display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
align-content: stretch;}

.mnu25o_mp.key-text:not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(0.00,0.00%,32.16%,100%);
wrap: wrap;
flex-shrink: 1;
flex-grow: 0;}
.mnu25o_mp.key-text.\@darkmode:not(#_) {color: hsla(0.00,0.00%,63.92%,100%);}

.mnu25o_mp.key:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
border-radius: 4px;
font-size: .7em;
padding-top: calc(var(--u_sp,1sp) * 0.2);
padding-bottom: calc(var(--u_sp,1sp) * 0.2);
line-height: var(--u_sp,1sp);
--u_lh: var(--u_sp,1sp);
border: 1px solid hsla(0.00,0.00%,63.92%,100%);
color: hsla(0.00,0.00%,45.10%,100%);
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);}
.mnu25o_mp.key.\@darkmode:not(#_) {border: 1px solid hsla(234.45,89.47%,73.92%,100%);
color: hsla(234.45,89.47%,73.92%,100%);}

shortcut-card-mnu25o-ok { display:block; }

.mnu25o-ol {background: hsla(0.00,0.00%,100.00%,100%);
display: flex;
flex-direction: column;}

.mnu25o_ol.letter-row:not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;}

.mnu25o_ol.letter:not(#_) {font-family: var(--khmer);
font-size: 30px;
line-height: 46px;
--u_lh: 46px;}
.mnu25o_ol.letter.C1:not(#_),.mnu25o_ol.letter.L1:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}
.mnu25o_ol.letter.C2:not(#_),.mnu25o_ol.letter.L2:not(#_) {color: hsla(349.72,89.16%,60.20%,100%);}
.mnu25o_ol.letter.L2weak:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);}

.mnu25o_ol.vida:not(#_) {text-align: right;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
font-size: 16px;
line-height: 24px;
--u_lh: 24px;
color: hsla(240.00,5.03%,64.90%,100%);}
.mnu25o_ol.vida.\@darkmode:not(#_) {color: hsla(240.00,5.26%,26.08%,100%);}

spelling-card-mnu25o-ou { display:block; }

.mnu25o-ov {height: 100vh;
width: var(--u_lessonbar,1lessonbar);
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_ov.title-card:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
padding: var(--u_sp,1sp);}
.mnu25o_ov.title-card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}

.mnu25o_ov.active:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);}

.mnu25o_ov.icon-title:not(#_) {display: flex;
flex-direction: row;}

.mnu25o_ov.usage_word_count:not(#_) {font-size: 10px;
line-height: 16px;
--u_lh: 16px;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
color: hsla(240.00,5.20%,33.92%,100%);}

lesson-nav-mnu25o-oy { display:block; }

.mnu25o-oz {cursor: pointer;
border-radius: var(--u_rd,1rd);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
color: hsla(240.00,3.83%,46.08%,100%);
background: hsla(0.00,0.00%,100.00%,50%);}
.mnu25o-oz.\@darkmode {background: hsla(240.00,3.70%,15.88%,20%);}
.mnu25o-oz:is(:hover,.\@hover) {background: hsla(0.00,0.00%,100.00%,100%);}
.mnu25o-oz:is(:hover,.\@hover).\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}

:is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--bg: hsla(240.00,4.88%,83.92%,100%);
--fg: hsla(240.00,5.26%,26.08%,100%);}
:is(ProgressBar,ProgressBar-tag).mnu25o_oz:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
:is(ProgressBar,ProgressBar-tag).mnu25o_oz:is(:hover,.\@hover) :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--fg: hsla(234.45,89.47%,73.92%,100%);}
:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,50%);
color: hsla(240.00,4.88%,83.92%,100%);}
:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\@darkmode :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(240.00,5.20%,33.92%,100%);}
:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\@darkmode.hover:not(#_),:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\@darkmode:is(:hover,.\@hover):not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}
:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\@darkmode.hover :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_),:is(ProgressBar,ProgressBar-tag).mnu25o_oz.\@darkmode:is(:hover,.\@hover) :is(ProgressBar,ProgressBar-tag).mnu25o_oz:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(234.45,89.47%,73.92%,100%);}

.mnu25o-pa:not(#_):not(#_):not(#_) {width: 100%;}

.mnu25o-pb:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;
align-items: end;}

.mnu25o-pd:not(#_):not(#_):not(#_) {opacity: 80%;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
font-family: var(--font-monospace,monospace);}

lesson-nav-item-mnu25o-pf { display:block; }

.mnu25o-pg {color: hsla(240.00,5.88%,10.00%,100%);
width: var(--u_phrasebar,1phrasebar);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
display: flex;
flex-direction: column;
align-items: center;}

.mnu25o_pg.number-toggle:not(#_) {border-radius: 9999px;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
background: hsla(240.00,4.76%,95.88%,100%);
color: hsla(240.00,3.83%,46.08%,100%);
position: relative;
cursor: pointer;}
.mnu25o_pg.number-toggle.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);
color: hsla(240.00,5.03%,64.90%,100%);}
.mnu25o_pg.number-toggle:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.88%,83.92%,100%);}
.mnu25o_pg.number-toggle:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

phrase-nav-mnu25o-pk { display:block; }

.mnu25o-pl {padding: calc(var(--u_sp,1sp) * 2);}

.mnu25o-pl.hidden {display: none;}

.mnu25o_pl.bg:not(#_) {position: absolute;
top: 0rem;
right: 0rem;
bottom: 0rem;
left: 0rem;
z-index: 20;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
gap: calc(var(--u_sp,1sp) * 4);
--u_rg: calc(var(--u_sp,1sp) * 4);
--u_cg: calc(var(--u_sp,1sp) * 4);
background: hsla(240.00,4.76%,95.88%,100%);}
.mnu25o_pl.bg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.mnu25o_pl.card:not(#_) {max-width: 600px;
padding: calc(var(--u_sp,1sp) * 2.4);
background: hsla(0.00,0.00%,100.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: var(--hue4);
--bxs-sm-color: var(--hue7);
--bxs-xxl-color: var(--hue5);}
.mnu25o_pl.card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: 0,0%,0%;
--bxs-md-color: 0,0%,0%;
--bxs-xxl-color: 0,0%,0%;}

.mnu25o_pl.form:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 1.6);
--u_rg: calc(var(--u_sp,1sp) * 1.6);
--u_cg: calc(var(--u_sp,1sp) * 1.6);
width: 500px;}

.mnu25o_pl.field-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}
.mnu25o_pl.field-wrapper label.mnu25o_pl:not(#_) {user-select: none;
-webkit-user-select: none;}

.mnu25o_pl.field:not(#_) {width: 100%;
height: 40px;
border-radius: var(--u_rd,1rd);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_pl.field.\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);
background: hsla(240.00,3.70%,15.88%,100%);}

.mnu25o_pl.options:not(#_) {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
align-items: center;}

.mnu25o_pl.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}

.mnu25o_pl.login-button:not(#_) {width: 100%;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.5);
padding-bottom: calc(var(--u_sp,1sp) * 0.5);
text-align: center;
border-radius: var(--u_rd,1rd);
cursor: pointer;
user-select: none;
-webkit-user-select: none;
border: 2px solid hsla(240.00,4.88%,83.92%,100%);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;}
.mnu25o_pl.login-button .mnu25o_pl.button-logo:not(#_) {width: 30px;}
.mnu25o_pl.login-button:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.mnu25o_pl.login-button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}
.mnu25o_pl.login-button:is(:active,.\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_pl.login-button:is(:active,.\@active).\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}

.mnu25o-pn:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o-pz:not(#_):not(#_):not(#_) {margin-left: auto;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.mnu25o-qb:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);
margin-bottom: calc(var(--u_sp,1sp) * 0.4);}

login-page { display:block; }

.mnu25o_qd.login-button-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_qd.login-button:not(#_) {width: 100%;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.5);
padding-bottom: calc(var(--u_sp,1sp) * 0.5);
text-align: center;
border-radius: var(--u_rd,1rd);
cursor: pointer;
user-select: none;
-webkit-user-select: none;
border: 2px solid hsla(240.00,4.88%,83.92%,100%);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;}
.mnu25o_qd.login-button .mnu25o_qd.button-logo:not(#_) {width: 30px;}
.mnu25o_qd.login-button:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.mnu25o_qd.login-button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}
.mnu25o_qd.login-button:is(:active,.\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_qd.login-button:is(:active,.\@active).\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}

third-party-logins-mnu25o-qp { display:block; }

.mnu25o-qq {--googleyellow: #FBBC05;}

.mnu25o-qq {--googlered: #EB4335;
--googlegreen: #34A853;
--googleblue: #4285F4;}

.mnu25o-qu:not(#_):not(#_):not(#_) {fill: var(--googleyellow);}

.mnu25o-qv:not(#_):not(#_):not(#_) {fill: var(--googlered);}

.mnu25o-qw:not(#_):not(#_):not(#_) {fill: var(--googlegreen);}

.mnu25o-qx:not(#_):not(#_):not(#_) {fill: var(--googleblue);}

google-icon-mnu25o-qy { display:block; }

apple-icon-mnu25o-rc { display:block; }

facebook-icon-mnu25o-rg { display:block; }

login-illustration-mnu25o-ug { display:block; }

.mnu25o-uh {padding: calc(var(--u_sp,1sp) * 2);}

.mnu25o-uh.hidden {display: none;}

.mnu25o_uh.bg:not(#_) {position: absolute;
top: 0rem;
right: 0rem;
bottom: 0rem;
left: 0rem;
z-index: 20;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
gap: calc(var(--u_sp,1sp) * 4);
--u_rg: calc(var(--u_sp,1sp) * 4);
--u_cg: calc(var(--u_sp,1sp) * 4);
background: hsla(240.00,4.76%,95.88%,100%);}
.mnu25o_uh.bg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.mnu25o_uh.card:not(#_) {width: 600px;
padding: calc(var(--u_sp,1sp) * 2.4);
background: hsla(0.00,0.00%,100.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: var(--hue4);
--bxs-sm-color: var(--hue7);
--bxs-xxl-color: var(--hue5);}
.mnu25o_uh.card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: 0,0%,0%;
--bxs-md-color: 0,0%,0%;
--bxs-xxl-color: 0,0%,0%;}

.mnu25o_uh.form:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 1.6);
--u_rg: calc(var(--u_sp,1sp) * 1.6);
--u_cg: calc(var(--u_sp,1sp) * 1.6);}

.mnu25o_uh.field-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}
.mnu25o_uh.field-wrapper label.mnu25o_uh:not(#_) {user-select: none;
-webkit-user-select: none;}

.mnu25o_uh.field:not(#_) {width: 100%;
height: 40px;
border-radius: var(--u_rd,1rd);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_uh.field.\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);
background: hsla(240.00,3.70%,15.88%,100%);}

.mnu25o_uh.options:not(#_) {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
align-items: center;}

.mnu25o_uh.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}

.mnu25o_uh.login-button:not(#_) {width: 100%;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.5);
padding-bottom: calc(var(--u_sp,1sp) * 0.5);
text-align: center;
border-radius: var(--u_rd,1rd);
cursor: pointer;
user-select: none;
-webkit-user-select: none;
border: 2px solid hsla(240.00,4.88%,83.92%,100%);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;}
.mnu25o_uh.login-button .mnu25o_uh.button-logo:not(#_) {width: 30px;}
.mnu25o_uh.login-button:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.mnu25o_uh.login-button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}
.mnu25o_uh.login-button:is(:active,.\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_uh.login-button:is(:active,.\@active).\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}

.mnu25o-uj:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o-vc:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);
margin-bottom: calc(var(--u_sp,1sp) * 0.4);}

create-account-page { display:block; }

.mnu25o-ve {width: 100%;
--bg: hsla(240.00,5.88%,90.00%,100%);
--fg: hsla(var(--hue4),1);}
.mnu25o-ve.\@darkmode {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(var(--hue6),1);}

.mnu25o_ve.progress-bg:not(#_) {height: 10px;
width: 100%;
border-radius: 9999px;
position: relative;
z-index: 0;
overflow: hidden;
display: flex;
flex-direction: row;
background: var(--bg);}

.mnu25o_ve.progress-fg:not(#_) {height: 10px;
z-index: 10;
flex-basis: 0%;
--e_rest: all var(--u_dur,1dur) ease-in-out !important;
background: var(--fg);}

.mnu25o-vh:not(#_):not(#_):not(#_) {flex-basis: var(--mnu25o_vi);}

progress-bar-mnu25o-vj { display:block; }

.mnu25o-vk {display: inline;
margin-bottom: 4px;}

svg.mnu25o_vk:not(#_) {width: 20px;
height: 20px;
display: inline-block;
stroke: hsla(var(--hue4),1);}

icon-tag { display:block; }

i-gift { display:block; }

i-market { display:block; }

i-compass { display:block; }

i-people { display:block; }

.mnu25o-wq {text-align: center;
--progress-color: hsla(var(--hue2),1);
--progress-bg: hsla(240.00,4.76%,95.88%,100%);
--text-color: hsla(240.00,3.83%,46.08%,100%);
--center-color: hsla(240.00,4.76%,95.88%,100%);
--stroke-percent: 70%;
position: absolute;}
.mnu25o-wq.\@darkmode {--progress-color: hsla(var(--hue7),1);
--progress-bg: hsla(240.00,3.70%,15.88%,100%);
--text-color: hsla(240.00,5.03%,64.90%,100%);
--center-color: hsla(240.00,3.70%,15.88%,100%);}
.mnu25o-wq.active {--progress-color: hsla(var(--hue4),1);
--progress-bg: hsla(var(--hue2),1);
--center-color: hsla(var(--hue2),1);}
.mnu25o-wq.active.\@darkmode {--progress-color: hsla(var(--hue6),1);
--progress-bg: hsla(var(--hue7),1);
--center-color: hsla(var(--hue8),1);}
.mnu25o-wq:is(:hover,.\@hover) {--progress-bg: hsla(240.00,5.88%,90.00%,100%);
--progress-color: hsla(var(--hue3),1);
--center-color: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o-wq:is(:hover,.\@hover).\@darkmode {--progress-bg: hsla(240.00,5.26%,26.08%,100%);
--progress-color: hsla(var(--hue5),1);
--center-color: hsla(240.00,5.26%,26.08%,100%);}

.mnu25o-wq.disabled {opacity: 30%;}

.mnu25o_wq.circular:not(#_) {width: var(--size);
height: var(--size);
background: none;
position: relative;}
.mnu25o_wq.circular .mnu25o_wq.inner:not(#_) {background: var(--center-color);
position: absolute;
z-index: 6;
top: 50%;
left: 50%;
width: var(--stroke-percent);
height: var(--stroke-percent);
--t_y: -50% !important;
--t_x: -50% !important;
border-radius: 9999px;
place-content: center;
place-items: center;}
.mnu25o_wq.circular .mnu25o_wq.title:not(#_) {z-index: 10;
font-size: 18px;
color: var(--text-color);
margin-top: 7%;}

.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.bar:not(#_) {position: absolute;
width: 100%;
height: 100%;
background: var(--progress-bg);
border-radius: 100%;
--e_rest: rotation var(--u_dur,1dur) ease-in-out !important;}
.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.bar .mnu25o_wq.progress:not(#_) {background: var(--progress-color);
position: absolute;
width: 100%;
height: 100%;
border-radius: 100%;}
.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.left:not(#_) {--t_rotate: -180deg !important;}
.mnu25o_wq.circular .mnu25o_wq.circle .mnu25o_wq.right:not(#_) {z-index: 3;}

.mnu25o-ws:not(#_):not(#_):not(#_) {width: var(--mnu25o_wt);
height: var(--mnu25o_wt);}

.mnu25o-wu:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;}

.mnu25o-wv:not(#_):not(#_):not(#_) {font-size: 14px;
line-height: 100%;
--u_lh: 100%;}

.mnu25o_wx.bar:not(#_) {clip: rect(0px, var(--mnu25o_wy), var(--mnu25o_wz), var(--mnu25o_xa));
--e_rest: clip-path 1s !important;}

.mnu25o_wx.progress:not(#_) {clip: rect(0px, var(--mnu25o_xb), var(--mnu25o_xc), 0px);
--e_rest: clip-path 1s !important;}

.mnu25o-xe:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_xf) !important;}

.mnu25o-xh:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_xi) !important;}

elem-progress-ring-mnu25o-xj { display:block; }
*/
