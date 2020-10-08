export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Required<Pick<T, TRequired>>
