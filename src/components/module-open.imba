tag module-open
	css p:1sp d:vflex @lg:hflex g:1sp
		min-height: calc(100vh - 1topbar)
		max-width:1000px mx:auto
	css main flg:1 d:vflex g:1sp
	css .image 
		bg:hue5 p:1sp rd:1rd
		# aspect-ratio: 16 / 9
	css .module-grid
		d:grid g:1sp
		gtc: 2fr 1fr 1fr
		gtr: auto auto auto auto
		gta: "i w spelling" "tk to google" "lk lo english" "nav nav shortcuts"
	
	css .word-interface
		d:hflex g:.4sp flf:wrap
	css .word
		cursor:pointer
		px:0.4sp rd:0.8rd
		bd:2px solid 
		bc:hue1 ..dark:hue5/20
		@hover
			bg:hue1 ..dark:hue5/20
	css .word.known
			bc:hue2 ..dark:hue5/20
			bg:hue2 ..dark:hue5/50
	<self>
		<main.module-grid>
			<div.image[ga:i]> "image"
			<WordInfo[ga:w]>
			<div.card.word-interface[ga:tk d:vflex]>
				<h2> "Title in Khmer"
				<div[d:hflex flf:wrap g:0.5sp]>
					for word in "ខ្មែរ ថីធោល នៅ ទី នេះ ខ្មែរ ថីធោល នៅ ទី នេះ ខ្មែរ ថីធោល នៅ ទី នេះ".split(' ')
						<.word.known> word
			<div.card[ga:to]> 
				<h2> "Title in Phonetics"
				<p> "Khmer Title goes here"
			<div.card.word-interface[ga:lk d:vflex]>
				<h2> "Lesson in KHmer"
				<div[d:hflex flf:wrap g:0.5sp]>
					for word in "ខ្មែរ ថីធោល នៅ ទី នេះ".split(' ')
						<.word> word
		
			<div.card[ga:lo]>
				<h2> "Lesson Phonetics"
				<p> "Lesson Phonetics goes here"
			# # <[d:hgrid w:100% gtc:2fr 2fr g:1sp]> 
			<[ga:nav d:vflex jc:end]>
				<bottom-bar[]>
			<.card[ga:spelling]>
				<h2> "Word Spelling"
			<.card[ga:google]>
				<h2> "Google Translation"
			<.card[ga:english]>
				<h2> "Lesson Meaning"
				<p> "This is the meaning of the lesson"
			<.card[ga:shortcuts]>
				<h2> "Shortcuts"
				<p> "one"
				<p> "two"
				<p> "three"
			<RightBar[ga:r]>
		# <RightBar>
tag WordSpelling
	<self.card>
		
tag WordInfo
	css self 
		d:vflex ai:center
	css .khmer
		fs:5xl ff:'Open Khmer School'
	css .phonetic
		ff:monospace fs:xl
		c:hue5 ..dark:hue4
	css .switch-wrapper
		h:30px w:110px rd:full
		bg:hue4 cursor:pointer
		# mt:auto
	css .switch
		ml:0
		tween:margin 1s
		&.learned
			ml:auto
		h:30px rd:full bd:3px fs:xs c:black d:box
		w:fit-content px:1sp
		bc:hue4
		bg:white
	prop learned = false
	def toggleLearned
		learned = !learned
		console.log learned
		imba.commit!
	<self.card>
		<div.khmer> "ព្រោះ"
		<div.phonetic> "p̣ṛuạḥ"
		<.switch-wrapper @click.toggleLearned>
			<.switch .learned=learned> "learned"
tag RightBar
	css self
		flb:1rightbar
		d:vflex g:1sp
	<self>
		
		# <rightbar-graduated-students>
		# <rightbar-top-students>