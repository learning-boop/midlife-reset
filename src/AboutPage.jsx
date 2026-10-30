import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import useReveal from './components/useReveal'
import { about, site } from './data/content'

// Dr Sarika's own page. The story itself is the same <About> block the home
// page used to carry, so the two pages share one source of that copy.
//
// The qualifications move out of that block and into a section of their own
// here: on the home page they were a dimmed footnote under the biography, and
// on a page about the doctor they are a reason to trust her, so they get the
// room to be read. About.jsx no longer renders them, which also keeps them
// from appearing twice on this page.
function Qualification({ entry }) {
  const inProgress = entry.startsWith('Currently completing: ')
  const text = inProgress ? entry.slice('Currently completing: '.length) : entry
  // "Qualification, awarding body" — the first comma separates the two, and a
  // credential with no comma (MRCGP) is simply the qualification
  const split = text.indexOf(', ')
  const name = split === -1 ? text : text.slice(0, split)
  const body = split === -1 ? '' : text.slice(split + 2)

  return (
    <li>
      <h3>{name}</h3>
      {body && <p>{body}</p>}
      {inProgress && <span className="qual-tag">In progress</span>}
    </li>
  )
}

export default function AboutPage() {
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <About />

      <section className="quals" id="qualifications">
        <div className="wrap">
          <p className="kicker">Qualifications</p>
          <h2>Training and accreditation</h2>
          <ol className="qual-list">
            {about.creds.map((c) => <Qualification key={c} entry={c} />)}
          </ol>
          <a className="btn btn-plum" href={site.bookingUrl}>{about.cta}</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
