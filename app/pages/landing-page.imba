# TAG[epic=PAGE, seq=1] LandingPage
tag landing-page
	css self
		gap:1sp
	css h1
		mt:1sp fs:2xl
	css .button
		bg:gray2 @darkmode:gray7
		c:gray7	@darkmode:gray2
		p:1sp rd:md
	<self[mx:auto d:vflex ai:center]>
		<div[p:1sp bg:rose0 bd:2px solid rose3 rd:md m:1sp]> "Design of Landing Page will be improved soon. This a quick implementation."
		<h1 [ta:center]> "How to use CambodiaU"
		<iframe width="560" height="315" src="https://www.youtube.com/embed/20dpm0bNjIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
		<button.button route-to="/store"> "Purchase Modules"
