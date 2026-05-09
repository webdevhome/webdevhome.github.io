export type Not<T extends object> = {
  [K in keyof T]?: never
}

// Branded types
declare const $brand$: unique symbol
export type Branded<T, BRAND extends string> = T & { [$brand$]: BRAND }
export type BrandedString<BRAND extends string> = Branded<string, BRAND>

export function brandedString<
  BRAND extends string,
  T extends Branded<string, BRAND>,
>(value: string): T {
  return value as T
}
