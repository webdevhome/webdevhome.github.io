import type { SearchTarget } from '@/lib/links/links'
import { ref, watch } from 'vue'
import { currentAppMode } from './appMode'

export const searchTerm = ref('')
export const onSiteSearchTerm = ref('')
export const searchTarget = ref<SearchTarget | null>(null)

watch(currentAppMode, () => {
  searchTerm.value = ''
  onSiteSearchTerm.value = ''
  searchTarget.value = null
})
