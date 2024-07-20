import CallToAction from './CallToAction'
import ContactForm from './ContactForm'
const message =
	'Now that Rose is both an artist and a coder she has taken it upon herself to code a new website. Apologies for the inconveience, she is very silly and stubborn about these things. Come back soon!'
export default function HomePage() {
	return (
		<>
			<p>testing this element</p>
			<CallToAction>{message}</CallToAction>

			<ContactForm />
		</>
	)
}
