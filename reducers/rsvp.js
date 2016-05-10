Object.assign = require('object-assign')

const initialState = {
	hasRSVPd: false,
	animating: false
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
		default:
			return state
	}
}

export default rsvp