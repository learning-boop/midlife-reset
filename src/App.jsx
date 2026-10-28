import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import About from './components/About'
import Pillars from './components/Pillars'
import Explainer from './components/Explainer'
import Cardiometabolic from './components/Cardiometabolic'
import Support from './components/Support'
import Pricing from './components/Pricing'
import Nutrition from './components/Nutrition'
import Journey from './components/Journey'
import Why from './components/Why'
import Discovery from './components/Discovery'
import Faq from './components/Faq'
import Mailing from './components/Mailing'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'
import useReveal from './components/useReveal'
import { menopause, longevity } from './data/content'

export default function App() {
  const heroRef = useRef(null)
  useReveal()
  return (
    <>
      <Header />
      <Hero ref={heroRef} />
      <StatsBand />
      <About />
      <Pillars />
      <Explainer data={menopause} id="menopause" />
      <Explainer data={longevity} id="longevity" tone="explainer-alt" />
      <Cardiometabolic />
      <Support />
      <Pricing />
      <Nutrition />
      <Journey />
      <Why />
      <Discovery />
      <Faq />
      <Mailing />
      <Footer />
      <StickyBar watchRef={heroRef} />
    </>
  )
}
