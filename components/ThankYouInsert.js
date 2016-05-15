import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import DonateButton from './DonateButton'
import { switchRSVPStatus } from '../actions/rsvp'

const messages = defineMessages({
	title: {
		id: 'confirmed.title'
	},
	hotel: {
		id: 'confirmed.hotel'
	},
	help: {
		id: 'confirmed.help'
	},
	switchForm: {
		id: 'confirmed.switch'
	}
})

const ThankYouInsert = ({ hasRSVPd, animating, dispatch }) => {
	let rsvpClass
	if (hasRSVPd && animating) {
		rsvpClass = 'form-active slideOutDown'
	} else if (hasRSVPd) {
		rsvpClass = 'form-active'
	} else if (!hasRSVPd) {
		rsvpClass = 'form-inactive'
	}
	const { title, hotel, help, switchForm } = messages
	return (
		<div className={rsvpClass}>
			<div className='insert confirmation'>
				<h3><FormattedMessage {...title}/></h3>
				<hr />
				<p><FormattedMessage {...hotel}/></p>
				<hr />
				<p><FormattedMessage {...help}/></p>
				<hr />
				<DonateButton />
				<button className='reset' onClick={ (e) => dispatch(switchRSVPStatus(e, false)) }><FormattedMessage {...switchForm}/></button>
			</div>
		</div>
	)
}

export default ThankYouInsert