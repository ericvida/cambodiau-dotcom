# CARD[epic=CARD, seq=31] word-definitions
tag word-definitions
	<self>
		let word_object = dictionary[state.active_word]
		if word_object.def isnt false
			<h2> "Definition"
			<ol>
				for item in word_object.def
					let line = item.split('=')
					let use = line[0]
					let translations = line[1].split(' ')
					<li>
						<span.use> "{use.toUpperCase!} "
						<span.def> translations.join(', ')
		else
			<h2> "Google Definition"
			for defi in dictionary[state.active_word].google.split(' ')
				<p> defi