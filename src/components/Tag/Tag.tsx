import React from 'react'
import { type TagProps, TagTheme } from '@/components/Tag/Tag.props'
import cn from 'classnames'
import cls from './Tag.module.css'

export function Tag (props: TagProps): JSX.Element {
  const {
    children,
    theme = TagTheme.OUTLINE,
    size = 'normal',
    href
  } = props

  return (
    <div
      className={cn(cls.tag, cls[theme], cls[size])}
    >
      {
        (href != null)
          ? <a href={href}>{children}</a>
          : <>{ children }</>
      }
    </div>
  )
}

export default Tag
