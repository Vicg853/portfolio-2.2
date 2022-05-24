import { Html, Head, Main, NextScript } from 'next/document'

import {
   ThemePreHydration
} from './_app'


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='*' />
        <link  rel="stylesheet"
           href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,700&display=swap' />
        <link  rel="stylesheet"
           href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300;1,700&display=swap' />
        <link  rel="stylesheet"
           href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500&display=swap' />
      </Head>
      <body>
         <ThemePreHydration />
         <Main />
         <NextScript />
      </body>
    </Html>
  )
}
