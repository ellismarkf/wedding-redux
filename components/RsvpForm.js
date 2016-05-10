import React from 'react'
import DonateButton from './DonateButton'
import { submitRSVP } from '../actions/rsvp'

const RsvpForm = ({ dispatch, hasRSVPd, animating }) => {
	let rsvpClass
	if (!hasRSVPd && animating) {
		rsvpClass = 'form-active slideOutDown'
	} else if (!hasRSVPd) {
		rsvpClass = 'form-active'
	} else if (hasRSVPd) {
		rsvpClass = 'form-inactive'
	}
	return (
		<div className={rsvpClass}>
			<div className='insert'>
				<h3>Join Us!</h3>
				<form acceptCharset='utf-8' encType='multipart/form-data' name='rsvp' onSubmit={ (e) => dispatch(submitRSVP(true, e))}>
					<hr />
					<input type='text' name='name' placeholder='Full Name / Nombre'></input>
					<hr />
					<input type='text' name='email' placeholder='Email / Correo Electronico'></input>
					<hr />
					<p>Will you be celebrating with us?</p>
					<input type='radio' name='rsvp' value='true'></input><span className='stressed-answer'>Can't Wait!</span>
					<input type='radio' name='rsvp' value='false'></input>I'll be there in spirit!
					<hr />
					<p>Are you bringing a guest?</p>
					<input type='radio' name='plus_one' value='true'></input><span className='stressed-answer'>Yes</span>
					<input type='radio' name='plus_one' value='false'></input>No
					<hr />
					<p>We're trying to secure hotel group rates.  Interested?</p>
					<input type='radio' name='needs_hotel_info' value='true'></input><span className='stressed-answer'>Yes</span>
					<input type='radio' name='needs_hotel_info' value='false'></input>No
					<hr />
					<button type='submit'>RSVP</button>
				</form>
				<button className='skip'>Already RSVP'd? Click here to help us with our honeymoon plans!</button>
			</div>
		</div>
	)
}

export default RsvpForm