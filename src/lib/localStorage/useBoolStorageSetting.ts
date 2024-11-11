import type { LocalStorageKeyString } from '@/lib/localStorage/localStorageKeys'
import { parseBool } from '@/lib/values/boolean'
import { readonly, ref, watch, type DeepReadonly, type Ref } from 'vue'

type UseBoolStorageSettingOptions = {
  name: LocalStorageKeyString
  defaultValue: boolean
  migrate?: () => string | null | undefined
}

type BoolStorageSetting = {
  value: DeepReadonly<Ref<boolean>>
  setValue: (newValue: boolean) => void
  toggle: () => void
}

export function useBoolStorageSetting({
  name,
  defaultValue,
  migrate,
}: UseBoolStorageSettingOptions): BoolStorageSetting {
  const storageValue = localStorage.getItem(name) ?? migrate?.() ?? ''
  const parsedValue = parseBool(storageValue) ?? defaultValue
  const refValue = ref(parsedValue)
  const value = readonly(refValue)

  watch(refValue, () => {
    // TODO: Convert value
    localStorage.setItem(name, String(refValue.value))
  })

  function setValue(newValue: boolean) {
    refValue.value = newValue
  }

  function toggle() {
    refValue.value = !refValue.value
  }

  return { value, setValue, toggle }
}
