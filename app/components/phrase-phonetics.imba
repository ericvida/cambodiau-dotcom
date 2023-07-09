tag phrase-phonetics
	<self>
		<div[d:hflex gap:.5sp]>
			<h2> "Phonetics "
				css c:hue3
			<h2> "Vida"
				css c:hue3
			<span> "/"
				css c:gray2
			<h2> "IPA"
				css c:gray2
			<span[]> "/"
				css c:gray2
			<h2> "ARPABET"
				css c:gray2
		<p %phonetics>
			css ff:mono d:flex gap:0.5sp flex-wrap:wrap
			if state.ipa
				for word in phrase..khmer.split(' ')
					let obj = dictionary[word]
					if obj..ipa || obj..vida || obj..vida_auto || word
						<span> obj..ipa || obj..vida || obj..vida_auto || word
					else
						<span> "n/a"
						<> ERROR word, "no phonetics available"
			else
				for word in phrase.khmer.split(' ')
					let obj = dictionary[word]
					if obj..vida || obj..vida_auto || obj..ipa || word
						<span> obj..vida || obj..vida_auto || obj..ipa || word
					unless obj..vida || obj..vida_auto || obj..ipa || word
						<span> "n/a"
						<> ERROR word, "no phonetics available"