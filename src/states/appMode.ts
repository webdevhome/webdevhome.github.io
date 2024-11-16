import { ref } from 'vue'

export const enum AppMode {
  default,
  search,
  customize,
}

export const currentAppMode = ref<AppMode>(AppMode.default)

export function isCurrentAppMode(...modes: AppMode[]): boolean {
  return modes.includes(currentAppMode.value)
}
