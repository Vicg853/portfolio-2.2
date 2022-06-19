import type { AppProps } from 'next/app'
import type { ThemeTyping } from '@custom-types/theme'
import type { PageFullType, RosettaPerLocaleProps } from '../src/locales/index'

import Head from 'next/head'

import CssTheme from '@components/css-theme'

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
      pageSource: PageFullType<any> & {
         pageDefaults: RosettaPerLocaleProps<any>['page']['defaults']
         footer: RosettaPerLocaleProps<any>['footer']
         nav: RosettaPerLocaleProps<any>['nav']
         menu: RosettaPerLocaleProps<any>['menu']
      }
   }
}

export default function App({ Component, pageProps, router, ...props }: Props) {
   const { pageSource } = pageProps
   return (
    <>
      <Head>
         <style dangerouslySetInnerHTML={{__html: getThemesStyles() }} />
      </Head>
      <CssThemeProvider />
      <div className={GlobalStyles}/>
      <GlobalSeo defaultLocaleSources={pageSource.pageDefaults}
      customLocaleSources={pageProps.pageSource?.mainProps?.seo ?? undefined}
      locale={router.locale ?? router.defaultLocale!}
      locales={router.locales!}
      defaultLocale={router.defaultLocale!}
      location={router.pathname} />
      <>
         <NavBar pageProps={pageSource} 
         locale={router.locale ?? router.defaultLocale!} 
         locales={router.locales!} />
         <MiniMenu pageProps={pageSource}
         locale={router.locale ?? router.defaultLocale!}  />
         {/* @ts-ignore */}
         <ContentContainer>
            <Component {...pageProps as any} />
         </ContentContainer>
         <Footer pageProps={pageSource} />
      </>
    </>
  )
}
