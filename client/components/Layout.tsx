import { css } from '@emotion/css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Spacing } from '../styles/stylingVariables'

export default function Layout() {
	return (
		<>
			<div className="app">
				<Header />
				<div className={style}>
					<Outlet />
				</div>
			</div>
		</>
	)
}

const style = css({
	paddingTop: Spacing.headerHeight,
})
