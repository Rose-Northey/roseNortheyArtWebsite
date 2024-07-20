import { css } from '@emotion/css'
import { Spacing } from '../styles/stylingVariables'
import { useNavigate } from 'react-router-dom'

export default function CallToAction(props: React.PropsWithChildren<{}>) {
	const navigate = useNavigate()
	// TODO wrap the entire thing in reactRouTer so that we can use USE NAVIGATE
	const onClick = () => {}
	return (
		<>
			<div className={styles.all}>
				<div className={styles.contentSide}>
					<div className={styles.textBox}>{props.children}</div>
					<button>text</button>
				</div>
			</div>
		</>
	)
}

const styles = {
	all: css({
		paddingTop: Spacing.headerHeight,
		backgroundImage: "url('Public/background.jpg')",
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
