import { Html, Head, Main, NextScript } from 'next/document'

import {
   ThemePreHydration
} from './_app'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
         <ThemePreHydration />
         <Main />
         <NextScript />
      </body>
    </Html>
  )
}
