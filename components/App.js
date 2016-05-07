import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import Landing from './Landing'
import Timeline from './Timeline'
import Footer from './Footer'

import DevTools from './DevTools'

const App = ({ dispatch }) => (
	<div>
		<LocaleSwitcher dispatch={dispatch}/>
		<Landing />
		<Timeline />
		<Footer />
		{__DEVTOOLS__ &&
			<DevTools />}
	</div>
)

export default App

// import rsvpSubmit from '../utils/rsvpSubmit'
// import RsvpForm from './RsvpForm'
// import DonateForm from './DonateForm'