import {register$, iterable$} from 'imba/runtime';
import {use_events as imba_use_events, use_events_mouse as imba_use_events_mouse, styles as imba_styles, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, createElement as imba_createElement, createKeyedList as imba_createKeyedList} from 'imba';
(imba_use_events(),imba_use_events_mouse());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $getRenderContext$ = Symbol.for('#getRenderContext'), $$up$ = Symbol.for('##up'), $placeChild$ = Symbol.for('#placeChild'), $afterVisit$ = Symbol.for('#afterVisit'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $10 = Symbol(), $13 = Symbol(), $14 = Symbol(), $17 = Symbol(), $20 = Symbol(), $21 = Symbol(), $24 = Symbol(), $25 = Symbol(), $33 = Symbol(), $38 = Symbol(), $41 = Symbol(), $42 = Symbol(), $45 = Symbol(), $47 = Symbol(), $48 = Symbol(), $51 = Symbol(), $54 = Symbol(), $55 = Symbol(), $58 = Symbol(), $60 = Symbol(), $61 = Symbol();

/*body*/
let chart_consonants = [
	{kh: "ក",
	sub: "្ក",
	group: 1},
	{kh: "ខ",
	sub: "្ខ",
	group: 1},
	{kh: "ង៉",
	sub: "",
	group: 3},
	{kh: "គ",
	sub: "្គ",
	group: 2},
	{kh: "ឃ",
	sub: "្ឃ",
	group: 2},
	{kh: "ង",
	sub: "្ង",
	group: 2},
	{kh: "ច",
	sub: "្ច",
	group: 1},
	{kh: "ឆ",
	sub: "្ឆ",
	group: 1},
	{kh: "ញ៉",
	sub: "",
	group: 3},
	{kh: "ជ",
	sub: "្ជ",
	group: 2},
	{kh: "ឈ",
	sub: "្ឈ",
	group: 2},
	{kh: "ញ",
	sub: "្ញ",
	group: 2},
	{kh: "ប៉",
	sub: "",
	group: 3},
	{kh: "ផ",
	sub: "្ឋ",
	group: 1},
	{kh: "ម៉",
	sub: "",
	group: 3},
	{kh: "ព",
	sub: "្ឌ",
	group: 2},
	{kh: "ភ",
	sub: "្ឍ",
	group: 2},
	{kh: "ម",
	sub: "្យ",
	group: 2},
	{kh: "ដ",
	sub: "្ដ",
	group: 1},
	{kh: "ឋ",
	sub: "្ឋ",
	group: 1},
	{kh: "យ៉",
	sub: "",
	group: 3},
	{kh: "ឌ",
	sub: "្ឌ",
	group: 2},
	{kh: "ឍ",
	sub: "្ឍ",
	group: 2},
	{kh: "យ",
	sub: "្យ",
	group: 2},
	{kh: "ត",
	sub: "្ត",
	group: 1},
	{kh: "ថ",
	sub: "្ថ",
	group: 1},
	{kh: "រ៉",
	sub: "",
	group: 3},
	{kh: "ទ",
	sub: "្ទ",
	group: 2},
	{kh: "ធ",
	sub: "្ធ",
	group: 2},
	{kh: "រ",
	sub: "្រ",
	group: 2},
	{kh: "ណ",
	sub: "្ណ",
	group: 1},
	{kh: "ឡ",
	sub: "្ឡ",
	group: 1},
	{kh: "វ៉",
	sub: "",
	group: 3},
	{kh: "ន",
	sub: "0្ន",
	group: 2},
	{kh: "ល",
	sub: "្ល",
	group: 2},
	{kh: "វ",
	sub: "្វ",
	group: 2},
	{kh: "ស",
	sub: "្ស",
	group: 1},
	{kh: "ហ",
	sub: "្ហ",
	group: 1},
	{kh: "ប",
	sub: "្ប",
	group: 1},
	{kh: "អ",
	sub: "្អ",
	group: 1},
	{kh: "",
	sub: "",
	group: 0},
	{kh: "",
	sub: "",
	group: 0},
	{kh: "ស៊",
	sub: "",
	group: 4},
	{kh: "ហ៊",
	sub: "",
	group: 4},
	{kh: "ប៊",
	sub: "",
	group: 4},
	{kh: "អ៊",
	sub: "",
	group: 4}
];

let c$0 = Symbol();
class LettersConsonantsComponent extends imba_Component {
	
	selectSubscript(){
		this.ui.chart_sub = true;
		return this.db.save();
	}
	selectOriginal(){
		this.ui.chart_sub = false;
		return this.db.save();
	}
	render(){
		var $1, $2, $3, $5 = this._ns_ || '', $6, $7, $8, $9, $11, $12, $15, $16, $18, $19, $22, $23, $26, $27, $28, $31, $34, $32, $35, $36, $39, $37, $40, $43, $44, $46, $49, $52, $50, $53, $56, $57, $59;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		((!$2||$3&2) && $1.flagSelf$('consonants card'));
		$2 || ($6=imba_createElement('header',$1,`mkqc7u-ah ${$5}`,null));
		$2 || ($7=imba_createElement('h2',$6,`${$5}`,"Consonants"));
		;
		$2 || ($8=imba_createElement('div',$6,`options ${$5}`,null));
		($11=$12=1,$9=$1[$10]) || ($11=$12=0,$1[$10]=$9=imba_createElement('button',$8,`option ${$5}`,"Original"));
		$11 || ($9.on$(`click`,{selectOriginal: true},this));
		($15=(!(this.ui.chart_sub)||undefined),$15===$1[$14]||($12|=2,$1[$14]=$15));
		($12&2 && $9.flag$(`option ${$5}`+' '+($1[$14] ? `active-button` : '')));
		;
		($18=$19=1,$16=$1[$17]) || ($18=$19=0,$1[$17]=$16=imba_createElement('button',$8,`option ${$5}`,"Subscript"));
		$18 || ($16.on$(`click`,{selectSubscript: true},this));
		($22=(this.ui.chart_sub||undefined),$22===$1[$21]||($19|=2,$1[$21]=$22));
		($19&2 && $16.flag$(`option ${$5}`+' '+($1[$21] ? `active-button` : '')));
		;
		;
		;
		($23=$1[$24]) || ($1[$24]=$23=imba_createElement('div',$1,`letter-grid ${$5}`,null));
		($26 = $1[$25]) || ($1[$25]=$26=imba_createKeyedList(1408,$23));
		$27 = 0;
		$28=$26.$;
		for (let $29 = 0, $30 = iterable$(chart_consonants), $62 = $30.length; $29 < $62; $29++) {
			let letter = $30[$29];
			if (letter.group === 0) {
				($34=$35=1,$31=($32=$28[$getRenderContext$]($33)).get($27)) || ($34=$35=0,$32.set($27,$31=imba_createElement('div',$26,`${$5}`,null)));
				$34||($31[$$up$]=$26);
				$26.push($31,$27++,$32);
				
			} else if (this.ui.chart_sub) {
				($39=$40=1,$36=($37=$28[$getRenderContext$]($38)).get($27)) || ($39=$40=0,$37.set($27,$36=imba_createElement('button',$26,`letter sub ${$5}`,null)));
				$39||($36[$$up$]=$26);
				($43=`group-${letter.group}`,$43===$36[$42]||($40|=2,$36[$42]=$43));
				($40&2 && $36.flag$(`letter sub ${$5}`+' '+($36[$42]||'')));
				($44=$36[$45]) || ($36[$45]=$44=imba_createElement('div',$36,`sub ${$5}`,null));
				($46=letter.sub,($46===$36[$48]&&$39) || ($36[$47] = $44[$placeChild$]($36[$48]=$46,384,$36[$47])));
				;
				$26.push($36,$27++,$37);
			} else {
				($52=$53=1,$49=($50=$28[$getRenderContext$]($51)).get($27)) || ($52=$53=0,$50.set($27,$49=imba_createElement('button',$26,`letter ${$5}`,null)));
				$52||($49[$$up$]=$26);
				($56=`group-${letter.group}`,$56===$49[$55]||($53|=2,$49[$55]=$56));
				($53&2 && $49.flag$(`letter ${$5}`+' '+($49[$55]||'')));
				($57=$49[$58]) || ($49[$58]=$57=imba_createElement('div',$49,`kh ${$5}`,null));
				($59=letter.kh,($59===$49[$61]&&$52) || ($49[$60] = $57[$placeChild$]($49[$61]=$59,384,$49[$60])));
				;
				$26.push($49,$27++,$50);
			};
		};$26[$afterVisit$]($27);;
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		register$(this,c$0,'letters-consonants',2);
		imba_defineTag('letters-consonants',this,{cssns: 'mkqc7u_af'});
	}
};

imba_styles.register('mkqc7u',"header.mkqc7u_af:not(#_) {display: flex;\nflex-direction: row;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\nheader.mkqc7u_af h2.mkqc7u_af:not(#_) {flex-grow: 1;}\nheader.mkqc7u_af .mkqc7u_af.options:not(#_) {display: flex;}\n\n.mkqc7u_af.option:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);}\n.mkqc7u_af.option.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n.mkqc7u_af.option:first-child:not(#_) {border-top-left-radius: var(--u_rd,1rd);\nborder-bottom-left-radius: var(--u_rd,1rd);}\n.mkqc7u_af.option:last-child:not(#_) {border-top-right-radius: var(--u_rd,1rd);\nborder-bottom-right-radius: var(--u_rd,1rd);}\n\nbutton.mkqc7u_af.active-button:not(#_) {background: hsla(var(--hue3),1);}\nbutton.mkqc7u_af.active-button.\\@darkmode:not(#_) {background: hsla(var(--hue8),1);}\n\n.mkqc7u_af.letter-grid:not(#_) {display: grid;\ngrid-auto-flow: row;\ngrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.mkqc7u_af.letter:not(#_) {padding: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: calc(var(--u_sp,1sp) * 4);\nheight: calc(var(--u_sp,1sp) * 4);\ncursor: pointer;}\n.mkqc7u_af.letter:is(:hover,.\\@hover):not(#_) {opacity: 90%;}\n\n.mkqc7u_af.kh:not(#_) {font-family: 'Open Khmer School';\nfont-size: 24px;\nline-height: 36px;\n--u_lh: 36px;}\n\n.mkqc7u_af.group-0:not(#_) {user-select: none;\n-webkit-user-select: none;}\n\n.mkqc7u_af.group-1:not(#_) {background: hsla(228.00,96.49%,88.82%,100%);\ncolor: hsla(242.17,47.43%,34.31%,100%);}\n.mkqc7u_af.group-1.\\@darkmode:not(#_) {background: hsla(242.17,47.43%,34.31%,100%);\ncolor: hsla(228.00,96.49%,88.82%,100%);}\n\n.mkqc7u_af.group-2:not(#_) {background: hsla(352.65,96.08%,90.00%,100%);}\n.mkqc7u_af.group-2.\\@darkmode:not(#_) {background: hsla(343.40,79.66%,34.71%,100%);}\n\n.mkqc7u_af.group-3:not(#_) {background: hsla(228.00,96.49%,88.82%,50%);\ncolor: hsla(242.17,47.43%,34.31%,100%);}\n.mkqc7u_af.group-3.\\@darkmode:not(#_) {background: hsla(242.17,47.43%,34.31%,50%);\ncolor: hsla(228.00,96.49%,88.82%,100%);}\n.mkqc7u_af.group-3.sub:not(#_) {border-style: none;\nbackground: hsla(240.00,5.88%,90.00%,100%);}\n.mkqc7u_af.group-3.sub.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n\n.mkqc7u_af.group-4:not(#_) {background: hsla(352.65,96.08%,90.00%,50%);}\n.mkqc7u_af.group-4.\\@darkmode:not(#_) {background: hsla(341.54,75.48%,30.39%,50%);}\n.mkqc7u_af.group-4.sub:not(#_) {border-style: none;\nbackground: hsla(240.00,5.88%,90.00%,100%);}\n.mkqc7u_af.group-4.sub.\\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}\n\n.mkqc7u-ah:not(#_):not(#_):not(#_) {display: flex;\nflex-direction: row;}\n\nletters-consonants { display:block; }");
/*
header.mkqc7u_af:not(#_) {display: flex;
flex-direction: row;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
header.mkqc7u_af h2.mkqc7u_af:not(#_) {flex-grow: 1;}
header.mkqc7u_af .mkqc7u_af.options:not(#_) {display: flex;}

.mkqc7u_af.option:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);}
.mkqc7u_af.option.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}
.mkqc7u_af.option:first-child:not(#_) {border-top-left-radius: var(--u_rd,1rd);
border-bottom-left-radius: var(--u_rd,1rd);}
.mkqc7u_af.option:last-child:not(#_) {border-top-right-radius: var(--u_rd,1rd);
border-bottom-right-radius: var(--u_rd,1rd);}

button.mkqc7u_af.active-button:not(#_) {background: hsla(var(--hue3),1);}
button.mkqc7u_af.active-button.\@darkmode:not(#_) {background: hsla(var(--hue8),1);}

.mkqc7u_af.letter-grid:not(#_) {display: grid;
grid-auto-flow: row;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.mkqc7u_af.letter:not(#_) {padding: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);
display: flex;
align-items: center;
justify-content: center;
width: calc(var(--u_sp,1sp) * 4);
height: calc(var(--u_sp,1sp) * 4);
cursor: pointer;}
.mkqc7u_af.letter:is(:hover,.\@hover):not(#_) {opacity: 90%;}

.mkqc7u_af.kh:not(#_) {font-family: 'Open Khmer School';
font-size: 24px;
line-height: 36px;
--u_lh: 36px;}

.mkqc7u_af.group-0:not(#_) {user-select: none;
-webkit-user-select: none;}

.mkqc7u_af.group-1:not(#_) {background: hsla(228.00,96.49%,88.82%,100%);
color: hsla(242.17,47.43%,34.31%,100%);}
.mkqc7u_af.group-1.\@darkmode:not(#_) {background: hsla(242.17,47.43%,34.31%,100%);
color: hsla(228.00,96.49%,88.82%,100%);}

.mkqc7u_af.group-2:not(#_) {background: hsla(352.65,96.08%,90.00%,100%);}
.mkqc7u_af.group-2.\@darkmode:not(#_) {background: hsla(343.40,79.66%,34.71%,100%);}

.mkqc7u_af.group-3:not(#_) {background: hsla(228.00,96.49%,88.82%,50%);
color: hsla(242.17,47.43%,34.31%,100%);}
.mkqc7u_af.group-3.\@darkmode:not(#_) {background: hsla(242.17,47.43%,34.31%,50%);
color: hsla(228.00,96.49%,88.82%,100%);}
.mkqc7u_af.group-3.sub:not(#_) {border-style: none;
background: hsla(240.00,5.88%,90.00%,100%);}
.mkqc7u_af.group-3.sub.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}

.mkqc7u_af.group-4:not(#_) {background: hsla(352.65,96.08%,90.00%,50%);}
.mkqc7u_af.group-4.\@darkmode:not(#_) {background: hsla(341.54,75.48%,30.39%,50%);}
.mkqc7u_af.group-4.sub:not(#_) {border-style: none;
background: hsla(240.00,5.88%,90.00%,100%);}
.mkqc7u_af.group-4.sub.\@darkmode:not(#_) {background: hsla(240.00,3.70%,15.88%,100%);}

.mkqc7u-ah:not(#_):not(#_):not(#_) {display: flex;
flex-direction: row;}

letters-consonants { display:block; }
*/
