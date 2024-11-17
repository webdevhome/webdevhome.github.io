import { ref } from 'vue'

export const showJumpLinks = ref(false)
export const showJumpLinksMobile = ref(false)

export function toggleJumpLinks() {
  showJumpLinks.value = !showJumpLinks.value
}

export function toggleJumpLinksMobile() {
  showJumpLinksMobile.value = !showJumpLinksMobile.value
}
