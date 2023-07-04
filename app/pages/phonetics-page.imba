# TAG[epic=PAGE, seq=1] phonetics-page
tag phonetics-page
	css self
		p:1sp
		d:vflex
		# pt:1s
		pos:relative
	css .bg
		bg:gray1
		w:100% h:100vh
		d:block pos:absolute 
		zi:0
	css .phonetics-layout
		zi:10
		max-width:800px mx:auto
		d:hflex gap:1sp
	
	def render
		<self>
			<.phonetics-layout>
				<PhoneticVowels>
				<word-card.card>

tag PhoneticVowels
	css .chart-wrapper
		# c:gray9 @darkmode:gray0
		p:1sp
		d:vflex gap:2sp
		ai:end
	css .row
		d:hflex jc:space-between
		&.one
			w:200px
		&.two
			w:180px
		&.three
			w:160px
		&.four
			w:140px
	# css .dot
	# 	size:20px 
	# 	bg:gray9 @darkmode:gray2
	# 	rd:full
	# 	pos:relative
	# 	cursor:pointer
	# 	@hover
	# 		bg:hue7 @darkmode:hue3
	css span
		ff:monospace
		ta:center
		cursor:pointer
		bg:gray3 @darkmode:gray5
		@hover
			bg:hue2 @darkmode:hue7
		px:1sp py:.6sp rd:md
		# w:max-content
		# bd:1px solid red
		w:50px
	prop ipa = 1
	prop char = [
		["i","i","ពី"]
		["ụ","ɨ/v","ឈឺ"]
		["u","u","គូ"]
		["e","e","លេង"]
		["ẹ","ǝ","ឈើ"]
		["ọ","o/ʊə","គង់"]
		["ė","ɛ","ភ្នែក"] # លែង មែន
		["ạ","ɐ/ǝ","ដី"]
		["o","ɔ","គរ"]
		["a","a","ការ"]
		["ȯ","ɑ","ក៏"]
	]
	css nav
		d:hflex gap:1sp
		ai:center ja:center
		button
			px:1sp
			px:0.6sp
			rd:md
			cursor:pointer ta:center
			bg:gray4 @darkmode:gray6
			@hover
				bg:hue4 @darkmode:hue6
	def activeWord word
		state.active_word = char[word][2]
		api.save!
	
	def render
		<self>
			<nav>
				<button @click=api.toggleIpa!> 
					"Phonetic System: "
					if state.ipa then "IPA" else "Vida"
			if state.ipa is true
				ipa = 1
			else
				ipa = 0
			<.chart-wrapper>
				<div.row.one>
					<div.dot @click.activeWord(0)> 
						<span> char[0][ipa]
					<div.dot @click.activeWord(1)>
						<span> char[1][ipa]
					<div.dot @click.activeWord(2)>
						<span> char[2][ipa]
				<div.row.two>
					<div.dot @click.activeWord(3)> 
						<span> char[3][ipa]
					<div.dot @click.activeWord(4)>
						<span> char[4][ipa]
					<div.dot @click.activeWord(5)>
						<span> char[5][ipa]
				<div.row.three>
					<div.dot @click.activeWord(6)>
						<span> char[6][ipa]
					<div.dot @click.activeWord(7)>
						<span> char[7][ipa]
					<div.dot @click.activeWord(8)>
						<span> char[8][ipa]
				<div.row.four>
					<div.dot @click.activeWord(9)>
						<span> char[9][ipa]
					<div.dot>
					<div.dot @click.activeWord(10)>
						<span> char[10][ipa]