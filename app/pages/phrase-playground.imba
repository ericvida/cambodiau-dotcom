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
						bg:gray9
						h:100%
						p:1sp
						max-width:800px
						# gtc: 1fr @md: minmax(1rightbar, 3rightbar) 1rightbar
					<%phrase-image[zi:0]>
						css pos:relative
							w:100%
							aspect-ratio: 16 / 9
						<img src=phrase.image>
							css pos:absolute 
								w:100%
						<div.after>
							css inset:0
							css pos:absolute 
								aspect-ratio: 16 / 9
								bg: linear-gradient(to bottom, gray9/30 50%, gray9 100%)
					<%phrase-card.card>
						css w:100% zi:10
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
						<> "word card"
						if state.active_word
							<word-card>
							if dictionary[state.active_word]..google
								<word-definitions dictionary=dictionary>
						
