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
				paddingTop: 'auto',
			})
		}
		case ImageTypes.landscape: {
			return css({
				paddingTop: '1rem',
				paddingBottom: '1rem',
			})
		}
		case ImageTypes.square: {
			return css({
				paddingTop: '0.5rem',
				paddingBottom: '0.5rem',
			})
		}
	}
}
