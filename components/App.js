import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import Landing from './Landing'
import Timeline from './Timeline'
import Rsvp from './Rsvp'
import Footer from './Footer'

import DevTools from './DevTools'

const App = ({ dispatch }) => (
	<div>
		<LocaleSwitcher dispatch={dispatch}/>
		<Landing />
		<Timeline />
		<Rsvp />
		<Footer />
	</div>
)
		// {__DEVTOOLS__ &&
		// 	<DevTools />}

export default App