import { forwardRef } from 'react'
import Img from './Img'
import useTypewriter from './useTypewriter'
import { hero, focusAreas, site } from '../data/content'

// The longest phrase sizes the rotating line, so the heading reserves exactly the
// height it needs at any viewport and the buttons below never shift as it cycles.
const longestTail = hero.tail.reduce((a, b) => (b.length > a.length ? b : a))

const Hero = forwardRef(function Hero(_, ref) {
  const tail = useTypewriter(hero.tail)
  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">{hero.kicker}</p>
          <h1>
            {hero.lead}{' '}
            <span className="rot-wrap">
              <span className="rot-size" aria-hidden="true">{longestTail}</span>
              <span className="hero-tail rot">{tail}</span>
            </span>
          </h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-white" href={site.bookingUrl}>{hero.primary}</a>
            <a className="btn btn-hero-ghost" href="#why">{hero.secondary} →</a>
          </div>
          <div className="trust">
            {hero.trust.map(([b, t]) => <span key={b}><b>{b}</b> {t}</span>)}
          </div>
        </div>
        <div className="hero-photo">
          <Img src={hero.image} alt={hero.imageAlt} loading="eager" fetchpriority="high" />
        </div>
      </div>

      <div className="hero-focus">
        <div className="wrap">
          <p className="kicker">{focusAreas.kicker}</p>
          <ul className="chips">
            {focusAreas.items.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
})
export default Hero
