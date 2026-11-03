import { Link } from 'react-router-dom'

// One anchor for the whole site, so no caller has to know whether a
// destination is a route or not.
//
// A path belonging to this site goes through the router, which swaps the page
// without a reload. Anything else — another site, an email address, a bare
// "#id" on the page you are already on — stays an ordinary anchor, because the
// router has no business with it.
export default function SiteLink({ href = '', children, ...rest }) {
  const internal = href.startsWith('/')
  if (!internal) return <a href={href} {...rest}>{children}</a>
  return <Link to={href} {...rest}>{children}</Link>
}
