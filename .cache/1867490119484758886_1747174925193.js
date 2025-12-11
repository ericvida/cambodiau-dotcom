import {__init__$, register$} from 'imba/runtime';
import {use_dom_bind as imba_use_dom_bind, use_events as imba_use_events, use_events_mouse as imba_use_events_mouse, styles as imba_styles, Component as imba_Component, defineTag as imba_defineTag, createComponent as imba_createComponent, use_slots as imba_use_slots, createElement as imba_createElement, getRenderContext as imba_getRenderContext, mount as imba_mount} from 'imba';
(imba_use_dom_bind(),imba_use_events(),imba_use_events_mouse(),imba_use_slots());
const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $getSlot$ = Symbol.for('#getSlot'), $afterVisit$ = Symbol.for('#afterVisit'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $6 = Symbol(), $10 = Symbol(), $15 = Symbol(), $18 = Symbol(), $21 = Symbol(), $25 = Symbol(), $28 = Symbol(), $31 = Symbol(), $34 = Symbol(), $38 = Symbol(), $41 = Symbol(), $44 = Symbol(), $45 = Symbol(), $46 = Symbol(), $47, $48 = imba_getRenderContext(), $49 = Symbol(), $50, $51;

/*body*/
import './global.imba';
// import './app-dashboard.imba'
let c$0 = Symbol();
class App extends imba_Component {
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		super[__init__$](...arguments);
		this.magic_code = ($$ && ($0 = $$.magic_code) !== undefined) ? ($0) : '';
		this.email_input = ($$ && ($0 = $$.email_input) !== undefined) ? ($0) : '';
		
	}
	mount(){
		// CLOUD_MANAGER.pullFromCloud!
		return LL(UI);
		// Calculate initial progress
		// CLOUD_MANAGER.calcProgress(LIBRARY)
		
		// If user is logged in, force a profile sync to ensure latest data
		// if CLOUD_MANAGER.get('user')
		// 	NOTE.gray("User logged in on app mount, ensuring data is fresh")
		// 	CLOUD_MANAGER.getUserProfile().then(do(result)
		// 			NOTE.gray("App mount profile sync complete:", result)
		// 			# Make sure to sync data again after profile sync
		// 			CLOUD_MANAGER.pullFromCloud!
		// 			# Recalculate progress with fresh data
		// 			CLOUD_MANAGER.calcProgress(LIBRARY, state.writing_system)
		// 		).catch(do(error)
		// 			console.error("App mount profile sync failed:", error)
		// 		)
	}
	render(){
		var self = this, $13, $14, $5, $1, $2, $3, $7, $8, $9, $11, $12, $16, $17, $19, $20, $22, $23, $24, $26, $27, $29, $30, $32, $33, $35, $36, $37, $39, $40, $42, $43;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		((!$2||$3&2) && $1.flagSelf$('dbq35b-ag'));
		$5 = null;
		if (UI.user === 'guest') {
			($7=$8=1,$5=$1[$6]) || ($7=$8=0,$1[$6]=$5=imba_createComponent('guest-page',null,null,'guest page'));
			$7||($5[$$up$]=$1);
			$9 = $5[$getSlot$]('__',$5);
			$7 || !$5.setup || $5.setup($8);
			$5[$afterVisit$]($8);
			
		} else {
			($11=$12=1,$5=$1[$10]) || ($11=$12=0,$1[$10]=$5=imba_createElement('div',null,'col',null));
			$11||($5[$$up$]=$1);
			$13 = $14 = null;
			if (INSTANT_APP_ID === 'REPLACE_WITH_YOUR_PUBLIC_APP_ID') {
				($16=$17=1,$13=$5[$15]) || ($16=$17=0,$5[$15]=$13=imba_createElement('p',null,null,'Please set your InstantDB App ID on line 1 in ENV.imba'));
				$16||($13[$$up$]=$5);
				
			} else {
				if (UI.user === 'code sent') {
					($19=$20=1,$13=$5[$18]) || ($19=$20=0,$5[$18]=$13=imba_createElement('p',null,null,"Check your email for the magic code."));
					$19||($13[$$up$]=$5);
					
					($22=$23=1,$14=$5[$21]) || ($22=$23=0,$5[$21]=$14=imba_createElement('div',null,'row',null));
					$22||($14[$$up$]=$5);
					($26=$27=1,$24=$14[$25]) || ($26=$27=0,$14[$25]=$24=imba_createElement('input',$14,null,null));
					$26 || ($24.type="text");
					$29=$14[$28] || ($14[$28]=$24.bind$('data',[this,'magic_code']));
					$26 || ($24.placeholder="Enter magic code");
					$26 || !$24.setup || $24.setup($27);
					$24[$afterVisit$]($27);
					;
					$22 || ($30=imba_createElement('button',$14,null,"Login"));
					$22 || ($30.on$(`click`,{$_: [function(e,$$) {
						return UI_MANAGER.loginWithCode(self.magic_code);
					}]},this));
					;
				} else {
					($32=$33=1,$13=$5[$31]) || ($32=$33=0,$5[$31]=$13=imba_createElement('p',null,null,"Please enter your email and click 'get code' to receive a magic code."));
					$32||($13[$$up$]=$5);
					
					($35=$36=1,$14=$5[$34]) || ($35=$36=0,$5[$34]=$14=imba_createElement('div',null,'row',null));
					$35||($14[$$up$]=$5);
					($39=$40=1,$37=$14[$38]) || ($39=$40=0,$14[$38]=$37=imba_createElement('input',$14,'dbq35b-aq',null));
					$39 || ($37.type="text");
					$42=$14[$41] || ($14[$41]=$37.bind$('data',[this,'email_input']));
					$39 || ($37.placeholder="Enter your email");
					$39 || !$37.setup || $37.setup($40);
					$37[$afterVisit$]($40);
					;
					$35 || ($43=imba_createElement('button',$14,'dbq35b-ar',"get code"));
					$35 || ($43.on$(`click`,{$_: [function(e,$$) {
						return UI_MANAGER.sendMagicCode(self.email_input);
					}]},this));
					;
				};
			};
			($5[$44] = $5[$placeChild$]($13,0,$5[$44]));
			($5[$45] = $5[$placeChild$]($14,0,$5[$45]));
		};
		($1[$46] = $1[$placeChild$]($5,0,$1[$46]));
		$1[$afterReconcile$]($3);
		return $1;
	}
	static {
		register$(this,c$0,'App',2);
		imba_defineTag('app-dbq35b-as',this,{cssid: 'dbq35b-af',name: 'App'});
	}
};
imba_mount((($50=$51=1,$47=$48[$49]) || ($50=$51=0,$47=$48[$49]=$47=imba_createComponent(App,null,null,null)),
$50 || ($47[$$up$]=$48._),
$50 || $48.sym || !$47.setup || $47.setup($51),
$48.sym || $47[$afterVisit$]($51),
$47));

imba_styles.register('dbq35b',".dbq35b-af {display: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nalign-content: center;}\n\n.dbq35b-ag:not(#_):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);\ndisplay: flex;\ngap: 2em;\n--u_rg: 2em;\n--u_cg: 2em;}\n\n.dbq35b-aq:not(#_):not(#_):not(#_) {width: auto;}\n\n.dbq35b-ar:not(#_):not(#_):not(#_) {padding-left: 1em;\npadding-right: 1em;}\n\napp-dbq35b-as { display:block; }");
/*
.dbq35b-af {display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;}

.dbq35b-ag:not(#_):not(#_) {background: hsla(240.00,4.76%,95.88%,100%);
display: flex;
gap: 2em;
--u_rg: 2em;
--u_cg: 2em;}

.dbq35b-aq:not(#_):not(#_):not(#_) {width: auto;}

.dbq35b-ar:not(#_):not(#_):not(#_) {padding-left: 1em;
padding-right: 1em;}

app-dbq35b-as { display:block; }
*/
