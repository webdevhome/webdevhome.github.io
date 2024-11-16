import { difference, union } from 'es-toolkit'
import { readonly, ref, watch, type DeepReadonly, type Ref } from 'vue'
import { type LocalStorageKeyString } from './localStorageKeys'

type UseListStorageSettingOptions = {
  name: LocalStorageKeyString
  migrate?: () => string | null | undefined
}

type ListStorageSetting = {
  value: DeepReadonly<Ref<string[]>>
  setValue: (newValue: string[]) => void
  add: (...items: string[]) => void
  remove: (...items: string[]) => void
}

export function useListStorageSetting({
  name,
  migrate,
}: UseListStorageSettingOptions): ListStorageSetting {
  const storageValue = localStorage.getItem(name) ?? migrate?.() ?? ''
  const parsedValue = (() => {
    try {
      return JSON.parse(storageValue)
    } catch {
      return []
    }
  })()
  const refValue = ref(parsedValue)
  const value = readonly(refValue)

  watch(refValue, () => {
    try {
      const storageValue = JSON.stringify(refValue.value)
      localStorage.setItem(name, storageValue)
    } catch (error) {
      console.error(error)
    }
  })

  function setValue(newValue: string[]) {
    refValue.value = newValue
  }

  function add(...items: string[]) {
    refValue.value = union(refValue.value, items)
  }

  function remove(...items: string[]) {
    refValue.value = difference(refValue.value, items)
  }

  return { value, setValue, add, remove }
}
