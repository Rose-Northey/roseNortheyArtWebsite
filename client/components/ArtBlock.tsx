import { css } from '@emotion/css'
import { ImageInfo } from './HomePage'
import ImageTile from './ImageTile'

interface ArtBlockProps {
	art: ImageInfo[]
	backgroundColour: string
}

//the pictures either say portrait or landscape or square
//they are set by height but there is more top margin for the landscape / square ones
// they come through as props

export default function ArtBlock({ art, backgroundColour }: ArtBlockProps) {
	return (
		<>
			<div className={artTileStyle(backgroundColour)}>
				{art.map((artwork, i) => {
					return (
						<div>
							<ImageTile art={artwork} />
						</div>
					)
				})}
			</div>
		</>
	)
}

const artTileStyle = (backgroundColour: string) => {
	return css({
		maxHeight: '25rem',
		// backgroundColor: '#414b6f',
		backgroundColor: backgroundColour,
		display: 'flex',
		justifyContent: 'center',
		padding: 'auto',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		gap: '1rem',

		'& div': {
			maxWidth: '25%',
			aspectRatio: '1/1',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		'& img': {
			maxWidth: '100%',
			maxHeight: '100%',
		},
	})
}
