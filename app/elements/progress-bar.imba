# ELEMENT[epic=ELEMENT, seq=41] Progress Bar
tag progress-bar
	css w:100%
		$bg:gray2
		$fg:hue4
		@darkmode
			$bg:gray8
			$fg:hue6
	css .progress-bg
		h:10px w:100% rd:full pos:relative zi:0 of:hidden d:hflex
		bg:$bg
	css .progress-fg
		h:10px zi:10 flb:0%
		tween:all 1dur ease-in-out
		bg:$fg
	def render
		<self>
			# let split_progress = progress.split('/')
			# let progress_percent = (split_progress[0] / split_progress[1] * 100)
			<.progress-bg>
				<.progress-fg[flb:{progress+"%"}]>
