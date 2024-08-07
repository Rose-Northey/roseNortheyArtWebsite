import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'

export const routes = createRoutesFromElements(
	<Route path="/" element={<Layout />}>
		<Route index element={<HomePage />} />
	</Route>,
)
