import { css } from '@emotion/css'
import Alert from './Alert'
import ContactForm from './ContactForm'
import Header from './Header'
import { Spacing } from '../styles/stylingVariables'
import CallToAction from './CallToAction'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</>
	)
}