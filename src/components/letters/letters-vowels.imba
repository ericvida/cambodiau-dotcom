let consonant-options = {
	"ក": "k"
	"ខ": "kh"
	"គ": "ḳ"
	"ឃ": "ḳh"
	"ង": "ṇg"
	"ង៉": "ng"
	"ច": "c"
	"ឆ": "ch"
	"ជ": "c̣"
	"ឈ": "c̣h"
	"ញ": "ṇh"
	"ញ៉": "nh"
	"ត": "t"
	"ឋ": "th"
	"ទ": "ṭ"
	"ឍ": "ṭh"
	"ណ": "n"
	"ដ": "d"
	"ថ": "dh"
	"ឌ": "d"
	"ធ": "dh"
	"ន": "n"
	"ប": "b"
	"ប៊": "b"
	"ប៉": "p"
	"ផ": "ph"
	"ព": "p̣"
	"ភ": "p̣"
	"ម": "ṃ"
	"ម៉": "ម"
	"យ": "ỵ"
	"យ៉": "y"
	"រ": "ṛ"
	"រ៉": "r"
	"ល": "ḷ"
	"វ៉": "ṿ"
	"ស": "s"
	"ស៊": "ṣ"
	"ហ": "h"
	"ហ៊": "ḥ"
	"ឡ": "l"
	"អ": "q"
	"អ៊": "q̣"
}
let vowels-1 = [
	kh: "ា"
	vida: "aa"
	length: "long"
	diph: no
	group: 1
	---
	kh: "ា"
	vida: "iạ"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "ិ"
	length: "short"
	diph: no
	vida: "e"
	group: 1
	---
	kh: "ិ"
	vida: "ụ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ី"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ី"
	length: "long"
	diph: no
	group: 2
	---
	kh: "ឹ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ឹ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ឺ"
	length: "long"
	diph: no
	group: 1
	---
	kh: "ឺ"
	length: "long"
	diph: no
	group: 2
	---
	kh: "ុ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ុ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ូ"
	length: "long"
	diph: no
	group: 1
	---
	kh: "ូ"
	length: "long"
	diph: no
	group: 2
	---
	kh: "ួ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ួ"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "ើ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ើ"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "ៀ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ៀ"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "ឿ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ឿ"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "េ"
	length: "long"
	diph: no
	group: 1
	---
	kh: "េ"
	length: "long"
	diph: no
	group: 2
	---
	kh: "ែ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ែ"
	length: "long"
	diph: no
	group: 2
	---
	kh: "ៃ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ៃ"
	length: "short"
	diph: yes
	group: 2
	---
	kh: "ំ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "ំ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ះ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ះ"
	length: "short"
	diph: yes
	group: 2
]
let vowel-pairs = [
	kh: "ុំ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ុំ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ាំ"
	length: "long"
	diph: no
	group: 1
	---
	kh: "ាំ"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "ិះ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ិះ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ុះ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ុះ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "េះ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "េះ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "ោះ"
	length: "short"
	diph: no
	group: 1
	---
	kh: "ោះ"
	length: "short"
	diph: no
	group: 2
]
let vowel-exceptions = [
	kh: "ាក់"
	length: "short"
	diph: yes
	group: 2
	---
	kh: "ាត់"
	length: "short"
	diph: yes
	group: 2
	---
	kh: "ាំង"
	length: "long"
	diph: no
	group: 1
	---
	kh: "ាំង"
	length: "long"
	diph: yes
	group: 2
	---
	kh: "ូវ"
	length: "long"
	diph: yes
	group: 1
	---
	kh: "នេះ"
	length: "short"
	diph: no
	group: 2
	---
	kh: "នោះ"
	length: "short"
	diph: no
	group: 2
]
tag letters-vowels
	css .letter-grid
		d:vgrid gtc: 1fr 1fr 1fr 1fr 1fr 1fr g:1sp
	css .letter
		p:1sp rd:1rd d:box s:4sp
		cursor:pointer
		o@hover:90%
	css .group-1
		bg:indigo2 
	css .group-2
		bg:rose2 
	css .consonant-options
		d:flex jc:space-between
	<self.vowels.card>
		<.consonant-options>
			for own key, val of consonant-options
				<span> key
		<h2> "Vowels"
		<.letter-grid>
			for item in vowels-1
				<.letter .group-{item.group}> item.kh
		<h2> "Vowel Pairs"
		<.letter-grid>
			for item in vowel-pairs
				<.letter .group-{item.group}> item.kh
		<h2> "Vowel Exceptions"
		<.letter-grid>
			for item in vowel-exceptions
				<.letter .group-{item.group}> item.kh