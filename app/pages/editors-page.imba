import { collection, doc, setDoc } from "firebase/firestore"
import { COURSES_COLLECTION, LESSONS_SUBCOLLECTION } from '../data/Course'
import { db } from '../state/firebase'

tag editors-page
	prop active_editor = "json"
	def hideEditor
		state.hideEditor!
		imba.commit!
	def saveChanges
		LOG "save changes"
	<self[w:100%] ease>
		css o@off:0%
			tween: all .5s
			pos:fixed
			bg:black/10
			inset:0
			of:auto
			zi:30
		<%modal-nav>
			<h1>
			css d:hflex
				gap:1sp
				jc:end
				button bg:gray0 px:1sp py:.5sp rd:md 
					bxs:md
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
			<button @click.hideEditor> "close"
		css width: $max-content-width
			mx: auto
			p:1sp
		switch active_editor
			when "json"
				<h2> "Entire Module Data"
				<textarea placeholder="json">
					css padding:1sp bg:gray1
						w:100%
						h:300px
						bxs:md
			when "course"
				<course-editor>
			when "lesson"
				<lesson-editor>
			when "phrase"
				<lesson-editor>
			when "word"
				<word-editor>