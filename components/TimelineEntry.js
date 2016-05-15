import React from 'react'
import { FormattedMessage } from 'react-intl'

const TimelineEntry = ({ mark, lisy, location, date, img, invite }) => {
	const entryType = img || invite ? 'timeline-entry-img' : 'timeline-entry'
	const entryClass = mark && lisy ? entryType + ' double' : entryType
	return (
		<div>
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
			{img &&
				<div className='img-container'>
					<img src={img}/>
				</div>}
			{invite &&
				<h3><FormattedMessage {...invite} /></h3>}
		</div>
	)
}

export default TimelineEntry