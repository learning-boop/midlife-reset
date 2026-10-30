import { useRef, useState } from 'react'
import { consultations, platform, programmes, site } from '../data/content'
import FillText from './FillText'

// The two ladders carry identical prices (£325 / £425 / £650) and differ only in
// what each tier covers, so showing them one after the other made the reader
// parse the same three numbers twice. One ladder, switched between.
//
// Built as a real tab set rather than two buttons: arrow keys move between the
// programmes and the panel is labelled by its tab, which is what a screen reader
// needs to report that the prices below belong to the selected programme.
export default function Pricing() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  const onKeyDown = (e) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + programmes.length) % programmes.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const block = programmes[active]

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="prog-head">
          <p className="kicker">{consultations.kicker}</p>
          <FillText>{consultations.title}</FillText>
          <p className="lede">{consultations.intro}</p>
          {/* these appointments are all virtual, so this is where saying which
              platform they run on is worth the reader's attention */}
          <div className="platform">
            <img src={platform.logo} alt={platform.alt} loading="lazy" />
            <p>{platform.note}</p>
          </div>
        </div>

        <div className="appts">
          {consultations.items.map((a) => (
            <div className="appt" key={a.name} data-reveal>
              <div className="appt-top">
                <h3>{a.name}</h3>
                <div className="price">{a.price}</div>
              </div>
              <div className="appt-meta">{a.meta}</div>
              <p>{a.body}</p>
            </div>
          ))}
        </div>

        <div className="prog">
          <div className="prog-switch" role="tablist" aria-label="Programme" onKeyDown={onKeyDown}>
            {programmes.map((p, i) => (
              <button
                key={p.id}
                id={`tab-${p.id}`}
                ref={(el) => { tabRefs.current[i] = el }}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`panel-${p.id}`}
                tabIndex={i === active ? 0 : -1}
                className={i === active ? 'is-on' : ''}
                onClick={() => setActive(i)}
              >
                {p.tab}
              </button>
            ))}
          </div>

          <div
            className="prog-panel"
            key={block.id}
            id={`panel-${block.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${block.id}`}
            tabIndex={0}
          >
            <div className="prog-head">
              <h3>{block.title}</h3>
              {block.intro && <p className="lede">{block.intro}</p>}
            </div>
            <div className="tiers">
              {block.tiers.map((t) => (
                <div className={`tier${t.popular ? ' pop' : ''}`} key={t.name}>
                  {t.popular && <span className="tag">Most popular</span>}
                  <div className="lvl">{t.level}</div>
                  <h4>{t.name}</h4>
                  <div className="price">{t.price}</div>
                  <p>{t.body}</p>
                  <div className="best">{t.best}</div>
                  <a className="link" href={site.bookingUrl}>Discuss this tier ›</a>
                </div>
              ))}
            </div>
            <p className="prog-note">{block.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
