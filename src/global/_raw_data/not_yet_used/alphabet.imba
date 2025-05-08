export let alphabets =
	khmer-unicode-range: "1780-17FF"
	khmer-consonant-1: ["ក","ខ","គ","ឃ","ង","ច","ឆ","ជ","ឈ","ញ","ដ","ឋ","ឌ","ឍ","ណ","ត","ថ","ទ","ធ","ន","ប","ផ","ព","ភ","ម","យ","រ","ល","វ","ឝ","ឞ","ស","ហ","ឡ","អ"]
	khmer-consonant-1: ["ក","ខ","ច","ឆ","ដ","ឋ","ណ","ត","ថ","ប","ផ","ឝ","ស","ហ","ឡ","អ"]
	khmer-consonant-1-sub: ["្ក","្ខ","្ច","្ឆ","្ដ","្ឋ","្ណ","្ត","្ថ","្ប","្ផ","្ឝ","្ស","្ហ","្ឡ","្អ"]
	khmer-consonant-1-shifted: ["ង៉" "ញ៉" "ប៉", "យ៉", "រ៉", "វ៉", "ម៉"]
	khmer-consonant-2: ["គ","ឃ","ង","ជ","ឈ","ញ","ឌ","ឍ","ទ","ធ","ន","ព","ភ","ម","យ","រ","ល","ឞ"]
	khmer-consonant-2: ["្គ","្ឃ","្ង","្ជ","្ឈ","្ញ","្ឌ","្ឍ","្ទ","្ធ","្ន","្ព","្ភ","្ម","្យ","្រ","្ល","្ឞ"]
	khmer-consonant-2-shifted: ["ស៊","ហ៊","អ៊"]
	khmer-vowels: ["ា", "ិ", "ី", "ឹ", "ឺ", "ុ", "ូ", "ួ", "ើ", "ឿ", "ៀ", "ំ", "ះ", "ៈ"] 
	khmer-vowel-groups: ["េៈ", "ោះ", "េះ" ]
	khmer-independent-vowels: ["ឥ", "ឦ", "ឧ", "ឨ", "ឩ", "ឪ", "ឫ", "ឬ", "ឭ", "ឮ", "ឯ", "ឰ", "ឱ", "ឲ", "ឳ"]
	khmer-symbols: ["ៜ", "។", "៕", "៖", "ៗ", "៘", "៙", "៚"]
	khmer-digits: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"]
	khmer-astrology: ["៰", "៱", "៲", "៳", "៴", "៵", "៶", "៷", "៸", "៹", "៓"]
	khmer-group-shifter: ["៉", "៊"]
	khmer-consonant-modifier: ["្"]
	khmer-consonant-diacritic: ["៝", "់", "៌", "៍", "៎", "៏", "័", "៑"]
let char_details =
	"ា": { type: "Vowel", name: "Aa", sound: "Aa" }
	"ិ": { type: "Vowel", name: "I", sound: "I"} 
	"ី": { type: "Vowel", name: "Ii", sound: "Ii" }
	"ឹ": { type: "Vowel", name: "Y", sound: "Y"} 
	"ឺ": { type: "Vowel", name: "Yy", sound: "Yy" }
	"ុ": { type: "Vowel", name: "U", sound: "U"} 
	"ូ": { type: "Vowel", name: "Uu", sound: "Uu" }
	"ួ": { type: "Vowel", name: "Ua", sound: "Ua" }
	"ើ": { type: "Vowel", name: "Oe", sound: "Oe" }
	"ឿ": { type: "Vowel", name: "Ya", sound: "Ya" }
	"ៀ": { type: "Vowel", name: "Ie", sound: "Ie" }
	"េៈ": { type: "Vowel-pair", name: "E", sound: "Eaq" }
	"ោះ": { type: "Vowel-pair", name: "Ai", sound: "Oh" }
	"េះ": { type: "Vowel-pair", name: "Ai", sound: "Eh" }
	"ំ": { type: "modifier", name: "Nikahit", sound: "am"}
	"ះ": { type: "modifier", name: "Reahmuk", sound: "ah"}
	"ៈ": { type: "modifier", name: "Yuukaleapintu", sound: "eaq"}
	"៉": { type: "group-shifter", name: "Muusikatoan" }
	"៊": { type: "group-shifter", name: "Triisap" }
	"៝": { type: "diacritic", name: "Atthacan" }
	"់": { type: "diacritic", name: "Bantoc" }
	"៌": { type: "diacritic", name: "Robat" }
	"៍": { type: "diacritic", name: "Toandakhiat" }
	"៎": { type: "diacritic", name: "Kakabat" }
	"៏": { type: "diacritic", name: "Ahsda" }
	"័": { type: "diacritic", name: "Samyok Sannya" }
	"៑": { type: "diacritic", name: "Viriam" }
	"៓": { type: "diacritic", name: "Bathamasat", sound: false }
	"្": { type: "subscript", name: "Coeng" }
	"ឥ": { type: "Independent Vowel", name: "Qi", sound: "Qi" }
	"ឦ": { type: "Independent Vowel", name: "Qii", sound: "Qii" }
	"ឧ": { type: "Independent Vowel", name: "Qu", sound: "Qu" }
	"ឨ": { type: "Independent Vowel", name: "Quk", sound: "Quk" }
	"ឩ": { type: "Independent Vowel", name: "Quu", sound: "Quu" }
	"ឪ": { type: "Independent Vowel", name: "Quuv", sound: "Quuv" }
	"ឫ": { type: "Independent Vowel", name: "Ry", sound: "Ry" }
	"ឬ": { type: "Independent Vowel", name: "Ryy", sound: "Ryy" }
	"ឭ": { type: "Independent Vowel", name: "Ly", sound: "Ly" }
	"ឮ": { type: "Independent Vowel", name: "Lyy", sound: "Lyy" }
	"ឯ": { type: "Independent Vowel", name: "Qe", sound: "Qe" }
	"ឰ": { type: "Independent Vowel", name: "Qai", sound: "Qai" }
	"ឱ": { type: "Independent Vowel", name: "Qoo", sound: "Qoo" }
	"ឲ": { type: "Independent Vowel", name: "Qao", sound: "Qao" }
	"ឳ": { type: "Independent Vowel", name: "Qau", sound: "Qau" }
	"ៜ": { type: "Punctuation" , name: "Avakrahasanya", sound: false }
	"។": { type: "Punctuation", name: "Khan", sound: false }
	"៕": { type: "Punctuation", name: "Bariyoosan", sound: false }
	"៖": { type: "Punctuation", name: "Camnuc Pii Kuuh", sound: false }
	"ៗ": { type: "Punctuation", name: "Lek Too", sound: false }
	"៘": { type: "Punctuation", name: "Beyyal", sound: false }
	"៙": { type: "Punctuation", name: "Phnaek Muan", sound: false }
	"៚": { type: "Punctuation", name: "Koomuut", sound: false }
	"៰": { type: "symbol", name: "Lek Attak Son", sound: "Son" }
	"៱": { type: "symbol", name: "Lek Attak Muoy", sound: "Muoy" }
	"៲": { type: "symbol", name: "Lek Attak Pii", sound: "Pii" }
	"៳": { type: "symbol", name: "Lek Attak Bei", sound: "Bei" }
	"៴": { type: "symbol", name: "Lek Attak Buon", sound: "Buon" }
	"៵": { type: "symbol", name: "Lek Attak Pram", sound: "Pram" }
	"៶": { type: "symbol", name: "Lek Attak Pram-Muoy", sound: "Pram-Muoy" }
	"៷": { type: "symbol", name: "Lek Attak Pram-Pii", sound: "Pram-Pii" }
	"៸": { type: "symbol", name: "Lek Attak Pram-Bei", sound: "Pram-Bei" }
	"៹": { type: "symbol", name: "Lek Attak Pram-Buon", sound: "Pram-Buon" }
	"០": { type: "digit", name: "Son", sound: "Son" }
	"១": { type: "digit", name: "Muoy", sound: "Muoy" }
	"២": { type: "digit", name: "Pii", sound: "Pii" }
	"៣": { type: "digit", name: "Bei", sound: "Bei" }
	"៤": { type: "digit", name: "Buon", sound: "Buon" }
	"៥": { type: "digit", name: "Pram", sound: "Pram" }
	"៦": { type: "digit", name: "Pram-Muoy", sound: "Pram-Muoy" }
	"៧": { type: "digit", name: "Pram-Pii", sound: "Pram-Pii" }
	"៨": { type: "digit", name: "Pram-Bei", sound: "Pram-Bei" }
	"៩": { type: "digit", name: "Pram-Buon", sound: "Pram-Buon" }