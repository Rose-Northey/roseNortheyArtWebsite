import { css } from "@emotion/css"
import Alert from "./Alert"
import ContactForm from "./ContactForm"
import Header from "./Header"
const message = "Now that Rose is both an artist and a coder she has taken it upon herself to code a new website. Apologies for the inconveience, she is very silly and stubborn about these things. Come back soon!"

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <div className={styles.innerBody}>
        {message && <Alert message={message}/>}
        <ContactForm />

        </div>
      </div>
    </>
  )
}

export default App

const styles = {
  innerBody:css({
    maxWidth: "80%",
    margin:"auto",
    padding:"5rem 2rem 2rem 2rem",
  }),

}