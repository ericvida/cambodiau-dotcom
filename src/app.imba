import './components/state.imba'
import './elements/index.imba'
import './components/index.imba'
import './icons/index.imba'
import './styles.imba'

tag app
	def build
		initDarkmode!
	
	def initDarkmode
		db.load!
		# check fo system setting
		let systemDarkmode? = window.matchMedia("(prefers-color-scheme:dark)").matches
		
		# update state of darkmode
		if state.darkmode is undefined
			if systemDarkmode?
				state.darkmode = yes
			else
				state.darkmode = no
		
		# add or remove 'dark' flag to/from html element.
		let root = document.getElementsByTagName( 'html' )[0]
		if state.darkmode 
		then root.flags.add('dark')
		else root.flags.remove('dark')
		
		db.save!
	def render
		console.log router.pathname
		<self>
			if router.pathname is "/login"
				<user-login[o@off:0% y@off:-200px ease:2dur] ease route="/login">
			<student-portal>
			# <landing-page>


imba.mount <app>, document.getElementById "app"
