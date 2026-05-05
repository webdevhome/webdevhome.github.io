import type { PersistentEncoder } from '@nanostores/persistent'
import type { WritableAtom } from 'nanostores'

export function updateStore<T>(
  store: WritableAtom<T>,
  updateFn: (oldState: T) => T,
) {
  store.set(updateFn(store.get()))
}

export function negateBooleanStore(store: WritableAtom<boolean>): void {
  updateStore(store, (v) => !v)
}

export const jsonEncoder: PersistentEncoder = {
  encode: JSON.stringify,
  decode: JSON.parse,
}

export function makeSetEncoder<T>(): PersistentEncoder<Set<T>> {
  return {
    encode: (setValue) => JSON.stringify(Array.from(setValue)),
    decode: (stringValue) => new Set(JSON.parse(stringValue)),
  }
}

export const booleanEncoder: PersistentEncoder<boolean> = {
  encode: (boolValue) => (boolValue === true ? 'true' : 'false'),
  decode: (stringValue) => stringValue.toLowerCase() === 'true',
}
