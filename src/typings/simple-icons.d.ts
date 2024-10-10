declare module 'simple-icons' {
  export type IconObject = {
    title: string
    slug: string
    hex: string
    source: string
    svg: string
    path: string
  }

  export function get(title: string): IconObject
}
