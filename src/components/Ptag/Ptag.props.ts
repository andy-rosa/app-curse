import { type HTMLAttributes, type ReactNode } from 'react'

export interface PtagProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  size?: 'small' | 'normal' | 'large'
}
