import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CredsStrip from './components/CredsStrip'
import AboutIntro from './components/AboutIntro'
import Pillars from './components/Pillars'
import Services from './components/Services'
import VideoBand from './components/VideoBand'
import Journey from './components/Journey'
import Faq from './components/Faq'
import Discovery from './components/Discovery'
import Mailing from './components/Mailing'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import StickyBar from './components/StickyBar'
import useReveal from './components/useReveal'

// Menopause, metabolic health, longevity and fees are pages of their own now.
// Home introduces the clinic and routes to them through the service cards.
export default function App() {
  const heroRef = useRef(null)
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <Hero ref={heroRef} />
      <CredsStrip />
      <AboutIntro />
      <Pillars />
      <Services />
      <VideoBand />
      <Journey />
      <Faq />
      <Discovery />
      <Mailing />
      <Footer />
      <StickyBar watchRef={heroRef} />
    </>
  )
}
