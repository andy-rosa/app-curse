import React from 'react'
import cn from 'classnames'
import cls from './Footer.module.css'
import { type FooterProps } from './Footer.props'

const Footer = ({ children }: FooterProps): JSX.Element => {
  return (
    <header className={cn(cls.header)}>
      {children}
    </header>
  )
}

export default Footer
