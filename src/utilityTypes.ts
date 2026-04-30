export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Required<Pick<T, TRequired>>
export type ValuesOf<T> = T[keyof T]
export type AnyStringWithAutoComplete<T extends string> = T | (string & {})
