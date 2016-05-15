import React from 'react'
import { render } from 'react-dom'
import './style/thanks.less'

const Thanks = () => (
	<div id="thanks">
		<h1>Thank you so much!</h1>
		<h3>We hope to see you at our wedding!</h3>
		<hr />
		<h1>¡Muchísimas gracias!</h1>
		<h3>¡Esperamos a verte en nuestra boda!</h3>
	</div>
)

render(
	<Thanks />,
	document.getElementById('thanks-root')
)