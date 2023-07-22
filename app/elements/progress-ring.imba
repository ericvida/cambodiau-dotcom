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
		$progress-color: hue2 @darkmode:hue7
		$progress-bg: gray1 @darkmode:gray8
		$text-color: gray5 @darkmode:gray4
		$center-color: gray1 @darkmode:gray8
		&.active
			$progress-color: hue4 @darkmode:hue6
			$progress-bg: hue2 @darkmode:hue7
			$center-color: hue2 @darkmode:hue8
		# @hover
		# 	$progress-bg:gray2 @darkmode:gray7
		# 	$progress-color: hue3 @darkmode:hue5
		# 	$center-color:gray2 @darkmode: gray7
		$stroke-percent: 70%
		# pos:absolute
	css &.disabled o:30%
	css .circular
		size:$size
		bg:none
		pos:relative
		zi:10
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
				tween: rotation 1dur ease-in-out
				# clip: rect(0px, 100px, 100px, 50px) # TODO ERIC: These numbers must be dynamic
				.progress
					bg:$progress-color
					pos:absolute
					size:100%
					rd:100%
					# clip: rect(0px, 50px, 100px, 0px) # TODO ERIC: These numbers must be dynamic
			.left rotate: -180deg 
			.right zi:3

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
					css .bar 
						clip: rect(0px, {size + "px"}, {size + "px"}, {(size / 2) + "px"}) 
						transition: clip-path 1s
					css .progress 
						clip: rect(0px, {(size / 2) + "px"}, {size + "px"}, 0px) 
						transition: clip-path 1s
					<div .bar.left>
						<div .progress[rotate:{left_progress}]>
					<div .bar.right>
						<div .progress[rotate:{right_progress}]>