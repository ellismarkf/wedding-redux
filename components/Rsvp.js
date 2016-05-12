import React, { Component } from 'react'
import { connect } from 'react-redux'
import RsvpForm from './RsvpForm'
import ThankYouInsert from './ThankYouInsert'

class Rsvp extends Component {
	render() {
		const { dispatch, hasRSVPd, animating, isFetching, errMsg } = this.props
		return (
			<div className='rsvp'>
				<div className='envelope-top'></div>
				<RsvpForm
					dispatch={dispatch}
					hasRSVPd={hasRSVPd}
					animating={animating}
					isFetching={isFetching}
					errMsg={errMsg}/>
				<ThankYouInsert
					dispatch={dispatch}
					hasRSVPd={hasRSVPd}
					animating={animating}
					isFetching={isFetching}/>
				<div className='envelope-bottom'></div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	hasRSVPd: state.rsvp.hasRSVPd,
	animating: state.rsvp.animating,
	isFetching: state.rsvp.isFetching,
	errMsg: state.rsvp.errMsg,
	locale: state.locale
})

export default connect(mapStateToProps)(Rsvp)