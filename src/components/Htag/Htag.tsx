import { type ReactNode } from 'react'
import { type HtagProps } from './Htag.props'
import cls from './Htag.module.css'

export function Htag (props: HtagProps): JSX.Element {
  const {
    tag,
    children
  } = props

  switch (tag) {
    case 'h1':
      return <h1 className={cls.h1}>{children}</h1>
    case 'h2':
      return <h2 className={cls.h2}>{children}</h2>
    case 'h3':
      return <h3 className={cls.h3}>{children}</h3>
    default:
      return <></>
  }
}
