function negIndex$__(value,index){ return value[value.length + index] };
import {register$, __init__$, isa$, is$, iterable$} from 'imba/runtime';
import {use_events as imba_use_events, use_events_hotkey as imba_use_events_hotkey, use_dom_bind as imba_use_dom_bind, use_events_mouse as imba_use_events_mouse, styles as imba_styles, commit as imba_commit, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, use_dom_teleport as imba_use_dom_teleport, use_slots as imba_use_slots, createElement as imba_createElement, use_router as imba_use_router, createKeyedList as imba_createKeyedList, createIndexedList as imba_createIndexedList, createLiveFragment as imba_createLiveFragment, renderContext as imba_renderContext, createSVGElement as imba_createSVGElement, use_styles as imba_use_styles} from 'imba';
(imba_use_events(),imba_use_events_hotkey(),imba_use_dom_bind(),imba_use_events_mouse(),imba_use_dom_teleport(),imba_use_slots(),imba_use_router(),imba_use_styles());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $getSlot$ = Symbol.for('#getSlot'), $afterReconcile$ = Symbol.for('#afterReconcile'), $placeChild$ = Symbol.for('#placeChild'), $getRenderContext$ = Symbol.for('#getRenderContext'), $$up$ = Symbol.for('##up'), $context$ = Symbol.for('#context'), $interval$ = Symbol.for('#interval');
var $26 = Symbol(), $29 = Symbol(), $33 = Symbol(), $42 = Symbol(), $46 = Symbol(), $50 = Symbol(), $54 = Symbol(), $58 = Symbol(), $62 = Symbol(), $66 = Symbol(), $70 = Symbol(), $74 = Symbol(), $78 = Symbol(), $86 = Symbol(), $93 = Symbol(), $101 = Symbol(), $103 = Symbol(), $107 = Symbol(), $112 = Symbol(), $117 = Symbol(), $122 = Symbol(), $128 = Symbol(), $135 = Symbol(), $138 = Symbol(), $140 = Symbol(), $143 = Symbol(), $145 = Symbol(), $146 = Symbol(), $147 = Symbol(), $148 = Symbol(), $149 = Symbol(), $150 = Symbol(), $152 = Symbol(), $154 = Symbol(), $155 = Symbol(), $156 = Symbol(), $157 = Symbol(), $158 = Symbol(), $159 = Symbol(), $161 = Symbol(), $163 = Symbol(), $164 = Symbol(), $165 = Symbol(), $166 = Symbol(), $167 = Symbol(), $168 = Symbol(), $171 = Symbol(), $175 = Symbol(), $181 = Symbol(), $186 = Symbol(), $189 = Symbol(), $194 = Symbol(), $196 = Symbol(), $198 = Symbol(), $206 = Symbol(), $209 = Symbol(), $210 = Symbol(), $212 = Symbol(), $215 = Symbol(), $218 = Symbol(), $221 = Symbol(), $223 = Symbol(), $225 = Symbol(), $229 = Symbol(), $230 = Symbol(), $231 = Symbol(), $234 = Symbol(), $238 = Symbol(), $239 = Symbol(), $240 = Symbol(), $244 = Symbol(), $245 = Symbol(), $246 = Symbol(), $249 = Symbol(), $251 = Symbol(), $255 = Symbol(), $256 = Symbol(), $257 = Symbol(), $260 = Symbol(), $265 = Symbol(), $277 = Symbol(), $281 = Symbol(), $285 = Symbol(), $291 = Symbol(), $294 = Symbol(), $298 = Symbol(), $303 = Symbol(), $305 = Symbol(), $306 = Symbol(), $309 = Symbol(), $311 = Symbol(), $312 = Symbol(), $315 = Symbol(), $317 = Symbol(), $318 = Symbol(), $322 = Symbol(), $324 = Symbol(), $325 = Symbol(), $328 = Symbol(), $330 = Symbol(), $331 = Symbol(), $334 = Symbol(), $336 = Symbol(), $337 = Symbol(), $341 = Symbol(), $343 = Symbol(), $344 = Symbol(), $347 = Symbol(), $349 = Symbol(), $350 = Symbol(), $353 = Symbol(), $355 = Symbol(), $356 = Symbol(), $360 = Symbol(), $362 = Symbol(), $363 = Symbol(), $367 = Symbol(), $369 = Symbol(), $370 = Symbol(), $374 = Symbol(), $376 = Symbol(), $377 = Symbol(), $387 = Symbol(), $388 = Symbol(), $394 = Symbol(), $396 = Symbol(), $400 = Symbol(), $404 = Symbol(), $408 = Symbol(), $412 = Symbol(), $416 = Symbol(), $420 = Symbol(), $424 = Symbol(), $430 = Symbol(), $432 = Symbol(), $435 = Symbol(), $439 = Symbol(), $441 = Symbol(), $442 = Symbol(), $445 = Symbol(), $447 = Symbol(), $448 = Symbol(), $450 = Symbol(), $452 = Symbol(), $453 = Symbol(), $454 = Symbol(), $455 = Symbol(), $456 = Symbol(), $457 = Symbol(), $458 = Symbol(), $459 = Symbol(), $462 = Symbol(), $465 = Symbol(), $466 = Symbol(), $468 = Symbol(), $470 = Symbol(), $472 = Symbol(), $473 = Symbol(), $477 = Symbol(), $482 = Symbol(), $485 = Symbol(), $488 = Symbol(), $491 = Symbol(), $492 = Symbol(), $493 = Symbol(), $495 = Symbol(), $501 = Symbol(), $505 = Symbol(), $508 = Symbol(), $511 = Symbol(), $514 = Symbol(), $516 = Symbol(), $519 = Symbol(), $520 = Symbol(), $521 = Symbol(), $525 = Symbol(), $528 = Symbol(), $530 = Symbol(), $531 = Symbol(), $535 = Symbol(), $538 = Symbol(), $540 = Symbol(), $547 = Symbol(), $551 = Symbol(), $552 = Symbol(), $555 = Symbol(), $560 = Symbol(), $564 = Symbol(), $565 = Symbol(), $566 = Symbol(), $568 = Symbol(), $575 = Symbol(), $579 = Symbol(), $580 = Symbol(), $583 = Symbol(), $588 = Symbol(), $592 = Symbol(), $593 = Symbol(), $594 = Symbol(), $596 = Symbol(), $600 = Symbol(), $602 = Symbol(), $606 = Symbol(), $610 = Symbol(), $614 = Symbol(), $615 = Symbol(), $618 = Symbol(), $621 = Symbol(), $623 = Symbol(), $624 = Symbol(), $630 = Symbol(), $631 = Symbol(), $634 = Symbol(), $637 = Symbol(), $638 = Symbol(), $640 = Symbol(), $641 = Symbol(), $642 = Symbol(), $643 = Symbol(), $644 = Symbol(), $645 = Symbol(), $646 = Symbol(), $647 = Symbol(), $649 = Symbol(), $650 = Symbol(), $651 = Symbol(), $652 = Symbol(), $653 = Symbol(), $658 = Symbol(), $660 = Symbol(), $663 = Symbol(), $665 = Symbol(), $666 = Symbol(), $668 = Symbol(), $673 = Symbol(), $676 = Symbol(), $680 = Symbol(), $681 = Symbol(), $682 = Symbol(), $685 = Symbol(), $688 = Symbol(), $692 = Symbol(), $693 = Symbol(), $694 = Symbol(), $698 = Symbol(), $699 = Symbol(), $700 = Symbol(), $703 = Symbol(), $704 = Symbol(), $706 = Symbol(), $710 = Symbol(), $711 = Symbol(), $713 = Symbol(), $716 = Symbol(), $719 = Symbol(), $723 = Symbol(), $725 = Symbol(), $729 = Symbol(), $730 = Symbol(), $731 = Symbol(), $735 = Symbol(), $737 = Symbol(), $740 = Symbol(), $743 = Symbol(), $745 = Symbol(), $750 = Symbol(), $755 = Symbol(), $759 = Symbol(), $762 = Symbol(), $765 = Symbol(), $772 = Symbol(), $775 = Symbol(), $782 = Symbol(), $786 = Symbol(), $789 = Symbol(), $793 = Symbol(), $794 = Symbol(), $797 = Symbol(), $800 = Symbol(), $809 = Symbol(), $810 = Symbol(), $812 = Symbol(), $813 = Symbol(), $817 = Symbol(), $866 = Symbol(), $868 = Symbol(), $878 = Symbol(), $881 = Symbol(), $882 = Symbol(), $884 = Symbol(), $885 = Symbol(), $887 = Symbol(), $889 = Symbol(), $891 = Symbol(), $893 = Symbol(), $897 = Symbol(), $898 = Symbol(), $899 = Symbol(), $903 = Symbol(), $904 = Symbol(), $905 = Symbol(), $910 = Symbol(), $911 = Symbol(), $922 = Symbol(), $923 = Symbol(), $925 = Symbol(), $926 = Symbol(), $931 = Symbol(), $935 = Symbol(), $937 = Symbol(), $938 = Symbol(), $939 = Symbol(), $941 = Symbol(), $943 = Symbol(), $944 = Symbol(), $946 = Symbol(), $948 = Symbol(), $949 = Symbol(), $950 = Symbol(), $951 = Symbol(), $953 = Symbol(), $956 = Symbol(), $961 = Symbol(), $962 = Symbol(), $970 = Symbol(), $973 = Symbol(), $977 = Symbol(), $978 = Symbol(), $980 = Symbol(), $981 = Symbol(), $982 = Symbol(), $986 = Symbol(), $992 = Symbol(), $995 = Symbol(), $998 = Symbol(), $1003 = Symbol(), $1006 = Symbol(), $1009 = Symbol(), $1013 = Symbol(), $1017 = Symbol(), $1019 = Symbol(), $1020 = Symbol(), $1022 = Symbol(), $1023 = Symbol(), $1024 = Symbol(), $1025 = Symbol(), $1028 = Symbol(), $1031 = Symbol(), $1034 = Symbol(), $1037 = Symbol();

/*body*/
// import {learning_data_out} from './data/learning_data_out'

import fitty from 'fitty';// for fitting text in WordCard
import {clusters} from './data/clusters.imba';
import {dictionary} from './data/dictionary.imba';
// import {collections_data} from './data/collections_data.imba' # DELETE once dynamic library below is implemented
// import {library_data} from './data/LIBRARY.imba' # DELETE once dynamic library below is implemented
// sealang-link: http://sealang.net/api/api.pl?query=ก&service=dictionary

/* NOTE
This static state is necessary to prevent errors if progress
is calculated in the constructor of the progress class.
*/


let c$0 = Symbol();
class Api {
	toggleLearned(word){
		CLOUD_MANAGER.toggleLearnedWord(word);
		// After toggling the word, ensure local state is updated
		return imba_commit();
		
	}
	hasLearned(word){
		return CLOUD_MANAGER.hasLearnedWord(word);
	}
	calcAllProgressFlat(){
		/* TODO
				Make word refs be generated at LIBRARY.imba at static level, not here.
				*/
		
		let library_progress_res = {};
		let temp_refs = {};
		if (LIBRARY) {
			if (LIBRARY?.phrases) {
				for (let $3 = LIBRARY.phrases, $1 = 0, $2 = Object.keys($3), $8 = $2.length, phrase_key, phrase; $1 < $8; $1++){
					// NOTE: Init Progress data
					phrase_key = $2[$1];phrase = $3[phrase_key];library_progress_res[phrase_key] = {
						words_learned: 0,
						words_total: LIBRARY.phrases[phrase_key].weight,
						words_progress: 0
					};
					
					let col_key = String(phrase.cid);
					let les_key = [phrase.cid,phrase.lid].join('-');
					let phr_key = phrase_key;
					// NOTE: Init lesson data once]
					if (!library_progress_res[les_key]) {
						library_progress_res[les_key] = {
							words_learned: 0,
							words_total: LIBRARY.lessons[les_key]?.weight || 0,
							words_progress: 0
						};
					};
					
					// NOTE: Init Progress data once
					if (!library_progress_res[col_key]) {
						library_progress_res[col_key] = {
							words_learned: 0,
							words_total: LIBRARY.collections[col_key]?.weight || 0,
							words_progress: 0
						};
					};
					
					if (phrase?.words) {
						for (let $6 = phrase.words, $4 = 0, $5 = Object.keys($6), $7 = $5.length, word, val; $4 < $7; $4++){
							// NOTE: Add unique words to reference lists
							word = $5[$4];val = $6[word];if (isa$(temp_refs[word],Array)) {
								temp_refs[word].push(phr_key);
							} else {
								temp_refs[word] = [phr_key];
								
							};
							// NOTE: If word is learned add weight to progress data
							if (this.hasLearned(word)) {
								library_progress_res[col_key].words_learned += val.weight || 0;
								library_progress_res[les_key].words_learned += val.weight || 0;
								library_progress_res[phr_key].words_learned += val.weight || 0;
							};
							
							// NOTE: count unique words in phrase
							library_progress_res[phr_key].words_unique = this.countKeys(phrase.words);
							
							// NOTE: count unique words in lesson once
							if (!library_progress_res[les_key].words_unique) {
								library_progress_res[les_key].words_unique = this.countKeys(LIBRARY.lessons[les_key]?.words || {});
							};
							
							// NOTE: count unique words in collection once
							if (!library_progress_res[col_key].words_unique) {
								library_progress_res[col_key].words_unique = this.countKeys(LIBRARY.collections[col_key]?.words || {});
							};
						};
					};
				};
			} else { // no LIBRARY.phrases
				for (let $11 = LIBRARY.phrases || {}, $9 = 0, $10 = Object.keys($11), $12 = $10.length, phr_key, value; $9 < $12; $9++){
					phr_key = $10[$9];value = $11[phr_key];value.words_learned = library_progress_res[phr_key]?.words_learned || 0;
					value.words_progress = library_progress_res[phr_key]?.words_progress || 0;
					value.words_total = library_progress_res[phr_key]?.words_total || 0;
					value.words_unique = library_progress_res[phr_key]?.words_unique || 0;
				};
			};
			
			if (Object.keys(temp_refs).length > 0) {
				for (let $13 = 0, $14 = Object.keys(temp_refs), $15 = $14.length, key, value; $13 < $15; $13++){
					key = $14[$13];value = temp_refs[key];if (LIBRARY.words[key]) {
						LIBRARY.words[key].refs = value;
					};
				};
			} else {
				WW('no words found in Api.calcAllProgressFlat()');
			};
			
			// NOTE: calculate progress for each colelction, lesson, phrase from data
			for (let $16 = 0, $17 = Object.keys(library_progress_res), $18 = $17.length, key, value; $16 < $18; $16++){
				key = $17[$16];value = library_progress_res[key];let learned = library_progress_res[key].words_learned;
				let weight = library_progress_res[key].words_total;
				library_progress_res[key].words_progress = this.calcPercent(learned,weight);
			};
			
			if (LIBRARY?.collections) {
				for (let $21 = LIBRARY.collections, $19 = 0, $20 = Object.keys($21), $22 = $20.length, key, value; $19 < $22; $19++){
					key = $20[$19];value = $21[key];value.words_learned = library_progress_res[key].words_learned;
					value.words_progress = library_progress_res[key].words_progress;
					value.words_total = library_progress_res[key].words_total;
					value.words_unique = library_progress_res[key].words_unique;
				};
			};
		} else {
			WW('no library fround in Api.calcAllProgressFlat()');
		};
		
		return library_progress_res;
		
	}
	countKeys(obj){
		return obj ? Object.keys(obj).length : 0;
	}
	calcPercent(learned,total){
		return (learned && total) ? Math.round(learned / total * 100) : 0;
	}
	
	// API[epic=API, seq=7] SAVE
	save(){
		// Use Store's saveToLocalStorage method instead
		return CLOUD_MANAGER.saveToLocalStorage();
	}
	
	// API[epic=API, seq=7] LOAD
	load(){
		// Use Store's data directly
		return CLOUD_MANAGER.pullFromCloud();
	}
	
	// API[epic=FrontEnd, seq=8] vida
	toggleIpa(){
		CLOUD_MANAGER.toggleIpa();
		return CLOUD_MANAGER.pullFromCloud();
		
	}
	// API[epic=FrontEnd, seq=8] AUTH
	toggleAuth(){
		// Use the Store for authentication state
		if (CLOUD_MANAGER.get('login?') == true) {
			CLOUD_MANAGER.logout();
		} else {
			// Show login screen
			CLOUD_MANAGER.set('login?',false);
		};
		return CLOUD_MANAGER.pullFromCloud();
		
	}
	// API[epic=FrontEnd, seq=9] DARKMODE
	toggleDark(){
		const isDark = CLOUD_MANAGER.toggleDarkMode();
		if (isDark) { this.setDarkmode() } else {
			this.unsetDarkmode();
		};
		return CLOUD_MANAGER.pullFromCloud();
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
		// Use Store for authentication
		CLOUD_MANAGER.set('login?',true);
		return CLOUD_MANAGER.pullFromCloud();
		
	}
	// API[epic=FrontEnd, seq=11] LOGOUT
	logOut(){
		// Use Store for logout
		CLOUD_MANAGER.logout();
		return CLOUD_MANAGER.pullFromCloud();
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

globalThis.APP = new Api;


// LAYOUT[epic=LAYOUT, seq=19] App
let c$1 = Symbol();
class AppDashboardComponent extends imba_Component {
	
	build(){
		UI_MANAGER.initLocal();
		CLOUD_MANAGER.getCurrentWritingSystemProgress();
		imba_commit();
		return APP.save();
	}
	render(){
		var $23, $24, $25, $27 = this._ns_ || '', $28, $30, $31, $32, $34, $35, $36, $37, $38, $39, $40, $41, $43, $44, $45, $47, $48, $49, $51, $52, $53, $55, $56, $57, $59, $60, $61, $63, $64, $65, $67, $68, $69, $71, $72, $73, $75, $76, $77, $79, $80, $81, $82;
		$23=this;
		$23[$beforeReconcile$]();
		($24=$25=1,$23[$26] === 1) || ($24=$25=0,$23[$26]=1);
		($30=$31=1,$28=$23[$29]) || ($30=$31=0,$23[$29]=$28=imba_createComponent('i-global',$23,`${$27}`,null));
		$30 || ($28.on$(`hotkey`,{options: ["shift+d"],$_: [function(e,$$) {
			return APP.toggleDark();
		}]},this));
		$30 || ($28.on$(`hotkey`,{options: ["shift+i|v"],$_: [function(e,$$) {
			return APP.toggleIpa();
		}]},this));
		$30 || ($28.on$(`hotkey`,{options: ["shift+c+l"],$_: [function(e,$$) {
			return APP.clear();
		}]},this));
		$30 || ($28.on$(`hotkey`,{options: ["shift+a"],$_: [function(e,$$) {
			return APP.toggleAuth();
		}]},this));
		$30 || ($28.on$(`hotkey`,{options: ['enter|s'],$_: [function(e,$$) {
			return APP.toggleLearned(CLOUD_MANAGER.get('active_word'));
		}]},this));
		$30 || !$28.setup || $28.setup($31);
		$28[$afterVisit$]($31);
		$30 || $23[$appendChild$]($28);
		;
		($34=$35=1,$32=$23[$33]) || ($34=$35=0,$23[$33]=$32=imba_createComponent('layout-pancakes',$23,`mnu25o-ai ${$27}`,null));
		$36 = $32[$getSlot$]('top',$23);
		$37 = $32[$getSlot$]('middle',$23);
		$38 = $32[$getSlot$]('bottom',$23);
		$34 || ($39=imba_createElement('nav',$36,`${$27}`,null));
		$34 || ($39.slot="top");
		$34 || ($40=imba_createElement('div',$39,`mnu25o-ak width-container ${$27}`,null));
		($43=$44=1,$41=$23[$42]) || ($43=$44=0,$23[$42]=$41=imba_createComponent(TopNavigation,$40,`${$27}`,null));
		$43 || !$41.setup || $41.setup($44);
		$41[$afterVisit$]($44);
		$43 || $40[$appendChild$]($41);
		;
		;
		;
		($47=$48=1,$45=$23[$46]) || ($47=$48=0,$23[$46]=$45=imba_createElement('div',$37,`${$27}`,null));
		$47 || ($45.slot="middle");
		($51=$52=1,$49=$45[$50]) || ($51=$52=0,$45[$50]=$49=imba_createComponent('landing-page',$45,`${$27}`,null));
		$51 || ($49.route="/");
		$51 || !$49.setup || $49.setup($52);
		$49[$afterVisit$]($52);
		$51 || $45[$appendChild$]($49);
		;
		($55=$56=1,$53=$45[$54]) || ($55=$56=0,$45[$54]=$53=imba_createComponent('app-dictionary-page',$45,`${$27}`,null));
		$55 || ($53.route="/dictionary");
		$55 || !$53.setup || $53.setup($56);
		$53[$afterVisit$]($56);
		$55 || $45[$appendChild$]($53);
		;
		($59=$60=1,$57=$45[$58]) || ($59=$60=0,$45[$58]=$57=imba_createComponent('phonetics-page',$45,`${$27}`,null));
		$59 || ($57.route="/phonetics");
		$59 || !$57.setup || $57.setup($60);
		$57[$afterVisit$]($60);
		$59 || $45[$appendChild$]($57);
		;
		($63=$64=1,$61=$45[$62]) || ($63=$64=0,$45[$62]=$61=imba_createComponent('info-page',$45,`${$27}`,null));
		$63 || ($61.route="/info");
		$63 || !$61.setup || $61.setup($64);
		$61[$afterVisit$]($64);
		$63 || $45[$appendChild$]($61);
		;
		($67=$68=1,$65=$45[$66]) || ($67=$68=0,$45[$66]=$65=imba_createElement('div',$45,`width-container ${$27}`,null));
		($71=$72=1,$69=$65[$70]) || ($71=$72=0,$65[$70]=$69=imba_createComponent(CoursesPage,$65,`${$27}`,null));
		$71 || ($69.route="/courses");
		$71 || !$69.setup || $69.setup($72);
		$69[$afterVisit$]($72);
		$71 || $65[$appendChild$]($69);
		;
		($75=$76=1,$73=$65[$74]) || ($75=$76=0,$65[$74]=$73=imba_createComponent(LearningPage,$65,`${$27}`,null));
		$75 || ($73.route="/learn/:cid/:lid/:pid/:wid");
		$75 || !$73.setup || $73.setup($76);
		$73[$afterVisit$]($76);
		$75 || $65[$appendChild$]($73);
		;
		$67 || !$65.setup || $65.setup($68);
		$65[$afterVisit$]($68);
		;
		$47 || !$45.setup || $45.setup($48);
		$45[$afterVisit$]($48);
		;
		($79=$80=1,$77=$23[$78]) || ($79=$80=0,$23[$78]=$77=imba_createElement('div',$38,`mnu25o-au ${$27}`,null));
		$79 || ($77.slot="bottom");
		$79 || ($81=imba_createElement('span',$77,`mnu25o_au ${$27}`,"Built by Eric Vida. Join our Telegram Community."));
		;
		$79 || ($82=imba_createElement('a',$77,`mnu25o_au ${$27}`,"Telegram Community"));
		$79 || ($82.href="https://t.me/+E5Y-uCV0oHQ5NWJl");
		$79 || ($82.target="_blank");
		;
		;
		$34 || !$32.setup || $32.setup($35);
		$32[$afterVisit$]($35);
		$34 || $23[$appendChild$]($32);
		;
		$23[$afterReconcile$]($25);
		return $23;
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
		var $83, $84, $85, $87 = this._ns_ || '', $88, $89, $90, $91, $92, $94, $95, $96, $97;
		$83=this;
		$83[$beforeReconcile$]();
		($84=$85=1,$83[$86] === 1) || ($84=$85=0,$83[$86]=1);
		((!$84||$85&2) && $83.flagSelf$('mnu25o-ay'));
		$84 || ($88=imba_createElement('div',$83,`mnu25o-az ${$87}`,null));
		$84 || ($89=imba_createElement('div',$88,`mnu25o-ba ${$87}`,"Learn 4000+ Khmer words"));
		;
		$84 || ($90=imba_createElement('div',$88,`mnu25o-bb ${$87}`,"by reading Bible stories"));
		;
		$84 || ($91=imba_createElement('div',$88,`mnu25o-bc ${$87}`,null));
		;
		($94=$95=1,$92=$83[$93]) || ($94=$95=0,$83[$93]=$92=imba_createElement('button',$88,`button ${$87}`,"Start Learning"));
		$94 || ($92.routeΞto="/learn/1/1/1/1/");
		$94 || !$92.setup || $92.setup($95);
		$92[$afterVisit$]($95);
		;
		;
		$84 || ($96=imba_createElement('div',$83,`${$87}`,null));
		$84 || ($97=imba_createElement('iframe',$96,`mnu25o-bf ${$87}`,null));
		$84 || ($97.src="https://www.youtube.com/embed/20dpm0bNjIU");
		$84 || ($97.title="YouTube video player");
		$84 || ($97.frameBorder="0");
		$84 || ($97.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
		$84 || ($97.allowfullscreen='allowfullscreen');
		;
		;
		$83[$afterReconcile$]($85);
		return $83;
	}
	static {
		register$(this,c$2,'landing-page',2);
		imba_defineTag('landing-page',this,{cssns: 'mnu25o_ax',cssid: 'mnu25o-ax'});
	}
};

// TAG[epic=NAV, seq=1] TopNavigation
let c$3 = Symbol();
class TopNavigation extends imba_Component {
	
	render(){
		var $98, $99, $100, $102, $104, $105, $106, $108, $109, $110, $111, $113, $114, $115, $116, $118, $119, $120, $121, $123, $124, $125, $126, $127, $129, $130, $131;
		$98=this;
		$98[$beforeReconcile$]();
		($99=$100=1,$98[$101] === 1) || ($99=$100=0,$98[$101]=1);
		($104=$105=1,$102=$98[$103]) || ($104=$105=0,$98[$103]=$102=imba_createComponent('cambodiau-logo',$98,'mnu25o-bi mnu25o_bg',null));
		$104 || ($102.routeΞto="/");
		$104 || !$102.setup || $102.setup($105);
		$102[$afterVisit$]($105);
		$104 || $98[$appendChild$]($102);
		;
		($108=$109=1,$106=$98[$107]) || ($108=$109=0,$98[$107]=$106=imba_createElement('a',$98,'mnu25o_bg',null));
		$108 || ($106.routeΞto="/courses");
		$108 || ($110=imba_createElement('div',$106,'mnu25o_bg',"Learn"));
		;
		$108 || !$106.setup || $106.setup($109);
		$106[$afterVisit$]($109);
		;
		($113=$114=1,$111=$98[$112]) || ($113=$114=0,$98[$112]=$111=imba_createElement('a',$98,'mnu25o_bg',null));
		$113 || ($111.routeΞto="/dictionary");
		$113 || ($115=imba_createElement('div',$111,'mnu25o_bg',"Dictionary"));
		;
		$113 || !$111.setup || $111.setup($114);
		$111[$afterVisit$]($114);
		;
		($118=$119=1,$116=$98[$117]) || ($118=$119=0,$98[$117]=$116=imba_createElement('a',$98,'mnu25o_bg',null));
		$118 || ($116.routeΞto="/phonetics");
		$118 || ($120=imba_createElement('div',$116,'mnu25o_bg',"Phonetics"));
		;
		$118 || !$116.setup || $116.setup($119);
		$116[$afterVisit$]($119);
		;
		($123=$124=1,$121=$98[$122]) || ($123=$124=0,$98[$122]=$121=imba_createElement('a',$98,'mnu25o_bg',null));
		$123 || ($121.routeΞto="/info");
		$123 || ($125=imba_createElement('div',$121,'mnu25o_bg',"Info"));
		;
		$123 || !$121.setup || $121.setup($124);
		$121[$afterVisit$]($124);
		;
		$99 || ($126=imba_createElement('a',$98,'mnu25o-br button mnu25o_bg',null));
		$99 || ($126.href="https://t.me/+E5Y-uCV0oHQ5NWJl");
		$99 || ($126.target="_blank");
		($129=$130=1,$127=$98[$128]) || ($129=$130=0,$98[$128]=$127=imba_createComponent(TelegramIcon,$126,'mnu25o-bs mnu25o_bg',null));
		$129 || !$127.setup || $127.setup($130);
		$127[$afterVisit$]($130);
		$129 || $126[$appendChild$]($127);
		;
		$99 || ($131=imba_createElement('div',$126,'mnu25o_bg',"Community"));
		;
		;
		$98[$afterReconcile$]($100);
		return $98;
	}
	static {
		register$(this,c$3,'TopNavigation',2);
		imba_defineTag('top-navigation-mnu25o-bu',this,{cssns: 'mnu25o_bg',cssid: 'mnu25o-bg',name: 'TopNavigation'});
	}
};

let c$4 = Symbol();
class AppDictionaryPageComponent extends imba_Component {
	
	render(){
		var $132, $133, $134, $136 = this._ns_ || '', $137, $139, $141, $142, $144, $151, $153, $160, $162, $169, $170, $172, $173, $174, $176, $177;
		$132=this;
		$132[$beforeReconcile$]();
		($133=$134=1,$132[$135] === 1) || ($133=$134=0,$132[$135]=1);
		($137=$132[$138]) || ($132[$138]=$137=imba_createElement('div',$132,`page-wrapper ${$136}`,null));
		{($139=$132[$140]) || ($132[$140]=$139=imba_createElement('div',$137,`mnu25o-by wrapper mnu25o_bx ${$136}`,null));
		$133 || ($141=imba_createElement('h2',$139,`mnu25o_bx ${$136}`,"You have learned "));
		;
		($142=$132[$143]) || ($132[$143]=$142=imba_createElement('p',$139,`mnu25o-ca mnu25o_bx ${$136}`,null));
		$133 || $142[$placeChild$]("You have learned ");
		($144=PROGRESS.library.unique_progress,($144===$132[$146]&&$133) || ($132[$145] = $142[$placeChild$]($132[$146]=$144,0,$132[$145])));
		$133 || $142[$placeChild$]("% of the unique words in your courses. (");
		($144=PROGRESS.library.unique_learned,($144===$132[$148]&&$133) || ($132[$147] = $142[$placeChild$]($132[$148]=$144,0,$132[$147])));
		$133 || $142[$placeChild$](" of ");
		($144=PROGRESS.library.unique,($144===$132[$150]&&$133) || ($132[$149] = $142[$placeChild$]($132[$150]=$144,0,$132[$149])));
		$133 || $142[$placeChild$](")");
		;
		($151=$132[$152]) || ($132[$152]=$151=imba_createElement('p',$139,`mnu25o-cb mnu25o_bx ${$136}`,null));
		$133 || $151[$placeChild$]("You have learned ");
		($153=PROGRESS.library.weight_progress,($153===$132[$155]&&$133) || ($132[$154] = $151[$placeChild$]($132[$155]=$153,0,$132[$154])));
		$133 || $151[$placeChild$]("% of the words repeated in your courses. (");
		($153=PROGRESS.library.weight_learned,($153===$132[$157]&&$133) || ($132[$156] = $151[$placeChild$]($132[$157]=$153,0,$132[$156])));
		$133 || $151[$placeChild$](" of ");
		($153=PROGRESS.library.weight,($153===$132[$159]&&$133) || ($132[$158] = $151[$placeChild$]($132[$159]=$153,0,$132[$158])));
		$133 || $151[$placeChild$](")");
		;
		let dict_length = Object.keys(dictionary).length;
		let dict_percent = Math.floor((PROGRESS.library.unique_learned / dict_length) * 1000) / 10;
		($160=$132[$161]) || ($132[$161]=$160=imba_createElement('p',$139,`mnu25o-cc mnu25o_bx ${$136}`,null));
		$133 || $160[$placeChild$]("You have learned ");
		($162=dict_percent,($162===$132[$164]&&$133) || ($132[$163] = $160[$placeChild$]($132[$164]=$162,0,$132[$163])));
		$133 || $160[$placeChild$]("% of all words in this dictionary. (");
		($162=PROGRESS.library.unique_learned,($162===$132[$166]&&$133) || ($132[$165] = $160[$placeChild$]($132[$166]=$162,0,$132[$165])));
		$133 || $160[$placeChild$](" of ");
		($162=dict_length,($162===$132[$168]&&$133) || ($132[$167] = $160[$placeChild$]($132[$168]=$162,0,$132[$167])));
		$133 || $160[$placeChild$](")");
		;
		};
		;
		$133 || ($169=imba_createElement('div',$132,`page-wrapper ${$136}`,null));
		($172=$173=1,$170=$132[$171]) || ($172=$173=0,$132[$171]=$170=imba_createComponent('app-dictionary',$169,`${$136}`,null));
		$172 || !$170.setup || $170.setup($173);
		$170[$afterVisit$]($173);
		$172 || $169[$appendChild$]($170);
		;
		($176=$177=1,$174=$132[$175]) || ($176=$177=0,$132[$175]=$174=imba_createComponent(WordCard,$169,`mnu25o-cf card ${$136}`,null));
		$176 || !$174.setup || $174.setup($177);
		$174[$afterVisit$]($177);
		$176 || $169[$appendChild$]($174);
		;
		;
		$132[$afterReconcile$]($134);
		return $132;
	}
	static {
		register$(this,c$4,'app-dictionary-page',2);
		imba_defineTag('app-dictionary-page',this,{cssns: 'mnu25o_bv',cssid: 'mnu25o-bv'});
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
		var $195, $224, $250, $178, $179, $180, $182 = this._ns_ || '', $183, $184, $185, $187, $188, $190, $191, $192, $193, $197, $199, $200, $201, $204, $207, $205, $208, $211, $213, $214, $216, $217, $219, $220, $222, $226, $227, $228, $232, $233, $235, $236, $237, $241, $242, $243, $247, $248, $252, $253, $254, $258, $259;
		$178=this;
		$178[$beforeReconcile$]();
		($179=$180=1,$178[$181] === 1) || ($179=$180=0,$178[$181]=1);
		$179 || ($183=imba_createElement('div',$178,`mnu25o-ci searchbar ${$182}`,null));
		$179 || ($184=imba_createElement('h1',$183,`${$182}`,null));
		;
		($187=$188=1,$185=$178[$186]) || ($187=$188=0,$178[$186]=$185=imba_createElement('input',$183,`${$182}`,null));
		$187 || ($185.type="text");
		$190=$178[$189] || ($178[$189]=$185.bind$('data',[this,'query']));
		$187 || ($185.placeholder="search khmer | vida | ipa | definition");
		$187 || !$185.setup || $185.setup($188);
		$185[$afterVisit$]($188);
		;
		;
		$179 || ($191=imba_createElement('div',$178,`mnu25o-cl row ${$182}`,null));
		$179 || ($191.on$(`click`,{$_: [function(e,$$) {
			return APP.toggleIpa();
		}]},this));
		$179 || ($192=imba_createElement('span',$191,`${$182}`,"khmer"));
		;
		($193=$178[$194]) || ($178[$194]=$193=imba_createElement('span',$191,`${$182}`,null));
		$195 = null;
		if (CLOUD_MANAGER.get('ipa')) { ($195="ipa") } else {
			($195="vida");
		};
		($178[$196] = $193[$placeChild$]($195,0,$178[$196]));
		;
		$179 || ($197=imba_createElement('span',$191,`${$182}`,"google"));
		;
		;
		($199 = $178[$198]) || ($178[$198]=$199=imba_createKeyedList(1280,$178));
		$200 = 0;
		$201=$199.$;
		for (let $202 = 0, $203 = Object.keys(dictionary), $261 = $203.length, word, info; $202 < $261; $202++){
			word = $203[$202];info = dictionary[word];if (FUZZY.search(this.query,word) | FUZZY.search(this.query,info?.vida) | FUZZY.search(this.query,info?.google) | FUZZY.search(this.query,info?.ipa)) {
				($207=$208=1,$204=($205=$201[$getRenderContext$]($206)).get($200)) || ($207=$208=0,$205.set($200,$204=imba_createElement('div',$199,`row ${$182}`,null)));
				$207||($204[$$up$]=$199);
				($211=(CLOUD_MANAGER.hasLearnedWord(word)||undefined),$211===$204[$210]||($208|=2,$204[$210]=$211));
				$213 = $204[$212] || ($204[$212]={$_: [function(e,$$,_2) {
					CLOUD_MANAGER.set('active_word',_2);CLOUD_MANAGER.pullFromCloud();return APP();
				},null]});
				$213.$_[1]=word;
				$207 || $204.on$(`click`,$213,this);
				($208&2 && $204.flag$(`row ${$182}`+' '+($204[$210] ? `learned` : '')));
				($216=$217=1,$214=$204[$215]) || ($216=$217=0,$204[$215]=$214=imba_createElement('a',$204,`${$182}`,null));
				($219=("http://sealang.net/api/api.pl?query=" + word + "&service=dictionary"),$219===$204[$218] || ($214.href=$204[$218]=$219));
				$216 || ($214.target="_blank");
				($220=$204[$221]) || ($204[$221]=$220=imba_createElement('span',$214,`khmer ${$182}`,null));
				($222=word,$222===$204[$223] || $220.text$(String($204[$223]=$222)));
				;
				;
				$224 = null;
				if (CLOUD_MANAGER.get('ipa')) {
					if (info?.ipa) { ($226=$227=1,$224=$204[$225]) || ($226=$227=0,$204[$225]=$224=imba_createElement('span',null,`mono ${$182}`,null));
					$226||($224[$$up$]=$204);
					($228=info?.ipa,($228===$224[$230]&&$226) || ($224[$229] = $224[$placeChild$]($224[$230]=$228,384,$224[$229])));
					 } else {
						($232=$233=1,$224=$204[$231]) || ($232=$233=0,$204[$231]=$224=imba_createElement('span',null,`err ${$182}`,'ipa coming soon'));
						$232||($224[$$up$]=$204);
					};
				} else {
					if ((info?.vida)) {
						($235=$236=1,$224=$204[$234]) || ($235=$236=0,$204[$234]=$224=imba_createElement('span',null,`mono ${$182}`,null));
						$235||($224[$$up$]=$204);
						($237=info?.vida,($237===$224[$239]&&$235) || ($224[$238] = $224[$placeChild$]($224[$239]=$237,384,$224[$238])));
						
					} else if ((info?.vida_auto)) {
						($241=$242=1,$224=$204[$240]) || ($241=$242=0,$204[$240]=$224=imba_createElement('span',null,`mono err ${$182}`,null));
						$241||($224[$$up$]=$204);
						($243=info?.vida_auto,($243===$224[$245]&&$241) || ($224[$244] = $224[$placeChild$]($224[$245]=$243,384,$224[$244])));
						
					} else {
						($247=$248=1,$224=$204[$246]) || ($247=$248=0,$204[$246]=$224=imba_createElement('span',null,`err ${$182}`,'vida coming soon'));
						$247||($224[$$up$]=$204);
						
					};
				};
				($204[$249] = $204[$placeChild$]($224,0,$204[$249]));
				$250 = null;
				if (info?.google) { ($252=$253=1,$250=$204[$251]) || ($252=$253=0,$204[$251]=$250=imba_createElement('span',null,`${$182}`,null));
				$252||($250[$$up$]=$204);
				($254=info?.google,($254===$250[$256]&&$252) || ($250[$255] = $250[$placeChild$]($250[$256]=$254,384,$250[$255])));
				 } else {
					($258=$259=1,$250=$204[$257]) || ($258=$259=0,$204[$257]=$250=imba_createElement('span',null,`err ${$182}`,'-'));
					$258||($250[$$up$]=$204);
				};
				($204[$260] = $204[$placeChild$]($250,0,$204[$260]));
				$199.push($204,$200++,$205);
			};
		};$199[$afterVisit$]($200);;
		$178[$afterReconcile$]($180);
		return $178;
	}
	static {
		register$(this,c$5,'app-dictionary',2);
		imba_defineTag('app-dictionary',this,{cssns: 'mnu25o_cg',cssid: 'mnu25o-cg'});
	}
};


let c$6 = Symbol();
class InfoPageComponent extends imba_Component {
	render(){
		var $262, $263, $264, $266 = this._ns_ || '', $267, $268, $269, $270, $271, $272, $273;
		$262=this;
		$262[$beforeReconcile$]();
		($263=$264=1,$262[$265] === 1) || ($263=$264=0,$262[$265]=1);
		((!$263||$264&2) && $262.flagSelf$('mnu25o-cz'));
		$263 || ($267=imba_createElement('div',$262,`mnu25o-da ${$266}`,null));
		$263 || ($268=imba_createElement('p',$267,`${$266}`,"This app stores your learning progress on your computer's browser."));
		;
		$263 || ($269=imba_createElement('p',$267,`${$266}`,"So use one device and one broswer to mark your progress. Also, don't clear your browser's data for this page."));
		;
		$263 || ($270=imba_createElement('p',$267,`${$266}`,"This app is an experiment. Let us know you are using it, and what features you want via telegram."));
		;
		$263 || ($271=imba_createElement('p',$267,`${$266}`,"We are working on something bigger and better."));
		;
		$263 || ($272=imba_createElement('a',$267,`mnu25o-df ${$266}`,"Telegram"));
		$263 || ($272.href="https://t.me/+GFitY1neUaQxMzQ1");
		$263 || ($272.target="_blank");
		;
		$263 || ($273=imba_createElement('p',$267,`${$266}`,"This app was built by Eric Vida."));
		;
		;
		$262[$afterReconcile$]($264);
		return $262;
	}
	static {
		register$(this,c$6,'info-page',2);
		imba_defineTag('info-page',this,{});
	}
};
// TAG[epic=PAGE, seq=1] phonetics-page
let c$7 = Symbol();
class PhoneticsPageComponent extends imba_Component {
	
	render(){
		var $274, $275, $276, $278 = this._ns_ || '', $279, $280, $282, $283, $284, $286, $287;
		$274=this;
		$274[$beforeReconcile$]();
		($275=$276=1,$274[$277] === 1) || ($275=$276=0,$274[$277]=1);
		$275 || ($279=imba_createElement('div',$274,`phonetics-layout ${$278}`,null));
		($282=$283=1,$280=$274[$281]) || ($282=$283=0,$274[$281]=$280=imba_createComponent(PhoneticVowels,$279,`${$278}`,null));
		$282 || !$280.setup || $280.setup($283);
		$280[$afterVisit$]($283);
		$282 || $279[$appendChild$]($280);
		;
		($286=$287=1,$284=$274[$285]) || ($286=$287=0,$274[$285]=$284=imba_createComponent(WordCard,$279,`card ${$278}`,null));
		$286 || !$284.setup || $284.setup($287);
		$284[$afterVisit$]($287);
		$286 || $279[$appendChild$]($284);
		;
		;
		$274[$afterReconcile$]($276);
		return $274;
	}
	static {
		register$(this,c$7,'phonetics-page',2);
		imba_defineTag('phonetics-page',this,{cssns: 'mnu25o_dh',cssid: 'mnu25o-dh'});
	}
};

let c$8 = Symbol();
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
		CLOUD_MANAGER.set('active_word',this.char[word][2]);
		CLOUD_MANAGER.pullFromCloud();
		return APP.save();
	}
	
	render(){
		var $297, $288, $289, $290, $292, $293, $295, $296, $299, $300, $301, $302, $304, $307, $308, $310, $313, $314, $316, $319, $320, $321, $323, $326, $327, $329, $332, $333, $335, $338, $339, $340, $342, $345, $346, $348, $351, $352, $354, $357, $358, $359, $361, $364, $365, $366, $368;
		$288=this;
		$288[$beforeReconcile$]();
		($289=$290=1,$288[$291] === 1) || ($289=$290=0,$288[$291]=1);
		$289 || ($292=imba_createElement('nav',$288,'mnu25o_dm',null));
		($295=$296=1,$293=$288[$294]) || ($295=$296=0,$288[$294]=$293=imba_createElement('button',$292,'mnu25o_dm',null));
		$295 || ($293.on$(`click`,{$_: [function(e,$$) {
			return APP.toggleIpa();
		}]},this));
		$295 || $293[$placeChild$]("Phonetic System: ");
		$297 = null;
		if (CLOUD_MANAGER.get('ipa')) { ($297="IPA") } else {
			($297="Vida");
		};
		($288[$298] = $293[$placeChild$]($297,0,$288[$298]));
		;
		;
		if (CLOUD_MANAGER.get('ipa') === true) {
			this.ipa = 1;
		} else {
			this.ipa = 0;
		};
		$289 || ($299=imba_createElement('div',$288,'chart-wrapper mnu25o_dm',null));
		$289 || ($300=imba_createElement('div',$299,'row one mnu25o_dm',null));
		$289 || ($301=imba_createElement('div',$300,'dot mnu25o_dm',null));
		$289 || ($301.on$(`click`,{activeWord: [0]},this));
		($302=$288[$303]) || ($288[$303]=$302=imba_createElement('span',$301,'mnu25o_dm',null));
		($304=this.char[0][this.ipa],($304===$288[$306]&&$289) || ($288[$305] = $302[$placeChild$]($288[$306]=$304,384,$288[$305])));
		;
		;
		$289 || ($307=imba_createElement('div',$300,'dot mnu25o_dm',null));
		$289 || ($307.on$(`click`,{activeWord: [1]},this));
		($308=$288[$309]) || ($288[$309]=$308=imba_createElement('span',$307,'mnu25o_dm',null));
		($310=this.char[1][this.ipa],($310===$288[$312]&&$289) || ($288[$311] = $308[$placeChild$]($288[$312]=$310,384,$288[$311])));
		;
		;
		$289 || ($313=imba_createElement('div',$300,'dot mnu25o_dm',null));
		$289 || ($313.on$(`click`,{activeWord: [2]},this));
		($314=$288[$315]) || ($288[$315]=$314=imba_createElement('span',$313,'mnu25o_dm',null));
		($316=this.char[2][this.ipa],($316===$288[$318]&&$289) || ($288[$317] = $314[$placeChild$]($288[$318]=$316,384,$288[$317])));
		;
		;
		;
		$289 || ($319=imba_createElement('div',$299,'row two mnu25o_dm',null));
		$289 || ($320=imba_createElement('div',$319,'dot mnu25o_dm',null));
		$289 || ($320.on$(`click`,{activeWord: [3]},this));
		($321=$288[$322]) || ($288[$322]=$321=imba_createElement('span',$320,'mnu25o_dm',null));
		($323=this.char[3][this.ipa],($323===$288[$325]&&$289) || ($288[$324] = $321[$placeChild$]($288[$325]=$323,384,$288[$324])));
		;
		;
		$289 || ($326=imba_createElement('div',$319,'dot mnu25o_dm',null));
		$289 || ($326.on$(`click`,{activeWord: [4]},this));
		($327=$288[$328]) || ($288[$328]=$327=imba_createElement('span',$326,'mnu25o_dm',null));
		($329=this.char[4][this.ipa],($329===$288[$331]&&$289) || ($288[$330] = $327[$placeChild$]($288[$331]=$329,384,$288[$330])));
		;
		;
		$289 || ($332=imba_createElement('div',$319,'dot mnu25o_dm',null));
		$289 || ($332.on$(`click`,{activeWord: [5]},this));
		($333=$288[$334]) || ($288[$334]=$333=imba_createElement('span',$332,'mnu25o_dm',null));
		($335=this.char[5][this.ipa],($335===$288[$337]&&$289) || ($288[$336] = $333[$placeChild$]($288[$337]=$335,384,$288[$336])));
		;
		;
		;
		$289 || ($338=imba_createElement('div',$299,'row three mnu25o_dm',null));
		$289 || ($339=imba_createElement('div',$338,'dot mnu25o_dm',null));
		$289 || ($339.on$(`click`,{activeWord: [6]},this));
		($340=$288[$341]) || ($288[$341]=$340=imba_createElement('span',$339,'mnu25o_dm',null));
		($342=this.char[6][this.ipa],($342===$288[$344]&&$289) || ($288[$343] = $340[$placeChild$]($288[$344]=$342,384,$288[$343])));
		;
		;
		$289 || ($345=imba_createElement('div',$338,'dot mnu25o_dm',null));
		$289 || ($345.on$(`click`,{activeWord: [7]},this));
		($346=$288[$347]) || ($288[$347]=$346=imba_createElement('span',$345,'mnu25o_dm',null));
		($348=this.char[7][this.ipa],($348===$288[$350]&&$289) || ($288[$349] = $346[$placeChild$]($288[$350]=$348,384,$288[$349])));
		;
		;
		$289 || ($351=imba_createElement('div',$338,'dot mnu25o_dm',null));
		$289 || ($351.on$(`click`,{activeWord: [8]},this));
		($352=$288[$353]) || ($288[$353]=$352=imba_createElement('span',$351,'mnu25o_dm',null));
		($354=this.char[8][this.ipa],($354===$288[$356]&&$289) || ($288[$355] = $352[$placeChild$]($288[$356]=$354,384,$288[$355])));
		;
		;
		;
		$289 || ($357=imba_createElement('div',$299,'row four mnu25o_dm',null));
		$289 || ($358=imba_createElement('div',$357,'dot mnu25o_dm',null));
		$289 || ($358.on$(`click`,{activeWord: [9]},this));
		($359=$288[$360]) || ($288[$360]=$359=imba_createElement('span',$358,'mnu25o_dm',null));
		($361=this.char[9][this.ipa],($361===$288[$363]&&$289) || ($288[$362] = $359[$placeChild$]($288[$363]=$361,384,$288[$362])));
		;
		;
		$289 || ($364=imba_createElement('div',$357,'dot mnu25o_dm',null));
		;
		$289 || ($365=imba_createElement('div',$357,'dot mnu25o_dm',null));
		$289 || ($365.on$(`click`,{activeWord: [10]},this));
		($366=$288[$367]) || ($288[$367]=$366=imba_createElement('span',$365,'mnu25o_dm',null));
		($368=this.char[10][this.ipa],($368===$288[$370]&&$289) || ($288[$369] = $366[$placeChild$]($288[$370]=$368,384,$288[$369])));
		;
		;
		;
		;
		$288[$afterReconcile$]($290);
		return $288;
		
	}
	static {
		register$(this,c$8,'PhoneticVowels',2);
		imba_defineTag('phonetic-vowels-mnu25o-es',this,{cssns: 'mnu25o_dm',name: 'PhoneticVowels'});
	}
};
// TAG[epic=PAGE, seq=21] CoursesPage
let c$9 = Symbol();
class CoursesPage extends imba_Component {
	
	render(){
		var $371, $372, $373, $375, $378, $379, $380, $384, $385, $386, $389;
		$371=this;
		$371[$beforeReconcile$]();
		($372=$373=1,$371[$374] === 1) || ($372=$373=0,$371[$374]=1);
		((!$372||$373&2) && $371.flagSelf$('width-container'));
		($375=$371[$376]) || ($371[$376]=$375=imba_createElement('div',$371,'mnu25o-ev layout-card-grid',null));
		($378 = $371[$377]) || ($371[$377]=$378=imba_createIndexedList(256,$375));
		$379 = 0;
		$380=$378.$;
		for (let $383 = LIBRARY.collections, $381 = 0, $382 = Object.keys($383), $390 = $382.length, _cid, collection; $381 < $390; $381++){
			_cid = $382[$381];collection = $383[_cid];($385=$386=1,$384=$380[$379]) || ($385=$386=0,$380[$379]=$384=imba_createComponent(CourseCard,$378,'stretchy-card',null));
			$385||($384[$$up$]=$378);
			(collection===$384[$387] || ($384.collection=$384[$387]=collection));
			($389=("/learn/" + _cid + "/1/1/0"),$389===$384[$388] || ($384.routeΞto=$384[$388]=$389));
			$385 || !$384.setup || $384.setup($386);
			$384[$afterVisit$]($386);
			$379++;
			
		};$378[$afterVisit$]($379);;
		;
		$371[$afterReconcile$]($373);
		return $371;
		
		// <self.layout-card-flex-grid>
	}
	static {
		register$(this,c$9,'CoursesPage',2);
		imba_defineTag('courses-page-mnu25o-ex',this,{cssid: 'mnu25o-et',name: 'CoursesPage'});
	}
};

let c$10 = Symbol();
class LearningPage extends imba_Component {
	render(){
		var $391, $392, $393, $395, $397, $398, $399, $401, $402, $403, $405, $406, $407, $409, $410, $411, $413, $414, $415, $417, $418, $419, $421, $422, $423, $425, $426;
		$391=this;
		$391[$beforeReconcile$]();
		($392=$393=1,$391[$394] === 1) || ($392=$393=0,$391[$394]=1);
		($397=$398=1,$395=$391[$396]) || ($397=$398=0,$391[$396]=$395=imba_createElement('div',$391,'mnu25o_fh',null));
		($401=$402=1,$399=$395[$400]) || ($401=$402=0,$395[$400]=$399=imba_createComponent('lesson-nav',$395,'ln mnu25o_fh',null));
		$401 || ($399.route="/learn/:cid/:lid/:pid/:wid");
		$401 || !$399.setup || $399.setup($402);
		$399[$afterVisit$]($402);
		$401 || $395[$appendChild$]($399);
		;
		$397 || !$395.setup || $395.setup($398);
		$395[$afterVisit$]($398);
		;
		($405=$406=1,$403=$391[$404]) || ($405=$406=0,$391[$404]=$403=imba_createElement('div',$391,'mnu25o_fh',null));
		($409=$410=1,$407=$403[$408]) || ($409=$410=0,$403[$408]=$407=imba_createComponent('phrase-nav',$403,'pn mnu25o_fh',null));
		$409 || ($407.route="/learn/:cid/:lid/:pid/:wid");
		$409 || !$407.setup || $407.setup($410);
		$407[$afterVisit$]($410);
		$409 || $403[$appendChild$]($407);
		;
		$405 || !$403.setup || $403.setup($406);
		$403[$afterVisit$]($406);
		;
		($413=$414=1,$411=$391[$412]) || ($413=$414=0,$391[$412]=$411=imba_createElement('div',$391,'mnu25o_fh',null));
		($417=$418=1,$415=$411[$416]) || ($417=$418=0,$411[$416]=$415=imba_createComponent('lesson-content',$411,'lc mnu25o_fh',null));
		$417 || ($415.route="/learn/:cid/:lid/:pid/:wid");
		$417 || !$415.setup || $415.setup($418);
		$415[$afterVisit$]($418);
		$417 || $411[$appendChild$]($415);
		;
		$413 || !$411.setup || $411.setup($414);
		$411[$afterVisit$]($414);
		;
		($421=$422=1,$419=$391[$420]) || ($421=$422=0,$391[$420]=$419=imba_createElement('div',$391,'mnu25o_fh',null));
		($425=$426=1,$423=$419[$424]) || ($425=$426=0,$419[$424]=$423=imba_createComponent('right-bar',$419,'rb mnu25o_fh',null));
		$425 || ($423.route="/learn/:cid/:lid/:pid/:wid");
		$425 || !$423.setup || $423.setup($426);
		$423[$afterVisit$]($426);
		$425 || $419[$appendChild$]($423);
		;
		$421 || !$419.setup || $419.setup($422);
		$419[$afterVisit$]($422);
		;
		$391[$afterReconcile$]($393);
		return $391;
	}
	static {
		register$(this,c$10,'LearningPage',2);
		imba_defineTag('learning-page-mnu25o-fi',this,{cssns: 'mnu25o_fh',cssid: 'mnu25o-fh',name: 'LearningPage'});
	}
};
// CARD[epic=CARD, seq=29] CourseCard
let c$11 = Symbol();
class CourseCard extends imba_Component {
	
	calcUniqueLearned(unique){
		// Use the progress system to calculate unique learned words
		const system = CLOUD_MANAGER.get('writing_system','khmer');
		const progress = 
			(system === 'khmer') ? 
				UI.progress_khmer
			 : 
				UI.progress_phonetic
		
		;
		
		return progress?.library?.unique_learned || 0;
	}
	render(){
		var $427, $428, $429, $431, $433, $434, $436, $437, $438, $440, $443, $444, $446, $449, $451, $460, $461, $463, $464, $467, $469, $471;
		let col_item = PROGRESS[this.collection.key];
		$427=this;
		$427[$beforeReconcile$]();
		($428=$429=1,$427[$430] === 1) || ($428=$429=0,$427[$430]=1);
		((!$428||$429&2) && $427.flagSelf$('card'));
		($433=$434=1,$431=$427[$432]) || ($433=$434=0,$427[$432]=$431=imba_createElement('img',$427,'mnu25o_fj',null));
		($436=IMAGES[this.collection.img],$436===$427[$435] || ($431.src=$427[$435]=$436));
		;
		$428 || ($437=imba_createElement('div',$427,'mnu25o-fm mnu25o_fj',null));
		($438=$427[$439]) || ($427[$439]=$438=imba_createElement('h1',$437,'mnu25o-fn title mnu25o_fj',null));
		($440=this.collection.name,($440===$427[$442]&&$428) || ($427[$441] = $438[$placeChild$]($427[$442]=$440,384,$427[$441])));
		;
		$428 || ($443=imba_createElement('span',$437,'mnu25o-fo pill mnu25o_fj',"🇰🇭 khmer"));
		;
		;
		($444=$427[$445]) || ($427[$445]=$444=imba_createElement('div',$427,'description mnu25o_fj',null));
		($446=this.collection.info,($446===$427[$448]&&$428) || ($427[$447] = $444[$placeChild$](String($427[$448]=$446),128,$427[$447])));
		($449=$427[$450]) || ($427[$450]=$449=imba_createElement('p',$444,'mnu25o-fq mnu25o_fj',null));
		$428 || $449[$placeChild$]("You have learned ");
		($451=col_item.weight_learned || 0,($451===$427[$453]&&$428) || ($427[$452] = $449[$placeChild$]($427[$453]=$451,0,$427[$452])));
		$428 || $449[$placeChild$]("/");
		($451=col_item.weight || 0,($451===$427[$455]&&$428) || ($427[$454] = $449[$placeChild$]($427[$455]=$451,0,$427[$454])));
		$428 || $449[$placeChild$](" words (");
		($451=col_item.unique_learned || 0,($451===$427[$457]&&$428) || ($427[$456] = $449[$placeChild$]($427[$457]=$451,0,$427[$456])));
		$428 || $449[$placeChild$]("/");
		($451=col_item.unique || 0,($451===$427[$459]&&$428) || ($427[$458] = $449[$placeChild$]($427[$459]=$451,0,$427[$458])));
		$428 || $449[$placeChild$](" unique)");
		;
		;
		$428 || ($460=imba_createElement('div',$427,'mnu25o-fr progress mnu25o_fj',null));
		($463=$464=1,$461=$427[$462]) || ($463=$464=0,$427[$462]=$461=imba_createComponent(ElemProgressBar,$460,'mnu25o_fj',null));
		($467=(this[$context$].active||undefined),$467===$427[$466]||($464|=2,$427[$466]=$467));
		($467=col_item.weight_progress || 0,$467===$427[$468] || ($461.progress=$427[$468]=$467));
		($464&2 && $461.flag$('mnu25o_fj'+' '+($427[$466] ? `color` : '')));
		$463 || !$461.setup || $461.setup($464);
		$461[$afterVisit$]($464);
		$463 || $460[$appendChild$]($461);
		;
		($469=$427[$470]) || ($427[$470]=$469=imba_createElement('span',$460,'mnu25o_fj',null));
		($471=col_item.weight_progress,($471===$427[$473]&&$428) || ($427[$472] = $469[$placeChild$]($427[$473]=$471,128,$427[$472])));
		$428 || $469[$placeChild$]("%");
		;
		;
		$427[$afterReconcile$]($429);
		return $427;
		
		
	}
	static {
		register$(this,c$11,'CourseCard',2);
		imba_defineTag('course-card-mnu25o-fu',this,{cssns: 'mnu25o_fj',cssid: 'mnu25o-fj',name: 'CourseCard'});
	}
};
let c$12 = Symbol();
class RightBarComponent extends imba_Component {
	routed(params){
		this.rt = params;
		CLOUD_MANAGER.set('rt',this.rt);
		return APP.save();
	}
	render(){
		var $478, $479, $480, $474, $475, $476, $481 = this._ns_ || '', $483, $484, $486, $487, $489, $490, $494, $496, $497;
		{$474=this;
		$474[$beforeReconcile$]();
		($475=$476=1,$474[$477] === 1) || ($475=$476=0,$474[$477]=1);
		const activeWord = CLOUD_MANAGER.get('active_word');
		$478 = $479 = $480 = null;
		if (activeWord) {
			($483=$484=1,$478=$474[$482]) || ($483=$484=0,$474[$482]=$478=imba_createComponent(WordCard,null,`card ${$481}`,null));
			$483||($478[$$up$]=$474);
			$483 || !$478.setup || $478.setup($484);
			$478[$afterVisit$]($484);
			
			if (dictionary[activeWord]?.google) {
				($486=$487=1,$479=$474[$485]) || ($486=$487=0,$474[$485]=$479=imba_createComponent(DefinitionCard,null,`card ${$481}`,null));
				$486||($479[$$up$]=$474);
				$486 || !$479.setup || $479.setup($487);
				$479[$afterVisit$]($487);
				
			};
			($489=$490=1,$480=$474[$488]) || ($489=$490=0,$474[$488]=$480=imba_createComponent(SpellingCard,null,`card ${$481}`,null));
			$489||($480[$$up$]=$474);
			$489 || !$480.setup || $480.setup($490);
			$480[$afterVisit$]($490);
			
		};
		($474[$491] = $474[$placeChild$]($478,0,$474[$491]));
		($474[$492] = $474[$placeChild$]($479,0,$474[$492]));
		($474[$493] = $474[$placeChild$]($480,0,$474[$493]));
		($496=$497=1,$494=$474[$495]) || ($496=$497=0,$474[$495]=$494=imba_createComponent(ShortcutCard,$474,`card ${$481}`,null));
		$496 || !$494.setup || $494.setup($497);
		$494[$afterVisit$]($497);
		$496 || $474[$appendChild$]($494);
		;
		$474[$afterReconcile$]($476);
		return $474;
		};
	}
	static {
		register$(this,c$12,'right-bar',2);
		imba_defineTag('right-bar',this,{});
	}
};



// LAYOUT[epic=LAYOUT, seq=23] lesson-content
let c$13 = Symbol();
class LessonContentComponent extends imba_Component {
	get $image(){
		let el=imba_createElement('img',null,`image ${this._ns_ || ''} $image`,null);
		return (Object.defineProperty(this,'$image',{value:el}),el);
	}
	[__init__$]($$ = null,deep = true,fields = true){
		super[__init__$](...arguments);
		this.phrase = $$ ? $$.phrase : undefined;
		
	}
	routed(params){
		return this.rt = params;
	}
	render(){
		var $502, $503, $504, $498, $499, $500, $506, $507, $509, $510 = this._ns_ || '', $512, $513, $515, $517, $518;
		this.phrase = LIBRARY.phrases[[this.rt.cid,this.rt.lid,this.rt.pid].join('-')];
		$498=this;
		$498[$beforeReconcile$]();
		($499=$500=1,$498[$501] === 1) || ($499=$500=0,$498[$501]=1);
		$502 = $503 = $504 = null;
		if (this.phrase) {
			($506=$507=1,$502=$498[$505]) || ($506=$507=0,$498[$505]=($502=this.$image,$502[$$up$]=null,$502));
			$506||($502[$$up$]=$498);
			($509=IMAGES[this.phrase.img],$509===$502[$508] || ($502.src=$502[$508]=$509));
			
			($512=$513=1,$503=$498[$511]) || ($512=$513=0,$498[$511]=$503=imba_createComponent(MeaningCard,null,`${$510}`,null));
			$512||($503[$$up$]=$498);
			($515=this.phrase,$515===$503[$514] || ($503.phrase=$503[$514]=$515));
			$512 || !$503.setup || $503.setup($513);
			$503[$afterVisit$]($513);
			
			($517=$518=1,$504=$498[$516]) || ($517=$518=0,$498[$516]=$504=imba_createComponent(WordNav,null,`card ${$510}`,null));
			$517||($504[$$up$]=$498);
			$517 || ($504.on$(`click`,{commit: true},this));
			$517 || ($504.route="/learn/:cid/:lid/:pid/:wid");
			$517 || !$504.setup || $504.setup($518);
			$504[$afterVisit$]($518);
			
			// <PhoneticsCard phrase=phrase>
		};
		($498[$519] = $498[$placeChild$]($502,0,$498[$519]));
		($498[$520] = $498[$placeChild$]($503,0,$498[$520]));
		($498[$521] = $498[$placeChild$]($504,0,$498[$521]));
		$498[$afterReconcile$]($500);
		return $498;
	}
	static {
		register$(this,c$13,'lesson-content',2);
		imba_defineTag('lesson-content',this,{cssns: 'mnu25o_ga'});
	}
};
let c$14 = Symbol();
class MeaningCard extends imba_Component {
	render(){
		var $522, $523, $524, $526, $527, $529;
		$522=this;
		$522[$beforeReconcile$]();
		($523=$524=1,$522[$525] === 1) || ($523=$524=0,$522[$525]=1);
		((!$523||$524&2) && $522.flagSelf$('card'));
		$523 || ($526=imba_createElement('h2',$522,null,"Meaning"));
		;
		($527=$522[$528]) || ($522[$528]=$527=imba_createElement('p',$522,null,null));
		($529=this.phrase.meaning,($529===$522[$531]&&$523) || ($522[$530] = $527[$placeChild$]($522[$531]=$529,384,$522[$530])));
		;
		$522[$afterReconcile$]($524);
		return $522;
	}
	static {
		register$(this,c$14,'MeaningCard',2);
		imba_defineTag('meaning-card-mnu25o-gi',this,{name: 'MeaningCard'});
	}
};
let c$15 = Symbol();
class PhoneticsCard extends imba_Component {
	
	render(){
		var $539, $532, $533, $534, $536, $537, $541, $542, $545, $548, $546, $549, $550, $553, $556, $554, $557, $558, $561, $559, $562, $563, $569, $570, $573, $576, $574, $577, $578, $581, $584, $582, $585, $586, $589, $587, $590, $591;
		$532=this;
		$532[$beforeReconcile$]();
		($533=$534=1,$532[$535] === 1) || ($533=$534=0,$532[$535]=1);
		((!$533||$534&2) && $532.flagSelf$('card'));
		$533 || ($536=imba_createElement('h2',$532,'mnu25o_gj',"Phonetics"));
		;
		($537=$532[$538]) || ($532[$538]=$537=imba_createElement('p',$532,'phonetics mnu25o_gj',null));
		$539 = null;
		if (UI.ipa) {
			($539 = $532[$540]) || ($532[$540]=$539=imba_createKeyedList(1024,null));
			$539[$$up$] = $537;
			$541 = 0;
			$542=$539.$;
			for (let $543 = 0, $544 = iterable$(this.phrase.phrase), $567 = $544.length; $543 < $567; $543++) {
				let word = $544[$543];
				let obj = dictionary[word];
				if (obj?.ipa || obj?.vida || obj?.vida_auto || word) {
					($548=$549=1,$545=($546=$542[$getRenderContext$]($547)).get($541)) || ($548=$549=0,$546.set($541,$545=imba_createElement('span',$539,'mnu25o_gj',null)));
					$548||($545[$$up$]=$539);
					($550=obj?.ipa || obj?.vida || obj?.vida_auto || word,($550===$545[$552]&&$548) || ($545[$551] = $545[$placeChild$]($545[$552]=$550,384,$545[$551])));
					$539.push($545,$541++,$546);
					
				} else {
					($556=$557=1,$553=($554=$542[$getRenderContext$]($555)).get($541)) || ($556=$557=0,$554.set($541,$553=imba_createElement('span',$539,'mnu25o_gj',"n/a")));
					$556||($553[$$up$]=$539);
					$539.push($553,$541++,$554);
					
					($561=$562=1,$558=($559=$542[$getRenderContext$]($560)).get($541)) || ($561=$562=0,$559.set($541,$558=imba_createLiveFragment(4096,$539)));
					$561||($558[$$up$]=$539);
					(imba_renderContext.context=($558[$565] || ($558[$565]={_:$558})),$563=EE(word,"no phonetics available"),imba_renderContext.context=null,($563===$558[$566]&&$561) || ($558[$564] = $558[$placeChild$]($558[$566]=$563,0,$558[$564])));
					$539.push($558,$541++,$559);
					
				};
			};$539[$afterVisit$]($541);
		} else {
			($539 = $532[$568]) || ($532[$568]=$539=imba_createKeyedList(1024,null));
			$539[$$up$] = $537;
			$569 = 0;
			$570=$539.$;
			for (let $571 = 0, $572 = iterable$(this.phrase.phrase), $595 = $572.length; $571 < $595; $571++) {
				let word = $572[$571];
				let obj = dictionary[word];
				if (obj?.vida || obj?.vida_auto || obj?.ipa || word) {
					($576=$577=1,$573=($574=$570[$getRenderContext$]($575)).get($569)) || ($576=$577=0,$574.set($569,$573=imba_createElement('span',$539,'mnu25o_gj',null)));
					$576||($573[$$up$]=$539);
					($578=obj?.vida || obj?.vida_auto || obj?.ipa || word,($578===$573[$580]&&$576) || ($573[$579] = $573[$placeChild$]($573[$580]=$578,384,$573[$579])));
					$539.push($573,$569++,$574);
					
				};
				if (!(obj?.vida || obj?.vida_auto || obj?.ipa || word)) {
					($584=$585=1,$581=($582=$570[$getRenderContext$]($583)).get($569)) || ($584=$585=0,$582.set($569,$581=imba_createElement('span',$539,'mnu25o_gj',"n/a")));
					$584||($581[$$up$]=$539);
					$539.push($581,$569++,$582);
					
					($589=$590=1,$586=($587=$570[$getRenderContext$]($588)).get($569)) || ($589=$590=0,$587.set($569,$586=imba_createLiveFragment(4096,$539)));
					$589||($586[$$up$]=$539);
					(imba_renderContext.context=($586[$593] || ($586[$593]={_:$586})),$591=EE(word,"no phonetics available"),imba_renderContext.context=null,($591===$586[$594]&&$589) || ($586[$592] = $586[$placeChild$]($586[$594]=$591,0,$586[$592])));
					$539.push($586,$569++,$587);
					
				};
			};$539[$afterVisit$]($569);
		};
		($532[$596] = $537[$placeChild$]($539,0,$532[$596]));
		;
		$532[$afterReconcile$]($534);
		return $532;
	}
	static {
		register$(this,c$15,'PhoneticsCard',2);
		imba_defineTag('phonetics-card-mnu25o-gt',this,{cssns: 'mnu25o_gj',name: 'PhoneticsCard'});
	}
};

// TAG[epic=NAV, seq=24] WordNav
let c$16 = Symbol();
class WordNav extends imba_Component {
	// NOTE: now uses CLOUD_MANAGER directly instead of UI.local
	get $word_audio(){
		let el=imba_createElement('audio',null,'mnu25o_gu $word_audio',null);
		return (Object.defineProperty(this,'$word_audio',{value:el}),el);
	}
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.step = ($$ && ($0 = $$.step) !== undefined) ? ($0) : 50;
		this.elapsed = ($$ && ($0 = $$.elapsed) !== undefined) ? ($0) : 0;
		
	}
	routed(params){
		this.rt = params;
		// Update the global route state to keep navigation in sync
		CLOUD_MANAGER.set('rt',this.rt);
		this.phrase = LIBRARY.phrases[[this.rt.cid,this.rt.lid,this.rt.pid].join('-')];
		CLOUD_MANAGER.set('active_word',this.phrase.kh_array[this.rt.wid]);
		CLOUD_MANAGER.pullFromCloud();
		// Update UI components that depend on route state
		imba_commit();
		return APP.save();
	}
	render(){
		// @click=(UI.active_word = khccmer_word)
		var self = this, $617, $597, $598, $599, $601, $603, $604, $605, $607, $608, $609, $611, $612, $613, $616, $619, $620, $622, $625, $626, $627, $629, $632, $635, $633, $636, $639, $648;
		$597=this;
		$597[$beforeReconcile$]();
		($598=$599=1,$597[$600] === 1) || ($598=$599=0,$597[$600]=1);
		($603=$604=1,$601=$597[$602]) || ($603=$604=0,$597[$602]=$601=imba_createComponent('i-global',$597,'mnu25o_gu',null));
		$603 || ($601.on$(`hotkey`,{options: ['e|up'],$_: [function(e,$$) {
			return self.prevPhraseFirstWord();
		}]},this));
		$603 || ($601.on$(`hotkey`,{options: ['r|down'],$_: [function(e,$$) {
			return self.nextPhrase();
		}]},this));
		$603 || ($601.on$(`hotkey`,{options: ['d|left'],$_: [function(e,$$) {
			return self.prevWord(self.phrase);
		}]},this));
		$603 || ($601.on$(`hotkey`,{options: ['f|right'],$_: [function(e,$$) {
			return self.nextWord(self.phrase);
		}]},this));
		$603 || !$601.setup || $601.setup($604);
		$601[$afterVisit$]($604);
		$603 || $597[$appendChild$]($601);
		;
		($607=$608=1,$605=$597[$606]) || ($607=$608=0,$597[$606]=($605=this.$word_audio,$605[$$up$]=$597,$605));
		$607 || ($605.src="");
		$607 || ($605.type="audio/mpeg");
		$607 || $597[$appendChild$]($605);
		;
		($611=$612=1,$609=$597[$610]) || ($611=$612=0,$597[$610]=$609=imba_createComponent(ToggleSwitch,$597,'mnu25o-gy mnu25o_gu',null));
		$613 = $609[$getSlot$]('__',$597);
		($616=(CLOUD_MANAGER.get('writing_system','khmer') === 'phonetic'||undefined),$616===$597[$615]||($612|=2,$597[$615]=$616));
		$611 || ($609.on$(`click`,{toggleKhmer: true},this));
		($612&2 && $609.flag$('mnu25o-gy mnu25o_gu'+' '+($597[$615] ? `active` : '')));
		$617 = null;
		if (CLOUD_MANAGER.get('writing_system','khmer') === 'phonetic') {
			($617="phonetics");
		} else {
			($619=$620=1,$617=$597[$618]) || ($619=$620=0,$597[$618]=$617=imba_createElement('span',null,'mnu25o-gz mnu25o_gu',"khmer"));
			$619||($617[$$up$]=$613);
			
		};
		($597[$621] = $613[$placeChild$]($617,0,$597[$621]));
		$611 || !$609.setup || $609.setup($612);
		$609[$afterVisit$]($612);
		$611 || $597[$appendChild$]($609);
		;
		($622=$597[$623]) || ($597[$623]=$622=imba_createElement('div',$597,'mnu25o-ha word-wrapper mnu25o_gu',null));
		($625 = $597[$624]) || ($597[$624]=$625=imba_createKeyedList(5504,$622));
		$626 = 0;
		$627=$625.$;
		for (let word_index = 0, $628 = iterable$(this.phrase.kh_array), $654 = $628.length; word_index < $654; word_index++) {
			// phrase.key
			let word = $628[word_index];
			let in_dict = dictionary.hasOwnProperty(word);
			let ipa = dictionary[word]?.ipa || false;
			let vida = dictionary[word]?.vida || false;
			let vida_auto = dictionary[word]?.vida_auto || false;
			let no_phonetics = false;
			let display_word = word;
			if (in_dict) {
				if (CLOUD_MANAGER.get('writing_system','khmer') === 'khmer') {
					display_word = word;
				} else if (CLOUD_MANAGER.get('ipa')) {
					if (!!ipa) {
						display_word = ipa;
					};
				} else {
					if (!!vida) {
						display_word = vida;
					} else if (!!vida_auto) {
						display_word = vida_auto;
					} else {
						no_phonetics = true;
						($629=display_word,($629===$627[$631]&&$598) || ($627[$630] = $625[$placeChild$]($627[$631]=$629,0,$627[$630])));
					};
				};
			};
			($635=$636=1,$632=($633=$627[$getRenderContext$]($634)).get($626)) || ($635=$636=0,$633.set($626,$632=imba_createElement('div',$625,'word mnu25o_gu',null)));
			$635||($632[$$up$]=$625);
			($639=(is$(word,CLOUD_MANAGER.get('active_word'))||undefined),$639===$632[$638]||($636|=2,$632[$638]=$639));
			($639=("/learn/" + (this.phrase.cid) + "/" + (this.phrase.lid) + "/" + (this.phrase.pid) + "/" + word_index),$639===$632[$640] || ($632.routeΞto=$632[$640]=$639));
			($639=(CLOUD_MANAGER.hasLearnedWord(word)||undefined),$639===$632[$642]||($636|=2,$632[$642]=$639));
			($639=(!in_dict||undefined),$639===$632[$644]||($636|=2,$632[$644]=$639));
			($639=(no_phonetics||undefined),$639===$632[$646]||($636|=2,$632[$646]=$639));
			$648 = $632[$647] || ($632[$647]={playWord: [null,null]});
			$648.playWord[0]=this.$word_audio;
			$648.playWord[1]=word;
			$635 || $632.on$(`dblclick`,$648,this);
			$648 = $632[$649] || ($632[$649]={pressAndHold: [null,null]});
			$648.pressAndHold[0]=word;
			$648.pressAndHold[1]=(1 * 1000);
			$635 || $632.on$(`mousedown`,$648,this);
			$635 || ($632.on$(`mouseup`,{stopTimer: true},this));
			($639=(CLOUD_MANAGER.get('writing_system','khmer') === 'khmer'||undefined),$639===$632[$651]||($636|=2,$632[$651]=$639));
			($636&2 && $632.flag$('word mnu25o_gu'+' '+($632[$638] ? `active` : '')+' '+($632[$642] ? `known` : '')+' '+($632[$644] ? `not_in_dict` : '')+' '+($632[$646] ? `no_phonetics` : '')+' '+($632[$651] ? `khmer` : '')));
			($639=display_word,($639===$632[$653]&&$635) || ($632[$652] = $632[$placeChild$]($632[$653]=$639,384,$632[$652])));
			$635 || !$632.setup || $632.setup($636);
			$632[$afterVisit$]($636);
			$625.push($632,$626++,$633);
			
		};$625[$afterVisit$]($626);;
		;
		$597[$afterReconcile$]($599);
		return $597;
	}
	toggleKhmer(){
		// Toggle between Khmer and phonetic writing systems
		CLOUD_MANAGER.toggleWritingSystem();
		
		// Update local data and save
		CLOUD_MANAGER.pullFromCloud();
		return APP.save();
	}
	// Goes to the next word in the phrase
	
	nextWord(phrase){
		/* NOTE
				if current word is not the last word in the phrase,
				route to the next word. If it is the last word of the phrase,
				go to the first word of the next phrase.
				*/
		
		let current_wid = this.rt.wid;
		let last_word_i = phrase.kh_array.length - 1;
		let is_last_word = last_word_i == current_wid;
		if (is_last_word) {
			this.nextPhrase();
		} else {
			let next_word_i = this.inc(this.rt.wid);
			CLOUD_MANAGER.set('active_word',phrase.kh_array[next_word_i]);
			this.goTo(this.rt.cid,this.rt.lid,this.rt.pid,next_word_i);
		};
		return APP.save();
	}
	
	nextPhrase(){
		let current_phrase_key = [this.rt.cid,this.rt.lid,this.rt.pid].join('-');
		let current_pid = this.rt.pid;
		let phrases_in_lesson = LIBRARY.phrases[current_phrase_key].of;
		let is_last_phrase = phrases_in_lesson == current_pid;
		if (is_last_phrase) {
			return this.nextLesson();
		} else {
			let next_pid = this.inc(this.rt.pid);
			return this.goTo(this.rt.cid,this.rt.lid,next_pid);
			
		};
	}
	nextLesson(){
		let current_lesson_key = [this.rt.cid,this.rt.lid].join('-');
		let current_lid = this.rt.lid;
		let current_cid = this.rt.cid;
		let final_lid = LIBRARY.lessons[current_lesson_key].of;
		let final_cid = LIBRARY.collections[current_cid].of;
		let final_lessonΦ = final_lid == current_lid;
		if (final_lessonΦ) {
			return NOTE.gray('🎉 This is the last lesson for this collection!');
		} else {
			return this.router.go(("/learn/" + (this.rt.cid) + "/" + this.inc(this.rt.lid) + "/1/0"));
		};
	}
	
	// NOTE: Goes to the previous word in the phrase
	prevWord(phrase){
		/* NOTE
				if current word is not the last word in the phrase,
				route to the next word. If it is the last word of the phrase,
				go to the first word of the next phrase.
				*/
		
		let current_wid = this.rt.wid;
		let first_wid = 0;// NOTE: words are zero index
		let first_wordΦ = first_wid == current_wid;
		if (first_wordΦ) {
			this.prevPhraseLastWord();
		} else {
			let prev_wid = this.dec(this.rt.wid);
			CLOUD_MANAGER.set('active_word',phrase.kh_array[prev_wid]);
			this.goTo(this.rt.cid,this.rt.lid,this.rt.pid,prev_wid);
		};
		return APP.save();
	}
	prevPhraseLastWord(){
		let current_phrase_key = [this.rt.cid,this.rt.lid,this.rt.pid].join('-');
		let prev_pid = this.dec(this.rt.pid);
		let prev_phrase_key = [this.rt.cid,this.rt.lid,prev_pid].join('-');
		let curr_phrase = LIBRARY.phrases[current_phrase_key];
		if (curr_phrase.isFirst) {
			return this.prevLessonLastPhraseLastWord();
		} else {
			let prev_phrase = LIBRARY.phrases[prev_phrase_key];
			let prev_phrase_final_wid = prev_phrase.kh_array.length - 1;
			return this.goTo(this.rt.cid,this.rt.lid,prev_pid,prev_phrase_final_wid);
			
		};
	}
	prevPhraseFirstWord(){
		let current_phrase_key = [this.rt.cid,this.rt.lid,this.rt.pid].join('-');
		let current_phrase = LIBRARY.phrases[current_phrase_key];
		if (this.rt.lid > 1 && this.rt.pid > 1) {
			let prev_phrase_key = [this.rt.cid,this.rt.lid,this.dec(this.rt.pid)].join('-');
			let prev_phrase = LIBRARY.phrases[prev_phrase_key];
			return this.goTo(this.rt.cid,this.rt.lid,this.dec(this.rt.pid),0);
		} else if (this.rt.lid > 1 && this.rt.pid == 1) {
			let prev_lesson_key = [this.rt.cid,this.dec(this.rt.lid)].join('-');
			let prev_lesson = LIBRARY.lessons[prev_lesson_key];
			return this.goTo(this.rt.cid,prev_lesson.li,prev_lesson.first_phrase_i,0);
		} else if (this.rt.lid == 1 && this.rt.pid == 1) {
			return NOTE.gray('🏁 this is the first lesson of the collection');
		} else if (current_phrase.isFirst) {
			return this.prevLessonLastPhraseFirstWord();
		} else {
			return this.goTo(this.rt.cid,this.rt.lid,this.dec(this.rt.pid),0);
		};
	}
	prevLessonLastPhraseFirstWord(){
		// NOTE: Current Lesson
		let current_lesson_key = [this.rt.cid,this.rt.lid].join('-');
		let current_lesson = LIBRARY.lessons[current_lesson_key];
		if (current_lesson.isFirst) {
			return NOTE.gray('🏁 this is the first lesson of the collection');
		} else {
			// NOTE: PreviousLesson
			let prev_lesson_key = [this.rt.cid,this.dec(this.rt.lid)].join('-');
			let prev_lesson = LIBRARY.lessons[prev_lesson_key];
			return this.goTo(this.rt.cid,prev_lesson.li,prev_lesson.first_phrase_i,0);
		};
	}
	// NOTE: Goes to the previous phrase in the lesson
	prevLessonLastPhraseLastWord(){
		// NOTE: Current Lesson
		let current_lesson_key = [this.rt.cid,this.rt.lid].join('-');
		let current_lesson = LIBRARY.lessons[current_lesson_key];
		if (current_lesson.isFirst) {
			return NOTE.gray('🏁 this is the first lesson of the collection');
		} else {
			// NOTE: PreviousLesson
			let prev_lesson_key = [this.rt.cid,this.dec(this.rt.lid)].join('-');
			let prev_lesson = LIBRARY.lessons[prev_lesson_key];
			// NOTE: Prev Lesson, last phrase index
			prev_lesson.last_phrase_key = negIndex$__(prev_lesson.phrase_keys,-1);
			prev_lesson.phrases_in_lesson = prev_lesson.phrase_keys.length;
			let prev_phrase = LIBRARY.phrases[prev_lesson.last_phrase_key];
			prev_lesson.last_word_i = prev_phrase.phrase.length - 1;
			return this.goTo(this.rt.cid,prev_lesson.li,prev_lesson.phrases_in_lesson,prev_lesson.last_word_i);
		};
	}
	// NOTE: router simplifier
	goTo(c,l,p,w){
		// Update the route state before navigation
		let rt = {cid: c,lid: l,pid: p || 1,wid: w || 0};
		CLOUD_MANAGER.set('rt',rt);
		
		// Then navigate
		if (w) {
			this.router.go(("/learn/" + c + "/" + l + "/" + p + "/" + w));
		} else if (p) {
			this.router.go(("/learn/" + c + "/" + l + "/" + p + "/0"));
		} else if (l) {
			this.router.go(("/learn/" + c + "/" + l + "/1/0"));
		} else if (c) {
			this.router.go(("/learn/" + c + "/1/1/0"));
		};
		
		// Manually trigger commit to ensure all components update
		return imba_commit();
		
	}
	playWord(player,filename){
		if (!(!AUDIO[filename])) {
			player.src = AUDIO[filename];
			return player.play();
		} else {
			return console.warn('no audio');
		};
	}
	
	inc(num){
		let res = Number(num) + 1;
		return res;
	}
	
	dec(num){
		let res = Number(num) - 1;
		return res;
	}
	
	handleHold(word){
		APP.toggleLearned(CLOUD_MANAGER.get('active_word'));
		this.stopTimer();
		this.resetTimer();
		return imba_commit();
		
	}
	// NOTE: used
	// NOTE: used
	
	pressAndHold(word,duration){
		var self = this;
		CLOUD_MANAGER.set('active_word',word);
		CLOUD_MANAGER.pullFromCloud();
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
	static {
		register$(this,c$16,'WordNav',2);
		imba_defineTag('word-nav-mnu25o-hc',this,{cssns: 'mnu25o_gu',cssid: 'mnu25o-gu',name: 'WordNav'});
	}
};

// CARD[epic=CARD, seq=30] WordCard
let c$17 = Symbol();
class WordCard extends imba_Component {
	get $fit(){
		let el=imba_createElement('a',null,'fit khmer mnu25o_hd $fit',null);
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
		var $671, $672, $715, $655, $656, $657, $659, $661, $662, $664, $667, $669, $670, $674, $675, $677, $678, $679, $683, $684, $686, $687, $689, $690, $691, $695, $696, $697, $701, $702, $705, $707, $708, $709, $712, $714, $717, $718;
		{$655=this;
		$655[$beforeReconcile$]();
		($656=$657=1,$655[$658] === 1) || ($656=$657=0,$655[$658]=1);
		const activeWord = CLOUD_MANAGER.get('active_word','');
		let vida = dictionary[activeWord]?.vida;
		let vida_auto = dictionary[activeWord]?.vida_auto;
		let ipa = dictionary[activeWord]?.ipa;
		($661=$662=1,$659=$655[$660]) || ($661=$662=0,$655[$660]=($659=this.$fit,$659[$$up$]=$655,$659));
		$661 || ($659.title="Click to search this word on sealang.net dictionary.");
		($664=("http://sealang.net/api/api.pl?query=" + activeWord + "&service=dictionary"),$664===$655[$663] || ($659.href=$655[$663]=$664));
		$661 || ($659.target="_blank");
		($664=activeWord,($664===$655[$666]&&$661) || ($655[$665] = $659[$placeChild$]($655[$666]=$664,384,$655[$665])));
		$661 || $655[$appendChild$]($659);
		;
		{($669=$670=1,$667=$655[$668]) || ($669=$670=0,$655[$668]=$667=imba_createElement('div',$655,'mnu25o-hg phonetic-wrapper mnu25o_hd',null));
		$669 || ($667.on$(`click`,{$_: [function(e,$$) {
			return APP.toggleIpa();
		}]},this));
		const useIpa = CLOUD_MANAGER.get('ipa',false);
		$671 = $672 = null;
		if (useIpa) {
			($674=$675=1,$671=$655[$673]) || ($674=$675=0,$655[$673]=$671=imba_createElement('span',null,'mnu25o-hh mnu25o_hd',"ipa"));
			$674||($671[$$up$]=$667);
			
			if (ipa) {
				($677=$678=1,$672=$655[$676]) || ($677=$678=0,$655[$676]=$672=imba_createElement('div',null,'phonetic mnu25o_hd',null));
				$677||($672[$$up$]=$667);
				($679=ipa,($679===$672[$681]&&$677) || ($672[$680] = $672[$placeChild$]($672[$681]=$679,384,$672[$680])));
				
			} else {
				($683=$684=1,$672=$655[$682]) || ($683=$684=0,$655[$682]=$672=imba_createElement('div',null,'mnu25o-hj phonetic mnu25o_hd',"unavailable"));
				$683||($672[$$up$]=$667);
				
			};
		} else {
			($686=$687=1,$671=$655[$685]) || ($686=$687=0,$655[$685]=$671=imba_createElement('span',null,'mnu25o-hk mnu25o_hd',"vida"));
			$686||($671[$$up$]=$667);
			
			if (vida) {
				($689=$690=1,$672=$655[$688]) || ($689=$690=0,$655[$688]=$672=imba_createElement('div',null,'phonetic mnu25o_hd',null));
				$689||($672[$$up$]=$667);
				($691=vida,($691===$672[$693]&&$689) || ($672[$692] = $672[$placeChild$]($672[$693]=$691,384,$672[$692])));
				
			} else if (vida_auto) {
				($695=$696=1,$672=$655[$694]) || ($695=$696=0,$655[$694]=$672=imba_createElement('div',null,'phonetic mnu25o_hd',null));
				$695||($672[$$up$]=$667);
				($697=vida_auto,($697===$672[$699]&&$695) || ($672[$698] = $672[$placeChild$]($672[$699]=$697,384,$672[$698])));
				
			} else {
				($701=$702=1,$672=$655[$700]) || ($701=$702=0,$655[$700]=$672=imba_createElement('div',null,'phonetic mnu25o_hd',"unavailable"));
				$701||($672[$$up$]=$667);
				
			};
		};
		($655[$703] = $667[$placeChild$]($671,0,$655[$703]));
		($655[$704] = $667[$placeChild$]($672,0,$655[$704]));
		};
		($707=$708=1,$705=$655[$706]) || ($707=$708=0,$655[$706]=$705=imba_createComponent(ToggleSwitch,$655,'mnu25o_hd',"learned"));
		$709 = $705[$getSlot$]('__',$655);
		($712=(CLOUD_MANAGER.hasLearnedWord(activeWord)||undefined),$712===$655[$711]||($708|=2,$655[$711]=$712));
		$714 = $655[$713] || ($655[$713]={$_: [function(e,$$,_2) {
			return APP.toggleLearned(_2);
		},null]});
		$714.$_[1]=activeWord;
		$707 || $705.on$(`click`,$714,this);
		($708&2 && $705.flag$('mnu25o_hd'+' '+($655[$711] ? `active` : '')));
		$707 || !$705.setup || $705.setup($708);
		$705[$afterVisit$]($708);
		$707 || $655[$appendChild$]($705);
		;
		$715 = null;
		if (AUDIO.hasOwnProperty(activeWord)) {
			($717=$718=1,$715=$655[$716]) || ($717=$718=0,$655[$716]=$715=imba_createComponent(AudioPlayer,null,'mnu25o_hd',null));
			$717||($715[$$up$]=$655);
			$717 || !$715.setup || $715.setup($718);
			$715[$afterVisit$]($718);
			
		};
		($655[$719] = $655[$placeChild$]($715,0,$655[$719]));
		$655[$afterReconcile$]($657);
		return $655;
		};
	}
	static {
		register$(this,c$17,'WordCard',2);
		imba_defineTag('word-card-mnu25o-hq',this,{cssns: 'mnu25o_hd',cssid: 'mnu25o-hd',name: 'WordCard'});
	}
};

let c$18 = Symbol();
class ToggleSwitch extends imba_Component {
	
	render(){
		var $720, $721, $722, $724, $726, $727, $728;
		$720=this;
		$720[$beforeReconcile$]();
		($721=$722=1,$720[$723] === 1) || ($721=$722=0,$720[$723]=1);
		($726=$727=1,$724=$720[$725]) || ($726=$727=0,$720[$725]=$724=imba_createElement('div',$720,'switch mnu25o_hr',null));
		$728=$720.__slots.__;
		if(!$728 || !$728.hasChildNodes()){
		($728="on");
		
		}
		$728===$724[$731] || ($724[$730] = $724[$placeChild$]($724[$731]=$728,384,$724[$730]));
		$726 || !$724.setup || $724.setup($727);
		$724[$afterVisit$]($727);
		;
		$720[$afterReconcile$]($722);
		return $720;
	}
	static {
		register$(this,c$18,'ToggleSwitch',2);
		imba_defineTag('toggle-switch-mnu25o-hv',this,{cssns: 'mnu25o_hr',cssid: 'mnu25o-hr',name: 'ToggleSwitch'});
	}
};

let c$19 = Symbol();
class AudioPlayer extends imba_Component {
	get $track(){
		let el=imba_createElement('audio',null,'$track',null);
		return (Object.defineProperty(this,'$track',{value:el}),el);
	}
	render(){
		var self = this, $744, $732, $733, $734, $736, $738, $739, $741, $742, $746, $747, $748, $749, $751, $752, $753, $754;
		{$732=this;
		$732[$beforeReconcile$]();
		($733=$734=1,$732[$735] === 1) || ($733=$734=0,$732[$735]=1);
		let word = "";
		if (this.manual) {
			word = this.manual;
		} else {
			word = CLOUD_MANAGER.get('active_word','');
		};
		($738=$739=1,$736=$732[$737]) || ($738=$739=0,$732[$737]=($736=this.$track,$736[$$up$]=$732,$736));
		$738 || ($736.on$(`ended`,{commit: true},this));
		($741=AUDIO[word],$741===$732[$740] || ($736.src=$732[$740]=$741));
		$738 || ($736.type="audio/mpeg");
		$738 || ($736.preload="auto");
		$738 || $732[$appendChild$]($736);
		;
		($742=$732[$743]) || ($732[$743]=$742=imba_createElement('div',$732,'mnu25o-hy button-wrapper',null));
		$744 = null;
		if (this.$track.paused) { // when paused
			($746=$747=1,$744=$732[$745]) || ($746=$747=0,$732[$745]=$744=imba_createElement('div',null,'mnu25o-hz play-audio',null));
			$746||($744[$$up$]=$742);
			$746 || ($744.on$(`hotkey`,{options: ['space|a']},this));
			$746 || ($744.on$(`click`,{$_: [function(e,$$) {
				return self.$track.play(e);
			}]},this));
			$746 || ($748=imba_createSVGElement('svg',$744,'mnu25o-ia',null));
			$746 || ($748.set$('stroke-width',"1.5"));
			$746 || ($748.set$('viewBox',"0 0 24 24"));
			$746 || ($748.set$('fill',"none"));
			$746 || ($748.set$('xmlns',"http://www.w3.org/2000/svg"));
			$746 || ($748.set$('color',"#000000"));
			$746 || ($749=imba_createSVGElement('path',$748,'mnu25o-ib',null));
			$746 || ($749.set$('d',"M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z"));
			$746 || ($749.set$('stroke',"#000000"));
			$746 || ($749.set$('stroke-width',"1.5"));
			$746 || ($749.set$('stroke-linecap',"round"));
			$746 || ($749.set$('stroke-linejoin',"round"));
			;
			;
		} else { // when playing
			($751=$752=1,$744=$732[$750]) || ($751=$752=0,$732[$750]=$744=imba_createElement('div',null,'mnu25o-ic play-audio',null));
			$751||($744[$$up$]=$742);
			$751 || ($744.on$(`hotkey`,{options: ['space']},this));
			$751 || ($744.on$(`click`,{$_: [function(e,$$) {
				return self.$track.pause(e);
			}]},this));
			$751 || ($753=imba_createSVGElement('svg',$744,'mnu25o-id',null));
			$751 || ($753.set$('stroke-width',"1.5"));
			$751 || ($753.set$('fill',"none"));
			$751 || ($753.set$('xmlns',"http://www.w3.org/2000/svg"));
			$751 || ($753.set$('color',"#000"));
			$751 || ($753.set$('viewBox',"0 0 24 24"));
			$751 || ($754=imba_createSVGElement('path',$753,'mnu25o-ie',null));
			$751 || ($754.set$('d',"M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6z"));
			;
			;
		};
		($732[$755] = $742[$placeChild$]($744,0,$732[$755]));
		;
		$732[$afterReconcile$]($734);
		return $732;
		};
	}
	static {
		register$(this,c$19,'AudioPlayer',2);
		imba_defineTag('audio-player-mnu25o-if',this,{name: 'AudioPlayer'});
	}
};
// CARD[epic=CARD, seq=31] DefinitionCard
let c$20 = Symbol();
class DefinitionCard extends imba_Component {
	render(){
		var $760, $761, $756, $757, $758, $763, $764, $766, $767, $770, $773, $771, $774, $776, $777, $778, $780, $783, $781, $784, $785, $787, $790, $788, $791, $792, $798, $799, $801, $802, $805, $806, $807, $808;
		{$756=this;
		$756[$beforeReconcile$]();
		($757=$758=1,$756[$759] === 1) || ($757=$758=0,$756[$759]=1);
		const activeWord = CLOUD_MANAGER.get('active_word','');
		const word_object = dictionary[activeWord];
		$760 = $761 = null;
		if (word_object?.def !== false) {
			($763=$764=1,$760=$756[$762]) || ($763=$764=0,$756[$762]=$760=imba_createElement('h2',null,null,"Definition"));
			$763||($760[$$up$]=$756);
			
			($761 = $756[$765]) || ($756[$765]=$761=imba_createKeyedList(1024,null));
			$761[$$up$] = $756;
			$766 = 0;
			$767=$761.$;
			for (let $768 = 0, $769 = iterable$(word_object?.def || []), $796 = $769.length; $768 < $796; $768++) {
				let item = $769[$768];
				if (item?.includes?.('=')) {
					let line = item.split('=');
					let use = line[0];
					let translations = line[1]?.split?.('|') || [];
					($773=$774=1,$770=($771=$767[$getRenderContext$]($772)).get($766)) || ($773=$774=0,$771.set($766,$770=imba_createElement('ol',$761,'mnu25o-ii',null)));
					$773||($770[$$up$]=$761);
					($776 = $770[$775]) || ($770[$775]=$776=imba_createKeyedList(1408,$770));
					$777 = 0;
					$778=$776.$;
					for (let item_i = 0, $779 = iterable$(translations), $795 = $779.length; item_i < $795; item_i++) {
						let item = $779[item_i];
						if (item_i === 0) {
							($783=$784=1,$780=($781=$778[$getRenderContext$]($782)).get($777)) || ($783=$784=0,$781.set($777,$780=imba_createElement('p',$776,'mnu25o-ij use',null)));
							$783||($780[$$up$]=$776);
							($785=use,$785===$780[$786] || $780.text$(String($780[$786]=$785)));
							$776.push($780,$777++,$781);
							
						};
						($790=$791=1,$787=($788=$778[$getRenderContext$]($789)).get($777)) || ($790=$791=0,$788.set($777,$787=imba_createElement('li',$776,'mnu25o-ik def',null)));
						$790||($787[$$up$]=$776);
						($792=item,($792===$787[$794]&&$790) || ($787[$793] = $787[$placeChild$]($787[$794]=$792,384,$787[$793])));
						$776.push($787,$777++,$788);
						
					};$776[$afterVisit$]($777);;
					$761.push($770,$766++,$771);
				};
			};$761[$afterVisit$]($766);
		} else {
			($798=$799=1,$760=$756[$797]) || ($798=$799=0,$756[$797]=$760=imba_createElement('h2',null,null,"Google Definition"));
			$798||($760[$$up$]=$756);
			
			($761 = $756[$800]) || ($756[$800]=$761=imba_createIndexedList(0,null));
			$761[$$up$] = $756;
			$801 = 0;
			$802=$761.$;
			for (let $803 = 0, $804 = iterable$(word_object?.google?.split?.('|') || []), $811 = $804.length; $803 < $811; $803++) {
				let defi = $804[$803];
				($806=$807=1,$805=$802[$801]) || ($806=$807=0,$802[$801]=$805=imba_createElement('p',$761,null,null));
				$806||($805[$$up$]=$761);
				($808=defi,($808===$805[$810]&&$806) || ($805[$809] = $805[$placeChild$]($805[$810]=$808,384,$805[$809])));
				$801++;
				
			};$761[$afterVisit$]($801);
		};
		($756[$812] = $756[$placeChild$]($760,0,$756[$812]));
		($756[$813] = $756[$placeChild$]($761,0,$756[$813]));
		$756[$afterReconcile$]($758);
		return $756;
		};
	}
	static {
		register$(this,c$20,'DefinitionCard',2);
		imba_defineTag('definition-card-mnu25o-in',this,{name: 'DefinitionCard'});
	}
};

// CARD[epic=CARD, seq=32] ShortcutCard
let c$21 = Symbol();
class ShortcutCard extends imba_Component {
	
	render(){
		var $814, $815, $816, $818, $819, $820, $821, $822, $823, $824, $825, $826, $827, $828, $829, $830, $831, $832, $833, $834, $835, $836, $837, $838, $839, $840, $841, $842, $843, $844, $845, $846, $847, $848, $849, $850, $851, $852, $853, $854, $855, $856, $857, $858, $859, $860, $861, $862;
		$814=this;
		$814[$beforeReconcile$]();
		($815=$816=1,$814[$817] === 1) || ($815=$816=0,$814[$817]=1);
		((!$815||$816&2) && $814.flagSelf$('shortcuts card'));
		$815 || ($818=imba_createElement('h2',$814,'mnu25o_io',"Shortcuts"));
		;
		$815 || ($819=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($820=imba_createElement('span',$819,'key-text mnu25o_io',"Toggle learned"));
		;
		$815 || ($821=imba_createElement('span',$819,'key-wrapper mnu25o_io',null));
		$815 || ($822=imba_createElement('span',$821,'key mnu25o_io',"s"));
		;
		$815 || ($823=imba_createElement('span',$821,'key mnu25o_io',"enter"));
		;
		$815 || ($824=imba_createElement('span',$821,'key mnu25o_io',"hold 1s"));
		;
		;
		;
		$815 || ($825=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($826=imba_createElement('span',$825,'key-text mnu25o_io',"Play audio "));
		;
		$815 || ($827=imba_createElement('span',$825,'key-wrapper mnu25o_io',null));
		$815 || ($828=imba_createElement('span',$827,'key mnu25o_io',"a"));
		;
		$815 || ($829=imba_createElement('span',$827,'key mnu25o_io',"space"));
		;
		$815 || ($830=imba_createElement('span',$827,'key mnu25o_io',"dbl tap"));
		;
		;
		;
		$815 || ($831=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($832=imba_createElement('span',$831,'key-text mnu25o_io',"Previous lesson"));
		;
		$815 || ($833=imba_createElement('span',$831,'key-wrapper horizontal mnu25o_io',null));
		$815 || ($834=imba_createElement('span',$833,'key mnu25o_io',"e"));
		;
		$815 || ($835=imba_createElement('span',$833,'key mnu25o_io',"↑"));
		;
		;
		;
		$815 || ($836=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($837=imba_createElement('span',$836,'key-text mnu25o_io',"Next lesson"));
		;
		$815 || ($838=imba_createElement('span',$836,'key-wrapper horizontal mnu25o_io',null));
		$815 || ($839=imba_createElement('span',$838,'key mnu25o_io',"r"));
		;
		$815 || ($840=imba_createElement('span',$838,'key mnu25o_io',"↓"));
		;
		;
		;
		$815 || ($841=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($842=imba_createElement('span',$841,'key-text mnu25o_io',"Previous word"));
		;
		$815 || ($843=imba_createElement('span',$841,'key-wrapper horizontal mnu25o_io',null));
		$815 || ($844=imba_createElement('span',$843,'key mnu25o_io',"d"));
		;
		$815 || ($845=imba_createElement('span',$843,'key mnu25o_io',"←"));
		;
		;
		;
		$815 || ($846=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($847=imba_createElement('span',$846,'key-text mnu25o_io',"Next word"));
		;
		$815 || ($848=imba_createElement('span',$846,'key-wrapper horizontal mnu25o_io',null));
		$815 || ($849=imba_createElement('span',$848,'key mnu25o_io',"f"));
		;
		$815 || ($850=imba_createElement('span',$848,'key mnu25o_io',"→"));
		;
		;
		;
		$815 || ($851=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($852=imba_createElement('span',$851,'key-text mnu25o_io',"Toggle dark mode"));
		;
		$815 || ($853=imba_createElement('span',$851,'key-wrapper horizontal mnu25o_io',null));
		$815 || ($854=imba_createElement('span',$853,'key mnu25o_io',"shift & d"));
		;
		;
		;
		$815 || ($855=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($856=imba_createElement('span',$855,'key-text mnu25o_io',"Change phonetics system"));
		;
		$815 || ($857=imba_createElement('span',$855,'key-wrapper mnu25o_io',null));
		$815 || ($858=imba_createElement('span',$857,'key mnu25o_io',"v"));
		;
		$815 || ($859=imba_createElement('span',$857,'key mnu25o_io',"shift & i"));
		;
		;
		;
		$815 || ($860=imba_createElement('div',$814,'shortcut-wrapper mnu25o_io',null));
		$815 || ($861=imba_createElement('span',$860,'key-text mnu25o_io',"Clear all progres. Refresh browser after"));
		;
		$815 || ($862=imba_createElement('span',$860,'key mnu25o_io',"shift & c & l"));
		;
		;
		$814[$afterReconcile$]($816);
		return $814;
	}
	static {
		register$(this,c$21,'ShortcutCard',2);
		imba_defineTag('shortcut-card-mnu25o-kj',this,{cssns: 'mnu25o_io',name: 'ShortcutCard'});
	}
};
let c$22 = Symbol();
class SpellingCard extends imba_Component {
	
	render(){
		var $892, $863, $864, $865, $867, $869, $870, $871, $874, $875, $876, $877, $879, $880, $883, $886, $888, $890, $894, $895, $896, $900, $901, $902;
		{$863=this;
		$863[$beforeReconcile$]();
		($864=$865=1,$863[$866] === 1) || ($864=$865=0,$863[$866]=1);
		$864 || ($867=imba_createElement('h2',$863,'mnu25o_kk',"Word Spelling"));
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
		const activeWord = CLOUD_MANAGER.get('active_word','');
		let testword = activeWord;
		let groups = testword.match(regtest);
		($869 = $863[$868]) || ($863[$868]=$869=imba_createIndexedList(256,$863));
		$870 = 0;
		$871=$869.$;
		for (let $872 = 0, $873 = iterable$(groups), $906 = $873.length; $872 < $906; $872++) {
			let item = $873[$872];
			let cluster = clusters[item];
			let vowel = item.match(/[ា-៑]/);
			($875=$876=1,$874=$871[$870]) || ($875=$876=0,$871[$870]=$874=imba_createElement('div',$869,'letter-row mnu25o_kk',null));
			$875||($874[$$up$]=$869);
			($879=$880=1,$877=$874[$878]) || ($879=$880=0,$874[$878]=$877=imba_createElement('span',$874,'letter mnu25o_kk',null));
			($883=cluster?.type,$883===$874[$882]||($880|=2,$874[$882]=$883));
			($880&2 && $877.flag$('letter mnu25o_kk'+' '+($874[$882]||'')));
			($883=item,($883===$874[$885]&&$879) || ($874[$884] = $877[$placeChild$]($874[$885]=$883,384,$874[$884])));
			;
			($886=$874[$887]) || ($874[$887]=$886=imba_createElement('span',$874,'vida mnu25o_kk',null));
			($888=$874[$889]) || ($874[$889]=$888=imba_createElement('span',$886,'mnu25o_kk',null));
			($890=cluster?.vida[0],$890===$874[$891] || $888.text$(String($874[$891]=$890)));
			;
			$892 = null;
			if (vowel) {
				($894=$895=1,$892=$874[$893]) || ($894=$895=0,$874[$893]=$892=imba_createElement('span',null,'mnu25o_kk',null));
				$894||($892[$$up$]=$886);
				$894 || $892[$placeChild$]("|");
				($896=cluster?.vida[1],($896===$892[$898]&&$894) || ($892[$897] = $892[$placeChild$]($892[$898]=$896,256,$892[$897])));
				
			} else {
				($900=$901=1,$892=$874[$899]) || ($900=$901=0,$874[$899]=$892=imba_createElement('span',null,'mnu25o_kk',null));
				$900||($892[$$up$]=$886);
				$900 || $892[$placeChild$]("(");
				($902=cluster?.vida[1],($902===$892[$904]&&$900) || ($892[$903] = $892[$placeChild$]($892[$904]=$902,0,$892[$903])));
				$900 || $892[$placeChild$](")");
				
			};
			($874[$905] = $886[$placeChild$]($892,0,$874[$905]));
			;
			$870++;
		};$869[$afterVisit$]($870);;
		$863[$afterReconcile$]($865);
		return $863;
		};
	}
	static {
		register$(this,c$22,'SpellingCard',2);
		imba_defineTag('spelling-card-mnu25o-kt',this,{cssns: 'mnu25o_kk',cssid: 'mnu25o-kk',name: 'SpellingCard'});
	}
};

// TAG[epic=NAV, seq=34] lesson-nav
let c$23 = Symbol();
class LessonNavComponent extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.currentLid = ($$ && ($0 = $$.currentLid) !== undefined) ? ($0) : 0;
		
	}
	setup(){
		// Subscribe to router events
		var self = this;
		return window.addEventListener('router:change',function() {
			return self.updateActiveLid();
		});
	}
	updateActiveLid(){
		this.currentLid = Number(CLOUD_MANAGER.state.rt?.lid || this.rt?.lid || 0);
		return imba_commit();
	}
	
	routed(params){
		this.rt = params;
		// Make sure we update the global route state
		CLOUD_MANAGER.set('rt',this.rt);
		this.updateActiveLid();
		return APP.save();
	}
	
	isActive(lid){
		let res = this.currentLid == lid;
		if (is$(res,true)) {
			return res;
		};
	}
	
	render(){
		var $907, $908, $909, $912, $913, $914, $918 = this._ns_ || '', $919, $920, $921, $924;
		{$907=this;
		$907[$beforeReconcile$]();
		($908=$909=1,$907[$910] === 1) || ($908=$909=0,$907[$910]=1);
		let routed_collection = LIBRARY.collections[CLOUD_MANAGER.state.rt?.cid || this.rt?.cid];
		($912 = $907[$911]) || ($907[$911]=$912=imba_createIndexedList(384,$907));
		$913 = 0;
		$914=$912.$;
		for (let $917 = LIBRARY.lessons, $915 = 0, $916 = Object.keys($917), $927 = $916.length, l_key, _lesson; $915 < $927; $915++){
			// Use both local rt and CLOUD_MANAGER.state.rt to make it more resilient
			l_key = $916[$915];_lesson = $917[l_key];($920=$921=1,$919=$914[$913]) || ($920=$921=0,$914[$913]=$919=imba_createComponent('lesson-nav-item',$912,`${$918}`,null));
			$920||($919[$$up$]=$912);
			($924=(this.isActive(_lesson.lid)||undefined),$924===$919[$923]||($921|=2,$919[$923]=$924));
			($924=("/learn/" + (_lesson.cid) + "/" + (_lesson.lid) + "/1/0"),$924===$919[$925] || ($919.routeΞto=$919[$925]=$924));
			(_lesson===$919[$926] || ($919.lesson=$919[$926]=_lesson));
			($921&2 && $919.flag$(`${$918}`+' '+($919[$923] ? `active` : '')));
			$920 || !$919.setup || $919.setup($921);
			$919[$afterVisit$]($921);
			$913++;
			
		};$912[$afterVisit$]($913);;
		$907[$afterReconcile$]($909);
		return $907;
		};
	}
	static {
		register$(this,c$23,'lesson-nav',2);
		imba_defineTag('lesson-nav',this,{cssns: 'mnu25o_ku',cssid: 'mnu25o-ku'});
	}
};

// TAG[epic=NAV, seq=35] lesson-nav-item
let c$24 = Symbol();
class LessonNavItemComponent extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		super[__init__$](...arguments);
		this.lesson = $$ ? $$.lesson : undefined;
		this.rt = $$ ? $$.rt : undefined;
		
	}
	render(){
		var $928, $929, $930, $932 = this._ns_ || '', $933, $934, $936, $940, $942, $945, $947, $952, $954, $955, $957;
		{$928=this;
		$928[$beforeReconcile$]();
		($929=$930=1,$928[$931] === 1) || ($929=$930=0,$928[$931]=1);
		((!$929||$930&2) && $928.flagSelf$('mnu25o-ky lesson-button'));
		$929 || ($933=imba_createElement('div',$928,`mnu25o-kz lesson-text ${$932}`,null));
		($934=$928[$935]) || ($928[$935]=$934=imba_createElement('div',$933,`lesson-name ${$932}`,null));
		(imba_renderContext.context=($928[$938] || ($928[$938]={_:$934})),$936=[this.lesson.lid,this.lesson.title.en].join('. '),imba_renderContext.context=null,($936===$928[$939]&&$929) || ($928[$937] = $934[$placeChild$]($928[$939]=$936,384,$928[$937])));
		;
		($940=$928[$941]) || ($928[$941]=$940=imba_createElement('div',$933,`mnu25o-lb lesson-subtitle ${$932}`,null));
		($942=this.lesson.subtitle.en,($942===$928[$944]&&$929) || ($928[$943] = $940[$placeChild$]($928[$944]=$942,384,$928[$943])));
		;
		;
		let progress = PROGRESS[this.lesson.key];
		($945=$928[$946]) || ($928[$946]=$945=imba_createElement('div',$928,`mnu25o-lc lesson-number ${$932}`,null));
		($947=progress.weight_learned,($947===$928[$949]&&$929) || ($928[$948] = $945[$placeChild$]($928[$949]=$947,128,$928[$948])));
		$929 || $945[$placeChild$]("/");
		($947=progress.weight,($947===$928[$951]&&$929) || ($928[$950] = $945[$placeChild$]($928[$951]=$947,0,$928[$950])));
		$929 || $945[$placeChild$](" words");
		;
		($954=$955=1,$952=$928[$953]) || ($954=$955=0,$928[$953]=$952=imba_createComponent(ElemProgressBar,$928,`color ${$932}`,null));
		($957=progress.weight_progress,$957===$928[$956] || ($952.progress=$928[$956]=$957));
		$954 || !$952.setup || $952.setup($955);
		$952[$afterVisit$]($955);
		$954 || $928[$appendChild$]($952);
		;
		$928[$afterReconcile$]($930);
		return $928;
		};
	}
	static {
		register$(this,c$24,'lesson-nav-item',2);
		imba_defineTag('lesson-nav-item',this,{cssns: 'mnu25o_kx',cssid: 'mnu25o-kx'});
	}
};

// TAG[epic=NAV, seq=36] phrase-nav
let c$25 = Symbol();
class PhraseNavComponent extends imba_Component {
	
	routed(params){
		this.rt = params;
		// Update the global route state to keep navigation in sync
		CLOUD_MANAGER.set('rt',this.rt);
		// Tell all lesson-nav instances to update their active state
		imba_commit();
		return APP.save();
	}
	render(){
		var $958, $959, $960, $963, $964, $965, $966 = this._ns_ || '', $967, $968, $969, $971, $972, $974, $975, $976, $979;
		{$958=this;
		$958[$beforeReconcile$]();
		($959=$960=1,$958[$961] === 1) || ($959=$960=0,$958[$961]=1);
		let lesson_key = [this.rt.cid,this.rt.lid].join('-');
		let phrases_num = LIBRARY.lessons[lesson_key].phrases;
		($963 = $958[$962]) || ($958[$962]=$963=imba_createIndexedList(384,$958));
		$964 = 0;
		$965=$963.$;
		for (let len = phrases_num, _pid = 1, rd = len - _pid; (rd > 0) ? (_pid <= len) : (_pid >= len); (rd > 0) ? (_pid++) : (_pid--)) {
			let phrase_key = [this.rt.cid,this.rt.lid,_pid].join('-');
			let phrase_route = [this.rt.cid,this.rt.lid,_pid].join('/');
			let phrase = PROGRESS[phrase_key];
			($968=$969=1,$967=$965[$964]) || ($968=$969=0,$965[$964]=$967=imba_createElement('div',$963,`number-toggle ${$966}`,null));
			$968||($967[$$up$]=$963);
			($971=("/learn/" + phrase_route + "/0"),$971===$967[$970] || ($967.routeΞto=$967[$970]=$971));
			($974=$975=1,$972=$967[$973]) || ($974=$975=0,$967[$973]=$972=imba_createComponent('el-progress-ring',$967,`${$966}`,null));
			$976 = $972[$getSlot$]('__',$967);
			($979=(this.rt.pid == _pid||undefined),$979===$967[$978]||($975|=2,$967[$978]=$979));
			($979=phrase.weight_progress,$979===$967[$980] || ($972.progress=$967[$980]=$979));
			$974 || ($972.size=30);
			($975&2 && $972.flag$(`${$966}`+' '+($967[$978] ? `active` : '')));
			($979=_pid,($979===$967[$982]&&$974) || ($967[$981] = $976[$placeChild$]($967[$982]=$979,384,$967[$981])));
			$974 || !$972.setup || $972.setup($975);
			$972[$afterVisit$]($975);
			$974 || $967[$appendChild$]($972);
			;
			$968 || !$967.setup || $967.setup($969);
			$967[$afterVisit$]($969);
			$964++;
		};$963[$afterVisit$]($964);;
		$958[$afterReconcile$]($960);
		return $958;
		};
	}
	static {
		register$(this,c$25,'phrase-nav',2);
		imba_defineTag('phrase-nav',this,{cssns: 'mnu25o_le',cssid: 'mnu25o-le'});
	}
};


let c$26 = Symbol();
class TelegramIcon extends imba_Component {
	
	render(){
		var $983, $984, $985, $987, $988;
		$983=this;
		$983[$beforeReconcile$]();
		($984=$985=1,$983[$986] === 1) || ($984=$985=0,$983[$986]=1);
		$984 || ($987=imba_createSVGElement('svg',$983,null,null));
		$984 || ($987.set$('viewBox',"4 4 16 16"));
		$984 || ($988=imba_createSVGElement('path',$987,'mnu25o-ll',null));
		$984 || ($988.set$('d',"M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"));
		;
		;
		$983[$afterReconcile$]($985);
		return $983;
	}
	
	static {
		register$(this,c$26,'TelegramIcon',2);
		imba_defineTag('telegram-icon-mnu25o-lm',this,{cssid: 'mnu25o-li',name: 'TelegramIcon'});
	}
};
// ELEMENT[epic=ELEMENT, seq=41] Progress Bar
let c$27 = Symbol();
class ElemProgressBar extends imba_Component {
	
	render(){
		var $989, $990, $991, $993, $994, $996, $997, $999;
		$989=this;
		$989[$beforeReconcile$]();
		($990=$991=1,$989[$992] === 1) || ($990=$991=0,$989[$992]=1);
		$990 || ($993=imba_createElement('div',$989,'progress-bg mnu25o_ln',null));
		($996=$997=1,$994=$989[$995]) || ($996=$997=0,$989[$995]=$994=imba_createElement('div',$993,'mnu25o-lq progress-fg mnu25o_ln',null));
		($999=this.progress + "%",$999===$989[$998] || ($994.css$var('--mnu25o_lr',$989[$998]=$999,null,'flb')));
		;
		;
		$989[$afterReconcile$]($991);
		return $989;
	}
	static {
		register$(this,c$27,'ElemProgressBar',2);
		imba_defineTag('elem-progress-bar-mnu25o-ls',this,{cssns: 'mnu25o_ln',cssid: 'mnu25o-ln',name: 'ElemProgressBar'});
	}
};

// ELEMENT[epic=ELEMENT, seq=42] Icon Template
let c$28 = Symbol();
class IconComponent extends imba_Component {
	
	static {
		register$(this,c$28,'icon',2);
		imba_defineTag('icon',this,{cssns: 'mnu25o_lt',cssid: 'mnu25o-lt'});
	}
};

// ELEMENT[epic=ELEMENT, seq=47] Progress Ring
let c$29 = Symbol();
class ElProgressRingComponent extends imba_Component {
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
		var $1000, $1001, $1002, $1004 = this._ns_ || '', $1005, $1007, $1008, $1010, $1011, $1012, $1014, $1015, $1016, $1018, $1021, $1026, $1027, $1029, $1030, $1032, $1033, $1035, $1036;
		$1000=this;
		$1000[$beforeReconcile$]();
		($1001=$1002=1,$1000[$1003] === 1) || ($1001=$1002=0,$1000[$1003]=1);
		($1007=$1008=1,$1005=$1000[$1006]) || ($1007=$1008=0,$1000[$1006]=$1005=imba_createElement('div',$1000,`mnu25o-lw circular ${$1004}`,null));
		($1010=this.size + 'px',$1010===$1000[$1009] || ($1005.css$var('--mnu25o_lx',$1000[$1009]=$1010,null,'s')));
		$1007 || ($1011=imba_createElement('div',$1005,`mnu25o-ly inner ${$1004}`,null));
		($1014=$1015=1,$1012=$1000[$1013]) || ($1014=$1015=0,$1000[$1013]=$1012=imba_createElement('div',$1011,`mnu25o-lz title ${$1004}`,null));
		$1016=$1000.__slots.__;
		($1012[$1017] = $1012[$placeChild$]($1016,384,$1012[$1017]));
		;
		$1014 || !$1012.setup || $1012.setup($1015);
		$1012[$afterVisit$]($1015);
		;
		;
		{($1018=$1000[$1019]) || ($1000[$1019]=$1018=imba_createElement('div',$1005,`circle ${$1004}`,null));
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
		($1021=this.size + "px",$1021===$1000[$1020] || ($1018.css$var('--mnu25o_mc',$1000[$1020]=$1021,null,'clip')));
		($1021=this.size + "px",$1021===$1000[$1022] || ($1018.css$var('--mnu25o_md',$1000[$1022]=$1021,null,'clip')));
		($1021=(this.size / 2) + "px",$1021===$1000[$1023] || ($1018.css$var('--mnu25o_me',$1000[$1023]=$1021,null,'clip')));
		($1021=(this.size / 2) + "px",$1021===$1000[$1024] || ($1018.css$var('--mnu25o_mf',$1000[$1024]=$1021,null,'clip')));
		($1021=this.size + "px",$1021===$1000[$1025] || ($1018.css$var('--mnu25o_mg',$1000[$1025]=$1021,null,'clip')));
		$1007 || ($1026=imba_createElement('div',$1018,`bar left mnu25o_mb ${$1004}`,null));
		($1029=$1030=1,$1027=$1000[$1028]) || ($1029=$1030=0,$1000[$1028]=$1027=imba_createElement('div',$1026,`mnu25o-mi progress mnu25o_mb ${$1004}`,null));
		(left_progress===$1000[$1031] || ($1027.css$var('--mnu25o_mj',$1000[$1031]=left_progress,null,'rotate')));
		;
		;
		$1007 || ($1032=imba_createElement('div',$1018,`bar right mnu25o_mb ${$1004}`,null));
		($1035=$1036=1,$1033=$1000[$1034]) || ($1035=$1036=0,$1000[$1034]=$1033=imba_createElement('div',$1032,`mnu25o-ml progress mnu25o_mb ${$1004}`,null));
		(right_progress===$1000[$1037] || ($1033.css$var('--mnu25o_mm',$1000[$1037]=right_progress,null,'rotate')));
		;
		;
		};
		;
		$1000[$afterReconcile$]($1002);
		return $1000;
		
	}
	static {
		register$(this,c$29,'el-progress-ring',2);
		imba_defineTag('el-progress-ring',this,{cssns: 'mnu25o_lu',cssid: 'mnu25o-lu'});
	}
};

imba_styles.register('mnu25o',".mnu25o-af, .mnu25o-hr, .mnu25o_mb.bar, .mnu25o_gu.word, .mnu25o_hd.switch, .mnu25o_hr.switch, .mnu25o_mb.progress, .mnu25o_ln.progress-fg, .mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.bar {\n--e_ad:0ms;--e_af:cubic-bezier(0.23, 1, 0.32, 1);--e_aw:0ms;\n--e_sd:var(--e_ad);--e_sf:var(--e_af);--e_sw:var(--e_aw);\n--e_od:var(--e_sd);--e_of:var(--e_sf);--e_ow:var(--e_sw);\n--e_cd:var(--e_sd);--e_cf:var(--e_sf);--e_cw:var(--e_sw);\n--e_bd:var(--e_sd);--e_bf:var(--e_sf);--e_bw:var(--e_sw);\n--e_td:var(--e_bd);--e_tf:var(--e_bf);--e_tw:var(--e_bw);\n--e_b:var(--e_bd) var(--e_bf) var(--e_bw);\n--e_c:var(--e_cd) var(--e_cf) var(--e_cw);\n--e_rest:any;\ntransition:\n\tall var(--e_ad) var(--e_af) var(--e_aw),\n\topacity var(--e_od) var(--e_of) var(--e_ow),\n\ttransform var(--e_td) var(--e_tf) var(--e_tw),\n\tcolor var(--e_c),background-color var(--e_c),border-color var(--e_c),fill var(--e_c),stroke var(--e_c), outline-color var(--e_c), box-shadow var(--e_c), filter var(--e_c),\n\tinset var(--e_b), width var(--e_b),height var(--e_b),max-width var(--e_b),max-height var(--e_b),min-width var(--e_b),min-height var(--e_b),border-width var(--e_b),outline-width var(--e_b),stroke-width var(--e_b),margin var(--e_b),padding var(--e_b),\n\tvar(--e_rest);\n}\n\n.mnu25o-mi, .mnu25o-ml, .mnu25o_lu.circular .mnu25o_lu.inner, .mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.left {\n--t_x:0;--t_y:0;--t_rotate:0;\n--t_scale:1;--t_scale-x:1;--t_scale-y:1;\ntransform: translate(var(--t_x),var(--t_y)) rotate(var(--t_rotate))\n\tscaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\n}\n\n.mnu25o-af {display: flex;\nflex-direction: row;\n--e_rest: margin-left calc(var(--u_dur,1dur) * 2) !important;\nwidth: 100%;\nbackground: hsla(0.00,0.00%,100.00%,100%);}\n.mnu25o-af.\\@darkmode {background: hsla(0.00,0.00%,0.00%,100%);}\n.mnu25o-af.open {margin-left: 0px;}\n\n.mnu25o-ai:not(#_):not(#_) {grid-template-rows: calc(var(--u_topbar,1topbar) + calc(var(--u_sp,1sp) * 2)) auto 40px;}\n.mnu25o-ai > main:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);}\n.mnu25o-ai > main.\\@darkmode:not(#_):not(._0) {background: hsla(240.00,5.88%,10.00%,50%);}\n\n.mnu25o-ak:not(#_):not(#_):not(#_) {padding: var(--u_sp,1sp);}\n\n.mnu25o-au:not(#_):not(#_) {color: hsla(240.00,5.88%,10.00%,100%);\nheight: var(--u_bottombar,1bottombar);\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\nbackground: hsla(var(--hue3),1);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ngap: calc(var(--u_sp,1sp) * 0.2);\n--u_rg: calc(var(--u_sp,1sp) * 0.2);\n--u_cg: calc(var(--u_sp,1sp) * 0.2);}\n.mnu25o-au.\\@darkmode:not(#_):not(#_) {color: hsla(240.00,4.76%,95.88%,100%);\nbackground: hsla(var(--hue8),1);}\n\na.mnu25o_au:not(#_) {color: hsla(var(--hue7),1);}\na.mnu25o_au.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\napp-dashboard { display:block; }\n\n.mnu25o-ax {gap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nh1.mnu25o_ax:not(#_) {margin-top: var(--u_sp,1sp);\nfont-size: 24px;\nline-height: 36px;\n--u_lh: 36px;}\n\n.mnu25o_ax.button:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,5.26%,26.08%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\n.mnu25o_ax.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(240.00,5.88%,90.00%,100%);}\n\n.mnu25o-ay:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;\npadding-top: calc(var(--u_sp,1sp) * 5);\npadding-bottom: calc(var(--u_sp,1sp) * 5);\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);}\n@media (min-width: 1024px){\n.mnu25o-ay:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;}\n}\n\n.mnu25o-az:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;\npadding: calc(var(--u_sp,1sp) * 2);\ngap: calc(var(--u_sp,1sp) * 0.6);\n--u_rg: calc(var(--u_sp,1sp) * 0.6);\n--u_cg: calc(var(--u_sp,1sp) * 0.6);}\n@media (min-width: 1024px){\n.mnu25o-az:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;}\n}\n\n.mnu25o-ba:not(#_):not(#_):not(#_) {color: hsla(var(--hue5),1);\nfont-weight: bold;\nfont-size: 1.6em;}\n\n.mnu25o-bb:not(#_):not(#_):not(#_) {color: hsla(217.89,10.61%,64.90%,100%);\nfont-weight: thin;\nfont-size: 1.3em;}\n\n.mnu25o-bc:not(#_):not(#_):not(#_) {height: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o-bf:not(#_):not(#_):not(#_) {width: 450px;\nheight: 300px;}\n@media (min-width: 768px){\n.mnu25o-bf:not(#_):not(#_):not(#_) {width: 600px;\nheight: 400px;}\n}\n\nlanding-page { display:block; }\n\n.mnu25o-bg {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\na.mnu25o_bg:not(#_),button.mnu25o_bg:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\ncolor: hsla(240.00,5.26%,26.08%,100%);\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nalign-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-radius: 4px;}\na.mnu25o_bg.\\@darkmode:not(#_),button.mnu25o_bg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(240.00,5.88%,90.00%,100%);}\n\n.mnu25o-bi:not(#_):not(#_):not(#_) {width: 200px;\nmargin-right: auto;\ncursor: pointer;}\n\n.mnu25o-br:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;\nheight: auto;\ngap: calc(var(--u_sp,1sp) * 0.6);\n--u_rg: calc(var(--u_sp,1sp) * 0.6);\n--u_cg: calc(var(--u_sp,1sp) * 0.6);\nbackground: hsla(204.00,100.00%,97.06%,100%);}\n.mnu25o-br:is(:hover,.\\@hover):not(#_):not(#_):not(#_) {background: hsla(204.00,93.75%,93.73%,100%);}\n\n.mnu25o-bs:not(#_):not(#_):not(#_) {width: calc(var(--u_topbar,1topbar) * 0.5);\nheight: solid;}\n\ntop-navigation-mnu25o-bu { display:block; }\n\n.mnu25o-bv {padding: var(--u_sp,1sp);\nwidth: 100%;}\n\n.mnu25o_bv.page-wrapper:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;}\n\n.mnu25o_bx.wrapper:not(#_) {background: hsla(var(--hue3),1);\ncolor: hsla(var(--hue9),1);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;}\n.mnu25o_bx.wrapper.\\@darkmode:not(#_) {background: hsla(var(--hue9),1);\ncolor: hsla(var(--hue2),1);}\n\n.mnu25o-by:not(#_):not(#_):not(#_) {padding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);\ntext-align: center;\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;}\n\n.mnu25o-ca:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.mnu25o-cb:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.mnu25o-cc:not(#_):not(#_):not(#_) {margin: 0rem;}\n\n.mnu25o-cf:not(#_):not(#_):not(#_) {width: 200px;\nheight: 260px;}\n\napp-dictionary-page { display:block; }\n\n.mnu25o-cg {color: hsla(240.00,3.70%,15.88%,100%);\nwidth: 600px;\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);}\n.mnu25o-cg.\\@darkmode {color: hsla(240.00,5.88%,90.00%,100%);}\n\n.mnu25o_cg.row:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\ncursor: pointer;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\njustify-content: space-between;\norder: 2;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.4);\npadding-bottom: calc(var(--u_sp,1sp) * 0.4);\nborder-radius: 4px;}\n.mnu25o_cg.row.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n.mnu25o_cg.row:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue1),1);}\n.mnu25o_cg.row:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n.mnu25o_cg.row.learned:not(#_) {background: hsla(var(--hue3),50%);}\n.mnu25o_cg.row.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);}\n\n.mnu25o_cg.mono:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n\n.mnu25o_cg.err:not(#_) {color: hsla(0.00,90.60%,70.78%,100%);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\nbutton-wrapper.mnu25o_cg:not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;}\n\n.mnu25o_cg.play-audio:not(#_) {width: 2em;\ncursor: pointer;}\n\nsvg.mnu25o_cg:not(#_) {width: 24px;\nheight: 24px;}\nsvg.mnu25o_cg :is(path,path-tag).mnu25o_cg:not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(243.40,75.36%,58.63%,100%);}\n\n\n.mnu25o_cg.searchbar input.mnu25o_cg:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nbackground: hsla(240.00,5.88%,90.00%,100%);\nborder-radius: 4px;\nwidth: 100%;\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;\norder: 1;}\n.mnu25o_cg.searchbar input.mnu25o_cg.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o_cg.searchbar input.mnu25o_cg:is(:focus,.\\@focus):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}\n.mnu25o_cg.searchbar input.mnu25o_cg:is(:focus,.\\@focus).\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\n.mnu25o-ci:not(#_):not(#_):not(#_) {order: 0;}\n\n.mnu25o-cl:not(#_):not(#_):not(#_) {order: 0;}\n\napp-dictionary { display:block; }\n\n.mnu25o-cz:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;\npadding: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o-da:not(#_):not(#_):not(#_) {color: hsla(216.92,19.12%,26.67%,100%);\npadding: calc(var(--u_sp,1sp) * 2);\nbackground: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;}\n\n.mnu25o-df:not(#_):not(#_):not(#_) {display: block;\nbackground: hsla(212.73,26.83%,83.92%,100%);\ncolor: hsla(220.91,39.29%,10.98%,100%);\npadding: var(--u_sp,1sp);\nborder-radius: 4px;\nmargin-top: var(--u_sp,1sp);\nmargin-bottom: var(--u_sp,1sp);}\n\ninfo-page { display:block; }\n\n.mnu25o-dh {padding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\nposition: relative;}\n\n.mnu25o_dh.bg:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\nwidth: 100%;\nheight: 100vh;\ndisplay: block;\nposition: absolute;\nz-index: 0;}\n\n.mnu25o_dh.phonetics-layout:not(#_) {z-index: 10;\nmax-width: 800px;\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nphonetics-page { display:block; }\n\n.mnu25o_dm.chart-wrapper:not(#_) {padding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nalign-items: end;}\n\n.mnu25o_dm.row:not(#_) {display: flex;\nflex-direction: row;\njustify-content: space-between;}\n.mnu25o_dm.row.one:not(#_) {width: 200px;}\n.mnu25o_dm.row.two:not(#_) {width: 180px;}\n.mnu25o_dm.row.three:not(#_) {width: 160px;}\n.mnu25o_dm.row.four:not(#_) {width: 140px;}\n\nspan.mnu25o_dm:not(#_) {font-family: var(--font-monospace,monospace);\ntext-align: center;\ncursor: pointer;\nbackground: hsla(240.00,4.88%,83.92%,100%);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.6);\npadding-bottom: calc(var(--u_sp,1sp) * 0.6);\nborder-radius: 4px;\nwidth: 50px;}\nspan.mnu25o_dm.\\@darkmode:not(#_) {background: hsla(240.00,3.83%,46.08%,100%);}\nspan.mnu25o_dm:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue2),1);}\nspan.mnu25o_dm:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue7),1);}\n\nnav.mnu25o_dm:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nalign-items: center;\nplace-content: center;\nplace-items: center;}\nnav.mnu25o_dm button.mnu25o_dm:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.6);\npadding-right: calc(var(--u_sp,1sp) * 0.6);\nborder-radius: 4px;\ncursor: pointer;\ntext-align: center;\nbackground: hsla(240.00,5.03%,64.90%,100%);}\nnav.mnu25o_dm button.mnu25o_dm.\\@darkmode:not(#_) {background: hsla(240.00,5.20%,33.92%,100%);}\nnav.mnu25o_dm button.mnu25o_dm:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue4),1);}\nnav.mnu25o_dm button.mnu25o_dm:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue6),1);}\n\nphonetic-vowels-mnu25o-es { display:block; }\n\n.mnu25o-et {width: 100%;\npadding: var(--u_sp,1sp);}\n\n.mnu25o-ev:not(#_):not(#_) {grid-template-columns: repeat(2, 1fr);\ngrid-template-rows: repeat(1, 1fr);\nmax-width: 800px;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\ncourses-page-mnu25o-ex { display:block; }\n\n.mnu25o-fh {display: flex;\nflex-direction: row;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_fh.ln:not(#_),.mnu25o_fh.lc:not(#_),.mnu25o_fh.pn:not(#_),.mnu25o_fh.rb:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_fh.ln:not(#_) {width: var(--u_sidebar,1sidebar);\nflex-shrink: 0;}\n\n.mnu25o_fh.lc:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_fh.pn:not(#_) {width: calc(var(--u_sidebar,1sidebar) * 0.1);\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nflex-shrink: 0;}\n\n.mnu25o_fh.rb:not(#_) {width: calc(var(--u_sidebar,1sidebar) * 0.8);\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nflex-shrink: 0;}\n\nlearning-page-mnu25o-fi { display:block; }\n\n.mnu25o-fj {background: hsla(0.00,0.00%,100.00%,100%);\npadding: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\ngap: calc(var(--u_sp,1sp) * 2);\n--u_rg: calc(var(--u_sp,1sp) * 2);\n--u_cg: calc(var(--u_sp,1sp) * 2);\nwidth: 100%;\ncursor: pointer;}\n\n.mnu25o_fj.pill:not(#_) {border-radius: 9999px;\nflex-shrink: 1;\nwidth: fit-content;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nbackground: hsla(var(--hue1),1);\ncolor: hsla(var(--hue6),1);}\n.mnu25o_fj.pill.\\@darkmode:not(#_) {background: hsla(var(--hue8),50%);\ncolor: hsla(var(--hue4),1);}\n\n.mnu25o_fj.price:not(#_) {font-weight: bold;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: start;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nmargin-top: calc(var(--u_sp,1sp) * 2);\nmargin-bottom: calc(var(--u_sp,1sp) * 2);}\n\n.mnu25o_fj.num:not(#_) {font-size: 48px;\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--copy);}\n\n.mnu25o_fj.text:not(#_) {font-size: var(--u_xl,1xl);\nline-height: inherit;\n--u_lh: inherit;\nfont-family: var(--heading);\ncolor: hsla(0.00,0.00%,63.92%,100%);}\n\n.mnu25o_fj.button:not(#_) {border-radius: var(--u_rd,1rd);\ntext-align: center;\npadding: var(--u_sp,1sp);\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncolor: hsla(240.00,5.88%,10.00%,100%);\ncursor: pointer;}\n.mnu25o_fj.button.\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);\ncolor: hsla(0.00,0.00%,98.04%,100%);}\n.mnu25o_fj.button:is(:hover,.\\@hover):not(#_) {background: hsla(var(--hue5),1);}\n.mnu25o_fj.button:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(var(--hue5),1);}\n\n.mnu25o-fm:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: flex-end;\nalign-content: flex-end;\njustify-content: space-between;}\n\n.mnu25o-fn:not(#_):not(#_):not(#_) {font-size: 24px;\nline-height: 36px;\n--u_lh: 36px;\nfont-family: var(--font-sans-serif,sans-serif);\nfont-weight: bold;}\n\n.mnu25o-fo:not(#_):not(#_):not(#_) {align-self: end;}\n\n.mnu25o-fq:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(217.89,10.61%,64.90%,100%);}\n\n.mnu25o-fr:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\ncourse-card-mnu25o-fu { display:block; }\n\nright-bar { display:block; }\n\n.mnu25o_ga.image:not(#_) {border-radius: var(--u_rd,1rd);\naspect-ratio: 2 / 1;\nwidth: 100%;}\n\nlesson-content { display:block; }\n\nmeaning-card-mnu25o-gi { display:block; }\n\n.mnu25o_gj.phonetics:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\ndisplay: flex;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);\nflex-wrap: wrap;}\n\nphonetics-card-mnu25o-gt { display:block; }\n\n.mnu25o-gu {display: flex;\nflex-direction: row;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);\nflex-wrap: wrap;}\n\n.mnu25o_gu.word-wrapper:not(#_) {display: flex;\nflex-direction: row;\nflex-wrap: wrap;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.mnu25o_gu.word:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\nfont-size: 16px;\nline-height: 2em;\n--u_lh: 2em;\npadding-top: .4em;\nuser-select: none;\n-webkit-user-select: none;\ncursor: pointer;\npadding-left: calc(var(--u_sp,1sp) * 0.5);\npadding-right: calc(var(--u_sp,1sp) * 0.5);\nborder-radius: 4px;\n--e_rest: all var(--u_dur,1dur) !important;\nbackground: hsla(var(--hue0),50%);}\n.mnu25o_gu.word.khmer:not(#_) {font-family: var(--khmer);\nfont-size: 20px;\nline-height: 30px;\n--u_lh: 30px;}\n.mnu25o_gu.word.\\@darkmode:not(#_) {background: hsla(var(--hue5),20%);}\n.mnu25o_gu.word:is(:hover,.\\@hover):not(#_),.mnu25o_gu.word.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue1),1) inset;}\n.mnu25o_gu.word:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_gu.word.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}\n.mnu25o_gu.word.known:not(#_) {background: hsla(var(--hue1),1);}\n.mnu25o_gu.word.known.\\@darkmode:not(#_) {background: hsla(var(--hue5),50%);}\n.mnu25o_gu.word.known:is(:hover,.\\@hover):not(#_),.mnu25o_gu.word.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),1) inset;}\n.mnu25o_gu.word.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_gu.word.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}\n\n.mnu25o_gu.not_in_dict:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}\n.mnu25o_gu.not_in_dict.\\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,20%);}\n.mnu25o_gu.not_in_dict:is(:hover,.\\@hover):not(#_),.mnu25o_gu.not_in_dict.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(355.56,100.00%,94.71%,100%) inset;}\n.mnu25o_gu.not_in_dict:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_gu.not_in_dict.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}\n.mnu25o_gu.not_in_dict.known:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}\n.mnu25o_gu.not_in_dict.known.\\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,50%);}\n.mnu25o_gu.not_in_dict.known:is(:hover,.\\@hover):not(#_),.mnu25o_gu.not_in_dict.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,100%) inset;}\n.mnu25o_gu.not_in_dict.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_gu.not_in_dict.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}\n\n.mnu25o_gu.no_phonetics:not(#_) {background: hsla(48.00,96.49%,88.82%,100%);}\n.mnu25o_gu.no_phonetics.\\@darkmode:not(#_) {background: hsla(37.69,92.13%,50.20%,20%);}\n.mnu25o_gu.no_phonetics:is(:hover,.\\@hover):not(#_),.mnu25o_gu.no_phonetics.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.49%,88.82%,100%) inset;}\n.mnu25o_gu.no_phonetics:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_gu.no_phonetics.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.64%,76.67%,10%) inset;}\n.mnu25o_gu.no_phonetics.known:not(#_) {background: hsla(48.00,96.49%,88.82%,100%);}\n.mnu25o_gu.no_phonetics.known.\\@darkmode:not(#_) {background: hsla(37.69,92.13%,50.20%,50%);}\n.mnu25o_gu.no_phonetics.known:is(:hover,.\\@hover):not(#_),.mnu25o_gu.no_phonetics.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.64%,76.67%,100%) inset;}\n.mnu25o_gu.no_phonetics.known:is(:hover,.\\@hover).\\@darkmode:not(#_),.mnu25o_gu.no_phonetics.known.active.\\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.64%,76.67%,10%) inset;}\n\n.mnu25o-gy:not(#_):not(#_):not(#_) {align-self: end;}\n\n.mnu25o-gz:not(#_):not(#_):not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n\n.mnu25o-ha:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nflex-wrap: wrap;}\n\nword-nav-mnu25o-hc { display:block; }\n\n.mnu25o-hd {display: flex;\nflex-direction: column;\nalign-items: center;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nwidth: 100%;}\n\n.mnu25o_hd.khmer:not(#_) {line-height: 60px;\n--u_lh: 60px;\nmargin-top: 20px;\nfont-family: var(--khmer);\ncolor: hsla(var(--hue6),1);}\n\n.mnu25o_hd.phonetic:not(#_) {font-family: var(--font-monospace,monospace);\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(var(--hue5),1);}\n.mnu25o_hd.phonetic.\\@darkmode:not(#_) {color: hsla(var(--hue4),1);}\n\n.mnu25o_hd.switch-wrapper:not(#_) {height: 30px;\nwidth: 110px;\nborder-radius: 9999px;\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncursor: pointer;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}\n.mnu25o_hd.switch-wrapper.\\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}\n.mnu25o_hd.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}\n.mnu25o_hd.switch-wrapper.learned.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n\n.mnu25o_hd.switch:not(#_) {margin-left: 0px;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;\nheight: 30px;\nborder-radius: 9999px;\nborder-style: solid;\nborder-width: 3px;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-color: hsla(240.00,4.88%,83.92%,100%);\nbackground: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);\nwidth: 90px;}\n.mnu25o_hd.switch.\\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o_hd.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);\nbackground: hsla(var(--hue2),1);\ncolor: hsla(var(--hue8),1);\nmargin-left: 20px;}\n.mnu25o_hd.switch.learned.\\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);\nbackground: hsla(var(--hue5),1);\ncolor: hsla(var(--hue1),1);}\n\n.mnu25o_hd.resizeable:not(#_) {margin: 0rem;\npadding: 0rem;\nheight: 40px;\nwidth: 100px;\nbackground: hsla(var(--hue4),1);\noverflow: hidden;}\n\n.mnu25o_hd.phonetic-wrapper:not(#_) {cursor: pointer;}\n\n.mnu25o-hg:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;\ngap: calc(var(--u_sp,1sp) * 0.5);\n--u_rg: calc(var(--u_sp,1sp) * 0.5);\n--u_cg: calc(var(--u_sp,1sp) * 0.5);}\n\n.mnu25o-hh:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\n.mnu25o-hj:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\n.mnu25o-hk:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(240.00,3.83%,46.08%,100%);}\n\nword-card-mnu25o-hq { display:block; }\n\n.mnu25o-hr {height: 30px;\nwidth: 110px;\nborder-radius: 9999px;\nbackground: hsla(240.00,4.88%,83.92%,100%);\ncursor: pointer;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}\n.mnu25o-hr.\\@darkmode {background: hsla(0.00,0.00%,0.00%,60%);}\n.mnu25o-hr.active {background: hsla(var(--hue4),1);}\n.mnu25o-hr.active.\\@darkmode {background: hsla(var(--hue8),1);}\n\n.mnu25o_hr.switch:not(#_) {margin-left: 0px;\n--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;\nheight: 30px;\nborder-radius: 9999px;\nborder-style: solid;\nborder-width: 3px;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-color: hsla(240.00,4.88%,83.92%,100%);\nbackground: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);\nwidth: 90px;}\n.mnu25o_hr.switch.\\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);\nbackground: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o_hr.switch:is(.active > *):not(#_) {border-color: hsla(var(--hue4),1);\nbackground: hsla(var(--hue2),1);\ncolor: hsla(var(--hue8),1);\nmargin-left: 20px;}\n.mnu25o_hr.switch:is(.active > *).\\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);\nbackground: hsla(var(--hue5),1);\ncolor: hsla(var(--hue1),1);}\n\ntoggle-switch-mnu25o-hv { display:block; }\n\n.mnu25o-hy:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;\nalign-items: center;}\n\n.mnu25o-hz:not(#_):not(#_):not(#_) {width: 2em;\ncursor: pointer;}\n\n.mnu25o-ia:not(#_):not(#_):not(#_) {width: 24px;\nheight: 24px;}\n\n.mnu25o-ib:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(243.40,75.36%,58.63%,100%);}\n\n.mnu25o-ic:not(#_):not(#_):not(#_) {width: 2em;\ncursor: pointer;}\n\n.mnu25o-id:not(#_):not(#_):not(#_) {width: 24px;\nheight: 24px;}\n\n.mnu25o-ie:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);\nfill: hsla(228.00,96.49%,88.82%,100%);}\n\naudio-player-mnu25o-if { display:block; }\n\n.mnu25o-ii:not(#_):not(#_):not(#_) {list-style: decimal;\npadding-left: var(--u_sp,1sp);}\n\n.mnu25o-ij:not(#_):not(#_):not(#_) {color: hsla(216.00,12.20%,83.92%,100%);}\n\n.mnu25o-ik:not(#_):not(#_):not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;}\n\ndefinition-card-mnu25o-in { display:block; }\n\n.mnu25o_io.shortcut-wrapper:not(#_) {display: grid;\ngrid-template-columns: 1fr 1fr;\nalign-items: center;}\n\n.mnu25o_io.key-wrapper:not(#_) {display: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nalign-content: flex-start;\ngap: calc(var(--u_sp,1sp) * 0.4);\n--u_rg: calc(var(--u_sp,1sp) * 0.4);\n--u_cg: calc(var(--u_sp,1sp) * 0.4);\nwidth: 100px;}\n.mnu25o_io.key-wrapper.horizontal:not(#_) {display: flex;\nflex-direction: row;\njustify-content: flex-start;\nalign-items: stretch;\nalign-content: stretch;}\n\n.mnu25o_io.key-text:not(#_) {font-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\ncolor: hsla(0.00,0.00%,32.16%,100%);\nwrap: wrap;\nflex-shrink: 1;\nflex-grow: 0;}\n.mnu25o_io.key-text.\\@darkmode:not(#_) {color: hsla(0.00,0.00%,63.92%,100%);}\n\n.mnu25o_io.key:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);\npadding-right: calc(var(--u_sp,1sp) * 0.4);\nborder-radius: 4px;\nfont-size: .7em;\npadding-top: calc(var(--u_sp,1sp) * 0.2);\npadding-bottom: calc(var(--u_sp,1sp) * 0.2);\nline-height: var(--u_sp,1sp);\n--u_lh: var(--u_sp,1sp);\nborder: 1px solid hsla(0.00,0.00%,63.92%,100%);\ncolor: hsla(0.00,0.00%,45.10%,100%);\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n.mnu25o_io.key.\\@darkmode:not(#_) {border: 1px solid hsla(234.45,89.47%,73.92%,100%);\ncolor: hsla(234.45,89.47%,73.92%,100%);}\n\nshortcut-card-mnu25o-kj { display:block; }\n\n.mnu25o-kk {background: hsla(0.00,0.00%,100.00%,100%);\ndisplay: flex;\nflex-direction: column;}\n\n.mnu25o_kk.letter-row:not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;}\n\n.mnu25o_kk.letter:not(#_) {font-family: var(--khmer);\nfont-size: 30px;\nline-height: 46px;\n--u_lh: 46px;}\n.mnu25o_kk.letter.C1:not(#_),.mnu25o_kk.letter.L1:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}\n.mnu25o_kk.letter.C2:not(#_),.mnu25o_kk.letter.L2:not(#_) {color: hsla(349.72,89.16%,60.20%,100%);}\n.mnu25o_kk.letter.L2weak:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);}\n\n.mnu25o_kk.vida:not(#_) {text-align: right;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\nfont-size: 16px;\nline-height: 24px;\n--u_lh: 24px;\ncolor: hsla(240.00,5.03%,64.90%,100%);}\n.mnu25o_kk.vida.\\@darkmode:not(#_) {color: hsla(240.00,5.26%,26.08%,100%);}\n\nspelling-card-mnu25o-kt { display:block; }\n\n.mnu25o-ku {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mnu25o_ku.title-card:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\npadding: var(--u_sp,1sp);}\n.mnu25o_ku.title-card.\\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}\n\n.mnu25o_ku.icon-title:not(#_) {display: flex;\nflex-direction: row;}\n\n.mnu25o_ku.usage_word_count:not(#_) {font-size: 10px;\nline-height: 16px;\n--u_lh: 16px;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\ncolor: hsla(240.00,5.20%,33.92%,100%);}\n\nlesson-nav { display:block; }\n\n.mnu25o-kx {cursor: pointer;\nborder-radius: var(--u_rd,1rd);\nwidth: 100%;\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);\ncolor: hsla(240.00,3.83%,46.08%,100%);\nbackground: hsla(0.00,0.00%,100.00%,50%);}\n.mnu25o-kx.\\@darkmode {background: hsla(240.00,3.70%,15.88%,20%);}\n.mnu25o-kx:is(:hover,.\\@hover) {background: hsla(0.00,0.00%,100.00%,100%);}\n.mnu25o-kx:is(:hover,.\\@hover).\\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}\n.mnu25o-kx.active {background: hsla(var(--hue0),1);\nbox-shadow: var(--box-shadow-outline,0 0 0 3px hsla(var(--bxs-outline-color,207,73%,57%),var(--bxs-outline-alpha,0.5))) ;\n--bxs-outline-color: var(--hue2);\ncolor: hsla(var(--hue5),1);}\n.mnu25o-kx.active .mnu25o_kx.lesson-name:not(#_) {font-weight: bold;\ncolor: hsla(var(--hue7),1);}\n\n.mnu25o-ky:not(#_):not(#_):not(#_) {width: 100%;}\n\n.mnu25o-kz:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;\njustify-content: space-between;\nalign-items: start;}\n\n.mnu25o-lb:not(#_):not(#_):not(#_) {font-size: 10px;\nline-height: 16px;\n--u_lh: 16px;}\n\n.mnu25o-lc:not(#_):not(#_):not(#_) {opacity: 80%;\nfont-size: 12px;\nline-height: 18px;\n--u_lh: 18px;\nfont-family: var(--font-monospace,monospace);}\n\nlesson-nav-item { display:block; }\n\n.mnu25o-le {color: hsla(240.00,5.88%,10.00%,100%);\nwidth: var(--u_phrasebar,1phrasebar);\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ndisplay: flex;\nflex-direction: column;\nalign-items: center;}\n\n.mnu25o_le.number-toggle:not(#_) {border-radius: 9999px;\nwidth: 30px;\nheight: 30px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nbackground: hsla(240.00,4.76%,95.88%,100%);\ncolor: hsla(240.00,3.83%,46.08%,100%);\nposition: relative;\ncursor: pointer;}\n.mnu25o_le.number-toggle.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);\ncolor: hsla(240.00,5.03%,64.90%,100%);}\n.mnu25o_le.number-toggle:is(:hover,.\\@hover):not(#_) {background: hsla(240.00,4.88%,83.92%,100%);}\n.mnu25o_le.number-toggle:is(:hover,.\\@hover).\\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}\n\nphrase-nav { display:block; }\n\n.mnu25o-li {--brandcolor: #58a9e7;}\n\n.mnu25o-ll:not(#_):not(#_):not(#_) {fill: var(--brandcolor);}\n\ntelegram-icon-mnu25o-lm { display:block; }\n\n.mnu25o-ln {width: 100%;\n--bg: hsla(240.00,5.88%,90.00%,100%);\n--fg: hsla(var(--hue4),1);}\n.mnu25o-ln.\\@darkmode {--bg: hsla(240.00,3.70%,15.88%,100%);\n--fg: hsla(var(--hue6),1);}\n\n.mnu25o_ln.progress-bg:not(#_) {height: 10px;\nwidth: 100%;\nborder-radius: 9999px;\nposition: relative;\nz-index: 0;\noverflow: hidden;\ndisplay: flex;\nflex-direction: row;\nbackground: var(--bg);}\n\n.mnu25o_ln.progress-fg:not(#_) {height: 10px;\nz-index: 10;\nflex-basis: 0%;\n--e_rest: all var(--u_dur,1dur) ease-in-out !important;\nbackground: var(--fg);}\n\n.mnu25o-lq:not(#_):not(#_):not(#_) {flex-basis: var(--mnu25o_lr);}\n\nelem-progress-bar-mnu25o-ls { display:block; }\n\n.mnu25o-lt {display: inline;\nmargin-bottom: 4px;}\n\nsvg.mnu25o_lt:not(#_) {width: 20px;\nheight: 20px;\ndisplay: inline-block;\nstroke: hsla(var(--hue4),1);}\n\nicon-tag { display:block; }\n\n.mnu25o-lu {text-align: center;\n--progress-color: hsla(var(--hue2),1);\n--text-color: hsla(240.00,3.83%,46.08%,100%);\n--progress-bg: hsla(0.00,0.00%,98.04%,100%);\n--center-color: hsla(0.00,0.00%,98.04%,100%);\n--stroke-percent: 70%;\nposition: absolute;}\n.mnu25o-lu.\\@darkmode {--progress-color: hsla(var(--hue7),1);\n--text-color: hsla(240.00,5.03%,64.90%,100%);\n--progress-bg: hsla(240.00,3.70%,15.88%,100%);\n--center-color: hsla(240.00,3.70%,15.88%,100%);}\n.mnu25o-lu.active {--progress-color: hsla(var(--hue4),1);\n--progress-bg: hsla(var(--hue1),1);\n--center-color: hsla(var(--hue1),1);}\n.mnu25o-lu.active.\\@darkmode {--progress-color: hsla(var(--hue6),1);\n--progress-bg: hsla(var(--hue7),1);\n--center-color: hsla(var(--hue8),1);}\n.mnu25o-lu.active:is(:hover,.\\@hover) {--progress-color: hsla(var(--hue4),1);\n--progress-bg: hsla(var(--hue2),1);\n--center-color: hsla(var(--hue2),1);}\n.mnu25o-lu.active:is(:hover,.\\@hover).\\@darkmode {--progress-color: hsla(var(--hue5),1);\n--progress-bg: hsla(240.00,5.26%,26.08%,100%);\n--center-color: hsla(240.00,5.26%,26.08%,100%);}\n.mnu25o-lu:is(:hover,.\\@hover) {--progress-color: hsla(var(--hue3),1);\n--progress-bg: hsla(0.00,0.00%,100.00%,100%);\n--center-color: hsla(0.00,0.00%,100.00%,100%);}\n.mnu25o-lu:is(:hover,.\\@hover).\\@darkmode {--progress-color: hsla(var(--hue5),1);\n--progress-bg: hsla(240.00,5.26%,26.08%,100%);\n--center-color: hsla(240.00,5.26%,26.08%,100%);}\n\n.mnu25o-lu.disabled {opacity: 30%;}\n\n.mnu25o_lu.circular:not(#_) {width: var(--size);\nheight: var(--size);\nbackground: none;\nposition: relative;}\n.mnu25o_lu.circular .mnu25o_lu.inner:not(#_) {background: var(--center-color);\nposition: absolute;\nz-index: 6;\ntop: 50%;\nleft: 50%;\nwidth: var(--stroke-percent);\nheight: var(--stroke-percent);\n--t_y: -50% !important;\n--t_x: -50% !important;\nborder-radius: 9999px;\nplace-content: center;\nplace-items: center;}\n.mnu25o_lu.circular .mnu25o_lu.title:not(#_) {z-index: 10;\nfont-size: 18px;\ncolor: var(--text-color);\nmargin-top: 7%;}\n\n.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.bar:not(#_) {position: absolute;\nwidth: 100%;\nheight: 100%;\nbackground: var(--progress-bg);\nborder-radius: 100%;\n--e_rest: rotation var(--u_dur,1dur) ease-in-out !important;}\n.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.bar .mnu25o_lu.progress:not(#_) {background: var(--progress-color);\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nborder-radius: 100%;}\n.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.left:not(#_) {--t_rotate: -180deg !important;}\n.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.right:not(#_) {z-index: 3;}\n\n.mnu25o-lw:not(#_):not(#_):not(#_) {width: var(--mnu25o_lx);\nheight: var(--mnu25o_lx);}\n\n.mnu25o-ly:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: column;}\n\n.mnu25o-lz:not(#_):not(#_):not(#_) {font-size: 14px;\nline-height: 100%;\n--u_lh: 100%;}\n\n.mnu25o_mb.bar:not(#_) {clip: rect(0px, var(--mnu25o_mc), var(--mnu25o_md), var(--mnu25o_me));\n--e_rest: clip-path 1s !important;}\n\n.mnu25o_mb.progress:not(#_) {clip: rect(0px, var(--mnu25o_mf), var(--mnu25o_mg), 0px);\n--e_rest: clip-path 1s !important;}\n\n.mnu25o-mi:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_mj) !important;}\n\n.mnu25o-ml:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_mm) !important;}\n\nel-progress-ring { display:block; }");
/*
.mnu25o-af, .mnu25o-hr, .mnu25o_mb.bar, .mnu25o_gu.word, .mnu25o_hd.switch, .mnu25o_hr.switch, .mnu25o_mb.progress, .mnu25o_ln.progress-fg, .mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.bar {
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

.mnu25o-mi, .mnu25o-ml, .mnu25o_lu.circular .mnu25o_lu.inner, .mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.left {
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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
border-radius: 4px;}
a.mnu25o_bg.\@darkmode:not(#_),button.mnu25o_bg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(240.00,5.88%,90.00%,100%);}

.mnu25o-bi:not(#_):not(#_):not(#_) {width: 200px;
margin-right: auto;
cursor: pointer;}

.mnu25o-br:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
height: auto;
gap: calc(var(--u_sp,1sp) * 0.6);
--u_rg: calc(var(--u_sp,1sp) * 0.6);
--u_cg: calc(var(--u_sp,1sp) * 0.6);
background: hsla(204.00,100.00%,97.06%,100%);}
.mnu25o-br:is(:hover,.\@hover):not(#_):not(#_):not(#_) {background: hsla(204.00,93.75%,93.73%,100%);}

.mnu25o-bs:not(#_):not(#_):not(#_) {width: calc(var(--u_topbar,1topbar) * 0.5);
height: solid;}

top-navigation-mnu25o-bu { display:block; }

.mnu25o-bv {padding: var(--u_sp,1sp);
width: 100%;}

.mnu25o_bv.page-wrapper:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
max-width: 800px;
margin-left: auto;
margin-right: auto;}

.mnu25o_bx.wrapper:not(#_) {background: hsla(var(--hue3),1);
color: hsla(var(--hue9),1);
padding: var(--u_sp,1sp);
border-radius: 4px;}
.mnu25o_bx.wrapper.\@darkmode:not(#_) {background: hsla(var(--hue9),1);
color: hsla(var(--hue2),1);}

.mnu25o-by:not(#_):not(#_):not(#_) {padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);
text-align: center;
width: 100%;
display: flex;
flex-direction: column;}

.mnu25o-ca:not(#_):not(#_):not(#_) {margin: 0rem;}

.mnu25o-cb:not(#_):not(#_):not(#_) {margin: 0rem;}

.mnu25o-cc:not(#_):not(#_):not(#_) {margin: 0rem;}

.mnu25o-cf:not(#_):not(#_):not(#_) {width: 200px;
height: 260px;}

app-dictionary-page { display:block; }

.mnu25o-cg {color: hsla(240.00,3.70%,15.88%,100%);
width: 600px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);}
.mnu25o-cg.\@darkmode {color: hsla(240.00,5.88%,90.00%,100%);}

.mnu25o_cg.row:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
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
.mnu25o_cg.row.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}
.mnu25o_cg.row:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue1),1);}
.mnu25o_cg.row:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue8),1);}
.mnu25o_cg.row.learned:not(#_) {background: hsla(var(--hue3),50%);}
.mnu25o_cg.row.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);}

.mnu25o_cg.mono:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);}

.mnu25o_cg.err:not(#_) {color: hsla(0.00,90.60%,70.78%,100%);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

button-wrapper.mnu25o_cg:not(#_) {display: flex;
flex-direction: row;
align-items: center;}

.mnu25o_cg.play-audio:not(#_) {width: 2em;
cursor: pointer;}

svg.mnu25o_cg:not(#_) {width: 24px;
height: 24px;}
svg.mnu25o_cg :is(path,path-tag).mnu25o_cg:not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(243.40,75.36%,58.63%,100%);}


.mnu25o_cg.searchbar input.mnu25o_cg:not(#_) {display: flex;
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
.mnu25o_cg.searchbar input.mnu25o_cg.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o_cg.searchbar input.mnu25o_cg:is(:focus,.\@focus):not(#_) {background: hsla(240.00,5.88%,90.00%,100%);}
.mnu25o_cg.searchbar input.mnu25o_cg:is(:focus,.\@focus).\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

.mnu25o-ci:not(#_):not(#_):not(#_) {order: 0;}

.mnu25o-cl:not(#_):not(#_):not(#_) {order: 0;}

app-dictionary { display:block; }

.mnu25o-cz:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
padding: calc(var(--u_sp,1sp) * 2);}

.mnu25o-da:not(#_):not(#_):not(#_) {color: hsla(216.92,19.12%,26.67%,100%);
padding: calc(var(--u_sp,1sp) * 2);
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;}

.mnu25o-df:not(#_):not(#_):not(#_) {display: block;
background: hsla(212.73,26.83%,83.92%,100%);
color: hsla(220.91,39.29%,10.98%,100%);
padding: var(--u_sp,1sp);
border-radius: 4px;
margin-top: var(--u_sp,1sp);
margin-bottom: var(--u_sp,1sp);}

info-page { display:block; }

.mnu25o-dh {padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
position: relative;}

.mnu25o_dh.bg:not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
width: 100%;
height: 100vh;
display: block;
position: absolute;
z-index: 0;}

.mnu25o_dh.phonetics-layout:not(#_) {z-index: 10;
max-width: 800px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

phonetics-page { display:block; }

.mnu25o_dm.chart-wrapper:not(#_) {padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
align-items: end;}

.mnu25o_dm.row:not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;}
.mnu25o_dm.row.one:not(#_) {width: 200px;}
.mnu25o_dm.row.two:not(#_) {width: 180px;}
.mnu25o_dm.row.three:not(#_) {width: 160px;}
.mnu25o_dm.row.four:not(#_) {width: 140px;}

span.mnu25o_dm:not(#_) {font-family: var(--font-monospace,monospace);
text-align: center;
cursor: pointer;
background: hsla(240.00,4.88%,83.92%,100%);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.6);
padding-bottom: calc(var(--u_sp,1sp) * 0.6);
border-radius: 4px;
width: 50px;}
span.mnu25o_dm.\@darkmode:not(#_) {background: hsla(240.00,3.83%,46.08%,100%);}
span.mnu25o_dm:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue2),1);}
span.mnu25o_dm:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue7),1);}

nav.mnu25o_dm:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
align-items: center;
place-content: center;
place-items: center;}
nav.mnu25o_dm button.mnu25o_dm:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.6);
padding-right: calc(var(--u_sp,1sp) * 0.6);
border-radius: 4px;
cursor: pointer;
text-align: center;
background: hsla(240.00,5.03%,64.90%,100%);}
nav.mnu25o_dm button.mnu25o_dm.\@darkmode:not(#_) {background: hsla(240.00,5.20%,33.92%,100%);}
nav.mnu25o_dm button.mnu25o_dm:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue4),1);}
nav.mnu25o_dm button.mnu25o_dm:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue6),1);}

phonetic-vowels-mnu25o-es { display:block; }

.mnu25o-et {width: 100%;
padding: var(--u_sp,1sp);}

.mnu25o-ev:not(#_):not(#_) {grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(1, 1fr);
max-width: 800px;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

courses-page-mnu25o-ex { display:block; }

.mnu25o-fh {display: flex;
flex-direction: row;
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_fh.ln:not(#_),.mnu25o_fh.lc:not(#_),.mnu25o_fh.pn:not(#_),.mnu25o_fh.rb:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_fh.ln:not(#_) {width: var(--u_sidebar,1sidebar);
flex-shrink: 0;}

.mnu25o_fh.lc:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_fh.pn:not(#_) {width: calc(var(--u_sidebar,1sidebar) * 0.1);
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
flex-shrink: 0;}

.mnu25o_fh.rb:not(#_) {width: calc(var(--u_sidebar,1sidebar) * 0.8);
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
flex-shrink: 0;}

learning-page-mnu25o-fi { display:block; }

.mnu25o-fj {background: hsla(0.00,0.00%,100.00%,100%);
padding: var(--u_sp,1sp);
display: flex;
flex-direction: column;
gap: calc(var(--u_sp,1sp) * 2);
--u_rg: calc(var(--u_sp,1sp) * 2);
--u_cg: calc(var(--u_sp,1sp) * 2);
width: 100%;
cursor: pointer;}

.mnu25o_fj.pill:not(#_) {border-radius: 9999px;
flex-shrink: 1;
width: fit-content;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: calc(var(--u_sp,1sp) * 0.2);
padding-bottom: calc(var(--u_sp,1sp) * 0.2);
background: hsla(var(--hue1),1);
color: hsla(var(--hue6),1);}
.mnu25o_fj.pill.\@darkmode:not(#_) {background: hsla(var(--hue8),50%);
color: hsla(var(--hue4),1);}

.mnu25o_fj.price:not(#_) {font-weight: bold;
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
margin-top: calc(var(--u_sp,1sp) * 2);
margin-bottom: calc(var(--u_sp,1sp) * 2);}

.mnu25o_fj.num:not(#_) {font-size: 48px;
line-height: inherit;
--u_lh: inherit;
font-family: var(--copy);}

.mnu25o_fj.text:not(#_) {font-size: var(--u_xl,1xl);
line-height: inherit;
--u_lh: inherit;
font-family: var(--heading);
color: hsla(0.00,0.00%,63.92%,100%);}

.mnu25o_fj.button:not(#_) {border-radius: var(--u_rd,1rd);
text-align: center;
padding: var(--u_sp,1sp);
background: hsla(240.00,4.88%,83.92%,100%);
color: hsla(240.00,5.88%,10.00%,100%);
cursor: pointer;}
.mnu25o_fj.button.\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);
color: hsla(0.00,0.00%,98.04%,100%);}
.mnu25o_fj.button:is(:hover,.\@hover):not(#_) {background: hsla(var(--hue5),1);}
.mnu25o_fj.button:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(var(--hue5),1);}

.mnu25o-fm:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: flex-end;
align-content: flex-end;
justify-content: space-between;}

.mnu25o-fn:not(#_):not(#_):not(#_) {font-size: 24px;
line-height: 36px;
--u_lh: 36px;
font-family: var(--font-sans-serif,sans-serif);
font-weight: bold;}

.mnu25o-fo:not(#_):not(#_):not(#_) {align-self: end;}

.mnu25o-fq:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(217.89,10.61%,64.90%,100%);}

.mnu25o-fr:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

course-card-mnu25o-fu { display:block; }

right-bar { display:block; }

.mnu25o_ga.image:not(#_) {border-radius: var(--u_rd,1rd);
aspect-ratio: 2 / 1;
width: 100%;}

lesson-content { display:block; }

meaning-card-mnu25o-gi { display:block; }

.mnu25o_gj.phonetics:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
display: flex;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);
flex-wrap: wrap;}

phonetics-card-mnu25o-gt { display:block; }

.mnu25o-gu {display: flex;
flex-direction: row;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);
flex-wrap: wrap;}

.mnu25o_gu.word-wrapper:not(#_) {display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.mnu25o_gu.word:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
font-size: 16px;
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
.mnu25o_gu.word.khmer:not(#_) {font-family: var(--khmer);
font-size: 20px;
line-height: 30px;
--u_lh: 30px;}
.mnu25o_gu.word.\@darkmode:not(#_) {background: hsla(var(--hue5),20%);}
.mnu25o_gu.word:is(:hover,.\@hover):not(#_),.mnu25o_gu.word.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue1),1) inset;}
.mnu25o_gu.word:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_gu.word.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}
.mnu25o_gu.word.known:not(#_) {background: hsla(var(--hue1),1);}
.mnu25o_gu.word.known.\@darkmode:not(#_) {background: hsla(var(--hue5),50%);}
.mnu25o_gu.word.known:is(:hover,.\@hover):not(#_),.mnu25o_gu.word.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),1) inset;}
.mnu25o_gu.word.known:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_gu.word.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(var(--hue2),10%) inset;}

.mnu25o_gu.not_in_dict:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}
.mnu25o_gu.not_in_dict.\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,20%);}
.mnu25o_gu.not_in_dict:is(:hover,.\@hover):not(#_),.mnu25o_gu.not_in_dict.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(355.56,100.00%,94.71%,100%) inset;}
.mnu25o_gu.not_in_dict:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_gu.not_in_dict.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}
.mnu25o_gu.not_in_dict.known:not(#_) {background: hsla(355.56,100.00%,94.71%,100%);}
.mnu25o_gu.not_in_dict.known.\@darkmode:not(#_) {background: hsla(349.72,89.16%,60.20%,50%);}
.mnu25o_gu.not_in_dict.known:is(:hover,.\@hover):not(#_),.mnu25o_gu.not_in_dict.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,100%) inset;}
.mnu25o_gu.not_in_dict.known:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_gu.not_in_dict.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(352.65,96.08%,90.00%,10%) inset;}

.mnu25o_gu.no_phonetics:not(#_) {background: hsla(48.00,96.49%,88.82%,100%);}
.mnu25o_gu.no_phonetics.\@darkmode:not(#_) {background: hsla(37.69,92.13%,50.20%,20%);}
.mnu25o_gu.no_phonetics:is(:hover,.\@hover):not(#_),.mnu25o_gu.no_phonetics.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.49%,88.82%,100%) inset;}
.mnu25o_gu.no_phonetics:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_gu.no_phonetics.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.64%,76.67%,10%) inset;}
.mnu25o_gu.no_phonetics.known:not(#_) {background: hsla(48.00,96.49%,88.82%,100%);}
.mnu25o_gu.no_phonetics.known.\@darkmode:not(#_) {background: hsla(37.69,92.13%,50.20%,50%);}
.mnu25o_gu.no_phonetics.known:is(:hover,.\@hover):not(#_),.mnu25o_gu.no_phonetics.known.active:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.64%,76.67%,100%) inset;}
.mnu25o_gu.no_phonetics.known:is(:hover,.\@hover).\@darkmode:not(#_),.mnu25o_gu.no_phonetics.known.active.\@darkmode:not(#_) {box-shadow: 0px 0px 0px 4px hsla(48.00,96.64%,76.67%,10%) inset;}

.mnu25o-gy:not(#_):not(#_):not(#_) {align-self: end;}

.mnu25o-gz:not(#_):not(#_):not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);}

.mnu25o-ha:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
flex-wrap: wrap;}

word-nav-mnu25o-hc { display:block; }

.mnu25o-hd {display: flex;
flex-direction: column;
align-items: center;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
width: 100%;}

.mnu25o_hd.khmer:not(#_) {line-height: 60px;
--u_lh: 60px;
margin-top: 20px;
font-family: var(--khmer);
color: hsla(var(--hue6),1);}

.mnu25o_hd.phonetic:not(#_) {font-family: var(--font-monospace,monospace);
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(var(--hue5),1);}
.mnu25o_hd.phonetic.\@darkmode:not(#_) {color: hsla(var(--hue4),1);}

.mnu25o_hd.switch-wrapper:not(#_) {height: 30px;
width: 110px;
border-radius: 9999px;
background: hsla(240.00,4.88%,83.92%,100%);
cursor: pointer;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}
.mnu25o_hd.switch-wrapper.\@darkmode:not(#_) {background: hsla(0.00,0.00%,0.00%,60%);}
.mnu25o_hd.switch-wrapper.learned:not(#_) {background: hsla(var(--hue4),1);}
.mnu25o_hd.switch-wrapper.learned.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}

.mnu25o_hd.switch:not(#_) {margin-left: 0px;
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
.mnu25o_hd.switch.\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o_hd.switch.learned:not(#_) {border-color: hsla(var(--hue4),1);
background: hsla(var(--hue2),1);
color: hsla(var(--hue8),1);
margin-left: 20px;}
.mnu25o_hd.switch.learned.\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);
background: hsla(var(--hue5),1);
color: hsla(var(--hue1),1);}

.mnu25o_hd.resizeable:not(#_) {margin: 0rem;
padding: 0rem;
height: 40px;
width: 100px;
background: hsla(var(--hue4),1);
overflow: hidden;}

.mnu25o_hd.phonetic-wrapper:not(#_) {cursor: pointer;}

.mnu25o-hg:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;
gap: calc(var(--u_sp,1sp) * 0.5);
--u_rg: calc(var(--u_sp,1sp) * 0.5);
--u_cg: calc(var(--u_sp,1sp) * 0.5);}

.mnu25o-hh:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

.mnu25o-hj:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

.mnu25o-hk:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,3.83%,46.08%,100%);}

word-card-mnu25o-hq { display:block; }

.mnu25o-hr {height: 30px;
width: 110px;
border-radius: 9999px;
background: hsla(240.00,4.88%,83.92%,100%);
cursor: pointer;
--e_rest: all var(--u_dur,1dur) cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;}
.mnu25o-hr.\@darkmode {background: hsla(0.00,0.00%,0.00%,60%);}
.mnu25o-hr.active {background: hsla(var(--hue4),1);}
.mnu25o-hr.active.\@darkmode {background: hsla(var(--hue8),1);}

.mnu25o_hr.switch:not(#_) {margin-left: 0px;
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
.mnu25o_hr.switch.\@darkmode:not(#_) {border-color: hsla(240.00,3.70%,15.88%,100%);
background: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o_hr.switch:is(.active > *):not(#_) {border-color: hsla(var(--hue4),1);
background: hsla(var(--hue2),1);
color: hsla(var(--hue8),1);
margin-left: 20px;}
.mnu25o_hr.switch:is(.active > *).\@darkmode:not(#_) {border-color: hsla(var(--hue8),1);
background: hsla(var(--hue5),1);
color: hsla(var(--hue1),1);}

toggle-switch-mnu25o-hv { display:block; }

.mnu25o-hy:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;
align-items: center;}

.mnu25o-hz:not(#_):not(#_):not(#_) {width: 2em;
cursor: pointer;}

.mnu25o-ia:not(#_):not(#_):not(#_) {width: 24px;
height: 24px;}

.mnu25o-ib:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(243.40,75.36%,58.63%,100%);}

.mnu25o-ic:not(#_):not(#_):not(#_) {width: 2em;
cursor: pointer;}

.mnu25o-id:not(#_):not(#_):not(#_) {width: 24px;
height: 24px;}

.mnu25o-ie:not(#_):not(#_):not(#_) {stroke: hsla(243.40,75.36%,58.63%,100%);
fill: hsla(228.00,96.49%,88.82%,100%);}

audio-player-mnu25o-if { display:block; }

.mnu25o-ii:not(#_):not(#_):not(#_) {list-style: decimal;
padding-left: var(--u_sp,1sp);}

.mnu25o-ij:not(#_):not(#_):not(#_) {color: hsla(216.00,12.20%,83.92%,100%);}

.mnu25o-ik:not(#_):not(#_):not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;}

definition-card-mnu25o-in { display:block; }

.mnu25o_io.shortcut-wrapper:not(#_) {display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;}

.mnu25o_io.key-wrapper:not(#_) {display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
gap: calc(var(--u_sp,1sp) * 0.4);
--u_rg: calc(var(--u_sp,1sp) * 0.4);
--u_cg: calc(var(--u_sp,1sp) * 0.4);
width: 100px;}
.mnu25o_io.key-wrapper.horizontal:not(#_) {display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
align-content: stretch;}

.mnu25o_io.key-text:not(#_) {font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(0.00,0.00%,32.16%,100%);
wrap: wrap;
flex-shrink: 1;
flex-grow: 0;}
.mnu25o_io.key-text.\@darkmode:not(#_) {color: hsla(0.00,0.00%,63.92%,100%);}

.mnu25o_io.key:not(#_) {padding-left: calc(var(--u_sp,1sp) * 0.4);
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
.mnu25o_io.key.\@darkmode:not(#_) {border: 1px solid hsla(234.45,89.47%,73.92%,100%);
color: hsla(234.45,89.47%,73.92%,100%);}

shortcut-card-mnu25o-kj { display:block; }

.mnu25o-kk {background: hsla(0.00,0.00%,100.00%,100%);
display: flex;
flex-direction: column;}

.mnu25o_kk.letter-row:not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;}

.mnu25o_kk.letter:not(#_) {font-family: var(--khmer);
font-size: 30px;
line-height: 46px;
--u_lh: 46px;}
.mnu25o_kk.letter.C1:not(#_),.mnu25o_kk.letter.L1:not(#_) {color: hsla(234.45,89.47%,73.92%,100%);}
.mnu25o_kk.letter.C2:not(#_),.mnu25o_kk.letter.L2:not(#_) {color: hsla(349.72,89.16%,60.20%,100%);}
.mnu25o_kk.letter.L2weak:not(#_) {color: hsla(240.00,5.03%,64.90%,100%);}

.mnu25o_kk.vida:not(#_) {text-align: right;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
font-size: 16px;
line-height: 24px;
--u_lh: 24px;
color: hsla(240.00,5.03%,64.90%,100%);}
.mnu25o_kk.vida.\@darkmode:not(#_) {color: hsla(240.00,5.26%,26.08%,100%);}

spelling-card-mnu25o-kt { display:block; }

.mnu25o-ku {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mnu25o_ku.title-card:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
padding: var(--u_sp,1sp);}
.mnu25o_ku.title-card.\@darkmode:not(#_) {background: hsla(240.00,5.88%,10.00%,100%);}

.mnu25o_ku.icon-title:not(#_) {display: flex;
flex-direction: row;}

.mnu25o_ku.usage_word_count:not(#_) {font-size: 10px;
line-height: 16px;
--u_lh: 16px;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
color: hsla(240.00,5.20%,33.92%,100%);}

lesson-nav { display:block; }

.mnu25o-kx {cursor: pointer;
border-radius: var(--u_rd,1rd);
width: 100%;
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);
color: hsla(240.00,3.83%,46.08%,100%);
background: hsla(0.00,0.00%,100.00%,50%);}
.mnu25o-kx.\@darkmode {background: hsla(240.00,3.70%,15.88%,20%);}
.mnu25o-kx:is(:hover,.\@hover) {background: hsla(0.00,0.00%,100.00%,100%);}
.mnu25o-kx:is(:hover,.\@hover).\@darkmode {background: hsla(240.00,3.70%,15.88%,50%);}
.mnu25o-kx.active {background: hsla(var(--hue0),1);
box-shadow: var(--box-shadow-outline,0 0 0 3px hsla(var(--bxs-outline-color,207,73%,57%),var(--bxs-outline-alpha,0.5))) ;
--bxs-outline-color: var(--hue2);
color: hsla(var(--hue5),1);}
.mnu25o-kx.active .mnu25o_kx.lesson-name:not(#_) {font-weight: bold;
color: hsla(var(--hue7),1);}

.mnu25o-ky:not(#_):not(#_):not(#_) {width: 100%;}

.mnu25o-kz:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;}

.mnu25o-lb:not(#_):not(#_):not(#_) {font-size: 10px;
line-height: 16px;
--u_lh: 16px;}

.mnu25o-lc:not(#_):not(#_):not(#_) {opacity: 80%;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
font-family: var(--font-monospace,monospace);}

lesson-nav-item { display:block; }

.mnu25o-le {color: hsla(240.00,5.88%,10.00%,100%);
width: var(--u_phrasebar,1phrasebar);
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
display: flex;
flex-direction: column;
align-items: center;}

.mnu25o_le.number-toggle:not(#_) {border-radius: 9999px;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
background: hsla(240.00,4.76%,95.88%,100%);
color: hsla(240.00,3.83%,46.08%,100%);
position: relative;
cursor: pointer;}
.mnu25o_le.number-toggle.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);
color: hsla(240.00,5.03%,64.90%,100%);}
.mnu25o_le.number-toggle:is(:hover,.\@hover):not(#_) {background: hsla(240.00,4.88%,83.92%,100%);}
.mnu25o_le.number-toggle:is(:hover,.\@hover).\@darkmode:not(#_) {background: hsla(240.00,5.26%,26.08%,100%);}

phrase-nav { display:block; }

.mnu25o-li {--brandcolor: #58a9e7;}

.mnu25o-ll:not(#_):not(#_):not(#_) {fill: var(--brandcolor);}

telegram-icon-mnu25o-lm { display:block; }

.mnu25o-ln {width: 100%;
--bg: hsla(240.00,5.88%,90.00%,100%);
--fg: hsla(var(--hue4),1);}
.mnu25o-ln.\@darkmode {--bg: hsla(240.00,3.70%,15.88%,100%);
--fg: hsla(var(--hue6),1);}

.mnu25o_ln.progress-bg:not(#_) {height: 10px;
width: 100%;
border-radius: 9999px;
position: relative;
z-index: 0;
overflow: hidden;
display: flex;
flex-direction: row;
background: var(--bg);}

.mnu25o_ln.progress-fg:not(#_) {height: 10px;
z-index: 10;
flex-basis: 0%;
--e_rest: all var(--u_dur,1dur) ease-in-out !important;
background: var(--fg);}

.mnu25o-lq:not(#_):not(#_):not(#_) {flex-basis: var(--mnu25o_lr);}

elem-progress-bar-mnu25o-ls { display:block; }

.mnu25o-lt {display: inline;
margin-bottom: 4px;}

svg.mnu25o_lt:not(#_) {width: 20px;
height: 20px;
display: inline-block;
stroke: hsla(var(--hue4),1);}

icon-tag { display:block; }

.mnu25o-lu {text-align: center;
--progress-color: hsla(var(--hue2),1);
--text-color: hsla(240.00,3.83%,46.08%,100%);
--progress-bg: hsla(0.00,0.00%,98.04%,100%);
--center-color: hsla(0.00,0.00%,98.04%,100%);
--stroke-percent: 70%;
position: absolute;}
.mnu25o-lu.\@darkmode {--progress-color: hsla(var(--hue7),1);
--text-color: hsla(240.00,5.03%,64.90%,100%);
--progress-bg: hsla(240.00,3.70%,15.88%,100%);
--center-color: hsla(240.00,3.70%,15.88%,100%);}
.mnu25o-lu.active {--progress-color: hsla(var(--hue4),1);
--progress-bg: hsla(var(--hue1),1);
--center-color: hsla(var(--hue1),1);}
.mnu25o-lu.active.\@darkmode {--progress-color: hsla(var(--hue6),1);
--progress-bg: hsla(var(--hue7),1);
--center-color: hsla(var(--hue8),1);}
.mnu25o-lu.active:is(:hover,.\@hover) {--progress-color: hsla(var(--hue4),1);
--progress-bg: hsla(var(--hue2),1);
--center-color: hsla(var(--hue2),1);}
.mnu25o-lu.active:is(:hover,.\@hover).\@darkmode {--progress-color: hsla(var(--hue5),1);
--progress-bg: hsla(240.00,5.26%,26.08%,100%);
--center-color: hsla(240.00,5.26%,26.08%,100%);}
.mnu25o-lu:is(:hover,.\@hover) {--progress-color: hsla(var(--hue3),1);
--progress-bg: hsla(0.00,0.00%,100.00%,100%);
--center-color: hsla(0.00,0.00%,100.00%,100%);}
.mnu25o-lu:is(:hover,.\@hover).\@darkmode {--progress-color: hsla(var(--hue5),1);
--progress-bg: hsla(240.00,5.26%,26.08%,100%);
--center-color: hsla(240.00,5.26%,26.08%,100%);}

.mnu25o-lu.disabled {opacity: 30%;}

.mnu25o_lu.circular:not(#_) {width: var(--size);
height: var(--size);
background: none;
position: relative;}
.mnu25o_lu.circular .mnu25o_lu.inner:not(#_) {background: var(--center-color);
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
.mnu25o_lu.circular .mnu25o_lu.title:not(#_) {z-index: 10;
font-size: 18px;
color: var(--text-color);
margin-top: 7%;}

.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.bar:not(#_) {position: absolute;
width: 100%;
height: 100%;
background: var(--progress-bg);
border-radius: 100%;
--e_rest: rotation var(--u_dur,1dur) ease-in-out !important;}
.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.bar .mnu25o_lu.progress:not(#_) {background: var(--progress-color);
position: absolute;
width: 100%;
height: 100%;
border-radius: 100%;}
.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.left:not(#_) {--t_rotate: -180deg !important;}
.mnu25o_lu.circular .mnu25o_lu.circle .mnu25o_lu.right:not(#_) {z-index: 3;}

.mnu25o-lw:not(#_):not(#_):not(#_) {width: var(--mnu25o_lx);
height: var(--mnu25o_lx);}

.mnu25o-ly:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;}

.mnu25o-lz:not(#_):not(#_):not(#_) {font-size: 14px;
line-height: 100%;
--u_lh: 100%;}

.mnu25o_mb.bar:not(#_) {clip: rect(0px, var(--mnu25o_mc), var(--mnu25o_md), var(--mnu25o_me));
--e_rest: clip-path 1s !important;}

.mnu25o_mb.progress:not(#_) {clip: rect(0px, var(--mnu25o_mf), var(--mnu25o_mg), 0px);
--e_rest: clip-path 1s !important;}

.mnu25o-mi:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_mj) !important;}

.mnu25o-ml:not(#_):not(#_):not(#_) {--t_rotate: var(--mnu25o_mm) !important;}

el-progress-ring { display:block; }
*/
