let mock-lesson-data = {
	title: "The Creation"
	slug: "the-creation"
	order: 1
	image-cover: "1"
	phrases: [
		meaning: "1st Story, The Creation"
		---
		meaning: "This is how God made everything in the beginning. He created the universe and everything in it in six days. After God created the earth it was dark and empty, because he had not yet formed anything in it. But God's Spirit was there over the water."
		---
		meaning: "Then God said, “Let there be light!” And there was light. God saw that the light was good and called it “day.” He separated it from the darkness, which he called “night.” God created the light on the first day of creation."
		---
		meaning: "On the second day of creation, God said: “Let there be an expanse above the waters.” And there was an expanse. God called this expanse \“sky.\”"
	]
}
tag lesson-editor
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
			h:800px
			
	css h3
			fs:.8em c:gray4 m:0
	css input
			bg: gray1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
			w:100%
	def closeModal
		state.closeModals!
	<self ease>
		<.modal-bg @click.closeModal>
		<.card[d:flex zi:30]>
			<h1> "module name > lesson name"
			<section>
				<h3> "Lesson Title"
				<input bind=mock-lesson-data.title type="text">
			<section>
				<h3> "Lesson Slug"
				<input bind=mock-lesson-data.slug type="text">
			<section>
				<h3> "Phrases"
				<[d:vflex gap:1sp]>
					for item, i in mock-lesson-data.phrases
						<.lesson-row[d:hflex gap:1sp ja:center]>
							<p[overflow:hidden h:20px]> i+1, ". {item.meaning}"
								css white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									w:100%
							<button[bg:gray1 @hover:hue2 rd:md px:1sp h:50px w:100px]> "edit"
							<[d:vflex gap:10px]>
									<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👆" # move up
									<button[h:20px fs:10px fs:20px filter:grayscale(100%) filter@hover:grayscale(0%)]> "👇" # move down
			<section[flex-grow:1]>
			<section[w:100% d:flex jc:end]>
				<button[w:200px p:.5sp ta:center as:end rd:md]> "save"
					css bg:gray1 @hover:hue2