import type { ChangeEvent } from 'react'
import {
  $searchTarget,
  setKeyboardIndex,
  setOnSiteSearchTerm,
  setSearchTerm,
} from './search.ts'

export function useHandleSearchInputChange(): (
  event: ChangeEvent<HTMLInputElement>,
) => void {
  return (event: ChangeEvent<HTMLInputElement>) => {
    if ($searchTarget.get() === null) {
      setSearchTerm(event.target.value)
    } else {
      setOnSiteSearchTerm(event.target.value)
    }

    setKeyboardIndex(0)
  }
}
