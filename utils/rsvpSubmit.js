import { forEach } from 'lodash'
import serialize from 'form-serialize'

export default function serializeRSVPForm(event) {
	event.preventDefault()
	const form = document.querySelector('form[name="rsvp"]')
	const data = new FormData()
	forEach(serialize(form, { hash: true }), (val, key) => {
		data.append(key, val)
	})
	return data
}