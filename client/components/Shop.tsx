import { useEffect, useState } from 'react'
import ArtBlock from './ArtBlock'
import CallToAction from './CallToAction'
import ContactForm from './ContactForm'
import { css } from '@emotion/css'
import GoodieBoxForm from './GoodieBoxForm'

export enum ImageTypes {
	'portrait',
	'landscape',
	'square',
}

const callToActionImage = '/background.jpg'

export type ImageInfo = { url: string; type: ImageTypes }

const artBlock1Art = [
	{
		url: '/art_couple.png',
		type: ImageTypes.portrait,
	},
	{
		url: '/art_sunflowers.JPG',
		type: ImageTypes.landscape,
	},
	{
		url: '/art_mushrooms.JPG',
		type: ImageTypes.square,
	},
]

const artBlock2Art = [
	{
		url: '/art_bird.JPG',
		type: ImageTypes.portrait,
	},
	{
		url: '/art_irritation.JPG',
		type: ImageTypes.portrait,
	},
	{
		url: '/art_mermaid.JPG',
		type: ImageTypes.square,
	},
]

export default function Shop() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		// collect all image URLs from the page
		const imageUrls = [
			callToActionImage,
			...artBlock1Art.map((a) => a.url),
			...artBlock2Art.map((a) => a.url),
		]

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
			<GoodieBoxForm />
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
