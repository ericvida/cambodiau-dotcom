import {__init__$, inited$, register$} from 'imba/runtime';

/*body*/

let c$0 = Symbol();
class Note {
	constructor($$ = null){
		this[__init__$]($$);
		inited$(this,c$0);
	}
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		this.enabled = ($$ && ($0 = $$.enabled) !== undefined) ? ($0) : true;
		
	}
	log(message){
		if (this.enabled) {
			return console.log(message);
		};
	}
	red(message){
		if (this.enabled) {
			this.color = "tomato";
			return console.log(("%c" + message + " (notered)"),("color:" + this.color));
		};
	}
	gray(message){
		if (this.enabled) {
			this.color = "#c9c9c9";
			return console.log(("%c" + message + " (notegray)"),("color:" + this.color));
		};
	}
	green(message){
		if (this.enabled) {
			this.color = "green";
			return console.log(("%c" + message + " (notegreen)"),("color:" + this.color));
		};
	}
	yellow(value){
		if (this.enabled) {
			this.color = "amber";
			return console.log(("%c" + this.message + " (noteyellow)"),("color:" + this.color));
		};
	}
	black(value){
		if (this.enabled) {
			this.color = "black";
			return console.log(("%c" + this.message + " (noteblack)"),("color:" + this.color));
		};
	}
	static { register$(this,c$0,'Note',16) }
};
globalThis.NOTE = new Note(true);
NOTE.gray(['hello','world']);
import '../ENV.imba';
import 'imba/preflight.css';
import './global/styles.imba';
import './global/elements/index.imba';
import './global/components/index.imba';
import './global/icons/index.imba';
import {audio} from './global/_raw_data/audio_references.imba';
import {image_references} from './global/_raw_data/image_references.imba';
import Fuzzy from './global/FuzzySearch.imba';// for fitting text in WordCard
import * as PH from 'imba-phosphor-icons';

// Initialize Store first, before any other components

globalThis.LL = console.log;
globalThis.WW = console.warn;
globalThis.EE = console.error;

import {CloudManager} from './global/CloudManager.imba';// Initializes and sets global.CLOUD_MANAGER
import {UiManager,Ui} from './global/UiManager.imba';
import {bible_collection} from "./global/_raw_data/bible_collection.imba";
import {LibraryProcessor} from './global/LibraryProcessor.imba';
import {ProgressProcessor} from './global/ProgressProcessor.imba';

globalThis.AUDIO = audio;
globalThis.IMAGES = image_references;
globalThis.LIBRARY = new LibraryProcessor([bible_collection]);
globalThis.PROGRESS = new ProgressProcessor(LIBRARY);
globalThis.UI = new Ui;
globalThis.UI_MANAGER = new UiManager;
globalThis.CLOUD_MANAGER = new CloudManager;
globalThis.FUZZY = new Fuzzy;
globalThis.PH = PH;
