import React from 'react'
import { type SidebarProps } from './Sidebar.props'
import cn from 'classnames'
import cls from './Sidebar.module.css'

const Sidebar = ({ children, className }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, cls.sidebar)}>
      {children}
    </aside>
  )
}

export default Sidebar
