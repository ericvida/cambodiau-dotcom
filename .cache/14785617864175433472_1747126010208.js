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
	writing_system: 'khmer',// 'khmer' or 'phonetic'
	
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
					UI.loginΦ = true;
					
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
					UI.loginΦ = false;
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
					NOTE.green(("Received remote data: " + Object.keys(resp.data)));
					// Process profile data - this is critical for multi-browser sync
					if (resp.data.profile) {
						const profiles = Object.values(resp.data.profile || {});
						// WW resp.data.profile[0].user_words
						// WW UI.user_words
						if (profiles.length > 0) {
							// Found existing profile, use the first one
							NOTE.gray('Found existing profile for user');
							// Store the profile ID to prevent creating duplicates
							UI.profileId = profiles[0].id;
							
							// Apply remote data - this ensures we always have the latest
							self.pullFromCloudToLocal(resp.data);
							
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
							UI.profileId = null;
							
							// Immediate sync to create profile if we have any data
							if ((Object.keys(UI.user_words || {}).length > 0) || (UI.progress_khmer?.library?.weight_learned > 0) || (UI.progress_phonetic?.library?.weight_learned > 0)) {
								NOTE.gray('Found local data, syncing to create profile');
								// Force a sync to create the profile
								self.set('writing_system',UI.writing_system);
								return self.pushLocalToIDB();
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
		// Get a value from the state by path"""
		return safeAccessToNestedObjectProperty(this.state,path,defaultValue);
	}
	
	set(path,value){
		// Set a value in the state by path"""
		const keys = path.split('.');
		const lastKey = keys.pop();
		
		let current = this.state;
		
		// Navigate to the correct nesting level
		for (let $4 = 0, $5 = iterable$(keys), $6 = $5.length; $4 < $6; $4++) {
			let key = $5[$4];
			if (!current[key] || typeof current[key] !== 'object') {
				current[key] = {};
			};
			current = current[key];
		};
		
		// Set the value
		current[lastKey] = value;
		
		// Update timestamp and persist
		return UI.updated_progress_at = Date.now();
		// saveToLocalStorage!
	}
	
	setProgressToLocal(){
		
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
	
	pushLocalToIDB(){
		// Push local changes to InstantDB optimistically with minimal error handling
		var self = this;
		if (!UI.user?.id || !UI.profileId) {
			this.isSyncing = false;
			return;
			
		};
		if (this.isSyncing) {
			return;
			
		};
		this.isSyncing = true;
		const timestamp = Date.now();
		
		// Create a simple update with all the current state
		const update = {
			updated_progress_at: timestamp,
			writing_system: UI.writing_system,
			user_words: UI.user_words,
			progress_khmer: UI.progress_khmer,
			progress_phonetic: UI.progress_phonetic
		};
		
		// Send the update optimistically
		return this.instant.transact(tx.profile[UI.profileId].update(update)).then(function() {
			// Success - clear sync queue and update timestamp
			self.syncQueue = [];
			UI.last_sync_at = timestamp;
			return self.isSyncing = false;
		}).catch(function() {
			// Just reset syncing flag on error
			return self.isSyncing = false;
		});
	}
	
	pullFromCloudToLocal(data){
		// Process and apply remote data - remote data is the source of truth"""
		var $7;
		if (!data) {
			console.warn("Cannot sync from remote: No data provided");
			return;
			
		};
		try {
			// Handle profile data if present
			if (data.profile) {
				$7 = [];
				for (let $10 = Object.values(data.profile), $8 = 0, $9 = Object.keys($10), $11 = $9.length, key, profile; $8 < $11; $8++){
					// Only process data for the current user
					key = $9[$8];profile = $10[key];$7.push((profile.$users && profile.$users.includes(UI.user.id)) && (
						NOTE.gray("Processing remote profile data for user:",UI.user.id),
						
						// Store the profile ID for future updates
						UI.profileId = profile.id,
						
						// Prioritize remote data for user words - REPLACE rather than merge
						profile.user_words ? (
							UI.user_words = deepCopy(profile.user_words)
						) : (
							console.warn("No user_words data in profile")
						),
						
						// Prioritize remote data for khmer progress - REPLACE rather than merge
						profile.progress_khmer ? (
							NOTE.gray("Applying remote progress_khmer data:",profile.progress_khmer.library?.weight_learned,"weight_learned"),
							UI.progress_khmer = deepCopy(profile.progress_khmer)
						) : (
							console.warn("No progress_khmer data in profile")
							
						),
						// Prioritize remote data for phonetic progress - REPLACE rather than merge
						profile.progress_phonetic ? (
							NOTE.gray("Applying remote progress_phonetic data:",profile.progress_phonetic.library?.weight_learned,"weight_learned"),
							UI.progress_phonetic = deepCopy(profile.progress_phonetic)
						) : (
							console.warn("No progress_phonetic data in profile")
						),
						
						// Get writing system preference from server
						profile.writing_system && (
							NOTE.gray("Setting writing system from remote:",profile.writing_system),
							UI.writing_system = profile.writing_system
							
						),
						// Update last received timestamp
						UI.last_sync_at = profile.updated_progress_at || Date.now(),
						
						// Store created_at if available
						profile.created_at && (
							UI.created_at = profile.created_at
						),
						
						NOTE.gray("Remote data applied successfully"),
						
						// Force a UI update and update display for current writing system
						LIBRARY && (
							NOTE.gray("Updating display for writing system:",UI.writing_system),
							PROGRESS.updateDisplayFromSystem(UI.writing_system,LIBRARY),
							// Also manually trigger a progress calculation to ensure consistency
							this.calcProgress(LIBRARY,UI.writing_system)
							
						),
						imba_commit()
					));
				};
				return $7;
			} else {
				return console.warn("No profile data found in remote data");
			};
			
			// Save changes to local storage as a backup
			// saveToLocalStorage!
		} catch (error) {
			return console.error("Error processing remote data:",error);
		};
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
					UI.profileId = profiles[0].id;
					self.pullFromCloudToLocal(resp.data);
					
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
	
	sendMagicCode(){
		// Send a magic code for authentication"""
		if (!UI.email_input) {
			LL(UI.email_input);
			console.error('Email is required to send a magic code.');
			return Promise.reject('Email is required');
		};
		NOTE.gray('Sending magic code to:',UI.email_input);
		UI.sentCodeΦ = true;
		imba_commit();
		// saveToLocalStorage!
		try {
			return this.instant.auth.sendMagicCode({email: UI.email_input});
		} catch (error) {
			console.error('Error sending magic code:',error);
			UI.error = error.message || 'Failed to send magic code';
			return Promise.reject(error);
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
			UI.profileId = null;// Clear profile ID on logout
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
		// Set writing system to 'khmer' or 'phonetic'
		if (!system || (system !== 'khmer' && system !== 'phonetic')) {
			console.warn('Invalid writing system:',system);
			return UI.writing_system || 'khmer';
			
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
		// Toggle between 'khmer' and 'phonetic' writing systems
		const newSystem = (UI.writing_system === 'khmer') ? 'phonetic' : 'khmer';
		
		NOTE.gray(("Toggling writing system from " + (UI.writing_system) + " to " + newSystem));
		return this.setWritingSystem(newSystem);
	}
	
	getCurrentWritingSystemProgress(){
		// Get the current writing system with data validation
				// This also ensures progress display is updated correctly
		const system = UI.writing_system || 'khmer';
		
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
				// writing_system can be 'khmer', 'phonetic', or null (uses current setting)
		var $12;
		if (!word) {
			NOTE.gray('CLOUD_MANAGER.toggleLearnedWord','Word is required to toggle learned status.');
			return;
		};
		
		// Determine which writing system to toggle, with fallback to default
		const system = writing_system || UI.writing_system || 'khmer';
		
		if (system !== 'khmer' && system !== 'phonetic') {
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
			((($12 = user_words[word]),delete user_words[word], $12));
			
		};
		// Update state
		this.set('user_words',user_words);
		
		// calculate progress
		if (LIBRARY) {
			// LL state["progress_{system}"]
			LL(this.calcProgress(system));
			
			LL(this.state[("progress_" + system)]);
			
		} else {
			NOTE.red('no library');
		};
		
		// persist to iDB
		
		
		
		// After toggling the word, ensure local state is updated
		// UI_MANAGER.syncFromStore!
		return imba_commit();
	}
	
	
	hasLearnedWord(word,writing_system = null){
		// Check if a word has been learned
				// writing_system can be 'khmer', 'phonetic', or null (uses current setting)
		if (!word) {
			return false;
		};
		
		// Determine which writing system to check, with fallback to default
		const system = writing_system || UI.writing_system || 'khmer';
		
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
			const system = writing_system || UI.writing_system || 'khmer';
			
			// Select the appropriate progress object based on writing system
			const progressKey = (system === 'khmer') ? 'progress_khmer' : 'progress_phonetic';
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
				for (let $15 = library.collections, $13 = 0, $14 = Object.keys($15), $20 = $14.length, colKey, collection; $13 < $20; $13++){
					colKey = $14[$13];collection = $15[colKey];progress[colKey] = progress[colKey] || {};
					let colWeightLearned = 0;
					let colUniqueWords = collection.unique || 0;
					let colUniqueWordsLearned = 0;
					
					// Process words in this collection
					for (let $18 = collection.words || {}, $16 = 0, $17 = Object.keys($18), $19 = $17.length, word, wordData; $16 < $19; $16++){
						word = $17[$16];wordData = $18[word];if (isWordLearned(word)) {
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
				for (let $23 = library.lessons, $21 = 0, $22 = Object.keys($23), $28 = $22.length, lesKey, lesson; $21 < $28; $21++){
					lesKey = $22[$21];lesson = $23[lesKey];progress[lesKey] = progress[lesKey] || {};
					let lesWeightLearned = 0;
					let lesUniqueWords = lesson.unique || 0;
					let lesUniqueWordsLearned = 0;
					
					// Process words in this lesson
					for (let $26 = lesson.words || {}, $24 = 0, $25 = Object.keys($26), $27 = $25.length, word, wordData; $24 < $27; $24++){
						word = $25[$24];wordData = $26[word];if (isWordLearned(word)) {
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
				for (let $31 = library.phrases, $29 = 0, $30 = Object.keys($31), $36 = $30.length, phrKey, phrase; $29 < $36; $29++){
					phrKey = $30[$29];phrase = $31[phrKey];progress[phrKey] = progress[phrKey] || {};
					let phrWeightLearned = 0;
					let phrUniqueWords = phrase.unique || 0;
					let phrUniqueWordsLearned = 0;
					
					// Process words in this phrase
					for (let $34 = phrase.words || {}, $32 = 0, $33 = Object.keys($34), $35 = $33.length, word, wordData; $32 < $35; $32++){
						word = $33[$32];wordData = $34[word];if (isWordLearned(word)) {
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
			for (let $37 = 0, $38 = Object.keys(user_words), $39 = $38.length, word, data; $37 < $39; $37++){
				word = $38[$37];data = user_words[word];if (data[system]) {
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
		const system = writing_system || UI.writing_system || 'khmer';
		
		if (system === 'khmer') {
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
		const khmerProgress = this.getProgressForSystem('khmer');
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
			for (let $42 = library.phrases, $40 = 0, $41 = Object.keys($42), $47 = $41.length, phraseKey, phrase; $40 < $47; $40++){
				// Skip if no words in this phrase
				phraseKey = $41[$40];phrase = $42[phraseKey];if (!phrase?.words) {
					continue;
				};
				
				// Process each word in the phrase
				for (let $45 = phrase.words, $43 = 0, $44 = Object.keys($45), $46 = $44.length, word, _wordData; $43 < $46; $43++){
					word = $44[$43];_wordData = $45[word];if (!references[word]) {
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
