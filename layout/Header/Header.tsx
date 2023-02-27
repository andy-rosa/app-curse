import React from 'react'
import cn from 'classnames'
import cls from './Header.module.css'
import { type HeaderProps } from './Header.props'

const Header = ({ children, className }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, cls.header)}>
      {children}
    </header>
  )
}

export default Header
