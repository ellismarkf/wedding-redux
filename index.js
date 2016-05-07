require('es6-promise').polyfill()
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import weddingApp from './reducers'
import DevTools from './components/DevTools'
import Intlized from './containers/Intlized'
import BrowserNotSupported from './components/BrowserNotSupported'
import './style/index.less'

addLocaleData(en)
addLocaleData(es)

const store = createStore(
	weddingApp,
	compose(
		applyMiddleware(thunk),
		DevTools.instrument()
	)
)

const App = global.Intl ? Intlized : BrowserNotSupported

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
