import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

tag editors-modal
	css pos:fixed inset:0
		max-height:100vh
		max-width:100vw
		d:grid zi:12
		ja:center
		o@off:0 ea:1s
		of:hidden
		pointer-events:none
		.modal-bg
			pointer-events:auto
			bg:black
			pos:fixed
			top:0
			l:0
			w:100%
			h:100%
			zi:10
			o:80%
			of:hidden
			cursor:pointer
		.card
			x@in:100px
			x@out:100px 
			ea:1s
			d:flex
			zi:30
			ofy:scroll
			inset:6sp
			ofy:scroll
			pointer-events:auto
		.close
			r:1sp t:1sp
			bg:white @hover:gray4
			cursor:pointer
			rd:xl
			size:2sp
			d:box
			pos:absolute
		>>> h3
			fs:.8em
			c:gray4
			m:0
		>>> input
			bg: gray0 @focus:hue1
			shadow: 0 0 5px 0px gray2 inset
			rd:md
			p:1sp m:0
			w:100%
		>>> .save
			bg:white
			min-width:6sp h:2.5sp
			d:box
			px:1sp
			pos:absolute
			b:3sp r:6sp
			rd:md
	prop active_editor = "json"
	
	def hideEditor
		state.hideEditor!
	def saveChanges
		LOG "save changes"
	def render
		<self ease>
			<.modal-bg @click.hideEditor>
				<.save > "save course"
				<.close @click.hideEditor> "X"
			<.card>
				<%modal-nav>
					css d:hflex
						gap:1sp
						jc:end
						button bg:gray2 px:1sp py:.5sp rd:md 
					switch active_editor
						when "json"
							<button> "save json"
						when "module"
							<button> "save module"
						when "course"
							<button> "save course"
						when "lesson"
							<button> "save lesson"
						when "phrase"
							<button> "save phrase"
						when "word"
							<button> "save word"
				switch active_editor
					when "json"
						<textarea placeholder="json">
							css padding:1sp bg:gray1
					when "course"
						<course-editor>
					when "lesson"
						<lesson-editor>
					when "phrase"
						<lesson-editor>
					when "word"
						<word-editor>