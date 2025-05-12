# Test file for the cleaner writing system approach

# Access the global store
const store = global.STORE

# Check current writing system
console.log('Current writing system:', store.state.writing_system)

# Test setting writing system to phonetic
console.log('\nSetting to phonetic:')
store.setWritingSystem('phonetic')
console.log('writing_system =', store.state.writing_system)

# Test toggling the writing system
console.log('\nToggling writing system:')
store.toggleWritingSystem()
console.log('writing_system =', store.state.writing_system)

# Test tracking word learning with different writing systems
console.log('\nTesting word learning:')

# Learn a word in Khmer
store.setWritingSystem('khmer')
store.toggleLearnedWord('ជា')
console.log("'ជា' learned in Khmer:", store.hasLearnedWord('ជា', 'khmer'))
console.log("'ជា' learned in phonetic:", store.hasLearnedWord('ជា', 'phonetic'))

# Learn another word in phonetic
store.setWritingSystem('phonetic')
store.toggleLearnedWord('សូរ')
console.log("'សូរ' learned in Khmer:", store.hasLearnedWord('សូរ', 'khmer'))
console.log("'សូរ' learned in phonetic:", store.hasLearnedWord('សូរ', 'phonetic'))

# Learn a word in both systems
store.toggleLearnedWord('ពាក្យ', 'khmer')
store.toggleLearnedWord('ពាក្យ', 'phonetic')
console.log("'ពាក្យ' learned in Khmer:", store.hasLearnedWord('ពាក្យ', 'khmer'))
console.log("'ពាក្យ' learned in phonetic:", store.hasLearnedWord('ពាក្យ', 'phonetic'))

# Show the internal state
console.log('\nInternal state representation:')
console.log('user_words =', JSON.stringify(store.state.user_words, null, 2))
console.log('progress_khmer =', JSON.stringify(store.state.progress_khmer, null, 2)) 
console.log('progress_phonetic =', JSON.stringify(store.state.progress_phonetic, null, 2))
