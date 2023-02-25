import React from 'react'
import { type PtagProps } from '@/components/Ptag/Ptag.props'
import cn from 'classnames'
import cls from './Ptag.module.css'

export function Ptag (props: PtagProps): JSX.Element {
  const {
    children,
    size = 'small',
    ...otherProps
  } = props
  return (
    <p
      className={cn(cls.paragraph, cls[size])}
      {...otherProps}
    >
      {children}
    </p>
  )
}
