const breakpoints = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '96rem',
} as const

const directions = {
  above: '>',
  below: '<',
  'and above': '>=',
  'and below': '<=',
} as const

/**
 * Returns `true` if the media query created with the provided parameters
 * matches. The most common values for `direction` are `below` and `and above`.
 * The available sizes match the ones in TailwindCSS.
 */
export function isMinBreakpoint(
  size: keyof typeof breakpoints,
  direction: keyof typeof directions,
): boolean {
  const queryString = `(width ${directions[direction]} ${breakpoints[size]})`
  const query = matchMedia(queryString)
  return query.matches
}
