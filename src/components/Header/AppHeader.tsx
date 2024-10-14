import classNames from 'classnames'
import { FC, ReactElement } from 'react'
import { Logo } from './Logo'

interface Props {
  centerItems?: ReactElement | null
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ centerItems, actions }) => {
  return (
    <div
      className={classNames(
        'grid items-center',
        'grid-cols-[1fr,auto] grid-rows-[auto,auto] md:grid-cols-[1fr,auto,1fr] md:grid-rows-1',
        'px-page',
        'bg-white/20 dark:bg-black/20',
      )}
    >
      <Logo />

      {centerItems !== null ? (
        <div className="col-span-2 row-start-2 flex items-center gap-x-1 justify-self-center py-2 md:col-span-1 md:col-start-2 md:row-start-1">
          {centerItems}
        </div>
      ) : null}

      {actions !== null ? (
        <div className="flex gap-x-1 place-self-end py-2">{actions}</div>
      ) : null}
    </div>
  )
}
