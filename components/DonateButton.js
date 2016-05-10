import React, { Component } from 'react'
import { connect } from 'react-redux'

class DonateButton extends Component {
	render() {
		const { locale } = this.props
		return (
			<div>
				{locale === 'en' &&
				<form className='donateBtn' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input type="hidden" name="hosted_button_id" value="HF9V2K22SQTPC" />
						<input type="image" src="http://wowmarkandray.com/img/donate-button-transparent.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	locale: state.locale
})

export default connect(mapStateToProps)(DonateButton)