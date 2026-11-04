import Header from './components/Header'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import useReveal from './components/useReveal'

// No discovery-call band at the foot of this one. Every other page ends on an
// invitation to book; a privacy notice is read by someone checking what
// happens to their information, and selling to them there would be crass.
export default function PrivacyPage() {
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <Privacy />
      <Footer />
    </>
  )
}
