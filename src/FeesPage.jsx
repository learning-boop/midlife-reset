import Header from './components/Header'
import Fees from './components/Fees'
import Cancellation from './components/Cancellation'
import Discovery from './components/Discovery'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import useReveal from './components/useReveal'

// Fees and the cancellation policy together: someone reading what an
// appointment costs is the same person who wants to know what happens if they
// have to move it.
export default function FeesPage() {
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <Fees />
      <Cancellation />
      <Discovery />
      <Footer />
    </>
  )
}
