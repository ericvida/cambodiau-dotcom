import 'imba/preflight.css'
import '../ENV.imba'
import './global/styles.imba'
import './global/elements/index.imba'
import './global/components/index.imba'
import './global/icons/index.imba'
global.LL = console.log
global.WW = console.warn
global.EE = console.error


import {audio} from './global/_raw_data/audio_references.imba'
global.AUDIO = audio

import {image_references} from './global/_raw_data/image_references.imba'
global.IMAGES = image_references

import {State} from './global/State.imba'
global.STATE = new State

import {bible_collection} from "./global/_raw_data/bible_collection.imba"
import {LibraryProcessor} from './global/LibraryProcessor.imba'
global.LIBRARY = new LibraryProcessor [bible_collection]

import {ProgressProcessor} from './global/ProgressProcessor.imba'
global.PROGRESS = new ProgressProcessor LIBRARY

import {DataAPI} from './global/DataAPI.imba'
global.DATA = new DataAPI

import Fuzzy from './global/FuzzySearch.imba' # for fitting text in WordCard
global.FUZZY = new Fuzzy

import * as PH from 'imba-phosphor-icons'
global.PH = PH
