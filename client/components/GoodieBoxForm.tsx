import { css } from '@emotion/css'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

export default function GoodieBoxForm() {
	const [state, handleSubmit, reset] = useForm('movajqzq')
	const [numberOfBoxes, setNumberOfBoxes] = useState(1)

	return (
		<>
			<div className={sectionStyle} id="contactForm">
				<div className={styles.formBoxStyle}>
					{state.succeeded && (
						<div>
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
								<label htmlFor="number">Number of Boxes*</label>
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
											required
										/>
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
								Send me an invoice!
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
	gap: '1rem',
	paddingTop: '1rem',
	'@media (max-width:500px)': {
		width: '95%',
	},
})

const sectionStyle = css({
	display: 'flex',
	flexDirection: 'row',

	'& img': {
		maxWidth: '20rem',
		margin: '1rem',
		aspectRatio: 'initial',
	},
	'@media (max-width:600px)': {
		'& img': {
			display: 'none',
		},
	},
})

const styles = {
	formBoxStyle: css({
		width: '100%',
		margin: '2rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '200px',
		backgroundColor: '#fef3d3ff',
		gap: '1rem',
	}),
	mediumField: css({
		display: 'flex',
		flexDirection: 'column',
		minWidth: '20rem',
	}),
	severalHorizontal: css({
		display: 'flex',
		gap: '1rem',
		marginTop: '0.5rem',
		flexWrap: 'wrap',
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
}

const nzCities = [
	'Auckland',
	'Christchurch',
	'Manukau City',
	'Wellington',
	'Northcote',
	'Hamilton',
	'Tauranga',
	'Lower Hutt',
	'Dunedin',
	'Palmerston North',
	'Napier',
	'New Plymouth',
	'Porirua',
	'Rotorua',
	'Whangarei',
	'Invercargill',
	'Nelson',
	'Upper Hutt',
	'Gisborne',
	'Paraparaumu',
	'Timaru',
	'Blenheim',
	'Taupo',
	'Cambridge',
	'Feilding',
	'Levin',
	'Rolleston',
	'Whakatane',
	'Richmond',
	'Havelock North',
	'Tokoroa',
	'Mosgiel',
	'Te Awamutu',
	'Waikanae',
	'Hawera',
	'Waiuku',
	'Paraparaumu Beach',
	'Wanaka',
	'Te Puke',
	'Greymouth',
	'Matamata',
	'Thames',
	'Kawerau',
	'Kerikeri',
	'Waitara',
	'Ngaruawahia',
	'Mount Maunganui',
	'Lincoln',
	'Kaitaia',
	'Stratford',
	'Alexandra',
	'Cromwell',
	'Warkworth',
	'Waihi',
	'Raumati Beach',
	'Marton',
	'Whitianga',
	'Tuakau',
	'Dargaville',
	'Katikati',
	'Westport',
	'Tauwhare',
	'Te Aroha',
	'Kaikohe',
	'Prebbleton',
	'Paeroa',
	'Whangamata',
	'Balclutha',
	'Snells Beach',
	'Turangi',
	'Raglan',
	'Foxton',
	'Darfield',
	'Ashhurst',
	'Hokitika',
	'Helensville',
	'Woodend',
	'Kihikihi',
	'Pahiatua',
	'Wakefield',
	'Ruakaka',
	'Winton',
	'Maraetai',
	'Te Anau',
	'Clive',
	'Oxford',
	'Pokeno',
	'Milton',
	'Waihi Beach',
	'Brightwater',
	'Leeston',
	'West Melton',
	'Waitangi',
]
