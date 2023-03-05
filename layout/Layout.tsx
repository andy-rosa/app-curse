import { type LayoutProps } from './Layout.props'
import cls from './Layout.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import { type FC } from 'react'

function Layout (props: LayoutProps): JSX.Element {
  const {
    children
  } = props

  return (
    <div className={cls.layout}>
      <Header className={cls.header}>header</Header>
      <Sidebar className={cls.sidebar}>Sidebar</Sidebar>
      <main className={cls.content}>
        {children}
      </main>
      <Footer className={cls.footer} />
    </div>
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
