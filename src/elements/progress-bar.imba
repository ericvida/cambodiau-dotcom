tag progress-bar
	css w:100%
		hue:gray
		$bg:gray2 ..dark:gray6
		$fg:hue4 ..dark:hue4
	css .progress-bg
		h:10px w:100% rd:full pos:relative zi:0 of:hidden d:hflex
		bg:$bg
	css .progress-fg
		h:10px zi:10 flb:0%
		bg:$fg
	def render
		<self>
			let split_progress = progress.split('/')
			let progress_percent = (split_progress[0] / split_progress[1] * 100)
			<.progress-bg>
				<.progress-fg[flb:{progress_percent+"%"}]>