import { type FC } from 'react'
import { DefaultIcon } from './DefaultIcon.tsx'
import type { IconData } from './iconCacheStore.ts'
import { SimpleIcons } from './SimpleIcons.tsx'
import { useIconSizeData, type IconSize } from './useIconSizeData.ts'

type Props = {
  size: IconSize
  iconData: IconData | null
}

export const LinkIcon: FC<Props> = ({ size, iconData }) => {
  const iconSize = useIconSizeData(size)

  if (iconData?.type === 'file') {
    return <img src={iconData.filepath} alt="" className={iconSize.className} />
  }

  if (iconData?.type === 'si') {
    return <SimpleIcons path={iconData.path} size={size} />
  }

  return <DefaultIcon size={size} />
}
