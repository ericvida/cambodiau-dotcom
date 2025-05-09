export class State
	admin = true
	auth = yes
	dark = yes
	lesson_nav = yes
	phrase_nav = yes
	right_bar = yes
	pa = 'vida' # phonetic alphabet (vida/ipa)
	ipa = no # DELETE after transfering to STATE.pa
	cid = 0
	lid = 0
	pid = 0
	wid = 0
	active_word = 'ជា'
	user_learned = {}
	khmer_writing = true
	progress_flat = {} # DELETE when moved to PROG[key]
	def reset
		self.cid = 0
		self.lid = 0
		self.pid = 0
		self.wid = 0
		self.active_word = 'ជា'
		self.user_learned = {}
		self.progress_flat = {}
		self.pa = 'vida'
		self.ipa = no
		self.dark = no
		self.lesson_nav = yes
		self.phrase_nav = yes
		self.right_bar = yes
		
	def getLocal 
		if imba.locals.state
			LL imba.locals.state
			state = imba.locals.state