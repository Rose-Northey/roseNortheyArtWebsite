import { css } from '@emotion/css'

interface ImageTileProps {
	url: string
	type: imageTypes
}
type imageTypes = 'portrait' | 'landscape' | 'square'

export default function ImageTileProps({ url, type }: ImageTileProps) {
	return (
		<>
			<img src={url} className={imageTileStyle(type)} />
		</>
	)
}
const imageTileStyle = (type: imageTypes) => {
	switch (type) {
		case 'portrait': {
			return css({
				margin: 'auto',
			})
		}
		case 'landscape': {
			return css({
				margin: '1rem auto',
			})
		}
		case 'square': {
			return css({
				margin: '1rem auto',
			})
		}
	}
}
