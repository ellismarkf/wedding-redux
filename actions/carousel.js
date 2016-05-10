export const carouselIndexChange = (currPhoto) => {
	return {
		type: 'INDEX_CHANGE',
		currPhoto
	}
}

export const carouselWidthChange = (width) => {
	return {
		type: 'INDEX_CHANGE',
		width
	}
}