import { css } from "@emotion/css"
import Alert from "./Alert"
import ContactForm from "./ContactForm"
import Header from "./Header"
import { Spacing } from "../styles/stylingVariables"
import CallToAction from "./CallToAction"
const message = "Now that Rose is both an artist and a coder she has taken it upon herself to code a new website. Apologies for the inconveience, she is very silly and stubborn about these things. Come back soon!"

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <CallToAction >
          {message}
          </CallToAction>

        <ContactForm />


      </div>
    </>
  )
}

export default App

