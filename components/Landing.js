import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
	titleIntro: {
		id: 'landing.title-intro'
	}
})

const Landing = () => (
	<section id="landing">
		<p><FormattedMessage {...messages.titleIntro} /></p>
		<h1>Mark <span>&amp;</span> Lisy</h1>
		<svg id="heart-lines" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.05 415.72">
			<defs>
			</defs>
			<title>lines</title>
			<path className="cls-1" d="M5,0L4.52,60.05C4.41,72.69,4.31,85.42,6.77,97.82c7.35,37.07,33.47,77,68,92.34s60.36,24.55,98,20.7c30.27-3.11,47.2-16.36,55-30,5.42-9.52,12.2-18.89,11.79-35.2-0.5-19.61-4.79-26.17-18.63-41.14-11.06-12-28.07-18.71-41.27-23.71-9-3.4-26.11-3.58-35.66-2.53-14.09,1.54-28.34,4.51-40.5,11.77-12.88,7.69-22.67,19.82-29.63,33.1-24.36,46.45-12.24,109,27.69,143.05,21.38,18.21,46.8,41.47,67,61,11.29,11,22.67,19.12,29.62,25.1,28.6,24.59,37.92,45.54,41.44,69.92"/>
			<path className="cls-2" d="M483,0l0.52,60.05c0.11,12.63.21,25.37-2.25,37.77-7.35,37.07-33.47,77-68,92.34s-60.36,24.55-98,20.7c-30.27-3.11-47.2-16.36-55-30-5.42-9.52-12.2-18.89-11.79-35.2,0.5-19.61,4.79-26.17,18.63-41.14,11.06-12,28.07-18.71,41.27-23.71,9-3.4,26.11-3.58,35.66-2.53,14.09,1.54,28.34,4.51,40.5,11.77,12.88,7.69,22.67,19.82,29.63,33.1,24.36,46.45,12.24,109-27.69,143.05-21.38,18.21-46.8,41.47-67,61-11.29,11-22.67,19.12-29.62,25.1-28.6,24.59-37.92,45.54-41.44,69.92"/>
		</svg>
	</section>
)

export default Landing