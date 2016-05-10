import rsvpSubmit from '../utils/rsvpSubmit'

export const updateRSVP = (hasRSVPd) => {
	return {
		type: 'UPDATE_RSVP',
		hasRSVPd
	}
}

export const submitRSVP = (hasRSVPd, e) => {
	e.preventDefault()
	return (dispatch, getState) => {
		dispatch(animationStart())
		window.setTimeout( () => {
			dispatch(updateRSVP(hasRSVPd))
		}, 1500)
	}
}

export const resetRSVP = (e) => {
	e.preventDefault()
	return (dispatch, getState) => {
		dispatch(animationStart())
		window.setTimeout( () => {
			dispatch(updateRSVP(false))
		}, 1500)
	}
}

export const animationStart = () => {
	return {
		type: 'START_ANIMATION'
	}
}

export const animationStop = () => {
	return {
		type: 'STOP_ANIMATION'
	}
}