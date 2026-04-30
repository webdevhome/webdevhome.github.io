export type StorageValueConverter<T> = {
  parse: (stringValue: string) => T
  stringify: (value: T) => string
}

export type StorageMappingOptions<T> = {
  storage?: Storage
  converter?: StorageValueConverter<T>
}

export type StorageMapping<T> = {
  read: () => T
  write: (value: T) => void
  delete: () => void
}

export const defaultConverter: StorageValueConverter<string> = {
  parse: (stringValue) => stringValue,
  stringify: (value) => value,
}

export const booleanConverter: StorageValueConverter<boolean> = {
  parse: (stringValue) => stringValue.toLowerCase() === 'true',
  stringify: (value) => (value === true ? 'true' : 'false'),
}

export const arrayConverter: StorageValueConverter<unknown[]> = {
  parse: (stringValue) => JSON.parse(stringValue),
  stringify: (value) => JSON.stringify(value),
}

export function storageMapping<T>(
  key: string,
  defaultValue: T,
  converter: StorageValueConverter<T>,
  storage: Storage = localStorage,
): StorageMapping<T> {
  return {
    read() {
      const stringValue = storage.getItem(key)
      if (stringValue === null) {
        return defaultValue
      }
      return converter.parse(stringValue)
    },
    write(value) {
      const stringValue = converter.stringify(value)
      storage.setItem(key, stringValue)
    },
    delete() {
      storage.removeItem(key)
    },
  }
}
