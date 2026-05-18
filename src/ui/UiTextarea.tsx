import { Textarea } from '@headlessui/react'
import classNames from 'classnames'
import { type ChangeEventHandler, type RefObject } from 'react'

type Props = {
  value?: string
  disabled?: boolean
  readonly?: boolean
  className?: string
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  ref?: RefObject<HTMLTextAreaElement | null>
}

export const UiTextarea = ({
  value = '',
  disabled = false,
  readonly = false,
  className = '',
  placeholder,
  onChange,
  ref,
}: Props) => {
  return (
    <Textarea
      value={value}
      className={classNames(
        'h-96 max-h-full w-full resize-none rounded border border-gray-300 p-4',
        'dark:border-gray-500 dark:bg-gray-700',
        'leading-relaxed',
        className,
      )}
      disabled={disabled}
      readOnly={readonly}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
    ></Textarea>
  )
}
