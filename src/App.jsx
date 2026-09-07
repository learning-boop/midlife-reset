import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Journey from './components/Journey'
import StatsBand from './components/StatsBand'
import Support from './components/Support'
import FocusAreas from './components/FocusAreas'
import About from './components/About'
import Nutrition from './components/Nutrition'
import Discovery from './components/Discovery'
import Faq from './components/Faq'
import Mailing from './components/Mailing'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function App() {
  const heroRef = useRef(null)
  return (
    <>
      <Header />
      <Hero ref={heroRef} />
      <Pillars />
      <Journey />
      <StatsBand />
      <Support />
      <FocusAreas />
      <About />
      <Nutrition />
      <Discovery />
      <Faq />
      <Mailing />
      <Footer />
      <StickyBar watchRef={heroRef} />
    </>
  )
}
