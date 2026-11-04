import { useLocation } from 'react-router-dom'
import { cancellation as c } from '../data/content'
import Disclosure from './Disclosure'

// The terms used to sit open on the page, so the foot of the fees page was a
// wall of policy. The heading and the sentence that matters stay visible, and
// the seven terms fold away behind them until someone wants them.
//
// Arriving from the footer's "Cancellation policy" link is the exception: that
// link is a request to read the policy, so it opens on arrival rather than
// landing the reader on a closed panel they have to click again.
export default function Cancellation() {
  const { hash } = useLocation()
  const askedFor = hash === '#cancellation'

  return (
    <section className="cancellation" id="cancellation">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p className="lede">{c.intro}</p>
        </div>
        <Disclosure
          className="cancel-fold"
          defaultOpen={askedFor}
          summary={<span>{c.summary}</span>}
        >
          <dl className="cancel-list">
            {c.items.map(([t, b]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd>{b}</dd>
              </div>
            ))}
          </dl>
          <p className="note-line">{c.outro}</p>
        </Disclosure>
      </div>
    </section>
  )
}
