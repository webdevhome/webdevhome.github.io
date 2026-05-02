import classNames from 'classnames'
import { ArrowLeftIcon } from 'lucide-react'
import { type FC } from 'react'
import { exitOnSiteSearch } from '../app/appModeStore.ts'
import { LinkItemIcon } from '../links/LinkItemIcon.tsx'
import { type LinkItem } from '../links/links.ts'

type Props = {
  title: LinkItem['title']
  icon: LinkItem['icon']
  color: LinkItem['color']
}

export const SearchTargetLabel: FC<Props> = ({ title, icon, color }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-start gap-y-4 sm:flex-row sm:items-center',
        'sm:px-8',
        'text-base',
        'text-gray-700 dark:text-gray-100',
      )}
    >
      <button
        onClick={exitOnSiteSearch}
        className={classNames(
          'flex items-center',
          'mr-4 px-2 py-1',
          'bg-black/10 hover:bg-black/20 active:bg-black/25',
          'dark:bg-white/15 dark:hover:bg-white/25 dark:active:bg-white/30',
          'rounded',
          'cursor-default select-none',
        )}
      >
        <span className="mr-1">
          <ArrowLeftIcon />
        </span>{' '}
        Back
      </button>

      <div className="flex flex-wrap items-center gap-y-2">
        <span className="mr-2">Search on</span>
        <span className="flex items-center gap-2">
          <LinkItemIcon icon={icon} color={color} />
          <span>
            <span className="text-brand-600 dark:text-brand-300">{title}</span>:
          </span>
        </span>
      </div>
    </div>
  )
}
