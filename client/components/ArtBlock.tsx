import { css } from '@emotion/css'
import { Spacing } from '../styles/stylingVariables'
import { ReactNode } from 'react'
import React from 'react'

interface ArtBlockProps {
	children: ReactNode
}

//the pictures either say portrait or landscape or square
//they are set by height but there is more top margin for the landscape / square ones

export default function ArtBlock({ children }: ArtBlockProps) {
	return (
		<>
			<div className={styles.all}>
				{React.Children.map(children, (picture, index) => {
					if (!picture || typeof picture !== 'object') return null
					return <div key={index}>{picture}</div>
				})}
			</div>
		</>
	)
}

const styles = {
	all: css({
		maxHeight: '15rem',
		backgroundColor: '#414b6f',
		display: 'flex',
		justifyContent: 'center',
		padding: 'auto',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		gap: '1rem',

		'& > div': {
			maxWidth: '25%',
			aspectRatio: '1/1',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		'& > div > img': {
			maxWidth: '100%',
			maxHeight: '100%',
		},
	}),
}
