import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import Landing from './Landing'
import Announcement from './Announcement'
import Timeline from './Timeline'
import TimelineEntry from './TimelineEntry'
import Rsvp from './Rsvp'
import Footer from './Footer'
import { defineMessages, FormattedMessage } from 'react-intl'
import DevTools from './DevTools'

const App = ({ dispatch }) => (
	<div>
		<LocaleSwitcher dispatch={dispatch}/>
		<Landing />
		<Timeline />
		<Announcement />
		<Rsvp />
		<Footer />
	</div>
)
		// {__DEVTOOLS__ &&
		// 	<DevTools />}

export default App