import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import MajorEventEntry from './MajorEventEntry'

const messages = defineMessages({
	overview: {
		id: 'timeline.major-entry.overview'
	}
})

const Timeline = () => (
	<section className="timeline">
		<MajorEventEntry message={ messages.overview }/>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she was working a summer internship at MD Anderson</p>
			</div>
			<div className="date">
				<h2>Houston, TX</h2>
				<h3>Summer, 2012</h3>
			</div>
			<div className="story-content mark">
				<p>he was just starting to get fascinated with web development, and fed up with his make-shift career in story-content marketing</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she was on-call for thirty-six hours at a time in the maternity ward, falling asleep whenever and wherever possible, including under a sink once, and while talking to an incoming patient in triage</p>
			</div>
			<div className="date">
				<h2>Austin, TX</h2>
				<h3>Summer, 2013</h3>
			</div>
			<div className="story-content mark">
				<p>he had just moved to Austin to help one of his best friends launch a hybrid music studio / product development start-up.  it was his first time living in another city.</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she was so nervous that she dropped a bottle of perfume on the ground</p>
			</div>
			<div className="date">
				<h2>Monterrey, MX</h2>
				<h3>Fall, 2013</h3>
			</div>
			<div className="story-content mark">
				<p>he drove from Austin to Monterrey without and was caught at the border for hours</p>
			</div>
		</div>
		<img src="http://wowmarkandray.com/img/fireworks.gif" alt="fireworks" />
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she met him at the airport and cried a little when she saw him because in the months leading up to his arrival she had forgotten what he looked like.  she made him octopus for dinner, and they ate by candlelight on the balcony of her rented loft</p>
			</div>
			<div className="date">
				<h2>Geneva, CH</h2>
				<h3>Summer, 2014</h3>
			</div>
			<div className="story-content mark">
				<p>he was nervous because he didn't speak French (or German), but all of that melted away when he saw her running to him at the airport.</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>something about mexico city trip</p>
			</div>
			<div className="date">
				<h2>Mexico City, MX</h2>
				<h3>Fall, 2014</h3>
			</div>
			<div className="story-content mark">
				<p>he got her an orchid for her birthday</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she made a ballon for him and greeted him with her family at the airport, and was acting translator for the trip</p>
			</div>
			<div className="date">
				<h2>Guayaquil, EC</h2>
				<h3>Winter, 2014</h3>
			</div>
			<div className="story-content mark">
				<p>he was nervous because again he didn't speak the language very well, but got by mostly on the generous understanding of her family, and sang American pop songs on their home karaoke machine</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she graduated medical school!</p>
			</div>
			<div className="date">
				<h2>Monterrey, MX</h2>
				<h3>Spring, 2015</h3>
			</div>
			<div className="story-content mark">
				<p>he wore a suit!</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she called the tow truck for him and acted very suprised when he finally arrived</p>
			</div>
			<div className="date">
				<h2>Monterrey, MX</h2>
				<h3>Spring, 2015</h3>
			</div>
			<div className="story-content mark">
				<p>he got two flat tires while driving to suprise her for Valentine's Day</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>this time she really was surprised</p>
			</div>
			<div className="date">
				<h2>Monterrey, MX</h2>
				<h3>Spring, 2015</h3>
			</div>
			<div className="story-content mark">
				<p>he took the ring just in case</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she was scared about getting through customs</p>
			</div>
			<div className="date">
				<h2>Houston, TX</h2>
				<h3>Spring, 2015</h3>
			</div>
			<div className="story-content mark">
				<p>he got to the airport an hour early and still has the parking receipt</p>
			</div>
		</div>
		<div className="timeline-entry">
			<div className="story-content lisy">
				<p>she looked heavenly</p>
			</div>
			<div className="date">
				<h2>Houston, TX</h2>
				<h3>Summer, 2015</h3>
			</div>
			<div className="story-content mark">
				<p>he was speechless when he saw her, and cried during the ceremony</p>
			</div>
		</div>
	</section>
)

export default Timeline