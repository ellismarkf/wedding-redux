import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import TimelineEntry from './TimelineEntry'
import SAMap from './SAMap'

const messages = defineMessages({
	titleIntro: {
		id: 'landing.title-intro'
	},
	date: {
		id: 'dates.jul2016'
	},
	location: {
		id: 'locations.GYE'
	}
})

const Announcement = () => (
	<section id="announcement">
		<h1>They're getting married again!</h1>
		<h3>(&nbsp;This time in the church. And you're invited!&nbsp;)</h3>
		<SAMap />
	</section>
)

export default Announcement