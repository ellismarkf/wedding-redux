import { combineReducers } from 'redux'
import locale from './locale'
import rsvp from './rsvp'

const weddingApp = combineReducers({
	locale,
	rsvp
})

export default weddingApp