const initialState = {
	photos: [
		{
			name: 'brick-wall',
			dimensions: [2100, 1402]
		},{
			name: 'close-up-bw',
			dimensions: [2100, 1402]
		},{
			name: 'menil-bench',
			dimensions: [2100, 1402]
		},{
			name: 'paint-wall-wide',
			dimensions: [2100, 1402]
		}
	],
	currPhoto: 0,
	width: 2100
}

const photoIndex = (state, action) => {
	switch (action.type) {
		case 'INDEX_CHANGE':
			return action.currPhoto
		default:
			return state
	}
}

const carousel = (state = initialState, action) => {
	switch (action.type) {
		case 'INDEX_CHANGE':
			return Object.assign({}, state, {
				currPhoto: photoIndex(state.currPhoto, action)
			})
		case 'WIDTH_CHANGE':
			return Object.assign({}, state, {
				width: action.width
			})
		default:
			return state
	}
}

export default carousel

 // photos: [[500, 350], [800, 600], [800, 400], [700, 500], [200, 650], [600, 600]]