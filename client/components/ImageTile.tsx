import { css } from '@emotion/css'
import { ImageTypes, ImageInfo } from './HomePage'

interface ImageTileProps {
	art: ImageInfo
}

export default function ImageTileProps({ art }: ImageTileProps) {
	return (
		<>
			<img src={art.url} className={imageTileStyle(art.type)} />
		</>
	)
}
const imageTileStyle = (type: ImageTypes) => {
	switch (type) {
		case ImageTypes.portrait: {
			return css({
				paddingTop: '0',
			})
		}
		case ImageTypes.landscape: {
			return css({
				paddingTop: '1rem',
				paddingBottom: '1rem',
				'@media (max-width:500px)': {
					paddingTop: '0.4rem',
					paddingBottom: '0.4rem',
				},
			})
		}
		case ImageTypes.square: {
			return css({
				paddingTop: '0.5rem',
				paddingBottom: '0.5rem',
				'@media (max-width:500px)': {
					paddingTop: '0.2rem',
					paddingBottom: '0.2rem',
				},
			})
		}
	}
}
