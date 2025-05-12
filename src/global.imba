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
import './global/Store.imba' # Initializes and sets global.STORE

# Initialize Store first, before any other components

global.LL = console.log
global.WW = console.warn
global.EE = console.error

import {DataAPI} from './global/DataAPI.imba'
import {bible_collection} from "./global/_raw_data/bible_collection.imba"
import {LibraryProcessor} from './global/LibraryProcessor.imba'
import {ProgressProcessor} from './global/ProgressProcessor.imba'


global.AUDIO = audio
global.IMAGES = image_references
global.DATA = new DataAPI
global.LIBRARY = new LibraryProcessor [bible_collection]
global.PROGRESS = new ProgressProcessor LIBRARY
global.FUZZY = new Fuzzy
global.PH = PH
