import React, { Component } from 'react'
import { connect } from 'react-redux'
import RsvpForm from './RsvpForm'
import ThankYouInsert from './ThankYouInsert'

class Rsvp extends Component {
	render() {
		const { dispatch, hasRSVPd, animating } = this.props
		return (
			<div className='rsvp'>
				<div className='envelope-top'></div>
				<RsvpForm dispatch={dispatch} hasRSVPd={hasRSVPd} animating={animating}/>
				<ThankYouInsert dispatch={dispatch} hasRSVPd={hasRSVPd} animating={animating}/>
				<div className='envelope-bottom'></div>
			</div>
		)
	}
}

// const Rsvp = () => (
// 	<div className='rsvp'>
// 		<div className='envelope-top'></div>
// 		<RsvpForm />
// 		<div className='envelope-bottom'></div>
// 	</div>
// )

const mapStateToProps = (state) => ({
	hasRSVPd: state.rsvp.hasRSVPd,
	animating: state.rsvp.animating
})

export default connect(mapStateToProps)(Rsvp)