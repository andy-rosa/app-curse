import { Arrow, type ButtonProps } from './Button.props'
import cls from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from './icons/arrow.svg'

export function Button (props: ButtonProps): JSX.Element {
  const {
    children,
    styled = 'primary',
    arrow = Arrow.NONE,
    ...otherProps
  } = props

  return (
    <button
      className={cn(cls.button, cls[styled])}
      {...otherProps}
    >
      {children}
      {
        arrow !== Arrow.NONE &&
                <span className={cn(cls.arrow, cls[arrow])}>
                  <ArrowIcon />
                </span>
      }
    </button>
  )
}
