import classNames from 'classnames'
import { ListTreeIcon } from 'lucide-react'
import { FC, ReactElement } from 'react'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { config } from '../../tailwindConfig'
import { useToggleJumpLinks } from '../App/useToggleJumpLinks'
import { AppAction } from './AppAction'
import { Logo } from './Logo'

type Props = {
  centerItems?: ReactElement | null
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ centerItems, actions }) => {
  const toggleJumpLinks = useToggleJumpLinks()
  const isCurrentAppMode = useIsCurrentAppMode()

  function handleMenuClick() {
    const query = `(min-width: ${config.theme.screens.md})`
    const queryList = globalThis.matchMedia(query)

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
      )}
    >
      <div className="flex items-center gap-x-2">
        <AppAction
          icon={<ListTreeIcon />}
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
        <div className="flex gap-x-1 justify-self-end">{actions}</div>
      ) : null}
    </div>
  )
}
