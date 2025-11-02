import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
	const [state, handleSubmit, reset] = useForm('movajqzq')
	return (
		<>
			<div className={sectionStyle} id="contactForm">
				<img src="/photo_rose.jpg" />
				<div className={formBoxStyle}>
					{state.succeeded && (
						<div>
							<p>
								Your message has been sent! A Rose will be in
								contact with you shortly.
							</p>
							<button onClick={reset}>
								Hey! I want to send another message!
							</button>
						</div>
					)}
					{!state.succeeded && (
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
					)}
				</div>
			</div>
		</>
	)
}

const formStyling = css({
	display: 'flex',
	flexDirection: 'column',
	width: '80%',
	paddingTop: '1rem',
	'@media (max-width:500px)': {
		width: '95%',
	},
})

const formBoxStyle = css({
	border: '1pt solid black',
	width: '100%',
	margin: '2rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minWidth: '200px',
})

const sectionStyle = css({
	display: 'flex',
	flexDirection: 'row',
	'& img': {
		maxHeight: '20rem',
		margin: '1rem',
	},
	'@media (max-width:600px)': {
		'& img': {
			display: 'none',
		},
	},
})
