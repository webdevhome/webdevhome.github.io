export type Not<T extends object> = {
  [K in keyof T]?: never
}
