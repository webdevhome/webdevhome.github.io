import { Textarea } from '@headlessui/react'
import classNames from 'classnames'
import {
  type ChangeEventHandler,
  type KeyboardEvent,
  type RefObject,
} from 'react'

type Props = {
  value?: string
  disabled?: boolean
  readonly?: boolean
  className?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  ref?: RefObject<HTMLTextAreaElement | null>
}

function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
  event.stopPropagation()
}

export const UiTextarea = ({
  value = '',
  disabled = false,
  readonly = false,
  className = '',
  onChange,
  ref,
}: Props) => {
  return (
    <Textarea
      value={value}
      className={classNames(
        'h-96 max-h-full w-full resize-none rounded border border-gray-300 p-4',
        'dark:border-gray-500 dark:bg-gray-700',
        className,
      )}
      disabled={disabled}
      readOnly={readonly}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      ref={ref}
    ></Textarea>
  )
}
