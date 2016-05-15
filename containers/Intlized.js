import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import * as i18n from '../i18n'
import App from '../components/App'
import { localeSwitch } from '../actions/locale'

class Intlized extends Component {
	componentDidMount() {
	    const { dispatch } = this.props
	    const locale = (navigator.language || navigator.userLanguage || navigator.languages[0] || navigator.browserLanguage).split('-')[0]
	    dispatch(localeSwitch(locale))
	}

	render() {
	    const { locale, dispatch } = this.props
	    const intlData = {
	        locale,
	        messages: i18n[locale]
	    }

	    return (
	        <IntlProvider key='intl' {...intlData}>
	        	<App dispatch={dispatch}/>
	        </IntlProvider>
	    )
	}
}

const mapStateToProps = (state) => ({
	locale: state.locale
})

export default connect(mapStateToProps)(Intlized)