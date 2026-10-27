import { useState } from 'react'

export default function Mailing() {
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    // TODO: POST to mailing-list provider (Mailchimp / ConvertKit / Brevo)
    setDone(true)
  }
  return (
    <section className="mail">
      <div className="wrap">
        <div>
          <h3>Stay in touch</h3>
          <p>Occasional notes on midlife health, longevity and lifestyle medicine — no more than once a month.</p>
        </div>
        {done ? (
          <p style={{ color: 'var(--ink)' }}>Thank you — you're on the list.</p>
        ) : (
          <form onSubmit={submit}>
            <input type="text" placeholder="Name" aria-label="Name" required />
            <input type="email" placeholder="Email" aria-label="Email" required />
            <button className="btn btn-plum" type="submit">Join</button>
          </form>
        )}
      </div>
    </section>
  )
}
