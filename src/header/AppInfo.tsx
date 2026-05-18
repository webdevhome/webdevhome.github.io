import { useStore } from '@nanostores/react'
import { type FC } from 'react'
import packageJson from '../../package.json' with { type: 'json' }
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { allLinksCount } from '../links/links.ts'
import { UiMenuFooter } from '../ui/UiMenuFooter.tsx'
import { UiMenuSection } from '../ui/UiMenuSection.tsx'

export const AppInfo: FC = () => {
  const hiddenLinksCount = useStore(hiddenLinksStore.$hiddenLinksCount)
  const visibleLinksCount = useStore(hiddenLinksStore.$visibleLinksCount)

  return (
    <UiMenuSection>
      <UiMenuFooter>
        <p>
          {allLinksCount} links &bull; {visibleLinksCount} visible &bull;{' '}
          {hiddenLinksCount} hidden
        </p>
        <div className="h-1"></div>
        <p>
          <strong>webdevhome version {packageJson.version}</strong>
        </p>
        <p>
          <a href="https://github.com/webdevhome/webdevhome.github.io/releases">
            Changelog
          </a>{' '}
          &bull;{' '}
          <a href="https://github.com/webdevhome/webdevhome.github.io">
            Source code
          </a>
        </p>
        <p>
          <a href="https://pixabay.com/illustrations/background-blurred-template-1696064/">
            Background image
          </a>{' '}
          by <a href="https://pixabay.com/users/yuri_b-2216431/">Yuri_B</a>
        </p>
      </UiMenuFooter>
    </UiMenuSection>
  )
}
