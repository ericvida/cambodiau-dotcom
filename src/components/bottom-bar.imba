tag bottom-bar
	css self
		d:block c:gray9 h:1bottombar w:100% d:box
		# mt:auto # pushes to bottom of viewport if parent is vflex
	css .wrapper
		bxs:md,xl 
		bg:white ..dark:gray8
		max-width:800px
		h:1bottombar 
		d:box
		rd:full 
		min-width:200px
		d:hflex 
		g:1sp
		p:.33bottombar
	css .number-toggle 
		rd:full s:30px
		d:box 
		bg:gray1 ..dark:gray9
		c:gray5 ..dark:gray4
		pos:relative
		cursor:pointer
	def render		
		<self>
			<.wrapper>
				<.number-toggle>
					<left-chevron>
				<.number-toggle.active>
					<progress-ring progress=40 size=30> "1"
				<.number-toggle>
					<progress-ring progress=20 size=30> "2"
				<.number-toggle>
					<progress-ring progress=20 size=30> "3"
				<.number-toggle>
					<progress-ring progress=20 size=30> "4"
				<.number-toggle>
					<progress-ring progress=20 size=30> "5"
				<.number-toggle>
					<progress-ring progress=20 size=30> "6"
				<.number-toggle>
					<progress-ring progress=20 size=30> "7"
				<.number-toggle>
					<progress-ring progress=20 size=30> "8"
				<.number-toggle>
					<right-chevron>
				
tag left-chevron
	<self>
		<svg[s:20px] xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
			
tag right-chevron
	<self>
		<svg[s:20px] xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
			
tag progress-ring
	### SAMPLE TAG
	<ProgressRing[$progress-color: purple5 $progress-bg: purple1 
		$center-color: white $text-color: purple5 $stroke-percent: 80%] 
		progress=progress size=100> 
		<span> "habit"
		<span slot="subtitle"> "{progress}%"
	###
	prop size = 100
	css ta:center
		$progress-color: hue2 ..dark:hue7
		$progress-bg: gray1 ..dark:gray9
		$text-color: gray5 ..dark:gray4
		$center-color: gray1 ..dark:gray9
		@hover
			$progress-bg:gray2
			$center-color:gray2
		$stroke-percent: 70%
		pos:absolute
	css &.disabled o:30%
	css .circular
		size:$size
		bg:none
		pos:relative
		.inner
			bg:$center-color
			pos:absolute
			zi:6
			top:50%
			left:50%
			size:$stroke-percent
			y: -50%	x: -50%
			rd:full
			ja:center
		.title
			zi:10
			fs:18px
			c:$text-color
			mt:7%
		.circle
			.bar
				pos:absolute
				size:100%
				bg:$progress-bg
				rd:100%
				# clip: rect(0px, 100px, 100px, 50px) # TODO ERIC: These numbers must be dynamic
				.progress
					bg:$progress-color
					pos:absolute
					size:100%
					rd:100%
					# clip: rect(0px, 50px, 100px, 0px) # TODO ERIC: These numbers must be dynamic
			.left rotate: -180deg tween: rotation 1dur
			.right zi:3 tween: rotation 1dur
	def render
		<self>
			<div .circular[size:{size+'px'}]>
				<div .inner[d:vflex]>
					<div .title[fs:sm lh:100%]> <slot>
				<div .circle>
					let step = 180 / 50
					let left_progress = 0
					let right_progress = 0
					if progress > 50
						left_progress = "{(progress - 50) * step}deg"
						right_progress = "180deg"
					else
						left_progress = "0deg"
						right_progress = "{(progress) * step}deg"
					css .bar clip: rect(0px, {size + "px"}, {size + "px"}, {(size / 2) + "px"}) 
					css .progress clip: rect(0px, {(size / 2) + "px"}, {size + "px"}, 0px) 
					<div .bar.left>
						<div .progress[rotate:{left_progress}]>
					<div .bar.right>
						<div .progress[rotate:{right_progress}]>