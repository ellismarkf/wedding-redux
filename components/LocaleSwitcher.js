import React from 'react'
import { localeSwitch } from '../actions/locale'

const LocaleSwitcher = ({ dispatch }) => (
	<div>
		<button onClick={ () => dispatch(localeSwitch('en')) }>en</button>
		<button onClick={ () => dispatch(localeSwitch('es')) }>es</button>
	</div>
)

export default LocaleSwitcher