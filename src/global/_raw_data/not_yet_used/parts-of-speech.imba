let word_tags = [
	"noun": [
		"Names a person, place, thing, or idea.",
		"Universal; found in all world languages" ]
	---
	"verb": [
		"Describes an action, event, or state of being.",
		"Universal; found in all world languages" ]
	---
	"adjective": [
		"Describes qualities or characteristics of nouns.",
		"Widespread; Indo-European, Afro-Asiatic, Niger–Congo, Sino-Tibetan" ]
	---
	"adverb": [
		"Describes how, when, where actions happen.",
		"Widespread; Indo-European, Altaic, Niger–Congo" ]
	"noun": [
		"Names a person, place, thing, or idea.",
		"Universal; found in all world languages" ]
	---
	"verb": [
		"Describes an action, event, or state of being.",
		"Universal; found in all world languages" ]
	---
	"adjective": [
		"Describes qualities or characteristics of nouns.",
		"Widespread; Indo-European, Afro-Asiatic, Niger–Congo, Sino-Tibetan" ]
	---
	"adverb": [
		"Describes how, when, where actions happen.",
		"Widespread; Indo-European, Altaic, Niger–Congo" ]
	---
	"pronoun": [
		"Takes the place of a noun or noun phrase.",
		"Universal; found in all world languages" ]
	---
	"preposition": [
		"Shows relationship or position between nouns.",
		"Most European, Semitic, Austronesian languages" ]
	---
	"postposition": [
		"Follows and relates to a noun or pronoun.",
		"South Asian, Uralic, Turkic languages" ]
	---
	"circumposition": [
		"Uses two parts around noun to show relation.",
		"Finnic, Iranian, some South Asian languages" ]
	---
	"conjunction": [
		"Connects words, phrases, or clauses together.",
		"Universal; found in all world languages" ]
	---
	"determiner": [
		"Limits or specifies a noun’s reference.",
		"Most European, some SE Asian, some Bantu languages" ]
	---
	"article": [
		"Indicates specificity or definiteness of a noun.",
		"Romance, Germanic, Semitic languages" ]
	---
	"numeral": [
		"Indicates a number, quantity, or order.",
		"Universal; found in all world languages" ]
	---
	"interjection": [
		"Expresses emotion, reaction, or spontaneous sound.",
		"Universal; found in all world languages" ]
	---
	"auxiliary-verb": [
		"Helps main verb express tense, aspect, or mood.",
		"Indo-European, Bantu, Uralic, some East Asian languages" ]
	---
	"modal-verb": [
		"Expresses ability, possibility, necessity, or permission.",
		"Germanic, Romance, some Turkic and Sinitic languages" ]
	---
	"particle": [
		"Small functional word adds meaning, structure, or emphasis.",
		"East Asian, Slavic, Greek, SE Asian, Australian languages" ]
	---
	"classifier": [
		"Groups or counts nouns by characteristic type.",
		"SE Asian languages, Sino-Tibetan, Austroasiatic" ]
	---
	"measure-word": [
		"Used to count specific types of nouns accurately.",
		"SE Asian languages, Sino-Tibetan, Mongolic languages" ]
	---
	"case-marker": [
		"Shows a noun’s grammatical role in sentence.",
		"Uralic, Dravidian, Turkic, Indo-Aryan languages" ]
	---
	"copula": [
		"Links subject to a subject complement.",
		"Universal; found in most world languages" ]
	---
	"focus-marker": [
		"Highlights or emphasizes an important word or phrase.",
		"Austronesian, Uralic, Basque, some African languages" ]
	---
	"topic-marker": [
		"Marks what sentence is mainly about (topic).",
		"East Asian, Altaic, Austronesian languages" ]
	---
	"evidential": [
		"Indicates how speaker knows the information.",
		"Tibeto-Burman, Turkic, Quechuan, Amazonian languages" ]
	---
	"politeness-marker": [
		"Shows level of politeness or respect in speech.",
		"East Asian, SE Asian, Dravidian, many Asian languages" ]
	---
	"honorific": [
		"Conveys respect, status, or formality grammatically.",
		"East Asian, SE Asian, Bantu, some European languages" ]
	---
	"converb": [
		"Non-finite verb form works like an adverb.",
		"Turkic, Mongolic, Tungusic, Uralic languages" ]
	---
	"coverb": [
		"Verb form acting like a preposition in a clause.",
		"Sino-Tibetan, SE Asian, some West African languages" ]
	---
	"adposition": [
		"General term for words marking relationships (pre, post, circumpositions).",
		"Many languages worldwide" ]
	---
	"relational-noun": [
		"Noun expressing spatial or relational meaning.",
		"East Asian, some Austronesian, some Niger–Congo languages" ]
	---
	"serial-verb": [
		"Two or more verbs combine to describe sequence.",
		"West African, SE Asian, Oceanic, Caribbean languages" ]
	---
	"gerund": [
		"Verb form functioning as noun.",
		"Indo-European, some Turkic, Uralic languages" ]
	---
	"participle": [
		"Verb form used as an adjective or adverb.",
		"Indo-European, Finnic, Semitic, Turkic languages" ]
	---
	"infinitive": [
		"Verb form used as noun or complement.",
		"Indo-European, Turkic, Finno-Ugric languages" ]
]

let character_tags = [
	"consonant": [
		"Represents a basic speech sound that is not a vowel.",
		"All alphabetic, abugida, and abjad scripts worldwide" ]
	---
	"vowel": [
		"Symbolizes a voiced open speech sound like a, e, i, o, u.",
		"All alphabetic and abugida scripts; widespread globally" ]
	---
	"syllabic-character": [
		"Represents an entire syllable, often consonant plus vowel.",
		"Syllabaries and abugidas; East Asian, African, South Asian languages" ]
	---
	"logogram": [
		"Single symbol represents a word, idea, or morpheme.",
		"East Asian languages, ancient Near Eastern scripts, Mesoamerican writing" ]
	---
	"punctuation": [
		"Marks boundaries, structure, or pauses in written language.",
		"Universal in written languages; scripts used worldwide" ]
	---
	"diacritic": [
		"Mark added to a letter to modify its sound or value.",
		"Widespread in alphabetic scripts: European, South Asian, Southeast Asian writing systems" ]
	---
	"numeral": [
		"Symbol representing a number, digit, or counting value.",
		"Scripts and languages on all continents" ]
	---
	"modifier-letter": [
		"Letter or sign that changes sound of adjacent character.",
		"Phonetic scripts, many African, Asian, and extended Latin alphabets" ]
	---
	"tone-mark": [
		"Indicates pitch or tone used in pronunciation.",
		"Southeast Asian languages, West African languages, tonal writing systems" ]
	---
	"ligature": [
		"A character formed by combining two or more letters.",
		"European, South Asian, Middle Eastern, and historical scripts" ]
	---
	"symbol": [
		"Non-letter, non-digit mark with a specific meaning.",
		"Global; found in all writing systems for non-linguistic content" ]
	---
	"word-divider": [
		"Marks boundaries between words within a sentence.",
		"Found in many scripts; European, African, ancient scripts" ]
	---
	"mathematical-operator": [
		"Sign for arithmetic, logic, or set relations.",
		"Universal in mathematical and scientific notations; scripts worldwide" ]
	---
	"bracket-parenthesis": [
		"Marks off or encloses words or phrases for clarity.",
		"Global; present in major modern writing systems" ]
	---
	"quotation-mark": [
		"Encloses spoken or cited language in text.",
		"Widespread in modern writing traditions; global scripts" ]
	---
	"superscript-subscript": [
		"Smaller symbol written above or below normal line.",
		"Scientific, mathematical, and literary traditions worldwide" ]
	---
	"reduplication-mark": [
		"Symbol or mark indicating a repeated word or syllable.",
		"East Asian, Southeast Asian, and some African scripts" ]
	---
	"abbreviation-mark": [
		"Indicates an abbreviation or word contraction.",
		"Ancient and modern scripts; European, South, and West Asian scripts" ]
	---
	"space-character": [
		"Blank space dividing words or elements in writing.",
		"Major scripts that separate words: alphabetic systems worldwide" ]
	---
	"formatting-character": [
        "A digital character (visible/invisible) that directs the formatting of an adjacent letter or text",
		"Used in digital environments to manage text layout, and complex South and Southeast Asian scripts. Examples: subscript modifier, zero-width space (ZWSP), zero-width non-joiner (ZWNJ), line breaks."
    ]
]