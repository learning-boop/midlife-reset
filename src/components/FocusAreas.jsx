import { useRef } from 'react'
import Img from './Img'
import { focus } from '../data/content'

export default function FocusAreas() {
  const track = useRef(null)
  const scroll = (d) => track.current?.scrollBy({ left: d * 320, behavior: 'smooth' })
  return (
    <section>
      <div className="wrap">
        <div className="svc-head">
          <h2>{focus.title}</h2>
          <div className="arrows">
            <button aria-label="Previous" onClick={() => scroll(-1)}>‹</button>
            <button aria-label="Next" onClick={() => scroll(1)}>›</button>
          </div>
        </div>
        <div className="track" ref={track}>
          {focus.cards.map(([title, body, href, img]) => (
            <a className="scard" href={href} key={title}>
              <Img src={img} />
              <div className="top">{title}</div>
              <div className="bot"><p>{body}</p><span>Learn more</span></div>
            </a>
          ))}
        </div>
        <p className="kicker" style={{ marginTop: 56 }}>{focus.why.kicker}</p>
        <h2>{focus.why.title}</h2>
        <div className="why">
          {focus.why.items.map(([t, b]) => <div key={t}><h3>{t}</h3><p>{b}</p></div>)}
        </div>
      </div>
    </section>
  )
}
