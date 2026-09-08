import { forwardRef } from 'react'
import Img from './Img'
import useTypewriter from './useTypewriter'
import { hero, site } from '../data/content'

// The longest word sizes the rotating line, so the heading reserves exactly
// the height it needs at any viewport and the buttons below never shift.
const longest = hero.words.reduce((a, b) => (b.length > a.length ? b : a))

const Hero = forwardRef(function Hero(_, ref) {
  const word = useTypewriter(hero.words)
  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">{hero.kicker}</p>
          <h1>
            {hero.lead}<br />
            <span className="rot-wrap">
              <span className="rot-size" aria-hidden="true">{longest}</span>
              <span className="rot">{word}</span>
            </span>
          </h1>
          <div className="hero-actions">
            <a className="btn btn-white" href={site.bookingUrl}>{hero.primary}</a>
            <a className="btn btn-white" href="#about">{hero.secondary}</a>
          </div>
          <div className="trust">
            {hero.trust.map(([b, t]) => <span key={b}><b>{b}</b> {t}</span>)}
          </div>
        </div>
        <div className="hero-photo">
          <Img src={hero.image} fallback={hero.imageFallback} alt={hero.imageAlt} loading="eager" fetchpriority="high" />
        </div>
      </div>
      <div className="hero-checks">
        <div className="wrap">
          {hero.checks.map((c) => <div key={c}><span className="check">✓</span>{c}</div>)}
        </div>
      </div>
    </section>
  )
})
export default Hero
