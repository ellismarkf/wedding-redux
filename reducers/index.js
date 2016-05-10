import { combineReducers } from 'redux'
import locale from './locale'
import carousel from './carousel'
import rsvp from './rsvp'

const weddingApp = combineReducers({
	locale,
	carousel,
	rsvp
})

export default weddingApp