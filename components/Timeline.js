import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import MajorEventEntry from './MajorEventEntry'
import TimelineEntry from './TimelineEntry'
import Carousel from './Carousel'

const messages = defineMessages({
	overview: {
		id: 'timeline.major-entry.overview'
	},
	firstMeeting: {
		id:'timeline.major-entry.first-meeting'
	},
	leaveOfAbsence: {
		id:'timeline.major-entry.leave-of-absence'
	},
	firstDate: {
		id:'timeline.major-entry.first-date'
	},
	geneva: {
		id: 'timeline.major-entry.geneva'
	},
	christmas: {
		id: 'timeline.major-entry.christmas'
	},
	graduation: {
		id: 'timeline.major-entry.graduation'
	},
	proposal: {
		id: 'timeline.major-entry.proposal'
	},
	mark: {
		earlyCareer: {
			id: 'timeline.mark.mar2012'
		},
		firstMeeting1: {
			id: 'timeline.mark.jul2012.1'
		},
		firstMeeting2: {
			id: 'timeline.mark.jul2012.2'
		},
		endRelationship: {
			id: 'timeline.mark.jun2013'
		},
		visitJoke: {
			id: 'timeline.mark.jul2013'
		}
	},
	lisy: {
		harvard: {
			id: 'timeline.lisy.jun2012'
		},
		firstMeeting1: {
			id: 'timeline.lisy.jul2012.1'
		},
		firstMeeting2: {
			id: 'timeline.lisy.jul2012.2'
		},
		endRelationship: {
			id: 'timeline.lisy.nov2012'
		},
		firstMove: {
			id: 'timeline.lisy.jul2013'
		}
	},
	dates: {
		mar2012: {
			id: 'dates.mar2012'
		},
		jun2012: {
			id: 'dates.jun2012'
		},
		jul2012: {
			id: 'dates.jul2012'
		},
		nov2012: {
			id: 'dates.nov2012'
		},
		jun2013: {
			id: 'dates.jun2013'
		},
		jul2013: {
			id: 'dates.jul2013'
		},
		aug2013: {
			id: 'dates.aug2013'
		},
		may2015: {
			id: 'dates.may2015'
		}
	},
	locations: {
		HTX: {
			id: 'locations.HTX'
		},
		ATX: {
			id: 'locations.ATX'
		},
		GYE: {
			id: 'locations.GYE'
		},
		MTY: {
			id: 'locations.MTY'
		},
		GVA: {
			id: 'locations.GVA'
		},
		BOS: {
			id: 'locations.BOS'
		}
	}
})

const Timeline = () => {
	const { mark, lisy, dates, locations } = messages
	return (
		<section className="timeline">
			<MajorEventEntry message={ messages.overview }/>
			<TimelineEntry
				mark={ mark.earlyCareer }
				location={ locations.HTX }
				date={ dates.mar2012 }/>
			<TimelineEntry
				lisy={ lisy.harvard }
				location={ locations.BOS}
				date={ dates.jun2012 }/>
			<MajorEventEntry message={ messages.firstMeeting } />
			<TimelineEntry
				mark={ mark.firstMeeting1 }
				lisy={ lisy.firstMeeting1 }
				location={ locations.HTX }
				date={ dates.jul2012 }/>
			<TimelineEntry
				mark={ mark.firstMeeting2 }
				lisy={ lisy.firstMeeting2 }
				location={ locations.HTX }
				date={ dates.jul2012 }/>
			<MajorEventEntry message={ messages.leaveOfAbsence } />
			<TimelineEntry
				lisy={ lisy.endRelationship }
				location={ locations.MTY }
				date={ dates.nov2012 }/>
			<TimelineEntry
				mark={ mark.endRelationship }
				location={ locations.ATX }
				date={ dates.jun2013 }/>
			<TimelineEntry
				lisy={ lisy.firstMove }
				location={ locations.MTY }
				date={ dates.jul2013 }/>
			<TimelineEntry
				location={ locations.MTY }
				date={ dates.jul2013 } />
			<div className='img-container'>
				<img src={require('../assets/fb-chat.png')} alt="first-move" />
			</div>
			<TimelineEntry
				mark={ mark.visitJoke }
				location={ locations.ATX }
				date={ dates.jul2013 }/>
			<MajorEventEntry message={ messages.firstDate } />
			<TimelineEntry
				location={ locations.MTY }
				date={ dates.aug2013 } />
			<div className='img-container'>
				<img src={require('../assets/fireworks.gif')} alt="fireworks" />
			</div>
			<MajorEventEntry message={ messages.geneva } />
			<div className="timeline-entry">
				<div className="story-content lisy">
					<p>something about mexico city trip</p>
				</div>
				<div className="date">
					<h2>Mexico City, MX</h2>
					<h3>Fall, 2014</h3>
				</div>
				<div className="story-content mark">
					<p>he got her an orchid for her birthday</p>
				</div>
			</div>
			<MajorEventEntry message={ messages.christmas } />
			<MajorEventEntry message={ messages.graduation } />
			<div className="timeline-entry">
				<div className="story-content lisy">
					<p>she called the tow truck for him and acted very suprised when he finally arrived</p>
				</div>
				<div className="date">
					<h2>Monterrey, MX</h2>
					<h3>Spring, 2015</h3>
				</div>
				<div className="story-content mark">
					<p>he got two flat tires while driving to suprise her for Valentine's Day</p>
				</div>
			</div>
			<MajorEventEntry message={ messages.proposal } />
			<TimelineEntry
				location={ locations.HTX }
				date={ dates.may2015 } />
			<div className='img-container'>
				<img src={require('../assets/brick-wall.jpg')} />
			</div>
			<div className="timeline-entry">
				<div className="story-content lisy">
					<p>she looked heavenly</p>
				</div>
				<div className="date">
					<h2>Houston, TX</h2>
					<h3>Summer, 2015</h3>
				</div>
				<div className="story-content mark">
					<p>he was speechless</p>
				</div>
			</div>
		</section>
	)
}

export default Timeline