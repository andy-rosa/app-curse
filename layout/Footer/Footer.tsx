import React from 'react'
import cn from 'classnames'
import cls from './Footer.module.css'
import { type FooterProps } from './Footer.props'
import dayjs from 'dayjs'

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, cls.footer)}>
      <div>OwlTop © 2020 - {dayjs().format('YYYY')} Все права защищены</div>
      <a href={'/'} target={'_blank'} rel="noreferrer">Пользовательское соглашение</a>
      <a href={'/'} target={'_blank'} rel="noreferrer">Политика конфиденциальности</a>
    </footer>
  )
}

export default Footer
