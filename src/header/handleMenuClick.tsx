import { jumpLinksStore } from '../jump-links/jumpLinksStore.ts'
import { isMinBreakpoint } from '../utils/breakpoints.ts'

export function handleMenuClick() {
  if (isMinBreakpoint('md', 'and above')) {
    jumpLinksStore.toggleJumpLinks()
  } else {
    jumpLinksStore.toggleJumpLinksMobile()
  }
}
