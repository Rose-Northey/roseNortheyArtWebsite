import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

export default function GoodieBoxForm() {
	const [state, handleSubmit, reset] = useForm('movajqzq')
	const [numberOfBoxes, setNumberOfBoxes] = useState(1)

	return (
		<>
			<div className={sectionStyle} id="contactForm">
				<img src="/photo_rose.jpg" />
				<div className={formBoxStyle}>
					{state.succeeded && (
						<div>
							<p>
								{`Rose will send you an invoice for
								${numberOfBoxes * 50}nzd. Once payment has been received, your box of goodies will make its way over to you!`}
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
							<div>
								<label htmlFor="name">Name</label>
								<input
									id="name"
									type="text"
									name="name"
									required
								/>
								<ValidationError
									prefix="Name"
									field="name"
									errors={state.errors}
								/>

								<label htmlFor="email">
									Your Email Address
								</label>
								<input
									id="email"
									type="email"
									name="email"
									required
								/>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>
							</div>
							<label htmlFor="number">Number of Boxes</label>
							<input
								id="numberOfBoxes"
								type="number"
								name="numberOfBoxes"
								value={numberOfBoxes}
								required
								onChange={(e) =>
									setNumberOfBoxes(Number(e.target.value))
								}
							/>
							<ValidationError
								prefix="number"
								field="number"
								errors={state.errors}
							/>
							<label htmlFor="street">Address</label>
							<div>
								<label htmlFor="street">Street Address</label>
								<input
									id="street"
									name="street"
									type="text"
									required
								/>

								<label htmlFor="city">City</label>
								<input
									id="city"
									name="city"
									type="text"
									required
								/>

								<label htmlFor="postcode">Postcode</label>
								<input
									id="postcode"
									name="postcode"
									type="text"
									pattern="^\d{4}$"
									title="Please enter a 4-digit NZ postcode"
									required
								/>
							</div>

							<label>Anything Rose should know? (optional)</label>
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
	width: '100%',
	margin: '2rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minWidth: '200px',
	backgroundColor: '#fef3d3ff',
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
