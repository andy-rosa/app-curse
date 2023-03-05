import React from 'react'
import { type SidebarProps } from './Sidebar.props'
import cn from 'classnames'
import cls from './Sidebar.module.css'
import Menu from '../Menu/Menu'

const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, cls.sidebar)}>
      < Menu />
    </aside>
  )
}

export default Sidebar
