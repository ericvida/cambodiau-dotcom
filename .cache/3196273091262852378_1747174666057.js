import {inited$, register$, is$} from 'imba/runtime';
import * as imba from 'imba';
import {locals as imba_locals, commit as imba_commit} from 'imba';

/*body*/
import {tx,id} from '@instantdb/core';
let c$0 = Symbol();
export class Ui {
	constructor(){
		var self = this;
		self = imba_locals[LOCAL_DB_NAME];
		this.phonetic_alphabet = 'vida';// 'vida' | 'ipa'
		this.dark = false;
		this.navbars = [true,true,true];// leftbar 1, leftbar 2, rightbar
		this.writing_system = 'source';// source | phonetic
		// user = null
		this.user = 'guest';// guest | code sent | {email}
		this.loading = false;
		this.email_input = '';
		this.rt = {
			cid: 0,
			lid: 0,
			pid: 0,
			wid: 0
		};
		this.active_word = '';
		this.user_words = {};
		this.progress_khmer = {};
		this.progress_phonetic = {};
		this.last_progress_update = 0;
		inited$(this,c$0);
	}
	static { register$(this,c$0,'Ui',16) }
};

let c$1 = Symbol();
export class UiManager {
	// prop local = {}
	constructor(){
		this.void;
		// Load initial data from the store
		// CLOUD_MANAGER.pullFromCloud!
		
		inited$(this,c$1);
	}
	initLocal(){
		// Initialize local data from store"""
		return CLOUD_MANAGER.pullFromCloud();
	}
	
	sendMagicCode(email_input){
		if (!(is$(UI.email_input,email_input))) {
			// Update local state from store
			CLOUD_MANAGER.set('email_input',email_input);
			CLOUD_MANAGER.pullFromCloud();
		};
		
		// Send magic code via the Store"""
		if (!UI.email_input) {
			console.error('Email is required to send a magic code.');
			return;
		};
		
		CLOUD_MANAGER.set('email_input',UI.email_input);
		CLOUD_MANAGER.sendMagicCode();
		
		// Update local state from store
		CLOUD_MANAGER.pullFromCloud();
		if (typeof window !== 'undefined' && typeof imba !== 'undefined' && imba_commit) {
			return imba_commit();
		};
	}
	logout(){
		// Log out via the Store"""
		return CLOUD_MANAGER.logout().then(function() {
			CLOUD_MANAGER.pullFromCloud();
			if (typeof window !== 'undefined' && typeof imba !== 'undefined' && imba_commit) {
				return imba_commit();
			};
		}).catch(function(error) {
			return console.error('Logout failed:',error);
		});
	}
	
	loginWithCode(magic_code){
		// Log in with magic code via the Store, then force profile sync for multi-browser consistency"""
		if (!(this.email_input) || !magic_code) {
			console.error('Both email and code are required to sign in.');
			return;
		};
		
		CLOUD_MANAGER.set('email_input',this.email_input);
		return CLOUD_MANAGER.loginWithCode(magic_code).then(function() {
			NOTE.gray("Login successful, forcing profile sync to ensure data consistency");
			// Force a sync with InstantDB to ensure we have the latest data
			// This is especially important when using different browsers
			return CLOUD_MANAGER.getUserProfile();
		}).then(function(result) {
			NOTE.gray("Profile sync result:",result);
			CLOUD_MANAGER.pullFromCloud();
			if (typeof window !== 'undefined' && typeof imba !== 'undefined' && imba_commit) {
				return imba_commit();
			};
		}).catch(function(error) {
			return console.error('Login or sync failed:',error);
		});
	}
	
	save(){
		// Save changes to the Store"""
				// Store automatically persists changes,
				// but we should refresh our local cache
		return CLOUD_MANAGER.pullFromCloud();
	}
	static { register$(this,c$1,'UiManager',16) }
};
