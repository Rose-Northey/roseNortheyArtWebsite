import { css } from '@emotion/css'
import { Spacing } from '../styles/stylingVariables'

export default function CallToAction(props: React.PropsWithChildren<object>) {
	// TODO wrap the entire thing in reactRouTer so that we can use USE NAVIGATE
	return (
		<>
			<div className={styles.all}>
				<div className={styles.contentSide}>
					<div className={styles.textBox}>{props.children}</div>
					{/* <button>text</button> */}
				</div>
			</div>
		</>
	)
}

const styles = {
	all: css({
		paddingTop: Spacing.headerHeight,
		backgroundImage: `url('/background.jpg')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
	}),
	selfPortrait: css({}),
	contentSide: css({
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}),
	textBox: css({
		backgroundColor: '#faf5b4dd',
		padding: '1rem',
	}),
}
