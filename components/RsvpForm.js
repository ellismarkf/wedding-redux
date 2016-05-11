import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import DonateButton from './DonateButton'
import { submitRSVP, switchRSVPStatus } from '../actions/rsvp'
const messages = defineMessages({
	title: {
		id: 'form.title'
	},
	attendingQ: {
		id: 'form.attendingQ'
	},
	attendingRA: {
		id: 'form.attendingRA'
	},
	attendingRN: {
		id: 'form.attendingRN'
	},
	guestQ: {
		id: 'form.guestQ'
	},
	hotelQ: {
		id: 'form.hotelQ'
	},
	affirmative: {
		id: 'form.affirmative'
	},
	negative: {
		id: 'form.negative'
	},
	donateHint: {
		id: 'form.donateHint'
	}
})

const RsvpForm = ({ dispatch, hasRSVPd, animating, isFetching, errMsg }) => {
	let rsvpClass
	if (!hasRSVPd && animating) {
		rsvpClass = 'form-active slideOutDown'
	} else if (!hasRSVPd) {
		rsvpClass = 'form-active'
	} else if (hasRSVPd) {
		rsvpClass = 'form-inactive'
	}
	const { title, attendingQ, attendingRA,
			attendingRN, guestQ, hotelQ,
			affirmative, negative, donateHint } = messages
	return (
		<div className={rsvpClass}>
			<div className={ isFetching ? 'insert disabled' : 'insert'}>
				<h3><FormattedMessage {...title}/></h3>
				<form acceptCharset='utf-8' encType='multipart/form-data' name='rsvp' onSubmit={ (e) => dispatch(submitRSVP(e, true))}>
					<hr />
					<input type='text' name='name' placeholder='Full Name / Nombre' maxLength='50' disabled={isFetching}></input>
					<hr />
					<input type='text' name='email' placeholder='Email / Correo Electronico' disabled={isFetching}></input>
					<hr />
					<p><FormattedMessage {...attendingQ}/></p>
					<input type='radio' name='rsvp' value='true' disabled={isFetching}></input>
					<span className='stressed-answer'><FormattedMessage {...attendingRA}/></span>
					<input type='radio' name='rsvp' value='false' disabled={isFetching}></input>
					<FormattedMessage {...attendingRN}/>
					<hr />
					<p><FormattedMessage {...guestQ}/></p>
					<input type='radio' name='plus_one' value='true' disabled={isFetching}></input>
					<span className='stressed-answer'><FormattedMessage {...affirmative}/></span>
					<input type='radio' name='plus_one' value='false' disabled={isFetching}></input>
					<FormattedMessage {...negative}/>
					<hr />
					<p><FormattedMessage {...hotelQ}/></p>
					<input type='radio' name='needs_hotel_info' value='true' disabled={isFetching}></input>
					<span className='stressed-answer'><FormattedMessage {...affirmative}/></span>
					<input type='radio' name='needs_hotel_info' value='false' disabled={isFetching}></input>
					<FormattedMessage {...negative}/>
					<hr />
					<button type='submit' disabled={isFetching}>RSVP</button>
				</form>
				<button className='skip' onClick={ (e) => dispatch(switchRSVPStatus(e, true)) }>
					<FormattedMessage {...donateHint}/>
				</button>
				{errMsg &&
					<p className='error-msg'>{errMsg}</p>}
			</div>
		</div>
	)
}

export default RsvpForm