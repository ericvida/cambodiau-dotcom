import {register$} from 'imba/runtime';
import {styles as imba_styles, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, createElement as imba_createElement, createLiveFragment as imba_createLiveFragment} from 'imba';
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $placeChild$ = Symbol.for('#placeChild'), $afterVisit$ = Symbol.for('#afterVisit'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $7 = Symbol(), $11 = Symbol(), $13 = Symbol(), $17 = Symbol(), $19 = Symbol(), $23 = Symbol(), $26 = Symbol(), $30 = Symbol(), $32 = Symbol(), $36 = Symbol(), $38 = Symbol(), $42 = Symbol(), $46 = Symbol(), $49 = Symbol(), $53 = Symbol(), $55 = Symbol(), $59 = Symbol(), $61 = Symbol(), $65 = Symbol(), $69 = Symbol(), $72 = Symbol(), $76 = Symbol(), $78 = Symbol(), $82 = Symbol(), $84 = Symbol(), $88 = Symbol(), $90 = Symbol(), $94 = Symbol(), $96 = Symbol(), $100 = Symbol(), $104 = Symbol(), $107 = Symbol();

/*body*/
import '../node_modules/imba/preflight.css';

// ui[epic=layout, seq=1] sidebar
let c$0 = Symbol();
class LayoutSidebarComponent extends imba_Component { // left sidebar of content
	
	render(){
		var $1, $2, $3, $5 = this._ns_ || '', $6, $8, $9, $10, $12, $14, $15, $16, $18;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		($8=$9=1,$6=$1[$7]) || ($8=$9=0,$1[$7]=$6=imba_createElement('section',$1,`left ${$5}`,null));
		$10=$1.__slots.left;
		($6[$11] = $6[$placeChild$]($10,384,$6[$11]));
		;
		$8 || !$6.setup || $6.setup($9);
		$6[$afterVisit$]($9);
		;
		($14=$15=1,$12=$1[$13]) || ($14=$15=0,$1[$13]=$12=imba_createElement('section',$1,`content ${$5}`,null));
		$16=$1.__slots['main-nav'];
		($12[$17] = $12[$placeChild$]($16,128,$12[$17]));
		;
		$18=$1.__slots.main;
		($12[$19] = $12[$placeChild$]($18,256,$12[$19]));
		;
		$14 || !$12.setup || $12.setup($15);
		$12[$afterVisit$]($15);
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		register$(this,c$0,'layout-sidebar',2);
		imba_defineTag('layout-sidebar',this,{cssns: 'z1ahoh3q_af',cssid: 'z1ahoh3q-af'});
	}
};
/* NOTE: How to use layout-sidebar
<layout-sidebar>
	css gtc: minmax(250px, 20%) 1fr # sidebar content
	<nav slot="left">
	<div> "content"
*/

let c$1 = Symbol();
class LayoutSidebarsComponent extends imba_Component {
	
	render(){
		var $20, $21, $22, $24 = this._ns_ || '', $25, $27, $28, $29, $31, $33, $34, $35, $37, $39, $40, $41;
		$20=this;
		$20[$beforeReconcile$]();
		($21=$22=1,$20[$23] === 1) || ($21=$22=0,$20[$23]=1);
		($27=$28=1,$25=$20[$26]) || ($27=$28=0,$20[$26]=$25=imba_createElement('section',$20,`left ${$24}`,null));
		$29=$20.__slots.left;
		($25[$30] = $25[$placeChild$]($29,384,$25[$30]));
		;
		$27 || !$25.setup || $25.setup($28);
		$25[$afterVisit$]($28);
		;
		($33=$34=1,$31=$20[$32]) || ($33=$34=0,$20[$32]=$31=imba_createElement('section',$20,`content ${$24}`,null));
		$35=$20.__slots.main;
		($31[$36] = $31[$placeChild$]($35,384,$31[$36]));
		;
		$33 || !$31.setup || $31.setup($34);
		$31[$afterVisit$]($34);
		;
		($39=$40=1,$37=$20[$38]) || ($39=$40=0,$20[$38]=$37=imba_createElement('section',$20,`right ${$24}`,null));
		$41=$20.__slots.right;
		($37[$42] = $37[$placeChild$]($41,384,$37[$42]));
		;
		$39 || !$37.setup || $37.setup($40);
		$37[$afterVisit$]($40);
		;
		$20[$afterReconcile$]($22);
		return $20;
	}
	static {
		register$(this,c$1,'layout-sidebars',2);
		imba_defineTag('layout-sidebars',this,{cssns: 'z1ahoh3q_am',cssid: 'z1ahoh3q-am'});
	}
};
/* NOTE: How to use layout-sidebars
<layout-sidebars>
	css gtc: minmax(250px, 20%) 1fr minmax(250px, 20%) # sidebar content sidebar
	<nav slot="left">
	<div> "content"
	<nav slot="right">
*/


let c$2 = Symbol();
class LayoutPancakesComponent extends imba_Component {
	
	
	render(){
		var $43, $44, $45, $47 = this._ns_ || '', $48, $50, $51, $52, $54, $56, $57, $58, $60, $62, $63, $64;
		$43=this;
		$43[$beforeReconcile$]();
		($44=$45=1,$43[$46] === 1) || ($44=$45=0,$43[$46]=1);
		($50=$51=1,$48=$43[$49]) || ($50=$51=0,$43[$49]=$48=imba_createElement('header',$43,`${$47}`,null));
		$52=$43.__slots.top;
		($48[$53] = $48[$placeChild$]($52,384,$48[$53]));
		;
		$50 || !$48.setup || $48.setup($51);
		$48[$afterVisit$]($51);
		;
		($56=$57=1,$54=$43[$55]) || ($56=$57=0,$43[$55]=$54=imba_createElement('main',$43,`${$47}`,null));
		$58=$43.__slots.middle;
		($54[$59] = $54[$placeChild$]($58,384,$54[$59]));
		;
		$56 || !$54.setup || $54.setup($57);
		$54[$afterVisit$]($57);
		;
		($62=$63=1,$60=$43[$61]) || ($62=$63=0,$43[$61]=$60=imba_createElement('footer',$43,`${$47}`,null));
		$64=$43.__slots.bottom;
		($60[$65] = $60[$placeChild$]($64,384,$60[$65]));
		;
		$62 || !$60.setup || $60.setup($63);
		$60[$afterVisit$]($63);
		;
		$43[$afterReconcile$]($45);
		return $43;
	}
	static {
		register$(this,c$2,'layout-pancakes',2);
		imba_defineTag('layout-pancakes',this,{cssns: 'z1ahoh3q_au',cssid: 'z1ahoh3q-au'});
	}
};
/* NOTE: How to use LayoutPancakes
<layout-pancakes>
	css gtr: 80px 1fr 80px # sidebar content sidebar
		>> * p:1sp # padding around immediate children
	<nav slot="top">
	<div slot="middle"> "content"
	<nav slot="bottom">
*/


let c$3 = Symbol();
class LayoutHolygrailComponent extends imba_Component {
	
	render(){
		var $66, $67, $68, $70 = this._ns_ || '', $71, $73, $74, $75, $77, $79, $80, $81, $83, $85, $86, $87, $89, $91, $92, $93, $95, $97, $98, $99;
		$66=this;
		$66[$beforeReconcile$]();
		($67=$68=1,$66[$69] === 1) || ($67=$68=0,$66[$69]=1);
		($73=$74=1,$71=$66[$72]) || ($73=$74=0,$66[$72]=$71=imba_createElement('header',$66,`header ${$70}`,null));
		$75=$66.__slots.header;
		($71[$76] = $71[$placeChild$]($75,384,$71[$76]));
		;
		$73 || !$71.setup || $71.setup($74);
		$71[$afterVisit$]($74);
		;
		($79=$80=1,$77=$66[$78]) || ($79=$80=0,$66[$78]=$77=imba_createElement('div',$66,`left ${$70}`,null));
		$81=$66.__slots.left;
		($77[$82] = $77[$placeChild$]($81,384,$77[$82]));
		;
		$79 || !$77.setup || $77.setup($80);
		$77[$afterVisit$]($80);
		;
		($85=$86=1,$83=$66[$84]) || ($85=$86=0,$66[$84]=$83=imba_createElement('main',$66,`main ${$70}`,null));
		$87=$66.__slots.__;
		($83[$88] = $83[$placeChild$]($87,384,$83[$88]));
		;
		$85 || !$83.setup || $83.setup($86);
		$83[$afterVisit$]($86);
		;
		($91=$92=1,$89=$66[$90]) || ($91=$92=0,$66[$90]=$89=imba_createElement('div',$66,`right ${$70}`,null));
		$93=$66.__slots.right;
		($89[$94] = $89[$placeChild$]($93,384,$89[$94]));
		;
		$91 || !$89.setup || $89.setup($92);
		$89[$afterVisit$]($92);
		;
		($97=$98=1,$95=$66[$96]) || ($97=$98=0,$66[$96]=$95=imba_createElement('footer',$66,`footer ${$70}`,null));
		$99=$66.__slots.footer;
		($95[$100] = $95[$placeChild$]($99,384,$95[$100]));
		;
		$97 || !$95.setup || $95.setup($98);
		$95[$afterVisit$]($98);
		;
		$66[$afterReconcile$]($68);
		return $66;
	}
	static {
		register$(this,c$3,'layout-holygrail',2);
		imba_defineTag('layout-holygrail',this,{cssns: 'z1ahoh3q_bc',cssid: 'z1ahoh3q-bc'});
	}
};

/* NOTE: How to use layout-holygrail
<layout-holygrail>
	css gtr: auto 1fr auto # header main footer
		gtc: minmax(200px, 20%) 1fr minmax(200px, 20%) # sidebar content sidebar
		>> * p:1sp # padding around immediate children
	<div slot="header"> "header"
	<div slot="left"> "Left Sidebar"
	<div> "Main content"
	<div slot="right"> "rightSidebar"
	<div slot="footer"> "footer"
*/

/* NOTE: How to use layout-card-grid
<layout-card-grid>
	css gtc: repeat(2,1fr) # column num, size
		gtr: repeat(1,1fr) # row num, size
		max-width: 800px
	<div.card>
	<div.card>
	<div.card>
*/

let c$4 = Symbol();
class LayoutCardFlexGridComponent extends imba_Component { // repeat-auto-max
	
	render(){
		var $101, $102, $103, $105 = this._ns_ || '', $106;
		$101=this;
		$101[$beforeReconcile$]();
		($102=$103=1,$101[$104] === 1) || ($102=$103=0,$101[$104]=1);
		$106=$101.__slots.__;
		($101[$107] = $101[$placeChild$]($106,384,$101[$107]));
		;
		$101[$afterReconcile$]($103);
		return $101;
	}
	static {
		register$(this,c$4,'layout-card-flex-grid',2);
		imba_defineTag('layout-card-flex-grid',this,{cssid: 'z1ahoh3q-bo'});
	}
};




imba_styles.register('z1ahoh3q',"\n:root {font-size: 16px;\nline-height: 24px;\n--u_lh: 24px;\nfont-weight: 400;\n--u_sp: 16px;\n--u_dur: .20s;\n--u_lessonbar: 300px;\n--u_topbar: 60px;\n--u_bottombar: 40px;\n--u_rightbar: 240px;\n--u_phrasebar: 60px;\n--u_rd: 6px;\n--heading: 'Merriweather', serif;\n--copy: 'Merriweather Sans', sans-serif;\n--khmer: 'Open Khmer School', serif;\n--hue: hsla(274.62,100.00%,25.49%,1);\n--hue0: 226,100%,97%;\n--hue1: 226,100%,94%;\n--hue2: 228,96%,89%;\n--hue3: 230,94%,82%;\n--hue4: 234,89%,74%;\n--hue5: 239,84%,67%;\n--hue6: 243,75%,59%;\n--hue7: 245,58%,51%;\n--hue8: 244,55%,41%;\n--hue9: 242,47%,34%;\nfont-family: var(--copy);}\nh1,h2,h3,h4,h5,h6 {font-family: var(--heading);\ncolor: hsla(240.00,5.26%,26.08%,100%);}\nh1.\\@darkmode:not(._0),h2.\\@darkmode:not(._0),h3.\\@darkmode:not(._0),h4.\\@darkmode:not(._0),h5.\\@darkmode:not(._0),h6.\\@darkmode:not(._0) {color: hsla(240.00,4.88%,83.92%,100%);}\n:is(app,app-tag) {overflow-x: hidden;\ncolor: hsla(240.00,5.88%,10.00%,100%);}\n:is(app,app-tag).\\@darkmode:not(._0) {color: hsla(0.00,0.00%,98.04%,100%);}\n.card:not(._0) {background: hsla(0.00,0.00%,100.00%,100%);\ndisplay: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);\nborder-radius: var(--u_rd,1rd);\npadding: var(--u_sp,1sp);\ncolor: hsla(240.00,5.88%,10.00%,100%);}\n.card.\\@darkmode:not(._0) {background: hsla(240.00,5.88%,10.00%,100%);\ncolor: hsla(240.00,4.76%,95.88%,100%);}\n.card h2:not(._0) {color: hsla(240.00,5.03%,64.90%,100%);\nfont-size: 18px;\nline-height: 28px;\n--u_lh: 28px;}\n.card h2.\\@darkmode:not(._0) {color: hsla(240.00,4.76%,95.88%,100%);}\na {cursor: pointer;}\na:is(:hover,.\\@hover):not(._0) {text-decoration: underline;}\n\n.z1ahoh3q-af {display: grid;\nheight: 100vh;\ngrid-template-columns: minmax(250px, 25%) 1fr;}\n\n.z1ahoh3q_af.left:not(#_) {background: hsla(210.00,40.00%,96.08%,100%);}\n\n.z1ahoh3q_af.content:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);}\n\nlayout-sidebar { display:block; }\n\n.z1ahoh3q-am {display: grid;\nmin-height: 100%;\nposition: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\ngrid-template-columns: minmax(250px, 20%) 1fr minmax(250px, 20%);}\n\n.z1ahoh3q_am.left:not(#_) {overflow-y: auto;\nborder-right: 1px solid hsla(0.00,0.00%,89.80%,100%);}\n\n.z1ahoh3q_am.content:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\noverflow-y: auto;\nheight: auto;}\n\n.z1ahoh3q_am.right:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\npadding: var(--u_sp,1sp);\npadding-left: 0rem;\nmin-height: 100%;\ndisplay: flex;\nflex-direction: column;\noverflow-y: auto;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n.z1ahoh3q_am.right > :first-child:not(#_):not(._0) {display: flex;\nflex-direction: column;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\n.z1ahoh3q-am .card:not(#_):not(._0) {padding: var(--u_sp,1sp);\nfont-size: 14px;\nline-height: 22px;\n--u_lh: 22px;\nbackground: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 4px;\nbox-shadow: 0px 0px 1px 1px hsla(0.00,0.00%,89.80%,100%) inset;}\n\n.z1ahoh3q-am h2:not(#_) {padding-bottom: calc(var(--u_sp,1sp) * 0.3);\ncolor: hsla(0.00,0.00%,83.14%,100%);}\n\n.z1ahoh3q-am h3:not(#_) {font-size: 0.9em;\ncolor: hsla(0.00,0.00%,63.92%,100%);}\n\n.z1ahoh3q-am .content-card:not(#_):not(._0) {font-family: \"Open Khmer School\";\nfont-size: 2em;\nborder-radius: 6px;}\n.z1ahoh3q-am .content-card .title-wrapper:not(#_):not(._0) {background: hsla(0.00,0.00%,96.08%,100%);\ntext-align: center;\nwidth: 100%;\npadding-top: 1em;\npadding-bottom: 0.6em;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nflex-wrap: wrap;}\n.z1ahoh3q-am .content-card img:not(#_):not(._0) {border-top-left-radius: 6px;\nborder-top-right-radius: 6px;\nwidth: 100%;}\n.z1ahoh3q-am .content-card .text-wrapper:not(#_):not(._0) {padding: var(--u_sp,1sp);\nwidth: 100%;\nborder: 2px solid hsla(0.00,0.00%,96.08%,100%);\nborder-top-style: solid;\nborder-top-width: 0;\nborder-bottom-left-radius: 6px;\nborder-bottom-right-radius: 6px;}\n.z1ahoh3q-am .content-card .khmer-word:not(#_):not(._0) {cursor: pointer;\ncolor: hsla(0.00,0.00%,14.90%,100%);\nheight: 3em;\npadding-top: var(--u_sp,1sp);\npadding-bottom: var(--u_sp,1sp);}\n.z1ahoh3q-am .content-card .khmer-word.title:not(#_):not(._0) {height: 3em;\nfont-size: xx-large;}\n.z1ahoh3q-am .content-card .khmer-word:is(:hover,.\\@hover):not(#_):not(._0) {background: hsla(0.00,0.00%,98.04%,100%);\ncolor: hsla(0.00,0.00%,9.02%,100%);}\n.z1ahoh3q-am .content-card .khmer-word:is(:active,.\\@active):not(#_):not(._0),.z1ahoh3q-am .content-card .khmer-word:is(:focus,.\\@focus):not(#_):not(._0) {background: hsla(0.00,0.00%,96.08%,100%);\ncolor: hsla(0.00,0.00%,9.02%,100%);}\n.z1ahoh3q-am .content-card .khmer-word.isKnown:not(#_):not(._0) {color: hsla(238.73,83.53%,66.67%,100%);}\n.z1ahoh3q-am .content-card .khmer-word.isActive:not(#_):not(._0) {background: hsla(226.45,100.00%,93.92%,50%);}\n.z1ahoh3q-am .content-card .khmer-word.isCurrent:not(#_):not(._0) {background: hsla(226.45,100.00%,93.92%,100%);}\n\nlayout-sidebars { display:block; }\n\n.z1ahoh3q-au {display: grid;\ngrid-template-rows: auto 1fr;\nmin-height: 100vh;\noverflow-y: hidden;\nwidth: 100%;}\n\nmain.z1ahoh3q_au:not(#_) {overflow-y: auto;\nposition: relative;}\n\nlayout-pancakes { display:block; }\n\n.z1ahoh3q-bc {display: grid;\nheight: 100vh;\ngrid-template-columns: 200px 1fr 200px;\ngrid-template-rows: auto 1fr auto;}\n.z1ahoh3q_bc.header:not(#_) {background: hsla(210.00,40.00%,96.08%,100%);\ngrid-column: 1 / 4;}\n.z1ahoh3q_bc.left:not(#_) {background: hsla(214.29,31.82%,91.37%,100%);\ngrid-column: 1 / 2;}\n.z1ahoh3q_bc.main:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);\ngrid-column: 2 / 3;}\n.z1ahoh3q_bc.right:not(#_) {background: hsla(214.29,31.82%,91.37%,100%);\ngrid-column: 3 / 4;}\n.z1ahoh3q_bc.footer:not(#_) {background: hsla(228.00,96.49%,88.82%,100%);\ngrid-column: 1 / 4;}\n\nlayout-holygrail { display:block; }\n\n\n:root {--u_cardmin: 300px;\n--u_cardmax: 600px;}\n.width-container:not(._0) {min-width: var(--u_cardmin,1cardmin);\nmax-width: 1200px;\nmargin-left: auto;\nmargin-right: auto;}\n@media (min-width: 640px){\n.width-container:not(._0) {min-width: calc(calc(var(--u_cardmin,1cardmin) * 2) + calc(var(--u_sp,1sp) * 2));}\n}\n@media (min-width: 1024px){\n.width-container:not(._0) {min-width: calc(calc(var(--u_cardmin,1cardmin) * 3) + calc(var(--u_sp,1sp) * 4));}\n}\n.layout-card-grid:not(._0) {width: 100%;\ndisplay: grid;\nmargin-left: auto;\nmargin-right: auto;\ngrid-template-columns: minmax(300px, calc(var(--u_cardmax,1cardmax) * 2));\nalign-items: center;}\n@media (min-width: 640px){\n.layout-card-grid:not(._0) {grid-template-columns: repeat(2, minmax(300px, calc(var(--u_cardmax,1cardmax) * 2)));}\n}\n@media (min-width: 1024px){\n.layout-card-grid:not(._0) {grid-template-columns: repeat(3, minmax(300px, 500px));}\n}\n.stretchy-card:not(._0) {min-width: 300px;\nmax-width: calc(var(--u_cardmax,1cardmax) * 2);\nwidth: 100%;\npadding: var(--u_sp,1sp);}\n\n.z1ahoh3q-bo {display: flex;\nflex-wrap: wrap;\njustify-content: start;\ngap: var(--u_sp,1sp);\n--u_rg: var(--u_sp,1sp);\n--u_cg: var(--u_sp,1sp);}\n\nlayout-card-flex-grid { display:block; }");
/*

:root {font-size: 16px;
line-height: 24px;
--u_lh: 24px;
font-weight: 400;
--u_sp: 16px;
--u_dur: .20s;
--u_lessonbar: 300px;
--u_topbar: 60px;
--u_bottombar: 40px;
--u_rightbar: 240px;
--u_phrasebar: 60px;
--u_rd: 6px;
--heading: 'Merriweather', serif;
--copy: 'Merriweather Sans', sans-serif;
--khmer: 'Open Khmer School', serif;
--hue: hsla(274.62,100.00%,25.49%,1);
--hue0: 226,100%,97%;
--hue1: 226,100%,94%;
--hue2: 228,96%,89%;
--hue3: 230,94%,82%;
--hue4: 234,89%,74%;
--hue5: 239,84%,67%;
--hue6: 243,75%,59%;
--hue7: 245,58%,51%;
--hue8: 244,55%,41%;
--hue9: 242,47%,34%;
font-family: var(--copy);}
h1,h2,h3,h4,h5,h6 {font-family: var(--heading);
color: hsla(240.00,5.26%,26.08%,100%);}
h1.\@darkmode:not(._0),h2.\@darkmode:not(._0),h3.\@darkmode:not(._0),h4.\@darkmode:not(._0),h5.\@darkmode:not(._0),h6.\@darkmode:not(._0) {color: hsla(240.00,4.88%,83.92%,100%);}
:is(app,app-tag) {overflow-x: hidden;
color: hsla(240.00,5.88%,10.00%,100%);}
:is(app,app-tag).\@darkmode:not(._0) {color: hsla(0.00,0.00%,98.04%,100%);}
.card:not(._0) {background: hsla(0.00,0.00%,100.00%,100%);
display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);
border-radius: var(--u_rd,1rd);
padding: var(--u_sp,1sp);
color: hsla(240.00,5.88%,10.00%,100%);}
.card.\@darkmode:not(._0) {background: hsla(240.00,5.88%,10.00%,100%);
color: hsla(240.00,4.76%,95.88%,100%);}
.card h2:not(._0) {color: hsla(240.00,5.03%,64.90%,100%);
font-size: 18px;
line-height: 28px;
--u_lh: 28px;}
.card h2.\@darkmode:not(._0) {color: hsla(240.00,4.76%,95.88%,100%);}
a {cursor: pointer;}
a:is(:hover,.\@hover):not(._0) {text-decoration: underline;}

.z1ahoh3q-af {display: grid;
height: 100vh;
grid-template-columns: minmax(250px, 25%) 1fr;}

.z1ahoh3q_af.left:not(#_) {background: hsla(210.00,40.00%,96.08%,100%);}

.z1ahoh3q_af.content:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);}

layout-sidebar { display:block; }

.z1ahoh3q-am {display: grid;
min-height: 100%;
position: absolute;
top: 0rem;
right: 0rem;
bottom: 0rem;
left: 0rem;
grid-template-columns: minmax(250px, 20%) 1fr minmax(250px, 20%);}

.z1ahoh3q_am.left:not(#_) {overflow-y: auto;
border-right: 1px solid hsla(0.00,0.00%,89.80%,100%);}

.z1ahoh3q_am.content:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
overflow-y: auto;
height: auto;}

.z1ahoh3q_am.right:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
padding: var(--u_sp,1sp);
padding-left: 0rem;
min-height: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}
.z1ahoh3q_am.right > :first-child:not(#_):not(._0) {display: flex;
flex-direction: column;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

.z1ahoh3q-am .card:not(#_):not(._0) {padding: var(--u_sp,1sp);
font-size: 14px;
line-height: 22px;
--u_lh: 22px;
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
box-shadow: 0px 0px 1px 1px hsla(0.00,0.00%,89.80%,100%) inset;}

.z1ahoh3q-am h2:not(#_) {padding-bottom: calc(var(--u_sp,1sp) * 0.3);
color: hsla(0.00,0.00%,83.14%,100%);}

.z1ahoh3q-am h3:not(#_) {font-size: 0.9em;
color: hsla(0.00,0.00%,63.92%,100%);}

.z1ahoh3q-am .content-card:not(#_):not(._0) {font-family: "Open Khmer School";
font-size: 2em;
border-radius: 6px;}
.z1ahoh3q-am .content-card .title-wrapper:not(#_):not(._0) {background: hsla(0.00,0.00%,96.08%,100%);
text-align: center;
width: 100%;
padding-top: 1em;
padding-bottom: 0.6em;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;}
.z1ahoh3q-am .content-card img:not(#_):not(._0) {border-top-left-radius: 6px;
border-top-right-radius: 6px;
width: 100%;}
.z1ahoh3q-am .content-card .text-wrapper:not(#_):not(._0) {padding: var(--u_sp,1sp);
width: 100%;
border: 2px solid hsla(0.00,0.00%,96.08%,100%);
border-top-style: solid;
border-top-width: 0;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;}
.z1ahoh3q-am .content-card .khmer-word:not(#_):not(._0) {cursor: pointer;
color: hsla(0.00,0.00%,14.90%,100%);
height: 3em;
padding-top: var(--u_sp,1sp);
padding-bottom: var(--u_sp,1sp);}
.z1ahoh3q-am .content-card .khmer-word.title:not(#_):not(._0) {height: 3em;
font-size: xx-large;}
.z1ahoh3q-am .content-card .khmer-word:is(:hover,.\@hover):not(#_):not(._0) {background: hsla(0.00,0.00%,98.04%,100%);
color: hsla(0.00,0.00%,9.02%,100%);}
.z1ahoh3q-am .content-card .khmer-word:is(:active,.\@active):not(#_):not(._0),.z1ahoh3q-am .content-card .khmer-word:is(:focus,.\@focus):not(#_):not(._0) {background: hsla(0.00,0.00%,96.08%,100%);
color: hsla(0.00,0.00%,9.02%,100%);}
.z1ahoh3q-am .content-card .khmer-word.isKnown:not(#_):not(._0) {color: hsla(238.73,83.53%,66.67%,100%);}
.z1ahoh3q-am .content-card .khmer-word.isActive:not(#_):not(._0) {background: hsla(226.45,100.00%,93.92%,50%);}
.z1ahoh3q-am .content-card .khmer-word.isCurrent:not(#_):not(._0) {background: hsla(226.45,100.00%,93.92%,100%);}

layout-sidebars { display:block; }

.z1ahoh3q-au {display: grid;
grid-template-rows: auto 1fr;
min-height: 100vh;
overflow-y: hidden;
width: 100%;}

main.z1ahoh3q_au:not(#_) {overflow-y: auto;
position: relative;}

layout-pancakes { display:block; }

.z1ahoh3q-bc {display: grid;
height: 100vh;
grid-template-columns: 200px 1fr 200px;
grid-template-rows: auto 1fr auto;}
.z1ahoh3q_bc.header:not(#_) {background: hsla(210.00,40.00%,96.08%,100%);
grid-column: 1 / 4;}
.z1ahoh3q_bc.left:not(#_) {background: hsla(214.29,31.82%,91.37%,100%);
grid-column: 1 / 2;}
.z1ahoh3q_bc.main:not(#_) {background: hsla(0.00,0.00%,100.00%,100%);
grid-column: 2 / 3;}
.z1ahoh3q_bc.right:not(#_) {background: hsla(214.29,31.82%,91.37%,100%);
grid-column: 3 / 4;}
.z1ahoh3q_bc.footer:not(#_) {background: hsla(228.00,96.49%,88.82%,100%);
grid-column: 1 / 4;}

layout-holygrail { display:block; }


:root {--u_cardmin: 300px;
--u_cardmax: 600px;}
.width-container:not(._0) {min-width: var(--u_cardmin,1cardmin);
max-width: 1200px;
margin-left: auto;
margin-right: auto;}
@media (min-width: 640px){
.width-container:not(._0) {min-width: calc(calc(var(--u_cardmin,1cardmin) * 2) + calc(var(--u_sp,1sp) * 2));}
}
@media (min-width: 1024px){
.width-container:not(._0) {min-width: calc(calc(var(--u_cardmin,1cardmin) * 3) + calc(var(--u_sp,1sp) * 4));}
}
.layout-card-grid:not(._0) {width: 100%;
display: grid;
margin-left: auto;
margin-right: auto;
grid-template-columns: minmax(300px, calc(var(--u_cardmax,1cardmax) * 2));
align-items: center;}
@media (min-width: 640px){
.layout-card-grid:not(._0) {grid-template-columns: repeat(2, minmax(300px, calc(var(--u_cardmax,1cardmax) * 2)));}
}
@media (min-width: 1024px){
.layout-card-grid:not(._0) {grid-template-columns: repeat(3, minmax(300px, 500px));}
}
.stretchy-card:not(._0) {min-width: 300px;
max-width: calc(var(--u_cardmax,1cardmax) * 2);
width: 100%;
padding: var(--u_sp,1sp);}

.z1ahoh3q-bo {display: flex;
flex-wrap: wrap;
justify-content: start;
gap: var(--u_sp,1sp);
--u_rg: var(--u_sp,1sp);
--u_cg: var(--u_sp,1sp);}

layout-card-flex-grid { display:block; }
*/
