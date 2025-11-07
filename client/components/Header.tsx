import { css } from '@emotion/css'
import { Spacing } from '../styles/stylingVariables'
import { colors } from '../styles/colors'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.homeAndLogo}>
					<img className={styles.logo} src={'/logo.png'} />
					<div className={styles.navContainer}>
						<Link className={styles.nav} to={`/`}>
							Home
						</Link>
						<Link className={styles.nav} to={`/shop`}>
							Shop
						</Link>
					</div>
				</div>

				<h1 className={styles.title}>Rose Northey Art</h1>
			</header>
		</>
	)
}

const styles = {
	logo: css({
		width: '3rem',
		'@media (max-width:500px)': {
			display: 'none',
		},
	}),
	header: css({
		padding: '1rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'fixed',
		zIndex: 10,
		width: '100%',
		height: Spacing.headerHeight,
		backgroundColor: colors.primaryBackground,
		'@media (max-width:500px)': {
			fontSize: '0.8rem',
			padding: '0.5rem',
		},
	}),
	homeAndLogo: css({
		display: 'flex',
		gap: '1rem',
		alignItems: 'center',
		height: '100%',
	}),
	nav: css({
		backgroundColor: '#ffffff6b',
		padding: '0.3rem',
		color: colors.primaryText,
		margin: '0',
	}),
	navContainer: css({
		display: 'flex',
		gap: '0.5rem',
		'@media (max-width:330px)': {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),
	title: css({
		'@media (max-width:500px)': {
			margin: '0.5rem',
		},
	}),
}
