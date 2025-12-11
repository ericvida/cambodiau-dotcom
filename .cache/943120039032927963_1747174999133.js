import {__init__$, inited$, register$, iterable$, is$} from 'imba/runtime';
import {commit as imba_commit, locals as imba_locals} from 'imba';

/*body*/
import {init,tx,id} from '@instantdb/core';

/* Store.imba
# A centralized data store to manage application state and handle synchronization
# between local storage and InstantDB
*/


/* Constants
*/

// Define default values for the store
const DEFAULT_STATE = {
	// User and authentication state
		user: null,
	loginΦ: null,// null = waiting, yes, no
	sentCodeΦ: null,// yes, no
	email_input: '',
	error: null,
	
	// UI preferences
	dark: false,
	ipa: false,
	lesson_nav: true,
	phrase_nav: true,
	right_bar: true,
	writing_system: 'source',// 'source' or 'phonetic'
	
	// Navigation state
	cid: 0,
	lid: 0,
	pid: 0,
	wid: 0,
	active_word: 'ជា',
	
	// User data
	user_words: {},// Format: { "word": { khmer: true|false, phonetic: true|false } }
	progress_khmer: {library: {weight_learned: 0}},
	progress_phonetic: {library: {weight_learned: 0}},
	profile_id: null,// ID of the user's profile in InstantDB
	// Timestamps for sync management
	updated_progress_at: 0,
	last_sync_at: 0,
	created_at: 0
};

/* Utility functions
*/

function deepCopy(obj){
	return JSON.parse(JSON.stringify(obj));
};

function safeAccessToNestedObjectProperty(obj,path,defaultValue = null){
	// Safely access nested object properties via a path string
		// Example: safeAccessToNestedObjectProperty({a: {b: {c: 1}}}, 'a.b.c') => 1
	if (!obj) {
		return defaultValue;
	};
	
	const keys = path.split('.');
	let result = obj;
	
	for (let $1 = 0, $2 = iterable$(keys), $3 = $2.length; $1 < $3; $1++) {
		let key = $2[$1];
		if ((result === null) || (result === undefined) || !(result.hasOwnProperty(key))) {
			return defaultValue;
		};
		result = result[key];
	};
	
	return (result === undefined) ? defaultValue : result;
};

function throttle(func,limit){
	// Throttle a function to only run once per limit milliseconds"""
	let waiting = false;
	
	return function(...args) {
		if (!waiting) {
			func(...args);
			waiting = true;
			return setTimeout(function() {
				return waiting = false;
			},limit);
		};
	};
};

/* Store Implementation
*/

let c$0 = Symbol();
export class CloudManager {
	// Properties
	[__init__$]($$ = null,deep = true,fields = true){
		var $0;
		this.state = ($$ && ($0 = $$.state) !== undefined) ? ($0) : {};
		this.instant = ($$ && ($0 = $$.instant) !== undefined) ? ($0) : {};
		this.syncQueue = ($$ && ($0 = $$.syncQueue) !== undefined) ? ($0) : [];
		this.isSyncing = ($$ && ($0 = $$.isSyncing) !== undefined) ? ($0) : false;
		this.initialized = ($$ && ($0 = $$.initialized) !== undefined) ? ($0) : false;
		this.syncTimeout = ($$ && ($0 = $$.syncTimeout) !== undefined) ? ($0) : null;
		
	}
	// Main state object
	// InstantDB instance
	// Queue for changes that need to be synced
	// Flag to prevent simultaneous syncs
	// Flag to track initialization
	// Reference to setTimeout for throttling
	
	async pullFromCloud(){
		// Force a sync with InstantDB - optimistic, minimal approach
		if (!UI.user?.id) {
			return NOTE.red('User not logged in, cannot pull from cloud');
		};
		// NOTE.green('Pulling from cloud')
		// Create a promise to track completion
		const userId = UI.user.id;
		let resp = await this.instant.queryOnce(
			{profile: {
				$: {
					where: {
						"$users.id": userId
					}
				}
			}}
		);
		
		// Handle data if available
		if (resp.data) {
			const profiles = Object.values(resp.data.profile || {});
			if (profiles.length > 0) {
				// Apply data directly
				UI.profile_id = profiles[0].id;
				// return resp.data.profile[0]
				
			};
		};
		let cloud = resp.data.profile[0];
		// Deep copy important data to avoid reference issues
		UI.user_words = JSON.parse(JSON.stringify(cloud.user_words));
		UI.progress_khmer = JSON.parse(JSON.stringify(cloud.progress_khmer));
		UI.progress_phonetic = JSON.parse(JSON.stringify(cloud.progress_phonetic));
		return UI.last_progress_update = cloud.last_progress_update;
	}
	// Constructor
	constructor(){
		this[__init__$]();
		NOTE.gray("Initializing Store...");
		// throttledSync = throttle(self.pushLocalToIDB.bind(self), 7500) # Throttle to every 7.5 seconds for better transaction handling
		this.initInstantDB();
		this.subscribeToAuthChanges();
		inited$(this,c$0);
	}
	
	// ========================
	// Initialization methods
	// ========================
	
	resetState(){
		// Reset the state to default values"""
		this.state = deepCopy(DEFAULT_STATE);
		return UI.updated_progress_at = Date.now();
		// saveToLocalStorage!
	}
	
	initInstantDB(){
		// Initialize the InstantDB connection"""
		try {
			this.instant = init({appId: INSTANT_APP_ID});
			return NOTE.gray("InstantDB initialized");
		} catch (error) {
			return console.error("Error initializing InstantDB:",error);
		};
	}
	
	subscribeToAuthChanges(){
		// Set up subscription to auth changes in InstantDB"""
		var self = this;
		if (!(this.instant)) {
			console.error("InstantDB not initialized, can't subscribe to auth");
			return;
			
		};
		try {
			return this.instant.subscribeAuth(function(auth) {
				if (auth.error) {
					console.error('Error during authentication:',auth.error);
					UI.error = auth.error.message;
				} else if (auth.user) {
					const isNewLogin = !UI.user || UI.user.id !== auth.user.id;
					UI.user = auth.user;
					UI.auth = 'user';
					
					// Always subscribe to user data
					self.subscribeToUserData();
					
					// Always force a profile sync on both new login and browser refresh
					// This ensures we have the latest data in both scenarios
					NOTE.gray("User authenticated, forcing profile sync");
					self.getUserProfile().then(function(result) {
						NOTE.gray("Profile sync complete:",result);
						
						// Critical: calculate progress after sync to update the UI
						if (LIBRARY) {
							NOTE.gray("Recalculating progress after profile sync");
							self.calcProgress(LIBRARY,UI.writing_system);
							return imba_commit();
						};
					}).catch(function(error) {
						return console.error("Profile sync failed:",error);
					});
				} else {
					UI.auth = 'guest';
					UI.user = null;
				};
				
				return imba_commit();
				// saveToLocalStorage!
			});
		} catch (error) {
			return console.error("Error subscribing to auth changes:",error);
		};
	}
	
	subscribeToUserData(){
		// Subscribe to user-specific data in InstantDB"""
		var self = this, unsub;
		if (!UI.user?.id) {
			console.warn('User is not logged in. Skipping user data subscription.');
			return;
		};
		try {
			const userId = UI.user.id;
			NOTE.gray('Subscribing to user data for user:',userId);
			
			const query = {
				profile: {
					$: {
						where: {
							"$users.id": userId
						
						}
					}
				}
			};
			return unsub = this.instant.subscribeQuery(query,function(resp) {
				if (resp.error) {
					console.error('Error in user data subscription:',resp.error.message);
					return UI.error = resp.error.message;
				} else if (resp.data) {
					// Always prioritize remote data first
										// Process profile data - this is critical for multi-browser sync
					if (resp.data.profile) {
						const profiles = Object.values(resp.data.profile || {});
						if (profiles.length > 0) {
							// Found existing profile, use the first one
							NOTE.gray('Found existing profile for user');
							// Store the profile ID to prevent creating duplicates
							UI.profile_id = profiles[0].id;
							let data = profiles[0];
							UI.profile_id = data.id;
							UI.progress_khmer = data.progress_khmer;
							UI.progress_phonetic = data.progress_phonetic;
							UI.user_words = data.user_words;
							// Apply remote data - this ensures we always have the latest
							// TODO: making sure profile data is up to date
							self.pullFromCloud(resp.data);
							
							// Critical: Update UI and recalculate progress after sync
							if (LIBRARY) {
								NOTE.gray("Recalculating progress after real-time update");
								self.calcProgress(LIBRARY);
							};
							
							return imba_commit();
						} else {
							// No profile found, we'll create one on first sync
							NOTE.gray('No existing profile found for user, will create on first sync');
							// Reset profile ID to ensure we create a new one
							UI.profile_id = null;
							
							// Immediate sync to create profile if we have any data
							if ((Object.keys(UI.user_words || {}).length > 0) || (UI.progress_khmer?.library?.weight_learned > 0) || (UI.progress_phonetic?.library?.weight_learned > 0)) {
								NOTE.gray('Found local data, syncing to create profile');
								// Force a sync to create the profile
								self.set('writing_system',UI.writing_system);
								return self.pushToCloud();
							};
						};
					};
					
					// Save to local storage as a backup
					// saveToLocalStorage!
				} else {
					return console.warn('Unexpected response structure:',resp);
				};
			});
		} catch (error) {
			return console.error("Error subscribing to user data:",error);
		};
	}
	
	// ========================
	// State Management
	// ========================
	
	get(path,defaultValue = null){
		return UI[this.key] || defaultValue;
	}
	
	set(key,value){
		UI[key] = value;
		// Update timestamp and persist
		return UI.updated_progress_at = Date.now();
		// pushToCloud!
		
	}
	saveToLocalStorage(){
		// Save the state to local storage"""
		try {
			return imba_locals[LOCAL_DB_NAME] = deepCopy(this.state);
		} catch (error) {
			return console.error("Error persisting state to local storage:",error);
		};
	}
	
	// ========================
	// Synchronization with InstantDB
	// ========================
	
	queueForPushToIDB(path,value){
		return this.void;
		// Add an item to the sync queue"""
		// syncQueue.push({ path, value, timestamp: Date.now! })
		// throttledSync!
	}
	
	async pushToCloud(){
		if (!UI.user?.id || UI.profile_id) {
			return;
		};
		
		let package_for_cloud = {
			user_words: UI.user_words,
			progress_khmer: UI.progress_khmer,
			progress_phonetic: UI.progress_phonetic,
			last_progress_update: Date.now()
		};
		try {
			return await this.instant.transact(tx.profile[UI.profile_id].update(package_for_cloud));
		} catch (error) {
			return EE(("CLOUD_MANAGER.pushToCloud! error: " + error));
		};
	}
	pushLocalToIDB(){
		this.void;
		return LL(UI_keys);
		// # Push local changes to InstantDB optimistically with minimal error handling
		// if !UI.user..id or !UI.profile_id
		// 	isSyncing = false
		// 	return
		
		// if isSyncing
		// 	return
		
		// isSyncing = true
		// const timestamp = Date.now!
		
		// # Create a simple update with all the current state
		// const update = {
		// 	updated_progress_at: timestamp,
		// 	writing_system: UI.writing_system,
		// 	user_words: UI.user_words,
		// 	progress_khmer: UI.progress_khmer,
		// 	progress_phonetic: UI.progress_phonetic
		// }
		
		// # Send the update optimistically
		// instant.transact(tx.profile[UI.profile_id].update(update))
		// 	.then(do
		// 		# Success - clear sync queue and update timestamp
		// 		syncQueue = []
		// 		UI.last_sync_at = timestamp
		// 		isSyncing = false
		// 	)
		// 	.catch(do
		// 		# Just reset syncing flag on error
		// 		isSyncing = false
		// 	)
	}
	
	
	
	getUserProfile(){
		// Force a sync with InstantDB - optimistic, minimal approach
		var self = this;
		if (!UI.user?.id) {
			return Promise.resolve({success: false});
			
		};
		// Create a promise to track completion
		return new Promise(async function(resolve) {
			const userId = UI.user.id;
			let resp = await self.instant.queryOnce(
				{profile: {
					$: {
						where: {
							"$users.id": userId
						}
					}
				}}
			);
			// Handle data if available
			if (resp.data) {
				const profiles = Object.values(resp.data.profile || {});
				if (profiles.length > 0) {
					// Apply data directly
					UI.profile_id = profiles[0].id;
					self.pullFromCloud(resp.data);
					
					// Update UI
					if (LIBRARY) {
						PROGRESS.updateDisplayFromSystem(UI.writing_system);
						return self.calcProgress(LIBRARY,UI.writing_system);
					};
				};
			};
		});
	}
	// ========================
	// Authentication methods
	// ========================
	
	sendMagicCode(email_input){
		// LL email_input, UI.email_input
				// Send a magic code for authentication"""
		if (!email_input) {
			EE('Email is required to send a magic code.');
		};
		
		NOTE.gray('Sending magic code to:',UI.email_input);
		try {
			return this.instant.auth.sendMagicCode({email: email_input});
		} catch (error) {
			console.error('Error sending magic code:',error);
			return Promise.reject(error);
		} finally {
			UI.user = 'code sent';
			
		};
	}
	
	loginWithCode(code){
		// Login with a magic code"""
		if (!UI.email_input || !code) {
			console.error('Both email and code are required to sign in.');
			return Promise.reject('Email and code required');
		};
		
		return this.instant.auth.signInWithMagicCode({email: UI.email_input,code: code}).then(function() {
			UI.email_input = '';
			UI.sentCodeΦ = false;
			// saveToLocalStorage!
			return true;
		}).catch(function(error) {
			console.error('Error logging in with magic code:',error);
			UI.error = error.message || 'Failed to login';
			return Promise.reject(error);
		});
	}
	
	logout(){
		// Log out the current user"""
		NOTE.gray('Logging out user');
		
		return this.instant.auth.signOut().then(function() {
			UI.user = null;
			UI.email_input = '';
			UI.profile_id = null;// Clear profile ID on logout
			// saveToLocalStorage!
			return true;
		}).catch(function(error) {
			console.error('Error during logout:',error);
			UI.error = error.message || 'Failed to logout';
			return Promise.reject(error);
		});
	}
	
	// ========================
	// User preferences
	// ========================
	
	toggleDarkMode(){
		// Toggle dark mode"""
		this.set('dark',!UI.dark);
		return UI.dark;
	}
	
	toggleIpa(){
		// Toggle IPA display"""
		this.set('ipa',!UI.ipa);
		return UI.ipa;
	}
	
	toggleLessonNav(){
		// Toggle lesson navigation"""
		this.set('lesson_nav',!UI.lesson_nav);
		return UI.lesson_nav;
	}
	
	togglePhraseNav(){
		// Toggle phrase navigation"""
		this.set('phrase_nav',!UI.phrase_nav);
		return UI.phrase_nav;
	}
	
	toggleRightBar(){
		// Toggle right sidebar"""
		this.set('right_bar',!UI.right_bar);
		return UI.right_bar;
		
	}
	setWritingSystem(system){
		// Set writing system to 'source' or 'phonetic'
		if (!system || (system !== 'source' && system !== 'phonetic')) {
			console.warn('Invalid writing system:',system);
			return UI.writing_system || 'source';
			
		};
		// Avoid unnecessary updates if system hasn't changed
		if (system == UI.writing_system) {
			return system;
		};
		
		// Direct state update to reduce double updates
		UI.writing_system = system;
		
		// Only persist and queue for sync after both state and UI are updated
		// saveToLocalStorage!
		
		// Update UI immediately without waiting for sync
		if (PROGRESS) {
			PROGRESS.updateDisplayFromSystem(system);
		} else {
			console.warn('PROGRESS global not available for UI update');
		};
		
		// Queue for sync after UI update is complete
		if (UI.user?.id) {
			this.set('writing_system',system);
			
		};
		return system;
	}
	
	toggleWritingSystem(){
		// Toggle between 'source' and 'phonetic' writing systems
		const newSystem = (UI.writing_system === 'source') ? 'phonetic' : 'source';
		
		NOTE.gray(("Toggling writing system from " + (UI.writing_system) + " to " + newSystem));
		return this.setWritingSystem(newSystem);
	}
	
	getCurrentWritingSystemProgress(){
		// Get the current writing system with data validation
				// This also ensures progress display is updated correctly
		const system = UI.writing_system || 'source';
		
		// Ensure progress data is updated for the current system if needed
		if (LIBRARY) {
			this.calcProgress(LIBRARY,UI.writing_system);
		};
		
		return system;
	}
	
	// ========================
	// Learning progress tracking
	// ========================
	
	toggleLearnedWord(word,writing_system = null){
		// Toggle whether a word has been learned
				// writing_system can be 'source', 'phonetic', or null (uses current setting)
		var $4;
		if (!word) {
			NOTE.gray('CLOUD_MANAGER.toggleLearnedWord','Word is required to toggle learned status.');
			return;
		};
		
		// Determine which writing system to toggle, with fallback to default
		const system = writing_system || UI.writing_system || 'source';
		
		if (system !== 'source' && system !== 'phonetic') {
			console.warn('Invalid writing system:',system);
			return;
			
		};
		const user_words = {...UI.user_words || {}};
		
		// Initialize the word entry if it doesn't exist
		if (!user_words[word]) {
			user_words[word] = {khmer: false,phonetic: false};
			
		};
		// Toggle the writing system
		user_words[word][system] = !user_words[word][system];
		
		// If both writing systems are false, remove the word entirely
		if (!user_words[word].khmer && !user_words[word].phonetic) {
			((($4 = user_words[word]),delete user_words[word], $4));
			
		};
		// Update state
		this.set('user_words',user_words);
		
		// calculate progress
		if (LIBRARY) {
			// LL state["progress_{system}"]
			this.calcProgress(system);
			UI[("progress_" + system)];
			
		} else {
			NOTE.red('no library');
		};
		
		// persist to iDB
		
		
		
		// After toggling the word, ensure local state is updated
		// CLOUD_MANAGER.pullFromCloud!
		return imba_commit();
	}
	
	
	hasLearnedWord(word,writing_system = null){
		// Check if a word has been learned
				// writing_system can be 'source', 'phonetic', or null (uses current setting)
		if (!word) {
			return false;
		};
		
		// Determine which writing system to check, with fallback to default
		const system = writing_system || UI.writing_system || 'source';
		
		// Check if the word is learned in the specified writing system
		return is$(UI.user_words?.[word]?.[system],true);
	}
	
	calcProgress(writing_system = null){
		// Update learning progress based on library data"""
		let library = null;
		if (LIBRARY) {
			library = LIBRARY;
		} else {
			console.warn('Cannot update progress: library data is missing');
		};
		
		try {
			// Use specified writing system or get current one, with fallback to default
			const system = writing_system || UI.writing_system || 'source';
			
			// Select the appropriate progress object based on writing system
			const progressKey = (system === 'source') ? 'progress_khmer' : 'progress_phonetic';
			const progress = deepCopy(this.state[progressKey] || {library: {}});
			
			// Calculate library-level progress
			let libraryWeightLearned = 0;
			let libraryUniqueWords = 0;
			let libraryUniqueWordsLearned = 0;
			
			// Get words learned in the current writing system
			const user_words = UI.user_words || {};
			// Create a helper function to check if a word is learned in the current system
			function isWordLearned(word){
				return user_words[word]?.[system] === true;
			};
			
			// Process collections
			if (library.collections) {
				for (let $7 = library.collections, $5 = 0, $6 = Object.keys($7), $12 = $6.length, colKey, collection; $5 < $12; $5++){
					colKey = $6[$5];collection = $7[colKey];progress[colKey] = progress[colKey] || {};
					let colWeightLearned = 0;
					let colUniqueWords = collection.unique || 0;
					let colUniqueWordsLearned = 0;
					
					// Process words in this collection
					for (let $10 = collection.words || {}, $8 = 0, $9 = Object.keys($10), $11 = $9.length, word, wordData; $8 < $11; $8++){
						word = $9[$8];wordData = $10[word];if (isWordLearned(word)) {
							colWeightLearned += (wordData.weight || 0);
							colUniqueWordsLearned++;
						};
					};
					
					// Update collection progress
					progress[colKey].weight_learned = colWeightLearned;
					progress[colKey].unique_learned = colUniqueWordsLearned;
					progress[colKey].weight_progress = 
						((colWeightLearned > 0) && (collection.weight > 0)) ? 
							Math.round((colWeightLearned / collection.weight) * 100)
						 : 
							0
					
					;
					progress[colKey].unique_progress = 
						((colUniqueWordsLearned > 0) && (colUniqueWords > 0)) ? 
							Math.round((colUniqueWordsLearned / colUniqueWords) * 100)
						 : 
							0
					
					;
					
					// Add to library totals
					libraryWeightLearned += colWeightLearned;
					
				};
			};
			// Process lessons
			if (library.lessons) {
				for (let $15 = library.lessons, $13 = 0, $14 = Object.keys($15), $20 = $14.length, lesKey, lesson; $13 < $20; $13++){
					lesKey = $14[$13];lesson = $15[lesKey];progress[lesKey] = progress[lesKey] || {};
					let lesWeightLearned = 0;
					let lesUniqueWords = lesson.unique || 0;
					let lesUniqueWordsLearned = 0;
					
					// Process words in this lesson
					for (let $18 = lesson.words || {}, $16 = 0, $17 = Object.keys($18), $19 = $17.length, word, wordData; $16 < $19; $16++){
						word = $17[$16];wordData = $18[word];if (isWordLearned(word)) {
							lesWeightLearned += (wordData.weight || 0);
							lesUniqueWordsLearned++;
						};
					};
					
					// Update lesson progress
					progress[lesKey].weight_learned = lesWeightLearned;
					progress[lesKey].unique_learned = lesUniqueWordsLearned;
					progress[lesKey].weight_progress = 
						((lesWeightLearned > 0) && (lesson.weight > 0)) ? 
							Math.round((lesWeightLearned / lesson.weight) * 100)
						 : 
							0
					
					;
					progress[lesKey].unique_progress = 
						((lesUniqueWordsLearned > 0) && (lesUniqueWords > 0)) ? 
							Math.round((lesUniqueWordsLearned / lesUniqueWords) * 100)
						 : 
							0
					
					;
				};
			};
			// Process phrases
			if (library.phrases) {
				for (let $23 = library.phrases, $21 = 0, $22 = Object.keys($23), $28 = $22.length, phrKey, phrase; $21 < $28; $21++){
					phrKey = $22[$21];phrase = $23[phrKey];progress[phrKey] = progress[phrKey] || {};
					let phrWeightLearned = 0;
					let phrUniqueWords = phrase.unique || 0;
					let phrUniqueWordsLearned = 0;
					
					// Process words in this phrase
					for (let $26 = phrase.words || {}, $24 = 0, $25 = Object.keys($26), $27 = $25.length, word, wordData; $24 < $27; $24++){
						word = $25[$24];wordData = $26[word];if (isWordLearned(word)) {
							phrWeightLearned += (wordData.weight || 0);
							phrUniqueWordsLearned++;
						};
					};
					
					// Update phrase progress
					progress[phrKey].weight_learned = phrWeightLearned;
					progress[phrKey].unique_learned = phrUniqueWordsLearned;
					progress[phrKey].weight_progress = 
						((phrWeightLearned > 0) && (phrase.weight > 0)) ? 
							Math.round((phrWeightLearned / phrase.weight) * 100)
						 : 
							0
					
					;
					progress[phrKey].unique_progress = 
						((phrUniqueWordsLearned > 0) && (phrUniqueWords > 0)) ? 
							Math.round((phrUniqueWordsLearned / phrUniqueWords) * 100)
						 : 
							0
					
					;
				};
			};
			
			// Update library progress
			libraryUniqueWords = library.unique || 0;
			
			// Count words learned in current system
			libraryUniqueWordsLearned = 0;
			for (let $29 = 0, $30 = Object.keys(user_words), $31 = $30.length, word, data; $29 < $31; $29++){
				word = $30[$29];data = user_words[word];if (data[system]) {
					libraryUniqueWordsLearned++;
				};
			};
			
			progress.library.weight_learned = libraryWeightLearned;
			progress.library.unique_learned = libraryUniqueWordsLearned;
			progress.library.weight_progress = 
				((libraryWeightLearned > 0) && (library.weight > 0)) ? 
					Math.round((libraryWeightLearned / library.weight) * 100)
				 : 
					0
			
			;
			progress.library.unique_progress = 
				((libraryUniqueWordsLearned > 0) && (libraryUniqueWords > 0)) ? 
					Math.round((libraryUniqueWordsLearned / libraryUniqueWords) * 100)
				 : 
					0
			
			;
			
			// Set the updated progress for the specific writing system
			this.set(progressKey,progress);
			return progress;
		} catch (error) {
			console.error("Error updating progress:",error);
			return this.getProgressForSystem();
		};
	}
	
	getProgressForSystem(writing_system = null){
		// Get progress data for the specified writing system or current one
		const system = writing_system || UI.writing_system || 'source';
		
		if (system === 'source') {
			return UI.progress_khmer || {library: {weight_learned: 0}};
		} else if (system === 'phonetic') {
			return UI.progress_phonetic || {library: {weight_learned: 0}};
		} else {
			console.warn('Invalid writing system for progress:',system);
			return {library: {weight_learned: 0}};
		};
	}
	
	getTotalProgress(){
		// Get total progress combining both writing systems
		const khmerProgress = this.getProgressForSystem('source');
		const phoneticProgress = this.getProgressForSystem('phonetic');
		
		const totalProgress = {
			library: {
				weight_learned: (khmerProgress.library?.weight_learned || 0) + (phoneticProgress.library?.weight_learned || 0),
				unique_learned: (khmerProgress.library?.unique_learned || 0) + (phoneticProgress.library?.unique_learned || 0)
			}
		};
		
		return totalProgress;
	}
	
	// ========================
	// Word reference utilities
	// ========================
	
	generateWordReferences(library){
		// Generate references for where each word is used"""
		if (!library?.phrases) {
			console.warn('Cannot generate word references: library phrase data is missing');
			return {};
		};
		
		try {
			const references = {};
			
			// Process each phrase
			for (let $34 = library.phrases, $32 = 0, $33 = Object.keys($34), $39 = $33.length, phraseKey, phrase; $32 < $39; $32++){
				// Skip if no words in this phrase
				phraseKey = $33[$32];phrase = $34[phraseKey];if (!phrase?.words) {
					continue;
				};
				
				// Process each word in the phrase
				for (let $37 = phrase.words, $35 = 0, $36 = Object.keys($37), $38 = $36.length, word, _wordData; $35 < $38; $35++){
					word = $36[$35];_wordData = $37[word];if (!references[word]) {
						references[word] = [];
						
					};
					references[word].push(phraseKey);
				};
			};
			
			return references;
		} catch (error) {
			console.error("Error generating word references:",error);
			return {};
		};
	}
	
	countKeys(obj){
		// Count the number of keys in an object"""
		return obj ? Object.keys(obj).length : 0;
	}
	static { register$(this,c$0,'CloudManager',16) }
};
