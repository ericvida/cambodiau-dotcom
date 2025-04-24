import {register$, is$} from 'imba/runtime';

/*body*/
let c$0 = Symbol();
class Fuzzy {
	search(needle,haystack){
		if (typeof haystack === 'string') {
			if (this.searchcheckInclude(this.searchSubstring(this.searchNormalize(needle)),this.searchNormalize(haystack)) && this.searchMatchLength(needle,haystack)) {
				return true;
				return console.log(this.string);
			} else if (this.searchCheckPattern(this.searchSubstring(needle),this.searchSubstring(haystack))) {
				return true;
			} else {
				return false;
			};
		} else {
			return false;
		};
		// return true if searchCheckPattern(searchSubstring(needle),haystack)
	}
	searchcheckInclude(n,h){
		return h.toLowerCase().includes(n);
	}
	
	searchCheckPattern(n,h){
		let pattern = n.split("").map(function(x) {
			return ("(?=.*" + x + ")");
		}).join("");
		
		let regex = new RegExp(pattern,"gi");
		return h.match(regex);
	}
	
	searchSubstring(n){
		let substring = n.substring(0,4).toLowerCase();
		return substring;
	}
	
	searchMatchLength(needle,haystack){
		needle = needle.toLowerCase();
		haystack = haystack.toLowerCase();
		let haystackLength = haystack.length;
		let needleLength = needle.length;
		if (needleLength > haystackLength) {
			return false;
		};
		if (is$(needleLength,haystackLength)) {
			return is$(needle,haystack);
		};
		let needleLetter = 0;
		while (needleLetter < needleLength){
			let haystackLetter = 0;
			let match = false;
			let needleLetterCode = needle.charCodeAt(needleLetter++);
			while (haystackLetter < haystackLength){
				if (is$(haystack.charCodeAt(haystackLetter++),needleLetterCode)) {
					match = true;break;
				};
			};
			if (match) { continue; };
			return false;
		};
		return true;
	}
	
	// def searchTooLong n, h
	// 	if h.length > n.length
	// 		return false
	
	searchNormalize(string){
		let res = string.toLowerCase();
		res = res.replace('q̣','q');
		res = res.replace('ẉ','w');
		res = res.replace('ẹ','ẹ');
		res = res.replace('ė','e');
		res = res.replace('ṛ','r');
		res = res.replace('ṭ','t');
		res = res.replace('ỵ','y');
		res = res.replace('ụ','u');
		res = res.replace('ị','i');
		res = res.replace('ọ','o');
		res = res.replace('ȯ','o');
		res = res.replace('p̣','p');
		res = res.replace('ạ','a');
		res = res.replace('ṣ','s');
		res = res.replace('ḍ','d');
		res = res.replace('ḥ','h');
		res = res.replace('j̣','j');
		res = res.replace('ḳ','k');
		res = res.replace('ḷ','l');
		res = res.replace('ẓ','z');
		res = res.replace('x̣','x');
		res = res.replace('c̣','c');
		res = res.replace('ṿ','v');
		res = res.replace('ḅ','b');
		res = res.replace('ṇ','n');
		res = res.replace('ṃ','m');
		res = res.replace('|',' ');
		res = res.replace('ʔ',' ');
		res = res.replace('ʰ','h');
		res = res.replace(/\s|/gi,'');
		// console.log res
		return res;
	}
	static { register$(this,c$0,'Fuzzy',0) }
};


export default Fuzzy;
