import React from 'react'

const TestDonateBtn = () => (
	<form className='donateBtn' action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
		<input type="hidden" name="cmd" value="_s-xclick" />
		<input type="hidden" name="hosted_button_id" value="RJ6M8HZMN25CG" />
		<input type="image" src="http://wowmarkandray.com/img/contribute-english.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
		<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
	</form>
	
)

export default TestDonateBtn