tag audio-player-for-bar
	def render
		console.log(audio[word])
		<self>
			# if state.modulus > 0
			let word = ""
			if manual
				word = manual
			else
				word = state.active_word
			<audio$track2 @ended.commit src=audio[word] type="audio/mpeg" preload="metadata">
			
			<.button-wrapper[d:hflex ai:center]>
				if $track2.paused # when paused
					<div .play-audio[w:2em cursor:pointer] @hotkey('space|a') @click=$track2.play> 
						<svg[size:24px] stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
							<path[stroke:indigo6 fill:indigo6]  d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				
				else # when playing
					<div .play-audio[w:2em cursor:pointer] @hotkey('space') @click=$track2.pause> 
						<svg[size:24px] stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000" viewBox="0 0 24 24">
							<path[stroke:indigo6 fill:indigo2] d="M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6z"/>
						# <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						# 	<path[stroke:indigo6 fill:indigo2] d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						# 	<path[stroke:indigo6 fill:indigo6] d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />