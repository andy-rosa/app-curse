import React, { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { type FirstLevelMenuItem, type PageItem } from '@/interfaces/menu.interface'
import CourseIcon from './icons/courses.svg'
import ServiceIcon from './icons/services.svg'
import BookIcon from './icons/books.svg'
import ProductIcon from './icons/products.svg'
import { TopLevelCategory } from '@/interfaces/page.interface'
import cls from './Menu.module.css'
import cn from 'classnames'

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServiceIcon/>, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon/>, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductIcon/>, id: TopLevelCategory.Products }
]

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const buildFirstLevelMenu = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={cn(cls.firstLevel, {
                [cls.firstLevelActive]: menu.id === firstCategory
              })}>
                {menu.icon}
                <div>{menu.name}</div>
              </div>
            </a>
            {menu.id === firstCategory && buildSecondLevelMenu(menu)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <div className={cn(cls.secondBlock)}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={cn(cls.secondLevel)}>
              {m._id.secondCategory}
            </div>
            <div className={cn(cls.secondaryLevelBlock, {
              [cls.secondLevelBlockOpened]: m.isOpened
            })} >
              {buildThirdLevelMenu(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevelMenu = (pages: PageItem[], route: string): JSX.Element[] => {
    return (
      pages.map(page => (
        <div
          key={page.alias}
          className={cn(
            cls.thirdLevel, {
              [cls.thirdLevelActive]: false
            })
          }
        >
          <a
            href={`/${route}/${page.alias}`}
          >
            {page.category}
          </a>
        </div>
      )
      )
    )
  }

  return (
    <nav className={cn(cls.menu)}>
      {buildFirstLevelMenu()}
    </nav>
  )
}

export default Menu
