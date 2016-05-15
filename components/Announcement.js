import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import TimelineEntry from './TimelineEntry'
import SAMap from './SAMap'

const messages = defineMessages({
	teaser: {
		id: 'announcement.teaser'
	},
	title: {
		id: 'announcement.title'
	},
	subtitle: {
		id: 'announcement.subtitle'
	}
})

const Announcement = () => (
	<section id="announcement">
		<h1><FormattedMessage {...messages.title} /></h1>
		<h3>(&nbsp;<FormattedMessage {...messages.subtitle} />&nbsp;)</h3>
		<SAMap />
	</section>
)

export default Announcement