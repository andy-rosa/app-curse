import { type ReactNode } from 'react'

export enum TagTheme {
  RED = 'red',
  PRIMARY = 'primary',
  GREEN = 'green',
  OUTLINE = 'outline'
}

export interface TagProps {
  children: ReactNode
  theme: TagTheme
  size?: 'small' | 'normal'
  href?: string
}
