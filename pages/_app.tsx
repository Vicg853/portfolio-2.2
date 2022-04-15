import type { AppProps } from 'next/app'
import type { ThemeTyping } from '@custom-types/theme'


import CssTheme from '@components/css-theme'

import { 
   DarkTheme,  
   LightTheme,
   GlobalStyles 
} from '@components/global-styles'

//* Importing layout components
import { ContentContainer } from '@layout/content-cont'
import { GlobalSeo } from '@layout/gobal-seo'
import { NavBar } from '@layout/nav-bar'
import { MiniMenu } from '@layout/menu'
import { Footer } from '@layout/footer'

const { Provider: CssThemeProvider, useGetCssThemesVal,
    useCssThemeKey, ThemePreHydration } = CssTheme<ThemeTyping>({ 
   dark: DarkTheme,
   light: LightTheme
}, 'dark', true)

export {
   useGetCssThemesVal,
   useCssThemeKey,
   CssThemeProvider,
   ThemePreHydration
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={GlobalStyles}></div>
      <GlobalSeo />
      <CssThemeProvider />
      <>
         <NavBar />
         <MiniMenu />
         {/* @ts-ignore */}
         <ContentContainer>
            <Component {...pageProps} />
            <Footer />
         </ContentContainer>
      </>
    </>
  )
}
