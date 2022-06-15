import type { AppProps } from 'next/app'
import type { ThemeTyping } from '@custom-types/theme'
import type { PageFullType } from '../src/locales/index'

import Head from 'next/head'

import { defaultLocale } from '../src/locales/configs'
import CssTheme from '@components/css-theme'
import { useLocale } from '@hooks/locale-hook'

import { 
   DarkTheme,  
   LightTheme,
   GlobalStyles 
} from '@components/global-styles'

//* Importing layout components
import { ContentContainer } from '@layout/content-cont'
import { GlobalSeo } from '@components/seo'
import { NavBar } from '@layout/nav-bar'
import { MiniMenu } from '@layout/menu'
import { Footer } from '@layout/footer'

const { Provider: CssThemeProvider, useGetCssThemesVal,
    useCssThemeKey, ThemePreHydration, getThemesStyles } = CssTheme<ThemeTyping>({ 
   dark: DarkTheme,
   light: LightTheme
}, 'dark', true, undefined, 'light')


export {
   useGetCssThemesVal,
   useCssThemeKey,
   CssThemeProvider,
   ThemePreHydration,
   getThemesStyles
}

export interface Props extends AppProps {
   pageProps: {
      pageSource: PageFullType<any>
      pageDefaults: RosettaPerLocaleProps<any>['page']['defaults']
      footer: RosettaPerLocaleProps<any>['footer']
      nav: RosettaPerLocaleProps<any>['nav']
      menu: RosettaPerLocaleProps<any>['menu']
   }
}

export default function App({ Component, pageProps, router, ...props }: Props) {
  return (
    <>
      <Head>
         <style>
            {getThemesStyles()}
         </style>
      </Head>
      <CssThemeProvider />
      <div className={GlobalStyles}/>
      <GlobalSeo defaultLocaleSources={pageLocaleDefaults}
      customLocaleSources={pageProps.pageSource?.mainProps?.seo ?? undefined}
      locale={router.locale ?? router.defaultLocale!}
      locales={router.locales!}
      defaultLocale={router.defaultLocale!}
      location={router.pathname} />
      <>
         <NavBar />
         <MiniMenu />
         {/* @ts-ignore */}
         <ContentContainer>
            <Component {...pageProps as any} />
         </ContentContainer>
         <Footer />
      </>
    </>
  )
}
