Object.assign = require('object-assign')

const initialState = {
	hasRSVPd: false,
	animating: false,
	isFetching: false,
	errMsg: null
}
const rsvp = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_RSVP':
			return Object.assign({}, state, {
				hasRSVPd: action.hasRSVPd,
				animating: false
			})
		case 'START_ANIMATION':
			return Object.assign({}, state, {
				animating: true
			})
		case 'STOP_ANIMATION':
			return Object.assign({}, state, {
				animating: false
			})
		case 'START_FETCH':
			return Object.assign({}, state, {
				isFetching: true
			})
		case 'END_FETCH':
		 	return Object.assign({}, state, {
		 		isFetching: false
		 	})
		case 'HANDLE_ERROR':
			return Object.assign({}, state, {
				errMsg: action.errMsg
			})
		case 'CLEAR_ERRORS':
			return Object.assign({}, state, {
				errMsg: null
			})
		default:
			return state
	}
}

export default rsvp