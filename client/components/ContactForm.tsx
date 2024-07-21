import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
	const [state, handleSubmit] = useForm('movajqzq')
	if (state.succeeded) {
		return <p>Thanks for joining!</p>
	}
	return (
		<>
			<script
				src="https://www.google.com/recaptcha/api.js"
				async
				defer
			></script>
			<form
				onSubmit={handleSubmit}
				className={formStyling}
				action="?"
				method="POST"
			>
				<div className="g-recaptcha" data-sitekey="your_site_key"></div>
				<label htmlFor="email">Your Email Address</label>
				<input id="email" type="email" name="email" />
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>

				<label>Your Message</label>
				<textarea id="message" name="message" />
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>

				<button type="submit" disabled={state.submitting}>
					Whoosh!
				</button>
			</form>
		</>
	)
}

const formStyling = css({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '40rem',
})
