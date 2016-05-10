import React from 'react'
import DonateButton from './DonateButton'
import { resetRSVP } from '../actions/rsvp'

const ThankYouInsert = ({ hasRSVPd, animating, dispatch }) => {
	let rsvpClass
	if (hasRSVPd && animating) {
		rsvpClass = 'form-active slideOutDown'
	} else if (hasRSVPd) {
		rsvpClass = 'form-active'
	} else if (!hasRSVPd) {
		rsvpClass = 'form-inactive'
	}
	console.log(rsvpClass)
	return (
		<div className={rsvpClass}>
			<div className='insert'>
				<h3>We can't wait to celebrate with you!</h3>
				<hr />
				<p>If you elected to receive information about hotels, you'll be getting an email after we secure the group rate.</p>
				<hr />
				<p>Finally, your presence at our wedding is gift enough, but we will gratefully accept contributions to our honeymoon fund, should you kindly wish to help us on our way.</p>
				<hr />
				<DonateButton />
				<button className='reset' onClick={ (e) => dispatch(resetRSVP(e)) }>Switch to RSVP form.</button>
			</div>
		</div>
	)
}

export default ThankYouInsert