import Header from './components/Header'
import BookLink from './components/BookLink'
import About from './components/About'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import SocialLinks from './components/SocialLinks'
import SiteLink from './components/SiteLink'
import useReveal from './components/useReveal'
import { about, aboutHero, site } from './data/content'

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

      {/* A light ground on purpose: the biography below it is dark green, and
          two dark bands in a row would read as one heavy block. */}
      <section className="abouthero">
        <div className="wrap">
          <p className="kicker">{aboutHero.kicker}</p>
          <h1>{aboutHero.title}</h1>
          <p className="lede">{aboutHero.intro}</p>
          <div className="abouthero-actions">
            <BookLink>{aboutHero.cta}</BookLink>
            <SiteLink className="btn btn-ghost" href="/#services">{aboutHero.secondary} →</SiteLink>
          </div>
          {/* Her own profiles, on the page that is about her rather than only
              at the foot of every page. The light ground needs the dark set. */}
          <div className="abouthero-social">
            <span>Follow Dr Sarika</span>
            <SocialLinks className="social-ink" />
          </div>
        </div>
      </section>

      <About />

      <section className="quals" id="qualifications">
        <div className="wrap">
          <p className="kicker">Qualifications</p>
          <h2>Training and accreditation</h2>
          <ol className="qual-list">
            {about.creds.map((c) => <Qualification key={c} entry={c} />)}
          </ol>
          {/* both ways in, at the point the page has finished making its
              case: the free call for anyone still deciding, and helfy for
              anyone who has decided */}
          <div className="cta-pair">
            <BookLink>{about.cta}</BookLink>
            <BookLink href={site.appointmentUrl} className="btn btn-ghost">
              {site.ctaAppointment}
            </BookLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
