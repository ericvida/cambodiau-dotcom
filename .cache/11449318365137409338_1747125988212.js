import {inited$, register$} from 'imba/runtime';

/*body*/


let c$0 = Symbol();
export class ProgressProcessor {
	constructor(_library){
		// Initialize progress properties
		this.initProgressProps(_library);
		
		// Calculate progress using the new store
		
		
		inited$(this,c$0);
	}
	initProgressProps(_library){
		// Initialize library properties
		var $9;
		this.library = {};
		this.library.unique = _library?.unique || 0;
		this.library.weight = _library?.weight || 0;
		this.library.words = _library?.words || {};
		this.library.unique_learned = 0;
		this.library.weight_learned = 0;
		this.library.unique_progress = 0;
		this.library.weight_progress = 0;
		
		// Initialize collections properties
		if (_library?.collections) {
			for (let $3 = _library.collections, $1 = 0, $2 = Object.keys($3), $4 = $2.length, key, val; $1 < $4; $1++){
				key = $2[$1];val = $3[key];if (!(this[key])) {
					this[key] = {
						unique: val?.unique || 0,
						weight: val?.weight || 0,
						words: val?.words || {},
						unique_learned: 0,
						weight_learned: 0,
						unique_progress: 0,
						weight_progress: 0
					};
				};
			};
		};
		
		// Initialize lessons properties
		if (_library?.lessons) {
			for (let $7 = _library.lessons, $5 = 0, $6 = Object.keys($7), $8 = $6.length, key, val; $5 < $8; $5++){
				key = $6[$5];val = $7[key];if (!(this[key])) {
					this[key] = {
						unique: val?.unique || 0,
						weight: val?.weight || 0,
						words: val?.words || {},
						unique_learned: 0,
						weight_learned: 0,
						unique_progress: 0,
						weight_progress: 0
					};
				};
			};
		};
		
		// Initialize phrases properties
		if (_library?.phrases) {
			$9 = [];
			for (let $12 = _library.phrases, $10 = 0, $11 = Object.keys($12), $13 = $11.length, key, val; $10 < $13; $10++){
				key = $11[$10];val = $12[key];$9.push((!(this[key])) && (
					this[key] = {
						unique: val?.unique || 0,
						weight: val?.weight || 0,
						words: val?.words || {},
						unique_learned: 0,
						weight_learned: 0,
						unique_progress: 0,
						weight_progress: 0
					}
					
				));
			};
			return $9;
		};
		
	}
	updateDisplayFromSystem(system,_library = null){
		// Get the progress data for the specified writing system
		const progressData = CLOUD_MANAGER.getProgressForSystem(system);
		
		NOTE.gray("Updating display from system:",system,"Progress data weight learned:",progressData?.library?.weight_learned);
		
		// Update library properties for the specified system
		this.library.weight_learned = progressData?.library?.weight_learned || 0;
		this.library.unique_learned = progressData?.library?.unique_learned || 0;
		this.library.unique_progress = progressData?.library?.unique_progress || 0;
		this.library.weight_progress = progressData?.library?.weight_progress || 0;
		
		// If no library is provided, use the cached data from progressData
		_library = _library || globalThis.LIBRARY;
		
		// Update collections properties
		if (_library?.collections) {
			for (let $16 = _library.collections, $14 = 0, $15 = Object.keys($16), $17 = $15.length, col_key, _collection; $14 < $17; $14++){
				col_key = $15[$14];_collection = $16[col_key];if (progressData[col_key]) {
					this[col_key].weight_learned = progressData[col_key].weight_learned || 0;
					this[col_key].unique_learned = progressData[col_key].unique_learned || 0;
					this[col_key].unique_progress = progressData[col_key].unique_progress || 0;
					this[col_key].weight_progress = progressData[col_key].weight_progress || 0;
				};
			};
		};
		
		// Update lessons properties
		if (_library?.lessons) {
			for (let $20 = _library.lessons, $18 = 0, $19 = Object.keys($20), $21 = $19.length, les_key, _lesson; $18 < $21; $18++){
				les_key = $19[$18];_lesson = $20[les_key];if (progressData[les_key]) {
					this[les_key].weight_learned = progressData[les_key].weight_learned || 0;
					this[les_key].unique_learned = progressData[les_key].unique_learned || 0;
					this[les_key].unique_progress = progressData[les_key].unique_progress || 0;
					this[les_key].weight_progress = progressData[les_key].weight_progress || 0;
				};
			};
		};
		
		// Update phrases properties
		if (_library?.phrases) {
			for (let $24 = _library.phrases, $22 = 0, $23 = Object.keys($24), $25 = $23.length, phr_key, _phrase; $22 < $25; $22++){
				phr_key = $23[$22];_phrase = $24[phr_key];if (progressData[phr_key]) {
					this[phr_key].weight_learned = progressData[phr_key].weight_learned || 0;
					this[phr_key].unique_learned = progressData[phr_key].unique_learned || 0;
					this[phr_key].unique_progress = progressData[phr_key].unique_progress || 0;
					this[phr_key].weight_progress = progressData[phr_key].weight_progress || 0;
				};
			};
		};
		
		return this;
	}
	
	// Helper functions
	countKeys(obj){
		return obj ? Object.keys(obj).length : 0;
		
	}
	calcPercent(learned,total){
		return (total > 0) ? Math.round(learned / total * 100) : 0;
	}
	static { register$(this,c$0,'ProgressProcessor',16) }
};
