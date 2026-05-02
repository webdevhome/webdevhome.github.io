import type { PersistentEncoder } from '@nanostores/persistent'
import type { WritableAtom } from 'nanostores'

export function negateBooleanStore(store: WritableAtom<boolean>): void {
  store.set(!store.get())
}

export const jsonEncoder: PersistentEncoder = {
  encode: JSON.stringify,
  decode: JSON.parse,
}

export const booleanEncoder: PersistentEncoder = {
  encode: (v: boolean) => (v === true ? 'true' : 'false'),
  decode: (v: string) => v.toLowerCase() === 'true',
}
