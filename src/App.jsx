import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CredsStrip from './components/CredsStrip'
import About from './components/About'
import Pillars from './components/Pillars'
import Services from './components/Services'
import Menopause from './components/Menopause'
import VideoBand from './components/VideoBand'
import Metabolic from './components/Metabolic'
import Longevity from './components/Longevity'
import Fees from './components/Fees'
import Journey from './components/Journey'
import Faq from './components/Faq'
import Discovery from './components/Discovery'
import Cancellation from './components/Cancellation'
import Mailing from './components/Mailing'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import StickyBar from './components/StickyBar'
import useReveal from './components/useReveal'

export default function App() {
  const heroRef = useRef(null)
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <Hero ref={heroRef} />
      <CredsStrip />
      <About />
      <Pillars />
      <Services />
      <Menopause />
      <VideoBand />
      <Metabolic />
      <Longevity />
      <Fees />
      <Journey />
      <Faq />
      <Discovery />
      <Cancellation />
      <Mailing />
      <Footer />
      <StickyBar watchRef={heroRef} />
    </>
  )
}
