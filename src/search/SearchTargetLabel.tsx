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
    <div className="flex items-center gap-2 gap-x-4">
      <LinkIconBox iconString={target.icon} color={target.color} size="large" />

      <span className="flex flex-col dark:text-white">
        <div className="text-xl leading-tight font-semibold">
          <a href={target.url} className="hover:underline">
            {target.title}
          </a>
        </div>
        <CategoryLabel category={category} />
        {target.description !== undefined && (
          <p className="mt-2 text-sm">{target.description}</p>
        )}
      </span>
    </div>
  )
}
