import {inited$, register$, __init__$, __hooks__$, decorate$} from 'imba/runtime';
import {αobservable as imba_αobservable, αautorun as imba_αautorun, use_dom_bind as imba_use_dom_bind, use_events as imba_use_events, use_events_mouse as imba_use_events_mouse, use_hooks as imba_use_hooks, hooks as imba_hooks, styles as imba_styles, locals as imba_locals, commit as imba_commit, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, createElement as imba_createElement, getRenderContext as imba_getRenderContext, mount as imba_mount} from 'imba';
(imba_use_dom_bind(),imba_use_events(),imba_use_events_mouse(),imba_use_hooks());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $7 = Symbol(), $12 = Symbol(), $15 = Symbol(), $18 = Symbol(), $22 = Symbol(), $25 = Symbol(), $28 = Symbol(), $31 = Symbol(), $35 = Symbol(), $38 = Symbol(), $41 = Symbol(), $42 = Symbol(), $43 = Symbol(), $46 = Symbol(), $47, $48 = imba_getRenderContext(), $49 = Symbol(), $50, $51;

/*body*/
const INSTANT_APP_ID = "610003c4-b4d1-4b7f-84fb-47bbf3cf5e0c";
const LOCAL_DB_NAME = "instantdb-imba-template";
// import {ClientIDB} from './lib/instantdb-imba/index.imba'
import 'imba/preflight.css';
import * as PH from 'imba-phosphor-icons';
import {init,tx,id} from '@instantdb/core';
import {images} from './images.imba';
globalThis.IMAGES = images;
import './app-dashboard.imba';
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
			let unsub;
			if (auth.error) {
				return console.error('Error during authentication');
			} else if (auth.user) {
				DATA.local.user = auth.user;
				DATA.local.loginΦ = true;
				imba_commit();
				if (DATA.local.user) {
					const query = {
						tasks: {
							$: {
								where: {
									"$users.id": DATA.local.user.id
								}
							}
						}
					};
					return unsub = DATA.instant.subscribeQuery(query,function(resp) {
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
	
	async persistProgress(progress){
		let profileID = "26b9500e-dcaf-4867-bded-1edd4304c988";
		if (!!profileID) {
			return await DATA.instant.transact([
				tx.profile[profileID].update({
					progress: progress,
					createdAt: Date.now()
				}).link({$users: DATA.local.user.id})// link the task to the logged in user
			]);
		} else {
			return await DATA.instant.transact([
				tx.profile[id()].update({
					progress: progress
				})
			]);
		};
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
		var self = this, $10, $11, $5, $1, $2, $3, $6 = this._ns_ || '', $8, $9, $13, $14, $16, $17, $19, $20, $21, $23, $24, $26, $27, $29, $30, $32, $33, $34, $36, $37, $39, $40, $44, $45;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		((!$2||$3&2) && $1.flagSelf$('z12g9bze-ag'));
		$5 = null;
		if (!DATA.local.user) {
			($8=$9=1,$5=$1[$7]) || ($8=$9=0,$1[$7]=$5=imba_createElement('div',null,`col ${$6}`,null));
			$8||($5[$$up$]=$1);
			$10 = $11 = null;
			if (INSTANT_APP_ID === 'REPLACE_WITH_YOUR_PUBLIC_APP_ID') {
				($13=$14=1,$10=$5[$12]) || ($13=$14=0,$5[$12]=$10=imba_createElement('p',null,`${$6}`,'Please set your InstantDB App ID on line 1 in src/index.imba'));
				$13||($10[$$up$]=$5);
				
			} else {
				if (DATA.local.sentCodeΦ) {
					($16=$17=1,$10=$5[$15]) || ($16=$17=0,$5[$15]=$10=imba_createElement('p',null,`${$6}`,"Check your email for the magic code."));
					$16||($10[$$up$]=$5);
					
					($19=$20=1,$11=$5[$18]) || ($19=$20=0,$5[$18]=$11=imba_createElement('div',null,`row ${$6}`,null));
					$19||($11[$$up$]=$5);
					($23=$24=1,$21=$11[$22]) || ($23=$24=0,$11[$22]=$21=imba_createElement('input',$11,`${$6}`,null));
					$23 || ($21.type="text");
					$26=$11[$25] || ($11[$25]=$21.bind$('data',[this,'magic_code']));
					$23 || ($21.placeholder="Enter magic code");
					$23 || !$21.setup || $21.setup($24);
					$21[$afterVisit$]($24);
					;
					$19 || ($27=imba_createElement('button',$11,`${$6}`,"Login"));
					$19 || ($27.on$(`click`,{$_: [function(e,$$) {
						return API.loginWithCode(self.magic_code);
					}]},this));
					;
				} else {
					($29=$30=1,$10=$5[$28]) || ($29=$30=0,$5[$28]=$10=imba_createElement('p',null,`${$6}`,"Please enter your email and click 'get code' to receive a magic code."));
					$29||($10[$$up$]=$5);
					
					($32=$33=1,$11=$5[$31]) || ($32=$33=0,$5[$31]=$11=imba_createElement('div',null,`row ${$6}`,null));
					$32||($11[$$up$]=$5);
					($36=$37=1,$34=$11[$35]) || ($36=$37=0,$11[$35]=$34=imba_createElement('input',$11,`z12g9bze-ap ${$6}`,null));
					$36 || ($34.type="text");
					$39=$11[$38] || ($11[$38]=$34.bind$('data',[this,'email_input']));
					$36 || ($34.placeholder="Enter your email");
					$36 || !$34.setup || $34.setup($37);
					$34[$afterVisit$]($37);
					;
					$32 || ($40=imba_createElement('button',$11,`z12g9bze-aq ${$6}`,"get code"));
					$32 || ($40.on$(`click`,{$_: [function(e,$$) {
						return API.sendMagicCode();
					}]},this));
					;
				};
			};
			($5[$41] = $5[$placeChild$]($10,0,$5[$41]));
			($5[$42] = $5[$placeChild$]($11,0,$5[$42]));
		} else { // When user is logged in
			// <div>
						// 	<p> "Crush it {DATA.local.user.email.split('@').shift!}!"
						// 	<button @click=(API.logout!, email_input = '')> "logout"
			($44=$45=1,$5=$1[$43]) || ($44=$45=0,$1[$43]=$5=imba_createComponent('app-dashboard',null,`${$6}`,null));
			$44||($5[$$up$]=$1);
			$44 || !$5.setup || $5.setup($45);
			$5[$afterVisit$]($45);
			
		};
		($1[$46] = $1[$placeChild$]($5,0,$1[$46]));
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		this.prototype[__hooks__$] = imba_hooks;
		decorate$([imba_αobservable.bind([])],this.prototype,'email_input',null);
		decorate$([imba_αautorun.bind([])],this.prototype,'persistEmailInput',null);
		register$(this,c$2,'app',258);
		imba_defineTag('app',this,{cssid: 'z12g9bze-af'});
	}
};


imba_mount((($50=$51=1,$47=$48[$49]) || ($50=$51=0,$47=$48[$49]=$47=imba_createComponent('app',null,null,null)),
$50 || ($47[$$up$]=$48._),
$50 || $48.sym || !$47.setup || $47.setup($51),
$48.sym || $47[$afterVisit$]($51),
$47));

imba_styles.register('z12g9bze',":root {--icon-size: 28px;}\n:root div.row:not(._0) {display: flex;\ngap: 1em;\n--u_rg: 1em;\n--u_cg: 1em;}\n:root div.col:not(._0) {display: flex;\nflex-direction: column;\ngap: 1em;\n--u_rg: 1em;\n--u_cg: 1em;}\n:root input {color: hsla(240.00,5.88%,10.00%,100%);\npadding-left: 10px;\npadding-right: 10px;\nborder-radius: 5px;\nfont-size: 16px;\nflex-grow: 1;\nbox-shadow: var(--box-shadow-xs,0 1px 2px 0 hsla(var(--bxs-xs-color,0,0%,0%),var(--bxs-xs-alpha,0.05))), var(--box-shadow-inner,inset 0 2px 4px 0 hsla(var(--bxs-inner-color,0,0%,0%),var(--bxs-inner-alpha,0.06)));\npadding-top: 5px;\npadding-bottom: 5px;\nheight: var(--icon-size);}\n:root button {color: hsla(240.00,5.88%,10.00%,100%);\nbackground: hsla(240.00,4.76%,95.88%,100%);\nborder-radius: 5px;\nfont-size: 16px;\nheight: var(--icon-size);\npadding-left: 1em;\npadding-right: 1em;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nalign-content: center;}\n:root button:is(:hover,.\\@hover):not(._0) {background: hsla(50.44,97.85%,63.53%,100%);}\n:root button.icon:not(._0) {padding: 0px;\nwidth: var(--icon-size);\nheight: var(--icon-size);}\n:root div.card:not(._0) {max-width: 600px;\nbackground: hsla(0.00,0.00%,100.00%,100%);\nborder-radius: 8px;\nbox-shadow: var(--box-shadow-lg,0 10px 15px -3px hsla(var(--bxs-lg-color,0,0%,0%), var(--bxs-lg-alpha,0.1)), 0 4px 6px -2px hsla(var(--bxs-lg-color,0,0%,0%),calc(var(--bxs-lg-alpha,0.1) * 0.5))), var(--box-shadow-md,0 4px 6px -1px hsla(var(--bxs-md-color,0,0%,0%), var(--bxs-md-alpha,0.1)), 0 2px 4px -1px hsla(var(--bxs-md-color,0,0%,0%),calc(var(--bxs-md-alpha,0.1) * 0.6)));\npadding: 2em;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\ntext-align: left;\ngap: 1em;\n--u_rg: 1em;\n--u_cg: 1em;}\n\n.z12g9bze-af {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;}\n\n.z12g9bze-ag:not(#_):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\ndisplay: flex;\ngap: 2em;\n--u_rg: 2em;\n--u_cg: 2em;}\n\n.z12g9bze-ap:not(#_):not(#_):not(#_) {width: auto;}\n\n.z12g9bze-aq:not(#_):not(#_):not(#_) {padding-left: 1em;\npadding-right: 1em;}\n\napp-tag { display:block; }");
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

.z12g9bze-af {display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;}

.z12g9bze-ag:not(#_):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
display: flex;
gap: 2em;
--u_rg: 2em;
--u_cg: 2em;}

.z12g9bze-ap:not(#_):not(#_):not(#_) {width: auto;}

.z12g9bze-aq:not(#_):not(#_):not(#_) {padding-left: 1em;
padding-right: 1em;}

app-tag { display:block; }
*/
