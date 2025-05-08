import {bible_collection} from "../data_input/bible_collection.imba"
import {image_references} from '../data_input/image_references.imba'
import {LibraryProcessor} from './LibraryProcessor.imba'
import {ProgressProcessor} from './ProgressProcessor.imba'
import {DataAPI} from './DataAPI.imba'
global.LL = console.log
global.WW = console.warn
global.EE = console.error
global.COLLECTIONS = [bible_collection]
global.IMAGES = image_references
global.LIBRARY = new LibraryProcessor COLLECTIONS
global.PROG = new ProgressProcessor LIBRARY
global.DATA = new DataAPI