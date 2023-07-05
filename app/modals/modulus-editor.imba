tag modulus-editor
	css pos:absolute inset:0
		d:grid zi:12
		h:100vh 
		ja:center
		m:0
		.card  
			w:500px
			h:800px
			
	css h3
			fs:.8em c:gray4 m:0
	css section
			w:100%
	css input
			bg: gray1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
	css .word-group input
			max-width:100%
			min-width:0%
			width:30%
	css button.add-button
		# bd:3px solid gray2 @hover:3px solid hue2
		shadow: 0 0 0px 3px gray2 inset @hover:0 0 0px 3px hue2 inset
		rd:md
		size:1.8em
		fs:2em
		bg:none @hover:hue0
		c:gray3 @hover:hue3
		fw:bold
	css %pill-wrapper
			flex-wrap:wrap
			d:flex gap:.4sp
	css %pill
			bd:2px solid gray1
			px:.5sp
			rd:md
	css .in-dictionary
			bg:amber3
	css .in-dictionary-no-def
			bg:gray1
	css .not-in-dictionary
			bg:rose3
	css .word-group
		d:flex gap:.5sp flex-wrap:wrap
	css .definition-list
		d:vflex gap:.5sp
	css .definition-grid
		d:hgrid gap:.5sp
		# w:100%
		grid-template-columns: auto 100px 100px
	css input.definition
		flg:1
	css .use, .source
		w:100px
	css .vida-pronunciations, .ipa-pronunciations
		ff:monospace
	def closeModal
		state.closeModals!
	
	<self>
		<> console.log 'module editor'
		<.modal-bg @click.closeModal>
		<.card[d:flex zi:30]>
			<h1> "module editor"