/**
 * This is a helper function for the `<Activity>` component from React.
 * It converts the result of `predicate` into `'visible'` or `'hidden'`.
 * @returns
 * - `'visible'` if `predicate` returns `true`
 * - `'hidden'` if `predicate` returns `false`
 */
export function useActivityMode(): (
  predicate: () => boolean,
) => 'visible' | 'hidden' {
  return (predicate) => (predicate() ? 'visible' : 'hidden')
}
