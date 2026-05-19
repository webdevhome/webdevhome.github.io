import classNames from 'classnames'
import { ListTreeIcon } from 'lucide-react'
import { type FC, type ReactElement } from 'react'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { UiActionButton } from '../ui/UiActionButton.tsx'
import { Logo } from './Logo.tsx'
import { handleMenuClick } from './handleMenuClick.tsx'

type Props = {
  centerItems?: ReactElement | null
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ centerItems, actions }) => {
  const isAppMode = useIsAppMode()

  return (
    <div
      className={classNames(
        'grid items-center',
        'grid-cols-[1fr_auto] grid-rows-[auto_auto] md:grid-cols-[1fr_auto_minmax(max-content,1fr)] md:grid-rows-1',
      )}
    >
      <div className="flex items-center gap-x-2">
        <UiActionButton
          title="Toggle Jump Links"
          icon={<ListTreeIcon />}
          action={handleMenuClick}
          enabled={isAppMode('default', 'customize')}
        />
        <div
          className={classNames({
            'max-sm:hidden': isAppMode('customize'),
          })}
        >
          <Logo />
        </div>
      </div>

      <div
        className={classNames(
          'row-start-2 md:col-start-2 md:row-start-1',
          'flex items-center gap-x-1 justify-self-center',
        )}
      >
        {centerItems}
      </div>

      <div className="flex gap-x-1 justify-self-end">{actions}</div>
    </div>
  )
}
