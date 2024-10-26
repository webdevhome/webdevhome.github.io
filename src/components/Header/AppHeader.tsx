import { mdiMenu } from '@mdi/js'
import classNames from 'classnames'
import { FC, ReactElement } from 'react'
import { useToggleJumpLinks } from '../App/useToggleJumpLinks'
import { AppAction } from './AppAction'
import { Logo } from './Logo'
import { config } from '../../tailwindConfig'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'

interface Props {
  centerItems?: ReactElement | null
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ centerItems, actions }) => {
  const toggleJumpLinks = useToggleJumpLinks()
  const isCurrentAppMode = useIsCurrentAppMode()

  function handleMenuClick() {
    const query = `(min-width: ${config.theme.screens.md})`
    const queryList = window.matchMedia(query)

    if (queryList.matches) {
      toggleJumpLinks.toggle()
    } else {
      toggleJumpLinks.toggleMobile()
    }
  }

  return (
    <div
      className={classNames(
        'grid items-center',
        'grid-cols-[1fr,auto] grid-rows-[auto,auto] md:grid-cols-[1fr,auto,1fr] md:grid-rows-1',
        'border-b border-black/10 dark:border-white/10',
        'px-page',
      )}
    >
      <div className="flex items-center gap-x-2">
        <AppAction
          icon={mdiMenu}
          action={handleMenuClick}
          available={isCurrentAppMode(AppMode.default, AppMode.customize)}
        />
        <Logo />
      </div>

      {centerItems !== null ? (
        <div
          className={classNames(
            'col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1',
            'flex items-center gap-x-1 justify-self-center',
          )}
        >
          {centerItems}
        </div>
      ) : null}

      {actions !== null ? (
        <div className="flex gap-x-1 place-self-end py-2">{actions}</div>
      ) : null}
    </div>
  )
}
