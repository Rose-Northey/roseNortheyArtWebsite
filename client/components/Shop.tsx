import { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import GoodieBoxForm from './GoodieBoxForm'
import { colors } from '../styles/colors'

const backgroundImage = '/background.jpg'

const mysteryBouquet = '/mystery_bouquet.jpg'

export default function Shop() {
	const [isLoaded, setIsLoaded] = useState(false)
	const bouquetDescription = useEffect(() => {
		// collect all image URLs from the page
		const imageUrls = [backgroundImage, mysteryBouquet]

		let loadedCount = 0
		imageUrls.forEach((url) => {
			const img = new Image()
			img.src = url
			img.onload = () => {
				loadedCount++
				if (loadedCount === imageUrls.length) {
					setIsLoaded(true)
				}
			}
			img.onerror = () => {
				loadedCount++
				if (loadedCount === imageUrls.length) {
					setIsLoaded(true)
				}
			}
		})
	}, [])
	if (!isLoaded) {
		return <div className={loadingScreen}>chasing ducks...</div>
	}

	return (
		<>
			<div className={styles.shop}>
				<div className={styles.shopItem}>
					<h1 className={styles.itemTitle}>Mystery Bouquet</h1>
					<div className={styles.itemDetails}>
						<img
							src={mysteryBouquet}
							className={styles.itemImage}
						/>
						<div className={styles.itemWriteup}>
							<div>
								Order yourself the most exciting parcel to ever
								totter from your mailbox.
							</div>

							<div>
								{
									"Around 150 NZD of product for 50 NZD. That's a very excellent self-gift or Christmas sorted for more than one of your loved ones."
								}
							</div>
							<div>Every box will contain:</div>
							<ul>
								<li>
									{'A Rose-designed bird fanny pack (40 NZD)'}
								</li>
								<li>
									{
										'The opposite of an existential crisis (15 NZD)'
									}
								</li>
								<li>{'The Lighthouse Princess (25 NZD)'}</li>
								<li>{'Three sticker sheets (21 NZD)'}</li>
							</ul>
							<div>
								Your box will also contain two or more of the
								following:
							</div>
							<ul>
								<li>
									{
										'Fully illustrated white rabbit playing cards (30 NZD and very rare)'
									}
								</li>
								<li>
									{
										'Catalyst Poetry book containing Rose Poems and more (20 NZD)'
									}
								</li>
								<li>
									{
										'Gramatically Incorrect Bird Zine (12 NZD)'
									}
								</li>
								<li>{'A5 Bird Print (35 NZD)'}</li>
								<li>
									{
										'Things which are technically true but make us feel uncomfortable (5 NZD and rare)'
									}
								</li>
								<li>{'Miniature Original Art (????)'}</li>
							</ul>
						</div>
					</div>

					<GoodieBoxForm />
				</div>
			</div>
		</>
	)
}

const loadingScreen = css({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	letterSpacing: '0.2rem',
	fontSize: '1.2rem',
})

const styles = {
	shop: css({
		backgroundImage: `url('${backgroundImage}')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'center',
	}),
	shopItem: css({
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '800px',
	}),
	itemDetails: css({
		backgroundColor: 'white',
		padding: '1rem',
		display: 'flex',
	}),
	itemWriteup: css({
		padding: '1rem',
	}),
	itemImage: css({
		maxWidth: '400px',
	}),
	itemTitle: css({
		marginTop: '1rem',
		fontFamily: 'Spicy Rice, serif',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '3rem',
		color: '#f9f9f8ff',
		letterSpacing: '0.8rem',
	}),
}
