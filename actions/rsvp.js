import serializedRSVPForm from '../utils/rsvpSubmit'
import fetch from 'isomorphic-fetch'
const url = 'https://script.google.com/macros/s/AKfycbwPOXWkiSb6EGjS6FiBIUYWhsMqkBq9rFOcrjzHi0_3kkfbfWM/exec'

export const updateRSVP = (hasRSVPd) => {
	return {
		type: 'UPDATE_RSVP',
		hasRSVPd
	}
}

const reqPost = () => {
	return {
		type: 'START_FETCH'
	}
}

const receivePost = () => {
	return {
		type: 'END_FETCH'
	}
}


export const submitRSVP = (e, hasRSVPd) => {
	e.preventDefault()
	return (dispatch, getState) => {
		const data = serializedRSVPForm(e)
		dispatch(reqPost())
		fetch(url, {
			method: 'POST',
			body: data
		})
		.then( (res) => res.json())
		.then( (json) => {
			console.log('RECEIVED')
			if( json.result === 'success'){
				dispatch(receivePost())
				dispatch(animationStart())
				window.setTimeout( () => {
					dispatch(updateRSVP(hasRSVPd))
				}, 1500)
			} else {
				dispatch(receivePost())
				dispatch(animationStop())
				dispatch(handleError('Something went wrong! Please try again.'))
				window.setTimeout( () => {
					dispatch(clearErrors())
				}, 3000)
			}
		})
	}
}

const handleError = (errMsg) => {
	return {
		type: 'HANDLE_ERROR',
		errMsg
	}
}

const clearErrors = () => {
	return {
		type: 'CLEAR_ERRORS'
	}
}

export const switchRSVPStatus = (e, hasRSVPd) => {
	e.preventDefault()
	return (dispatch, getState) => {
		dispatch(animationStart())
		window.setTimeout( () => {
			dispatch(updateRSVP(hasRSVPd))
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