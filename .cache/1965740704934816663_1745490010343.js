import {register$, iterable$} from 'imba/runtime';
import {styles as imba_styles, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, createElement as imba_createElement, createIndexedList as imba_createIndexedList} from 'imba';
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $placeChild$ = Symbol.for('#placeChild'), $afterVisit$ = Symbol.for('#afterVisit'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $7 = Symbol(), $8 = Symbol(), $18 = Symbol(), $19 = Symbol(), $23 = Symbol(), $24 = Symbol(), $33 = Symbol(), $34 = Symbol(), $36 = Symbol(), $37 = Symbol(), $41 = Symbol(), $42 = Symbol(), $51 = Symbol(), $52 = Symbol(), $54 = Symbol(), $55 = Symbol(), $59 = Symbol(), $60 = Symbol(), $69 = Symbol(), $70 = Symbol(), $72 = Symbol(), $73 = Symbol();

/*body*/
let consonantΞoptions = {
	"ក": "k",
	"ខ": "kh",
	"គ": "ḳ",
	"ឃ": "ḳh",
	"ង": "ṇg",
	"ង៉": "ng",
	"ច": "c",
	"ឆ": "ch",
	"ជ": "c̣",
	"ឈ": "c̣h",
	"ញ": "ṇh",
	"ញ៉": "nh",
	"ត": "t",
	"ឋ": "th",
	"ទ": "ṭ",
	"ឍ": "ṭh",
	"ណ": "n",
	"ដ": "d",
	"ថ": "dh",
	"ឌ": "d",
	"ធ": "dh",
	"ន": "n",
	"ប": "b",
	"ប៊": "b",
	"ប៉": "p",
	"ផ": "ph",
	"ព": "p̣",
	"ភ": "p̣",
	"ម": "ṃ",
	"ម៉": "ម",
	"យ": "ỵ",
	"យ៉": "y",
	"រ": "ṛ",
	"រ៉": "r",
	"ល": "ḷ",
	"វ៉": "ṿ",
	"ស": "s",
	"ស៊": "ṣ",
	"ហ": "h",
	"ហ៊": "ḥ",
	"ឡ": "l",
	"អ": "q",
	"អ៊": "q̣"
};
let vowelsΞ1 = [
	{kh: "ា",
	vida: "aa",
	length: "long",
	diph: false,
	group: 1},
	{kh: "ា",
	vida: "iạ",
	length: "long",
	diph: true,
	group: 2},
	{kh: "ិ",
	length: "short",
	diph: false,
	vida: "e",
	group: 1},
	{kh: "ិ",
	vida: "ụ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ី",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ី",
	length: "long",
	diph: false,
	group: 2},
	{kh: "ឹ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ឹ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ឺ",
	length: "long",
	diph: false,
	group: 1},
	{kh: "ឺ",
	length: "long",
	diph: false,
	group: 2},
	{kh: "ុ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ុ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ូ",
	length: "long",
	diph: false,
	group: 1},
	{kh: "ូ",
	length: "long",
	diph: false,
	group: 2},
	{kh: "ួ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ួ",
	length: "long",
	diph: true,
	group: 2},
	{kh: "ើ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ើ",
	length: "long",
	diph: true,
	group: 2},
	{kh: "ៀ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ៀ",
	length: "long",
	diph: true,
	group: 2},
	{kh: "ឿ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ឿ",
	length: "long",
	diph: true,
	group: 2},
	{kh: "េ",
	length: "long",
	diph: false,
	group: 1},
	{kh: "េ",
	length: "long",
	diph: false,
	group: 2},
	{kh: "ែ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ែ",
	length: "long",
	diph: false,
	group: 2},
	{kh: "ៃ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ៃ",
	length: "short",
	diph: true,
	group: 2},
	{kh: "ំ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "ំ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ះ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ះ",
	length: "short",
	diph: true,
	group: 2}
];
let vowelΞpairs = [
	{kh: "ុំ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ុំ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ាំ",
	length: "long",
	diph: false,
	group: 1},
	{kh: "ាំ",
	length: "long",
	diph: true,
	group: 2},
	{kh: "ិះ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ិះ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ុះ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ុះ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "េះ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "េះ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "ោះ",
	length: "short",
	diph: false,
	group: 1},
	{kh: "ោះ",
	length: "short",
	diph: false,
	group: 2}
];
let vowelΞexceptions = [
	{kh: "ាក់",
	length: "short",
	diph: true,
	group: 2},
	{kh: "ាត់",
	length: "short",
	diph: true,
	group: 2},
	{kh: "ាំង",
	length: "long",
	diph: false,
	group: 1},
	{kh: "ាំង",
	length: "long",
	diph: true,
	group: 2},
	{kh: "ូវ",
	length: "long",
	diph: true,
	group: 1},
	{kh: "នេះ",
	length: "short",
	diph: false,
	group: 2},
	{kh: "នោះ",
	length: "short",
	diph: false,
	group: 2}
];
let c$0 = Symbol();
class LettersVowelsComponent extends imba_Component {
	
	render(){
		var $1, $2, $3, $5 = this._ns_ || '', $6, $9, $10, $11, $14, $15, $16, $17, $21, $22, $25, $26, $27, $30, $31, $32, $35, $39, $40, $43, $44, $45, $48, $49, $50, $53, $57, $58, $61, $62, $63, $66, $67, $68, $71;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		((!$2||$3&2) && $1.flagSelf$('vowels card'));
		($6=$1[$7]) || ($1[$7]=$6=imba_createElement('div',$1,`consonant-options ${$5}`,null));
		($9 = $1[$8]) || ($1[$8]=$9=imba_createIndexedList(384,$6));
		$10 = 0;
		$11=$9.$;
		for (let $12 = 0, $13 = Object.keys(consonantΞoptions), $20 = $13.length, key, val; $12 < $20; $12++){
			key = $13[$12];val = consonantΞoptions[key];($15=$16=1,$14=$11[$10]) || ($15=$16=0,$11[$10]=$14=imba_createElement('span',$9,`${$5}`,null));
			$15||($14[$$up$]=$9);
			($17=key,($17===$14[$19]&&$15) || ($14[$18] = $14[$placeChild$]($14[$19]=$17,384,$14[$18])));
			$10++;
			
		};$9[$afterVisit$]($10);;
		;
		$2 || ($21=imba_createElement('h2',$1,`${$5}`,"Vowels"));
		;
		($22=$1[$23]) || ($1[$23]=$22=imba_createElement('div',$1,`letter-grid ${$5}`,null));
		($25 = $1[$24]) || ($1[$24]=$25=imba_createIndexedList(384,$22));
		$26 = 0;
		$27=$25.$;
		for (let $28 = 0, $29 = iterable$(vowelsΞ1), $38 = $29.length; $28 < $38; $28++) {
			let item = $29[$28];
			($31=$32=1,$30=$27[$26]) || ($31=$32=0,$27[$26]=$30=imba_createElement('div',$25,`letter ${$5}`,null));
			$31||($30[$$up$]=$25);
			($35=`group-${item.group}`,$35===$30[$34]||($32|=2,$30[$34]=$35));
			($32&2 && $30.flag$(`letter ${$5}`+' '+($30[$34]||'')));
			($35=item.kh,($35===$30[$37]&&$31) || ($30[$36] = $30[$placeChild$]($30[$37]=$35,384,$30[$36])));
			$26++;
			
		};$25[$afterVisit$]($26);;
		;
		$2 || ($39=imba_createElement('h2',$1,`${$5}`,"Vowel Pairs"));
		;
		($40=$1[$41]) || ($1[$41]=$40=imba_createElement('div',$1,`letter-grid ${$5}`,null));
		($43 = $1[$42]) || ($1[$42]=$43=imba_createIndexedList(384,$40));
		$44 = 0;
		$45=$43.$;
		for (let $46 = 0, $47 = iterable$(vowelΞpairs), $56 = $47.length; $46 < $56; $46++) {
			let item = $47[$46];
			($49=$50=1,$48=$45[$44]) || ($49=$50=0,$45[$44]=$48=imba_createElement('div',$43,`letter ${$5}`,null));
			$49||($48[$$up$]=$43);
			($53=`group-${item.group}`,$53===$48[$52]||($50|=2,$48[$52]=$53));
			($50&2 && $48.flag$(`letter ${$5}`+' '+($48[$52]||'')));
			($53=item.kh,($53===$48[$55]&&$49) || ($48[$54] = $48[$placeChild$]($48[$55]=$53,384,$48[$54])));
			$44++;
			
		};$43[$afterVisit$]($44);;
		;
		$2 || ($57=imba_createElement('h2',$1,`${$5}`,"Vowel Exceptions"));
		;
		($58=$1[$59]) || ($1[$59]=$58=imba_createElement('div',$1,`letter-grid ${$5}`,null));
		($61 = $1[$60]) || ($1[$60]=$61=imba_createIndexedList(384,$58));
		$62 = 0;
		$63=$61.$;
		for (let $64 = 0, $65 = iterable$(vowelΞexceptions), $74 = $65.length; $64 < $74; $64++) {
			let item = $65[$64];
			($67=$68=1,$66=$63[$62]) || ($67=$68=0,$63[$62]=$66=imba_createElement('div',$61,`letter ${$5}`,null));
			$67||($66[$$up$]=$61);
			($71=`group-${item.group}`,$71===$66[$70]||($68|=2,$66[$70]=$71));
			($68&2 && $66.flag$(`letter ${$5}`+' '+($66[$70]||'')));
			($71=item.kh,($71===$66[$73]&&$67) || ($66[$72] = $66[$placeChild$]($66[$73]=$71,384,$66[$72])));
			$62++;
			
		};$61[$afterVisit$]($62);;
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		register$(this,c$0,'letters-vowels',2);
		imba_defineTag('letters-vowels',this,{cssns: 'z14xo46e_af'});
	}
};

imba_styles.register('z14xo46e',".z14xo46e_af.letter-grid:not(#_) {display: grid;\ngrid-auto-flow: row;\ngrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.z14xo46e_af.letter:not(#_) {padding: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: calc(var(--u_sp,1sp) * 4);\nheight: calc(var(--u_sp,1sp) * 4);\ncursor: pointer;}\n.z14xo46e_af.letter:is(:hover,.\\@hover):not(#_) {opacity: 90%;}\n\n.z14xo46e_af.group-1:not(#_) {background: hsla(228.00,96.49%,88.82%,100%);}\n\n.z14xo46e_af.group-2:not(#_) {background: hsla(352.65,96.08%,90.00%,100%);}\n\n.z14xo46e_af.consonant-options:not(#_) {display: flex;\njustify-content: space-between;}\n\nletters-vowels { display:block; }");
/*
.z14xo46e_af.letter-grid:not(#_) {display: grid;
grid-auto-flow: row;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.z14xo46e_af.letter:not(#_) {padding: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);
display: flex;
align-items: center;
justify-content: center;
width: calc(var(--u_sp,1sp) * 4);
height: calc(var(--u_sp,1sp) * 4);
cursor: pointer;}
.z14xo46e_af.letter:is(:hover,.\@hover):not(#_) {opacity: 90%;}

.z14xo46e_af.group-1:not(#_) {background: hsla(228.00,96.49%,88.82%,100%);}

.z14xo46e_af.group-2:not(#_) {background: hsla(352.65,96.08%,90.00%,100%);}

.z14xo46e_af.consonant-options:not(#_) {display: flex;
justify-content: space-between;}

letters-vowels { display:block; }
*/
