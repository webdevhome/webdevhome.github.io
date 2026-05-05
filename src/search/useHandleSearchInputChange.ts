import type { ChangeEvent } from 'react'
import { getSearchTarget, setOnSiteSearchTerm } from './onSiteSearch.ts'
import { setKeyboardIndex, setSearchTerm } from './search.ts'

export function useHandleSearchInputChange(): (
  event: ChangeEvent<HTMLInputElement>,
) => void {
  return (event: ChangeEvent<HTMLInputElement>) => {
    if (getSearchTarget() === null) {
      setSearchTerm(event.target.value)
    } else {
      setOnSiteSearchTerm(event.target.value)
    }

    setKeyboardIndex(0)
  }
}
