let chart_consonants = [
	kh: "ក"
	sub: "្ក"
	group: 1
	---
	kh: "ខ"
	sub: "្ខ"
	group: 1
	---
	kh: "ង៉"
	sub: ""
	group: 3
	---
	kh: "គ"
	sub: "្គ"
	group: 2
	---
	kh: "ឃ"
	sub: "្ឃ"
	group: 2
	---
	kh: "ង"
	sub: "្ង"
	group: 2
	---
	kh: "ច"
	sub: "្ច"
	group: 1
	---
	kh: "ឆ"
	sub: "្ឆ"
	group: 1
	---
	kh: "ញ៉"
	sub: ""
	group: 3
	---
	kh: "ជ"
	sub: "្ជ"
	group: 2
	---
	kh: "ឈ"
	sub: "្ឈ"
	group: 2
	---
	kh: "ញ"
	sub: "្ញ"
	group: 2
	---
	kh: "ប៉"
	sub: ""
	group: 3
	---
	kh: "ផ"
	sub: "្ឋ"
	group: 1
	---
	kh: "ម៉"
	sub: ""
	group: 3
	---
	kh: "ព"
	sub: "្ឌ"
	group: 2
	---
	kh: "ភ"
	sub: "្ឍ"
	group: 2
	---
	kh: "ម"
	sub: "្យ"
	group: 2
	---
	kh: "ដ"
	sub: "្ដ"
	group: 1
	---
	kh: "ឋ"
	sub: "្ឋ"
	group: 1
	---
	kh: "យ៉"
	sub: ""
	group: 3
	---
	kh: "ឌ"
	sub: "្ឌ"
	group: 2
	---
	kh: "ឍ"
	sub: "្ឍ"
	group: 2
	---
	kh: "យ"
	sub: "្យ"
	group: 2
	---
	kh: "ត"
	sub: "្ត"
	group: 1
	---
	kh: "ថ"
	sub: "្ថ"
	group: 1
	---
	kh: "រ៉"
	sub: ""
	group: 3
	---
	kh: "ទ"
	sub: "្ទ"
	group: 2
	---
	kh: "ធ"
	sub: "្ធ"
	group: 2
	---
	kh: "រ"
	sub: "្រ"
	group: 2
	---
	kh: "ណ"
	sub: "្ណ"
	group: 1
	---
	kh: "ឡ"
	sub: "្ឡ"
	group: 1
	---
	kh: "វ៉"
	sub: ""
	group: 3
	---
	kh: "ន"
	sub: "0្ន"
	group: 2
	---
	kh: "ល"
	sub: "្ល"
	group: 2
	---
	kh: "វ"
	sub: "្វ"
	group: 2
	---
	kh: "ស"
	sub: "្ស"
	group: 1
	---
	kh: "ហ"
	sub: "្ហ"
	group: 1
	---
	kh: "ប"
	sub: "្ប"
	group: 1
	---
	kh: "អ"
	sub: "្អ"
	group: 1
	---
	kh: ""
	sub: ""
	group: 0
	---
	kh: ""
	sub: ""
	group: 0
	---
	kh: "ស៊"
	sub: ""
	group: 4
	---
	kh: "ហ៊"
	sub: ""
	group: 4
	---
	kh: "ប៊"
	sub: ""
	group: 4
	---
	kh: "អ៊"
	sub: ""
	group: 4
]

tag letters-consonants
	css header
		d:hflex g:1sp
		h2 flg:1
		.options d:flex
		
	css .option bg:gray2 @darkmode:gray8 px:1sp 
		@first rdl:1rd
		@last rdr:1rd
		
	css button.active-button
		bg:hue3 @darkmode:hue8
	
	css .letter-grid
		d:vgrid gtc: 1fr 1fr 1fr 1fr 1fr 1fr g:1sp
	css .letter
		p:1sp rd:1rd d:box s:4sp
		cursor:pointer
		o@hover:90%
	css .kh 
		ff:'Open Khmer School' fs:1xl
		fs:2xl
	css .group-0 us:none
	css .group-1
		bg:indigo2 @darkmode:indigo9
		c:indigo9 @darkmode:indigo2
	css .group-2
		bg:rose2 @darkmode:rose8
	css .group-3
		# bd:5px solid
		bg:indigo2/50 @darkmode:indigo9/50
		c:indigo9 @darkmode:indigo2
		&.sub
			bd:none
			bg:gray2 @darkmode:gray8
	css .group-4
		bg:rose2/50 @darkmode:rose9/50
		&.sub
			bd:none
			bg:gray2 @darkmode:gray8
	def selectSubscript
		ui.chart_sub = yes
		db.save!
	def selectOriginal
		ui.chart_sub = no
		db.save!
	def render
		<self.consonants.card>
			<header[d:hflex]>
				<h2> "Consonants"
				<.options>
					<button.option @click.selectOriginal .active-button=!ui.chart_sub> "Original"
					<button.option @click.selectSubscript .active-button=ui.chart_sub> "Subscript"
			<.letter-grid>
				for letter in chart_consonants
					if letter.group is 0
						<div>
					elif ui.chart_sub
						<button.letter .group-{letter.group}.sub>
							<.sub > letter.sub
					else
						<button.letter .group-{letter.group}>
							<.kh > letter.kh
				
							
