/**
 * Detects the OS the website is currently running on based on the useragent.
 */
export function detectPlatform(): 'mac' | 'windows' | 'linux' {
  if (navigator === undefined) {
    return 'linux'
  }

  const platform = navigator.platform?.toLowerCase() ?? ''
  const userAgent = navigator.userAgent?.toLowerCase() ?? ''

  if (platform.includes('mac') || userAgent.includes('mac')) {
    return 'mac'
  }

  if (platform.includes('win') || userAgent.includes('win')) {
    return 'windows'
  }

  return 'linux'
}
