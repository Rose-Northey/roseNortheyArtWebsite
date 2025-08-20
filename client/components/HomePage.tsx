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
export default function HomePage() {
	return (
		<>
			<p>testing this element</p>
			<CallToAction>{message}</CallToAction>

			<ContactForm />
		</>
	)
}
