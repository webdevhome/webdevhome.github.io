import type { ChangeEvent } from 'react'
import { onSiteSearchStore } from './onSiteSearch.ts'
import { searchStore } from './searchStore.ts'

export function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
  const searchTarget = onSiteSearchStore.$searchTarget.get()
  if (searchTarget === null) {
    searchStore.setSearchTerm(event.target.value)
  } else {
    onSiteSearchStore.setSearchTerm(event.target.value)
  }

  searchStore.setKeyboardIndex(0)
}
