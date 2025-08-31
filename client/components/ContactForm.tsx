import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
	const [state, handleSubmit] = useForm('movajqzq')
	return (
		<>
			<div className={sectionStyle}>
				<img src="/photo_rose.JPG" />
				<div className={formBoxStyle}>
					{state.succeeded && (
						<p>
							Your message has been sent! A Rose will be in
							contact with you shortly
						</p>
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
	maxWidth: '50%',
	padding: '2rem',
	height: '20rem',
})

const formBoxStyle = css({
	border: '1pt solid black',
	width: '100%',
	margin: '2rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

const sectionStyle = css({
	display: 'flex',
	flexDirection: 'row',
	'& img': {
		maxHeight: '20rem',
		margin: '2rem',
	},
})
