import { type FC } from 'react'
import { appConfig } from '../app/appConfig.ts'

export const Logo: FC = () => {
  const singleElementClassName = 'text-brand-800 dark:text-brand-100'
  const element1ClassName = 'text-brand-900 dark:text-brand-300'
  const element2ClassName = 'text-brand-600 dark:text-brand-50'

  const titleText = (() => {
    if (Array.isArray(appConfig.appTitle)) {
      return (
        <>
          <span className={element1ClassName}>{appConfig.appTitle[0]}</span>
          <span className={element2ClassName}>{appConfig.appTitle[1]}</span>
        </>
      )
    }
    if (typeof appConfig.appTitle === 'string') {
      return (
        <span className={singleElementClassName}>{appConfig.appTitle}</span>
      )
    }
    return (
      <>
        <span className={element1ClassName}>my</span>
        <span className={element2ClassName}>links</span>
      </>
    )
  })()

  return (
    <div className="font-mono text-lg font-bold tracking-wider text-nowrap select-none">
      {titleText}
    </div>
  )
}
