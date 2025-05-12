# Test file for the new word learning system

# Access the global store
const store = global.STORE

# Example of toggling a word as learned in Khmer
store.toggleLearnedWord('ជា', 'khmer')

# Example of checking if a word is learned in the current writing system
const isLearnedActive = store.hasLearnedWord('ជា')
console.log("Word 'ជា' learned in active writing system:", isLearnedActive)

# Example of checking if a word is learned specifically in Khmer
const isLearnedKhmer = store.hasLearnedWord('ជា', 'khmer')
console.log("Word 'ជា' learned in Khmer:", isLearnedKhmer)

# Example of checking if a word is learned specifically in phonetic
const isLearnedPhonetic = store.hasLearnedWord('ជា', 'phonetic')
console.log("Word 'ជា' learned phonetically:", isLearnedPhonetic)

# Toggle the same word in phonetic system
store.toggleLearnedWord('ជា', 'phonetic')

# Now check again
console.log("Word 'ជា' learned phonetically after toggle:", store.hasLearnedWord('ជា', 'phonetic'))

# Check the internal state
console.log("User words state:", store.state.user_words)
console.log("Progress Khmer state:", store.getProgressForSystem('khmer'))
console.log("Progress Phonetic state:", store.getProgressForSystem('phonetic'))

# Example toggling based on current writing system
store.set('khmer_writing', true)  # Set to Khmer mode
store.toggleLearnedWord('សូរស័ព្ទ')  # Will toggle using khmer system automatically
console.log("Word 'សូរស័ព្ទ' learned in khmer:", store.hasLearnedWord('សូរស័ព្ទ', 'khmer'))

store.set('khmer_writing', false)  # Set to phonetic mode
store.toggleLearnedWord('ពាក្យ')  # Will toggle using phonetic system automatically
console.log("Word 'ពាក្យ' learned phonetically:", store.hasLearnedWord('ពាក្យ', 'phonetic'))
