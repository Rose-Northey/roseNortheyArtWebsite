import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'
import { validateCity } from './GoodieBoxFormValidation'
import { colors } from '../styles/colors'

export default function GoodieBoxForm() {
	const [state, handleSubmit, reset] = useForm('movajqzq')
	const [numberOfBoxes, setNumberOfBoxes] = useState(1)
	const [city, setCity] = useState('')
	const [cityError, setCityError] = useState<null | string>(null)

	return (
		<>
			<div className={sectionStyle} id="contactForm">
				<div className={styles.formBoxStyle}>
					{state.succeeded && (
						<div className={formStyling}>
							<p>
								{`Rose will send you an invoice for
								${numberOfBoxes * 50}nzd. Once payment has been received, your box of goodies will make its way over to you!`}
							</p>
							<button onClick={reset}>
								Hey! I want to do another form!
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
							<div className={styles.severalHorizontal}>
								<div className={styles.mediumField}>
									<label htmlFor="name">Name*</label>
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
								</div>
								<div className={styles.mediumField}>
									<label htmlFor="email">
										Email Address*
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
							</div>
							<div className={styles.smallField}>
								<label htmlFor="number">
									Number of Parcels*
								</label>
								<input
									id="numberOfBoxes"
									type="number"
									name="numberOfBoxes"
									className={styles.smallArea}
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
							</div>
							<div>
								<div>Postage Address</div>
								<div className={styles.severalHorizontal}>
									<div className={styles.mediumField}>
										<label htmlFor="street">
											Street Address*
										</label>
										<input
											id="street"
											name="street"
											type="text"
											required
										/>
									</div>
									<div className={styles.mediumField}>
										<label htmlFor="city">City*</label>
										<input
											id="city"
											name="city"
											type="text"
											value={city}
											onChange={(e) => {
												setCity(e.target.value)
												setCityError(null)
											}}
											onBlur={() => {
												const error = validateCity(city)
												setCityError(error)
											}}
											required
										/>
										{cityError && (
											<p className={styles.errorText}>
												{cityError}
											</p>
										)}
									</div>
									<div className={styles.smallField}>
										<label htmlFor="postcode">
											Postcode*
										</label>
										<input
											id="postcode"
											name="postcode"
											type="text"
											pattern="^\d{4}$"
											title="Please enter a 4-digit NZ postcode"
											required
										/>
									</div>
								</div>
							</div>
							<div className={styles.largeField}>
								<label>
									Anything Rose should know? (optional)
								</label>
								<textarea
									id="message"
									name="message"
									className={styles.bigTextArea}
								/>
								<ValidationError
									prefix="Message"
									field="message"
									errors={state.errors}
								/>
							</div>
							<button type="submit" disabled={state.submitting}>
								Ask Rose to email me an invoice!
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
	gap: '1rem',
	padding: '2rem',
})

const sectionStyle = css({
	display: 'flex',
	flexDirection: 'row',
})

const styles = {
	formBoxStyle: css({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '200px',
		backgroundColor: colors.primaryBackground,
		gap: '1rem',
		padding: '2rem,',
		'@media (max-width:500px)': {
			minWidth: '0',
		},
	}),
	mediumField: css({
		display: 'flex',
		flexDirection: 'column',
		minWidth: '20rem',
		'@media (max-width:500px)': {
			minWidth: '0',
		},
	}),
	severalHorizontal: css({
		display: 'flex',
		gap: '1rem',
		marginTop: '0.5rem',
		flexWrap: 'wrap',
		'@media (max-width:500px)': {
			flexDirection: 'column',
		},
	}),
	smallField: css({
		display: 'flex',
		flexDirection: 'column',
		width: '10rem',
	}),
	bigTextArea: css({
		height: '7rem',
	}),
	largeField: css({
		display: 'flex',
		flexDirection: 'column',
	}),
	smallArea: css({
		width: '3rem',
	}),
	errorText: css({
		fontSize: '10pt',
		color: 'red',
	}),
}
