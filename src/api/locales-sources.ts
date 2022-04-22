import type { Pages } from '../locales/pages-list'
import { i18n } from '../locales'

import { defaultLocale } from '../locales/configs'

export const getPageSource = (locale: string, page: keyof Pages) => {
   const defaultLocaleSource =  i18n.table(defaultLocale)
   const pageSource = locale ? 
      (i18n.table(locale) ?? defaultLocaleSource) 
      : defaultLocaleSource
   return pageSource!['page']['pages'][page]
}