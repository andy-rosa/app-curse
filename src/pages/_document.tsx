import { Html, Head, Main, NextScript } from 'next/document'
import { type ReactNode } from 'react'

export default function Document (): ReactNode {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
