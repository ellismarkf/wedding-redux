import React from 'react'
import { FormattedMessage } from 'react-intl'

const MajorEventEntry = ({ message }) =>  {
	return (
		<div className="major-event-entry">
			<FormattedMessage {...message}>
				{ ( value ) => {
					const firstLetter = value[0]
					const rest = value.substr(1)
					return (
						<h2><strong>{firstLetter}</strong>{rest}</h2>	
					)	
				}}
			</FormattedMessage>
		</div>
	)
}

export default MajorEventEntry