/**
 * Makes a string lowercase and replaces spaces with `'-'`.
 * It's currently used to generate IDs in order to scroll
 * to a specific category.
 */
export function slugify(input: string): string {
  return input.toLowerCase().replaceAll(' ', '-')
}
