import { type LocalStorageKeyString } from '@/lib/localStorage/localStorageKeys'
import { readonly, ref, watch, type DeepReadonly, type Ref } from 'vue'

type UseEnumStorageSettingOptions<T extends string> = {
  name: LocalStorageKeyString
  values: T[]
  defaultValue: T
  migrate?: () => string | null | undefined
}

type EnumStorageSetting<T extends string> = {
  value: DeepReadonly<Ref<T>>
  setValue: (newValue: T) => void
}

export function useEnumStorageSetting<T extends string>({
  name,
  values,
  defaultValue,
  migrate,
}: UseEnumStorageSettingOptions<T>): EnumStorageSetting<T> {
  const storageValue = localStorage.getItem(name) ?? migrate?.() ?? ''
  const parsedValue = (values as string[]).includes(storageValue)
    ? (storageValue as T)
    : defaultValue
  const refValue = ref(parsedValue) as Ref<T>
  const value = readonly(refValue) as DeepReadonly<Ref<T>>

  watch(refValue, () => {
    // TODO: Convert value
    localStorage.setItem(name, refValue.value)
  })

  function setValue(newValue: T) {
    refValue.value = newValue
  }

  return { value, setValue }
}
