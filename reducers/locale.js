const initialState = 'en'

const locale = (state = initialState, action) => {
	switch (action.type) {
		case 'LOCALE_SWITCH':
			const { locale } = action
			return locale
		default:
			return state
	}
}

export default locale