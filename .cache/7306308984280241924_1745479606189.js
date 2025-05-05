function extendTag$__(el,cls){
	Object.defineProperties(el,Object.getOwnPropertyDescriptors(cls.prototype));
	return el;
};
import {register$} from 'imba/runtime';
import {styles as imba_styles, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, createElement as imba_createElement, use_router as imba_use_router, getSuperTagType as imba_getSuperTagType} from 'imba';
(imba_use_router());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $8 = Symbol(), $13 = Symbol(), $17 = Symbol(), $21 = Symbol(), $36 = Symbol(), $40 = Symbol(), $44 = Symbol();

/*body*/
let c$0 = Symbol();
class LettersChartComponent extends imba_Component {
	
	render(){
		var $1, $2, $3, $5 = this._ns_ || '', $6, $7, $9, $10, $11, $12, $14, $15, $16, $18, $19, $20, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		$2 || ($6=imba_createElement('div',$1,`nav-wrapper ${$5}`,null));
		($9=$10=1,$7=$1[$8]) || ($9=$10=0,$1[$8]=$7=imba_createComponent('letters-nav',$6,`${$5}`,null));
		$9 || !$7.setup || $7.setup($10);
		$7[$afterVisit$]($10);
		$9 || $6[$appendChild$]($7);
		;
		;
		$2 || ($11=imba_createElement('div',$1,`wrapper ${$5}`,null));
		($14=$15=1,$12=$1[$13]) || ($14=$15=0,$1[$13]=$12=imba_createElement('main',$11,`collection-grid ${$5}`,null));
		($18=$19=1,$16=$12[$17]) || ($18=$19=0,$12[$17]=$16=imba_createComponent('letters-consonants',$12,`${$5}`,null));
		$18 || ($16.route="consonants");
		$18 || !$16.setup || $16.setup($19);
		$16[$afterVisit$]($19);
		$18 || $12[$appendChild$]($16);
		;
		($22=$23=1,$20=$12[$21]) || ($22=$23=0,$12[$21]=$20=imba_createComponent('letters-vowels',$12,`${$5}`,null));
		$22 || ($20.route="vowels");
		$22 || !$20.setup || $20.setup($23);
		$20[$afterVisit$]($23);
		$22 || $12[$appendChild$]($20);
		;
		$14 || !$12.setup || $12.setup($15);
		$12[$afterVisit$]($15);
		;
		$2 || ($24=imba_createElement('div',$11,`rightbar ${$5}`,null));
		$2 || ($25=imba_createElement('div',$24,`card ${$5}`,null));
		$2 || ($26=imba_createElement('h2',$25,`${$5}`,"Active Letter"));
		;
		;
		$2 || ($27=imba_createElement('div',$24,`card ${$5}`,null));
		$2 || ($28=imba_createElement('h2',$27,`${$5}`,"phonetics"));
		;
		;
		$2 || ($29=imba_createElement('div',$24,`card ${$5}`,null));
		$2 || ($30=imba_createElement('h2',$29,`${$5}`,"Active Letters"));
		;
		;
		$2 || ($31=imba_createElement('div',$24,`card ${$5}`,null));
		$2 || ($32=imba_createElement('h2',$31,`${$5}`,"Active Letters"));
		;
		;
		;
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		register$(this,c$0,'letters-chart',2);
		imba_defineTag('letters-chart',this,{cssns: 'z1ypvtyj_af',cssid: 'z1ypvtyj-af'});
	}
};


let c$1 = Symbol();
class LettersNavComponent extends imba_getSuperTagType('nav','HTMLElement',imba_Component) {
	static create$(){
		return extendTag$__(globalThis.document.createElement('nav'),this);
	}
	render(){
		var $33, $34, $35, $37 = this._ns_ || '', $38, $39, $41, $42, $43, $45, $46, $47, $48, $49;
		$33=this;
		$33[$beforeReconcile$]();
		($34=$35=1,$33[$36] === 1) || ($34=$35=0,$33[$36]=1);
		$34 || ($38=imba_createElement('ul',$33,`${$37}`,null));
		($41=$42=1,$39=$33[$40]) || ($41=$42=0,$33[$40]=$39=imba_createElement('li',$38,`${$37}`,"consonants"));
		$41 || ($39.routeΞto="consonants");
		$41 || !$39.setup || $39.setup($42);
		$39[$afterVisit$]($42);
		;
		($45=$46=1,$43=$33[$44]) || ($45=$46=0,$33[$44]=$43=imba_createElement('li',$38,`${$37}`,"Vowels"));
		$45 || ($43.routeΞto="vowels");
		$45 || !$43.setup || $43.setup($46);
		$43[$afterVisit$]($46);
		;
		$34 || ($47=imba_createElement('li',$38,`${$37}`,"Independent Vowels"));
		;
		$34 || ($48=imba_createElement('li',$38,`${$37}`,"Pairings"));
		;
		$34 || ($49=imba_createElement('li',$38,`${$37}`,"Pairing Exceptions"));
		;
		;
		$33[$afterReconcile$]($35);
		return $33;
	}
	static {
		register$(this,c$1,'letters-nav',2);
		imba_defineTag('letters-nav',this,{extends: 'nav',cssns: 'z1ypvtyj_aw',cssid: 'z1ypvtyj-aw'});
	}
};

imba_styles.register('z1ypvtyj',".z1ypvtyj-af {display: flex;\nflex-direction: column;\nmin-height: calc(100vh - var(--u_topbar,1topbar));}\n\n.z1ypvtyj_af.nav-wrapper:not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\npadding: var(--u_sp,1sp);\nmin-width: 1000px;\nmax-width: 1000px;\nmargin-left: auto;\nmargin-right: auto;}\n\n.z1ypvtyj_af.wrapper:not(#_) {display: grid;\ngrid-auto-flow: column;\ngrid-auto-columns: 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\ngrid-template-columns: 3fr 1fr;\npadding: var(--u_sp,1sp);\nwidth: 1000px;\nmargin-left: auto;\nmargin-right: auto;}\n\n.z1ypvtyj_af.collection-grid:not(#_) {display: grid;\ngrid-template-columns: 1fr;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nwidth: 100%;}\n\n.z1ypvtyj_af.rightbar:not(#_) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nletters-chart { display:block; }\n\n.z1ypvtyj-aw {width: 100%;}\n\nul.z1ypvtyj_aw:not(#_) {display: flex;\njustify-content: space-between;\njustify-items: space-between;\nwidth: 100%;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nli.z1ypvtyj_aw:not(#_) {background: hsla(240.00,4.88%,83.92%,100%);\npadding-left: var(--u_sp,1sp);\npadding-right: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);}\n\nletters-nav { display:block; }");
/*
.z1ypvtyj-af {display: flex;
flex-direction: column;
min-height: calc(100vh - var(--u_topbar,1topbar));}

.z1ypvtyj_af.nav-wrapper:not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
padding: var(--u_sp,1sp);
min-width: 1000px;
max-width: 1000px;
margin-left: auto;
margin-right: auto;}

.z1ypvtyj_af.wrapper:not(#_) {display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
grid-template-columns: 3fr 1fr;
padding: var(--u_sp,1sp);
width: 1000px;
margin-left: auto;
margin-right: auto;}

.z1ypvtyj_af.collection-grid:not(#_) {display: grid;
grid-template-columns: 1fr;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
width: 100%;}

.z1ypvtyj_af.rightbar:not(#_) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

letters-chart { display:block; }

.z1ypvtyj-aw {width: 100%;}

ul.z1ypvtyj_aw:not(#_) {display: flex;
justify-content: space-between;
justify-items: space-between;
width: 100%;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

li.z1ypvtyj_aw:not(#_) {background: hsla(240.00,4.88%,83.92%,100%);
padding-left: var(--u_sp,1sp);
padding-right: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);}

letters-nav { display:block; }
*/
