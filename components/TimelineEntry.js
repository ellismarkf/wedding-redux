import React from 'react'
import { FormattedMessage } from 'react-intl'

const TimelineEntry = ({ mark, lisy, location, date }) => {
	const entryClass = !mark && !lisy ? 'timeline-entry-img' : 'timeline-entry'
	return (
		<div className={entryClass}>
			{lisy &&
				<div className="story-content lisy">
					<p><FormattedMessage {...lisy} /></p>
				</div>}
			<div className="date">
				<h2><FormattedMessage {...location} /></h2>
				<h3><FormattedMessage {...date} /></h3>
			</div>
			{mark &&
				<div className="story-content mark">
					<p><FormattedMessage {...mark} /></p>
				</div>}
		</div>
	)
}

export default TimelineEntry