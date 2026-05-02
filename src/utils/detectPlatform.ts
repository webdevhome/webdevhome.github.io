/**
 * Detects the OS the website is currently running on based on the useragent.
 */
export function detectPlatform(): 'mac' | 'windows' | 'linux' {
  if (navigator === undefined) {
    return 'linux'
  }

  const userAgent = navigator.userAgent?.toLowerCase() ?? ''

  if (userAgent.includes('mac')) {
    return 'mac'
  }

  if (userAgent.includes('win')) {
    return 'windows'
  }

  return 'linux'
}
