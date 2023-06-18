# set server address here. It should NOT end with a /
const serverAddress = 'http://api.cambodiau.com'

# CLASS[epic=CLASS, seq=12] Remote API
class RemoteAPI
	# API[epic=Remote, seq=13] callAPI
	# wrapper to call API
	def callAPI method, endpoint, data, token
		# let url = serverAddress + endpoint
		let body = data ? JSON.stringify(data) : null
		let headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}

		if token 
			headers.Authorization = 'Bearer ' + token

		let res = await fetch(url, {
			method,
			headers,
			body
		})

		return await res.json()

	# API[epic=Remote, seq=14] register API call
	def register name, email, username, password
		let body = {
			name,
			email,
			username,
			password
		}
		let res = await callAPI 'POST', '/api/register', body

		if res.status === 201
			return true
		else
			LOG(res)
	
	# API[epic=Remote, seq=15] login API call
	def login email, password
		let body = {
			email,
			password
			}

		let res = await callAPI 'POST', '/api/login', body

		if res.status = 200
			return res.token
		else
			LOG(res)

	# API[epic=Remote, seq=16] logout API call
	def logout token
		await callAPI 'GET', '/api/logout', null, token

	# API[epic=Remote, seq=17] get user API call
	def getUser token
		let res = await callAPI 'GET', '/api/user', null, token

		if res.status == 200
			return res.user
		else
			LOG(res)


	# API[epic=Remote, seq=18] sample use
	def doStuff
		let name = 'qq'
		let email = 'aa@bb.ccd'
		let username = 'sdflask'
		let password = 'dlfkasdlkfjsflkj##lkj'

		register(name, email, username, password)

		# save token somewhere on local storage because it'll be needed for future calls
		let token = login(email, password)

		# get user data
		let user = getUser(token)
		LOG(user)

		# on logout clear token from local storage
		logout(token)

let remote = new RemoteAPI

export default remote
