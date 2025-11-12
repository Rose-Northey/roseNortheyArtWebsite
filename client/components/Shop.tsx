import { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import GoodieBoxForm from './GoodieBoxForm'
import { colors } from '../styles/colors'
import ShopItem from './ShopItem'

const backgroundImage = '/background.jpg'

const mysteryBouquet = '/mystery_bouquet.jpg'

export default function Shop() {
	const [isLoaded, setIsLoaded] = useState(false)
	useEffect(() => {
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
				<ShopItem />
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
		minHeight: '100%',
		height: '100%',
		paddingBottom: '5rem',
	}),
}
