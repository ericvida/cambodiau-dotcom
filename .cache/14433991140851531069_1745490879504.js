import {register$, __init__$, iterable$, is$} from 'imba/runtime';
import {use_events as imba_use_events, use_events_hotkey as imba_use_events_hotkey, use_dom_bind as imba_use_dom_bind, use_events_mouse as imba_use_events_mouse, styles as imba_styles, locals as imba_locals, Component as imba_Component, defineTag as imba_defineTag, router as imba_router, createComponent as imba_createComponent, use_dom_teleport as imba_use_dom_teleport, use_slots as imba_use_slots, createElement as imba_createElement, use_router as imba_use_router, commit as imba_commit, createKeyedList as imba_createKeyedList, createIndexedList as imba_createIndexedList, renderContext as imba_renderContext, createLiveFragment as imba_createLiveFragment, createSVGElement as imba_createSVGElement, createDynamic as imba_createDynamic, use_styles as imba_use_styles, getSuperTagType as imba_getSuperTagType} from 'imba';
(imba_use_events(),imba_use_events_hotkey(),imba_use_dom_bind(),imba_use_events_mouse(),imba_use_dom_teleport(),imba_use_slots(),imba_use_router(),imba_use_styles());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $getSlot$ = Symbol.for('#getSlot'), $afterReconcile$ = Symbol.for('#afterReconcile'), $placeChild$ = Symbol.for('#placeChild'), $getRenderContext$ = Symbol.for('#getRenderContext'), $$up$ = Symbol.for('##up'), $interval$ = Symbol.for('#interval'), $context$ = Symbol.for('#context'), $isRichElement$ = Symbol.for('#isRichElement'), $insertInto$ = Symbol.for('#insertInto'), $replaceWith$ = Symbol.for('#replaceWith');
var $49 = Symbol(), $52 = Symbol(), $56 = Symbol(), $65 = Symbol(), $69 = Symbol(), $73 = Symbol(), $77 = Symbol(), $81 = Symbol(), $85 = Symbol(), $89 = Symbol(), $93 = Symbol(), $97 = Symbol(), $105 = Symbol(), $112 = Symbol(), $120 = Symbol(), $122 = Symbol(), $126 = Symbol(), $131 = Symbol(), $136 = Symbol(), $141 = Symbol(), $148 = Symbol(), $151 = Symbol(), $155 = Symbol(), $157 = Symbol(), $158 = Symbol(), $159 = Symbol(), $160 = Symbol(), $161 = Symbol(), $162 = Symbol(), $164 = Symbol(), $166 = Symbol(), $167 = Symbol(), $168 = Symbol(), $169 = Symbol(), $170 = Symbol(), $171 = Symbol(), $173 = Symbol(), $175 = Symbol(), $176 = Symbol(), $177 = Symbol(), $178 = Symbol(), $179 = Symbol(), $180 = Symbol(), $183 = Symbol(), $187 = Symbol(), $193 = Symbol(), $198 = Symbol(), $201 = Symbol(), $206 = Symbol(), $208 = Symbol(), $210 = Symbol(), $218 = Symbol(), $221 = Symbol(), $222 = Symbol(), $224 = Symbol(), $227 = Symbol(), $230 = Symbol(), $233 = Symbol(), $235 = Symbol(), $237 = Symbol(), $241 = Symbol(), $242 = Symbol(), $243 = Symbol(), $246 = Symbol(), $250 = Symbol(), $251 = Symbol(), $252 = Symbol(), $256 = Symbol(), $257 = Symbol(), $258 = Symbol(), $261 = Symbol(), $263 = Symbol(), $267 = Symbol(), $268 = Symbol(), $269 = Symbol(), $272 = Symbol(), $277 = Symbol(), $281 = Symbol(), $287 = Symbol(), $291 = Symbol(), $295 = Symbol(), $301 = Symbol(), $303 = Symbol(), $312 = Symbol(), $317 = Symbol(), $320 = Symbol(), $322 = Symbol(), $323 = Symbol(), $326 = Symbol(), $330 = Symbol(), $335 = Symbol(), $338 = Symbol(), $340 = Symbol(), $341 = Symbol(), $342 = Symbol(), $343 = Symbol(), $344 = Symbol(), $348 = Symbol(), $350 = Symbol(), $359 = Symbol(), $364 = Symbol(), $367 = Symbol(), $371 = Symbol(), $376 = Symbol(), $379 = Symbol(), $381 = Symbol(), $382 = Symbol(), $383 = Symbol(), $384 = Symbol(), $385 = Symbol(), $387 = Symbol(), $393 = Symbol(), $395 = Symbol(), $404 = Symbol(), $409 = Symbol(), $412 = Symbol(), $416 = Symbol(), $421 = Symbol(), $424 = Symbol(), $426 = Symbol(), $427 = Symbol(), $428 = Symbol(), $429 = Symbol(), $430 = Symbol(), $434 = Symbol(), $446 = Symbol(), $450 = Symbol(), $454 = Symbol(), $460 = Symbol(), $463 = Symbol(), $467 = Symbol(), $472 = Symbol(), $474 = Symbol(), $475 = Symbol(), $478 = Symbol(), $480 = Symbol(), $481 = Symbol(), $484 = Symbol(), $486 = Symbol(), $487 = Symbol(), $491 = Symbol(), $493 = Symbol(), $494 = Symbol(), $497 = Symbol(), $499 = Symbol(), $500 = Symbol(), $503 = Symbol(), $505 = Symbol(), $506 = Symbol(), $510 = Symbol(), $512 = Symbol(), $513 = Symbol(), $516 = Symbol(), $518 = Symbol(), $519 = Symbol(), $522 = Symbol(), $524 = Symbol(), $525 = Symbol(), $529 = Symbol(), $531 = Symbol(), $532 = Symbol(), $536 = Symbol(), $538 = Symbol(), $539 = Symbol(), $543 = Symbol(), $545 = Symbol(), $548 = Symbol(), $551 = Symbol(), $554 = Symbol(), $557 = Symbol(), $560 = Symbol(), $565 = Symbol(), $569 = Symbol(), $570 = Symbol(), $580 = Symbol(), $582 = Symbol(), $583 = Symbol(), $588 = Symbol(), $592 = Symbol(), $595 = Symbol(), $605 = Symbol(), $607 = Symbol(), $608 = Symbol(), $613 = Symbol(), $618 = Symbol(), $621 = Symbol(), $624 = Symbol(), $627 = Symbol(), $629 = Symbol(), $630 = Symbol(), $634 = Symbol(), $636 = Symbol(), $643 = Symbol(), $647 = Symbol(), $648 = Symbol(), $651 = Symbol(), $656 = Symbol(), $660 = Symbol(), $661 = Symbol(), $662 = Symbol(), $664 = Symbol(), $671 = Symbol(), $675 = Symbol(), $676 = Symbol(), $679 = Symbol(), $684 = Symbol(), $688 = Symbol(), $689 = Symbol(), $690 = Symbol(), $692 = Symbol(), $696 = Symbol(), $698 = Symbol(), $699 = Symbol(), $701 = Symbol(), $705 = Symbol(), $708 = Symbol(), $711 = Symbol(), $714 = Symbol(), $715 = Symbol(), $716 = Symbol(), $718 = Symbol(), $724 = Symbol(), $726 = Symbol(), $727 = Symbol(), $728 = Symbol(), $734 = Symbol(), $736 = Symbol(), $738 = Symbol(), $739 = Symbol(), $741 = Symbol(), $745 = Symbol(), $749 = Symbol(), $750 = Symbol(), $758 = Symbol(), $759 = Symbol(), $761 = Symbol(), $762 = Symbol(), $763 = Symbol(), $764 = Symbol(), $765 = Symbol(), $766 = Symbol(), $768 = Symbol(), $769 = Symbol(), $770 = Symbol(), $775 = Symbol(), $781 = Symbol(), $786 = Symbol(), $790 = Symbol(), $791 = Symbol(), $800 = Symbol(), $802 = Symbol(), $803 = Symbol(), $808 = Symbol(), $810 = Symbol(), $813 = Symbol(), $820 = Symbol(), $823 = Symbol(), $824 = Symbol(), $826 = Symbol(), $829 = Symbol(), $836 = Symbol(), $837 = Symbol(), $838 = Symbol(), $842 = Symbol(), $845 = Symbol(), $847 = Symbol(), $850 = Symbol(), $852 = Symbol(), $856 = Symbol(), $858 = Symbol(), $860 = Symbol(), $862 = Symbol(), $863 = Symbol(), $865 = Symbol(), $868 = Symbol(), $871 = Symbol(), $873 = Symbol(), $874 = Symbol(), $875 = Symbol(), $879 = Symbol(), $881 = Symbol(), $883 = Symbol(), $884 = Symbol(), $887 = Symbol(), $889 = Symbol(), $890 = Symbol(), $893 = Symbol(), $894 = Symbol(), $904 = Symbol(), $905 = Symbol(), $911 = Symbol(), $913 = Symbol(), $916 = Symbol(), $918 = Symbol(), $919 = Symbol(), $921 = Symbol(), $924 = Symbol(), $926 = Symbol(), $931 = Symbol(), $934 = Symbol(), $938 = Symbol(), $939 = Symbol(), $940 = Symbol(), $943 = Symbol(), $946 = Symbol(), $950 = Symbol(), $951 = Symbol(), $952 = Symbol(), $956 = Symbol(), $957 = Symbol(), $958 = Symbol(), $961 = Symbol(), $962 = Symbol(), $964 = Symbol(), $967 = Symbol(), $968 = Symbol(), $971 = Symbol(), $974 = Symbol(), $975 = Symbol(), $980 = Symbol(), $982 = Symbol(), $985 = Symbol(), $987 = Symbol(), $988 = Symbol(), $990 = Symbol(), $995 = Symbol(), $998 = Symbol(), $1002 = Symbol(), $1003 = Symbol(), $1004 = Symbol(), $1007 = Symbol(), $1010 = Symbol(), $1014 = Symbol(), $1015 = Symbol(), $1016 = Symbol(), $1020 = Symbol(), $1021 = Symbol(), $1022 = Symbol(), $1025 = Symbol(), $1026 = Symbol(), $1028 = Symbol(), $1031 = Symbol(), $1032 = Symbol(), $1035 = Symbol(), $1038 = Symbol(), $1039 = Symbol(), $1042 = Symbol(), $1045 = Symbol(), $1049 = Symbol(), $1051 = Symbol(), $1054 = Symbol(), $1057 = Symbol(), $1059 = Symbol(), $1064 = Symbol(), $1069 = Symbol(), $1073 = Symbol(), $1076 = Symbol(), $1079 = Symbol(), $1082 = Symbol(), $1092 = Symbol(), $1094 = Symbol(), $1095 = Symbol(), $1096 = Symbol(), $1098 = Symbol(), $1100 = Symbol(), $1101 = Symbol(), $1102 = Symbol(), $1104 = Symbol(), $1107 = Symbol(), $1116 = Symbol(), $1117 = Symbol(), $1119 = Symbol(), $1120 = Symbol(), $1124 = Symbol(), $1173 = Symbol(), $1175 = Symbol(), $1185 = Symbol(), $1188 = Symbol(), $1189 = Symbol(), $1191 = Symbol(), $1192 = Symbol(), $1194 = Symbol(), $1196 = Symbol(), $1198 = Symbol(), $1200 = Symbol(), $1204 = Symbol(), $1205 = Symbol(), $1206 = Symbol(), $1210 = Symbol(), $1211 = Symbol(), $1212 = Symbol(), $1217 = Symbol(), $1220 = Symbol(), $1225 = Symbol(), $1226 = Symbol(), $1230 = Symbol(), $1232 = Symbol(), $1233 = Symbol(), $1235 = Symbol(), $1237 = Symbol(), $1238 = Symbol(), $1239 = Symbol(), $1240 = Symbol(), $1242 = Symbol(), $1245 = Symbol(), $1247 = Symbol(), $1257 = Symbol(), $1258 = Symbol(), $1260 = Symbol(), $1261 = Symbol(), $1262 = Symbol(), $1267 = Symbol(), $1268 = Symbol(), $1271 = Symbol(), $1273 = Symbol(), $1274 = Symbol(), $1276 = Symbol(), $1278 = Symbol(), $1279 = Symbol(), $1281 = Symbol(), $1284 = Symbol(), $1289 = Symbol(), $1290 = Symbol(), $1299 = Symbol(), $1302 = Symbol(), $1306 = Symbol(), $1307 = Symbol(), $1309 = Symbol(), $1311 = Symbol(), $1316 = Symbol(), $1334 = Symbol(), $1340 = Symbol(), $1344 = Symbol(), $1350 = Symbol(), $1356 = Symbol(), $1363 = Symbol(), $1373 = Symbol(), $1379 = Symbol(), $1385 = Symbol(), $1465 = Symbol(), $1488 = Symbol(), $1494 = Symbol(), $1497 = Symbol(), $1500 = Symbol(), $1505 = Symbol(), $1516 = Symbol(), $1528 = Symbol(), $1541 = Symbol(), $1552 = Symbol(), $1554 = Symbol(), $1557 = Symbol(), $1561 = Symbol(), $1565 = Symbol(), $1567 = Symbol(), $1568 = Symbol(), $1570 = Symbol(), $1571 = Symbol(), $1572 = Symbol(), $1573 = Symbol(), $1576 = Symbol(), $1579 = Symbol(), $1582 = Symbol(), $1585 = Symbol();

/*body*/
// import {learning_data_out} from './data/learning_data_out'

import fitty from 'fitty';// for fitting text in WordCard
import Fuzzy from './fuzzy.imba';// for fitting text in WordCard
import {audio} from './audio.imba';
import {images} from './images.imba';
import {clusters} from './data/clusters.imba';
import {dictionary} from './data/dictionary.imba';
import {collections_data} from './data/collections_data.imba';
// import {state.learning_data} from './data'
import './elements/index.imba';
import './components/index.imba';
import './icons/index.imba';
import './styles.imba';
// sealang-link: http://sealang.net/api/api.pl?query=ក&service=dictionary
const fuzzy = new Fuzzy;
const STATEKEY = 'app-state-20221119';

function logTime(fn){
	let startTime = performance.now();
	let res = fn;
	let endTime = performance.now();
	// LOG "function took {startTime - endTime} ms"
	return res;
};

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
		// LOG "cleared local storage"
	}
	
	toggleLearned(word){
		var $1;
		if (state.user_learned.hasOwnProperty(word)) {
			((($1 = state.user_learned[word]),delete state.user_learned[word], $1));
		} else {
			state.user_learned[word] = true;
		};
		// LOG 'toggled', word, state.user_learned.hasOwnProperty(word)
		this.calcAllProgress();
		return this.save();
	}
	
	// calculates progress from words already learned by the user
	calcAllProgress(){
		state.learning_data.user_progress = this.calcUserProgress(collections_data);
		state.learning_data.user_progress_learned_usage = this.calcUserLearnedUsage(collections_data);
		state.learning_data.collection_progress = this.calcCollectionProgress(collections_data);
		state.learning_data.collection_learned_usage = this.calcCollectionLearnedUsage(collections_data);
		state.learning_data.lesson_progress = this.calcLessonProgress(collections_data);
		state.learning_data.lesson_learned_usage = this.calcLessonLearnedUsage(collections_data);
		state.learning_data.phrase_progress = this.calcPhraseProgress(collections_data);
		return state.learning_data.phrase_learned_usage = this.calcPhraseLearnedUsage(collections_data);
	}
	
	calcUserProgress(user_data){
		return this.calcUsageProgressOfObject(user_data);
	}
	
	calcCollectionProgress(user){
		let collection_progress = [];
		for (let $2 = 0, $3 = iterable$(user.collections), $4 = $3.length; $2 < $4; $2++) {
			let collection = $3[$2];
			collection_progress.push(this.calcUsageProgressOfObject(collection));
		};
		
		return collection_progress;
	}
	
	calcLessonProgress(user){
		let lesson_progress = [];
		for (let $5 = 0, $6 = iterable$(user.collections), $10 = $6.length; $5 < $10; $5++) {
			let collection = $6[$5];
			let lesson_progress_two = [];
			for (let $7 = 0, $8 = iterable$(collection.lessons), $9 = $8.length; $7 < $9; $7++) {
				let lesson = $8[$7];
				lesson_progress_two.push(this.calcUsageProgressOfObject(lesson));
			};
			lesson_progress.push(lesson_progress_two);
		};
		return lesson_progress;
	}
	
	calcPhraseProgress(user){
		let phrase_progress = [];
		for (let $11 = 0, $12 = iterable$(user.collections), $19 = $12.length; $11 < $19; $11++) {
			let collection = $12[$11];
			let phrase_progress_two = [];
			for (let $13 = 0, $14 = iterable$(collection.lessons), $18 = $14.length; $13 < $18; $13++) {
				let lesson = $14[$13];
				let phrase_progress_three = [];
				for (let $15 = 0, $16 = iterable$(lesson.phrases), $17 = $16.length; $15 < $17; $15++) {
					let phrase = $16[$15];
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
		for (let $22 = state.user_learned, $20 = 0, $21 = Object.keys($22), $23 = $21.length, word, is_learned; $20 < $23; $20++){
			// if word is not used in object
			word = $21[$20];is_learned = $22[word];if (object.word_usage_count[word]) {
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
		for (let $24 = 0, $25 = iterable$(user.collections), $26 = $25.length; $24 < $26; $24++) {
			let collection = $25[$24];
			collection_progress.push(this.calcLearnedUsageOfObject(collection));
		};
		return collection_progress;
	}
	
	calcLessonLearnedUsage(user){
		let lesson_progress = [];
		for (let $27 = 0, $28 = iterable$(user.collections), $32 = $28.length; $27 < $32; $27++) {
			let collection = $28[$27];
			let lesson_progress_two = [];
			for (let $29 = 0, $30 = iterable$(collection.lessons), $31 = $30.length; $29 < $31; $29++) {
				let lesson = $30[$29];
				lesson_progress_two.push(this.calcLearnedUsageOfObject(lesson));
			};
			lesson_progress.push(lesson_progress_two);
		};
		return lesson_progress;
	}
	
	calcPhraseLearnedUsage(user){
		let phrase_progress = [];
		for (let $33 = 0, $34 = iterable$(user.collections), $41 = $34.length; $33 < $41; $33++) {
			let collection = $34[$33];
			let phrase_progress_two = [];
			for (let $35 = 0, $36 = iterable$(collection.lessons), $40 = $36.length; $35 < $40; $35++) {
				let lesson = $36[$35];
				let phrase_progress_three = [];
				for (let $37 = 0, $38 = iterable$(lesson.phrases), $39 = $38.length; $37 < $39; $37++) {
					let phrase = $38[$37];
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
		// LOG input, state.user_learned
		let learned_words_usage = 0;
		for (let $44 = state.user_learned, $42 = 0, $43 = Object.keys($44), $45 = $43.length, word, is_learned; $42 < $45; $42++){
			// If words_used containes word
			word = $43[$42];is_learned = $44[word];if (words_used[word] && is_learned) {
				learned_words_usage += words_used[word];
			};
		};
		learned_words_usage = Math.round(learned_words_usage);
		return learned_words_usage;
	}
	
	// API[epic=API, seq=7] SAVE
	save(){
		return imba_locals.state = state;
		// store(STATEKEY, state)
		// LOG 'saved', state
	}
	
	// API[epic=API, seq=7] LOAD
	load(){
		if (imba_locals.state) { return state = imba_locals.state };
		// LOG 'loaded', state
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
		console.log('toggled darkmode',state.dark);
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
			// LOG 'logged out'
		};
		return this.save();
	}
	
	search(needle,haystack){
		// LOG needle, haystack
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
					// LOG 'matched?'
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
// set server address here. It should NOT end with a /
let serverAddress = 'http://api.cambodiau.com';
// CLASS[epic=CLASS, seq=12] Remote API
let c$1 = Symbol();
class RemoteAPI {
	// API[epic=Remote, seq=13] callAPI
		// wrapper to call API
	async callAPI(method,endpoint,data,token){
		// let url = serverAddress + endpoint
		let body = data ? JSON.stringify(data) : null;
		let headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		};
		
		if (token) {
			headers.Authorization = 'Bearer ' + token;
		};
		
		let res = await this.fetch(this.url,{
			method: method,
			headers: headers,
			body: body
		});
		
		return await res.json();
	}
	
	// API[epic=Remote, seq=14] register API call
	async register(name,email,username,password){
		let body = {
			name: name,
			email: email,
			username: username,
			password: password
		};
		let res = await this.callAPI('POST','/api/register',body);
		
		if (res.status === 201) {
			return true;
		} else {
			return LOG(res);
		};
	}
	
	// API[epic=Remote, seq=15] login API call
	async login(email,password){
		let body = {
			email: email,
			password: password
		};
		
		let res = await this.callAPI('POST','/api/login',body);
		
		if (res.status = 200) {
			return res.token;
		} else {
			return LOG(res);
		};
	}
	
	// API[epic=Remote, seq=16] logout API call
	async logout(token){
		return await this.callAPI('GET','/api/logout',null,token);
	}
	
	// API[epic=Remote, seq=17] get user API call
	async getUser(token){
		let res = await this.callAPI('GET','/api/user',null,token);
		
		if (res.status == 200) {
			return res.user;
		} else {
			return LOG(res);
		};
	}
	
	
	// API[epic=Remote, seq=18] sample use
	doStuff(){
		let name = 'qq';
		let email = 'aa@bb.ccd';
		let username = 'sdflask';
		let password = 'dlfkasdlkfjsflkj##lkj';
		
		this.register(name,email,username,password);
		
		// save token somewhere on local storage because it'll be needed for future calls
		let token = this.login(email,password);
		
		// get user data
		let user = this.getUser(token);
		LOG(user);
		
		// on logout clear token from local storage
		return this.logout(token);
	}
	static { register$(this,c$1,'RemoteAPI',0) }
};

let remote = new RemoteAPI;

// LAYOUT[epic=LAYOUT, seq=19] App
let c$2 = Symbol();
class AppDashboardComponent extends imba_Component {
	
	
	saveRouteToState(){
		let route_array = this.router.pathname.replace('/','').split('/');
		state.collection = route_array[1];
		state.lesson = route_array[2];
		state.phrase = route_array[3];
		state.word = route_array[4];
		return api.save();
	}
	
	build(){
		var self = this;
		api.init();
		api.calcAllProgress();
		return imba_router.on('change',function() { return self.saveRouteToState(); });
	}
	// FIXME: Not sure why state is not saving and being loaded
	
	render(){
		var $46, $47, $48, $50 = this._ns_ || '', $51, $53, $54, $55, $57, $58, $59, $60, $61, $62, $63, $64, $66, $67, $68, $70, $71, $72, $74, $75, $76, $78, $79, $80, $82, $83, $84, $86, $87, $88, $90, $91, $92, $94, $95, $96, $98, $99, $100, $101;
		$46=this;
		$46[$beforeReconcile$]();
		($47=$48=1,$46[$49] === 1) || ($47=$48=0,$46[$49]=1);
		($53=$54=1,$51=$46[$52]) || ($53=$54=0,$46[$52]=$51=imba_createComponent('i-global',$46,`${$50}`,null));
		$53 || ($51.on$(`hotkey`,{options: ["shift+d"],$_: [function(e,$$) {
			return api.toggleDark();
		}]},this));
		$53 || ($51.on$(`hotkey`,{options: ["shift+i|v"],$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$53 || ($51.on$(`hotkey`,{options: ["shift+c+l"],$_: [function(e,$$) {
			return api.clear();
		}]},this));
		$53 || ($51.on$(`hotkey`,{options: ["shift+a"],$_: [function(e,$$) {
			return api.toggleAuth();
		}]},this));
		$53 || ($51.on$(`hotkey`,{options: ['enter|s'],$_: [function(e,$$) {
			return api.toggleLearned(state.active_word);
		}]},this));
		$53 || !$51.setup || $51.setup($54);
		$51[$afterVisit$]($54);
		$53 || $46[$appendChild$]($51);
		;
		($57=$58=1,$55=$46[$56]) || ($57=$58=0,$46[$56]=$55=imba_createComponent('layout-pancakes',$46,`l0cop9-ai ${$50}`,null));
		$59 = $55[$getSlot$]('top',$46);
		$60 = $55[$getSlot$]('middle',$46);
		$61 = $55[$getSlot$]('bottom',$46);
		$57 || ($62=imba_createElement('nav',$59,`${$50}`,null));
		$57 || ($62.slot="top");
		$57 || ($63=imba_createElement('div',$62,`l0cop9-ak width-container ${$50}`,null));
		($66=$67=1,$64=$46[$65]) || ($66=$67=0,$46[$65]=$64=imba_createComponent(TopNavigation,$63,`${$50}`,null));
		$66 || !$64.setup || $64.setup($67);
		$64[$afterVisit$]($67);
		$66 || $63[$appendChild$]($64);
		;
		;
		;
		($70=$71=1,$68=$46[$69]) || ($70=$71=0,$46[$69]=$68=imba_createElement('div',$60,`${$50}`,null));
		$70 || ($68.slot="middle");
		($74=$75=1,$72=$68[$73]) || ($74=$75=0,$68[$73]=$72=imba_createComponent('landing-page',$68,`${$50}`,null));
		$74 || ($72.route="/");
		$74 || !$72.setup || $72.setup($75);
		$72[$afterVisit$]($75);
		$74 || $68[$appendChild$]($72);
		;
		($78=$79=1,$76=$68[$77]) || ($78=$79=0,$68[$77]=$76=imba_createComponent('app-dictionary-page',$68,`${$50}`,null));
		$78 || ($76.route="/dictionary");
		$78 || !$76.setup || $76.setup($79);
		$76[$afterVisit$]($79);
		$78 || $68[$appendChild$]($76);
		;
		($82=$83=1,$80=$68[$81]) || ($82=$83=0,$68[$81]=$80=imba_createComponent('phonetics-page',$68,`${$50}`,null));
		$82 || ($80.route="/phonetics");
		$82 || !$80.setup || $80.setup($83);
		$80[$afterVisit$]($83);
		$82 || $68[$appendChild$]($80);
		;
		($86=$87=1,$84=$68[$85]) || ($86=$87=0,$68[$85]=$84=imba_createComponent('info-page',$68,`${$50}`,null));
		$86 || ($84.route="/info");
		$86 || !$84.setup || $84.setup($87);
		$84[$afterVisit$]($87);
		$86 || $68[$appendChild$]($84);
		;
		($90=$91=1,$88=$68[$89]) || ($90=$91=0,$68[$89]=$88=imba_createElement('div',$68,`width-container ${$50}`,null));
		($94=$95=1,$92=$88[$93]) || ($94=$95=0,$88[$93]=$92=imba_createComponent(CollectionPage,$88,`${$50}`,null));
		$94 || ($92.route="/collection/0/0/0/0");
		$94 || !$92.setup || $92.setup($95);
		$92[$afterVisit$]($95);
		$94 || $88[$appendChild$]($92);
		;
		$90 || !$88.setup || $88.setup($91);
		$88[$afterVisit$]($91);
		;
		$70 || !$68.setup || $68.setup($71);
		$68[$afterVisit$]($71);
		;
		($98=$99=1,$96=$46[$97]) || ($98=$99=0,$46[$97]=$96=imba_createElement('div',$61,`l0cop9-at ${$50}`,null));
		$98 || ($96.slot="bottom");
		$98 || ($100=imba_createElement('span',$96,`l0cop9_at ${$50}`,"Currently in Development. Give feedback via ->"));
		;
		$98 || ($101=imba_createElement('a',$96,`l0cop9_at ${$50}`,"Telegram"));
		$98 || ($101.href="https://t.me/+GFitY1neUaQxMzQ1");
		$98 || ($101.target="_blank");
		;
		;
		$57 || !$55.setup || $55.setup($58);
		$55[$afterVisit$]($58);
		$57 || $46[$appendChild$]($55);
		;
		$46[$afterReconcile$]($48);
		return $46;
	}
	static {
		register$(this,c$2,'app-dashboard',2);
		imba_defineTag('app-dashboard',this,{cssid: 'l0cop9-af'});
	}
};

// TAG[epic=PAGE, seq=1] landing-page
let c$3 = Symbol();
class LandingPageComponent extends imba_Component {
	
	render(){
		var $102, $103, $104, $106 = this._ns_ || '', $107, $108, $109, $110, $111, $113, $114, $115, $116;
		$102=this;
		$102[$beforeReconcile$]();
		($103=$104=1,$102[$105] === 1) || ($103=$104=0,$102[$105]=1);
		((!$103||$104&2) && $102.flagSelf$('l0cop9-ax'));
		$103 || ($107=imba_createElement('div',$102,`l0cop9-ay ${$106}`,null));
		$103 || ($108=imba_createElement('div',$107,`l0cop9-az ${$106}`,"Learn 4000+ Khmer words"));
		;
		$103 || ($109=imba_createElement('div',$107,`l0cop9-ba ${$106}`,"by reading Bible stories"));
		;
		$103 || ($110=imba_createElement('div',$107,`l0cop9-bb ${$106}`,null));
		;
		($113=$114=1,$111=$102[$112]) || ($113=$114=0,$102[$112]=$111=imba_createElement('button',$107,`button ${$106}`,"Start Learning"));
		$113 || ($111.routeΞto="/collection/0/0/0/0/");
		$113 || !$111.setup || $111.setup($114);
		$111[$afterVisit$]($114);
		;
		;
		$103 || ($115=imba_createElement('div',$102,`${$106}`,null));
		$103 || ($116=imba_createElement('iframe',$115,`l0cop9-be ${$106}`,null));
		$103 || ($116.src="https://www.youtube.com/embed/20dpm0bNjIU");
		$103 || ($116.title="YouTube video player");
		$103 || ($116.frameBorder="0");
		$103 || ($116.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
		$103 || ($116.allowfullscreen='allowfullscreen');
		;
		;
		$102[$afterReconcile$]($104);
		return $102;
	}
	static {
		register$(this,c$3,'landing-page',2);
		imba_defineTag('landing-page',this,{cssns: 'l0cop9_aw',cssid: 'l0cop9-aw'});
	}
};

// TAG[epic=NAV, seq=1] TopNavigation
let c$4 = Symbol();
class TopNavigation extends imba_Component {
	
	toggleLeftNav(){
		state.left = !state.left;
		api.save();
		LOG('toggled nav',state.left);
		return imba_commit();
	}
	logOut(){
		api.logOut();
		return imba_commit();
	}
	render(){
		var $117, $118, $119, $121, $123, $124, $125, $127, $128, $129, $130, $132, $133, $134, $135, $137, $138, $139, $140, $142, $143, $144;
		$117=this;
		$117[$beforeReconcile$]();
		($118=$119=1,$117[$120] === 1) || ($118=$119=0,$117[$120]=1);
		($123=$124=1,$121=$117[$122]) || ($123=$124=0,$117[$122]=$121=imba_createComponent('cambodiau-logo',$117,'l0cop9-bh l0cop9_bf',null));
		$123 || ($121.routeΞto="/");
		$123 || !$121.setup || $121.setup($124);
		$121[$afterVisit$]($124);
		$123 || $117[$appendChild$]($121);
		;
		($127=$128=1,$125=$117[$126]) || ($127=$128=0,$117[$126]=$125=imba_createElement('a',$117,'l0cop9_bf',null));
		$127 || ($125.routeΞto="/collection/0/0/0/0/");
		$127 || ($129=imba_createElement('div',$125,'l0cop9_bf',"Learn"));
		;
		$127 || !$125.setup || $125.setup($128);
		$125[$afterVisit$]($128);
		;
		($132=$133=1,$130=$117[$131]) || ($132=$133=0,$117[$131]=$130=imba_createElement('a',$117,'l0cop9_bf',null));
		$132 || ($130.routeΞto="/dictionary");
		$132 || ($134=imba_createElement('div',$130,'l0cop9_bf',"app-dictionary"));
		;
		$132 || !$130.setup || $130.setup($133);
		$130[$afterVisit$]($133);
		;
		($137=$138=1,$135=$117[$136]) || ($137=$138=0,$117[$136]=$135=imba_createElement('a',$117,'l0cop9_bf',null));
		$137 || ($135.routeΞto="/phonetics");
		$137 || ($139=imba_createElement('div',$135,'l0cop9_bf',"Phonetics"));
		;
		$137 || !$135.setup || $135.setup($138);
		$135[$afterVisit$]($138);
		;
		($142=$143=1,$140=$117[$141]) || ($142=$143=0,$117[$141]=$140=imba_createElement('a',$117,'l0cop9_bf',null));
		$142 || ($140.routeΞto="/info");
		$142 || ($144=imba_createElement('div',$140,'l0cop9_bf',"Info"));
		;
		$142 || !$140.setup || $140.setup($143);
		$140[$afterVisit$]($143);
		;
		$117[$afterReconcile$]($119);
		return $117;
	}
	static {
		register$(this,c$4,'TopNavigation',2);
		imba_defineTag('top-navigation-l0cop9-bq',this,{cssns: 'l0cop9_bf',cssid: 'l0cop9-bf',name: 'TopNavigation'});
	}
};

let c$5 = Symbol();
class AppDictionaryPageComponent extends imba_Component {
	
	render(){
		var $145, $146, $147, $149 = this._ns_ || '', $150, $152, $153, $154, $156, $163, $165, $172, $174, $181, $182, $184, $185, $186, $188, $189;
		{$145=this;
		$145[$beforeReconcile$]();
		($146=$147=1,$145[$148] === 1) || ($146=$147=0,$145[$148]=1);
		let learned_length = Object.keys(state.user_learned).length;
		let dict_length = Object.keys(dictionary).length;
		let learned_percent = state.learning_data.user_progress;
		let learned_usage = state.learning_data.user_progress_learned_usage;
		let all_word_usage_count = collections_data.word_usage_count_sum;
		let all_wordset_length = collections_data.word_set_count;
		let dict_percent = Math.floor((learned_length / dict_length) * 1000) / 10;
		let lessons_percent = Math.floor((learned_length / all_wordset_length) * 1000) / 10;
		($150=$145[$151]) || ($145[$151]=$150=imba_createElement('div',$145,`page-wrapper ${$149}`,null));
		$146 || ($152=imba_createElement('div',$150,`l0cop9-bu wrapper l0cop9_bt ${$149}`,null));
		$146 || ($153=imba_createElement('h2',$152,`l0cop9_bt ${$149}`,"You have learned "));
		;
		($154=$145[$155]) || ($145[$155]=$154=imba_createElement('p',$152,`l0cop9-bw l0cop9_bt ${$149}`,null));
		($156=lessons_percent,($156===$145[$158]&&$146) || ($145[$157] = $154[$placeChild$]($145[$158]=$156,128,$145[$157])));
		$146 || $154[$placeChild$]("% of all words used in all lessons. (");
		($156=learned_length,($156===$145[$160]&&$146) || ($145[$159] = $154[$placeChild$]($145[$160]=$156,0,$145[$159])));
		$146 || $154[$placeChild$](" of ");
		($156=all_wordset_length,($156===$145[$162]&&$146) || ($145[$161] = $154[$placeChild$]($145[$162]=$156,0,$145[$161])));
		$146 || $154[$placeChild$](")");
		;
		($163=$145[$164]) || ($145[$164]=$163=imba_createElement('p',$152,`l0cop9-bx l0cop9_bt ${$149}`,null));
		($165=learned_percent,($165===$145[$167]&&$146) || ($145[$166] = $163[$placeChild$]($145[$167]=$165,128,$145[$166])));
		$146 || $163[$placeChild$]("% of all word instances in all lessons. (");
		($165=learned_usage,($165===$145[$169]&&$146) || ($145[$168] = $163[$placeChild$]($145[$169]=$165,0,$145[$168])));
		$146 || $163[$placeChild$](" of ");
		($165=all_word_usage_count,($165===$145[$171]&&$146) || ($145[$170] = $163[$placeChild$]($145[$171]=$165,0,$145[$170])));
		$146 || $163[$placeChild$](")");
		;
		($172=$145[$173]) || ($145[$173]=$172=imba_createElement('p',$152,`l0cop9-by l0cop9_bt ${$149}`,null));
		($174=dict_percent,($174===$145[$176]&&$146) || ($145[$175] = $172[$placeChild$]($145[$176]=$174,128,$145[$175])));
		$146 || $172[$placeChild$]("% of all words in this dictionary. (");
		($174=learned_length,($174===$145[$178]&&$146) || ($145[$177] = $172[$placeChild$]($145[$178]=$174,0,$145[$177])));
		$146 || $172[$placeChild$](" of ");
		($174=dict_length,($174===$145[$180]&&$146) || ($145[$179] = $172[$placeChild$]($145[$180]=$174,0,$145[$179])));
		$146 || $172[$placeChild$](")");
		;
		;
		;
		$146 || ($181=imba_createElement('div',$145,`page-wrapper ${$149}`,null));
		($184=$185=1,$182=$145[$183]) || ($184=$185=0,$145[$183]=$182=imba_createComponent('app-dictionary',$181,`${$149}`,null));
		$184 || !$182.setup || $182.setup($185);
		$182[$afterVisit$]($185);
		$184 || $181[$appendChild$]($182);
		;
		($188=$189=1,$186=$145[$187]) || ($188=$189=0,$145[$187]=$186=imba_createComponent(WordCard,$181,`l0cop9-cb card ${$149}`,null));
		$188 || !$186.setup || $186.setup($189);
		$186[$afterVisit$]($189);
		$188 || $181[$appendChild$]($186);
		;
		;
		$145[$afterReconcile$]($147);
		return $145;
		};
	}
	static {
		register$(this,c$5,'app-dictionary-page',2);
		imba_defineTag('app-dictionary-page',this,{cssns: 'l0cop9_br',cssid: 'l0cop9-br'});
	}
};
let c$6 = Symbol();
class AppDictionaryComponent extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.track = ($$ && ($0 = $$.track) !== undefined) ? ($0) : "";
		this.query = ($$ && ($0 = $$.query) !== undefined) ? ($0) : "";
		
	}
	render(){
		var $207, $236, $262, $190, $191, $192, $194 = this._ns_ || '', $195, $196, $197, $199, $200, $202, $203, $204, $205, $209, $211, $212, $213, $216, $219, $217, $220, $223, $225, $226, $228, $229, $231, $232, $234, $238, $239, $240, $244, $245, $247, $248, $249, $253, $254, $255, $259, $260, $264, $265, $266, $270, $271;
		$190=this;
		$190[$beforeReconcile$]();
		($191=$192=1,$190[$193] === 1) || ($191=$192=0,$190[$193]=1);
		$191 || ($195=imba_createElement('div',$190,`l0cop9-ce searchbar ${$194}`,null));
		$191 || ($196=imba_createElement('h1',$195,`${$194}`,null));
		;
		($199=$200=1,$197=$190[$198]) || ($199=$200=0,$190[$198]=$197=imba_createElement('input',$195,`${$194}`,null));
		$199 || ($197.type="text");
		$202=$190[$201] || ($190[$201]=$197.bind$('data',[this,'query']));
		$199 || ($197.placeholder="search khmer | vida | ipa | definition");
		$199 || !$197.setup || $197.setup($200);
		$197[$afterVisit$]($200);
		;
		;
		$191 || ($203=imba_createElement('div',$190,`l0cop9-ch row ${$194}`,null));
		$191 || ($203.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$191 || ($204=imba_createElement('span',$203,`${$194}`,"khmer"));
		;
		($205=$190[$206]) || ($190[$206]=$205=imba_createElement('span',$203,`${$194}`,null));
		$207 = null;
		if (state.ipa) { ($207="ipa") } else {
			($207="vida");
		};
		($190[$208] = $205[$placeChild$]($207,0,$190[$208]));
		;
		$191 || ($209=imba_createElement('span',$203,`${$194}`,"google"));
		;
		;
		($211 = $190[$210]) || ($190[$210]=$211=imba_createKeyedList(1280,$190));
		$212 = 0;
		$213=$211.$;
		for (let $214 = 0, $215 = Object.keys(dictionary), $273 = $215.length, word, info; $214 < $273; $214++){
			word = $215[$214];info = dictionary[word];if (fuzzy.search(this.query,word) | fuzzy.search(this.query,info?.vida) | fuzzy.search(this.query,info?.google) | fuzzy.search(this.query,info?.ipa)) {
				($219=$220=1,$216=($217=$213[$getRenderContext$]($218)).get($212)) || ($219=$220=0,$217.set($212,$216=imba_createElement('div',$211,`row ${$194}`,null)));
				$219||($216[$$up$]=$211);
				($223=(state.user_learned.hasOwnProperty(word)||undefined),$223===$216[$222]||($220|=2,$216[$222]=$223));
				$225 = $216[$224] || ($216[$224]={$_: [function(e,$$,_2) {
					return state.active_word = _2;
				},null]});
				$225.$_[1]=word;
				$219 || $216.on$(`click`,$225,this);
				($220&2 && $216.flag$(`row ${$194}`+' '+($216[$222] ? `learned` : '')));
				($228=$229=1,$226=$216[$227]) || ($228=$229=0,$216[$227]=$226=imba_createElement('a',$216,`${$194}`,null));
				($231=("http://sealang.net/api/api.pl?query=" + word + "&service=dictionary"),$231===$216[$230] || ($226.href=$216[$230]=$231));
				$228 || ($226.target="_blank");
				($232=$216[$233]) || ($216[$233]=$232=imba_createElement('span',$226,`khmer ${$194}`,null));
				($234=word,$234===$216[$235] || $232.text$(String($216[$235]=$234)));
				;
				;
				$236 = null;
				if (state.ipa) {
					if (info?.ipa) { ($238=$239=1,$236=$216[$237]) || ($238=$239=0,$216[$237]=$236=imba_createElement('span',null,`mono ${$194}`,null));
					$238||($236[$$up$]=$216);
					($240=info?.ipa,($240===$236[$242]&&$238) || ($236[$241] = $236[$placeChild$]($236[$242]=$240,384,$236[$241])));
					 } else {
						($244=$245=1,$236=$216[$243]) || ($244=$245=0,$216[$243]=$236=imba_createElement('span',null,`err ${$194}`,'ipa coming soon'));
						$244||($236[$$up$]=$216);
					};
				} else {
					if ((info?.vida)) {
						($247=$248=1,$236=$216[$246]) || ($247=$248=0,$216[$246]=$236=imba_createElement('span',null,`mono ${$194}`,null));
						$247||($236[$$up$]=$216);
						($249=info?.vida,($249===$236[$251]&&$247) || ($236[$250] = $236[$placeChild$]($236[$251]=$249,384,$236[$250])));
						
					} else if ((info?.vida_auto)) {
						($253=$254=1,$236=$216[$252]) || ($253=$254=0,$216[$252]=$236=imba_createElement('span',null,`mono err ${$194}`,null));
						$253||($236[$$up$]=$216);
						($255=info?.vida_auto,($255===$236[$257]&&$253) || ($236[$256] = $236[$placeChild$]($236[$257]=$255,384,$236[$256])));
						
					} else {
						($259=$260=1,$236=$216[$258]) || ($259=$260=0,$216[$258]=$236=imba_createElement('span',null,`err ${$194}`,'vida coming soon'));
						$259||($236[$$up$]=$216);
						
					};
				};
				($216[$261] = $216[$placeChild$]($236,0,$216[$261]));
				$262 = null;
				if (info?.google) { ($264=$265=1,$262=$216[$263]) || ($264=$265=0,$216[$263]=$262=imba_createElement('span',null,`${$194}`,null));
				$264||($262[$$up$]=$216);
				($266=info?.google,($266===$262[$268]&&$264) || ($262[$267] = $262[$placeChild$]($262[$268]=$266,384,$262[$267])));
				 } else {
					($270=$271=1,$262=$216[$269]) || ($270=$271=0,$216[$269]=$262=imba_createElement('span',null,`err ${$194}`,'-'));
					$270||($262[$$up$]=$216);
				};
				($216[$272] = $216[$placeChild$]($262,0,$216[$272]));
				$211.push($216,$212++,$217);
			};
		};$211[$afterVisit$]($212);;
		$190[$afterReconcile$]($192);
		return $190;
	}
	static {
		register$(this,c$6,'app-dictionary',2);
		imba_defineTag('app-dictionary',this,{cssns: 'l0cop9_cc',cssid: 'l0cop9-cc'});
	}
};
let c$7 = Symbol();
class UserPageComponent extends imba_Component {
	
	render(){
		var $274, $275, $276, $278 = this._ns_ || '', $279, $280, $282, $283;
		$274=this;
		$274[$beforeReconcile$]();
		($275=$276=1,$274[$277] === 1) || ($275=$276=0,$274[$277]=1);
		$275 || ($279=imba_createElement('div',$274,`width-container ${$278}`,null));
		($282=$283=1,$280=$274[$281]) || ($282=$283=0,$274[$281]=$280=imba_createComponent('user-page-owned-collections',$279,`${$278}`,null));
		$282 || !$280.setup || $280.setup($283);
		$280[$afterVisit$]($283);
		$282 || $279[$appendChild$]($280);
		;
		;
		$274[$afterReconcile$]($276);
		return $274;
	}
	static {
		register$(this,c$7,'user-page',2);
		imba_defineTag('user-page',this,{cssid: 'l0cop9-cv'});
	}
};
// TAG[epic=PAGE, seq=1] cms-admin-page
let c$8 = Symbol();
class CmsAdminPageComponent extends imba_Component {
	render(){
		var $284, $285, $286, $288 = this._ns_ || '', $289, $290, $292, $293, $294, $296, $297;
		$284=this;
		$284[$beforeReconcile$]();
		($285=$286=1,$284[$287] === 1) || ($285=$286=0,$284[$287]=1);
		$285 || ($289=imba_createElement('h1',$284,`l0cop9-da ${$288}`,"Learn 4000+ bible related words"));
		;
		($292=$293=1,$290=$284[$291]) || ($292=$293=0,$284[$291]=$290=imba_createElement('div',$284,`${$288}`,null));
		$292 || ($290.route="/cms/");
		($296=$297=1,$294=$284[$295]) || ($296=$297=0,$284[$295]=$294=imba_createComponent(CMSLearnModuleList,$290,`${$288}`,null));
		$296 || !$294.setup || $294.setup($297);
		$294[$afterVisit$]($297);
		$296 || $290[$appendChild$]($294);
		;
		$292 || !$290.setup || $290.setup($293);
		$290[$afterVisit$]($293);
		;
		$284[$afterReconcile$]($286);
		return $284;
	}
	static {
		register$(this,c$8,'cms-admin-page',2);
		imba_defineTag('cms-admin-page',this,{});
	}
};

let c$9 = Symbol();
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
		var $298, $299, $300, $302, $304, $305, $306, $309, $310, $311;
		$298=this;
		$298[$beforeReconcile$]();
		($299=$300=1,$298[$301] === 1) || ($299=$300=0,$298[$301]=1);
		$299 || ($302=imba_createElement('button',$298,'l0cop9-de',"Add Modules"));
		;
		($304 = $298[$303]) || ($298[$303]=$304=imba_createIndexedList(256,$298));
		$305 = 0;
		$306=$304.$;
		for (let $307 = 0, $308 = iterable$(this.collection_list), $313 = $308.length; $307 < $313; $307++) {
			let item = $308[$307];
			($310=$311=1,$309=$306[$305]) || ($310=$311=0,$306[$305]=$309=imba_createComponent('cms-collection-card',$304,null,null));
			$310||($309[$$up$]=$304);
			(item===$309[$312] || ($309.item=$309[$312]=item));
			$310 || !$309.setup || $309.setup($311);
			$309[$afterVisit$]($311);
			$305++;
			
		};$304[$afterVisit$]($305);;
		$298[$afterReconcile$]($300);
		return $298;
	}
	static {
		register$(this,c$9,'CMSLearnModuleList',2);
		imba_defineTag('cmslearn-module-list-l0cop9-dg',this,{name: 'CMSLearnModuleList'});
	}
};

let c$10 = Symbol();
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
		var $329, $314, $315, $316, $318 = this._ns_ || '', $319, $321, $324, $325, $327, $328, $331, $332, $333, $334, $336, $337, $339;
		$314=this;
		$314[$beforeReconcile$]();
		($315=$316=1,$314[$317] === 1) || ($315=$316=0,$314[$317]=1);
		((!$315||$316&2) && $314.flagSelf$('l0cop9-di'));
		($319=$314[$320]) || ($314[$320]=$319=imba_createElement('h1',$314,`l0cop9-dj ${$318}`,null));
		($321=this.item.title,($321===$314[$323]&&$315) || ($314[$322] = $319[$placeChild$]($314[$323]=$321,384,$314[$322])));
		;
		$315 || ($324=imba_createElement('div',$314,`l0cop9-dk ${$318}`,null));
		($327=$328=1,$325=$314[$326]) || ($327=$328=0,$314[$326]=$325=imba_createElement('button',$324,`l0cop9-dl ${$318}`,null));
		$327 || ($325.on$(`click`,{toggleEditable: true},this));
		$329 = null;
		if (this.meta_is_editable) {
			($329="save module");
		} else {
			($329="edit module");
		};
		($314[$330] = $325[$placeChild$]($329,0,$314[$330]));
		;
		$315 || ($331=imba_createElement('button',$324,`l0cop9-dm ${$318}`,"delete"));
		;
		;
		$315 || ($332=imba_createElement('pre',$314,`${$318}`,null));
		$315 || ($333=imba_createElement('code',$332,`${$318}`,null));
		($336=$337=1,$334=$314[$335]) || ($336=$337=0,$314[$335]=$334=imba_createElement('div',$333,`l0cop9-dp meta ${$318}`,null));
		($339=this.meta_is_editable,$339===$314[$338] || ($334.contentEditable=$314[$338]=$339));
		($339=(this.meta_is_editable||undefined),$339===$314[$341]||($337|=2,$314[$341]=$339));
		($337&2 && $334.flag$(`l0cop9-dp meta ${$318}`+' '+($314[$341] ? `editable` : '')));
		(imba_renderContext.context=($314[$343] || ($314[$343]={_:$334})),$339=JSON.stringify(this.item,null,4),imba_renderContext.context=null,($339===$314[$344]&&$336) || ($314[$342] = $334[$placeChild$]($314[$344]=$339,256,$314[$342])));
		;
		;
		;
		$314[$afterReconcile$]($316);
		return $314;
	}
	static {
		register$(this,c$10,'cms-collection-card',2);
		imba_defineTag('cms-collection-card',this,{cssns: 'l0cop9_dh'});
	}
};
let c$11 = Symbol();
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
		var $345, $346, $347, $349, $351, $352, $353, $356, $357, $358;
		$345=this;
		$345[$beforeReconcile$]();
		($346=$347=1,$345[$348] === 1) || ($346=$347=0,$345[$348]=1);
		$346 || ($349=imba_createElement('button',$345,'l0cop9-dr',"add lesson"));
		;
		($351 = $345[$350]) || ($345[$350]=$351=imba_createIndexedList(256,$345));
		$352 = 0;
		$353=$351.$;
		for (let $354 = 0, $355 = iterable$(this.lesson_list), $360 = $355.length; $354 < $360; $354++) {
			let item = $355[$354];
			($357=$358=1,$356=$353[$352]) || ($357=$358=0,$353[$352]=$356=imba_createComponent(CMSLessonCard,$351,null,null));
			$357||($356[$$up$]=$351);
			(item===$356[$359] || ($356.item=$356[$359]=item));
			$357 || !$356.setup || $356.setup($358);
			$356[$afterVisit$]($358);
			$352++;
			
		};$351[$afterVisit$]($352);;
		$345[$afterReconcile$]($347);
		return $345;
	}
	static {
		register$(this,c$11,'CMSLessonList',2);
		imba_defineTag('cmslesson-list-l0cop9-dt',this,{name: 'CMSLessonList'});
	}
};

let c$12 = Symbol();
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
		var $370, $361, $362, $363, $365, $366, $368, $369, $372, $373, $374, $375, $377, $378, $380, $386, $388, $389;
		$361=this;
		$361[$beforeReconcile$]();
		($362=$363=1,$361[$364] === 1) || ($362=$363=0,$361[$364]=1);
		((!$362||$363&2) && $361.flagSelf$('l0cop9-dv'));
		$362 || ($365=imba_createElement('div',$361,'l0cop9-dw l0cop9_du',null));
		($368=$369=1,$366=$361[$367]) || ($368=$369=0,$361[$367]=$366=imba_createElement('button',$365,'l0cop9-dx l0cop9_du',null));
		$368 || ($366.on$(`click`,{toggleEditable: true},this));
		$370 = null;
		if (this.meta_is_editable) {
			($370="save lesson");
		} else {
			($370="edit lesson");
		};
		($361[$371] = $366[$placeChild$]($370,0,$361[$371]));
		;
		$362 || ($372=imba_createElement('button',$365,'l0cop9-dy l0cop9_du',"delete lesson"));
		;
		;
		$362 || ($373=imba_createElement('pre',$361,'l0cop9_du',null));
		$362 || ($374=imba_createElement('code',$373,'l0cop9_du',null));
		($377=$378=1,$375=$361[$376]) || ($377=$378=0,$361[$376]=$375=imba_createElement('div',$374,'meta l0cop9_du',null));
		($380=this.meta_is_editable,$380===$361[$379] || ($375.contentEditable=$361[$379]=$380));
		($380=(this.meta_is_editable||undefined),$380===$361[$382]||($378|=2,$361[$382]=$380));
		($378&2 && $375.flag$('meta l0cop9_du'+' '+($361[$382] ? `editable` : '')));
		(imba_renderContext.context=($361[$384] || ($361[$384]={_:$375})),$380=JSON.stringify(this.item,null,4),imba_renderContext.context=null,($380===$361[$385]&&$377) || ($361[$383] = $375[$placeChild$]($361[$385]=$380,384,$361[$383])));
		;
		;
		;
		($388=$389=1,$386=$361[$387]) || ($388=$389=0,$361[$387]=$386=imba_createElement('button',$361,'l0cop9-ec l0cop9_du',"see chapters"));
		$388 || ($386.routeΞto="/cms/0/0");
		$388 || !$386.setup || $386.setup($389);
		$386[$afterVisit$]($389);
		;
		$361[$afterReconcile$]($363);
		return $361;
	}
	static {
		register$(this,c$12,'CMSLessonCard',2);
		imba_defineTag('cmslesson-card-l0cop9-ed',this,{cssns: 'l0cop9_du',name: 'CMSLessonCard'});
	}
};

let c$13 = Symbol();
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
		var $390, $391, $392, $394, $396, $397, $398, $401, $402, $403;
		$390=this;
		$390[$beforeReconcile$]();
		($391=$392=1,$390[$393] === 1) || ($391=$392=0,$390[$393]=1);
		$391 || ($394=imba_createElement('button',$390,'l0cop9-ef',"add chapter"));
		;
		($396 = $390[$395]) || ($390[$395]=$396=imba_createIndexedList(256,$390));
		$397 = 0;
		$398=$396.$;
		for (let $399 = 0, $400 = iterable$(this.chapter_list), $405 = $400.length; $399 < $405; $399++) {
			let item = $400[$399];
			($402=$403=1,$401=$398[$397]) || ($402=$403=0,$398[$397]=$401=imba_createComponent(CMSChapterCard,$396,null,null));
			$402||($401[$$up$]=$396);
			(item===$401[$404] || ($401.item=$401[$404]=item));
			$402 || !$401.setup || $401.setup($403);
			$401[$afterVisit$]($403);
			$397++;
			
		};$396[$afterVisit$]($397);;
		$390[$afterReconcile$]($392);
		return $390;
		
	}
	static {
		register$(this,c$13,'CMSChapterList',2);
		imba_defineTag('cmschapter-list-l0cop9-eh',this,{name: 'CMSChapterList'});
	}
};
let c$14 = Symbol();
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
		var $415, $406, $407, $408, $410, $411, $413, $414, $417, $418, $419, $420, $422, $423, $425;
		$406=this;
		$406[$beforeReconcile$]();
		($407=$408=1,$406[$409] === 1) || ($407=$408=0,$406[$409]=1);
		((!$407||$408&2) && $406.flagSelf$('l0cop9-ej'));
		$407 || ($410=imba_createElement('div',$406,'l0cop9-ek l0cop9_ei',null));
		($413=$414=1,$411=$406[$412]) || ($413=$414=0,$406[$412]=$411=imba_createElement('button',$410,'l0cop9-el l0cop9_ei',null));
		$413 || ($411.on$(`click`,{toggleEditable: true},this));
		$415 = null;
		if (this.meta_is_editable) {
			($415="save chapter");
		} else {
			($415="edit chapter");
		};
		($406[$416] = $411[$placeChild$]($415,0,$406[$416]));
		;
		$407 || ($417=imba_createElement('button',$410,'l0cop9-em l0cop9_ei',"delete chapter"));
		;
		;
		$407 || ($418=imba_createElement('pre',$406,'l0cop9_ei',null));
		$407 || ($419=imba_createElement('code',$418,'l0cop9_ei',null));
		($422=$423=1,$420=$406[$421]) || ($422=$423=0,$406[$421]=$420=imba_createElement('div',$419,'meta l0cop9_ei',null));
		($425=this.meta_is_editable,$425===$406[$424] || ($420.contentEditable=$406[$424]=$425));
		($425=(this.meta_is_editable||undefined),$425===$406[$427]||($423|=2,$406[$427]=$425));
		($423&2 && $420.flag$('meta l0cop9_ei'+' '+($406[$427] ? `editable` : '')));
		(imba_renderContext.context=($406[$429] || ($406[$429]={_:$420})),$425=JSON.stringify(this.item,null,4),imba_renderContext.context=null,($425===$406[$430]&&$422) || ($406[$428] = $420[$placeChild$]($406[$430]=$425,384,$406[$428])));
		;
		;
		;
		$406[$afterReconcile$]($408);
		return $406;
	}
	static {
		register$(this,c$14,'CMSChapterCard',2);
		imba_defineTag('cmschapter-card-l0cop9-eq',this,{cssns: 'l0cop9_ei',name: 'CMSChapterCard'});
	}
};


let c$15 = Symbol();
class InfoPageComponent extends imba_Component {
	render(){
		var $431, $432, $433, $435 = this._ns_ || '', $436, $437, $438, $439, $440, $441, $442;
		$431=this;
		$431[$beforeReconcile$]();
		($432=$433=1,$431[$434] === 1) || ($432=$433=0,$431[$434]=1);
		((!$432||$433&2) && $431.flagSelf$('l0cop9-er'));
		$432 || ($436=imba_createElement('div',$431,`l0cop9-es ${$435}`,null));
		$432 || ($437=imba_createElement('p',$436,`${$435}`,"This app stores your learning progress on your computer's browser."));
		;
		$432 || ($438=imba_createElement('p',$436,`${$435}`,"So use one device and one broswer to mark your progress. Also, don't clear your browser's data for this page."));
		;
		$432 || ($439=imba_createElement('p',$436,`${$435}`,"This app is an experiment. Let us know you are using it, and what features you want via telegram."));
		;
		$432 || ($440=imba_createElement('p',$436,`${$435}`,"We are working on something bigger and better."));
		;
		$432 || ($441=imba_createElement('a',$436,`l0cop9-ex ${$435}`,"Telegram"));
		$432 || ($441.href="https://t.me/+GFitY1neUaQxMzQ1");
		$432 || ($441.target="_blank");
		;
		$432 || ($442=imba_createElement('p',$436,`${$435}`,"This app was built by Eric Vida."));
		;
		;
		$431[$afterReconcile$]($433);
		return $431;
	}
	static {
		register$(this,c$15,'info-page',2);
		imba_defineTag('info-page',this,{});
	}
};
// TAG[epic=PAGE, seq=1] phonetics-page
let c$16 = Symbol();
class PhoneticsPageComponent extends imba_Component {
	
	render(){
		var $443, $444, $445, $447 = this._ns_ || '', $448, $449, $451, $452, $453, $455, $456;
		$443=this;
		$443[$beforeReconcile$]();
		($444=$445=1,$443[$446] === 1) || ($444=$445=0,$443[$446]=1);
		$444 || ($448=imba_createElement('div',$443,`phonetics-layout ${$447}`,null));
		($451=$452=1,$449=$443[$450]) || ($451=$452=0,$443[$450]=$449=imba_createComponent(PhoneticVowels,$448,`${$447}`,null));
		$451 || !$449.setup || $449.setup($452);
		$449[$afterVisit$]($452);
		$451 || $448[$appendChild$]($449);
		;
		($455=$456=1,$453=$443[$454]) || ($455=$456=0,$443[$454]=$453=imba_createComponent(WordCard,$448,`card ${$447}`,null));
		$455 || !$453.setup || $453.setup($456);
		$453[$afterVisit$]($456);
		$455 || $448[$appendChild$]($453);
		;
		;
		$443[$afterReconcile$]($445);
		return $443;
	}
	static {
		register$(this,c$16,'phonetics-page',2);
		imba_defineTag('phonetics-page',this,{cssns: 'l0cop9_ez',cssid: 'l0cop9-ez'});
	}
};

let c$17 = Symbol();
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
		var $466, $457, $458, $459, $461, $462, $464, $465, $468, $469, $470, $471, $473, $476, $477, $479, $482, $483, $485, $488, $489, $490, $492, $495, $496, $498, $501, $502, $504, $507, $508, $509, $511, $514, $515, $517, $520, $521, $523, $526, $527, $528, $530, $533, $534, $535, $537;
		$457=this;
		$457[$beforeReconcile$]();
		($458=$459=1,$457[$460] === 1) || ($458=$459=0,$457[$460]=1);
		$458 || ($461=imba_createElement('nav',$457,'l0cop9_fe',null));
		($464=$465=1,$462=$457[$463]) || ($464=$465=0,$457[$463]=$462=imba_createElement('button',$461,'l0cop9_fe',null));
		$464 || ($462.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$464 || $462[$placeChild$]("Phonetic System: ");
		$466 = null;
		if (state.ipa) { ($466="IPA") } else {
			($466="Vida");
		};
		($457[$467] = $462[$placeChild$]($466,0,$457[$467]));
		;
		;
		if (is$(state.ipa,true)) {
			this.ipa = 1;
		} else {
			this.ipa = 0;
		};
		$458 || ($468=imba_createElement('div',$457,'chart-wrapper l0cop9_fe',null));
		$458 || ($469=imba_createElement('div',$468,'row one l0cop9_fe',null));
		$458 || ($470=imba_createElement('div',$469,'dot l0cop9_fe',null));
		$458 || ($470.on$(`click`,{activeWord: [0]},this));
		($471=$457[$472]) || ($457[$472]=$471=imba_createElement('span',$470,'l0cop9_fe',null));
		($473=this.char[0][this.ipa],($473===$457[$475]&&$458) || ($457[$474] = $471[$placeChild$]($457[$475]=$473,384,$457[$474])));
		;
		;
		$458 || ($476=imba_createElement('div',$469,'dot l0cop9_fe',null));
		$458 || ($476.on$(`click`,{activeWord: [1]},this));
		($477=$457[$478]) || ($457[$478]=$477=imba_createElement('span',$476,'l0cop9_fe',null));
		($479=this.char[1][this.ipa],($479===$457[$481]&&$458) || ($457[$480] = $477[$placeChild$]($457[$481]=$479,384,$457[$480])));
		;
		;
		$458 || ($482=imba_createElement('div',$469,'dot l0cop9_fe',null));
		$458 || ($482.on$(`click`,{activeWord: [2]},this));
		($483=$457[$484]) || ($457[$484]=$483=imba_createElement('span',$482,'l0cop9_fe',null));
		($485=this.char[2][this.ipa],($485===$457[$487]&&$458) || ($457[$486] = $483[$placeChild$]($457[$487]=$485,384,$457[$486])));
		;
		;
		;
		$458 || ($488=imba_createElement('div',$468,'row two l0cop9_fe',null));
		$458 || ($489=imba_createElement('div',$488,'dot l0cop9_fe',null));
		$458 || ($489.on$(`click`,{activeWord: [3]},this));
		($490=$457[$491]) || ($457[$491]=$490=imba_createElement('span',$489,'l0cop9_fe',null));
		($492=this.char[3][this.ipa],($492===$457[$494]&&$458) || ($457[$493] = $490[$placeChild$]($457[$494]=$492,384,$457[$493])));
		;
		;
		$458 || ($495=imba_createElement('div',$488,'dot l0cop9_fe',null));
		$458 || ($495.on$(`click`,{activeWord: [4]},this));
		($496=$457[$497]) || ($457[$497]=$496=imba_createElement('span',$495,'l0cop9_fe',null));
		($498=this.char[4][this.ipa],($498===$457[$500]&&$458) || ($457[$499] = $496[$placeChild$]($457[$500]=$498,384,$457[$499])));
		;
		;
		$458 || ($501=imba_createElement('div',$488,'dot l0cop9_fe',null));
		$458 || ($501.on$(`click`,{activeWord: [5]},this));
		($502=$457[$503]) || ($457[$503]=$502=imba_createElement('span',$501,'l0cop9_fe',null));
		($504=this.char[5][this.ipa],($504===$457[$506]&&$458) || ($457[$505] = $502[$placeChild$]($457[$506]=$504,384,$457[$505])));
		;
		;
		;
		$458 || ($507=imba_createElement('div',$468,'row three l0cop9_fe',null));
		$458 || ($508=imba_createElement('div',$507,'dot l0cop9_fe',null));
		$458 || ($508.on$(`click`,{activeWord: [6]},this));
		($509=$457[$510]) || ($457[$510]=$509=imba_createElement('span',$508,'l0cop9_fe',null));
		($511=this.char[6][this.ipa],($511===$457[$513]&&$458) || ($457[$512] = $509[$placeChild$]($457[$513]=$511,384,$457[$512])));
		;
		;
		$458 || ($514=imba_createElement('div',$507,'dot l0cop9_fe',null));
		$458 || ($514.on$(`click`,{activeWord: [7]},this));
		($515=$457[$516]) || ($457[$516]=$515=imba_createElement('span',$514,'l0cop9_fe',null));
		($517=this.char[7][this.ipa],($517===$457[$519]&&$458) || ($457[$518] = $515[$placeChild$]($457[$519]=$517,384,$457[$518])));
		;
		;
		$458 || ($520=imba_createElement('div',$507,'dot l0cop9_fe',null));
		$458 || ($520.on$(`click`,{activeWord: [8]},this));
		($521=$457[$522]) || ($457[$522]=$521=imba_createElement('span',$520,'l0cop9_fe',null));
		($523=this.char[8][this.ipa],($523===$457[$525]&&$458) || ($457[$524] = $521[$placeChild$]($457[$525]=$523,384,$457[$524])));
		;
		;
		;
		$458 || ($526=imba_createElement('div',$468,'row four l0cop9_fe',null));
		$458 || ($527=imba_createElement('div',$526,'dot l0cop9_fe',null));
		$458 || ($527.on$(`click`,{activeWord: [9]},this));
		($528=$457[$529]) || ($457[$529]=$528=imba_createElement('span',$527,'l0cop9_fe',null));
		($530=this.char[9][this.ipa],($530===$457[$532]&&$458) || ($457[$531] = $528[$placeChild$]($457[$532]=$530,384,$457[$531])));
		;
		;
		$458 || ($533=imba_createElement('div',$526,'dot l0cop9_fe',null));
		;
		$458 || ($534=imba_createElement('div',$526,'dot l0cop9_fe',null));
		$458 || ($534.on$(`click`,{activeWord: [10]},this));
		($535=$457[$536]) || ($457[$536]=$535=imba_createElement('span',$534,'l0cop9_fe',null));
		($537=this.char[10][this.ipa],($537===$457[$539]&&$458) || ($457[$538] = $535[$placeChild$]($457[$539]=$537,384,$457[$538])));
		;
		;
		;
		;
		$457[$afterReconcile$]($459);
		return $457;
		
	}
	static {
		register$(this,c$17,'PhoneticVowels',2);
		imba_defineTag('phonetic-vowels-l0cop9-gk',this,{cssns: 'l0cop9_fe',name: 'PhoneticVowels'});
	}
};
// TAG[epic=PAGE, seq=21] CollectionPage
let c$18 = Symbol();
class CollectionPage extends imba_Component {
	
	mount(){
		return console.log(imba_router.url.pathname);
	}
	render(){
		// FIXME: Console.warn fires twice. Not sure why
				// WARN collection
		var $540, $541, $542, $544, $546, $547, $549, $550, $552, $553, $555, $556, $558, $559, $561;
		$540=this;
		$540[$beforeReconcile$]();
		($541=$542=1,$540[$543] === 1) || ($541=$542=0,$540[$543]=1);
		($546=$547=1,$544=$540[$545]) || ($546=$547=0,$540[$545]=$544=imba_createComponent(LessonNav,$540,'l0cop9_gl',null));
		$546 || ($544.route="/collection/:collection/:lesson");
		($549=collections_data.collections[state.collection],$549===$540[$548] || ($544.collection=$540[$548]=$549));
		$546 || !$544.setup || $544.setup($547);
		$544[$afterVisit$]($547);
		$546 || $540[$appendChild$]($544);
		;
		($552=$553=1,$550=$540[$551]) || ($552=$553=0,$540[$551]=$550=imba_createComponent(ChapterNav,$540,'l0cop9_gl',null));
		($555=collections_data.collections[state.collection],$555===$540[$554] || ($550.collection=$540[$554]=$555));
		$552 || !$550.setup || $550.setup($553);
		$550[$afterVisit$]($553);
		$552 || $540[$appendChild$]($550);
		;
		($558=$559=1,$556=$540[$557]) || ($558=$559=0,$540[$557]=$556=imba_createComponent('lesson-layout',$540,'l0cop9_gl',null));
		($561=collections_data.collections[state.collection],$561===$540[$560] || ($556.collection=$540[$560]=$561));
		$558 || !$556.setup || $556.setup($559);
		$556[$afterVisit$]($559);
		$558 || $540[$appendChild$]($556);
		;
		$540[$afterReconcile$]($542);
		return $540;
	}
	static {
		register$(this,c$18,'CollectionPage',2);
		imba_defineTag('collection-page-l0cop9-gq',this,{cssns: 'l0cop9_gl',cssid: 'l0cop9-gl',name: 'CollectionPage'});
	}
};
let c$19 = Symbol();
class UserPageOwnedCollectionsComponent extends imba_Component {
	render(){
		var $562, $563, $564, $566 = this._ns_ || '', $567, $568, $571, $572, $573, $577, $578, $579, $581;
		$562=this;
		$562[$beforeReconcile$]();
		($563=$564=1,$562[$565] === 1) || ($563=$564=0,$562[$565]=1);
		$563 || ($567=imba_createElement('h2',$562,`l0cop9-gs ${$566}`,null));
		;
		($568=$562[$569]) || ($562[$569]=$568=imba_createElement('div',$562,`layout-card-grid ${$566}`,null));
		($571 = $562[$570]) || ($562[$570]=$571=imba_createIndexedList(384,$568));
		$572 = 0;
		$573=$571.$;
		for (let $576 = collections_data.collections, $574 = 0, $575 = Object.keys($576), $584 = $575.length, id, collection; $574 < $584; $574++){
			id = $575[$574];collection = $576[id];($578=$579=1,$577=$573[$572]) || ($578=$579=0,$573[$572]=$577=imba_createComponent('collection-card',$571,`stretchy-card ${$566}`,null));
			$578||($577[$$up$]=$571);
			($581=("/collection/" + id + "/0/0/0/"),$581===$577[$580] || ($577.routeΞto=$577[$580]=$581));
			(id===$577[$582] || ($577.id=$577[$582]=id));
			(collection===$577[$583] || ($577.collection=$577[$583]=collection));
			$578 || !$577.setup || $577.setup($579);
			$577[$afterVisit$]($579);
			$572++;
			
			// <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
			// <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
			// <collection-card.stretchy-card route-to="/collection/{id}/0/0/0/" id=id collection=collection>
		};$571[$afterVisit$]($572);;
		;
		$562[$afterReconcile$]($564);
		return $562;
	}
	static {
		register$(this,c$19,'user-page-owned-collections',2);
		imba_defineTag('user-page-owned-collections',this,{});
	}
};
let c$20 = Symbol();
class UserPageLockedCollectionsComponent extends imba_Component {
	
	render(){
		var $585, $586, $587, $589 = this._ns_ || '', $590, $591, $593, $594, $596, $597, $598, $602, $603, $604, $606;
		$585=this;
		$585[$beforeReconcile$]();
		($586=$587=1,$585[$588] === 1) || ($586=$587=0,$585[$588]=1);
		$586 || ($590=imba_createElement('h2',$585,`${$589}`,"Purchased Modules"));
		;
		($593=$594=1,$591=$585[$592]) || ($593=$594=0,$585[$592]=$591=imba_createElement('div',$585,`card-wrapper ${$589}`,null));
		$593 || ($591.route="/");
		($596 = $585[$595]) || ($585[$595]=$596=imba_createIndexedList(384,$591));
		$597 = 0;
		$598=$596.$;
		for (let $601 = this.bible_data.collections, $599 = 0, $600 = Object.keys($601), $609 = $600.length, id, collection; $599 < $609; $599++){
			id = $600[$599];collection = $601[id];($603=$604=1,$602=$598[$597]) || ($603=$604=0,$598[$597]=$602=imba_createComponent('collection-card',$596,`${$589}`,null));
			$603||($602[$$up$]=$596);
			($606=("/buy/" + id),$606===$602[$605] || ($602.routeΞto=$602[$605]=$606));
			(id===$602[$607] || ($602.id=$602[$607]=id));
			(collection===$602[$608] || ($602.collection=$602[$608]=collection));
			$603 || !$602.setup || $602.setup($604);
			$602[$afterVisit$]($604);
			$597++;
			
		};$596[$afterVisit$]($597);;
		$593 || !$591.setup || $591.setup($594);
		$591[$afterVisit$]($594);
		;
		$585[$afterReconcile$]($587);
		return $585;
	}
	static {
		register$(this,c$20,'user-page-locked-collections',2);
		imba_defineTag('user-page-locked-collections',this,{cssns: 'l0cop9_gv',cssid: 'l0cop9-gv'});
	}
};

// LAYOUT[epic=LAYOUT, seq=23] lesson-layout
let c$21 = Symbol();
class LessonLayoutComponent extends imba_Component {
	get $image(){
		let el=imba_createElement('img',null,`image ${this._ns_ || ''} $image`,null);
		return (Object.defineProperty(this,'$image',{value:el}),el);
	}
	
	render(){
		var $635, $702, $703, $704, $610, $611, $612, $614 = this._ns_ || '', $615, $616, $617, $619, $620, $622, $623, $625, $626, $628, $631, $632, $633, $637, $638, $641, $644, $642, $645, $646, $649, $652, $650, $653, $654, $657, $655, $658, $659, $665, $666, $669, $672, $670, $673, $674, $677, $680, $678, $681, $682, $685, $683, $686, $687, $693, $694, $695, $697, $700, $706, $707, $709, $710, $712, $713, $717, $719, $720;
		let phrase = this.collection.lessons[state.lesson].phrases[state.phrase];
		$610=this;
		$610[$beforeReconcile$]();
		($611=$612=1,$610[$613] === 1) || ($611=$612=0,$610[$613]=1);
		$611 || ($615=imba_createElement('main',$610,`collection-grid ${$614}`,null));
		$611 || ($616=imba_createElement('div',$615,`left ${$614}`,null));
		($619=$620=1,$617=$610[$618]) || ($619=$620=0,$610[$618]=($617=this.$image,$617[$$up$]=$616,$617));
		($622=images[phrase.image],$622===$610[$621] || ($617.src=$610[$621]=$622));
		$619 || $616[$appendChild$]($617);
		;
		($625=$626=1,$623=$610[$624]) || ($625=$626=0,$610[$624]=$623=imba_createComponent(WordNav,$616,`card ${$614}`,null));
		$625 || ($623.on$(`click`,{commit: true},this));
		($628=this.collection,$628===$610[$627] || ($623.collection=$610[$627]=$628));
		(phrase===$610[$629] || ($623.phrase=$610[$629]=phrase));
		($628=this.route,$628===$610[$630] || ($623.rt=$610[$630]=$628));
		$625 || !$623.setup || $623.setup($626);
		$623[$afterVisit$]($626);
		$625 || $616[$appendChild$]($623);
		;
		$611 || ($631=imba_createElement('div',$616,`card ${$614}`,null));
		$611 || ($632=imba_createElement('h2',$631,`${$614}`,"Phonetics"));
		;
		($633=$610[$634]) || ($610[$634]=$633=imba_createElement('p',$631,`phonetics ${$614}`,null));
		$635 = null;
		if (state.ipa) {
			($635 = $610[$636]) || ($610[$636]=$635=imba_createKeyedList(1024,null));
			$635[$$up$] = $633;
			$637 = 0;
			$638=$635.$;
			for (let $639 = 0, $640 = iterable$(phrase.khmer.split('|')), $663 = $640.length; $639 < $663; $639++) {
				let word = $640[$639];
				let obj = dictionary[word];
				if (obj?.ipa || obj?.vida || obj?.vida_auto || word) {
					($644=$645=1,$641=($642=$638[$getRenderContext$]($643)).get($637)) || ($644=$645=0,$642.set($637,$641=imba_createElement('span',$635,`${$614}`,null)));
					$644||($641[$$up$]=$635);
					($646=obj?.ipa || obj?.vida || obj?.vida_auto || word,($646===$641[$648]&&$644) || ($641[$647] = $641[$placeChild$]($641[$648]=$646,384,$641[$647])));
					$635.push($641,$637++,$642);
					
				} else {
					($652=$653=1,$649=($650=$638[$getRenderContext$]($651)).get($637)) || ($652=$653=0,$650.set($637,$649=imba_createElement('span',$635,`${$614}`,"n/a")));
					$652||($649[$$up$]=$635);
					$635.push($649,$637++,$650);
					
					($657=$658=1,$654=($655=$638[$getRenderContext$]($656)).get($637)) || ($657=$658=0,$655.set($637,$654=imba_createLiveFragment(4096,$635)));
					$657||($654[$$up$]=$635);
					(imba_renderContext.context=($654[$661] || ($654[$661]={_:$654})),$659=ERROR(word,"no phonetics available"),imba_renderContext.context=null,($659===$654[$662]&&$657) || ($654[$660] = $654[$placeChild$]($654[$662]=$659,0,$654[$660])));
					$635.push($654,$637++,$655);
					
				};
			};$635[$afterVisit$]($637);
		} else {
			($635 = $610[$664]) || ($610[$664]=$635=imba_createKeyedList(1024,null));
			$635[$$up$] = $633;
			$665 = 0;
			$666=$635.$;
			for (let $667 = 0, $668 = iterable$(phrase.khmer.split('|')), $691 = $668.length; $667 < $691; $667++) {
				let word = $668[$667];
				let obj = dictionary[word];
				if (obj?.vida || obj?.vida_auto || obj?.ipa || word) {
					($672=$673=1,$669=($670=$666[$getRenderContext$]($671)).get($665)) || ($672=$673=0,$670.set($665,$669=imba_createElement('span',$635,`${$614}`,null)));
					$672||($669[$$up$]=$635);
					($674=obj?.vida || obj?.vida_auto || obj?.ipa || word,($674===$669[$676]&&$672) || ($669[$675] = $669[$placeChild$]($669[$676]=$674,384,$669[$675])));
					$635.push($669,$665++,$670);
					
				};
				if (!(obj?.vida || obj?.vida_auto || obj?.ipa || word)) {
					($680=$681=1,$677=($678=$666[$getRenderContext$]($679)).get($665)) || ($680=$681=0,$678.set($665,$677=imba_createElement('span',$635,`${$614}`,"n/a")));
					$680||($677[$$up$]=$635);
					$635.push($677,$665++,$678);
					
					($685=$686=1,$682=($683=$666[$getRenderContext$]($684)).get($665)) || ($685=$686=0,$683.set($665,$682=imba_createLiveFragment(4096,$635)));
					$685||($682[$$up$]=$635);
					(imba_renderContext.context=($682[$689] || ($682[$689]={_:$682})),$687=ERROR(word,"no phonetics available"),imba_renderContext.context=null,($687===$682[$690]&&$685) || ($682[$688] = $682[$placeChild$]($682[$690]=$687,0,$682[$688])));
					$635.push($682,$665++,$683);
					
				};
			};$635[$afterVisit$]($665);
		};
		($610[$692] = $633[$placeChild$]($635,0,$610[$692]));
		;
		;
		$611 || ($693=imba_createElement('div',$616,`card ${$614}`,null));
		$611 || ($694=imba_createElement('h2',$693,`${$614}`,"Meaning"));
		;
		($695=$610[$696]) || ($610[$696]=$695=imba_createElement('p',$693,`${$614}`,null));
		($697=phrase.meaning,($697===$610[$699]&&$611) || ($610[$698] = $695[$placeChild$]($610[$699]=$697,384,$610[$698])));
		;
		;
		;
		($700=$610[$701]) || ($610[$701]=$700=imba_createElement('div',$615,`right ${$614}`,null));
		$702 = $703 = $704 = null;
		if (state.active_word) {
			($706=$707=1,$702=$610[$705]) || ($706=$707=0,$610[$705]=$702=imba_createComponent(WordCard,null,`card ${$614}`,null));
			$706||($702[$$up$]=$700);
			$706 || !$702.setup || $702.setup($707);
			$702[$afterVisit$]($707);
			
			if (dictionary[state.active_word]?.google) {
				($709=$710=1,$703=$610[$708]) || ($709=$710=0,$610[$708]=$703=imba_createComponent(DefinitionCard,null,`card ${$614}`,null));
				$709||($703[$$up$]=$700);
				$709 || !$703.setup || $703.setup($710);
				$703[$afterVisit$]($710);
				
			};
			($712=$713=1,$704=$610[$711]) || ($712=$713=0,$610[$711]=$704=imba_createComponent(SpellingCard,null,`card ${$614}`,null));
			$712||($704[$$up$]=$700);
			$712 || !$704.setup || $704.setup($713);
			$704[$afterVisit$]($713);
			
		};
		($610[$714] = $700[$placeChild$]($702,0,$610[$714]));
		($610[$715] = $700[$placeChild$]($703,0,$610[$715]));
		($610[$716] = $700[$placeChild$]($704,0,$610[$716]));
		($719=$720=1,$717=$610[$718]) || ($719=$720=0,$610[$718]=$717=imba_createComponent(ShortcutCard,$700,`card ${$614}`,null));
		$719 || !$717.setup || $717.setup($720);
		$717[$afterVisit$]($720);
		$719 || $700[$appendChild$]($717);
		;
		;
		;
		$610[$afterReconcile$]($612);
		return $610;
	}
	static {
		register$(this,c$21,'lesson-layout',2);
		imba_defineTag('lesson-layout',this,{cssns: 'l0cop9_ha',cssid: 'l0cop9-ha'});
	}
};
let c$22 = Symbol();
class AdminTools extends imba_Component {
	
	render(){
		var $721, $722, $723, $725, $729, $730;
		$721=this;
		$721[$beforeReconcile$]();
		($722=$723=1,$721[$724] === 1) || ($722=$723=0,$721[$724]=1);
		(imba_renderContext.context=($721[$727] || ($721[$727]={_:$721})),$725=LOG(state),imba_renderContext.context=null,($725===$721[$728]&&$722) || ($721[$726] = $721[$placeChild$]($721[$728]=$725,128,$721[$726])));
		$722 || ($729=imba_createElement('nav',$721,'l0cop9_hx',null));
		$722 || ($730=imba_createElement('button',$729,'l0cop9_hx',"edit phrase"));
		;
		;
		$721[$afterReconcile$]($723);
		return $721;
	}
	static {
		register$(this,c$22,'AdminTools',2);
		imba_defineTag('admin-tools-l0cop9-ib',this,{cssns: 'l0cop9_hx',cssid: 'l0cop9-hx',name: 'AdminTools'});
	}
};
let c$23 = Symbol();
class WordNav extends imba_Component {
	get $word_audio(){
		let el=imba_createElement('audio',null,'l0cop9_ic $word_audio',null);
		return (Object.defineProperty(this,'$word_audio',{value:el}),el);
	}
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.step = ($$ && ($0 = $$.step) !== undefined) ? ($0) : 50;
		this.elapsed = ($$ && ($0 = $$.elapsed) !== undefined) ? ($0) : 0;
		
	}
	
	
	// Goes to the next word in the phrase
	nextWord(){
		if (this.word_index < this.last_word_index) {
			this.word_index++;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		} else {
			// if last word of phrase, goes to the first word of the next phrase
			return this.nextPhrase();
		};
		// LOG 'phrase', phrase_index, 'word', word_index, 'lastw', last_word_index
	}
	
	// Goes to the previous word in the phrase
	prevWord(){
		if (this.word_index > 0) {
			this.word_index--;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		} else {
			// if no previous word in this phrase goes to the last word of the previous phrase
			return this.prevPhraseLast();
		};
	}
	// Goes to the first verse of the next phrase
	nextPhrase(){
		if (this.phrase_index < this.last_phrase_index) {
			this.phrase_index++;
			this.word_index = 0;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	
	// Goes to the last word of hte previous phrase
	prevPhraseLast(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = this.phrases[this.phrase_index].khmer.split('|').length - 1;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	// Goes to the first word of the previous phrase
	prevPhraseZero(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = 0;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	
	updateActiveWordData(){
		this.route_array = this.router.pathname.replace('/','').split('/');
		this.collection_index = this.route_array[1];
		this.lesson_index = this.route_array[2];
		this.phrase_index = this.route_array[3];
		this.word_index = this.route_array[4];
		this.word = this.phrase.khmer.split('|')[this.word_index];
		this.phrases = this.collection.lessons[this.lesson_index].phrases;
		this.last_phrase_index = Object.keys(this.phrases).length - 1;
		this.last_word_index = this.phrase.khmer.split('|').length - 1;
		return state.active_word = this.word;
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
		console.log('held');
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
		var self = this, $731, $732, $733, $735, $737, $740, $742, $743, $744, $746, $747, $748, $751, $752, $753, $755, $756, $757, $760, $767;
		this.updateActiveWordData();
		// @click=(state.active_word = khccmer_word)
		$731=this;
		$731[$beforeReconcile$]();
		($732=$733=1,$731[$734] === 1) || ($732=$733=0,$731[$734]=1);
		($735=$731[$736]) || ($731[$736]=$735=imba_createElement('h2',$731,'l0cop9_ic',null));
		($737=this.phrase.title,($737===$731[$739]&&$732) || ($731[$738] = $735[$placeChild$]($731[$739]=$737,384,$731[$738])));
		;
		($742=$743=1,$740=$731[$741]) || ($742=$743=0,$731[$741]=$740=imba_createComponent('i-global',$731,'l0cop9_ic',null));
		$742 || ($740.on$(`hotkey`,{options: ['e|up'],$_: [function(e,$$) {
			return self.prevPhraseZero();
		}]},this));
		$742 || ($740.on$(`hotkey`,{options: ['r|down'],$_: [function(e,$$) {
			return self.nextPhrase();
		}]},this));
		$742 || ($740.on$(`hotkey`,{options: ['d|left'],$_: [function(e,$$) {
			return self.prevWord();
		}]},this));
		$742 || ($740.on$(`hotkey`,{options: ['f|right'],$_: [function(e,$$) {
			return self.nextWord();
		}]},this));
		$742 || !$740.setup || $740.setup($743);
		$740[$afterVisit$]($743);
		$742 || $731[$appendChild$]($740);
		;
		($746=$747=1,$744=$731[$745]) || ($746=$747=0,$731[$745]=($744=this.$word_audio,$744[$$up$]=$731,$744));
		$746 || ($744.src="");
		$746 || ($744.type="audio/mpeg");
		$746 || $731[$appendChild$]($744);
		;
		($748=$731[$749]) || ($731[$749]=$748=imba_createElement('div',$731,'word-wrapper l0cop9_ic',null));
		($751 = $731[$750]) || ($731[$750]=$751=imba_createIndexedList(384,$748));
		$752 = 0;
		$753=$751.$;
		for (let ki = 0, $754 = iterable$(this.phrase.khmer.split('|')), $771 = $754.length; ki < $771; ki++) {
			let khmer_word = $754[ki];
			($756=$757=1,$755=$753[$752]) || ($756=$757=0,$753[$752]=$755=imba_createElement('div',$751,'word l0cop9_ic',null));
			$756||($755[$$up$]=$751);
			($760=(is$(khmer_word,state.active_word)||undefined),$760===$755[$759]||($757|=2,$755[$759]=$760));
			($760=("/collection/" + (state.collection) + "/" + (state.lesson) + "/" + (state.phrase) + "/" + ki),$760===$755[$761] || ($755.routeΞto=$755[$761]=$760));
			($760=(state.user_learned.hasOwnProperty(khmer_word)||undefined),$760===$755[$763]||($757|=2,$755[$763]=$760));
			($760=(!(dictionary.hasOwnProperty(khmer_word))||undefined),$760===$755[$765]||($757|=2,$755[$765]=$760));
			$767 = $755[$766] || ($755[$766]={playWord: [null,null]});
			$767.playWord[0]=this.$word_audio;
			$767.playWord[1]=khmer_word;
			$756 || $755.on$(`dblclick`,$767,this);
			$767 = $755[$768] || ($755[$768]={pressAndHold: [null,null]});
			$767.pressAndHold[0]=khmer_word;
			$767.pressAndHold[1]=(1 * 1000);
			$756 || $755.on$(`mousedown`,$767,this);
			$756 || ($755.on$(`mouseup`,{stopTimer: true},this));
			($757&2 && $755.flag$('word l0cop9_ic'+' '+($755[$759] ? `active` : '')+' '+($755[$763] ? `known` : '')+' '+($755[$765] ? `not_in_dict` : '')));
			($760=khmer_word,($760===$755[$770]&&$756) || ($755[$769] = $755[$placeChild$]($755[$770]=$760,384,$755[$769])));
			$756 || !$755.setup || $755.setup($757);
			$755[$afterVisit$]($757);
			$752++;
			
		};$751[$afterVisit$]($752);;
		;
		$731[$afterReconcile$]($733);
		return $731;
	}
	static {
		register$(this,c$23,'WordNav',2);
		imba_defineTag('word-nav-l0cop9-ij',this,{cssns: 'l0cop9_ic',cssid: 'l0cop9-ic',name: 'WordNav'});
	}
};

// LAYOUT[epic=LAYOUT, seq=26] LearnModulePreview
let c$24 = Symbol();
class LearnModulePreview extends imba_Component {
	
	render(){
		var $772, $773, $774, $776, $777, $778, $779, $780, $782, $783, $784, $785, $787, $788, $789, $792, $793, $794, $797, $798, $799, $801;
		{$772=this;
		$772[$beforeReconcile$]();
		($773=$774=1,$772[$775] === 1) || ($773=$774=0,$772[$775]=1);
		$773 || ($776=imba_createElement('main',$772,'collection-grid l0cop9_ik',null));
		$773 || ($777=imba_createElement('div',$776,'image l0cop9_ik',"image"));
		;
		$773 || ($778=imba_createElement('div',$776,'l0cop9-io l0cop9_ik',null));
		$773 || ($779=imba_createElement('div',$778,'card l0cop9_ik',"card"));
		;
		($782=$783=1,$780=$772[$781]) || ($782=$783=0,$772[$781]=$780=imba_createComponent('rightbar-collection-contents',$778,'l0cop9_ik',null));
		$782 || !$780.setup || $780.setup($783);
		$780[$afterVisit$]($783);
		$782 || $778[$appendChild$]($780);
		;
		;
		$773 || ($784=imba_createElement('div',$776,'l0cop9-ir l0cop9_ik',null));
		($787=$788=1,$785=$772[$786]) || ($787=$788=0,$772[$786]=$785=imba_createComponent('rightbar-graduated-students',$784,'l0cop9_ik',null));
		$787 || !$785.setup || $785.setup($788);
		$785[$afterVisit$]($788);
		$787 || $784[$appendChild$]($785);
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
		($789=$772[$790]) || ($772[$790]=$789=imba_createElement('div',$772,'buy-cards l0cop9_ik',null));
		($792 = $772[$791]) || ($772[$791]=$792=imba_createIndexedList(384,$789));
		$793 = 0;
		$794=$792.$;
		for (let $795 = 0, $796 = iterable$(buyΞcards), $804 = $796.length; $795 < $804; $795++) {
			let card = $796[$795];
			($798=$799=1,$797=$794[$793]) || ($798=$799=0,$794[$793]=$797=imba_createComponent(SellCard,$792,'l0cop9_ik',null));
			$798||($797[$$up$]=$792);
			($801=card.name,$801===$797[$800] || ($797.name=$797[$800]=$801));
			($801=card.price,$801===$797[$802] || ($797.price=$797[$802]=$801));
			($801=card.benefits,$801===$797[$803] || ($797.benefits=$797[$803]=$801));
			$798 || !$797.setup || $797.setup($799);
			$797[$afterVisit$]($799);
			$793++;
			
		};$792[$afterVisit$]($793);;
		;
		$772[$afterReconcile$]($774);
		return $772;
		};
	}
	static {
		register$(this,c$24,'LearnModulePreview',2);
		imba_defineTag('learn-module-preview-l0cop9-iv',this,{cssns: 'l0cop9_ik',cssid: 'l0cop9-ik',name: 'LearnModulePreview'});
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
		var $805, $806, $807, $809, $811, $812, $814, $815, $816, $817, $818, $819, $821, $822, $825, $827, $828, $830, $831, $832;
		$805=this;
		$805[$beforeReconcile$]();
		($806=$807=1,$805[$808] === 1) || ($806=$807=0,$805[$808]=1);
		($811=$812=1,$809=$805[$810]) || ($811=$812=0,$805[$810]=$809=imba_createElement('img',$805,'l0cop9_iw',null));
		($814=this.user_collection.image,$814===$805[$813] || ($809.src=$805[$813]=$814));
		;
		$806 || ($815=imba_createElement('div',$805,'user-info l0cop9_iw',null));
		$806 || ($816=imba_createElement('div',$815,'l0cop9_iw',null));
		$806 || ($817=imba_createElement('h2',$816,'user-name l0cop9_iw',"DinaLearns"));
		;
		;
		$806 || ($818=imba_createElement('a',$815,'user-wordcount l0cop9_iw',"400/4000"));
		;
		($821=$822=1,$819=$805[$820]) || ($821=$822=0,$805[$820]=$819=imba_createComponent(ProgressBar,$815,'l0cop9_iw',null));
		($825=(this[$context$].active||undefined),$825===$805[$824]||($822|=2,$805[$824]=$825));
		($825=this.progress,$825===$805[$826] || ($819.progress=$805[$826]=$825));
		($822&2 && $819.flag$('l0cop9_iw'+' '+($805[$824] ? `color` : '')));
		$821 || !$819.setup || $819.setup($822);
		$819[$afterVisit$]($822);
		$821 || $815[$appendChild$]($819);
		;
		$806 || ($827=imba_createElement('div',$815,'user-stats l0cop9_iw',null));
		($830=$831=1,$828=$805[$829]) || ($830=$831=0,$805[$829]=$828=imba_createElement('a',$827,'user-settings l0cop9_iw',"settings"));
		$830 || ($828.routeΞto="/settings/");
		$830 || !$828.setup || $828.setup($831);
		$828[$afterVisit$]($831);
		;
		$806 || ($832=imba_createElement('a',$827,'user-settings l0cop9_iw',"logout"));
		$806 || ($832.on$(`click`,{$_: [function(e,$$) {
			return state.logout(e);
		}]},this));
		;
		;
		;
		$805[$afterReconcile$]($807);
		return $805;
	}
	static {
		register$(this,c$25,'UserCard',2);
		imba_defineTag('user-card-l0cop9-jh',this,{cssns: 'l0cop9_iw',cssid: 'l0cop9-iw',name: 'UserCard'});
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
		var $840, $846, $833, $834, $835, $839, $841 = this._ns_ || '', $843, $844, $848, $849, $851, $853, $854, $855, $857, $859, $861, $864, $866, $867, $869, $870, $872;
		$833=this;
		$833[$beforeReconcile$]();
		($834=$835=1,$833[$836] === 1) || ($834=$835=0,$833[$836]=1);
		($839=(this.collection.locked||undefined),$839===$833[$838]||($835|=2,$833[$838]=$839));
		((!$834||$835&2) && $833.flagSelf$(($833[$838] ? `locked` : '')));
		$840 = null;
		if (!(this.collection.image)) { ($843=$844=1,$840=$833[$842]) || ($843=$844=0,$833[$842]=$840=imba_createElement('div',null,`not-image ${$841}`,null));
		$843||($840[$$up$]=$833);
		 };
		($833[$845] = $833[$placeChild$]($840,0,$833[$845]));
		$846 = null;
		if (this.collection.image) { ($848=$849=1,$846=$833[$847]) || ($848=$849=0,$833[$847]=$846=imba_createElement('img',null,`image ${$841}`,null));
		$848||($846[$$up$]=$833);
		($851=this.collection.image,$851===$846[$850] || ($846.src=$846[$850]=$851));
		 };
		($833[$852] = $833[$placeChild$]($846,0,$833[$852]));
		$834 || ($853=imba_createElement('div',$833,`card-info ${$841}`,null));
		$834 || ($854=imba_createElement('div',$853,`card-title ${$841}`,null));
		($855=$833[$856]) || ($833[$856]=$855=imba_createElement('h2',$854,`${$841}`,null));
		($857=this.collection.title,$857===$833[$858] || $855.text$(String($833[$858]=$857)));
		;
		($859=$833[$860]) || ($833[$860]=$859=imba_createElement('span',$854,`progress-percent ${$841}`,null));
		($861=Math.floor((state.learning_data.collection_learned_usage[this.id] / this.collection.word_usage_count_sum) * 1000) / 10,($861===$833[$863]&&$834) || ($833[$862] = $859[$placeChild$]($833[$863]=$861,128,$833[$862])));
		$834 || $859[$placeChild$]("%");
		;
		;
		($866=$867=1,$864=$833[$865]) || ($866=$867=0,$833[$865]=$864=imba_createComponent(ProgressBar,$853,`l0cop9-jq ${$841}`,null));
		($869=state.learning_data.collection_progress[this.id],$869===$833[$868] || ($864.progress=$833[$868]=$869));
		$866 || !$864.setup || $864.setup($867);
		$864[$afterVisit$]($867);
		$866 || $853[$appendChild$]($864);
		;
		($870=$833[$871]) || ($833[$871]=$870=imba_createLiveFragment(4352,$853));
		(imba_renderContext.context=($833[$874] || ($833[$874]={_:$870})),$872=LOG(state.learning_data.collection_progress[state.collection]),imba_renderContext.context=null,($872===$833[$875]&&$834) || ($833[$873] = $870[$placeChild$]($833[$875]=$872,0,$833[$873])));
		;
		;
		$833[$afterReconcile$]($835);
		return $833;
	}
	static {
		register$(this,c$26,'collection-card',2);
		imba_defineTag('collection-card',this,{cssns: 'l0cop9_ji',cssid: 'l0cop9-ji'});
	}
};

// CARD[epic=CARD, seq=29] SellCard
let c$27 = Symbol();
class SellCard extends imba_Component {
	
	
	// css .benefits
	render(){
		var $876, $877, $878, $880, $882, $885, $886, $888, $891, $892, $895, $896, $897, $900, $901, $902, $903, $907;
		$876=this;
		$876[$beforeReconcile$]();
		($877=$878=1,$876[$879] === 1) || ($877=$878=0,$876[$879]=1);
		((!$877||$878&2) && $876.flagSelf$('card'));
		($880=$876[$881]) || ($876[$881]=$880=imba_createElement('span',$876,'pill l0cop9_js',null));
		($882=this.name,($882===$876[$884]&&$877) || ($876[$883] = $880[$placeChild$]($876[$884]=$882,384,$876[$883])));
		;
		$877 || ($885=imba_createElement('div',$876,'price l0cop9_js',null));
		($886=$876[$887]) || ($876[$887]=$886=imba_createElement('span',$885,'num l0cop9_js',null));
		$877 || $886[$placeChild$]("$");
		($888=this.price,($888===$876[$890]&&$877) || ($876[$889] = $886[$placeChild$]($876[$890]=$888,256,$876[$889])));
		;
		$877 || ($891=imba_createElement('span',$885,'text l0cop9_js'," lifetime"));
		;
		;
		($892=$876[$893]) || ($876[$893]=$892=imba_createElement('ul',$876,'benefits l0cop9_js',null));
		($895 = $876[$894]) || ($876[$894]=$895=imba_createIndexedList(384,$892));
		$896 = 0;
		$897=$895.$;
		for (let $898 = 0, $899 = iterable$(this.benefits), $906 = $899.length; $898 < $906; $898++) {
			let item = $899[$898];
			($901=$902=1,$900=$897[$896]) || ($901=$902=0,$897[$896]=$900=imba_createElement('li',$895,'l0cop9_js',null));
			$901||($900[$$up$]=$895);
			($903=item,($903===$900[$905]&&$901) || ($900[$904] = $900[$placeChild$]($900[$905]=$903,384,$900[$904])));
			$896++;
			
		};$895[$afterVisit$]($896);;
		;
		$877 || ($907=imba_createElement('div',$876,'button l0cop9_js',"Get Started"));
		;
		$876[$afterReconcile$]($878);
		return $876;
	}
	static {
		register$(this,c$27,'SellCard',2);
		imba_defineTag('sell-card-l0cop9-kb',this,{cssns: 'l0cop9_js',cssid: 'l0cop9-js',name: 'SellCard'});
	}
};

// CARD[epic=CARD, seq=30] WordBar
let c$28 = Symbol();
class WordBar extends imba_Component {
	get $fit2(){
		let el=imba_createElement('a',null,'fit khmer l0cop9_kc $fit2',null);
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
		var $920, $929, $930, $908, $909, $910, $912, $914, $915, $917, $922, $923, $925, $927, $928, $932, $933, $935, $936, $937, $941, $942, $944, $945, $947, $948, $949, $953, $954, $955, $959, $960, $963, $965, $966, $969, $970, $972, $973, $976;
		{$908=this;
		$908[$beforeReconcile$]();
		($909=$910=1,$908[$911] === 1) || ($909=$910=0,$908[$911]=1);
		let vida = dictionary[state.active_word]?.vida;
		let vida_auto = dictionary[state.active_word]?.vida_auto;
		let ipa = dictionary[state.active_word]?.ipa;
		($914=$915=1,$912=$908[$913]) || ($914=$915=0,$908[$913]=($912=this.$fit2,$912[$$up$]=$908,$912));
		$914 || ($912.title="Click to search this word on sealang.net dictionary.");
		($917=("http://sealang.net/api/api.pl?query=" + (state.active_word) + "&service=dictionary"),$917===$908[$916] || ($912.href=$908[$916]=$917));
		$914 || ($912.target="_blank");
		($917=state.active_word,($917===$908[$919]&&$914) || ($908[$918] = $912[$placeChild$]($908[$919]=$917,384,$908[$918])));
		$914 || $908[$appendChild$]($912);
		;
		$920 = null;
		if (audio.hasOwnProperty(state.active_word)) {
			($922=$923=1,$920=$908[$921]) || ($922=$923=0,$908[$921]=$920=imba_createComponent(AudioPlayer,null,'l0cop9_kc',null));
			$922||($920[$$up$]=$908);
			$922 || !$920.setup || $920.setup($923);
			$920[$afterVisit$]($923);
			
		};
		($908[$924] = $908[$placeChild$]($920,0,$908[$924]));
		($927=$928=1,$925=$908[$926]) || ($927=$928=0,$908[$926]=$925=imba_createElement('div',$908,'l0cop9-kg phonetic-wrapper l0cop9_kc',null));
		$927 || ($925.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$929 = $930 = null;
		if (state.ipa) {
			($932=$933=1,$929=$908[$931]) || ($932=$933=0,$908[$931]=$929=imba_createElement('span',null,'l0cop9-kh l0cop9_kc',"ipa"));
			$932||($929[$$up$]=$925);
			
			if (ipa) {
				($935=$936=1,$930=$908[$934]) || ($935=$936=0,$908[$934]=$930=imba_createElement('div',null,'phonetic l0cop9_kc',null));
				$935||($930[$$up$]=$925);
				($937=ipa,($937===$930[$939]&&$935) || ($930[$938] = $930[$placeChild$]($930[$939]=$937,384,$930[$938])));
				
			} else {
				($941=$942=1,$930=$908[$940]) || ($941=$942=0,$908[$940]=$930=imba_createElement('div',null,'l0cop9-kj phonetic l0cop9_kc',"ipa coming soon"));
				$941||($930[$$up$]=$925);
				
			};
		} else {
			($944=$945=1,$929=$908[$943]) || ($944=$945=0,$908[$943]=$929=imba_createElement('span',null,'l0cop9-kk l0cop9_kc',"vida"));
			$944||($929[$$up$]=$925);
			
			if (vida) {
				($947=$948=1,$930=$908[$946]) || ($947=$948=0,$908[$946]=$930=imba_createElement('div',null,'phonetic l0cop9_kc',null));
				$947||($930[$$up$]=$925);
				($949=vida,($949===$930[$951]&&$947) || ($930[$950] = $930[$placeChild$]($930[$951]=$949,384,$930[$950])));
				
			} else if (vida_auto) {
				($953=$954=1,$930=$908[$952]) || ($953=$954=0,$908[$952]=$930=imba_createElement('div',null,'phonetic l0cop9_kc',null));
				$953||($930[$$up$]=$925);
				($955=vida_auto,($955===$930[$957]&&$953) || ($930[$956] = $930[$placeChild$]($930[$957]=$955,384,$930[$956])));
				
			} else {
				($959=$960=1,$930=$908[$958]) || ($959=$960=0,$908[$958]=$930=imba_createElement('div',null,'l0cop9-kn phonetic l0cop9_kc',"request"));
				$959||($930[$$up$]=$925);
				
			};
		};
		($908[$961] = $925[$placeChild$]($929,0,$908[$961]));
		($908[$962] = $925[$placeChild$]($930,0,$908[$962]));
		;
		($965=$966=1,$963=$908[$964]) || ($965=$966=0,$908[$964]=$963=imba_createElement('div',$908,'switch-wrapper l0cop9_kc',null));
		($969=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$969===$908[$968]||($966|=2,$908[$968]=$969));
		$965 || ($963.on$(`click`,{$_: [function(e,$$) {
			return api.toggleLearned(state.active_word);
		}]},this));
		($966&2 && $963.flag$('switch-wrapper l0cop9_kc'+' '+($908[$968] ? `learned` : '')));
		($972=$973=1,$970=$908[$971]) || ($972=$973=0,$908[$971]=$970=imba_createElement('div',$963,'switch l0cop9_kc',"learned"));
		($976=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$976===$908[$975]||($973|=2,$908[$975]=$976));
		($973&2 && $970.flag$('switch l0cop9_kc'+' '+($908[$975] ? `learned` : '')));
		;
		;
		$908[$afterReconcile$]($910);
		return $908;
		};
	}
	static {
		register$(this,c$28,'WordBar',2);
		imba_defineTag('word-bar-l0cop9-kq',this,{cssns: 'l0cop9_kc',cssid: 'l0cop9-kc',name: 'WordBar'});
	}
};
let c$29 = Symbol();
class WordCard extends imba_Component {
	get $fit(){
		let el=imba_createElement('a',null,'fit khmer l0cop9_kr $fit',null);
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
		var $993, $994, $1041, $977, $978, $979, $981, $983, $984, $986, $989, $991, $992, $996, $997, $999, $1000, $1001, $1005, $1006, $1008, $1009, $1011, $1012, $1013, $1017, $1018, $1019, $1023, $1024, $1027, $1029, $1030, $1033, $1034, $1036, $1037, $1040, $1043, $1044;
		{$977=this;
		$977[$beforeReconcile$]();
		($978=$979=1,$977[$980] === 1) || ($978=$979=0,$977[$980]=1);
		let vida = dictionary[state.active_word]?.vida;
		let vida_auto = dictionary[state.active_word]?.vida_auto;
		let ipa = dictionary[state.active_word]?.ipa;
		($983=$984=1,$981=$977[$982]) || ($983=$984=0,$977[$982]=($981=this.$fit,$981[$$up$]=$977,$981));
		$983 || ($981.title="Click to search this word on sealang.net dictionary.");
		($986=("http://sealang.net/api/api.pl?query=" + (state.active_word) + "&service=dictionary"),$986===$977[$985] || ($981.href=$977[$985]=$986));
		$983 || ($981.target="_blank");
		($986=state.active_word,($986===$977[$988]&&$983) || ($977[$987] = $981[$placeChild$]($977[$988]=$986,384,$977[$987])));
		$983 || $977[$appendChild$]($981);
		;
		($991=$992=1,$989=$977[$990]) || ($991=$992=0,$977[$990]=$989=imba_createElement('div',$977,'l0cop9-ku phonetic-wrapper l0cop9_kr',null));
		$991 || ($989.on$(`click`,{$_: [function(e,$$) {
			return api.toggleIpa();
		}]},this));
		$993 = $994 = null;
		if (state.ipa) {
			($996=$997=1,$993=$977[$995]) || ($996=$997=0,$977[$995]=$993=imba_createElement('span',null,'l0cop9-kv l0cop9_kr',"ipa"));
			$996||($993[$$up$]=$989);
			
			if (ipa) {
				($999=$1000=1,$994=$977[$998]) || ($999=$1000=0,$977[$998]=$994=imba_createElement('div',null,'phonetic l0cop9_kr',null));
				$999||($994[$$up$]=$989);
				($1001=ipa,($1001===$994[$1003]&&$999) || ($994[$1002] = $994[$placeChild$]($994[$1003]=$1001,384,$994[$1002])));
				
			} else {
				($1005=$1006=1,$994=$977[$1004]) || ($1005=$1006=0,$977[$1004]=$994=imba_createElement('div',null,'l0cop9-kx phonetic l0cop9_kr',"unavailable"));
				$1005||($994[$$up$]=$989);
				
			};
		} else {
			($1008=$1009=1,$993=$977[$1007]) || ($1008=$1009=0,$977[$1007]=$993=imba_createElement('span',null,'l0cop9-ky l0cop9_kr',"vida"));
			$1008||($993[$$up$]=$989);
			
			if (vida) {
				($1011=$1012=1,$994=$977[$1010]) || ($1011=$1012=0,$977[$1010]=$994=imba_createElement('div',null,'phonetic l0cop9_kr',null));
				$1011||($994[$$up$]=$989);
				($1013=vida,($1013===$994[$1015]&&$1011) || ($994[$1014] = $994[$placeChild$]($994[$1015]=$1013,384,$994[$1014])));
				
			} else if (vida_auto) {
				($1017=$1018=1,$994=$977[$1016]) || ($1017=$1018=0,$977[$1016]=$994=imba_createElement('div',null,'phonetic l0cop9_kr',null));
				$1017||($994[$$up$]=$989);
				($1019=vida_auto,($1019===$994[$1021]&&$1017) || ($994[$1020] = $994[$placeChild$]($994[$1021]=$1019,384,$994[$1020])));
				
			} else {
				($1023=$1024=1,$994=$977[$1022]) || ($1023=$1024=0,$977[$1022]=$994=imba_createElement('div',null,'phonetic l0cop9_kr',"unavailable"));
				$1023||($994[$$up$]=$989);
				
			};
		};
		($977[$1025] = $989[$placeChild$]($993,0,$977[$1025]));
		($977[$1026] = $989[$placeChild$]($994,0,$977[$1026]));
		;
		($1029=$1030=1,$1027=$977[$1028]) || ($1029=$1030=0,$977[$1028]=$1027=imba_createElement('div',$977,'switch-wrapper l0cop9_kr',null));
		($1033=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$1033===$977[$1032]||($1030|=2,$977[$1032]=$1033));
		$1029 || ($1027.on$(`click`,{$_: [function(e,$$) {
			return api.toggleLearned(state.active_word);
		}]},this));
		($1030&2 && $1027.flag$('switch-wrapper l0cop9_kr'+' '+($977[$1032] ? `learned` : '')));
		($1036=$1037=1,$1034=$977[$1035]) || ($1036=$1037=0,$977[$1035]=$1034=imba_createElement('div',$1027,'switch l0cop9_kr',"learned"));
		($1040=(state.user_learned.hasOwnProperty(state.active_word)||undefined),$1040===$977[$1039]||($1037|=2,$977[$1039]=$1040));
		($1037&2 && $1034.flag$('switch l0cop9_kr'+' '+($977[$1039] ? `learned` : '')));
		;
		;
		$1041 = null;
		if (audio.hasOwnProperty(state.active_word)) {
			($1043=$1044=1,$1041=$977[$1042]) || ($1043=$1044=0,$977[$1042]=$1041=imba_createComponent(AudioPlayer,null,'l0cop9_kr',null));
			$1043||($1041[$$up$]=$977);
			$1043 || !$1041.setup || $1041.setup($1044);
			$1041[$afterVisit$]($1044);
			
		};
		($977[$1045] = $977[$placeChild$]($1041,0,$977[$1045]));
		$977[$afterReconcile$]($979);
		return $977;
		};
	}
	static {
		register$(this,c$29,'WordCard',2);
		imba_defineTag('word-card-l0cop9-lf',this,{cssns: 'l0cop9_kr',cssid: 'l0cop9-kr',name: 'WordCard'});
	}
};

let c$30 = Symbol();
class AudioPlayer extends imba_Component {
	get $track(){
		let el=imba_createElement('audio',null,'$track',null);
		return (Object.defineProperty(this,'$track',{value:el}),el);
	}
	render(){
		var self = this, $1058, $1046, $1047, $1048, $1050, $1052, $1053, $1055, $1056, $1060, $1061, $1062, $1063, $1065, $1066, $1067, $1068;
		{$1046=this;
		$1046[$beforeReconcile$]();
		($1047=$1048=1,$1046[$1049] === 1) || ($1047=$1048=0,$1046[$1049]=1);
		let word = "";
		if (this.manual) {
			word = this.manual;
		} else {
			word = state.active_word;
		};
		($1052=$1053=1,$1050=$1046[$1051]) || ($1052=$1053=0,$1046[$1051]=($1050=this.$track,$1050[$$up$]=$1046,$1050));
		$1052 || ($1050.on$(`ended`,{commit: true},this));
		($1055=audio[word],$1055===$1046[$1054] || ($1050.src=$1046[$1054]=$1055));
		$1052 || ($1050.type="audio/mpeg");
		$1052 || ($1050.preload="auto");
		$1052 || $1046[$appendChild$]($1050);
		;
		($1056=$1046[$1057]) || ($1046[$1057]=$1056=imba_createElement('div',$1046,'l0cop9-li button-wrapper',null));
		$1058 = null;
		if (this.$track.paused) { // when paused
			($1060=$1061=1,$1058=$1046[$1059]) || ($1060=$1061=0,$1046[$1059]=$1058=imba_createElement('div',null,'l0cop9-lj play-audio',null));
			$1060||($1058[$$up$]=$1056);
			$1060 || ($1058.on$(`hotkey`,{options: ['space|a']},this));
			$1060 || ($1058.on$(`click`,{$_: [function(e,$$) {
				return self.$track.play(e);
			}]},this));
			$1060 || ($1062=imba_createSVGElement('svg',$1058,'l0cop9-lk',null));
			$1060 || ($1062.set$('stroke-width',"1.5"));
			$1060 || ($1062.set$('viewBox',"0 0 24 24"));
			$1060 || ($1062.set$('fill',"none"));
			$1060 || ($1062.set$('xmlns',"http://www.w3.org/2000/svg"));
			$1060 || ($1062.set$('color',"#000000"));
			$1060 || ($1063=imba_createSVGElement('path',$1062,'l0cop9-ll',null));
			$1060 || ($1063.set$('d',"M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z"));
			$1060 || ($1063.set$('stroke',"#000000"));
			$1060 || ($1063.set$('stroke-width',"1.5"));
			$1060 || ($1063.set$('stroke-linecap',"round"));
			$1060 || ($1063.set$('stroke-linejoin',"round"));
			;
			;
		} else { // when playing
			($1065=$1066=1,$1058=$1046[$1064]) || ($1065=$1066=0,$1046[$1064]=$1058=imba_createElement('div',null,'l0cop9-lm play-audio',null));
			$1065||($1058[$$up$]=$1056);
			$1065 || ($1058.on$(`hotkey`,{options: ['space']},this));
			$1065 || ($1058.on$(`click`,{$_: [function(e,$$) {
				return self.$track.pause(e);
			}]},this));
			$1065 || ($1067=imba_createSVGElement('svg',$1058,'l0cop9-ln',null));
			$1065 || ($1067.set$('stroke-width',"1.5"));
			$1065 || ($1067.set$('fill',"none"));
			$1065 || ($1067.set$('xmlns',"http://www.w3.org/2000/svg"));
			$1065 || ($1067.set$('color',"#000"));
			$1065 || ($1067.set$('viewBox',"0 0 24 24"));
			$1065 || ($1068=imba_createSVGElement('path',$1067,'l0cop9-lo',null));
			$1065 || ($1068.set$('d',"M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6z"));
			;
			;
		};
		($1046[$1069] = $1056[$placeChild$]($1058,0,$1046[$1069]));
		;
		$1046[$afterReconcile$]($1048);
		return $1046;
		};
	}
	static {
		register$(this,c$30,'AudioPlayer',2);
		imba_defineTag('audio-player-l0cop9-lp',this,{name: 'AudioPlayer'});
	}
};
// CARD[epic=CARD, seq=31] DefinitionCard
let c$31 = Symbol();
class DefinitionCard extends imba_Component {
	render(){
		var $1074, $1075, $1070, $1071, $1072, $1077, $1078, $1080, $1081, $1083, $1084, $1085, $1088, $1089, $1090, $1091, $1093, $1097, $1099, $1105, $1106, $1108, $1109, $1112, $1113, $1114, $1115;
		{$1070=this;
		$1070[$beforeReconcile$]();
		($1071=$1072=1,$1070[$1073] === 1) || ($1071=$1072=0,$1070[$1073]=1);
		let word_object = dictionary[state.active_word];
		$1074 = $1075 = null;
		if (!(is$(word_object.def,false))) {
			($1077=$1078=1,$1074=$1070[$1076]) || ($1077=$1078=0,$1070[$1076]=$1074=imba_createElement('h2',null,null,"Definition"));
			$1077||($1074[$$up$]=$1070);
			
			($1080=$1081=1,$1075=$1070[$1079]) || ($1080=$1081=0,$1070[$1079]=$1075=imba_createElement('ol',null,null,null));
			$1080||($1075[$$up$]=$1070);
			($1083 = $1075[$1082]) || ($1075[$1082]=$1083=imba_createIndexedList(384,$1075));
			$1084 = 0;
			$1085=$1083.$;
			for (let $1086 = 0, $1087 = iterable$(word_object.def), $1103 = $1087.length; $1086 < $1103; $1086++) {
				let item = $1087[$1086];
				let line = item.split('=');
				let use = line[0];
				let translations = line[1].split('|');
				($1089=$1090=1,$1088=$1085[$1084]) || ($1089=$1090=0,$1085[$1084]=$1088=imba_createElement('li',$1083,null,null));
				$1089||($1088[$$up$]=$1083);
				($1091=$1088[$1092]) || ($1088[$1092]=$1091=imba_createElement('span',$1088,'use',null));
				(imba_renderContext.context=($1088[$1095] || ($1088[$1095]={_:$1091})),$1093=use.toUpperCase(),imba_renderContext.context=null,($1093===$1088[$1096]&&$1089) || ($1088[$1094] = $1091[$placeChild$]($1088[$1096]=$1093,128,$1088[$1094])));
				$1089 || $1091[$placeChild$](" ");
				;
				($1097=$1088[$1098]) || ($1088[$1098]=$1097=imba_createElement('span',$1088,'def',null));
				(imba_renderContext.context=($1088[$1101] || ($1088[$1101]={_:$1097})),$1099=translations.join(', '),imba_renderContext.context=null,($1099===$1088[$1102]&&$1089) || ($1088[$1100] = $1097[$placeChild$]($1088[$1102]=$1099,384,$1088[$1100])));
				;
				$1084++;
			};$1083[$afterVisit$]($1084);;
		} else {
			($1105=$1106=1,$1074=$1070[$1104]) || ($1105=$1106=0,$1070[$1104]=$1074=imba_createElement('h2',null,null,"Google Definition"));
			$1105||($1074[$$up$]=$1070);
			
			($1075 = $1070[$1107]) || ($1070[$1107]=$1075=imba_createIndexedList(0,null));
			$1075[$$up$] = $1070;
			$1108 = 0;
			$1109=$1075.$;
			for (let $1110 = 0, $1111 = iterable$(dictionary[state.active_word].google.split('|')), $1118 = $1111.length; $1110 < $1118; $1110++) {
				let defi = $1111[$1110];
				($1113=$1114=1,$1112=$1109[$1108]) || ($1113=$1114=0,$1109[$1108]=$1112=imba_createElement('p',$1075,null,null));
				$1113||($1112[$$up$]=$1075);
				($1115=defi,($1115===$1112[$1117]&&$1113) || ($1112[$1116] = $1112[$placeChild$]($1112[$1117]=$1115,384,$1112[$1116])));
				$1108++;
				
			};$1075[$afterVisit$]($1108);
		};
		($1070[$1119] = $1070[$placeChild$]($1074,0,$1070[$1119]));
		($1070[$1120] = $1070[$placeChild$]($1075,0,$1070[$1120]));
		$1070[$afterReconcile$]($1072);
		return $1070;
		};
	}
	static {
		register$(this,c$31,'DefinitionCard',2);
		imba_defineTag('definition-card-l0cop9-ly',this,{name: 'DefinitionCard'});
	}
};

// CARD[epic=CARD, seq=32] ShortcutCard
let c$32 = Symbol();
class ShortcutCard extends imba_Component {
	
	render(){
		var $1121, $1122, $1123, $1125, $1126, $1127, $1128, $1129, $1130, $1131, $1132, $1133, $1134, $1135, $1136, $1137, $1138, $1139, $1140, $1141, $1142, $1143, $1144, $1145, $1146, $1147, $1148, $1149, $1150, $1151, $1152, $1153, $1154, $1155, $1156, $1157, $1158, $1159, $1160, $1161, $1162, $1163, $1164, $1165, $1166, $1167, $1168, $1169;
		$1121=this;
		$1121[$beforeReconcile$]();
		($1122=$1123=1,$1121[$1124] === 1) || ($1122=$1123=0,$1121[$1124]=1);
		((!$1122||$1123&2) && $1121.flagSelf$('shortcuts card'));
		$1122 || ($1125=imba_createElement('h2',$1121,'l0cop9_lz',"Shortcuts"));
		;
		$1122 || ($1126=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1127=imba_createElement('span',$1126,'key-text l0cop9_lz',"Toggle learned"));
		;
		$1122 || ($1128=imba_createElement('span',$1126,'key-wrapper l0cop9_lz',null));
		$1122 || ($1129=imba_createElement('span',$1128,'key l0cop9_lz',"s"));
		;
		$1122 || ($1130=imba_createElement('span',$1128,'key l0cop9_lz',"enter"));
		;
		$1122 || ($1131=imba_createElement('span',$1128,'key l0cop9_lz',"hold 1s"));
		;
		;
		;
		$1122 || ($1132=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1133=imba_createElement('span',$1132,'key-text l0cop9_lz',"Play audio "));
		;
		$1122 || ($1134=imba_createElement('span',$1132,'key-wrapper l0cop9_lz',null));
		$1122 || ($1135=imba_createElement('span',$1134,'key l0cop9_lz',"a"));
		;
		$1122 || ($1136=imba_createElement('span',$1134,'key l0cop9_lz',"space"));
		;
		$1122 || ($1137=imba_createElement('span',$1134,'key l0cop9_lz',"dbl tap"));
		;
		;
		;
		$1122 || ($1138=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1139=imba_createElement('span',$1138,'key-text l0cop9_lz',"Previous lesson"));
		;
		$1122 || ($1140=imba_createElement('span',$1138,'key-wrapper horizontal l0cop9_lz',null));
		$1122 || ($1141=imba_createElement('span',$1140,'key l0cop9_lz',"e"));
		;
		$1122 || ($1142=imba_createElement('span',$1140,'key l0cop9_lz',"↑"));
		;
		;
		;
		$1122 || ($1143=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1144=imba_createElement('span',$1143,'key-text l0cop9_lz',"Next lesson"));
		;
		$1122 || ($1145=imba_createElement('span',$1143,'key-wrapper horizontal l0cop9_lz',null));
		$1122 || ($1146=imba_createElement('span',$1145,'key l0cop9_lz',"r"));
		;
		$1122 || ($1147=imba_createElement('span',$1145,'key l0cop9_lz',"↓"));
		;
		;
		;
		$1122 || ($1148=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1149=imba_createElement('span',$1148,'key-text l0cop9_lz',"Previous word"));
		;
		$1122 || ($1150=imba_createElement('span',$1148,'key-wrapper horizontal l0cop9_lz',null));
		$1122 || ($1151=imba_createElement('span',$1150,'key l0cop9_lz',"d"));
		;
		$1122 || ($1152=imba_createElement('span',$1150,'key l0cop9_lz',"←"));
		;
		;
		;
		$1122 || ($1153=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1154=imba_createElement('span',$1153,'key-text l0cop9_lz',"Next word"));
		;
		$1122 || ($1155=imba_createElement('span',$1153,'key-wrapper horizontal l0cop9_lz',null));
		$1122 || ($1156=imba_createElement('span',$1155,'key l0cop9_lz',"f"));
		;
		$1122 || ($1157=imba_createElement('span',$1155,'key l0cop9_lz',"→"));
		;
		;
		;
		$1122 || ($1158=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1159=imba_createElement('span',$1158,'key-text l0cop9_lz',"Toggle dark mode"));
		;
		$1122 || ($1160=imba_createElement('span',$1158,'key-wrapper horizontal l0cop9_lz',null));
		$1122 || ($1161=imba_createElement('span',$1160,'key l0cop9_lz',"shift & d"));
		;
		;
		;
		$1122 || ($1162=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1163=imba_createElement('span',$1162,'key-text l0cop9_lz',"Change phonetics system"));
		;
		$1122 || ($1164=imba_createElement('span',$1162,'key-wrapper l0cop9_lz',null));
		$1122 || ($1165=imba_createElement('span',$1164,'key l0cop9_lz',"v"));
		;
		$1122 || ($1166=imba_createElement('span',$1164,'key l0cop9_lz',"shift & i"));
		;
		;
		;
		$1122 || ($1167=imba_createElement('div',$1121,'shortcut-wrapper l0cop9_lz',null));
		$1122 || ($1168=imba_createElement('span',$1167,'key-text l0cop9_lz',"Clear all progres. Refresh browser after"));
		;
		$1122 || ($1169=imba_createElement('span',$1167,'key l0cop9_lz',"shift & c & l"));
		;
		;
		$1121[$afterReconcile$]($1123);
		return $1121;
	}
	static {
		register$(this,c$32,'ShortcutCard',2);
		imba_defineTag('shortcut-card-l0cop9-nu',this,{cssns: 'l0cop9_lz',name: 'ShortcutCard'});
	}
};
let c$33 = Symbol();
class SpellingCard extends imba_Component {
	
	render(){
		var $1199, $1170, $1171, $1172, $1174, $1176, $1177, $1178, $1181, $1182, $1183, $1184, $1186, $1187, $1190, $1193, $1195, $1197, $1201, $1202, $1203, $1207, $1208, $1209;
		{$1170=this;
		$1170[$beforeReconcile$]();
		($1171=$1172=1,$1170[$1173] === 1) || ($1171=$1172=0,$1170[$1173]=1);
		$1171 || ($1174=imba_createElement('h2',$1170,'l0cop9_nv',"Word Spelling"));
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
		($1176 = $1170[$1175]) || ($1170[$1175]=$1176=imba_createIndexedList(256,$1170));
		$1177 = 0;
		$1178=$1176.$;
		for (let $1179 = 0, $1180 = iterable$(groups), $1213 = $1180.length; $1179 < $1213; $1179++) {
			let item = $1180[$1179];
			let cluster = clusters[item];
			let vowel = item.match(/[ា-៑]/);
			($1182=$1183=1,$1181=$1178[$1177]) || ($1182=$1183=0,$1178[$1177]=$1181=imba_createElement('div',$1176,'letter-row l0cop9_nv',null));
			$1182||($1181[$$up$]=$1176);
			($1186=$1187=1,$1184=$1181[$1185]) || ($1186=$1187=0,$1181[$1185]=$1184=imba_createElement('span',$1181,'letter l0cop9_nv',null));
			($1190=cluster?.type,$1190===$1181[$1189]||($1187|=2,$1181[$1189]=$1190));
			($1187&2 && $1184.flag$('letter l0cop9_nv'+' '+($1181[$1189]||'')));
			($1190=item,($1190===$1181[$1192]&&$1186) || ($1181[$1191] = $1184[$placeChild$]($1181[$1192]=$1190,384,$1181[$1191])));
			;
			($1193=$1181[$1194]) || ($1181[$1194]=$1193=imba_createElement('span',$1181,'vida l0cop9_nv',null));
			($1195=$1181[$1196]) || ($1181[$1196]=$1195=imba_createElement('span',$1193,'l0cop9_nv',null));
			($1197=cluster?.vida[0],$1197===$1181[$1198] || $1195.text$(String($1181[$1198]=$1197)));
			;
			$1199 = null;
			if (vowel) {
				($1201=$1202=1,$1199=$1181[$1200]) || ($1201=$1202=0,$1181[$1200]=$1199=imba_createElement('span',null,'l0cop9_nv',null));
				$1201||($1199[$$up$]=$1193);
				$1201 || $1199[$placeChild$]("|");
				($1203=cluster?.vida[1],($1203===$1199[$1205]&&$1201) || ($1199[$1204] = $1199[$placeChild$]($1199[$1205]=$1203,256,$1199[$1204])));
				
			} else {
				($1207=$1208=1,$1199=$1181[$1206]) || ($1207=$1208=0,$1181[$1206]=$1199=imba_createElement('span',null,'l0cop9_nv',null));
				$1207||($1199[$$up$]=$1193);
				$1207 || $1199[$placeChild$]("(");
				($1209=cluster?.vida[1],($1209===$1199[$1211]&&$1207) || ($1199[$1210] = $1199[$placeChild$]($1199[$1211]=$1209,0,$1199[$1210])));
				$1207 || $1199[$placeChild$](")");
				
			};
			($1181[$1212] = $1193[$placeChild$]($1199,0,$1181[$1212]));
			;
			$1177++;
		};$1176[$afterVisit$]($1177);;
		$1170[$afterReconcile$]($1172);
		return $1170;
		};
	}
	static {
		register$(this,c$33,'SpellingCard',2);
		imba_defineTag('spelling-card-l0cop9-oe',this,{cssns: 'l0cop9_nv',cssid: 'l0cop9-nv',name: 'SpellingCard'});
	}
};

// TAG[epic=NAV, seq=34] LessonNav
let c$34 = Symbol();
class LessonNav extends imba_Component {
	
	render(){
		var $1214, $1215, $1216, $1218, $1219, $1221, $1222, $1223, $1224, $1227, $1228, $1229, $1231, $1234, $1236, $1241, $1243, $1244, $1246, $1248, $1249, $1250, $1254, $1255, $1256, $1259;
		$1214=this;
		$1214[$beforeReconcile$]();
		($1215=$1216=1,$1214[$1217] === 1) || ($1215=$1216=0,$1214[$1217]=1);
		$1215 || ($1218=imba_createElement('div',$1214,'title-card l0cop9_of',null));
		($1221=$1222=1,$1219=$1214[$1220]) || ($1221=$1222=0,$1214[$1220]=$1219=imba_createElement('div',$1218,'icon-title l0cop9_of',null));
		$1223=$1219[$getRenderContext$]($1226);
		($1227=$1228=1,$1224=$1223.run(`i-${this.collection.icon}`)) || ($1227=$1228=0,$1223.cache($1224=imba_createDynamic($1223.value,$1219,'l0cop9-oj l0cop9_of',null)));
		if($1224[$isRichElement$]){
		((!$1227||$1228&2) && $1224.flags.reconcile($1225,'l0cop9-oj l0cop9_of'));
		$1227 || !$1224.setup || $1224.setup($1228);
		$1224[$afterVisit$]($1228);
		};
		($1224==$1219[$1225]) || (!$1219[$1225] && ($1219[$1225]=$1224)[$insertInto$]($1219)) || $1219[$1225][$replaceWith$]($1219[$1225]=$1224,$1219);
		;
		($1229=$1219[$1230]) || ($1219[$1230]=$1229=imba_createElement('h2',$1219,'l0cop9-ok l0cop9_of',null));
		($1231=this.collection.title,($1231===$1219[$1233]&&$1221) || ($1219[$1232] = $1229[$placeChild$]($1219[$1233]=$1231,384,$1219[$1232])));
		;
		$1221 || !$1219.setup || $1219.setup($1222);
		$1219[$afterVisit$]($1222);
		;
		($1234=$1214[$1235]) || ($1214[$1235]=$1234=imba_createElement('div',$1218,'usage_word_count l0cop9_of',null));
		($1236=state.learning_data.collection_learned_usage[state.collection],($1236===$1214[$1238]&&$1215) || ($1214[$1237] = $1234[$placeChild$]($1214[$1238]=$1236,128,$1214[$1237])));
		$1215 || $1234[$placeChild$]("/");
		($1236=this.collection.word_usage_count_sum,($1236===$1214[$1240]&&$1215) || ($1214[$1239] = $1234[$placeChild$]($1214[$1240]=$1236,0,$1214[$1239])));
		$1215 || $1234[$placeChild$](" words");
		;
		($1243=$1244=1,$1241=$1214[$1242]) || ($1243=$1244=0,$1214[$1242]=$1241=imba_createComponent(ProgressBar,$1218,'l0cop9-om l0cop9_of',null));
		($1246=state.learning_data.collection_progress[state.collection],$1246===$1214[$1245] || ($1241.progress=$1214[$1245]=$1246));
		$1243 || !$1241.setup || $1241.setup($1244);
		$1241[$afterVisit$]($1244);
		$1243 || $1218[$appendChild$]($1241);
		;
		;
		($1248 = $1214[$1247]) || ($1214[$1247]=$1248=imba_createIndexedList(256,$1214));
		$1249 = 0;
		$1250=$1248.$;
		for (let $1253 = collections_data.collections[state.collection].lessons, $1251 = 0, $1252 = Object.keys($1253), $1263 = $1252.length, id, lesson; $1251 < $1263; $1251++){
			id = $1252[$1251];lesson = $1253[id];($1255=$1256=1,$1254=$1250[$1249]) || ($1255=$1256=0,$1250[$1249]=$1254=imba_createComponent(LessonNavItem,$1248,'l0cop9_of',null));
			$1255||($1254[$$up$]=$1248);
			($1259=(id == state.lesson||undefined),$1259===$1254[$1258]||($1256|=2,$1254[$1258]=$1259));
			($1259=("/collection/" + (state.collection) + "/" + id + "/0/0"),$1259===$1254[$1260] || ($1254.routeΞto=$1254[$1260]=$1259));
			(id===$1254[$1261] || ($1254.id=$1254[$1261]=id));
			(lesson===$1254[$1262] || ($1254.lesson=$1254[$1262]=lesson));
			($1256&2 && $1254.flag$('l0cop9_of'+' '+($1254[$1258] ? `active` : '')));
			$1255 || !$1254.setup || $1254.setup($1256);
			$1254[$afterVisit$]($1256);
			$1249++;
			
		};$1248[$afterVisit$]($1249);;
		$1214[$afterReconcile$]($1216);
		return $1214;
	}
	static {
		register$(this,c$34,'LessonNav',2);
		imba_defineTag('lesson-nav-l0cop9-oo',this,{cssns: 'l0cop9_of',cssid: 'l0cop9-of',name: 'LessonNav'});
	}
};

// TAG[epic=NAV, seq=35] LessonNavItem
let c$35 = Symbol();
class LessonNavItem extends imba_Component {
	
	render(){
		var $1264, $1265, $1266, $1269, $1270, $1272, $1275, $1277, $1280, $1282, $1283, $1285;
		let progress = ("4/" + (this.lesson.word_usage_count_sum));
		{$1264=this;
		$1264[$beforeReconcile$]();
		($1265=$1266=1,$1264[$1267] === 1) || ($1265=$1266=0,$1264[$1267]=1);
		((!$1265||$1266&2) && $1264.flagSelf$('l0cop9-oq lesson-button'+' '+'`chapter_active`'));
		$1265 || ($1269=imba_createElement('div',$1264,'l0cop9-or chapter-text l0cop9_op',null));
		($1270=$1264[$1271]) || ($1264[$1271]=$1270=imba_createElement('div',$1269,'chapter-name l0cop9_op',null));
		($1272=this.lesson.title,($1272===$1264[$1274]&&$1265) || ($1264[$1273] = $1270[$placeChild$]($1264[$1274]=$1272,384,$1264[$1273])));
		;
		;
		let progress_string = ("" + (state.learning_data.lesson_learned_usage[state.collection][this.id]) + "/" + (this.lesson.word_usage_count_sum));
		($1275=$1264[$1276]) || ($1264[$1276]=$1275=imba_createElement('div',$1264,'l0cop9-ot chapter-number l0cop9_op',null));
		($1277=progress_string,($1277===$1264[$1279]&&$1265) || ($1264[$1278] = $1275[$placeChild$]($1264[$1279]=$1277,128,$1264[$1278])));
		$1265 || $1275[$placeChild$](" words");
		;
		($1282=$1283=1,$1280=$1264[$1281]) || ($1282=$1283=0,$1264[$1281]=$1280=imba_createComponent(ProgressBar,$1264,'color l0cop9_op',null));
		($1285=state.learning_data.lesson_progress[state.collection][this.id],$1285===$1264[$1284] || ($1280.progress=$1264[$1284]=$1285));
		$1282 || !$1280.setup || $1280.setup($1283);
		$1280[$afterVisit$]($1283);
		$1282 || $1264[$appendChild$]($1280);
		;
		$1264[$afterReconcile$]($1266);
		return $1264;
		};
	}
	static {
		register$(this,c$35,'LessonNavItem',2);
		imba_defineTag('lesson-nav-item-l0cop9-ov',this,{cssns: 'l0cop9_op',cssid: 'l0cop9-op',name: 'LessonNavItem'});
	}
};

// TAG[epic=NAV, seq=36] ChapterNav
let c$36 = Symbol();
class ChapterNav extends imba_Component {
	
	
	// Goes to the first verse of the next phrase
	nextPhrase(){
		if (this.phrase_index < this.last_phrase_index) {
			this.phrase_index++;
			this.word_index = 0;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	
	// Goes to the last word of hte previous phrase
	prevPhraseLast(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = this.phrases[this.phrase_index].khmer.split('|').length - 1;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	// Goes to the first word of the previous phrase
	prevPhraseZero(){
		if (this.phrase_index > 0) {
			this.phrase_index--;
			this.word_index = 0;
			return this.router.go(("/collection/" + this.collection_index + "/" + this.lesson_index + "/" + this.phrase_index + "/" + this.word_index));
		};
	}
	render(){
		var $1310, $1286, $1287, $1288, $1291, $1292, $1293, $1296, $1297, $1298, $1300, $1301, $1303, $1304, $1305, $1308;
		let phrases = collections_data.collections[state.collection].lessons[state.lesson].phrases;
		let progress = 0;
		$1286=this;
		$1286[$beforeReconcile$]();
		($1287=$1288=1,$1286[$1289] === 1) || ($1287=$1288=0,$1286[$1289]=1);
		($1291 = $1286[$1290]) || ($1286[$1290]=$1291=imba_createIndexedList(384,$1286));
		$1292 = 0;
		$1293=$1291.$;
		for (let $1294 = 0, $1295 = Object.keys(phrases), $1312 = $1295.length, id, phrase; $1294 < $1312; $1294++){
			id = $1295[$1294];phrase = phrases[id];{($1297=$1298=1,$1296=$1293[$1292]) || ($1297=$1298=0,$1293[$1292]=$1296=imba_createElement('div',$1291,'number-toggle l0cop9_ow',null));
			$1297||($1296[$$up$]=$1291);
			($1300=("/collection/" + (state.collection) + "/" + (state.lesson) + "/" + id + "/0"),$1300===$1296[$1299] || ($1296.routeΞto=$1296[$1299]=$1300));
			let isActive = is$(state.phrase,id);
			let progress = state.learning_data.phrase_progress[state.collection][state.lesson][id];
			($1303=$1304=1,$1301=$1296[$1302]) || ($1303=$1304=0,$1296[$1302]=$1301=imba_createComponent(ElemProgressRing,$1296,'l0cop9_ow',null));
			$1305 = $1301[$getSlot$]('__',$1296);
			($1308=(isActive||undefined),$1308===$1296[$1307]||($1304|=2,$1296[$1307]=$1308));
			(progress===$1296[$1309] || ($1301.progress=$1296[$1309]=progress));
			$1303 || ($1301.size=30);
			($1304&2 && $1301.flag$('l0cop9_ow'+' '+($1296[$1307] ? `active` : '')));
			$1310 = null;
			if (id === 0) {
				($1310="t");
			} else {
				($1310=id);
			};
			($1296[$1311] = $1305[$placeChild$]($1310,0,$1296[$1311]));
			$1303 || !$1301.setup || $1301.setup($1304);
			$1301[$afterVisit$]($1304);
			$1303 || $1296[$appendChild$]($1301);
			;
			$1297 || !$1296.setup || $1296.setup($1298);
			$1296[$afterVisit$]($1298);
			$1292++;
			};
		};$1291[$afterVisit$]($1292);;
		$1286[$afterReconcile$]($1288);
		return $1286;
	}
	static {
		register$(this,c$36,'ChapterNav',2);
		imba_defineTag('chapter-nav-l0cop9-pa',this,{cssns: 'l0cop9_ow',cssid: 'l0cop9-ow',name: 'ChapterNav'});
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
		var $1313, $1314, $1315, $1317 = this._ns_ || '', $1318, $1319, $1320, $1321, $1322, $1323, $1324, $1325, $1326, $1327, $1328, $1329, $1330, $1331, $1332, $1333, $1335, $1336;
		$1313=this;
		$1313[$beforeReconcile$]();
		($1314=$1315=1,$1313[$1316] === 1) || ($1314=$1315=0,$1313[$1316]=1);
		$1314 || ($1318=imba_createElement('div',$1313,`l0cop9-pd ${$1317}`,null));
		$1314 || ($1319=imba_createElement('div',$1318,`card ${$1317}`,null));
		$1314 || ($1320=imba_createElement('form',$1319,`form ${$1317}`,null));
		$1314 || ($1320.action="#");
		$1314 || ($1320.method="POST");
		$1314 || ($1321=imba_createElement('div',$1320,`field-wrapper ${$1317}`,null));
		$1314 || ($1322=imba_createElement('label',$1321,`${$1317}`,"Email Address"));
		$1314 || ($1322.set$('for',"email"));
		;
		$1314 || ($1323=imba_createElement('input',$1321,`field email ${$1317}`,null));
		$1314 || ($1323.name="email");
		$1314 || ($1323.set$('autocomplete',"email"));
		$1314 || ($1323.required="");
		;
		;
		$1314 || ($1324=imba_createElement('div',$1320,`field-wrapper ${$1317}`,null));
		$1314 || ($1325=imba_createElement('label',$1324,`${$1317}`,"Password"));
		$1314 || ($1325.set$('for',"password"));
		;
		$1314 || ($1326=imba_createElement('input',$1324,`field email ${$1317}`,null));
		$1314 || ($1326.name="password");
		$1314 || ($1326.set$('autocomplete',"username"));
		$1314 || ($1326.required="");
		;
		;
		$1314 || ($1327=imba_createElement('div',$1320,`options ${$1317}`,null));
		$1314 || ($1328=imba_createElement('input',$1327,`email ${$1317}`,null));
		$1314 || ($1328.name="remember-me");
		$1314 || ($1328.type="checkbox");
		$1314 || ($1328.set$('autocomplete',"remember-me"));
		$1314 || ($1328.required="");
		;
		$1314 || ($1329=imba_createElement('label',$1327,`${$1317}`,"Remember Me"));
		$1314 || ($1329.set$('for',"remember-me"));
		;
		$1314 || ($1330=imba_createElement('a',$1327,`l0cop9-pp forgot-link ${$1317}`,"Forgot your password?"));
		$1314 || ($1330.href="");
		;
		;
		$1314 || ($1331=imba_createElement('div',$1320,`login-button ${$1317}`,"Sign In"));
		$1314 || ($1331.on$(`click`,{mockAuthToggle: true},this));
		;
		$1314 || ($1332=imba_createElement('hr',$1320,`l0cop9-pr ${$1317}`,null));
		;
		($1335=$1336=1,$1333=$1313[$1334]) || ($1335=$1336=0,$1313[$1334]=$1333=imba_createComponent(ThirdPartyLogins,$1320,`${$1317}`,null));
		$1335 || !$1333.setup || $1333.setup($1336);
		$1333[$afterVisit$]($1336);
		$1335 || $1320[$appendChild$]($1333);
		;
		;
		;
		;
		$1313[$afterReconcile$]($1315);
		return $1313;
	}
	static {
		register$(this,c$37,'login-page',2);
		imba_defineTag('login-page',this,{cssns: 'l0cop9_pb',cssid: 'l0cop9-pb'});
	}
};
let c$38 = Symbol();
class ThirdPartyLogins extends imba_Component {
	
	
	render(){
		var $1337, $1338, $1339, $1341, $1342, $1343, $1345, $1346, $1347, $1348, $1349, $1351, $1352, $1353, $1354, $1355, $1357, $1358, $1359;
		$1337=this;
		$1337[$beforeReconcile$]();
		($1338=$1339=1,$1337[$1340] === 1) || ($1338=$1339=0,$1337[$1340]=1);
		$1338 || ($1341=imba_createElement('div',$1337,'login-button-wrapper l0cop9_pt',null));
		$1338 || ($1342=imba_createElement('div',$1341,'login-button l0cop9_pt',null));
		$1338 || ($1342.on$(`click`,{googleAuth: true},this));
		($1345=$1346=1,$1343=$1337[$1344]) || ($1345=$1346=0,$1337[$1344]=$1343=imba_createComponent(GoogleIcon,$1342,'button-logo l0cop9_pt',null));
		$1345 || !$1343.setup || $1343.setup($1346);
		$1343[$afterVisit$]($1346);
		$1345 || $1342[$appendChild$]($1343);
		;
		$1338 || ($1347=imba_createElement('span',$1342,'l0cop9_pt',"Sign In with Google"));
		;
		;
		$1338 || ($1348=imba_createElement('div',$1341,'login-button l0cop9_pt',null));
		$1338 || ($1348.on$(`click`,{facebookAuth: true},this));
		($1351=$1352=1,$1349=$1337[$1350]) || ($1351=$1352=0,$1337[$1350]=$1349=imba_createComponent(FacebookIcon,$1348,'button-logo l0cop9_pt',null));
		$1351 || !$1349.setup || $1349.setup($1352);
		$1349[$afterVisit$]($1352);
		$1351 || $1348[$appendChild$]($1349);
		;
		$1338 || ($1353=imba_createElement('span',$1348,'l0cop9_pt',"Sign In with Facebook"));
		;
		;
		$1338 || ($1354=imba_createElement('div',$1341,'login-button l0cop9_pt',null));
		$1338 || ($1354.on$(`click`,{appleAuth: true},this));
		($1357=$1358=1,$1355=$1337[$1356]) || ($1357=$1358=0,$1337[$1356]=$1355=imba_createComponent(AppleIcon,$1354,'button-logo l0cop9_pt',null));
		$1357 || !$1355.setup || $1355.setup($1358);
		$1355[$afterVisit$]($1358);
		$1357 || $1354[$appendChild$]($1355);
		;
		$1338 || ($1359=imba_createElement('span',$1354,'l0cop9_pt',"Sign In with Apple"));
		;
		;
		;
		$1337[$afterReconcile$]($1339);
		return $1337;
	}
	static {
		register$(this,c$38,'ThirdPartyLogins',2);
		imba_defineTag('third-party-logins-l0cop9-qf',this,{cssns: 'l0cop9_pt',name: 'ThirdPartyLogins'});
	}
};
let c$39 = Symbol();
class GoogleIcon extends imba_Component {
	
	render(){
		var $1360, $1361, $1362, $1364, $1365, $1366, $1367, $1368, $1369;
		$1360=this;
		$1360[$beforeReconcile$]();
		($1361=$1362=1,$1360[$1363] === 1) || ($1361=$1362=0,$1360[$1363]=1);
		$1361 || ($1364=imba_createSVGElement('svg',$1360,null,null));
		$1361 || ($1364.set$('viewBox',"-0.5 0 48 48"));
		$1361 || ($1365=imba_createSVGElement('g',$1364,null,null));
		$1361 || ($1365.set$('fill',"none"));
		$1361 || ($1365.set$('fill-rule',"evenodd"));
		$1361 || ($1366=imba_createSVGElement('path',$1365,'l0cop9-qk',null));
		$1361 || ($1366.set$('d',"M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"));
		;
		$1361 || ($1367=imba_createSVGElement('path',$1365,'l0cop9-ql',null));
		$1361 || ($1367.set$('d',"M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"));
		;
		$1361 || ($1368=imba_createSVGElement('path',$1365,'l0cop9-qm',null));
		$1361 || ($1368.set$('d',"M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"));
		;
		$1361 || ($1369=imba_createSVGElement('path',$1365,'l0cop9-qn',null));
		$1361 || ($1369.set$('d',"M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"));
		;
		;
		;
		$1360[$afterReconcile$]($1362);
		return $1360;
	}
	static {
		register$(this,c$39,'GoogleIcon',2);
		imba_defineTag('google-icon-l0cop9-qo',this,{cssid: 'l0cop9-qg',name: 'GoogleIcon'});
	}
};
let c$40 = Symbol();
class AppleIcon extends imba_Component {
	render(){
		var $1370, $1371, $1372, $1374, $1375;
		$1370=this;
		$1370[$beforeReconcile$]();
		($1371=$1372=1,$1370[$1373] === 1) || ($1371=$1372=0,$1370[$1373]=1);
		$1371 || ($1374=imba_createSVGElement('svg',$1370,null,null));
		$1371 || ($1374.set$('viewBox',"-3.5 0 48 48"));
		$1371 || ($1375=imba_createSVGElement('path',$1374,null,null));
		$1371 || ($1375.set$('fill',"#0B0B0A"));
		$1371 || ($1375.set$('fill-rule',"evenodd"));
		$1371 || ($1375.set$('d',"M27.175 7.792C28.74 5.772 29.927 2.915 29.498 0c-2.559.178-5.55 1.815-7.295 3.948-1.59 1.934-2.898 4.81-2.387 7.601 2.797.088 5.684-1.589 7.359-3.757ZM41 35.217c-1.12 2.495-1.658 3.61-3.1 5.82-2.012 3.085-4.848 6.926-8.366 6.954-3.122.034-3.928-2.046-8.167-2.02-4.239.022-5.122 2.06-8.25 2.029-3.516-.031-6.203-3.497-8.215-6.582-5.627-8.62-6.22-18.738-2.75-24.12 2.47-3.821 6.364-6.057 10.022-6.057 3.723 0 6.065 2.055 9.149 2.055 2.99 0 4.81-2.06 9.117-2.06 3.26 0 6.714 1.786 9.171 4.868C31.554 20.547 32.86 32.121 41 35.217Z"));
		;
		;
		$1370[$afterReconcile$]($1372);
		return $1370;
	}
	static {
		register$(this,c$40,'AppleIcon',2);
		imba_defineTag('apple-icon-l0cop9-qs',this,{name: 'AppleIcon'});
	}
};
let c$41 = Symbol();
class FacebookIcon extends imba_Component {
	render(){
		var $1376, $1377, $1378, $1380, $1381;
		$1376=this;
		$1376[$beforeReconcile$]();
		($1377=$1378=1,$1376[$1379] === 1) || ($1377=$1378=0,$1376[$1379]=1);
		$1377 || ($1380=imba_createSVGElement('svg',$1376,null,null));
		$1377 || ($1380.set$('viewBox',"0 0 48 48"));
		$1377 || ($1381=imba_createSVGElement('path',$1380,null,null));
		$1377 || ($1381.set$('fill',"#4460A0"));
		$1377 || ($1381.set$('fill-rule',"evenodd"));
		$1377 || ($1381.set$('d',"M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.649 2.649 0 0 1 2.65 0H45.35A2.649 2.649 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48Z"));
		;
		;
		$1376[$afterReconcile$]($1378);
		return $1376;
	}
	static {
		register$(this,c$41,'FacebookIcon',2);
		imba_defineTag('facebook-icon-l0cop9-qw',this,{name: 'FacebookIcon'});
	}
};
let c$42 = Symbol();
class LoginIllustration extends imba_Component {
	render(){
		var $1382, $1383, $1384, $1386, $1387, $1388, $1389, $1390, $1391, $1392, $1393, $1394, $1395, $1396, $1397, $1398, $1399, $1400, $1401, $1402, $1403, $1404, $1405, $1406, $1407, $1408, $1409, $1410, $1411, $1412, $1413, $1414, $1415, $1416, $1417, $1418, $1419, $1420, $1421, $1422, $1423, $1424, $1425, $1426, $1427, $1428, $1429, $1430, $1431, $1432, $1433, $1434, $1435, $1436, $1437, $1438, $1439, $1440, $1441, $1442, $1443, $1444, $1445, $1446, $1447, $1448, $1449, $1450, $1451, $1452, $1453, $1454, $1455, $1456, $1457, $1458, $1459, $1460, $1461;
		$1382=this;
		$1382[$beforeReconcile$]();
		($1383=$1384=1,$1382[$1385] === 1) || ($1383=$1384=0,$1382[$1385]=1);
		$1383 || ($1386=imba_createSVGElement('svg',$1382,null,null));
		$1383 || ($1386.set$('viewBox',"0 0 1600 1200"));
		$1383 || ($1387=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1387.set$('fill',"none"));
		$1383 || ($1387.set$('stroke',"#3b116e"));
		$1383 || ($1387.set$('stroke-linecap',"round"));
		$1383 || ($1387.set$('stroke-linejoin',"round"));
		$1383 || ($1387.set$('stroke-width',"4"));
		$1383 || ($1387.set$('d',"M425.08 118.55v121.62"));
		;
		$1383 || ($1388=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1388.set$('fill',"#fff"));
		$1383 || ($1388.set$('d',"M446.82 336.1c6.26-11.95 1.65-26.71-10.3-32.97-11.95-6.27-26.71-1.65-32.97 10.3-6.27 11.95-1.65 26.71 10.3 32.98 11.94 6.25 26.71 1.64 32.97-10.31Z"));
		;
		$1383 || ($1389=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1389.set$('fill',"#8c2eff"));
		$1383 || ($1389.set$('d',"m482.61 294.9-15.57-8.51a42.231 42.231 0 0 1-21.11-28.09l-2.38-10.81c-2.21-10.13-12.26-16.59-22.39-14.3-7.14 1.62-12.76 7.15-14.29 14.3l-2.39 10.81c-2.64 12-10.38 22.21-21.1 28.09l-15.58 8.51c-11.4 6.21-19.15 17.45-20.77 30.3h156.52c-1.79-12.85-9.53-24.09-20.94-30.3Z"));
		;
		$1383 || ($1390=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1390.set$('fill',"none"));
		$1383 || ($1390.set$('stroke',"#3b116e"));
		$1383 || ($1390.set$('stroke-linecap',"round"));
		$1383 || ($1390.set$('stroke-linejoin',"round"));
		$1383 || ($1390.set$('stroke-width',"4"));
		$1383 || ($1390.set$('d',"M359.38 300.86h131.21"));
		;
		$1383 || ($1391=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1391.set$('fill',"#3b116e"));
		$1383 || ($1391.set$('d',"M421.08 233.11c-7.15 1.62-12.77 7.15-14.3 14.3l-2.38 10.81c-2.64 12-10.39 22.21-21.11 28.08l-15.57 8.51c-11.41 6.22-19.15 17.45-20.77 30.3h45.02c0-29.53 33.71-31.06 33.71-57.79 0-18.81-.43-34.72-.43-34.72-1.45.08-2.81.25-4.17.51Z"));
		$1383 || ($1391.set$('opacity',".3"));
		;
		$1383 || ($1392=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1392.set$('fill',"#2b325a"));
		$1383 || ($1392.set$('d',"M972.53 1014.55h-24.19V750.48c0-29.1-26.42-52.81-58.83-52.81H479.8c-32.42 0-58.83 23.71-58.83 52.81v264.07h-24.2V750.48c0-39.9 37.26-72.37 83.03-72.37h409.71c45.77 0 83.02 32.47 83.02 72.37v264.07Z"));
		;
		$1383 || ($1393=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1393.set$('fill',"#9633ff"));
		$1383 || ($1393.set$('d',"M787.72 678.11H682.46l-6.75-38.21-6.76-38.46h105.26l2.47 13.9 11.04 62.77Z"));
		;
		$1383 || ($1394=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1394.set$('fill',"#3c007c"));
		$1383 || ($1394.set$('d',"m675.71 639.9-6.76-38.46h105.26l2.47 13.9-100.97 24.56Z"));
		$1383 || ($1394.set$('opacity',".2"));
		;
		$1383 || ($1395=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1395.set$('fill',"#9633ff"));
		$1383 || ($1395.set$('d',"M859.58 608.71H586.17c-18.19 0-35.47-14.68-38.72-32.87l-33.14-187.65c-3.25-18.19 8.97-32.87 27.03-32.87h273.54c18.19 0 35.48 14.68 38.72 32.87l33.01 187.78c3.25 18.06-8.84 32.74-27.03 32.74Z"));
		;
		$1383 || ($1396=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1396.set$('fill',"#fff"));
		$1383 || ($1396.set$('d',"M845.42 588.96h-252.1c-11.7 0-22.74-9.48-24.82-21.05l-30.28-171.53c-2.08-11.69 5.72-21.05 17.42-21.05h252.09c11.7 0 22.74 9.49 24.82 21.05l30.28 171.53c1.95 11.57-5.85 21.05-17.41 21.05Z"));
		;
		$1383 || ($1397=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1397.set$('fill',"none"));
		$1383 || ($1397.set$('stroke',"#3c007c"));
		$1383 || ($1397.set$('stroke-linecap',"round"));
		$1383 || ($1397.set$('stroke-linejoin',"round"));
		$1383 || ($1397.set$('stroke-width',"4"));
		$1383 || ($1397.set$('d',"M775.51 608.71H670.25"));
		;
		$1383 || ($1398=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1398.set$('fill',"#c89eff"));
		$1383 || ($1398.set$('d',"M1248.24 360.14h-67.26c-24.73 0-44.84 20.11-44.84 44.84 0 22.02 15.99 40.72 37.7 44.24v23.02l32.88-22.42h41.52c24.74 0 44.84-20.11 44.84-44.84 0-24.83-20.1-44.84-44.84-44.84Z"));
		;
		$1383 || ($1399=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1399.set$('fill',"#fff"));
		$1383 || ($1399.set$('d',"M1189.43 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14ZM1214.56 410.41c3.39 0 6.13-2.75 6.13-6.14a6.13 6.13 0 0 0-12.26 0c0 3.39 2.74 6.14 6.13 6.14ZM1239.8 410.41c3.38 0 6.13-2.75 6.13-6.14 0-3.38-2.75-6.13-6.13-6.13-3.39 0-6.14 2.75-6.14 6.13 0 3.39 2.75 6.14 6.14 6.14Z"));
		;
		$1383 || ($1400=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1400.set$('fill',"#a561ff"));
		$1383 || ($1400.set$('d',"M621.05 425.82h62.33c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-62.33c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z"));
		;
		$1383 || ($1401=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1401.set$('fill',"#c3afdd"));
		$1383 || ($1401.set$('d',"M626.15 455.55h36.44c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-36.44c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1383 || ($1402=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1402.set$('fill',"#2b325a"));
		$1383 || ($1402.set$('d',"M686.57 455.55h11.51c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-11.51c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z"));
		;
		$1383 || ($1403=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1403.set$('fill',"#c3afdd"));
		$1383 || ($1403.set$('d',"M631.25 485.28h8.95c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-8.95c-3.96 0-7.74-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1383 || ($1404=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1404.set$('fill',"#2b325a"));
		$1383 || ($1404.set$('d',"M664.18 485.28h53.7c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-53.7c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1383 || ($1405=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1405.set$('fill',"#e3daef"));
		$1383 || ($1405.set$('d',"M741.86 485.28h46.03c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-46.03c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1383 || ($1406=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1406.set$('fill',"#020202"));
		$1383 || ($1406.set$('d',"M636.36 515.01h28.77c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.95 7.19h-28.77c-3.97 0-7.75-3.23-8.43-7.19-.68-3.97 1.99-7.2 5.96-7.2Z"));
		;
		$1383 || ($1407=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1407.set$('fill',"#c3afdd"));
		$1383 || ($1407.set$('d',"M689.1 515.01h6.4c3.96 0 7.74 3.23 8.42 7.2.68 3.96-1.99 7.19-5.96 7.19h-6.39c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1383 || ($1408=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1408.set$('fill',"#a561ff"));
		$1383 || ($1408.set$('d',"M719.47 515.01h38.04c3.97 0 7.75 3.23 8.43 7.2.68 3.96-1.99 7.19-5.96 7.19h-38.04c-3.96 0-7.75-3.23-8.43-7.19-.68-3.97 2-7.2 5.96-7.2Z"));
		;
		$1383 || ($1409=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1409.set$('fill',"#343434"));
		$1383 || ($1409.set$('d',"M806.26 1014.24c3.02-5.73 5.93-11.17 8.65-16.81 3.89-8.26 6.7-14.57 9.13-20.3l.1-.2h-.1c-3.79-1.36-14.28-4.66-28.95-4.66-5.15 0-10.2.39-15.06 1.26h-.1l-6.02 25.46 32.06 15.93.29-.68Z"));
		;
		$1383 || ($1410=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1410.set$('fill',"#c7cbff"));
		$1383 || ($1410.set$('d',"M1043.13 473.18c1.75-9.42 4.08-21.57 5.83-31.38 1.45-7.77 2.72-25.45 3.3-28.85 0 0-59.85-54.7-66.65-51.98-9.23 3.59-15.54 8.84-20.11 16.03-4.27 6.8-6.99 15.35-10.49 25.75l-.88 2.62c-1.07.1-8.64 1.16-9.42 4.47-.87 3.5 3.69 9.52 4.37 10.3-6.02 18.94-5.92 29.24.49 38.08 3.88 5.44 11.95 8.75 21.47 8.75 4.08 0 7.87-.59 10.88-1.75l-2.53 15.54 63.74-7.58Z"));
		;
		$1383 || ($1411=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1411.set$('fill',"#2a329e"));
		$1383 || ($1411.set$('d',"m985.61 480.66 10.01-21.95c-7.68 4.27-13.7 6.51-13.7 6.51l-1.75 10.59 5.44 4.85Z"));
		$1383 || ($1411.set$('opacity',".2"));
		;
		$1383 || ($1412=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1412.set$('fill',"none"));
		$1383 || ($1412.set$('stroke',"#2a329e"));
		$1383 || ($1412.set$('stroke-linecap',"round"));
		$1383 || ($1412.set$('stroke-linejoin',"round"));
		$1383 || ($1412.set$('stroke-width',"4"));
		$1383 || ($1412.set$('d',"M955.2 431.99c2.53.87 7.68.29 9.33-3.01"));
		;
		$1383 || ($1413=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1413.set$('fill',"#231f20"));
		$1383 || ($1413.set$('d',"M965.79 411.2c-1.5 0-2.72-1.22-2.72-2.72 0-1.51 1.22-2.72 2.72-2.72a2.71 2.71 0 0 1 2.72 2.72c0 1.5-1.21 2.72-2.72 2.72Z"));
		;
		$1383 || ($1414=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1414.set$('fill',"none"));
		$1383 || ($1414.set$('stroke',"#2a329e"));
		$1383 || ($1414.set$('stroke-linecap',"round"));
		$1383 || ($1414.set$('stroke-linejoin',"round"));
		$1383 || ($1414.set$('stroke-width',"4"));
		$1383 || ($1414.set$('d',"m1002.13 431.99 8.55-5.15"));
		;
		$1383 || ($1415=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1415.set$('fill',"#231f20"));
		$1383 || ($1415.set$('d',"M1077.03 393.9c-18.18 0-32.93-14.74-32.93-32.93 0-18.19 14.75-32.94 32.93-32.94 18.19 0 32.94 14.75 32.94 32.94 0 18.19-14.75 32.93-32.94 32.93Z"));
		;
		$1383 || ($1416=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1416.set$('fill',"#c7cbff"));
		$1383 || ($1416.set$('d',"m969.87 947.3 2.72-6.02v-.1c-1.16-10.69-2.91-21.67-5.05-32.64l-4.86-14.58-96.96 1.56 2.43 13.21c2.72 9.23 4.66 16.13 5.15 21.67l25.46 50.61 71.11-33.71Z"));
		;
		$1383 || ($1417=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1417.set$('fill',"#343434"));
		$1383 || ($1417.set$('d',"M975.7 1014.82v-.19c.2-6.61.2-13.12.2-19.43 0-7.68-.3-15.16-.59-22.35v-.19h-.19c-14.38 2.14-27.79 8.26-38.77 17.87l-.09.1 3.01 24.19h36.43Z"));
		;
		$1383 || ($1418=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1418.set$('fill',"#a561ff"));
		$1383 || ($1418.set$('d',"M926.54 1001.61c13.12-16.13 29.44-25.65 48.58-28.47h.19v-.68c-.19-2.81-.29-5.63-.48-8.25-.49-7.29-1.95-20.89-2.14-22.93 0-.1-.1-.2-.29-.2-36.73 1.75-60.92 21.57-65.97 26.04-.19.19-.49 0-.39-.19l3.4-21.28c.59-3.5-.19-7.09-2.33-9.91a13.136 13.136 0 0 0-8.65-5.44c-.68-.1-1.45-.2-2.23-.2H873.2c-.19 0-.29.1-.29.3.1 1.36.68 7.09.68 8.64-.1 23.42-10.49 32.94-20.6 42.07-4.85 4.37-9.42 8.55-12.72 14.09-1.17 1.94-2.04 3.98-2.82 6.12l-.1.29h89.19Z"));
		;
		$1383 || ($1419=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1419.set$('fill',"#8c2eff"));
		$1383 || ($1419.set$('d',"M967.64 908.73v-.19c-7.77-40.91-21.18-80.55-39.93-117.76l-6.03-11.75c42.17-.1 78.31-12.63 94.54-32.84 8.35-10.49 11.17-22.35 8.25-35.27-6.8-29.44-17.78-48.38-17.87-48.48l-.29-.58-.3 4.37c-5.24.58-128.43 15.55-166.52 60.72-25.55 30.31-2.23 94.83 16.42 146.61 4.57 12.73 8.94 24.77 12.14 35.17h99.59Z"));
		;
		$1383 || ($1420=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1420.set$('fill',"#0e001f"));
		$1383 || ($1420.set$('d',"M864.75 897.36c.2-.48 14.67-52.66 76.66-75.97l.19-.1-.1-.19c-4.37-10.59-9.03-20.8-13.89-30.41-1.94-3.79-3.11-6.22-3.69-7.29.1-.1.1-.1-.88-2.04v-.1l-94.24-28.08v.2c-4.17 33.61 13.12 81.61 27.01 120.08 3.11 8.46 5.93 16.42 8.45 23.9l.2.59.29-.59Z"));
		$1383 || ($1420.set$('opacity',".2"));
		;
		$1383 || ($1421=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1421.set$('fill',"none"));
		$1383 || ($1421.set$('stroke',"#343434"));
		$1383 || ($1421.set$('stroke-linecap',"round"));
		$1383 || ($1421.set$('stroke-linejoin',"round"));
		$1383 || ($1421.set$('stroke-width',"4"));
		$1383 || ($1421.set$('d',"m868.05 963.72 15.55 6.41M859.21 975.67l13.12 9.91"));
		;
		$1383 || ($1422=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1422.set$('fill',"none"));
		$1383 || ($1422.set$('stroke',"#0e001f"));
		$1383 || ($1422.set$('stroke-linecap',"round"));
		$1383 || ($1422.set$('stroke-linejoin',"round"));
		$1383 || ($1422.set$('stroke-width',"4"));
		$1383 || ($1422.set$('d',"m868.93 908.83 98.51-.2"));
		;
		$1383 || ($1423=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1423.set$('fill',"#c7cbff"));
		$1383 || ($1423.set$('d',"M835.12 948.66c4.08-11.27 7.77-23.22 10.69-33.81l.19-8.26-86.08-42.45-4.18 7.96c-2.52 13.22-3.98 20.79-5.15 23.42l5.44 57.8 74.13-2.91 4.96-1.75Z"));
		;
		$1383 || ($1424=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1424.set$('fill',"#a561ff"));
		$1383 || ($1424.set$('d',"M763.51 978.29c9.82-3.69 20.41-5.63 31.48-5.63 14.58 0 24.97 3.3 28.76 4.66l.2.1.09-.2c1.27-2.62 9.04-22.15 11.37-28.36l.1-.39-.39-.1c-14.28-6.51-29.63-9.81-45.57-9.81-14.77 0-28.51 4.06-27.88 3.69l11.37-16.42c4.85-7 3.11-16.61-3.89-21.47-.68-.49-18.65-9.13-18.65-9.13s-2.14 4.76-2.82 6.02c-10.59 20.89-24.1 24.77-37.21 28.47-6.32 1.74-12.24 3.49-17.68 6.99-1.75 1.17-3.4 2.53-4.86 3.89l.1.39 75.48 37.3Z"));
		;
		$1383 || ($1425=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1425.set$('fill',"#8c2eff"));
		$1383 || ($1425.set$('d',"M845.51 915.82c7.39-27.78 12.25-50.03 14.67-70.63 2.24-18.75 2.63-34.98 2.53-55.09l141.26.39c18.76 0 39.55-3.3 53.54-16.9 10-9.72 14.47-23.22 16.22-36.73 1.46-11.17 1.46-22.63-1.36-33.42-3.11-11.75-3.2-21.57-8.06-30.6l-8.84-13.7H954.23l-4.37 3.2c-1.56.3-29.25 5.35-61.5 14.09-55.09 14.96-76.75 28.18-85.21 36.63-22.73 23.41-28.17 54.21-35.75 96.77-1.26 6.99-2.52 14.28-3.98 21.86l-.97 5.24c-2.43 12.92-4.67 25.26-6.71 35.56l89.77 43.33Z"));
		;
		$1383 || ($1426=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1426.set$('fill',"none"));
		$1383 || ($1426.set$('stroke',"#0e001f"));
		$1383 || ($1426.set$('stroke-linecap',"round"));
		$1383 || ($1426.set$('stroke-linejoin',"round"));
		$1383 || ($1426.set$('stroke-width',"4"));
		$1383 || ($1426.set$('d',"M855.81 872.39c6.22-32.35 6.8-54.4 6.71-81.61"));
		;
		$1383 || ($1427=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1427.set$('fill',"none"));
		$1383 || ($1427.set$('stroke',"#343434"));
		$1383 || ($1427.set$('stroke-linecap',"round"));
		$1383 || ($1427.set$('stroke-linejoin',"round"));
		$1383 || ($1427.set$('stroke-width',"4"));
		$1383 || ($1427.set$('d',"m730.77 921.55 10.59 12.93M718.43 927.97l6.9 14.86"));
		;
		$1383 || ($1428=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1428.set$('fill',"none"));
		$1383 || ($1428.set$('stroke',"#0e001f"));
		$1383 || ($1428.set$('stroke-linecap',"round"));
		$1383 || ($1428.set$('stroke-linejoin',"round"));
		$1383 || ($1428.set$('stroke-width',"4"));
		$1383 || ($1428.set$('d',"m756.23 872.39 87.73 42.85"));
		;
		$1383 || ($1429=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1429.set$('fill',"#c7cbff"));
		$1383 || ($1429.set$('d',"m856.01 517.49-.2-3.79c-15.25-16.13-32.45-34.01-44.98-42.75-18.95-13.21-52.76-26.04-64.03-26.04-3.59 0-5.34 1.07-5.44 3.21-.09 5.92 8.26 11.07 19.92 18.16 1.17.69 2.43 1.46 3.69 2.24-1.46.29-2.91 1.65-3.79 3.5-1.36 3.01-.87 6.51 1.46 9.32-2.43.78-4.08 2.24-4.86 4.38-.87 2.62-.29 5.73 1.56 8.45-1.75 1.55-2.72 3.69-2.82 6.22-.1 3.79 1.85 7.48 3.89 9.32 3.1 3.11 6.12 5.64 11.27 5.64 1.26 0 2.62-.2 4.17-.49 6.03 7.58 13.61 12.73 21.38 14.38.97 1.56 2.43 4.76 4.56 9.23 1.66 3.4 3.6 7.68 5.93 12.34l1.94 1.36 46.35-34.68Z"));
		;
		$1383 || ($1430=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1430.set$('fill',"#a561ff"));
		$1383 || ($1430.set$('d',"M1071.11 697.32c52.85-18.95 54.02-57.32 49.06-88.61-2.72-17.58-9.52-40.8-18.55-63.63-8.36-21.08-17.3-38.38-23.32-44.98-13.51-14.87-34.59-18.56-36.82-18.85.19-.97.38-1.95.58-3.01.29-1.66.68-3.5 1.07-5.45v-.19h-62.57l-1.46 8.55h-2.43c-25.45 0-47.99 12.44-68.98 37.99l-23.41 26.72c-1.46-1.75-13.7-16.42-28.47-32.36l-.09-.09-48 37.4c21.18 41.58 42.36 65.77 62.86 71.6 3.5.98 7.19 1.46 10.98 1.46 28.37 0 57.13-27.4 60.23-30.41l8.17 68.79h105.41c9.52 14.38 15.45 34.58 15.45 34.88l.09.19h.2Z"));
		;
		$1383 || ($1431=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1431.set$('fill',"#130821"));
		$1383 || ($1431.set$('d',"m1055.37 662.25 11.76-44.01.19.09c5.93 3.11 7.38 11.95 9.13 22.15 2.43 14.77 5.54 33.13 24.19 40.23h.1c-7.38 6.41-17 12.04-29.63 16.61h-.2l-.09-.19c0-.3-5.93-20.5-15.45-34.88ZM984.83 662.25l-30.89-80.16-12.15 11.37 8.17 68.79h34.87Z"));
		$1383 || ($1431.set$('opacity',".2"));
		;
		$1383 || ($1432=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1432.set$('fill',"none"));
		$1383 || ($1432.set$('stroke',"#130821"));
		$1383 || ($1432.set$('stroke-linecap',"round"));
		$1383 || ($1432.set$('stroke-linejoin',"round"));
		$1383 || ($1432.set$('stroke-width',"4"));
		$1383 || ($1432.set$('d',"m1055.47 662.15 17.48-65.09M1078.88 641.07l-14.67-7.1M941.89 593.17l16.23-16.32M884.47 546.54l.97 12.63"));
		;
		$1383 || ($1433=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1433.set$('fill',"none"));
		$1383 || ($1433.set$('stroke',"#2a329e"));
		$1383 || ($1433.set$('stroke-linecap',"round"));
		$1383 || ($1433.set$('stroke-linejoin',"round"));
		$1383 || ($1433.set$('stroke-width',"4"));
		$1383 || ($1433.set$('d',"M764.29 468.03c6.8 0 18.36 2.34 22.74 4.96M763.03 481.54c6.8-.88 20.5 5.15 20.5 5.15M759.63 494.27c4.37-.88 13.7.87 19.72 5.14M775.27 514.18l-3.98-6.51M982.5 465.02c4.37-1.65 7.68-3.3 7.68-3.3"));
		;
		$1383 || ($1434=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1434.set$('fill',"#231f20"));
		$1383 || ($1434.set$('d',"M1152.33 552.75c3.21-14.47-4.27-28.46-20.11-37.4 7.97-21.47 6.22-42.17-5.05-58.49-11.66-16.81-31.58-26.52-54.8-26.52-7.19 0-14.47.97-21.86 2.82.29-1.66.58-3.21.88-4.57.38-1.94.68-3.6.87-4.76l.19-1.26c2.63-13.9 7.49-39.84-7.48-53.25-9.61-8.55-23.41-13.4-37.89-13.4-7.67 0-15.35 1.36-22.15 4.08-9.52 3.69-15.93 9.71-20.79 19.14 0 0 6.02 8.06 17.1 8.06 2.43 0 5.05-.39 4.67-.19-2.53 8.93 1.2 23.66 5.75 30.05l1.41 1.79.49.65c.9-.63 11.58-8.3 21.3-8.3 5.63 0 9.61 2.62 11.85 7.87 6.9 16.22-20.11 30.31-20.4 30.5h-.1v.1c-1.75 6.8-3.01 37.5 12.82 57.91 9.23 11.85 22.45 17.87 39.35 17.87 9.43 0 20.02-1.94 31.58-5.63 1.07 2.04 12.24 24.38 23.51 61.5 0 0 32.45.97 38.86-28.57Z"));
		;
		$1383 || ($1435=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1435.set$('fill',"none"));
		$1383 || ($1435.set$('stroke',"#0e001f"));
		$1383 || ($1435.set$('stroke-linecap',"round"));
		$1383 || ($1435.set$('stroke-linejoin',"round"));
		$1383 || ($1435.set$('stroke-width',"4"));
		$1383 || ($1435.set$('d',"m927.51 790.49-87.92-.78"));
		;
		$1383 || ($1436=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1436.set$('fill',"#fff"));
		$1383 || ($1436.set$('d',"M1007.86 462.01c-5.36 0-9.72-4.35-9.72-9.72 0-5.36 4.36-9.71 9.72-9.71s9.72 4.35 9.72 9.71c0 5.37-4.36 9.72-9.72 9.72Z"));
		;
		$1383 || ($1437=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1437.set$('fill',"none"));
		$1383 || ($1437.set$('stroke',"#231f20"));
		$1383 || ($1437.set$('stroke-linecap',"round"));
		$1383 || ($1437.set$('stroke-linejoin',"round"));
		$1383 || ($1437.set$('stroke-width',"4"));
		$1383 || ($1437.set$('d',"M1050.51 433.16c-4.18 1.45-8.55 3.49-12.53 5.53M1132.22 515.35c-2.14 5.05-4.86 10.01-7.77 14.67M1090.15 519.82c9.04-2.43 13.89-6.32 13.89-6.32"));
		;
		$1383 || ($1438=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1438.set$('fill',"none"));
		$1383 || ($1438.set$('stroke',"#130821"));
		$1383 || ($1438.set$('stroke-linecap',"round"));
		$1383 || ($1438.set$('stroke-linejoin',"round"));
		$1383 || ($1438.set$('stroke-width',"4"));
		$1383 || ($1438.set$('d',"m855.62 513.7-47.8 37.21"));
		;
		$1383 || ($1439=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1439.set$('fill',"#343434"));
		$1383 || ($1439.set$('d',"M748.16 986.07c4.86-3.21 10.01-5.83 15.45-7.78l.39-.19-75.68-37.79-.1.09c-3.5 3.31-6.32 7.09-8.36 11.47l-.09.19 68.39 34.01ZM917.12 1014.82c2.91-4.76 6.22-9.32 9.71-13.5l.2-.29h-89.48l-.1.09c-1.55 4.38-2.04 8.94-2.04 13.51v.19h81.71Z"));
		;
		$1383 || ($1440=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1440.set$('fill',"none"));
		$1383 || ($1440.set$('stroke',"#1f2321"));
		$1383 || ($1440.set$('stroke-linecap',"round"));
		$1383 || ($1440.set$('stroke-linejoin',"round"));
		$1383 || ($1440.set$('stroke-width',"4"));
		$1383 || ($1440.set$('d',"m1066.17 814.2 48.2 198.89M972.51 814.2l-48.19 198.89M954.14 890.61h130.3"));
		;
		$1383 || ($1441=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1441.set$('fill',"#2b325a"));
		$1383 || ($1441.set$('d',"M946.37 788.68h145.84c10.82 0 19.53 6.56 19.53 14.7 0 8.13-8.71 14.69-19.53 14.69H946.37c-10.82 0-19.53-6.56-19.53-14.69 0-8.06 8.82-14.7 19.53-14.7Z"));
		;
		$1383 || ($1442=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1442.set$('fill',"#1a1a1a"));
		$1383 || ($1442.set$('d',"M927.26 806.22c1.78 6.72 9.66 11.85 19.11 11.85h145.84c10.82 0 19.53-6.56 19.53-14.69 0-3.32-1.47-6.33-3.88-8.78-25.52 6.33-55.97 10.99-88.94 13.2-33.49 2.21-64.89 1.5-91.66-1.58Z"));
		$1383 || ($1442.set$('opacity',".3"));
		;
		$1383 || ($1443=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1443.set$('fill',"#a561ff"));
		$1383 || ($1443.set$('d',"M520.39 678.22v-78.49h69.26v78.49h-69.26Z"));
		;
		$1383 || ($1444=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1444.set$('fill',"#29193f"));
		$1383 || ($1444.set$('d',"M555.02 620.04c-22.81 0-33.25-17.78-34.5-20.07-.01-.03-.01-.06-.01-.09 0-.02 0-.05.01-.07.02-.03.04-.05.07-.06.02-.01.04-.02.08-.02h68.32c.06 0 .14.02.19.05.07.03.11.09.15.14.04.06.05.13.05.19 0 .08-.01.14-.05.21-1.9 3.33-12.4 19.72-34.31 19.72Z"));
		;
		$1383 || ($1445=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1445.set$('fill',"none"));
		$1383 || ($1445.set$('stroke',"#1c1426"));
		$1383 || ($1445.set$('stroke-linecap',"round"));
		$1383 || ($1445.set$('stroke-linejoin',"round"));
		$1383 || ($1445.set$('stroke-width',"4"));
		$1383 || ($1445.set$('d',"M604.24 644.05c7.14 0 12.93-5.79 12.93-12.93 0-7.13-5.79-12.92-12.93-12.92s-12.93 5.79-12.93 12.92c0 7.14 5.79 12.93 12.93 12.93Z"));
		;
		$1383 || ($1446=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1446.set$('fill',"none"));
		$1383 || ($1446.set$('stroke',"#fff"));
		$1383 || ($1446.set$('stroke-linecap',"round"));
		$1383 || ($1446.set$('stroke-linejoin',"round"));
		$1383 || ($1446.set$('stroke-width',"4"));
		$1383 || ($1446.set$('d',"M335.31 860.49c-4.58-17.06-29.54-22.16-39.81 10.78-8.94 28.74-21.57 32.95-27.33 61.38-5.46 27.18 10.27 66.47 50.59 63.67 42.47-2.96 16.55-135.83 16.55-135.83Z"));
		;
		$1383 || ($1447=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1447.set$('fill',"#8c2eff"));
		$1383 || ($1447.set$('d',"m352.36 787.74 54.55 102.33-95.16 50.73-54.55-102.33 95.16-50.73Z"));
		;
		$1383 || ($1448=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1448.set$('fill',"none"));
		$1383 || ($1448.set$('stroke',"#fff"));
		$1383 || ($1448.set$('stroke-linecap',"round"));
		$1383 || ($1448.set$('stroke-linejoin',"round"));
		$1383 || ($1448.set$('stroke-width',"4"));
		$1383 || ($1448.set$('d',"M378.96 801.33h-.3c-16.39 0-29.69 13.3-29.69 29.69v27.7h59.68v-27.7c0-16.39-13.29-29.69-29.69-29.69Z"));
		;
		$1383 || ($1449=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1449.set$('fill',"#9633ff"));
		$1383 || ($1449.set$('d',"M378.89 829.18h-.67c-42.54 0-76.96 34.49-76.96 76.96v91.66c0 9.82 7.98 17.8 17.8 17.8h118.99c9.82 0 17.8-7.98 17.8-17.8v-91.58c.07-42.55-34.42-77.04-76.96-77.04 0 0 .07 0 0 0Z"));
		;
		$1383 || ($1450=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1450.set$('fill',"#59268f"));
		$1383 || ($1450.set$('d',"M409.39 923.72h-61.53c-9.97 0-18.09 8.13-18.09 18.1v38.77c0 9.97 8.12 18.1 18.09 18.1h61.53c9.97 0 18.09-8.13 18.09-18.1v-38.77c0-9.97-8.12-18.1-18.09-18.1Z"));
		$1383 || ($1450.set$('opacity',".3"));
		;
		$1383 || ($1451=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1451.set$('fill',"#5f00d4"));
		$1383 || ($1451.set$('d',"M409.14 927.83h-61.28c-8.48-.5-10.47 4.92-18.13 16v28.64c.04 9.97 8.16 18.09 18.13 18.09h61.53c9.97 0 18.09-8.12 18.09-18.09v-28.98c-5.89-14.09-8.73-15.17-18.34-16.16Z"));
		;
		$1383 || ($1452=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1452.set$('fill',"#8c2eff"));
		$1383 || ($1452.set$('stroke',"#272459"));
		$1383 || ($1452.set$('stroke-width',"4"));
		$1383 || ($1452.set$('d',"M409.39 915.6h-61.53c-9.97 0-18.09 8.12-18.09 18.09v9.75h97.71v-9.75c0-9.97-8.12-18.09-18.09-18.09Z"));
		;
		$1383 || ($1453=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1453.set$('fill',"none"));
		$1383 || ($1453.set$('stroke',"#fcfcfc"));
		$1383 || ($1453.set$('stroke-linecap',"round"));
		$1383 || ($1453.set$('stroke-linejoin',"round"));
		$1383 || ($1453.set$('stroke-width',"4"));
		$1383 || ($1453.set$('d',"M427.48 943.44H329.7"));
		;
		$1383 || ($1454=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1454.set$('fill',"#8c2eff"));
		$1383 || ($1454.set$('d',"M378.59 892.26c-8.16 0-14.77-6.62-14.77-14.77 0-8.17 6.61-14.78 14.77-14.78 8.15 0 14.77 6.61 14.77 14.78 0 8.15-6.62 14.77-14.77 14.77ZM1300.09 962.44h-.71c-7.13-.36-12.66-6.51-12.3-13.73.27-4.81 3.12-9 7.4-11.05 16.84-8.02 15.77-13.73 12.65-30.84-2.58-13.99-6.15-33.16 6.24-53.3 2.41-3.83 6.51-6.15 11.05-6.15 2.41 0 4.73.71 6.78 1.96 6.15 3.75 8.02 11.77 4.28 17.92-7.13 11.58-5.17 22.37-2.86 34.85 3.3 17.91 7.94 42.42-27 59.09-1.7.8-3.57 1.25-5.53 1.25Z"));
		;
		$1383 || ($1455=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1455.set$('fill',"#3b116e"));
		$1383 || ($1455.set$('d',"M1316.94 939.71c-5.08-1.87-9.9-4.1-14.44-6.68-2.05 1.51-4.73 3.03-8.02 4.63-4.28 2.05-7.13 6.33-7.4 11.05-.36 7.13 5.17 13.28 12.3 13.73h.71c1.96 0 3.83-.45 5.62-1.25 11.23-5.35 18.45-11.5 22.81-18.09-3.92-.8-7.75-1.96-11.58-3.39Z"));
		$1383 || ($1455.set$('opacity',".2"));
		;
		$1383 || ($1456=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1456.set$('fill',"#8c2eff"));
		$1383 || ($1456.set$('d',"M1068.26 1016.1c-.62-1.7-.98-3.48-.98-5.26 0-7.76 6.33-14.09 14.08-14.09h61.59l38.51 18.99-.09.36h-113.11Z"));
		;
		$1383 || ($1457=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1457.set$('fill',"#9633ff"));
		$1383 || ($1457.set$('d',"M1128.16 1016.1c-9.72 0-18.99-4.73-24.69-12.57l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l12.3-20.59c3.3-5.61 8.65-9.62 14.89-11.41l7.22-2.05.53-20.32c0-1.07.54-2.14 1.25-2.85s1.69-1.07 2.76-1.07c1.07 0 2.23.44 2.94 1.25 4.9 5.34 12.66 13.63 22.73 24.6 2.14 2.31 4.55 3.47 7.4 3.47 6.95 0 15.69-6.68 25.85-14.44 15.51-11.85 34.85-26.56 58.2-26.56 6.59 0 13.28 1.25 19.88 3.57 15.68 5.7 26.73 15.42 32.62 28.88 12.56 28.43-1.7 64.26-1.87 64.62l-.09.09h-179.6Z"));
		;
		$1383 || ($1458=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1458.set$('fill',"#c89eff"));
		$1383 || ($1458.set$('d',"M1104.45 1004.78c-.36-.45-.62-.81-.98-1.25l-1.78-2.5c-2.59-3.56-2.86-8.38-.54-12.12l2.32-3.83h.53c4.73 0 8.47 2.4 9.36 5.97.98 3.92-3.56 11.14-8.64 13.81l-.09.09-.18-.17Z"));
		;
		$1383 || ($1459=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1459.set$('fill',"none"));
		$1383 || ($1459.set$('stroke',"#170f20"));
		$1383 || ($1459.set$('stroke-linecap',"round"));
		$1383 || ($1459.set$('stroke-linejoin',"round"));
		$1383 || ($1459.set$('stroke-width',"4"));
		$1383 || ($1459.set$('d',"M1182.26 1015.92c-2.76-7.13.71-15.24 7.93-18.01 1.61-.62 3.3-.98 5.08-.98h24.42c-3.11-23.44 13.37-44.92 36.82-48.04 1.87-.27 3.74-.36 5.61-.36h1.16"));
		;
		$1383 || ($1460=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1460.set$('fill',"#8c2eff"));
		$1383 || ($1460.set$('d',"M1271.66 995.42c-3.12 0-6.06-.89-8.56-2.59-3.65-2.49-5.97-6.59-6.42-11.41-.44-4.81.9-9.8 3.84-13.99 3.92-5.62 10.07-9.09 16.22-9.09 3.12 0 6.06.89 8.56 2.58 3.65 2.5 5.97 6.6 6.41 11.41.45 4.82-.89 9.81-3.83 14-3.92 5.61-10.16 9.09-16.22 9.09ZM1236.1 945.68c-4.64 0-8.92-1.16-12.84-3.38-3.39-1.97-6.33-4.73-8.47-8.03l-.09-.17.18-.09c9.72-6.42 24.69-15.07 42.34-15.07 3.83 0 7.66.36 11.41 1.16h.18l-.09.18c-.81 2.32-1.87 4.55-3.12 6.68-6.6 11.59-17.92 18.72-29.5 18.72Z"));
		;
		$1383 || ($1461=imba_createSVGElement('path',$1386,null,null));
		$1383 || ($1461.set$('fill',"none"));
		$1383 || ($1461.set$('stroke',"#170f20"));
		$1383 || ($1461.set$('stroke-linecap',"round"));
		$1383 || ($1461.set$('stroke-linejoin',"round"));
		$1383 || ($1461.set$('stroke-width',"4"));
		$1383 || ($1461.set$('d',"M1118.89 983.92c1.69 2.14 7.84 3.3 11.23 2.14"));
		;
		;
		$1382[$afterReconcile$]($1384);
		return $1382;
	}
	static {
		register$(this,c$42,'LoginIllustration',2);
		imba_defineTag('login-illustration-l0cop9-tw',this,{name: 'LoginIllustration'});
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
		var $1462, $1463, $1464, $1466 = this._ns_ || '', $1467, $1468, $1469, $1470, $1471, $1472, $1473, $1474, $1475, $1476, $1477, $1478, $1479, $1480, $1481, $1482, $1483, $1484, $1485, $1486, $1487, $1489, $1490;
		$1462=this;
		$1462[$beforeReconcile$]();
		($1463=$1464=1,$1462[$1465] === 1) || ($1463=$1464=0,$1462[$1465]=1);
		$1463 || ($1467=imba_createElement('div',$1462,`l0cop9-tz ${$1466}`,null));
		$1463 || ($1468=imba_createElement('div',$1467,`card ${$1466}`,null));
		$1463 || ($1469=imba_createElement('form',$1468,`form ${$1466}`,null));
		$1463 || ($1469.action="#");
		$1463 || ($1469.method="POST");
		$1463 || ($1470=imba_createElement('div',$1469,`field-wrapper ${$1466}`,null));
		$1463 || ($1471=imba_createElement('label',$1470,`${$1466}`,"Desired Username"));
		$1463 || ($1471.set$('for',"username"));
		;
		$1463 || ($1472=imba_createElement('input',$1470,`field email ${$1466}`,null));
		$1463 || ($1472.name="username");
		$1463 || ($1472.set$('autocomplete',"username"));
		$1463 || ($1472.required="");
		;
		;
		$1463 || ($1473=imba_createElement('div',$1469,`field-wrapper ${$1466}`,null));
		$1463 || ($1474=imba_createElement('label',$1473,`${$1466}`,"Email Address"));
		$1463 || ($1474.set$('for',"email"));
		;
		$1463 || ($1475=imba_createElement('input',$1473,`field email ${$1466}`,null));
		$1463 || ($1475.name="email");
		$1463 || ($1475.set$('autocomplete',"email"));
		$1463 || ($1475.required="");
		;
		;
		$1463 || ($1476=imba_createElement('div',$1469,`field-wrapper ${$1466}`,null));
		$1463 || ($1477=imba_createElement('label',$1476,`${$1466}`,"Password"));
		$1463 || ($1477.set$('for',"password"));
		;
		$1463 || ($1478=imba_createElement('input',$1476,`field email ${$1466}`,null));
		$1463 || ($1478.name="password");
		$1463 || ($1478.set$('autocomplete',"username"));
		$1463 || ($1478.required="");
		;
		;
		$1463 || ($1479=imba_createElement('div',$1469,`field-wrapper ${$1466}`,null));
		$1463 || ($1480=imba_createElement('label',$1479,`${$1466}`,"Confirm Password"));
		$1463 || ($1480.set$('for',"confirmpassword"));
		;
		$1463 || ($1481=imba_createElement('input',$1479,`field email ${$1466}`,null));
		$1463 || ($1481.name="confirmpassword");
		$1463 || ($1481.set$('autocomplete',"username"));
		$1463 || ($1481.required="");
		;
		;
		$1463 || ($1482=imba_createElement('div',$1469,`options ${$1466}`,null));
		$1463 || ($1483=imba_createElement('input',$1482,`email ${$1466}`,null));
		$1463 || ($1483.name="remember-me");
		$1463 || ($1483.type="checkbox");
		$1463 || ($1483.set$('autocomplete',"remember-me"));
		$1463 || ($1483.required="");
		;
		$1463 || ($1484=imba_createElement('label',$1482,`${$1466}`,"Remember Me"));
		$1463 || ($1484.set$('for',"remember-me"));
		;
		;
		$1463 || ($1485=imba_createElement('div',$1469,`login-button ${$1466}`,"Create Account"));
		$1463 || ($1485.on$(`click`,{mockAuthToggle: true},this));
		;
		$1463 || ($1486=imba_createElement('hr',$1469,`l0cop9-us ${$1466}`,null));
		;
		($1489=$1490=1,$1487=$1462[$1488]) || ($1489=$1490=0,$1462[$1488]=$1487=imba_createComponent(ThirdPartyLogins,$1469,`${$1466}`,null));
		$1489 || !$1487.setup || $1487.setup($1490);
		$1487[$afterVisit$]($1490);
		$1489 || $1469[$appendChild$]($1487);
		;
		;
		;
		;
		$1462[$afterReconcile$]($1464);
		return $1462;
	}
	static {
		register$(this,c$43,'create-account-page',2);
		imba_defineTag('create-account-page',this,{cssns: 'l0cop9_tx',cssid: 'l0cop9-tx'});
	}
};
// ELEMENT[epic=ELEMENT, seq=41] Progress Bar
let c$44 = Symbol();
class ProgressBar extends imba_Component {
	
	render(){
		var $1491, $1492, $1493, $1495, $1496, $1498, $1499, $1501;
		$1491=this;
		$1491[$beforeReconcile$]();
		($1492=$1493=1,$1491[$1494] === 1) || ($1492=$1493=0,$1491[$1494]=1);
		$1492 || ($1495=imba_createElement('div',$1491,'progress-bg l0cop9_uu',null));
		($1498=$1499=1,$1496=$1491[$1497]) || ($1498=$1499=0,$1491[$1497]=$1496=imba_createElement('div',$1495,'l0cop9-ux progress-fg l0cop9_uu',null));
		($1501=this.progress + "%",$1501===$1491[$1500] || ($1496.css$var('--l0cop9_uy',$1491[$1500]=$1501,null,'flb')));
		;
		;
		$1491[$afterReconcile$]($1493);
		return $1491;
	}
	static {
		register$(this,c$44,'ProgressBar',2);
		imba_defineTag('progress-bar-l0cop9-uz',this,{cssns: 'l0cop9_uu',cssid: 'l0cop9-uu',name: 'ProgressBar'});
	}
};
let c$45 = Symbol();
class IconComponent extends imba_Component {
	
	static {
		register$(this,c$45,'icon',2);
		imba_defineTag('icon',this,{cssns: 'l0cop9_va',cssid: 'l0cop9-va'});
	}
};

// ELEMENT[epic=ELEMENT, seq=43] Gift Icon
let c$46 = Symbol();
class IGiftComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1502, $1503, $1504, $1506 = this._ns_ || '', $1507, $1508, $1509, $1510, $1511, $1512;
		$1502=this;
		$1502[$beforeReconcile$]();
		($1503=$1504=1,$1502[$1505] === 1) || ($1503=$1504=0,$1502[$1505]=1);
		$1503 || ($1507=imba_createSVGElement('svg',$1502,`icon icon-tabler icon-tabler-gift ${$1506}`,null));
		$1503 || ($1507.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1503 || ($1507.set$('width',"44"));
		$1503 || ($1507.set$('height',"44"));
		$1503 || ($1507.set$('viewBox',"0 0 24 24"));
		$1503 || ($1507.set$('stroke-width',"1.5"));
		$1503 || ($1507.set$('stroke',"currentColor"));
		$1503 || ($1507.set$('fill',"none"));
		$1503 || ($1507.set$('stroke-linecap',"round"));
		$1503 || ($1507.set$('stroke-linejoin',"round"));
		$1503 || ($1508=imba_createSVGElement('path',$1507,`${$1506}`,null));
		$1503 || ($1508.set$('stroke',"none"));
		$1503 || ($1508.set$('d',"M0 0h24v24H0z"));
		$1503 || ($1508.set$('fill',"none"));
		;
		$1503 || ($1509=imba_createSVGElement('rect',$1507,`${$1506}`,null));
		$1503 || ($1509.set$('x',"3"));
		$1503 || ($1509.set$('y',"8"));
		$1503 || ($1509.set$('width',"18"));
		$1503 || ($1509.set$('height',"4"));
		$1503 || ($1509.set$('rx',"1"));
		;
		$1503 || ($1510=imba_createSVGElement('line',$1507,`${$1506}`,null));
		$1503 || ($1510.set$('x1',"12"));
		$1503 || ($1510.set$('y1',"8"));
		$1503 || ($1510.set$('x2',"12"));
		$1503 || ($1510.set$('y2',"21"));
		;
		$1503 || ($1511=imba_createSVGElement('path',$1507,`${$1506}`,null));
		$1503 || ($1511.set$('d',"M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"));
		;
		$1503 || ($1512=imba_createSVGElement('path',$1507,`${$1506}`,null));
		$1503 || ($1512.set$('d',"M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"));
		;
		;
		$1502[$afterReconcile$]($1504);
		return $1502;
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
		var $1513, $1514, $1515, $1517 = this._ns_ || '', $1518, $1519, $1520, $1521, $1522, $1523, $1524;
		$1513=this;
		$1513[$beforeReconcile$]();
		($1514=$1515=1,$1513[$1516] === 1) || ($1514=$1515=0,$1513[$1516]=1);
		$1514 || ($1518=imba_createSVGElement('svg',$1513,`icon icon-tabler icon-tabler-building-store ${$1517}`,null));
		$1514 || ($1518.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1514 || ($1518.set$('width',"44"));
		$1514 || ($1518.set$('height',"44"));
		$1514 || ($1518.set$('viewBox',"0 0 24 24"));
		$1514 || ($1518.set$('stroke-width',"1.5"));
		$1514 || ($1518.set$('stroke',"currentColor"));
		$1514 || ($1518.set$('fill',"none"));
		$1514 || ($1518.set$('stroke-linecap',"round"));
		$1514 || ($1518.set$('stroke-linejoin',"round"));
		$1514 || ($1519=imba_createSVGElement('path',$1518,`${$1517}`,null));
		$1514 || ($1519.set$('stroke',"none"));
		$1514 || ($1519.set$('d',"M0 0h24v24H0z"));
		$1514 || ($1519.set$('fill',"none"));
		;
		$1514 || ($1520=imba_createSVGElement('line',$1518,`${$1517}`,null));
		$1514 || ($1520.set$('x1',"3"));
		$1514 || ($1520.set$('y1',"21"));
		$1514 || ($1520.set$('x2',"21"));
		$1514 || ($1520.set$('y2',"21"));
		;
		$1514 || ($1521=imba_createSVGElement('path',$1518,`${$1517}`,null));
		$1514 || ($1521.set$('d',"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"));
		;
		$1514 || ($1522=imba_createSVGElement('line',$1518,`${$1517}`,null));
		$1514 || ($1522.set$('x1',"5"));
		$1514 || ($1522.set$('y1',"21"));
		$1514 || ($1522.set$('x2',"5"));
		$1514 || ($1522.set$('y2',"10.85"));
		;
		$1514 || ($1523=imba_createSVGElement('line',$1518,`${$1517}`,null));
		$1514 || ($1523.set$('x1',"19"));
		$1514 || ($1523.set$('y1',"21"));
		$1514 || ($1523.set$('x2',"19"));
		$1514 || ($1523.set$('y2',"10.85"));
		;
		$1514 || ($1524=imba_createSVGElement('path',$1518,`${$1517}`,null));
		$1514 || ($1524.set$('d',"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"));
		;
		;
		$1513[$afterReconcile$]($1515);
		return $1513;
	}
	static {
		register$(this,c$47,'i-market',2);
		imba_defineTag('i-market',this,{});
	}
};
let c$48 = Symbol();
class ICompassComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1525, $1526, $1527, $1529 = this._ns_ || '', $1530, $1531, $1532, $1533, $1534, $1535, $1536, $1537;
		$1525=this;
		$1525[$beforeReconcile$]();
		($1526=$1527=1,$1525[$1528] === 1) || ($1526=$1527=0,$1525[$1528]=1);
		$1526 || ($1530=imba_createSVGElement('svg',$1525,`icon icon-tabler icon-tabler-compass ${$1529}`,null));
		$1526 || ($1530.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1526 || ($1530.set$('width',"44"));
		$1526 || ($1530.set$('height',"44"));
		$1526 || ($1530.set$('viewBox',"0 0 24 24"));
		$1526 || ($1530.set$('stroke-width',"1.5"));
		$1526 || ($1530.set$('stroke',"currentColor"));
		$1526 || ($1530.set$('fill',"none"));
		$1526 || ($1530.set$('stroke-linecap',"round"));
		$1526 || ($1530.set$('stroke-linejoin',"round"));
		$1526 || ($1531=imba_createSVGElement('path',$1530,`${$1529}`,null));
		$1526 || ($1531.set$('stroke',"none"));
		$1526 || ($1531.set$('d',"M0 0h24v24H0z"));
		$1526 || ($1531.set$('fill',"none"));
		;
		$1526 || ($1532=imba_createSVGElement('polyline',$1530,`${$1529}`,null));
		$1526 || ($1532.set$('points',"8 16 10 10 16 8 14 14 8 16"));
		;
		$1526 || ($1533=imba_createSVGElement('circle',$1530,`${$1529}`,null));
		$1526 || ($1533.set$('cx',"12"));
		$1526 || ($1533.set$('cy',"12"));
		$1526 || ($1533.set$('r',"9"));
		;
		$1526 || ($1534=imba_createSVGElement('line',$1530,`${$1529}`,null));
		$1526 || ($1534.set$('x1',"12"));
		$1526 || ($1534.set$('y1',"3"));
		$1526 || ($1534.set$('x2',"12"));
		$1526 || ($1534.set$('y2',"5"));
		;
		$1526 || ($1535=imba_createSVGElement('line',$1530,`${$1529}`,null));
		$1526 || ($1535.set$('x1',"12"));
		$1526 || ($1535.set$('y1',"19"));
		$1526 || ($1535.set$('x2',"12"));
		$1526 || ($1535.set$('y2',"21"));
		;
		$1526 || ($1536=imba_createSVGElement('line',$1530,`${$1529}`,null));
		$1526 || ($1536.set$('x1',"3"));
		$1526 || ($1536.set$('y1',"12"));
		$1526 || ($1536.set$('x2',"5"));
		$1526 || ($1536.set$('y2',"12"));
		;
		$1526 || ($1537=imba_createSVGElement('line',$1530,`${$1529}`,null));
		$1526 || ($1537.set$('x1',"19"));
		$1526 || ($1537.set$('y1',"12"));
		$1526 || ($1537.set$('x2',"21"));
		$1526 || ($1537.set$('y2',"12"));
		;
		;
		$1525[$afterReconcile$]($1527);
		return $1525;
	}
	static {
		register$(this,c$48,'i-compass',2);
		imba_defineTag('i-compass',this,{});
	}
};
let c$49 = Symbol();
class IPeopleComponent extends imba_getSuperTagType('icon','IconComponent',imba_Component) {
	render(){
		var $1538, $1539, $1540, $1542 = this._ns_ || '', $1543, $1544, $1545, $1546, $1547, $1548;
		$1538=this;
		$1538[$beforeReconcile$]();
		($1539=$1540=1,$1538[$1541] === 1) || ($1539=$1540=0,$1538[$1541]=1);
		$1539 || ($1543=imba_createSVGElement('svg',$1538,`icon icon-tabler icon-tabler-friends ${$1542}`,null));
		$1539 || ($1543.set$('xmlns',"http://www.w3.org/2000/svg"));
		$1539 || ($1543.set$('width',"44"));
		$1539 || ($1543.set$('height',"44"));
		$1539 || ($1543.set$('viewBox',"0 0 24 24"));
		$1539 || ($1543.set$('stroke-width',"1.5"));
		$1539 || ($1543.set$('stroke',"currentColor"));
		$1539 || ($1543.set$('fill',"none"));
		$1539 || ($1543.set$('stroke-linecap',"round"));
		$1539 || ($1543.set$('stroke-linejoin',"round"));
		$1539 || ($1544=imba_createSVGElement('path',$1543,`${$1542}`,null));
		$1539 || ($1544.set$('stroke',"none"));
		$1539 || ($1544.set$('d',"M0 0h24v24H0z"));
		$1539 || ($1544.set$('fill',"none"));
		;
		$1539 || ($1545=imba_createSVGElement('circle',$1543,`${$1542}`,null));
		$1539 || ($1545.set$('cx',"7"));
		$1539 || ($1545.set$('cy',"5"));
		$1539 || ($1545.set$('r',"2"));
		;
		$1539 || ($1546=imba_createSVGElement('path',$1543,`${$1542}`,null));
		$1539 || ($1546.set$('d',"M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"));
		;
		$1539 || ($1547=imba_createSVGElement('circle',$1543,`${$1542}`,null));
		$1539 || ($1547.set$('cx',"17"));
		$1539 || ($1547.set$('cy',"5"));
		$1539 || ($1547.set$('r',"2"));
		;
		$1539 || ($1548=imba_createSVGElement('path',$1543,`${$1542}`,null));
		$1539 || ($1548.set$('d',"M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"));
		;
		;
		$1538[$afterReconcile$]($1540);
		return $1538;
	}
	static {
		register$(this,c$49,'i-people',2);
		imba_defineTag('i-people',this,{});
	}
};

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
		var $1549, $1550, $1551, $1553, $1555, $1556, $1558, $1559, $1560, $1562, $1563, $1564, $1566, $1569, $1574, $1575, $1577, $1578, $1580, $1581, $1583, $1584;
		$1549=this;
		$1549[$beforeReconcile$]();
		($1550=$1551=1,$1549[$1552] === 1) || ($1550=$1551=0,$1549[$1552]=1);
		($1555=$1556=1,$1553=$1549[$1554]) || ($1555=$1556=0,$1549[$1554]=$1553=imba_createElement('div',$1549,'l0cop9-wi circular l0cop9_wg',null));
		($1558=this.size + 'px',$1558===$1549[$1557] || ($1553.css$var('--l0cop9_wj',$1549[$1557]=$1558,null,'s')));
		$1555 || ($1559=imba_createElement('div',$1553,'l0cop9-wk inner l0cop9_wg',null));
		($1562=$1563=1,$1560=$1549[$1561]) || ($1562=$1563=0,$1549[$1561]=$1560=imba_createElement('div',$1559,'l0cop9-wl title l0cop9_wg',null));
		$1564=$1549.__slots.__;
		($1560[$1565] = $1560[$placeChild$]($1564,384,$1560[$1565]));
		;
		$1562 || !$1560.setup || $1560.setup($1563);
		$1560[$afterVisit$]($1563);
		;
		;
		{($1566=$1549[$1567]) || ($1549[$1567]=$1566=imba_createElement('div',$1553,'circle l0cop9_wg',null));
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
		($1569=this.size + "px",$1569===$1549[$1568] || ($1566.css$var('--l0cop9_wo',$1549[$1568]=$1569,null,'clip')));
		($1569=this.size + "px",$1569===$1549[$1570] || ($1566.css$var('--l0cop9_wp',$1549[$1570]=$1569,null,'clip')));
		($1569=(this.size / 2) + "px",$1569===$1549[$1571] || ($1566.css$var('--l0cop9_wq',$1549[$1571]=$1569,null,'clip')));
		($1569=(this.size / 2) + "px",$1569===$1549[$1572] || ($1566.css$var('--l0cop9_wr',$1549[$1572]=$1569,null,'clip')));
		($1569=this.size + "px",$1569===$1549[$1573] || ($1566.css$var('--l0cop9_ws',$1549[$1573]=$1569,null,'clip')));
		$1555 || ($1574=imba_createElement('div',$1566,'bar left l0cop9_wn l0cop9_wg',null));
		($1577=$1578=1,$1575=$1549[$1576]) || ($1577=$1578=0,$1549[$1576]=$1575=imba_createElement('div',$1574,'l0cop9-wu progress l0cop9_wn l0cop9_wg',null));
		(left_progress===$1549[$1579] || ($1575.css$var('--l0cop9_wv',$1549[$1579]=left_progress,null,'rotate')));
		;
		;
		$1555 || ($1580=imba_createElement('div',$1566,'bar right l0cop9_wn l0cop9_wg',null));
		($1583=$1584=1,$1581=$1549[$1582]) || ($1583=$1584=0,$1549[$1582]=$1581=imba_createElement('div',$1580,'l0cop9-wx progress l0cop9_wn l0cop9_wg',null));
		(right_progress===$1549[$1585] || ($1581.css$var('--l0cop9_wy',$1549[$1585]=right_progress,null,'rotate')));
		;
		;
		};
		;
		$1549[$afterReconcile$]($1551);
		return $1549;
		
	}
	static {
		register$(this,c$50,'ElemProgressRing',2);
		imba_defineTag('elem-progress-ring-l0cop9-wz',this,{cssns: 'l0cop9_wg',cssid: 'l0cop9-wg',name: 'ElemProgressRing'});
	}
};

imba_styles.register('l0cop9',".l0cop9-af, .l0cop9_wn.bar, .l0cop9_ic.word, .l0cop9_kc.switch, .l0cop9_kr.switch, .l0cop9_wn.progress, .l0cop9_uu.progress-fg, .l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.bar {\n--e_ad:0ms;--e_af:cubic-bezier(0.23, 1, 0.32, 1);--e_aw:0ms;\n--e_sd:var(--e_ad);--e_sf:var(--e_af);--e_sw:var(--e_aw);\n--e_od:var(--e_sd);--e_of:var(--e_sf);--e_ow:var(--e_sw);\n--e_cd:var(--e_sd);--e_cf:var(--e_sf);--e_cw:var(--e_sw);\n--e_bd:var(--e_sd);--e_bf:var(--e_sf);--e_bw:var(--e_sw);\n--e_td:var(--e_bd);--e_tf:var(--e_bf);--e_tw:var(--e_bw);\n--e_b:var(--e_bd) var(--e_bf) var(--e_bw);\n--e_c:var(--e_cd) var(--e_cf) var(--e_cw);\n--e_rest:any;\ntransition:\n\tall var(--e_ad) var(--e_af) var(--e_aw),\n\topacity var(--e_od) var(--e_of) var(--e_ow),\n\ttransform var(--e_td) var(--e_tf) var(--e_tw),\n\tcolor var(--e_c),background-color var(--e_c),border-color var(--e_c),fill var(--e_c),stroke var(--e_c), outline-color var(--e_c), box-shadow var(--e_c), filter var(--e_c),\n\tinset var(--e_b), width var(--e_b),height var(--e_b),max-width var(--e_b),max-height var(--e_b),min-width var(--e_b),min-height var(--e_b),border-width var(--e_b),outline-width var(--e_b),stroke-width var(--e_b),margin var(--e_b),padding var(--e_b),\n\tvar(--e_rest);\n}\n\n.l0cop9-wu, .l0cop9-wx, .l0cop9_wg.circular .l0cop9_wg.inner, .l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.left {\n--t_x:0;--t_y:0;--t_rotate:0;\n--t_scale:1;--t_scale-x:1;--t_scale-y:1;\ntransform: translate(var(--t_x),var(--t_y)) rotate(var(--t_rotate))\n\tscaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\n}\n\n.l0cop9-af {display: flex;\nflex-direction: row;\n--e_rest: margin-left calc(var(--u_dur,1dur) * 2) !important;\nbackground: hsla(0.00,0.00%,100.00%,100%);}\n.l0cop9-af.\\@darkmode {background: hsla(0.00,0.00%,0.00%,100%);}\n.l0cop9-af.open {margin-left: 0px;}\n\n.l0cop9-ai:not(#_):not(#_) {grid-template-rows: calc(var(--u_topbar,1topbar) + calc(var(--u_sp,1sp) * 2)) auto 40px;}\n.l0cop9-ai > main:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.l0cop9-ai > main.\\@darkmode:not(#_):not(._0) {background: hsla(240.00,5.88%,10.00%,50%);}\n\n.l0cop9-ak:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);}\n\n.l0cop9-at:not(#_):not(#_) {color: hsla(240.00,5.88%,10.00%,100%);\nheight: var(--u_bottombar,1bottombar);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\nbackground: hsla(var(--hue3),1);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ngap: calc(var(--u_sp,1sp) * 0.2);\n--u_rg: calc(var(--u_sp,1sp) * 0.2);\n--u_cg: calc(var(--u_sp,1sp) * 0.2);}\n.l0cop9-at.\\@darkmode:not(#_):not(#_) {color: hsla(240.00,4.76%,95.88%,100%);\nbackground: hsla(var(--hue8),1);}\n\na.l0cop9_at:not(#_) {color: hsla(var(--hue7),1);}\na.l0cop9_at.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\napp-dashboard { display:block; }\n\n.l0cop9-aw {gap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nh1.l0cop9_aw:not(#_) {margin-top: var(--u_sp,1sp);\nfont-size: 24px;\nline-height: 36px;\n--u_lh: 36px;}\n\n.l0cop9_aw.button:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,5.26%,26.08%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\n.l0cop9_aw.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(240.00,5.88%,90.00%,100%);}\n\n.l0cop9-ax:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;\npadding-top: calc(var(--u_sp,1sp) * 5);\npadding-bottom: calc(var(--u_sp,1sp) * 5);\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);}\n@media (min-width: 1024px){\n.l0cop9-ax:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;}\n}\n\n.l0cop9-ay:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;\npadding: calc(var(--u_sp,1sp) * 2);\ngap: calc(var(--u_sp,1sp) * 0.6);\n--u_rg: calc(var(--u_sp,1sp) * 0.6);\n--u_cg: calc(var(--u_sp,1sp) * 0.6);}\n@media (min-width: 1024px){\n.l0cop9-ay:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;}\n}\n\n.l0cop9-az:not(#_):not(#_):not(#_) {color: hsla(var(--hue5),1);\nfont-weight: bold;\nfont-size: 1.6em;}\n\n.l0cop9-ba:not(#_):not(#_):not(#_) {color: hsla(217.89,10.61%,64.90%,100%);\nfont-weight: thin;\nfont-size: 1.3em;}\n\n.l0cop9-bb:not(#_):not(#_):not(#_) {height: calc(var(--u_sp,1sp) * 2);}\n\n.l0cop9-be:not(#_):not(#_):not(#_) {width: 450px;\nheight: 300px;}\n@media (min-width: 768px){\n.l0cop9-be:not(#_):not(#_):not(#_) {width: 600px;\nheight: 400px;}\n}\n\nlanding-page { display:block; }\n\n.l0cop9-bf {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\na.l0cop9_bf:not(#_),button.l0cop9_bf:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,5.26%,26.08%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\na.l0cop9_bf.\\@darkmode:not(#_),button.l0cop9_bf.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(240.00,5.88%,90.00%,100%);}\n\n.l0cop9-bh:not(#_):not(#_):not(#_) {width: 200px;\nmargin-right: auto;\ncursor: pointer;}\n\ntop-navigation-l0cop9-bq { display:block; }\n\n.l0cop9-br {padding: var(--u_sp,1sp);\nwidth: 100%;}\n\n.l0cop9_br.page-wrapper:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;}\n\n.l0cop9_bt.wrapper:not(#_) {background: hsla(var(--hue3),1);\ncolor: hsla(var(--hue9),1);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\n.l0cop9_bt.wrapper.\\@darkmode:not(#_) {background: hsla(var(--hue9),1);\ncolor: hsla(var(--hue2),1);}\n\n.l0cop9-bu:not(#_):not(#_):not(#_) {padding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\ntext-align: center;\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;}\n\n.l0cop9-bw:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.l0cop9-bx:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.l0cop9-by:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.l0cop9-cb:not(#_):not(#_):not(#_) {width: 200px;\nheight: 260px;}\n\napp-dictionary-page { display:block; }\n\n.l0cop9-cc {color: hsla(240.00,3.70%,15.88%,100%);\nwidth: 600px;\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);}\n.l0cop9-cc.\\@darkmode {color: hsla(240.00,5.88%,90.00%,100%);}\n\n.l0cop9_cc.row:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\ncursor: pointer;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: space-between;\norder: 2;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.4);\npadding-bottom: calc(var(--u_sp,1sp) * 0.4);\nborder-radius: 4px;}\n.l0cop9_cc.row.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n.l0cop9_cc.row:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue1),1);}\n.l0cop9_cc.row:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n.l0cop9_cc.row.learned:not(#_) {background: hsla(var(--hue3),50%);}\n.l0cop9_cc.row.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);}\n\n.l0cop9_cc.mono:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n\n.l0cop9_cc.err:not(#_) {color: hsla(0.00,90.60%,70.78%,100%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\nbutton-wrapper.l0cop9_cc:not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;}\n\n.l0cop9_cc.play-audio:not(#_) {width: 2em;\ncursor: pointer;}\n\nsvg.l0cop9_cc:not(#_) {width: 24px;\nheight: 24px;}\nsvg.l0cop9_cc :is(path,path-tag).l0cop9_cc:not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(243.40,75.36%,58.63%,100%);}\n\n\n.l0cop9_cc.searchbar input.l0cop9_cc:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nbackground: hsla(240.00,5.88%,90.00%,100%);\nborder-radius: 4px;\nwidth: 100%;\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;\norder: 1;}\n.l0cop9_cc.searchbar input.l0cop9_cc.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n.l0cop9_cc.searchbar input.l0cop9_cc:is(:focus,.\\@focus):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9_cc.searchbar input.l0cop9_cc:is(:focus,.\\@focus).\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.l0cop9-ce:not(#_):not(#_):not(#_) {order: 0;}\n\n.l0cop9-ch:not(#_):not(#_):not(#_) {order: 0;}\n\napp-dictionary { display:block; }\n\n.l0cop9-cv {width: 100%;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);}\n\nuser-page { display:block; }\n\n.l0cop9-da:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);\nbackground: hsla(355.71,100.00%,97.25%,100%);\nborder: 2px solid hsla(0.00,0.00%,0.00%,1);\nborder-radius: 4px;\nmargin: var(--u_sp,1sp);}\n\ncms-admin-page { display:block; }\n\n.l0cop9-de:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(228.00,96.49%,88.82%,100%);}\n\ncmslearn-module-list-l0cop9-dg { display:block; }\n\n.l0cop9_dh.meta:not(#_) {padding: var(--u_sp,1sp);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\nborder-style: solid;\nborder-width: 2px;\nborder-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}\n\n.l0cop9_dh.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n\n.l0cop9-di:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nmargin: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);}\n\n.l0cop9-dj:not(#_):not(#_):not(#_) {font-size: 20px;\nline-height: 30px;\n--u_lh: 30px;}\n\n.l0cop9-dk:not(#_):not(#_):not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9-dl:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\n.l0cop9-dm:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(220.00,13.04%,90.98%,100%);\nborder-radius: 3px;}\n\n.l0cop9-dp:not(#_):not(#_) {height: 300px;\noverflow: auto;}\n\ncms-collection-card { display:block; }\n\n.l0cop9-dr:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(228.00,96.49%,88.82%,100%);}\n\ncmslesson-list-l0cop9-dt { display:block; }\n\n.l0cop9_du.meta:not(#_) {padding: var(--u_sp,1sp);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\nborder-style: solid;\nborder-width: 2px;\nborder-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}\n\n.l0cop9_du.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n\n.l0cop9-dv:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nmargin: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);}\n\n.l0cop9-dw:not(#_):not(#_):not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9-dx:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\n.l0cop9-dy:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(220.00,13.04%,90.98%,100%);\nborder-radius: 3px;}\n\n.l0cop9-ec:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\ncmslesson-card-l0cop9-ed { display:block; }\n\n.l0cop9-ef:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(228.00,96.49%,88.82%,100%);}\n\ncmschapter-list-l0cop9-eh { display:block; }\n\n.l0cop9_ei.meta:not(#_) {padding: var(--u_sp,1sp);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\nborder-style: solid;\nborder-width: 2px;\nborder-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}\n\n.l0cop9_ei.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n\n.l0cop9-ej:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nmargin: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);}\n\n.l0cop9-ek:not(#_):not(#_):not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9-el:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(228.00,96.49%,88.82%,100%);\nborder-radius: 3px;}\n\n.l0cop9-em:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nbackground: hsla(220.00,13.04%,90.98%,100%);\nborder-radius: 3px;}\n\ncmschapter-card-l0cop9-eq { display:block; }\n\n.l0cop9-er:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;\npadding: calc(var(--u_sp,1sp) * 2);}\n\n.l0cop9-es:not(#_):not(#_):not(#_) {color: hsla(216.92,19.12%,26.67%,100%);\npadding: calc(var(--u_sp,1sp) * 2);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;}\n\n.l0cop9-ex:not(#_):not(#_):not(#_) {display: block;\nbackground: hsla(212.73,26.83%,83.92%,100%);\ncolor: hsla(220.91,39.29%,10.98%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);}\n\ninfo-page { display:block; }\n\n.l0cop9-ez {padding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\nposition: relative;}\n\n.l0cop9_ez.bg:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\nwidth: 100%;\nheight: 100vh;\ndisplay: block;\nposition: absolute;\nz-index: 0;}\n\n.l0cop9_ez.phonetics-layout:not(#_) {z-index: 10;\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nphonetics-page { display:block; }\n\n.l0cop9_fe.chart-wrapper:not(#_) {padding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nalign-items: end;}\n\n.l0cop9_fe.row:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;}\n.l0cop9_fe.row.one:not(#_) {width: 200px;}\n.l0cop9_fe.row.two:not(#_) {width: 180px;}\n.l0cop9_fe.row.three:not(#_) {width: 160px;}\n.l0cop9_fe.row.four:not(#_) {width: 140px;}\n\nspan.l0cop9_fe:not(#_) {font-family: var(--font-monospace,monospace);\ntext-align: center;\ncursor: pointer;\nbackground: hsla(240.00,4.88%,83.92%,100%);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.6);\npadding-bottom: calc(var(--u_sp,1sp) * 0.6);\nborder-radius: 4px;\nwidth: 50px;}\nspan.l0cop9_fe.\\@darkmode:not(#_) {background: hsla(240.00,3.83%,46.08%,100%);}\nspan.l0cop9_fe:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue2),1);}\nspan.l0cop9_fe:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue7),1);}\n\nnav.l0cop9_fe:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\nplace-content: center;\nplace-items: center;}\nnav.l0cop9_fe button.l0cop9_fe:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nborder-radius: 4px;\ncursor: pointer;\ntext-align: center;\nbackground: hsla(240.00,5.03%,64.90%,100%);}\nnav.l0cop9_fe button.l0cop9_fe.\\@darkmode:not(#_) {background: hsla(240.00,5.20%,33.92%,100%);}\nnav.l0cop9_fe button.l0cop9_fe:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue4),1);}\nnav.l0cop9_fe button.l0cop9_fe:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue6),1);}\n\nphonetic-vowels-l0cop9-gk { display:block; }\n\n.l0cop9-gl {width: 100%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngrid-template-columns: var(--u_lessonbar,1lessonbar) var(--u_phrasebar,1phrasebar) auto;\npadding: var(--u_sp,1sp);}\n\n.l0cop9_gl.collection-collection:not(#_) {display: flex;\nflex-direction: row;\nwidth: 100%;}\n\n.l0cop9_gl.close-leftbar:not(#_) {margin-left: calc(var(--u_lessonbar,1lessonbar) * -1);}\n\n.l0cop9_gl.left-bar:not(#_) {flex-basis: var(--u_lessonbar,1lessonbar);\nheight: 100vh;}\n\ncollection-page-l0cop9-gq { display:block; }\n\n.l0cop9-gs:not(#_):not(#_):not(#_) {padding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nfont-size: 20px;\nline-height: 30px;\n--u_lh: 30px;}\n\nuser-page-owned-collections { display:block; }\n\n.l0cop9-gv {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nbackground: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,3.70%,15.88%,100%);}\n.l0cop9-gv.\\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);\ncolor: hsla(240.00,4.88%,83.92%,100%);}\n\n.l0cop9_gv.card-wrapper:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: start;\nflex-wrap: wrap;}\n@media (max-width: 1023px){\n.l0cop9_gv.card-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: start;}\n}\n\nuser-page-locked-collections { display:block; }\n\n.l0cop9-ha {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n@media (min-width: 1024px){\n.l0cop9-ha {display: flex;\nflex-direction: row;}\n}\n\n.l0cop9_ha.collection-grid:not(#_) {display: grid;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 1fr;}\n@media (min-width: 768px){\n.l0cop9_ha.collection-grid:not(#_) {grid-template-columns: minmax(var(--u_rightbar,1rightbar), calc(var(--u_rightbar,1rightbar) * 3)) var(--u_rightbar,1rightbar);}\n}\n\n.l0cop9_ha.image:not(#_) {border-radius: var(--u_rd,1rd);\naspect-ratio: 2 / 1;\nwidth: 100%;}\n\n.l0cop9_ha.left:not(#_),.l0cop9_ha.right:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9_ha.phonetics:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\ndisplay: flex;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nflex-wrap: wrap;}\n\nlesson-layout { display:block; }\n\n\nnav.l0cop9_hx:not(#_) {display: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\nbutton.l0cop9_hx:not(#_) {list-style-type: none;\nbackground: hsla(240.00,5.88%,90.00%,100%);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\nborder-radius: 3px;}\nbutton.l0cop9_hx:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue3),1);}\n\nadmin-tools-l0cop9-ib { display:block; }\n\n.l0cop9-ic {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);\nflex-flow: wrap;}\n\n.l0cop9_ic.word-wrapper:not(#_) {display: flex;\nflex-direction: row;\nflex-flow: wrap;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.l0cop9_ic.word:not(#_) {font-family: var(--khmer);\nfont-size: 24px;\nline-height: 2em;\n--u_lh: 2em;\npadding-top: .4em;\nuser-select: none;\n-webkit-user-select: none;\ncursor: pointer;\npadding-left: calc(var(--u_sp,1sp) * 0.5);\npadding-right: calc(var(--u_sp,1sp) * 0.5);\nborder-radius: 4px;\n--e_rest: all var(--u_dur,1dur) !important;\nbackground: hsla(var(--hue0),50%);}\n.l0cop9_ic.word.\\@darkmode:not(#_) {background: hsla(var(--hue5),20%);}\n.l0cop9_ic.word:is(:hover,.\\@hover):not(#_),.l0cop9_ic.word.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue1),1) inset;}\n.l0cop9_ic.word:is(:hover,.\\@hover).\\@darkmode:not(#_),.l0cop9_ic.word.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}\n.l0cop9_ic.word.known:not(#_) {background: hsla(var(--hue1),1);}\n.l0cop9_ic.word.known.\\@darkmode:not(#_) {background: hsla(var(--hue5),50%);}\n.l0cop9_ic.word.known:is(:hover,.\\@hover):not(#_),.l0cop9_ic.word.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),1) inset;}\n.l0cop9_ic.word.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.l0cop9_ic.word.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}\n\n.l0cop9_ic.not_in_dict:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}\n.l0cop9_ic.not_in_dict.\\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,20%);}\n.l0cop9_ic.not_in_dict:is(:hover,.\\@hover):not(#_),.l0cop9_ic.not_in_dict.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(355.56,100.00%,94.71%,100%) inset;}\n.l0cop9_ic.not_in_dict:is(:hover,.\\@hover).\\@darkmode:not(#_),.l0cop9_ic.not_in_dict.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}\n.l0cop9_ic.not_in_dict.known:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}\n.l0cop9_ic.not_in_dict.known.\\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,50%);}\n.l0cop9_ic.not_in_dict.known:is(:hover,.\\@hover):not(#_),.l0cop9_ic.not_in_dict.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,100%) inset;}\n.l0cop9_ic.not_in_dict.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.l0cop9_ic.not_in_dict.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}\n\nword-nav-l0cop9-ij { display:block; }\n\n.l0cop9-ik {padding: var(--u_sp,1sp);\ndisplay: grid;\ngrid-auto-flow: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: none;\nmin-height: calc(100vh - var(--u_topbar,1topbar));\nmax-width: 1000px;\nmargin-left: auto;\nmargin-right: auto;}\n@media (min-width: 1024px){\n.l0cop9-ik {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngrid-template-columns: 2fr 1fr;}\n}\n\n.l0cop9_ik.buy-cards:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n@media (min-width: 1024px){\n.l0cop9_ik.buy-cards:not(#_) {display: flex;\nflex-direction: column;}\n}\n\nmain.l0cop9_ik:not(#_) {flex-grow: 1;\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nwidth: 100%;}\n\n.l0cop9_ik.image:not(#_) {background: hsla(var(--hue5),1);\npadding: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\naspect-ratio: 16 / 9;}\n\n.l0cop9_ik.actions:not(#_) {display: grid;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: end;\ngrid-template-columns: 1fr 1fr;}\n.l0cop9_ik.actions button.l0cop9_ik:not(#_) {padding-left: calc(var(--u_sp,1sp) * 1.5);\npadding-right: calc(var(--u_sp,1sp) * 1.5);\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\nbackground: hsla(var(--hue3),1);\ncolor: hsla(var(--hue9),1);\nfont-weight: bold;\nfont-size: 20px;\ndisplay: flex;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n.l0cop9_ik.actions button.l0cop9_ik.outline:not(#_) {background: none;}\n\n.l0cop9-io:not(#_):not(#_):not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\nwidth: 100%;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 2fr 1fr;}\n\n.l0cop9-ir:not(#_):not(#_):not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\nwidth: 100%;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 1fr;}\n\nlearn-module-preview-l0cop9-iv { display:block; }\n\n.l0cop9-iw {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\npadding: calc(var(--u_sp,1sp) * 0);\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);}\n\n.l0cop9_iw.user-image:not(#_) {width: calc(var(--u_sp,1sp) * 4);\nheight: calc(var(--u_sp,1sp) * 4);\nborder-radius: 9999px;\nborder: 3px solid hsla(240.00,4.76%,95.88%,20%);\nbox-shadow: var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4)));}\n\n.l0cop9_iw.user-info:not(#_) {width: 100%;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\ndisplay: flex;\nflex-direction: column;\nfont-family: 'Merriweather Sans', sans-serif;}\n\n.l0cop9_iw.user-stats:not(#_) {display: flex;\nflex-direction: row;\nalign-items: flex-end;}\n.l0cop9_iw.user-stats *:first-child:not(#_):not(._0) {margin-right: auto;}\n\n.l0cop9_iw.user-name:not(#_) {margin-right: auto;\nfont-weight: bold;\nfont-size: 20px;}\n\n.l0cop9_iw.user-wordcount:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-size: 10px;\nline-height: 16px;\n--u_lh: 16px;}\n.l0cop9_iw.user-wordcount.\\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}\n\n.l0cop9_iw.user-progress:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\nheight: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: relative;\nz-index: 0;\noverflow: hidden;}\n.l0cop9_iw.user-progress.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n.l0cop9_iw.user-progress .l0cop9_iw.progress-fg:not(#_) {background: hsla(var(--hue5),1);\nheight: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: absolute;\ntop: 0rem;\nright: 90%;\nz-index: 10;\nborder-top-right-radius: 9999px;\nborder-bottom-right-radius: 9999px;}\n\n.l0cop9_iw.user-settings:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n.l0cop9_iw.user-settings.\\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}\n.l0cop9_iw.user-settings:is(:hover,.\\@hover):not(#_) {color: hsla(var(--hue5),1);}\n\nuser-card-l0cop9-jh { display:block; }\n\n.l0cop9-ji {display: flex;\nflex-direction: column;\nalign-items: center;\nborder-radius: var(--u_rd,1rd);}\n.l0cop9-ji.collection_active {display: flex;\nflex-direction: column;}\n.l0cop9-ji:is(:hover,.\\@hover) {cursor: pointer;}\n.l0cop9-ji:is(:hover,.\\@hover) {background: hsla(0.00,0.00%,98.04%,100%);}\n.l0cop9-ji:is(:hover,.\\@hover).\\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}\n.l0cop9-ji.collection_active {background: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9-ji.collection_active.\\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);}\n\n.l0cop9_ji.image:not(#_) {border-radius: 4px;\noverflow: hidden;\nbackground: hsla(var(--hue1),1);\nborder-style: solid;\nborder-width: 0;\noutline: none;\nwidth: 100%;\naspect-ratio: 16 / 9;}\n\n.l0cop9_ji.card-info:not(#_) {width: 100%;\ndisplay: grid;\ngrid-template-rows: 1fr;}\n\n.l0cop9_ji.card-title:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\npadding-top: calc(var(--u_sp,1sp) * 0.6);\npadding-bottom: calc(var(--u_sp,1sp) * 0.4);}\n.l0cop9_ji.card-title h2.l0cop9_ji:not(#_) {font-size: 24px;\nline-height: 36px;\n--u_lh: 36px;\nfont-weight: bold;}\n\n.l0cop9_ji.progress-percent:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-family: var(--font-monospace,monospace);}\n.l0cop9_ji.progress-percent.\\@darkmode:not(#_) {color: hsla(240.00,3.83%,46.08%,100%);}\n\n.l0cop9_ji.collection-actions:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;}\n.l0cop9_ji.collection-actions a.l0cop9_ji:not(#_) {color: hsla(0.00,0.00%,100.00%,30%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n.l0cop9_ji.collection-actions a.l0cop9_ji:is(:hover,.\\@hover):not(#_) {color: hsla(var(--hue5),1);}\n\n.l0cop9_ji.icon-lock:not(#_) {display: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nbackground: hsla(var(--hue1),1);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nheight: 100%;}\n.l0cop9_ji.icon-lock.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n.l0cop9_ji.icon-lock svg.l0cop9_ji:not(#_) {width: 20px;\nheight: 20px;\nfill: hsla(var(--hue6),1);}\n.l0cop9_ji.icon-lock svg.l0cop9_ji.\\@darkmode:not(#_) {fill: hsla(var(--hue4),1);}\n.l0cop9_ji.icon-lock .l0cop9_ji.collection-price:not(#_) {color: hsla(var(--hue6),1);\nfont-family: var(--font-monospace,monospace);}\n.l0cop9_ji.icon-lock .l0cop9_ji.collection-price.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\n.l0cop9-jq:not(#_):not(#_):not(#_) {--fg: hsla(var(--hue5),1);\n--bg: hsla(240.00,4.88%,83.92%,100%);}\n.l0cop9-jq.\\@darkmode:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.26%,26.08%,100%);}\n\ncollection-card { display:block; }\n\n.l0cop9-js {background: hsla(0.00,0.00%,100.00%,100%);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nwidth: 100%;}\n\n.l0cop9_js.pill:not(#_) {border-radius: 9999px;\nflex-shrink: 1;\nwidth: fit-content;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nbackground: hsla(var(--hue1),1);\ncolor: hsla(var(--hue6),1);}\n.l0cop9_js.pill.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);\ncolor: hsla(var(--hue4),1);}\n\n.l0cop9_js.price:not(#_) {font-weight: bold;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: start;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nmargin-top: calc(var(--u_sp,1sp) * 2);\nmargin-bottom: calc(var(--u_sp,1sp) * 2);}\n\n.l0cop9_js.num:not(#_) {font-size: 48px;\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--copy);}\n\n.l0cop9_js.text:not(#_) {font-size: var(--u_xl,1xl);\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--heading);\ncolor: hsla(0.00,0.00%,63.92%,100%);}\n\n.l0cop9_js.button:not(#_) {border-radius: var(--u_rd,1rd);\ntext-align: center;\npadding: var(--u_sp,1sp);\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncolor: hsla(240.00,5.88%,10.00%,100%);\ncursor: pointer;}\n.l0cop9_js.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(0.00,0.00%,98.04%,100%);}\n.l0cop9_js.button:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue5),1);}\n.l0cop9_js.button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue5),1);}\n\nsell-card-l0cop9-kb { display:block; }\n\n.l0cop9-kc {display: flex;\nflex-direction: row;\njustify-content: space-between;\nbackground: hsla(0.00,0.00%,98.04%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nalign-items: center;}\n.l0cop9-kc.\\@darkmode {background: hsla(240.00,5.88%,10.00%,100%);}\n\n.l0cop9_kc.khmer:not(#_) {color: hsla(var(--hue5),1);}\n\n.l0cop9_kc.switch-wrapper:not(#_) {height: 30px;\nwidth: 110px;\nborder-radius: 9999px;\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncursor: pointer;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}\n.l0cop9_kc.switch-wrapper.\\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}\n.l0cop9_kc.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}\n.l0cop9_kc.switch-wrapper.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n\n.l0cop9_kc.switch:not(#_) {margin-left: 0px;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;\nheight: 30px;\nborder-radius: 9999px;\nborder-style: solid;\nborder-width: 3px;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-color: hsla(240.00,4.88%,83.92%,100%);\nbackground: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);\nwidth: 90px;}\n.l0cop9_kc.switch.\\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.26%,26.08%,100%);}\n.l0cop9_kc.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);\nbackground: hsla(var(--hue2),1);\ncolor: hsla(var(--hue8),1);\nmargin-left: 20px;}\n.l0cop9_kc.switch.learned.\\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);\nbackground: hsla(var(--hue5),1);\ncolor: hsla(var(--hue1),1);}\n\n.l0cop9-kg:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.l0cop9-kh:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.l0cop9-kj:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.l0cop9-kk:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.l0cop9-kn:not(#_):not(#_):not(#_) {font-size: 24px;\nline-height: 36px;\n--u_lh: 36px;}\n\nword-bar-l0cop9-kq { display:block; }\n\n.l0cop9-kr {display: flex;\nflex-direction: column;\nalign-items: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nmin-width: var(--u_rightbar,1rightbar);\nwidth: 100%;}\n\n.l0cop9_kr.khmer:not(#_) {line-height: 60px;\n--u_lh: 60px;\nmargin-top: 20px;\nfont-family: var(--khmer);\ncolor: hsla(var(--hue6),1);}\n\n.l0cop9_kr.phonetic:not(#_) {font-family: var(--font-monospace,monospace);\nfont-size: 20px;\nline-height: 30px;\n--u_lh: 30px;\ncolor: hsla(var(--hue5),1);}\n.l0cop9_kr.phonetic.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\n.l0cop9_kr.switch-wrapper:not(#_) {height: 30px;\nwidth: 110px;\nborder-radius: 9999px;\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncursor: pointer;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}\n.l0cop9_kr.switch-wrapper.\\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}\n.l0cop9_kr.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}\n.l0cop9_kr.switch-wrapper.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n\n.l0cop9_kr.switch:not(#_) {margin-left: 0px;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;\nheight: 30px;\nborder-radius: 9999px;\nborder-style: solid;\nborder-width: 3px;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-color: hsla(240.00,4.88%,83.92%,100%);\nbackground: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);\nwidth: 90px;}\n.l0cop9_kr.switch.\\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.26%,26.08%,100%);}\n.l0cop9_kr.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);\nbackground: hsla(var(--hue2),1);\ncolor: hsla(var(--hue8),1);\nmargin-left: 20px;}\n.l0cop9_kr.switch.learned.\\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);\nbackground: hsla(var(--hue5),1);\ncolor: hsla(var(--hue1),1);}\n\n.l0cop9_kr.resizeable:not(#_) {margin: 0rem;\npadding: 0rem;\nheight: 40px;\nwidth: 100px;\nbackground: hsla(var(--hue4),1);\noverflow: hidden;}\n\n.l0cop9_kr.phonetic-wrapper:not(#_) {cursor: pointer;}\n\n.l0cop9-ku:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.l0cop9-kv:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.l0cop9-kx:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.l0cop9-ky:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\nword-card-l0cop9-lf { display:block; }\n\n.l0cop9-li:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;}\n\n.l0cop9-lj:not(#_):not(#_):not(#_) {width: 2em;\ncursor: pointer;}\n\n.l0cop9-lk:not(#_):not(#_):not(#_) {width: 24px;\nheight: 24px;}\n\n.l0cop9-ll:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(243.40,75.36%,58.63%,100%);}\n\n.l0cop9-lm:not(#_):not(#_):not(#_) {width: 2em;\ncursor: pointer;}\n\n.l0cop9-ln:not(#_):not(#_):not(#_) {width: 24px;\nheight: 24px;}\n\n.l0cop9-lo:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(228.00,96.49%,88.82%,100%);}\n\naudio-player-l0cop9-lp { display:block; }\n\ndefinition-card-l0cop9-ly { display:block; }\n\n.l0cop9_lz.shortcut-wrapper:not(#_) {display: grid;\ngrid-template-columns: 1fr 1fr;\nalign-items: center;}\n\n.l0cop9_lz.key-wrapper:not(#_) {display: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);\nwidth: 100px;}\n.l0cop9_lz.key-wrapper.horizontal:not(#_) {display: flex;\nflex-direction: row;\njustify-content: flex-start;\nalign-items: stretch;\nalign-content: stretch;}\n\n.l0cop9_lz.key-text:not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(0.00,0.00%,32.16%,100%);\nwrap: wrap;\nflex-shrink: 1;\nflex-grow: 0;}\n.l0cop9_lz.key-text.\\@darkmode:not(#_) {color: hsla(0.00,0.00%,63.92%,100%);}\n\n.l0cop9_lz.key:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nborder-radius: 4px;\nfont-size: .7em;\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nline-height: var(--u_sp,1sp);\n--u_lh: var(--u_sp,1sp);\nborder: 1px solid hsla(0.00,0.00%,63.92%,100%);\ncolor: hsla(0.00,0.00%,45.10%,100%);\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n.l0cop9_lz.key.\\@darkmode:not(#_) {border: 1px solid hsla(234.45,89.47%,73.92%,100%);\ncolor: hsla(234.45,89.47%,73.92%,100%);}\n\nshortcut-card-l0cop9-nu { display:block; }\n\n.l0cop9-nv {background: hsla(0.00,0.00%,100.00%,100%);\ndisplay: flex;\nflex-direction: column;}\n\n.l0cop9_nv.letter-row:not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;}\n\n.l0cop9_nv.letter:not(#_) {font-family: var(--khmer);\nfont-size: 30px;\nline-height: 46px;\n--u_lh: 46px;}\n.l0cop9_nv.letter.C1:not(#_),.l0cop9_nv.letter.L1:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n.l0cop9_nv.letter.C2:not(#_),.l0cop9_nv.letter.L2:not(#_) {color: hsla(349.72,89.16%,60.20%,100%);}\n.l0cop9_nv.letter.L2weak:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);}\n\n.l0cop9_nv.vida:not(#_) {text-align: right;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\nfont-size: 16px;\nline-height: 24px;\n--u_lh: 24px;\ncolor: hsla(240.00,5.03%,64.90%,100%);}\n.l0cop9_nv.vida.\\@darkmode:not(#_) {color: hsla(240.00,5.26%,26.08%,100%);}\n\nspelling-card-l0cop9-oe { display:block; }\n\n.l0cop9-of {height: 100vh;\nwidth: var(--u_lessonbar,1lessonbar);\noverflow-y: scroll;\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9_of.title-card:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\npadding: var(--u_sp,1sp);}\n.l0cop9_of.title-card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}\n\n.l0cop9_of.icon-title:not(#_) {display: flex;\nflex-direction: row;}\n\n.l0cop9_of.usage_word_count:not(#_) {font-size: 10px;\nline-height: 16px;\n--u_lh: 16px;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\ncolor: hsla(240.00,5.20%,33.92%,100%);}\n\n.l0cop9-oj:not(#_):not(#_):not(#_) {padding-right: 5px;}\n\n.l0cop9-ok:not(#_):not(#_):not(#_) {font-size: 20px;\nline-height: 30px;\n--u_lh: 30px;}\n\n.l0cop9-om:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.03%,64.90%,30%);}\n.l0cop9-om.\\@darkmode:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.26%,26.08%,100%);}\n\nlesson-nav-l0cop9-oo { display:block; }\n\n.l0cop9-op {cursor: pointer;\nborder-radius: var(--u_rd,1rd);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\ncolor: hsla(240.00,3.83%,46.08%,100%);\nbackground: hsla(0.00,0.00%,100.00%,50%);}\n.l0cop9-op.\\@darkmode {background: hsla(240.00,3.70%,15.88%,20%);}\n.l0cop9-op:is(:hover,.\\@hover) {background: hsla(0.00,0.00%,100.00%,100%);}\n.l0cop9-op:is(:hover,.\\@hover).\\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}\n\n:is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--bg: hsla(240.00,4.88%,83.92%,100%);\n--fg: hsla(240.00,5.26%,26.08%,100%);}\n:is(ProgressBar,ProgressBar-tag).l0cop9_op:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n:is(ProgressBar,ProgressBar-tag).l0cop9_op:is(:hover,.\\@hover) :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--fg: hsla(234.45,89.47%,73.92%,100%);}\n:is(ProgressBar,ProgressBar-tag).l0cop9_op.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,50%);\ncolor: hsla(240.00,4.88%,83.92%,100%);}\n:is(ProgressBar,ProgressBar-tag).l0cop9_op.\\@darkmode :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(240.00,5.20%,33.92%,100%);}\n:is(ProgressBar,ProgressBar-tag).l0cop9_op.\\@darkmode.hover:not(#_),:is(ProgressBar,ProgressBar-tag).l0cop9_op.\\@darkmode:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}\n:is(ProgressBar,ProgressBar-tag).l0cop9_op.\\@darkmode.hover :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_),:is(ProgressBar,ProgressBar-tag).l0cop9_op.\\@darkmode:is(:hover,.\\@hover) :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(234.45,89.47%,73.92%,100%);}\n\n.l0cop9-oq:not(#_):not(#_):not(#_) {width: 100%;}\n\n.l0cop9-or:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: end;}\n\n.l0cop9-ot:not(#_):not(#_):not(#_) {opacity: 80%;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\nfont-family: var(--font-monospace,monospace);}\n\nlesson-nav-item-l0cop9-ov { display:block; }\n\n.l0cop9-ow {color: hsla(240.00,5.88%,10.00%,100%);\nwidth: var(--u_phrasebar,1phrasebar);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\nalign-items: center;}\n\n.l0cop9_ow.number-toggle:not(#_) {border-radius: 9999px;\nwidth: 30px;\nheight: 30px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nbackground: hsla(240.00,4.76%,95.88%,100%);\ncolor: hsla(240.00,3.83%,46.08%,100%);\nposition: relative;\ncursor: pointer;}\n.l0cop9_ow.number-toggle.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);}\n.l0cop9_ow.number-toggle:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.88%,83.92%,100%);}\n.l0cop9_ow.number-toggle:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\nchapter-nav-l0cop9-pa { display:block; }\n\n.l0cop9-pb {padding: calc(var(--u_sp,1sp) * 2);}\n\n.l0cop9-pb.hidden {display: none;}\n\n.l0cop9_pb.bg:not(#_) {position: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\nz-index: 20;\nflex-direction: column;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ngap: calc(var(--u_sp,1sp) * 4);\n--u_rg: calc(var(--u_sp,1sp) * 4);\n--u_cg: calc(var(--u_sp,1sp) * 4);\nbackground: hsla(240.00,4.76%,95.88%,100%);}\n.l0cop9_pb.bg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.l0cop9_pb.card:not(#_) {max-width: 600px;\npadding: calc(var(--u_sp,1sp) * 2.4);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: var(--hue4);\n--bxs-sm-color: var(--hue7);\n--bxs-xxl-color: var(--hue5);}\n.l0cop9_pb.card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: 0,0%,0%;\n--bxs-md-color: 0,0%,0%;\n--bxs-xxl-color: 0,0%,0%;}\n\n.l0cop9_pb.form:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 1.6);\n--u_rg: calc(var(--u_sp,1sp) * 1.6);\n--u_cg: calc(var(--u_sp,1sp) * 1.6);\nwidth: 500px;}\n\n.l0cop9_pb.field-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n.l0cop9_pb.field-wrapper label.l0cop9_pb:not(#_) {user-select: none;\n-webkit-user-select: none;}\n\n.l0cop9_pb.field:not(#_) {width: 100%;\nheight: 40px;\nborder-radius: var(--u_rd,1rd);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\ncolor: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9_pb.field.\\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);\nbackground: hsla(240.00,3.70%,15.88%,100%);}\n\n.l0cop9_pb.options:not(#_) {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nalign-items: center;}\n\n.l0cop9_pb.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n\n.l0cop9_pb.login-button:not(#_) {width: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\ntext-align: center;\nborder-radius: var(--u_rd,1rd);\ncursor: pointer;\nuser-select: none;\n-webkit-user-select: none;\nborder: 2px solid hsla(240.00,4.88%,83.92%,100%);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;}\n.l0cop9_pb.login-button .l0cop9_pb.button-logo:not(#_) {width: 30px;}\n.l0cop9_pb.login-button:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.l0cop9_pb.login-button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}\n.l0cop9_pb.login-button:is(:active,.\\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9_pb.login-button:is(:active,.\\@active).\\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}\n\n.l0cop9-pd:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9-pp:not(#_):not(#_):not(#_) {margin-left: auto;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.l0cop9-pr:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);\nmargin-bottom: calc(var(--u_sp,1sp) * 0.4);}\n\nlogin-page { display:block; }\n\n.l0cop9_pt.login-button-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9_pt.login-button:not(#_) {width: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\ntext-align: center;\nborder-radius: var(--u_rd,1rd);\ncursor: pointer;\nuser-select: none;\n-webkit-user-select: none;\nborder: 2px solid hsla(240.00,4.88%,83.92%,100%);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;}\n.l0cop9_pt.login-button .l0cop9_pt.button-logo:not(#_) {width: 30px;}\n.l0cop9_pt.login-button:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.l0cop9_pt.login-button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}\n.l0cop9_pt.login-button:is(:active,.\\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9_pt.login-button:is(:active,.\\@active).\\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}\n\nthird-party-logins-l0cop9-qf { display:block; }\n\n.l0cop9-qg {--googleyellow: #FBBC05;}\n\n.l0cop9-qg {--googlered: #EB4335;\n--googlegreen: #34A853;\n--googleblue: #4285F4;}\n\n.l0cop9-qk:not(#_):not(#_):not(#_) {fill: var(--googleyellow);}\n\n.l0cop9-ql:not(#_):not(#_):not(#_) {fill: var(--googlered);}\n\n.l0cop9-qm:not(#_):not(#_):not(#_) {fill: var(--googlegreen);}\n\n.l0cop9-qn:not(#_):not(#_):not(#_) {fill: var(--googleblue);}\n\ngoogle-icon-l0cop9-qo { display:block; }\n\napple-icon-l0cop9-qs { display:block; }\n\nfacebook-icon-l0cop9-qw { display:block; }\n\nlogin-illustration-l0cop9-tw { display:block; }\n\n.l0cop9-tx {padding: calc(var(--u_sp,1sp) * 2);}\n\n.l0cop9-tx.hidden {display: none;}\n\n.l0cop9_tx.bg:not(#_) {position: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\nz-index: 20;\nflex-direction: column;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ngap: calc(var(--u_sp,1sp) * 4);\n--u_rg: calc(var(--u_sp,1sp) * 4);\n--u_cg: calc(var(--u_sp,1sp) * 4);\nbackground: hsla(240.00,4.76%,95.88%,100%);}\n.l0cop9_tx.bg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.l0cop9_tx.card:not(#_) {width: 600px;\npadding: calc(var(--u_sp,1sp) * 2.4);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: var(--hue4);\n--bxs-sm-color: var(--hue7);\n--bxs-xxl-color: var(--hue5);}\n.l0cop9_tx.card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;\n--bxs-xs-color: 0,0%,0%;\n--bxs-md-color: 0,0%,0%;\n--bxs-xxl-color: 0,0%,0%;}\n\n.l0cop9_tx.form:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 1.6);\n--u_rg: calc(var(--u_sp,1sp) * 1.6);\n--u_cg: calc(var(--u_sp,1sp) * 1.6);}\n\n.l0cop9_tx.field-wrapper:not(#_) {display: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n.l0cop9_tx.field-wrapper label.l0cop9_tx:not(#_) {user-select: none;\n-webkit-user-select: none;}\n\n.l0cop9_tx.field:not(#_) {width: 100%;\nheight: 40px;\nborder-radius: var(--u_rd,1rd);\npadding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\ncolor: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9_tx.field.\\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);\nbackground: hsla(240.00,3.70%,15.88%,100%);}\n\n.l0cop9_tx.options:not(#_) {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nalign-items: center;}\n\n.l0cop9_tx.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n\n.l0cop9_tx.login-button:not(#_) {width: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.5);\npadding-bottom: calc(var(--u_sp,1sp) * 0.5);\ntext-align: center;\nborder-radius: var(--u_rd,1rd);\ncursor: pointer;\nuser-select: none;\n-webkit-user-select: none;\nborder: 2px solid hsla(240.00,4.88%,83.92%,100%);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;}\n.l0cop9_tx.login-button .l0cop9_tx.button-logo:not(#_) {width: 30px;}\n.l0cop9_tx.login-button:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.l0cop9_tx.login-button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}\n.l0cop9_tx.login-button:is(:active,.\\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9_tx.login-button:is(:active,.\\@active).\\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}\n\n.l0cop9-tz:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.l0cop9-us:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);\nmargin-bottom: calc(var(--u_sp,1sp) * 0.4);}\n\ncreate-account-page { display:block; }\n\n.l0cop9-uu {width: 100%;\n--bg: hsla(240.00,5.88%,90.00%,100%);\n--fg: hsla(var(--hue4),1);}\n.l0cop9-uu.\\@darkmode {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(var(--hue6),1);}\n\n.l0cop9_uu.progress-bg:not(#_) {height: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: relative;\nz-index: 0;\noverflow: hidden;\ndisplay: flex;\nflex-direction: row;\nbackground: var(--bg);}\n\n.l0cop9_uu.progress-fg:not(#_) {height: 10px;\nz-index: 10;\nflex-basis: 0%;\n--e_rest: all var(--u_dur,1dur) ease-in-out !important;\nbackground: var(--fg);}\n\n.l0cop9-ux:not(#_):not(#_):not(#_) {flex-basis: var(--l0cop9_uy);}\n\nprogress-bar-l0cop9-uz { display:block; }\n\n.l0cop9-va {display: inline;\nmargin-bottom: 4px;}\n\nsvg.l0cop9_va:not(#_) {width: 20px;\nheight: 20px;\ndisplay: inline-block;\nstroke: hsla(var(--hue4),1);}\n\nicon-tag { display:block; }\n\ni-gift { display:block; }\n\ni-market { display:block; }\n\ni-compass { display:block; }\n\ni-people { display:block; }\n\n.l0cop9-wg {text-align: center;\n--progress-color: hsla(var(--hue2),1);\n--progress-bg: hsla(240.00,4.76%,95.88%,100%);\n--text-color: hsla(240.00,3.83%,46.08%,100%);\n--center-color: hsla(240.00,4.76%,95.88%,100%);\n--stroke-percent: 70%;\nposition: absolute;}\n.l0cop9-wg.\\@darkmode {--progress-color: hsla(var(--hue7),1);\n--progress-bg: hsla(240.00,3.70%,15.88%,100%);\n--text-color: hsla(240.00,5.03%,64.90%,100%);\n--center-color: hsla(240.00,3.70%,15.88%,100%);}\n.l0cop9-wg.active {--progress-color: hsla(var(--hue4),1);\n--progress-bg: hsla(var(--hue2),1);\n--center-color: hsla(var(--hue2),1);}\n.l0cop9-wg.active.\\@darkmode {--progress-color: hsla(var(--hue6),1);\n--progress-bg: hsla(var(--hue7),1);\n--center-color: hsla(var(--hue8),1);}\n.l0cop9-wg:is(:hover,.\\@hover) {--progress-bg: hsla(240.00,5.88%,90.00%,100%);\n--progress-color: hsla(var(--hue3),1);\n--center-color: hsla(240.00,5.88%,90.00%,100%);}\n.l0cop9-wg:is(:hover,.\\@hover).\\@darkmode {--progress-bg: hsla(240.00,5.26%,26.08%,100%);\n--progress-color: hsla(var(--hue5),1);\n--center-color: hsla(240.00,5.26%,26.08%,100%);}\n\n.l0cop9-wg.disabled {opacity: 30%;}\n\n.l0cop9_wg.circular:not(#_) {width: var(--size);\nheight: var(--size);\nbackground: none;\nposition: relative;}\n.l0cop9_wg.circular .l0cop9_wg.inner:not(#_) {background: var(--center-color);\nposition: absolute;\nz-index: 6;\ntop: 50%;\nleft: 50%;\nwidth: var(--stroke-percent);\nheight: var(--stroke-percent);\n--t_y: -50% !important;\n--t_x: -50% !important;\nborder-radius: 9999px;\nplace-content: center;\nplace-items: center;}\n.l0cop9_wg.circular .l0cop9_wg.title:not(#_) {z-index: 10;\nfont-size: 18px;\ncolor: var(--text-color);\nmargin-top: 7%;}\n\n.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.bar:not(#_) {position: absolute;\nwidth: 100%;\nheight: 100%;\nbackground: var(--progress-bg);\nborder-radius: 100%;\n--e_rest: rotation var(--u_dur,1dur) ease-in-out !important;}\n.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.bar .l0cop9_wg.progress:not(#_) {background: var(--progress-color);\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nborder-radius: 100%;}\n.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.left:not(#_) {--t_rotate: -180deg !important;}\n.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.right:not(#_) {z-index: 3;}\n\n.l0cop9-wi:not(#_):not(#_):not(#_) {width: var(--l0cop9_wj);\nheight: var(--l0cop9_wj);}\n\n.l0cop9-wk:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;}\n\n.l0cop9-wl:not(#_):not(#_):not(#_) {font-size: 14px;\nline-height: 100%;\n--u_lh: 100%;}\n\n.l0cop9_wn.bar:not(#_) {clip: rect(0px, var(--l0cop9_wo), var(--l0cop9_wp), var(--l0cop9_wq));\n--e_rest: clip-path 1s !important;}\n\n.l0cop9_wn.progress:not(#_) {clip: rect(0px, var(--l0cop9_wr), var(--l0cop9_ws), 0px);\n--e_rest: clip-path 1s !important;}\n\n.l0cop9-wu:not(#_):not(#_):not(#_) {--t_rotate: var(--l0cop9_wv) !important;}\n\n.l0cop9-wx:not(#_):not(#_):not(#_) {--t_rotate: var(--l0cop9_wy) !important;}\n\nelem-progress-ring-l0cop9-wz { display:block; }");
/*
.l0cop9-af, .l0cop9_wn.bar, .l0cop9_ic.word, .l0cop9_kc.switch, .l0cop9_kr.switch, .l0cop9_wn.progress, .l0cop9_uu.progress-fg, .l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.bar {
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

.l0cop9-wu, .l0cop9-wx, .l0cop9_wg.circular .l0cop9_wg.inner, .l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.left {
--t_x:0;--t_y:0;--t_rotate:0;
--t_scale:1;--t_scale-x:1;--t_scale-y:1;
transform: translate(var(--t_x),var(--t_y)) rotate(var(--t_rotate))
	scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
}

.l0cop9-af {display: flex;
flex-direction: row;
--e_rest: margin-left calc(var(--u_dur,1dur) * 2) !important;
background: hsla(0.00,0.00%,100.00%,100%);}
.l0cop9-af.\@darkmode {background: hsla(0.00,0.00%,0.00%,100%);}
.l0cop9-af.open {margin-left: 0px;}

.l0cop9-ai:not(#_):not(#_) {grid-template-rows: calc(var(--u_topbar,1topbar) + calc(var(--u_sp,1sp) * 2)) auto 40px;}
.l0cop9-ai > main:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.l0cop9-ai > main.\@darkmode:not(#_):not(._0) {background: hsla(240.00,5.88%,10.00%,50%);}

.l0cop9-ak:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);}

.l0cop9-at:not(#_):not(#_) {color: hsla(240.00,5.88%,10.00%,100%);
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
.l0cop9-at.\@darkmode:not(#_):not(#_) {color: hsla(240.00,4.76%,95.88%,100%);
background: hsla(var(--hue8),1);}

a.l0cop9_at:not(#_) {color: hsla(var(--hue7),1);}
a.l0cop9_at.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

app-dashboard { display:block; }

.l0cop9-aw {gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

h1.l0cop9_aw:not(#_) {margin-top: var(--u_sp,1sp);
font-size: 24px;
line-height: 36px;
--u_lh: 36px;}

.l0cop9_aw.button:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
color: hsla(240.00,5.26%,26.08%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;}
.l0cop9_aw.button.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(240.00,5.88%,90.00%,100%);}

.l0cop9-ax:not(#_):not(#_):not(#_) {display: flex;
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
.l0cop9-ax:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;}
}

.l0cop9-ay:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;
padding: calc(var(--u_sp,1sp) * 2);
gap: calc(var(--u_sp,1sp) * 0.6);
--u_rg: calc(var(--u_sp,1sp) * 0.6);
--u_cg: calc(var(--u_sp,1sp) * 0.6);}
@media (min-width: 1024px){
.l0cop9-ay:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;}
}

.l0cop9-az:not(#_):not(#_):not(#_) {color: hsla(var(--hue5),1);
font-weight: bold;
font-size: 1.6em;}

.l0cop9-ba:not(#_):not(#_):not(#_) {color: hsla(217.89,10.61%,64.90%,100%);
font-weight: thin;
font-size: 1.3em;}

.l0cop9-bb:not(#_):not(#_):not(#_) {height: calc(var(--u_sp,1sp) * 2);}

.l0cop9-be:not(#_):not(#_):not(#_) {width: 450px;
height: 300px;}
@media (min-width: 768px){
.l0cop9-be:not(#_):not(#_):not(#_) {width: 600px;
height: 400px;}
}

landing-page { display:block; }

.l0cop9-bf {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

a.l0cop9_bf:not(#_),button.l0cop9_bf:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
color: hsla(240.00,5.26%,26.08%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;}
a.l0cop9_bf.\@darkmode:not(#_),button.l0cop9_bf.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(240.00,5.88%,90.00%,100%);}

.l0cop9-bh:not(#_):not(#_):not(#_) {width: 200px;
margin-right: auto;
cursor: pointer;}

top-navigation-l0cop9-bq { display:block; }

.l0cop9-br {padding: var(--u_sp,1sp);
width: 100%;}

.l0cop9_br.page-wrapper:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
max-width: 800px;
margin-left: auto;
margin-right: auto;}

.l0cop9_bt.wrapper:not(#_) {background: hsla(var(--hue3),1);
color: hsla(var(--hue9),1);
padding: var(--u_sp,1sp);
border-radius: 4px;}
.l0cop9_bt.wrapper.\@darkmode:not(#_) {background: hsla(var(--hue9),1);
color: hsla(var(--hue2),1);}

.l0cop9-bu:not(#_):not(#_):not(#_) {padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
text-align: center;
width: 100%;
display: flex;
flex-direction: column;}

.l0cop9-bw:not(#_):not(#_):not(#_) {margin: 0rem;}

.l0cop9-bx:not(#_):not(#_):not(#_) {margin: 0rem;}

.l0cop9-by:not(#_):not(#_):not(#_) {margin: 0rem;}

.l0cop9-cb:not(#_):not(#_):not(#_) {width: 200px;
height: 260px;}

app-dictionary-page { display:block; }

.l0cop9-cc {color: hsla(240.00,3.70%,15.88%,100%);
width: 600px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);}
.l0cop9-cc.\@darkmode {color: hsla(240.00,5.88%,90.00%,100%);}

.l0cop9_cc.row:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
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
.l0cop9_cc.row.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}
.l0cop9_cc.row:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue1),1);}
.l0cop9_cc.row:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue8),1);}
.l0cop9_cc.row.learned:not(#_) {background: hsla(var(--hue3),50%);}
.l0cop9_cc.row.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);}

.l0cop9_cc.mono:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);}

.l0cop9_cc.err:not(#_) {color: hsla(0.00,90.60%,70.78%,100%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

button-wrapper.l0cop9_cc:not(#_) {display: flex;
flex-direction: row;
align-items: center;}

.l0cop9_cc.play-audio:not(#_) {width: 2em;
cursor: pointer;}

svg.l0cop9_cc:not(#_) {width: 24px;
height: 24px;}
svg.l0cop9_cc :is(path,path-tag).l0cop9_cc:not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(243.40,75.36%,58.63%,100%);}


.l0cop9_cc.searchbar input.l0cop9_cc:not(#_) {display: flex;
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
.l0cop9_cc.searchbar input.l0cop9_cc.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}
.l0cop9_cc.searchbar input.l0cop9_cc:is(:focus,.\@focus):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9_cc.searchbar input.l0cop9_cc:is(:focus,.\@focus).\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.l0cop9-ce:not(#_):not(#_):not(#_) {order: 0;}

.l0cop9-ch:not(#_):not(#_):not(#_) {order: 0;}

app-dictionary { display:block; }

.l0cop9-cv {width: 100%;
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);}

user-page { display:block; }

.l0cop9-da:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);
background: hsla(355.71,100.00%,97.25%,100%);
border: 2px solid hsla(0.00,0.00%,0.00%,1);
border-radius: 4px;
margin: var(--u_sp,1sp);}

cms-admin-page { display:block; }

.l0cop9-de:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
background: hsla(228.00,96.49%,88.82%,100%);}

cmslearn-module-list-l0cop9-dg { display:block; }

.l0cop9_dh.meta:not(#_) {padding: var(--u_sp,1sp);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
border-style: solid;
border-width: 2px;
border-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}

.l0cop9_dh.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}

.l0cop9-di:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
margin: var(--u_sp,1sp);
padding: var(--u_sp,1sp);}

.l0cop9-dj:not(#_):not(#_):not(#_) {font-size: 20px;
line-height: 30px;
--u_lh: 30px;}

.l0cop9-dk:not(#_):not(#_):not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9-dl:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

.l0cop9-dm:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(220.00,13.04%,90.98%,100%);
border-radius: 3px;}

.l0cop9-dp:not(#_):not(#_) {height: 300px;
overflow: auto;}

cms-collection-card { display:block; }

.l0cop9-dr:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
background: hsla(228.00,96.49%,88.82%,100%);}

cmslesson-list-l0cop9-dt { display:block; }

.l0cop9_du.meta:not(#_) {padding: var(--u_sp,1sp);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
border-style: solid;
border-width: 2px;
border-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}

.l0cop9_du.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}

.l0cop9-dv:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
margin: var(--u_sp,1sp);
padding: var(--u_sp,1sp);}

.l0cop9-dw:not(#_):not(#_):not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9-dx:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

.l0cop9-dy:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(220.00,13.04%,90.98%,100%);
border-radius: 3px;}

.l0cop9-ec:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

cmslesson-card-l0cop9-ed { display:block; }

.l0cop9-ef:not(#_):not(#_):not(#_) {margin-left: var(--u_sp,1sp);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
background: hsla(228.00,96.49%,88.82%,100%);}

cmschapter-list-l0cop9-eh { display:block; }

.l0cop9_ei.meta:not(#_) {padding: var(--u_sp,1sp);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
border-style: solid;
border-width: 2px;
border-radius: 3px solid hsla(240.00,4.76%,95.88%,100%);}

.l0cop9_ei.editable:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}

.l0cop9-ej:not(#_):not(#_):not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
margin: var(--u_sp,1sp);
padding: var(--u_sp,1sp);}

.l0cop9-ek:not(#_):not(#_):not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9-el:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(228.00,96.49%,88.82%,100%);
border-radius: 3px;}

.l0cop9-em:not(#_):not(#_):not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
padding-right: calc(var(--u_sp,1sp) * 0.4);
background: hsla(220.00,13.04%,90.98%,100%);
border-radius: 3px;}

cmschapter-card-l0cop9-eq { display:block; }

.l0cop9-er:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
padding: calc(var(--u_sp,1sp) * 2);}

.l0cop9-es:not(#_):not(#_):not(#_) {color: hsla(216.92,19.12%,26.67%,100%);
padding: calc(var(--u_sp,1sp) * 2);
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;}

.l0cop9-ex:not(#_):not(#_):not(#_) {display: block;
background: hsla(212.73,26.83%,83.92%,100%);
color: hsla(220.91,39.29%,10.98%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);}

info-page { display:block; }

.l0cop9-ez {padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
position: relative;}

.l0cop9_ez.bg:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
width: 100%;
height: 100vh;
display: block;
position: absolute;
z-index: 0;}

.l0cop9_ez.phonetics-layout:not(#_) {z-index: 10;
max-width: 800px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

phonetics-page { display:block; }

.l0cop9_fe.chart-wrapper:not(#_) {padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
align-items: end;}

.l0cop9_fe.row:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;}
.l0cop9_fe.row.one:not(#_) {width: 200px;}
.l0cop9_fe.row.two:not(#_) {width: 180px;}
.l0cop9_fe.row.three:not(#_) {width: 160px;}
.l0cop9_fe.row.four:not(#_) {width: 140px;}

span.l0cop9_fe:not(#_) {font-family: var(--font-monospace,monospace);
text-align: center;
cursor: pointer;
background: hsla(240.00,4.88%,83.92%,100%);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.6);
padding-bottom: calc(var(--u_sp,1sp) * 0.6);
border-radius: 4px;
width: 50px;}
span.l0cop9_fe.\@darkmode:not(#_) {background: hsla(240.00,3.83%,46.08%,100%);}
span.l0cop9_fe:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue2),1);}
span.l0cop9_fe:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue7),1);}

nav.l0cop9_fe:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
align-items: center;
place-content: center;
place-items: center;}
nav.l0cop9_fe button.l0cop9_fe:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
border-radius: 4px;
cursor: pointer;
text-align: center;
background: hsla(240.00,5.03%,64.90%,100%);}
nav.l0cop9_fe button.l0cop9_fe.\@darkmode:not(#_) {background: hsla(240.00,5.20%,33.92%,100%);}
nav.l0cop9_fe button.l0cop9_fe:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue4),1);}
nav.l0cop9_fe button.l0cop9_fe:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue6),1);}

phonetic-vowels-l0cop9-gk { display:block; }

.l0cop9-gl {width: 100%;
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-template-columns: var(--u_lessonbar,1lessonbar) var(--u_phrasebar,1phrasebar) auto;
padding: var(--u_sp,1sp);}

.l0cop9_gl.collection-collection:not(#_) {display: flex;
flex-direction: row;
width: 100%;}

.l0cop9_gl.close-leftbar:not(#_) {margin-left: calc(var(--u_lessonbar,1lessonbar) * -1);}

.l0cop9_gl.left-bar:not(#_) {flex-basis: var(--u_lessonbar,1lessonbar);
height: 100vh;}

collection-page-l0cop9-gq { display:block; }

.l0cop9-gs:not(#_):not(#_):not(#_) {padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
font-size: 20px;
line-height: 30px;
--u_lh: 30px;}

user-page-owned-collections { display:block; }

.l0cop9-gv {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
padding: var(--u_sp,1sp);
border-radius: 4px;
background: hsla(240.00,5.88%,90.00%,100%);
color: hsla(240.00,3.70%,15.88%,100%);}
.l0cop9-gv.\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);
color: hsla(240.00,4.88%,83.92%,100%);}

.l0cop9_gv.card-wrapper:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: start;
flex-wrap: wrap;}
@media (max-width: 1023px){
.l0cop9_gv.card-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: start;}
}

user-page-locked-collections { display:block; }

.l0cop9-ha {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
@media (min-width: 1024px){
.l0cop9-ha {display: flex;
flex-direction: row;}
}

.l0cop9_ha.collection-grid:not(#_) {display: grid;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 1fr;}
@media (min-width: 768px){
.l0cop9_ha.collection-grid:not(#_) {grid-template-columns: minmax(var(--u_rightbar,1rightbar), calc(var(--u_rightbar,1rightbar) * 3)) var(--u_rightbar,1rightbar);}
}

.l0cop9_ha.image:not(#_) {border-radius: var(--u_rd,1rd);
aspect-ratio: 2 / 1;
width: 100%;}

.l0cop9_ha.left:not(#_),.l0cop9_ha.right:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9_ha.phonetics:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
display: flex;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
flex-wrap: wrap;}

lesson-layout { display:block; }


nav.l0cop9_hx:not(#_) {display: flex;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
button.l0cop9_hx:not(#_) {list-style-type: none;
background: hsla(240.00,5.88%,90.00%,100%);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
padding-top: calc(var(--u_sp,1sp) * 0.5);
padding-bottom: calc(var(--u_sp,1sp) * 0.5);
border-radius: 3px;}
button.l0cop9_hx:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue3),1);}

admin-tools-l0cop9-ib { display:block; }

.l0cop9-ic {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);
flex-flow: wrap;}

.l0cop9_ic.word-wrapper:not(#_) {display: flex;
flex-direction: row;
flex-flow: wrap;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.l0cop9_ic.word:not(#_) {font-family: var(--khmer);
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
.l0cop9_ic.word.\@darkmode:not(#_) {background: hsla(var(--hue5),20%);}
.l0cop9_ic.word:is(:hover,.\@hover):not(#_),.l0cop9_ic.word.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue1),1) inset;}
.l0cop9_ic.word:is(:hover,.\@hover).\@darkmode:not(#_),.l0cop9_ic.word.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}
.l0cop9_ic.word.known:not(#_) {background: hsla(var(--hue1),1);}
.l0cop9_ic.word.known.\@darkmode:not(#_) {background: hsla(var(--hue5),50%);}
.l0cop9_ic.word.known:is(:hover,.\@hover):not(#_),.l0cop9_ic.word.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),1) inset;}
.l0cop9_ic.word.known:is(:hover,.\@hover).\@darkmode:not(#_),.l0cop9_ic.word.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}

.l0cop9_ic.not_in_dict:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}
.l0cop9_ic.not_in_dict.\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,20%);}
.l0cop9_ic.not_in_dict:is(:hover,.\@hover):not(#_),.l0cop9_ic.not_in_dict.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(355.56,100.00%,94.71%,100%) inset;}
.l0cop9_ic.not_in_dict:is(:hover,.\@hover).\@darkmode:not(#_),.l0cop9_ic.not_in_dict.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}
.l0cop9_ic.not_in_dict.known:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}
.l0cop9_ic.not_in_dict.known.\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,50%);}
.l0cop9_ic.not_in_dict.known:is(:hover,.\@hover):not(#_),.l0cop9_ic.not_in_dict.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,100%) inset;}
.l0cop9_ic.not_in_dict.known:is(:hover,.\@hover).\@darkmode:not(#_),.l0cop9_ic.not_in_dict.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}

word-nav-l0cop9-ij { display:block; }

.l0cop9-ik {padding: var(--u_sp,1sp);
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
.l0cop9-ik {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-template-columns: 2fr 1fr;}
}

.l0cop9_ik.buy-cards:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
@media (min-width: 1024px){
.l0cop9_ik.buy-cards:not(#_) {display: flex;
flex-direction: column;}
}

main.l0cop9_ik:not(#_) {flex-grow: 1;
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
width: 100%;}

.l0cop9_ik.image:not(#_) {background: hsla(var(--hue5),1);
padding: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);
aspect-ratio: 16 / 9;}

.l0cop9_ik.actions:not(#_) {display: grid;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
justify-content: end;
grid-template-columns: 1fr 1fr;}
.l0cop9_ik.actions button.l0cop9_ik:not(#_) {padding-left: calc(var(--u_sp,1sp) * 1.5);
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
.l0cop9_ik.actions button.l0cop9_ik.outline:not(#_) {background: none;}

.l0cop9-io:not(#_):not(#_):not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
width: 100%;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 2fr 1fr;}

.l0cop9-ir:not(#_):not(#_):not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
width: 100%;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 1fr;}

learn-module-preview-l0cop9-iv { display:block; }

.l0cop9-iw {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
align-items: center;
padding: calc(var(--u_sp,1sp) * 0);
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);}

.l0cop9_iw.user-image:not(#_) {width: calc(var(--u_sp,1sp) * 4);
height: calc(var(--u_sp,1sp) * 4);
border-radius: 9999px;
border: 3px solid hsla(240.00,4.76%,95.88%,20%);
box-shadow: var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4))), var(--box-shadow-xl,0 20px 25px -5px hsla(var(--bxs-xl-color,0,0%,0%), var(--bxs-xl-alpha,0.1)), 0 10px 10px -5px hsla(var(--bxs-xl-color,0,0%,0%), calc(var(--bxs-xl-alpha,0.1) * 0.4)));}

.l0cop9_iw.user-info:not(#_) {width: 100%;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
display: flex;
flex-direction: column;
font-family: 'Merriweather Sans', sans-serif;}

.l0cop9_iw.user-stats:not(#_) {display: flex;
flex-direction: row;
align-items: flex-end;}
.l0cop9_iw.user-stats *:first-child:not(#_):not(._0) {margin-right: auto;}

.l0cop9_iw.user-name:not(#_) {margin-right: auto;
font-weight: bold;
font-size: 20px;}

.l0cop9_iw.user-wordcount:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);
font-size: 10px;
line-height: 16px;
--u_lh: 16px;}
.l0cop9_iw.user-wordcount.\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}

.l0cop9_iw.user-progress:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
height: 10px;
width: 100%;
border-radius: 9999px;
position: relative;
z-index: 0;
overflow: hidden;}
.l0cop9_iw.user-progress.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}
.l0cop9_iw.user-progress .l0cop9_iw.progress-fg:not(#_) {background: hsla(var(--hue5),1);
height: 10px;
width: 100%;
border-radius: 9999px;
position: absolute;
top: 0rem;
right: 90%;
z-index: 10;
border-top-right-radius: 9999px;
border-bottom-right-radius: 9999px;}

.l0cop9_iw.user-settings:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}
.l0cop9_iw.user-settings.\@darkmode:not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}
.l0cop9_iw.user-settings:is(:hover,.\@hover):not(#_) {color: hsla(var(--hue5),1);}

user-card-l0cop9-jh { display:block; }

.l0cop9-ji {display: flex;
flex-direction: column;
align-items: center;
border-radius: var(--u_rd,1rd);}
.l0cop9-ji.collection_active {display: flex;
flex-direction: column;}
.l0cop9-ji:is(:hover,.\@hover) {cursor: pointer;}
.l0cop9-ji:is(:hover,.\@hover) {background: hsla(0.00,0.00%,98.04%,100%);}
.l0cop9-ji:is(:hover,.\@hover).\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}
.l0cop9-ji.collection_active {background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9-ji.collection_active.\@darkmode {background: hsla(240.00,3.70%,15.88%,100%);}

.l0cop9_ji.image:not(#_) {border-radius: 4px;
overflow: hidden;
background: hsla(var(--hue1),1);
border-style: solid;
border-width: 0;
outline: none;
width: 100%;
aspect-ratio: 16 / 9;}

.l0cop9_ji.card-info:not(#_) {width: 100%;
display: grid;
grid-template-rows: 1fr;}

.l0cop9_ji.card-title:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-top: calc(var(--u_sp,1sp) * 0.6);
padding-bottom: calc(var(--u_sp,1sp) * 0.4);}
.l0cop9_ji.card-title h2.l0cop9_ji:not(#_) {font-size: 24px;
line-height: 36px;
--u_lh: 36px;
font-weight: bold;}

.l0cop9_ji.progress-percent:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);
font-family: var(--font-monospace,monospace);}
.l0cop9_ji.progress-percent.\@darkmode:not(#_) {color: hsla(240.00,3.83%,46.08%,100%);}

.l0cop9_ji.collection-actions:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;}
.l0cop9_ji.collection-actions a.l0cop9_ji:not(#_) {color: hsla(0.00,0.00%,100.00%,30%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}
.l0cop9_ji.collection-actions a.l0cop9_ji:is(:hover,.\@hover):not(#_) {color: hsla(var(--hue5),1);}

.l0cop9_ji.icon-lock:not(#_) {display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: hsla(var(--hue1),1);
padding: var(--u_sp,1sp);
border-radius: 4px;
height: 100%;}
.l0cop9_ji.icon-lock.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}
.l0cop9_ji.icon-lock svg.l0cop9_ji:not(#_) {width: 20px;
height: 20px;
fill: hsla(var(--hue6),1);}
.l0cop9_ji.icon-lock svg.l0cop9_ji.\@darkmode:not(#_) {fill: hsla(var(--hue4),1);}
.l0cop9_ji.icon-lock .l0cop9_ji.collection-price:not(#_) {color: hsla(var(--hue6),1);
font-family: var(--font-monospace,monospace);}
.l0cop9_ji.icon-lock .l0cop9_ji.collection-price.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

.l0cop9-jq:not(#_):not(#_):not(#_) {--fg: hsla(var(--hue5),1);
--bg: hsla(240.00,4.88%,83.92%,100%);}
.l0cop9-jq.\@darkmode:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.26%,26.08%,100%);}

collection-card { display:block; }

.l0cop9-js {background: hsla(0.00,0.00%,100.00%,100%);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
width: 100%;}

.l0cop9_js.pill:not(#_) {border-radius: 9999px;
flex-shrink: 1;
width: fit-content;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.2);
padding-bottom: calc(var(--u_sp,1sp) * 0.2);
background: hsla(var(--hue1),1);
color: hsla(var(--hue6),1);}
.l0cop9_js.pill.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);
color: hsla(var(--hue4),1);}

.l0cop9_js.price:not(#_) {font-weight: bold;
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
margin-top: calc(var(--u_sp,1sp) * 2);
margin-bottom: calc(var(--u_sp,1sp) * 2);}

.l0cop9_js.num:not(#_) {font-size: 48px;
line-height: inherit;
--u_lh: inherit;
font-family: var(--copy);}

.l0cop9_js.text:not(#_) {font-size: var(--u_xl,1xl);
line-height: inherit;
--u_lh: inherit;
font-family: var(--heading);
color: hsla(0.00,0.00%,63.92%,100%);}

.l0cop9_js.button:not(#_) {border-radius: var(--u_rd,1rd);
text-align: center;
padding: var(--u_sp,1sp);
background: hsla(240.00,4.88%,83.92%,100%);
color: hsla(240.00,5.88%,10.00%,100%);
cursor: pointer;}
.l0cop9_js.button.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(0.00,0.00%,98.04%,100%);}
.l0cop9_js.button:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue5),1);}
.l0cop9_js.button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue5),1);}

sell-card-l0cop9-kb { display:block; }

.l0cop9-kc {display: flex;
flex-direction: row;
justify-content: space-between;
background: hsla(0.00,0.00%,98.04%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;
align-items: center;}
.l0cop9-kc.\@darkmode {background: hsla(240.00,5.88%,10.00%,100%);}

.l0cop9_kc.khmer:not(#_) {color: hsla(var(--hue5),1);}

.l0cop9_kc.switch-wrapper:not(#_) {height: 30px;
width: 110px;
border-radius: 9999px;
background: hsla(240.00,4.88%,83.92%,100%);
cursor: pointer;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}
.l0cop9_kc.switch-wrapper.\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}
.l0cop9_kc.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}
.l0cop9_kc.switch-wrapper.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}

.l0cop9_kc.switch:not(#_) {margin-left: 0px;
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
.l0cop9_kc.switch.\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.26%,26.08%,100%);}
.l0cop9_kc.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);
background: hsla(var(--hue2),1);
color: hsla(var(--hue8),1);
margin-left: 20px;}
.l0cop9_kc.switch.learned.\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);
background: hsla(var(--hue5),1);
color: hsla(var(--hue1),1);}

.l0cop9-kg:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.l0cop9-kh:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.l0cop9-kj:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.l0cop9-kk:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.l0cop9-kn:not(#_):not(#_):not(#_) {font-size: 24px;
line-height: 36px;
--u_lh: 36px;}

word-bar-l0cop9-kq { display:block; }

.l0cop9-kr {display: flex;
flex-direction: column;
align-items: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
min-width: var(--u_rightbar,1rightbar);
width: 100%;}

.l0cop9_kr.khmer:not(#_) {line-height: 60px;
--u_lh: 60px;
margin-top: 20px;
font-family: var(--khmer);
color: hsla(var(--hue6),1);}

.l0cop9_kr.phonetic:not(#_) {font-family: var(--font-monospace,monospace);
font-size: 20px;
line-height: 30px;
--u_lh: 30px;
color: hsla(var(--hue5),1);}
.l0cop9_kr.phonetic.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

.l0cop9_kr.switch-wrapper:not(#_) {height: 30px;
width: 110px;
border-radius: 9999px;
background: hsla(240.00,4.88%,83.92%,100%);
cursor: pointer;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}
.l0cop9_kr.switch-wrapper.\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}
.l0cop9_kr.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}
.l0cop9_kr.switch-wrapper.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}

.l0cop9_kr.switch:not(#_) {margin-left: 0px;
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
.l0cop9_kr.switch.\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.26%,26.08%,100%);}
.l0cop9_kr.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);
background: hsla(var(--hue2),1);
color: hsla(var(--hue8),1);
margin-left: 20px;}
.l0cop9_kr.switch.learned.\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);
background: hsla(var(--hue5),1);
color: hsla(var(--hue1),1);}

.l0cop9_kr.resizeable:not(#_) {margin: 0rem;
padding: 0rem;
height: 40px;
width: 100px;
background: hsla(var(--hue4),1);
overflow: hidden;}

.l0cop9_kr.phonetic-wrapper:not(#_) {cursor: pointer;}

.l0cop9-ku:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.l0cop9-kv:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.l0cop9-kx:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.l0cop9-ky:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

word-card-l0cop9-lf { display:block; }

.l0cop9-li:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;}

.l0cop9-lj:not(#_):not(#_):not(#_) {width: 2em;
cursor: pointer;}

.l0cop9-lk:not(#_):not(#_):not(#_) {width: 24px;
height: 24px;}

.l0cop9-ll:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(243.40,75.36%,58.63%,100%);}

.l0cop9-lm:not(#_):not(#_):not(#_) {width: 2em;
cursor: pointer;}

.l0cop9-ln:not(#_):not(#_):not(#_) {width: 24px;
height: 24px;}

.l0cop9-lo:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(228.00,96.49%,88.82%,100%);}

audio-player-l0cop9-lp { display:block; }

definition-card-l0cop9-ly { display:block; }

.l0cop9_lz.shortcut-wrapper:not(#_) {display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;}

.l0cop9_lz.key-wrapper:not(#_) {display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);
width: 100px;}
.l0cop9_lz.key-wrapper.horizontal:not(#_) {display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
align-content: stretch;}

.l0cop9_lz.key-text:not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(0.00,0.00%,32.16%,100%);
wrap: wrap;
flex-shrink: 1;
flex-grow: 0;}
.l0cop9_lz.key-text.\@darkmode:not(#_) {color: hsla(0.00,0.00%,63.92%,100%);}

.l0cop9_lz.key:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
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
.l0cop9_lz.key.\@darkmode:not(#_) {border: 1px solid hsla(234.45,89.47%,73.92%,100%);
color: hsla(234.45,89.47%,73.92%,100%);}

shortcut-card-l0cop9-nu { display:block; }

.l0cop9-nv {background: hsla(0.00,0.00%,100.00%,100%);
display: flex;
flex-direction: column;}

.l0cop9_nv.letter-row:not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;}

.l0cop9_nv.letter:not(#_) {font-family: var(--khmer);
font-size: 30px;
line-height: 46px;
--u_lh: 46px;}
.l0cop9_nv.letter.C1:not(#_),.l0cop9_nv.letter.L1:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}
.l0cop9_nv.letter.C2:not(#_),.l0cop9_nv.letter.L2:not(#_) {color: hsla(349.72,89.16%,60.20%,100%);}
.l0cop9_nv.letter.L2weak:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);}

.l0cop9_nv.vida:not(#_) {text-align: right;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
font-size: 16px;
line-height: 24px;
--u_lh: 24px;
color: hsla(240.00,5.03%,64.90%,100%);}
.l0cop9_nv.vida.\@darkmode:not(#_) {color: hsla(240.00,5.26%,26.08%,100%);}

spelling-card-l0cop9-oe { display:block; }

.l0cop9-of {height: 100vh;
width: var(--u_lessonbar,1lessonbar);
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9_of.title-card:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
padding: var(--u_sp,1sp);}
.l0cop9_of.title-card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}

.l0cop9_of.icon-title:not(#_) {display: flex;
flex-direction: row;}

.l0cop9_of.usage_word_count:not(#_) {font-size: 10px;
line-height: 16px;
--u_lh: 16px;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
color: hsla(240.00,5.20%,33.92%,100%);}

.l0cop9-oj:not(#_):not(#_):not(#_) {padding-right: 5px;}

.l0cop9-ok:not(#_):not(#_):not(#_) {font-size: 20px;
line-height: 30px;
--u_lh: 30px;}

.l0cop9-om:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.03%,64.90%,30%);}
.l0cop9-om.\@darkmode:not(#_):not(#_):not(#_) {--bg: hsla(240.00,5.26%,26.08%,100%);}

lesson-nav-l0cop9-oo { display:block; }

.l0cop9-op {cursor: pointer;
border-radius: var(--u_rd,1rd);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
color: hsla(240.00,3.83%,46.08%,100%);
background: hsla(0.00,0.00%,100.00%,50%);}
.l0cop9-op.\@darkmode {background: hsla(240.00,3.70%,15.88%,20%);}
.l0cop9-op:is(:hover,.\@hover) {background: hsla(0.00,0.00%,100.00%,100%);}
.l0cop9-op:is(:hover,.\@hover).\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}

:is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--bg: hsla(240.00,4.88%,83.92%,100%);
--fg: hsla(240.00,5.26%,26.08%,100%);}
:is(ProgressBar,ProgressBar-tag).l0cop9_op:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
:is(ProgressBar,ProgressBar-tag).l0cop9_op:is(:hover,.\@hover) :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--fg: hsla(234.45,89.47%,73.92%,100%);}
:is(ProgressBar,ProgressBar-tag).l0cop9_op.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,50%);
color: hsla(240.00,4.88%,83.92%,100%);}
:is(ProgressBar,ProgressBar-tag).l0cop9_op.\@darkmode :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(240.00,5.20%,33.92%,100%);}
:is(ProgressBar,ProgressBar-tag).l0cop9_op.\@darkmode.hover:not(#_),:is(ProgressBar,ProgressBar-tag).l0cop9_op.\@darkmode:is(:hover,.\@hover):not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}
:is(ProgressBar,ProgressBar-tag).l0cop9_op.\@darkmode.hover :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_),:is(ProgressBar,ProgressBar-tag).l0cop9_op.\@darkmode:is(:hover,.\@hover) :is(ProgressBar,ProgressBar-tag).l0cop9_op:not(#_) {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(234.45,89.47%,73.92%,100%);}

.l0cop9-oq:not(#_):not(#_):not(#_) {width: 100%;}

.l0cop9-or:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;
align-items: end;}

.l0cop9-ot:not(#_):not(#_):not(#_) {opacity: 80%;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
font-family: var(--font-monospace,monospace);}

lesson-nav-item-l0cop9-ov { display:block; }

.l0cop9-ow {color: hsla(240.00,5.88%,10.00%,100%);
width: var(--u_phrasebar,1phrasebar);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
display: flex;
flex-direction: column;
align-items: center;}

.l0cop9_ow.number-toggle:not(#_) {border-radius: 9999px;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
background: hsla(240.00,4.76%,95.88%,100%);
color: hsla(240.00,3.83%,46.08%,100%);
position: relative;
cursor: pointer;}
.l0cop9_ow.number-toggle.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);
color: hsla(240.00,5.03%,64.90%,100%);}
.l0cop9_ow.number-toggle:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.88%,83.92%,100%);}
.l0cop9_ow.number-toggle:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

chapter-nav-l0cop9-pa { display:block; }

.l0cop9-pb {padding: calc(var(--u_sp,1sp) * 2);}

.l0cop9-pb.hidden {display: none;}

.l0cop9_pb.bg:not(#_) {position: absolute;
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
.l0cop9_pb.bg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.l0cop9_pb.card:not(#_) {max-width: 600px;
padding: calc(var(--u_sp,1sp) * 2.4);
background: hsla(0.00,0.00%,100.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: var(--hue4);
--bxs-sm-color: var(--hue7);
--bxs-xxl-color: var(--hue5);}
.l0cop9_pb.card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: 0,0%,0%;
--bxs-md-color: 0,0%,0%;
--bxs-xxl-color: 0,0%,0%;}

.l0cop9_pb.form:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 1.6);
--u_rg: calc(var(--u_sp,1sp) * 1.6);
--u_cg: calc(var(--u_sp,1sp) * 1.6);
width: 500px;}

.l0cop9_pb.field-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}
.l0cop9_pb.field-wrapper label.l0cop9_pb:not(#_) {user-select: none;
-webkit-user-select: none;}

.l0cop9_pb.field:not(#_) {width: 100%;
height: 40px;
border-radius: var(--u_rd,1rd);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9_pb.field.\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);
background: hsla(240.00,3.70%,15.88%,100%);}

.l0cop9_pb.options:not(#_) {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
align-items: center;}

.l0cop9_pb.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}

.l0cop9_pb.login-button:not(#_) {width: 100%;
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
.l0cop9_pb.login-button .l0cop9_pb.button-logo:not(#_) {width: 30px;}
.l0cop9_pb.login-button:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.l0cop9_pb.login-button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}
.l0cop9_pb.login-button:is(:active,.\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9_pb.login-button:is(:active,.\@active).\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}

.l0cop9-pd:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9-pp:not(#_):not(#_):not(#_) {margin-left: auto;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.l0cop9-pr:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);
margin-bottom: calc(var(--u_sp,1sp) * 0.4);}

login-page { display:block; }

.l0cop9_pt.login-button-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9_pt.login-button:not(#_) {width: 100%;
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
.l0cop9_pt.login-button .l0cop9_pt.button-logo:not(#_) {width: 30px;}
.l0cop9_pt.login-button:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.l0cop9_pt.login-button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}
.l0cop9_pt.login-button:is(:active,.\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9_pt.login-button:is(:active,.\@active).\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}

third-party-logins-l0cop9-qf { display:block; }

.l0cop9-qg {--googleyellow: #FBBC05;}

.l0cop9-qg {--googlered: #EB4335;
--googlegreen: #34A853;
--googleblue: #4285F4;}

.l0cop9-qk:not(#_):not(#_):not(#_) {fill: var(--googleyellow);}

.l0cop9-ql:not(#_):not(#_):not(#_) {fill: var(--googlered);}

.l0cop9-qm:not(#_):not(#_):not(#_) {fill: var(--googlegreen);}

.l0cop9-qn:not(#_):not(#_):not(#_) {fill: var(--googleblue);}

google-icon-l0cop9-qo { display:block; }

apple-icon-l0cop9-qs { display:block; }

facebook-icon-l0cop9-qw { display:block; }

login-illustration-l0cop9-tw { display:block; }

.l0cop9-tx {padding: calc(var(--u_sp,1sp) * 2);}

.l0cop9-tx.hidden {display: none;}

.l0cop9_tx.bg:not(#_) {position: absolute;
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
.l0cop9_tx.bg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.l0cop9_tx.card:not(#_) {width: 600px;
padding: calc(var(--u_sp,1sp) * 2.4);
background: hsla(0.00,0.00%,100.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-sm,0 1px 3px 0 hsla(var(--bxs-sm-color,0,0%,0%),var(--bxs-sm-alpha,0.1)), 0 1px 2px 0 hsla(var(--bxs-sm-color,0,0%,0%),calc(var(--bxs-sm-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: var(--hue4);
--bxs-sm-color: var(--hue7);
--bxs-xxl-color: var(--hue5);}
.l0cop9_tx.card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))) , var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6))) , var(--box-shadow-xxl,0 25px 50px -6px hsla(var(--bxs-xxl-color,0,0%,0%),var(--bxs-xxl-alpha,0.25))) ;
--bxs-xs-color: 0,0%,0%;
--bxs-md-color: 0,0%,0%;
--bxs-xxl-color: 0,0%,0%;}

.l0cop9_tx.form:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 1.6);
--u_rg: calc(var(--u_sp,1sp) * 1.6);
--u_cg: calc(var(--u_sp,1sp) * 1.6);}

.l0cop9_tx.field-wrapper:not(#_) {display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}
.l0cop9_tx.field-wrapper label.l0cop9_tx:not(#_) {user-select: none;
-webkit-user-select: none;}

.l0cop9_tx.field:not(#_) {width: 100%;
height: 40px;
border-radius: var(--u_rd,1rd);
padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9_tx.field.\@darkmode:not(#_) {color: hsla(240.00,5.88%,90.00%,100%);
background: hsla(240.00,3.70%,15.88%,100%);}

.l0cop9_tx.options:not(#_) {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
align-items: center;}

.l0cop9_tx.forgot-link:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}

.l0cop9_tx.login-button:not(#_) {width: 100%;
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
.l0cop9_tx.login-button .l0cop9_tx.button-logo:not(#_) {width: 30px;}
.l0cop9_tx.login-button:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}
.l0cop9_tx.login-button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(243.40,75.36%,58.63%,100%);}
.l0cop9_tx.login-button:is(:active,.\@active):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9_tx.login-button:is(:active,.\@active).\@darkmode:not(#_) {background: hsla(244.52,57.94%,50.59%,100%);}

.l0cop9-tz:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.l0cop9-us:not(#_):not(#_):not(#_) {margin-top: var(--u_sp,1sp);
margin-bottom: calc(var(--u_sp,1sp) * 0.4);}

create-account-page { display:block; }

.l0cop9-uu {width: 100%;
--bg: hsla(240.00,5.88%,90.00%,100%);
--fg: hsla(var(--hue4),1);}
.l0cop9-uu.\@darkmode {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(var(--hue6),1);}

.l0cop9_uu.progress-bg:not(#_) {height: 10px;
width: 100%;
border-radius: 9999px;
position: relative;
z-index: 0;
overflow: hidden;
display: flex;
flex-direction: row;
background: var(--bg);}

.l0cop9_uu.progress-fg:not(#_) {height: 10px;
z-index: 10;
flex-basis: 0%;
--e_rest: all var(--u_dur,1dur) ease-in-out !important;
background: var(--fg);}

.l0cop9-ux:not(#_):not(#_):not(#_) {flex-basis: var(--l0cop9_uy);}

progress-bar-l0cop9-uz { display:block; }

.l0cop9-va {display: inline;
margin-bottom: 4px;}

svg.l0cop9_va:not(#_) {width: 20px;
height: 20px;
display: inline-block;
stroke: hsla(var(--hue4),1);}

icon-tag { display:block; }

i-gift { display:block; }

i-market { display:block; }

i-compass { display:block; }

i-people { display:block; }

.l0cop9-wg {text-align: center;
--progress-color: hsla(var(--hue2),1);
--progress-bg: hsla(240.00,4.76%,95.88%,100%);
--text-color: hsla(240.00,3.83%,46.08%,100%);
--center-color: hsla(240.00,4.76%,95.88%,100%);
--stroke-percent: 70%;
position: absolute;}
.l0cop9-wg.\@darkmode {--progress-color: hsla(var(--hue7),1);
--progress-bg: hsla(240.00,3.70%,15.88%,100%);
--text-color: hsla(240.00,5.03%,64.90%,100%);
--center-color: hsla(240.00,3.70%,15.88%,100%);}
.l0cop9-wg.active {--progress-color: hsla(var(--hue4),1);
--progress-bg: hsla(var(--hue2),1);
--center-color: hsla(var(--hue2),1);}
.l0cop9-wg.active.\@darkmode {--progress-color: hsla(var(--hue6),1);
--progress-bg: hsla(var(--hue7),1);
--center-color: hsla(var(--hue8),1);}
.l0cop9-wg:is(:hover,.\@hover) {--progress-bg: hsla(240.00,5.88%,90.00%,100%);
--progress-color: hsla(var(--hue3),1);
--center-color: hsla(240.00,5.88%,90.00%,100%);}
.l0cop9-wg:is(:hover,.\@hover).\@darkmode {--progress-bg: hsla(240.00,5.26%,26.08%,100%);
--progress-color: hsla(var(--hue5),1);
--center-color: hsla(240.00,5.26%,26.08%,100%);}

.l0cop9-wg.disabled {opacity: 30%;}

.l0cop9_wg.circular:not(#_) {width: var(--size);
height: var(--size);
background: none;
position: relative;}
.l0cop9_wg.circular .l0cop9_wg.inner:not(#_) {background: var(--center-color);
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
.l0cop9_wg.circular .l0cop9_wg.title:not(#_) {z-index: 10;
font-size: 18px;
color: var(--text-color);
margin-top: 7%;}

.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.bar:not(#_) {position: absolute;
width: 100%;
height: 100%;
background: var(--progress-bg);
border-radius: 100%;
--e_rest: rotation var(--u_dur,1dur) ease-in-out !important;}
.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.bar .l0cop9_wg.progress:not(#_) {background: var(--progress-color);
position: absolute;
width: 100%;
height: 100%;
border-radius: 100%;}
.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.left:not(#_) {--t_rotate: -180deg !important;}
.l0cop9_wg.circular .l0cop9_wg.circle .l0cop9_wg.right:not(#_) {z-index: 3;}

.l0cop9-wi:not(#_):not(#_):not(#_) {width: var(--l0cop9_wj);
height: var(--l0cop9_wj);}

.l0cop9-wk:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;}

.l0cop9-wl:not(#_):not(#_):not(#_) {font-size: 14px;
line-height: 100%;
--u_lh: 100%;}

.l0cop9_wn.bar:not(#_) {clip: rect(0px, var(--l0cop9_wo), var(--l0cop9_wp), var(--l0cop9_wq));
--e_rest: clip-path 1s !important;}

.l0cop9_wn.progress:not(#_) {clip: rect(0px, var(--l0cop9_wr), var(--l0cop9_ws), 0px);
--e_rest: clip-path 1s !important;}

.l0cop9-wu:not(#_):not(#_):not(#_) {--t_rotate: var(--l0cop9_wv) !important;}

.l0cop9-wx:not(#_):not(#_):not(#_) {--t_rotate: var(--l0cop9_wy) !important;}

elem-progress-ring-l0cop9-wz { display:block; }
*/
