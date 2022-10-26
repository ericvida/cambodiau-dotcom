const localStorageKey = 'cambodiau-u-2'

let state = {
	sidebar: no
	darkmode: no
}
class DB
	local = window.localStorage
	def getData state
		return local.getItem(state)
	
	def setData state
		local.setItem(localStorageKey, state)
	
	def save
		setData(JSON.stringify(state))
		imba.commit!
		
	def load
		const dataString = getData(localStorageKey)
		if dataString
			try
				state = JSON.parse(dataString)
				console.log state
			catch
				return []
		else
			return []
		imba.commit!
	def clear keyname
		if keyname
			local.removeItem(keyname)
		else
			local.removeItem(localStorageKey)

let db = new DB
console.log db
extend tag Element
	get db
		return db
	get state
		return state