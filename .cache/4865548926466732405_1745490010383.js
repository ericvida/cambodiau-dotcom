import {inited$, register$, __init__$, __hooks__$, decorate$} from 'imba/runtime';
import {αobservable as imba_αobservable, αautorun as imba_αautorun, use_dom_bind as imba_use_dom_bind, use_events as imba_use_events, use_events_mouse as imba_use_events_mouse, use_hooks as imba_use_hooks, hooks as imba_hooks, styles as imba_styles, locals as imba_locals, commit as imba_commit, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, createElement as imba_createElement, renderContext as imba_renderContext, getRenderContext as imba_getRenderContext, mount as imba_mount} from 'imba';
(imba_use_dom_bind(),imba_use_events(),imba_use_events_mouse(),imba_use_hooks());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit'), $placeChild$ = Symbol.for('#placeChild'), $appendChild$ = Symbol.for('#appendChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $8 = Symbol(), $10 = Symbol(), $15 = Symbol(), $18 = Symbol(), $21 = Symbol(), $25 = Symbol(), $28 = Symbol(), $31 = Symbol(), $34 = Symbol(), $38 = Symbol(), $41 = Symbol(), $44 = Symbol(), $45 = Symbol(), $46 = Symbol(), $50 = Symbol(), $52 = Symbol(), $53 = Symbol(), $54 = Symbol(), $56 = Symbol(), $58 = Symbol(), $61, $62 = imba_getRenderContext(), $63 = Symbol(), $64, $65;

/*body*/
const INSTANT_APP_ID = "YOUR_INSANTDB_PUBLIC_APP_ID_HERE";
const LOCAL_DB_NAME = "instantdb-imba-template";
// import {ClientIDB} from './lib/instantdb-imba/index.imba'
import 'imba/preflight.css';
import * as PH from 'imba-phosphor-icons';
import {init,tx,id} from '@instantdb/core';
import {images} from './images.imba';
globalThis.IMAGES = images;
import './dashboard.imba';
let c$0 = Symbol();
class dataSYNC {
	constructor(){
		this.local = imba_locals(LOCAL_DB_NAME);
		this.local.user;
		this.local.tasks;
		this.local.loginΦ;// null = waiting, yes, no
		this.local.sentCodeΦ;// yes, no
		this.local.error;
		this.local.loading;
		this.local.email_input;
		inited$(this,c$0);
	}
	static { register$(this,c$0,'dataSYNC',16) }
};

globalThis.DATA = new dataSYNC();
let c$1 = Symbol();
class InstantAPI {
	constructor(){
		DATA.instant = init({appId: INSTANT_APP_ID});;
		inited$(this,c$1);
	}
	subscribe(){
		return DATA.instant.subscribeAuth(function(auth) {
			// console.log('Auth state changed:', auth)
			let unsub;
			if (auth.error) {
				return console.log('Error during authentication');
			} else if (auth.user) {
				DATA.local.user = auth.user;
				DATA.local.loginΦ = true;
				imba_commit();
				if (DATA.local.user) {
					console.log(DATA.local.user.id);
					const query = {
						tasks: {
							$: {
								where: {
									"$users.id": DATA.local.user.id
								}
							}
						}
					};
					console.log('Executing query:',query);
					return unsub = DATA.instant.subscribeQuery(query,function(resp) {
						console.log('Query response:',resp);
						if (resp.error) {
							return console.error('Uh oh!',resp.error.message);
						} else if (resp.data) {
							if (resp.data.tasks) {
								DATA.local.tasks = resp.data.tasks || [];
								return imba_commit();
							} else {
								return console.warn('Unexpected response structure:',resp);
							};
						} else {
							return console.warn('Unexpected response:',resp);
						};
					});
				} else {
					return console.warn('User is not logged in. Skipping query.');
				};
			} else {
				DATA.local.loginΦ = true;
				DATA.local.user = false;
				return imba_commit();
			};
		});
	}
	async sendMagicCode(){
		if (!DATA.local.email_input) {
			console.error('Email is required to send a magic code.');
			return;
		};
		console.log(DATA.local.email_input,'clicked login');
		await DATA.instant.auth.sendMagicCode({email: DATA.local.email_input});
		DATA.local.sentCodeΦ = true;
		return imba_commit();
	}
	async logout(){
		console.log('clicked logout');
		await DATA.instant.auth.signOut();
		DATA.local.user = false;
		// FIXME -  after logout the email_input value is false, must be fixed.
		DATA.local.email_input = '';
		return imba_commit();
	}
	async loginWithCode(magic_code){
		if (!DATA.local.email_input || !magic_code) {
			console.error('Both email and code are required to sign in.');
			return;
		};
		await DATA.instant.auth.signInWithMagicCode({email: DATA.local.email_input,code: magic_code});
		DATA.local.email_input = false;
		return DATA.local.sentCodeΦ = false;
	}
	static { register$(this,c$1,'InstantAPI',16) }
};
globalThis.API = new InstantAPI();


let c$2 = Symbol();
class AppComponent extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.magic_code = ($$ && ($0 = $$.magic_code) !== undefined) ? ($0) : '';
		this.email_input = ($$ && ($0 = $$.email_input) !== undefined) ? ($0) : ((DATA.local.email_input !== '') ? 
			DATA.local.email_input
		 : 
			''
		);
		
	}
	persistEmailInput(){
		return DATA.local.email_input = this.email_input;
	}
	mount(){
		DATA.local.email_input;
		return API.subscribe();
	}
	render(){
		var self = this, $13, $14, $9, $1, $2, $3, $5 = this._ns_ || '', $6, $7, $11, $12, $16, $17, $19, $20, $22, $23, $24, $26, $27, $29, $30, $32, $33, $35, $36, $37, $39, $40, $42, $43, $47, $48, $49, $51, $55, $57, $59, $60;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		((!$2||$3&2) && $1.flagSelf$('z1tknw51-ag'));
		$2 || ($6=imba_createElement('h1',$1,`z1tknw51-ah ${$5}`,"cambodiau.com"));
		;
		($7=$1[$8]) || ($1[$8]=$7=imba_createElement('div',$1,`card ${$5}`,null));
		$9 = null;
		if (!DATA.local.user) {
			($11=$12=1,$9=$1[$10]) || ($11=$12=0,$1[$10]=$9=imba_createElement('div',null,`col ${$5}`,null));
			$11||($9[$$up$]=$7);
			$13 = $14 = null;
			if (INSTANT_APP_ID === 'REPLACE_WITH_YOUR_PUBLIC_APP_ID') {
				($16=$17=1,$13=$9[$15]) || ($16=$17=0,$9[$15]=$13=imba_createElement('p',null,`${$5}`,'Please set your InstantDB App ID on line 1 in src/index.imba'));
				$16||($13[$$up$]=$9);
				
			} else {
				if (DATA.local.sentCodeΦ) {
					($19=$20=1,$13=$9[$18]) || ($19=$20=0,$9[$18]=$13=imba_createElement('p',null,`${$5}`,"Check your email for the magic code."));
					$19||($13[$$up$]=$9);
					
					($22=$23=1,$14=$9[$21]) || ($22=$23=0,$9[$21]=$14=imba_createElement('div',null,`row ${$5}`,null));
					$22||($14[$$up$]=$9);
					($26=$27=1,$24=$14[$25]) || ($26=$27=0,$14[$25]=$24=imba_createElement('input',$14,`${$5}`,null));
					$26 || ($24.type="text");
					$29=$14[$28] || ($14[$28]=$24.bind$('data',[this,'magic_code']));
					$26 || ($24.placeholder="Enter magic code");
					$26 || !$24.setup || $24.setup($27);
					$24[$afterVisit$]($27);
					;
					$22 || ($30=imba_createElement('button',$14,`${$5}`,"Login"));
					$22 || ($30.on$(`click`,{$_: [function(e,$$) {
						return API.loginWithCode(self.magic_code);
					}]},this));
					;
				} else {
					($32=$33=1,$13=$9[$31]) || ($32=$33=0,$9[$31]=$13=imba_createElement('p',null,`${$5}`,"Please enter your email and click 'get code' to receive a magic code."));
					$32||($13[$$up$]=$9);
					
					($35=$36=1,$14=$9[$34]) || ($35=$36=0,$9[$34]=$14=imba_createElement('div',null,`row ${$5}`,null));
					$35||($14[$$up$]=$9);
					($39=$40=1,$37=$14[$38]) || ($39=$40=0,$14[$38]=$37=imba_createElement('input',$14,`z1tknw51-ar ${$5}`,null));
					$39 || ($37.type="text");
					$42=$14[$41] || ($14[$41]=$37.bind$('data',[this,'email_input']));
					$39 || ($37.placeholder="Enter your email");
					$39 || !$37.setup || $37.setup($40);
					$37[$afterVisit$]($40);
					;
					$35 || ($43=imba_createElement('button',$14,`z1tknw51-as ${$5}`,"get code"));
					$35 || ($43.on$(`click`,{$_: [function(e,$$) {
						return API.sendMagicCode();
					}]},this));
					;
				};
			};
			($9[$44] = $9[$placeChild$]($13,0,$9[$44]));
			($9[$45] = $9[$placeChild$]($14,0,$9[$45]));
		} else { // When user is logged in
			($47=$48=1,$9=$1[$46]) || ($47=$48=0,$1[$46]=$9=imba_createElement('div',null,`${$5}`,null));
			$47||($9[$$up$]=$7);
			($49=$9[$50]) || ($9[$50]=$49=imba_createElement('p',$9,`${$5}`,null));
			$47 || $49[$placeChild$]("Crush it ");
			(imba_renderContext.context=($9[$53] || ($9[$53]={_:$49})),$51=DATA.local.user.email.split('@').shift(),imba_renderContext.context=null,($51===$9[$54]&&$47) || ($9[$52] = $49[$placeChild$]($9[$54]=$51,0,$9[$52])));
			$47 || $49[$placeChild$]("!");
			;
			$47 || ($55=imba_createElement('button',$9,`${$5}`,"logout"));
			$47 || ($55.on$(`click`,{$_: [function(e,$$) {
				API.logout();return self.email_input = '';
			}]},this));
			;
		};
		($1[$56] = $7[$placeChild$]($9,0,$1[$56]));
		;
		($59=$60=1,$57=$1[$58]) || ($59=$60=0,$1[$58]=$57=imba_createComponent('app-dashboard',$1,`${$5}`,null));
		$59 || !$57.setup || $57.setup($60);
		$57[$afterVisit$]($60);
		$59 || $1[$appendChild$]($57);
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		this.prototype[__hooks__$] = imba_hooks;
		decorate$([imba_αobservable.bind([])],this.prototype,'email_input',null);
		decorate$([imba_αautorun.bind([])],this.prototype,'persistEmailInput',null);
		register$(this,c$2,'app',258);
		imba_defineTag('app',this,{cssid: 'z1tknw51-af'});
	}
};


imba_mount((($64=$65=1,$61=$62[$63]) || ($64=$65=0,$61=$62[$63]=$61=imba_createComponent('app',null,null,null)),
$64 || ($61[$$up$]=$62._),
$64 || $62.sym || !$61.setup || $61.setup($65),
$62.sym || $61[$afterVisit$]($65),
$61));

imba_styles.register('z1tknw51',":root {--icon-size: 28px;}\n:root div.row:not(._0) {display: flex;\ngap: 1em;\n--u_rg: 1em;\n--u_cg: 1em;}\n:root div.col:not(._0) {display: flex;\nflex-direction: column;\ngap: 1em;\n--u_rg: 1em;\n--u_cg: 1em;}\n:root input {color: hsla(240.00,5.88%,10.00%,100%);\npadding-left: 10px;\npadding-right: 10px;\nborder-radius: 5px;\nfont-size: 16px;\nflex-grow: 1;\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))), var(--box-shadow-inner,inset 0 2px 4px 0 hsla(var(--bxs-inner-color,0,0%,0%),var(--bxs-inner-alpha,0.06)));\npadding-top: 5px;\npadding-bottom: 5px;\nheight: var(--icon-size);}\n:root button {color: hsla(240.00,5.88%,10.00%,100%);\nbackground: hsla(240.00,4.76%,95.88%,100%);\nborder-radius: 5px;\nfont-size: 16px;\nheight: var(--icon-size);\npadding-left: 1em;\npadding-right: 1em;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;}\n:root button:is(:hover,.\\@hover):not(._0) {background: hsla(50.44,97.85%,63.53%,100%);}\n:root button.icon:not(._0) {padding: 0px;\nwidth: var(--icon-size);\nheight: var(--icon-size);}\n:root div.card:not(._0) {max-width: 600px;\nbackground: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 8px;\nbox-shadow: var(--box-shadow-lg,0 10px 15px -3px hsla(var(--bxs-lg-color,0,0%,0%), var(--bxs-lg-alpha,0.1)), 0 4px 6px -2px hsla(var(--bxs-lg-color,0,0%,0%),calc(var(--bxs-lg-alpha,0.1) * 0.5))), var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6)));\npadding: 2em;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\ntext-align: left;\ngap: 1em;\n--u_rg: 1em;\n--u_cg: 1em;}\n\n.z1tknw51-af {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;}\n\n.z1tknw51-ag:not(#_):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nalign-content: center;\ngap: 2em;\n--u_rg: 2em;\n--u_cg: 2em;}\n\n.z1tknw51-ah:not(#_):not(#_):not(#_) {font-size: xx-large;\nfont-family: var(--font-mono,Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);}\n\n.z1tknw51-ar:not(#_):not(#_):not(#_) {width: auto;}\n\n.z1tknw51-as:not(#_):not(#_):not(#_) {padding-left: 1em;\npadding-right: 1em;}\n\napp-tag { display:block; }");
/*
:root {--icon-size: 28px;}
:root div.row:not(._0) {display: flex;
gap: 1em;
--u_rg: 1em;
--u_cg: 1em;}
:root div.col:not(._0) {display: flex;
flex-direction: column;
gap: 1em;
--u_rg: 1em;
--u_cg: 1em;}
:root input {color: hsla(240.00,5.88%,10.00%,100%);
padding-left: 10px;
padding-right: 10px;
border-radius: 5px;
font-size: 16px;
flex-grow: 1;
box-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))), var(--box-shadow-inner,inset 0 2px 4px 0 hsla(var(--bxs-inner-color,0,0%,0%),var(--bxs-inner-alpha,0.06)));
padding-top: 5px;
padding-bottom: 5px;
height: var(--icon-size);}
:root button {color: hsla(240.00,5.88%,10.00%,100%);
background: hsla(240.00,4.76%,95.88%,100%);
border-radius: 5px;
font-size: 16px;
height: var(--icon-size);
padding-left: 1em;
padding-right: 1em;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;}
:root button:is(:hover,.\@hover):not(._0) {background: hsla(50.44,97.85%,63.53%,100%);}
:root button.icon:not(._0) {padding: 0px;
width: var(--icon-size);
height: var(--icon-size);}
:root div.card:not(._0) {max-width: 600px;
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 8px;
box-shadow: var(--box-shadow-lg,0 10px 15px -3px hsla(var(--bxs-lg-color,0,0%,0%), var(--bxs-lg-alpha,0.1)), 0 4px 6px -2px hsla(var(--bxs-lg-color,0,0%,0%),calc(var(--bxs-lg-alpha,0.1) * 0.5))), var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6)));
padding: 2em;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: left;
gap: 1em;
--u_rg: 1em;
--u_cg: 1em;}

.z1tknw51-af {display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;}

.z1tknw51-ag:not(#_):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
gap: 2em;
--u_rg: 2em;
--u_cg: 2em;}

.z1tknw51-ah:not(#_):not(#_):not(#_) {font-size: xx-large;
font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);}

.z1tknw51-ar:not(#_):not(#_):not(#_) {width: auto;}

.z1tknw51-as:not(#_):not(#_):not(#_) {padding-left: 1em;
padding-right: 1em;}

app-tag { display:block; }
*/
