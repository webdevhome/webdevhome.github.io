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
        'grid-cols-[1fr,auto,1fr]',
        'px-page',
      )}
    >
      <Logo />

      {centerItems !== null ? (
        <div className="flex items-center gap-x-1 py-2">{centerItems}</div>
      ) : null}

      {actions !== null ? (
        <div className="flex gap-x-1 place-self-end py-2">
          {actions}
        </div>
      ) : null}
    </div>
  )
}
