import ArtBlock from './ArtBlock'
import CallToAction from './CallToAction'
import ContactForm from './ContactForm'
const message = (
	<div>
		Rose is a poet, comedian, illustrator, and artist based in Wellington,
		NZ.
		<br></br>
		In visual art, Rose works mainly with collage and acrylic ink. She
		brings a sense of joy and whimsy into all of her practices.
	</div>
)

export enum ImageTypes {
	'portrait',
	'landscape',
	'square',
}

export type ImageInfo = { url: string; type: ImageTypes }

const artBlock1Art = [
	{
		url: '/art_couple.png',
		type: ImageTypes.portrait,
	},
	{
		url: '/art_sunflowers.png',
		type: ImageTypes.landscape,
	},
	{
		url: '/art_mushrooms.jpg',
		type: ImageTypes.square,
	},
]

const artBlock2Art = [
	{
		url: '/art_bird.png',
		type: ImageTypes.portrait,
	},
	{
		url: '/art_irritation.png',
		type: ImageTypes.portrait,
	},
	{
		url: '/art_mermaid.png',
		type: ImageTypes.square,
	},
]

export default function HomePage() {
	return (
		<>
			<CallToAction>{message}</CallToAction>
			<ArtBlock art={artBlock1Art} backgroundColour="#414b6f" />
			<ArtBlock art={artBlock2Art} backgroundColour="#c27653" />
			<ContactForm />
		</>
	)
}
