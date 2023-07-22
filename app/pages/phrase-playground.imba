import '../state/index'
import {audio} from '../audio'
import {dictionary} from '../data/dictionary'
import {clusters} from '../data/clusters'

# LAYOUT[epic=LAYOUT, seq=23] phrase-playground
tag phrase-playground
	prop course = {}

	def render
		<self>
			if course.lessons
				let phrase = course.lessons[state.lesson]..phrases[state.phrase]
				# TODO: Make background image dynamic
				<main.course-grid>
					css d:vflex g:1sp
						bg:gray1
						rdtl:xl
						h:100%
						pos:relative
						# gtc: 1fr @md: minmax(1rightbar, 3rightbar) 1rightbar
					<sidebar-toggle route="/course">
						css pos:absolute
							l: 0sp
							zi:10
					<%phrase-image[zi:0]>
						css pos:relative
							aspect-ratio: 16 / 9
							rd:xl
							of:hidden
							width:100%
						<img src=phrase.image>
							css pos:absolute 
								w:100%
						<div%image-bottom-fade>
							css w:100%
							css inset:0
							css pos:absolute 
								aspect-ratio: 16 / 9
								bg: linear-gradient(to bottom, gray1/30 65%, gray1 100%)
					<%phrase-card.card>
						css w:90% zi:10
							mx:auto
							mt:-70px
						<phrase-meaning 
							phrase=phrase>
						<phrase-khmer @click.commit 
							course=course 
							phrase=phrase 
							rt=route 
							dictionary=dictionary>
						<phrase-phonetics 
							phrase=phrase 
							dictionary=dictionary>
					<%word-info-card.card>
						css w:90% mx:auto
						<> "word card"
						if state.active_word
							<word-card>
							# if dictionary[state.active_word]..google
							<word-definitions dictionary=dictionary>
						
