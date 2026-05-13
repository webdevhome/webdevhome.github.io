import { type FC } from 'react'
import { CategoryButton } from './CategoryButton.tsx'

type Props = {
  hiddenLinksCount: number
  showHiddenLinks: boolean
  onClick: () => void
}

export const ShowHiddenLinksButton: FC<Props> = ({
  hiddenLinksCount,
  showHiddenLinks,
  onClick,
}) => {
  const hideShowVerb = showHiddenLinks ? 'Hide' : 'Show'
  const pluralizedLink = hiddenLinksCount === 1 ? 'link' : 'links'
  const showHiddenLinksButtonLabel = `${hideShowVerb} ${hiddenLinksCount} hidden ${pluralizedLink}`

  if (hiddenLinksCount <= 0) {
    return null
  }

  return (
    <CategoryButton onClick={onClick}>
      {showHiddenLinksButtonLabel}
    </CategoryButton>
  )
}
