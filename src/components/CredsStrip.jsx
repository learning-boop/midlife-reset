import { accreditations } from '../data/content'

// The bodies behind Dr Sarika's registration and training, as their own marks.
//
// These used to travel past on a loop under the hero, which meant a reader had
// to wait for a mark to come round and could not take the set in at a glance.
// They sit still now, in one wrapping row above the footer, where they read as
// a closing statement of who stands behind the clinic — and because the footer
// is on every page, so are they.
//
// The names ride along as alt text for anyone who cannot see the marks; the
// full names and what each one is live in the qualifications section of Dr
// Sarika's page.
export default function CredsStrip() {
  return (
    <div className="creds-strip">
      <div className="wrap">
        <p className="creds-label">Registrations and accreditations</p>
        <div className="creds-row">
          {accreditations.map(([name, logo]) => (
            <img key={name} src={logo} alt={name} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  )
}
