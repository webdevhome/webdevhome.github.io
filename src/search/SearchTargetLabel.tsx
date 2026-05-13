import { type FC } from 'react'
import { CategoryLabel } from '../links/CategoryLabel.tsx'
import { LinkIconBox } from '../icons/LinkIconBox.tsx'
import { linksToCategoryMap, type SearchTarget } from '../links/links.ts'

type Props = {
  target: SearchTarget
}

export const SearchTargetLabel: FC<Props> = ({ target }) => {
  const category = linksToCategoryMap.get(target) ?? null

  return (
    <div className="not-small-height:flex-col small-height:gap-x-4 flex items-center gap-2 self-center">
      <LinkIconBox iconString={target.icon} color={target.color} size="large" />

      <span className="not-small-height:items-center flex flex-col text-xl font-semibold dark:text-white">
        <div>{target.title}</div>
        <CategoryLabel category={category} />
      </span>
    </div>
  )
}
