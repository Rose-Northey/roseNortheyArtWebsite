import { css } from '@emotion/css'
import { Spacing } from '../styles/stylingVariables'
import { colors } from '../styles/colors'

type callToActionProps = React.PropsWithChildren<{
	image: string
}>

export default function CallToAction(props: callToActionProps) {
	// TODO wrap the entire thing in reactRouTer so that we can use USE NAVIGATE
	return (
		<>
			<div className={styles(props.image).all}>
				<div className={styles().contentSide}>
					<div className={styles().textBox}>{props.children}</div>
					<a href="#contactForm"> Contact Rose</a>
				</div>
			</div>
		</>
	)
}

function styles(image?: string) {
	return {
		all: css({
			backgroundImage: `url('${image}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			display: 'flex',
		}),
		selfPortraitContainer: css({
			position: 'relative',
			minWidth: '10rem',
		}),
		selfPortrait: css({
			position: 'absolute',
			maxWidth: '10rem',
			bottom: '0',
		}),
		contentSide: css({
			padding: '1rem',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}),
		textBox: css({
			backgroundColor: colors.primaryBackground,
			padding: '1rem',
		}),
	}
}
