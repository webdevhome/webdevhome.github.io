import classNames from 'classnames'
import { ListTreeIcon } from 'lucide-react'
import { type FC, type ReactElement } from 'react'
import { useIsAppMode } from '../app/appMode.ts'
import {
  toggleJumpLinks,
  toggleJumpLinksMobile,
} from '../jump-links/useJumpLinks.ts'
import { isMinBreakpoint } from '../utils/breakpoints.ts'
import { UiActionButton } from '../ui/UiActionButton.tsx'
import { Logo } from './Logo.tsx'

function handleMenuClick() {
  if (isMinBreakpoint('md', 'and above')) {
    toggleJumpLinks()
  } else {
    toggleJumpLinksMobile()
  }
}

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
        'grid-cols-[1fr_auto] grid-rows-[auto_auto] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1',
      )}
    >
      <div className="flex items-center gap-x-2">
        <UiActionButton
          title="Toggle Jump Links"
          icon={<ListTreeIcon />}
          action={handleMenuClick}
          available={isAppMode('default', 'customize')}
        />
        <Logo />
      </div>

      <div
        className={classNames(
          'col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1',
          'flex items-center gap-x-1 justify-self-center',
        )}
      >
        {centerItems}
      </div>

      <div className="flex gap-x-1 justify-self-end">{actions}</div>
    </div>
  )
}
