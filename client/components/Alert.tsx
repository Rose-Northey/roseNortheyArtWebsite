import { css } from '@emotion/css'

export interface AlertProps {
	message: string
}

export default function Alert({ message }: AlertProps) {
	return (
		<>
			<div className={alertWrapper}>
				<h3>Heh hem!</h3>
				<p>{message}</p>
			</div>
		</>
	)
}

const alertWrapper = css({
	padding: '1rem',
	margin: '1rem auto 1rem auto',
	border: '1px solid black',
	display: 'flex',
	flexDirection: 'column',
})
