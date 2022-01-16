import {
  mdiCheckboxBlankOutline,
  mdiCheckboxOutline,
  mdiMagnify,
} from '@mdi/js'
import classNames from 'classnames'
import React, { memo, MouseEvent, useCallback, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem, SearchTarget } from '../../links'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode } from '../../stores/appMode/appModeActions'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { toggleHiddenLink } from '../../stores/hiddenLinks/hiddenLinksActions'
import { setSearchTarget } from '../../stores/search/searchActions'
import { getIconUrl } from '../../utils/getIconUrl'
import { classes } from '../../utils/jsx'
import { DefaultIcon } from '../Icon/DefaultIcon'
import { MdiIcon } from '../Icon/MdiIcon'
import './Link.scss'

interface Props {
  link: LinkItem
  searchable?: boolean
  visible?: boolean
  focus?: boolean
}

export const Link = memo<Props>(function Link({
  link,
  searchable = false,
  visible = true,
  focus = false,
}) {
  const dispatch = useAppDispatch()
  const isCurrentAppMode = useIsCurrentAppMode()

  const showDescription = useAppSelector(
    (state) => state.appSettings.showDescriptions,
  )

  const isCustomizeMode = useMemo(
    () => isCurrentAppMode(AppMode.customize),
    [isCurrentAppMode],
  )

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>): void => {
      if (!isCustomizeMode) return

      event.preventDefault()
      dispatch(toggleHiddenLink(link.url))
    },
    [dispatch, isCustomizeMode, link.url],
  )

  const handleSearchClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      event.preventDefault()
      dispatch(setAppMode(AppMode.search))
      dispatch(setSearchTarget(link as SearchTarget))
    },
    [dispatch, link],
  )

  const linkClasses = useMemo(
    () =>
      classes({
        link: true,
        'link--is-visible': visible,
        'link--has-focus': focus,
        'link--customize-mode': isCustomizeMode,
      }),
    [focus, isCustomizeMode, visible],
  )

  if (!isCustomizeMode && !visible) return null

  return (
    <a
      href={link.url}
      rel="noreferrer"
      className={linkClasses}
      onClick={handleLinkClick}
    >
      <div className="link__icon-container" style={{ color: link.color }}>
        {link.icon !== undefined ? (
          <ReactSVG src={getIconUrl(link.icon)} className="link__icon" />
        ) : (
          <DefaultIcon />
        )}
      </div>

      <div className="link__label">{link.title}</div>

      <div className="link__actions">
        {searchable && !isCustomizeMode ? (
          <>
            <div className="link__info">
              <span className="link__info-text">
                <kbd
                  className={classNames(
                    'py-[1px] px-1',
                    'font-mono text-sm text-gray-600',
                    'bg-gray-100',
                    'border border-gray-400',
                    'rounded',
                  )}
                >
                  Tab
                </kbd>
              </span>
            </div>
            <div className="link__action" onClick={handleSearchClick}>
              <MdiIcon path={mdiMagnify} />
            </div>
          </>
        ) : null}

        {isCustomizeMode ? (
          <div className="link__action">
            <MdiIcon
              path={visible ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
            />
          </div>
        ) : null}
      </div>

      {showDescription && link.description !== undefined ? (
        <div className="link__description">{link.description}</div>
      ) : null}
    </a>
  )
})
