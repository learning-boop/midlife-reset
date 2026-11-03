import { useEffect } from 'react'

// With one index.html serving every route, the title and description in it
// belong to the home page. Each other page sets its own here, as the route
// mounts, so a browser tab, a bookmark and a shared link still name the page
// the reader is actually on.
//
// Worth knowing: a crawler that does not run JavaScript sees only what is in
// index.html. This keeps the pages right for people and for crawlers that do
// execute scripts; prerendering is the answer if that stops being enough.
export default function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
