import type { Pages } from '../locales/pages-list'
import { i18n } from '../locales'

import { defaultLocale } from '../locales/configs'

export const getPageSource = <PageName extends keyof Pages>(locale: string | undefined, page: PageName) => {
   const defaultLocaleSource =  i18n.table(defaultLocale)
   const pageSource = locale ? 
      (i18n.table(locale) ?? defaultLocaleSource) 
      : defaultLocaleSource
   return {
      ...pageSource!['page']['pages'][page],
      footer: pageSource!['footer'],
      nav: pageSource!['nav'],
      menu: pageSource!['menu'],
      pageDefaults: pageSource!['page']['defaults']
   }
}