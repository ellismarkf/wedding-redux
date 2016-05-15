import React from 'react'
import { localeSwitch } from '../actions/locale'

const LocaleSwitcher = ({ dispatch }) => (
	<div className='locale-switcher'>
		<button onClick={ () => dispatch(localeSwitch('en')) }>
			<img src={require('../assets/us.svg')} />
		</button>
		<button onClick={ () => dispatch(localeSwitch('es')) }>
			<img src={require('../assets/es.svg')} />
		</button>
	</div>
)

export default LocaleSwitcher