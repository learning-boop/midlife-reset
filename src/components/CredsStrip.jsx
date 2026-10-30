import { accreditations } from '../data/content'

// The bodies behind Dr Sarika's registration and training, as their own marks.
// This slot used to carry the same credentials as scrolling text; the full
// names and what each one is now live in the qualifications section of her
// page, so here the logos do the recognising and the names ride along as alt
// text for anyone who cannot see them.
//
// The row is rendered twice inside the track and the animation travels exactly
// -50%, so the second copy lands where the first began and the loop is seamless.
// aria-hidden on the duplicate keeps a screen reader from reading it twice.
export default function CredsStrip() {
  const row = (duplicate) => (
    <span aria-hidden={duplicate || undefined}>
      {accreditations.map(([name, logo]) => (
        <b key={name}>
          <img src={logo} alt={duplicate ? '' : name} loading="lazy" />
        </b>
      ))}
    </span>
  )

  return (
    <div className="creds-strip" role="group" aria-label="Registrations and accreditations">
      <div className="creds-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

