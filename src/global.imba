import 'imba/preflight.css'
import '../ENV.imba'
import './global/styles.imba'
import './global/elements/index.imba'
import './global/components/index.imba'
import './global/icons/index.imba'
import {bible_collection} from "./global/_raw_data/bible_collection.imba"
import {image_references} from './global/_raw_data/image_references.imba'
import {LibraryProcessor} from './global/LibraryProcessor.imba'
import {ProgressProcessor} from './global/ProgressProcessor.imba'
import {DataAPI} from './global/DataAPI.imba'

global.LL = console.log
global.WW = console.warn
global.EE = console.error
global.COLLECTION_ARRAY = [bible_collection]
global.IMAGES = image_references
global.LIBRARY = new LibraryProcessor COLLECTION_ARRAY
global.PROG = new ProgressProcessor LIBRARY
global.DATA = new DataAPI