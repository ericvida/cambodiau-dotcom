let mock-module-data = {
	title: "Bible Stories"
	slug: "bible-stories"
	price: "20"
	info: "Learn spiritual vocabulary with Bible Stories"
	lessons: [
		title: "The Creation"
		---
		title: "The Fall"
		---
		title: "The Flood"
		---
		title: "The Tower of Babel"
	]
}
tag modulus-editor
	# transition
	css self
		o@off:0 ea:1s
		.card
			x@in:100px x@out:100px ea:1s
	css pos:absolute inset:0
		d:grid zi:12
		h:100vh 
		ja:center
		m:0
		.card  
			w:500px
			min-height:500px
			
			
	css h3
			fs:.8em c:gray4 m:0
	css input
			bg: gray0 @focus:hue1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
			w:100%
	def closeModal
		state.closeModals!
	
	<self ease>
		<.modal-bg @click.closeModal>
		<.card[d:flex zi:30]>
			<h1> "module editor"
			<section>
				<h3> "Module Title"
				<input bind=mock-module-data.title type="text">
			<section>
				<h3> "Module slug"
				<input bind=mock-module-data.slug type="text">
			<section>
				<h3> "Module Info"
				<input bind=mock-module-data.info type="text">
			<section>
				<h3> "Price in USD"
				<input bind=mock-module-data.price type="text">
			<section>
				<h3> "Lessons"
				<[d:vflex gap:1sp]>
						for item in mock-module-data.lessons
							<.lesson-row[d:hflex gap:1sp ja:center]>
								<p[w:100%]> item.title
								<button[bg:gray1 @hover:hue2 rd:md h:50px w:100px]> "edit"
								<[d:vflex gap:10px]>
									<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👆" # move up
									<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👇" # move down
			<section[flex-grow:1]>
			<section[w:100% d:flex jc:end]>
				<button[w:200px p:.5sp ta:center as:end rd:md]> "save"
					css bg:gray1 @hover:hue2
				