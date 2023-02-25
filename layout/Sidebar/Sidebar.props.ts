import type React from 'react'
import { type ReactNode } from 'react'

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode
}
