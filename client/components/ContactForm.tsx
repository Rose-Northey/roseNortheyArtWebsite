import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
	const [state, handleSubmit] = useForm('movajqzq')
	if (state.succeeded) {
		return <p>Thanks for joining!</p>
	}
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={formStyling}
				action="?"
				method="POST"
			>
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
	padding: '2rem',
})
