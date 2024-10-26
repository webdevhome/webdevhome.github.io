export function slugify(input: string): string {
  return input.toLowerCase().replaceAll(' ', '-')
}
