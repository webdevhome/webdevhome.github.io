import { slugify } from '../utils/slugify.ts'
import { jumpLinksStore } from './jumpLinksStore.ts'

export function getHandleJumpLinkClick(label: string) {
  return () => {
    const target = document.getElementById(slugify(label))
    if (target === null) return

    target.scrollIntoView({ behavior: 'smooth' })
    jumpLinksStore.setShowJumpLinksMobile(false)
  }
}
