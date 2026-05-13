import { type FC } from 'react'
import { DefaultIcon } from './DefaultIcon.tsx'
import { getIconSize, type IconSize } from './getIconSize.ts'
import type { IconData } from './iconCacheStore.ts'
import { SimpleIcons } from './SimpleIcons.tsx'

type Props = {
  size: IconSize
  iconData: IconData | null
}

export const LinkIcon: FC<Props> = ({ size, iconData }) => {
  const iconSize = getIconSize(size)

  if (iconData?.type === 'file') {
    return <img src={iconData.filepath} alt="" className={iconSize.className} />
  }

  if (iconData?.type === 'si') {
    return <SimpleIcons path={iconData.path} iconSize={iconSize} />
  }

  return <DefaultIcon iconSize={iconSize} />
}
