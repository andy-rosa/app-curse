import { type LayoutProps } from './Layout.props'
import cls from './Layout.module.css'
import cn from 'classnames'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import { type FC } from 'react'

function Layout (props: LayoutProps): JSX.Element {
  const {
    children
  } = props

  return (
    <>
      <Header>header</Header>
      <main className={cn(cls.layout)}>
        <Sidebar>Sidebar</Sidebar>
        {children}
      </main>
      <Footer>Footer</Footer>
    </>
  )
}

export function withLayout<T extends Record<string, unknown>> (Component: FC<T>) {
  return function withLayoutComponent (props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
