import LogoMark from './LogoMark'
import { site } from '../data/content'

export default function Logo({ href = '#top' }) {
  return (
    <a className="logo" href={href}>
      <span className="logo-mark"><LogoMark /></span>
      <span className="logo-text">{site.nameShort}</span>
    </a>
  )
}
