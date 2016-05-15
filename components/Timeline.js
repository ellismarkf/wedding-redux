import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import MajorEventEntry from './MajorEventEntry'
import TimelineEntry from './TimelineEntry'

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
	courtWedding: {
		id: 'timeline.major-entry.court-wedding'
	},
	teaser: {
		id: 'announcement.teaser'
	},
	mark: {
		earlyCareer: {
			id: 'timeline.mark.mar2012'
		},
		firstMeeting: {
			id: 'timeline.mark.jul2012'
		},
		endRelationship: {
			id: 'timeline.mark.jun2013'
		},
		visitJoke: {
			id: 'timeline.mark.jul2013'
		},
		accidentallyInLove: {
			id: 'timeline.mark.oct2013'
		},
		tresLechesSurprise: {
			id: 'timeline.mark.dec2013'
		},
		careerChange: {
			id: 'timeline.mark.feb2014'
		},
		switzerlandHelp: {
			id: 'timeline.mark.mar2014'
		},
		study: {
			id: 'timeline.mark.jun2014'
		},
		birthdayDinner: {
			id: 'timeline.mark.oct2014'
		},
		backToHouston: {
			id: 'timeline.mark.nov2014'
		},
		graduation: {
			id: 'timeline.mark.jan2015'
		},
		flatTires: {
			id: 'timeline.mark.feb2015'
		}
	},
	lisy: {
		harvard: {
			id: 'timeline.lisy.jun2012'
		},
		firstMeeting: {
			id: 'timeline.lisy.jul2012'
		},
		endRelationship: {
			id: 'timeline.lisy.feb2013'
		},
		firstMove: {
			id: 'timeline.lisy.jul2013'
		},
		foodNote: {
			id: 'timeline.lisy.sep2013'
		},
		firstLove: {
			id: 'timeline.lisy.oct2013'
		},
		packApt: {
			id: 'timeline.lisy.dec2013.1'
		},
		backHome: {
			id: 'timeline.lisy.dec2013.2'
		},
		accepted: {
			id: 'timeline.lisy.feb2014'
		},
		arriveSwitz: {
			id: 'timeline.lisy.apr2014'
		},
		anniversary: {
			id: 'timeline.lisy.sep2014'
		},
		graduation: {
			id: 'timeline.lisy.jan2015'
		},
		towTruck: {
			id: 'timeline.lisy.feb2015'
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
		feb2013: {
			id: 'dates.feb2013'
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
		sep2013: {
			id: 'dates.sep2013'
		},
		oct2013: {
			id: 'dates.oct2013'
		},
		dec2013: {
			id: 'dates.dec2013'
		},
		feb2014: {
			id: 'dates.feb2014'
		},
		mar2014: {
			id: 'dates.mar2014'
		},
		apr2014: {
			id: 'dates.apr2014'
		},
		may2014: {
			id: 'dates.may2014'
		},
		jun2014: {
			id: 'dates.jun2014'
		},
		sep2014: {
			id: 'dates.sep2014'
		},
		oct2014: {
			id: 'dates.oct2014'
		},
		nov2014: {
			id: 'dates.nov2014'
		},
		jan2015: {
			id: 'dates.jan2015'
		},
		feb2015: {
			id: 'dates.feb2015'
		},
		mar2015: {
			id: 'dates.mar2015'
		},
		apr2015: {
			id: 'dates.apr2015'
		},
		may2015: {
			id: 'dates.may2015'
		},
		jul2016: {
			id: 'dates.jul2016'
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
		MXC: {
			id: 'locations.MXC'
		},
		GVA: {
			id: 'locations.GVA'
		},
		BOS: {
			id: 'locations.BOS'
		}
	}
})
			// <TimelineEntry
			// 	mark={ mark.earlyCareer }
			// 	location={ locations.HTX }
			// 	date={ dates.mar2012 }/>
			// <TimelineEntry
			// 	lisy={ lisy.harvard }
			// 	location={ locations.BOS}
				// date={ dates.jun2012 }/>
			// <TimelineEntry
				// location={ locations.MTY }
				// date={ dates.jul2013 } />
			// <TimelineEntry
				// lisy={lisy.foodNote}
				// location={locations.MTY}
				// date={dates.sep2013}/>
			// <TimelineEntry
				// lisy={lisy.arriveSwitz}
				// location={locations.GVA}
				// date={dates.apr2014}/>
			// <TimelineEntry
				// lisy={lisy.backHome}
				// location={locations.GYE}
				// date={dates.dec2013}/>
			// <TimelineEntry
				// mark={mark.study}
				// location={locations.ATX}
				// date={dates.jun2014}/>
			// <TimelineEntry
				// mark={mark.birthdayDinner}
				// location={locations.MXC}
				// date={dates.oct2014}/>

const Timeline = () => {
	const { mark, lisy, dates, locations } = messages
	return (
		<section className="timeline">
			<MajorEventEntry message={ messages.overview }/>
			<TimelineEntry
				location={ locations.HTX }
				date={ dates.may2015 }
				img={require('../assets/paint-wall-wide.jpg')}/>
			<MajorEventEntry message={ messages.firstMeeting } />
			<TimelineEntry
				mark={ mark.firstMeeting }
				lisy={ lisy.firstMeeting }
				location={ locations.HTX }
				date={ dates.jul2012 }
				img={require('../assets/menu.png')}/>
			<MajorEventEntry message={ messages.leaveOfAbsence } />
			<TimelineEntry
				lisy={ lisy.endRelationship }
				location={ locations.MTY }
				date={ dates.feb2013 }/>
			<TimelineEntry
				mark={ mark.endRelationship }
				location={ locations.ATX }
				date={ dates.jun2013 }/>
			<TimelineEntry
				lisy={ lisy.firstMove }
				location={ locations.MTY }
				date={ dates.jul2013 }
				img={require('../assets/fb-chat.png')}/>
			<TimelineEntry
				mark={ mark.visitJoke }
				location={ locations.ATX }
				date={ dates.jul2013 }/>
			<MajorEventEntry message={ messages.firstDate } />
			<TimelineEntry
				location={ locations.MTY }
				date={ dates.aug2013 }
				img={require('../assets/fireworks.gif')}/>
			<TimelineEntry
				mark={mark.accidentallyInLove}
				location={locations.ATX}
				date={dates.oct2013}/>
			<TimelineEntry
				lisy={lisy.firstLove}
				location={locations.MTY}
				date={dates.oct2013}/>
			<TimelineEntry
				mark={mark.tresLechesSurprise}
				lisy={lisy.packApt}
				location={locations.MTY}
				date={dates.dec2013}
				img={require('../assets/christmas.png')}/>
			<TimelineEntry
				mark={mark.careerChange}
				lisy={lisy.accepted}
				location={locations.GYE}
				date={dates.feb2014}/>
			<TimelineEntry
				mark={mark.switzerlandHelp}
				location={locations.ATX}
				date={dates.mar2014}/>
			<MajorEventEntry message={ messages.geneva } />
			<TimelineEntry
				location={locations.GVA}
				date={dates.may2014}
				img={require('../assets/suiza.jpg')}/>
			<TimelineEntry
				lisy={lisy.anniversary}
				location={locations.MXC}
				date={dates.sep2014}/>
			<TimelineEntry
				mark={mark.backToHouston}
				location={locations.HTX}
				date={dates.nov2014}/>
			<MajorEventEntry message={ messages.christmas } />
			<TimelineEntry
				mark={mark.graduation}
				lisy={lisy.graduation}
				location={locations.MTY}
				date={dates.jan2015}/>
			<TimelineEntry
				mark={mark.flatTires}
				lisy={lisy.towTruck}
				location={locations.MTY}
				date={dates.feb2015}/>
			<MajorEventEntry message={ messages.proposal } />
			<TimelineEntry
				location={ locations.HTX }
				date={ dates.may2015 }
				img={require('../assets/brick-wall.jpg')}/>
			<MajorEventEntry message={ messages.courtWedding } />
			<TimelineEntry
				date={ dates.jul2016 }
				location={ locations.GYE }
				invite={ messages.teaser }/>
		</section>
	)
}

export default Timeline