
class Note
	enabled = true
	def log message
		if enabled
			console.log message
	def red message
		if enabled
			color = "tomato"
			console.log("%c{message} (notered)", "color:{color}")
	def gray message
		if enabled
			color = "#c9c9c9"
			console.log("%c{message} (notegray)", "color:{color}")
	def green message
		if enabled
			color = "green"
			console.log("%c{message} (notegreen)", "color:{color}")
	def yellow value
		if enabled
			color = "amber"
			console.log("%c{message} (noteyellow)", "color:{color}")
	def black value
		if enabled
			color = "black"
			console.log("%c{message} (noteblack)", "color:{color}")
global.NOTE = new Note true
NOTE.gray ['hello', 'world']
import '../ENV.imba'
import 'imba/preflight.css'
import './global/styles.imba'
import './global/elements/index.imba'
import './global/components/index.imba'
import './global/icons/index.imba'
import {audio} from './global/_raw_data/audio_references.imba'
import {image_references} from './global/_raw_data/image_references.imba'
import Fuzzy from './global/FuzzySearch.imba' # for fitting text in WordCard
import * as PH from 'imba-phosphor-icons'

# Initialize Store first, before any other components

global.LL = console.log
global.WW = console.warn
global.EE = console.error

import {StateManager} from './global/StateManager.imba' # Initializes and sets global.STATE_MANAGER
import {UiManager} from './global/UiManager.imba'
import {bible_collection} from "./global/_raw_data/bible_collection.imba"
import {LibraryProcessor} from './global/LibraryProcessor.imba'
import {ProgressProcessor} from './global/ProgressProcessor.imba'

global.AUDIO = audio
global.IMAGES = image_references
global.STATE_MANAGER = new StateManager
global.UI = new UiManager
global.LIBRARY = new LibraryProcessor [bible_collection]
global.PROGRESS = new ProgressProcessor LIBRARY
global.FUZZY = new Fuzzy
global.PH = PH
