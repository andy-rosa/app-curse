import React, { useContext } from 'react'
import { AppContext } from '@/context/app.context'

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  return (
    <nav >
      {
        menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))
      }
    </nav>
  )
}

export default Menu
