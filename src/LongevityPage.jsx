import Header from './components/Header'
import Longevity from './components/Longevity'
import Discovery from './components/Discovery'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import useReveal from './components/useReveal'

// One service, one page. The section already opens with its own kicker,
// heading and standfirst, so it needs no separate hero band — and it ends on
// the booking call, which is the next step from here.
export default function LongevityPage() {
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <Longevity />
      <Discovery />
      <Footer />
    </>
  )
}
