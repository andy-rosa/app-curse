import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonStyle = 'primary' | 'outline'

export enum Arrow {
  UP = 'up',
  LEFT = 'left',
  DOWN = 'down',
  RIGHT = 'right',
  NONE = 'none'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  styled: ButtonStyle
  arrow?: Arrow
}
