import { site } from '../data/content'

// Brand mark from the client's design draft: sage + terracotta leaves inside concentric rings.
export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C9C4B3" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#8B9A6B" strokeWidth="1.5" />
      <circle cx="50" cy="15" r="2.5" fill="currentColor" />
      <path d="M50 22 C61 31 61 44 50 52 C39 44 39 31 50 22 Z" fill="#8B9A6B" />
      <path d="M50 52 C61 60 61 73 50 82 C39 73 39 60 50 52 Z" fill="#C4674B" />
    </svg>
  )
}

export default function Logo({ href = '#top' }) {
  return (
    <a className="logo" href={href}>
      <LogoMark />
      {site.name}
    </a>
  )
}