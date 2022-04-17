import rosetta from 'rosetta'

import type { NavAltsLocale } from '@c-types/locales/nav-bar'
import type { LinksLocale } from '@c-types/locales/menu'
import type { PageDefaults, PageLocale } from '@c-types/locales/pages'
import type { FooterLocale } from '@c-types/locales/footer'

import type { Pages } from './pages-list'

interface PageFullType<PageContentType> {
   mainProps: PageLocale
   content: PageContentType
}


interface RosettaPerLocaleProps<PagesList> {
   nav: NavAltsLocale
   menu: LinksLocale
   page: {
      defaults: PageDefaults
      pages: {
         [key in keyof PagesList]: PageFullType<PagesList[key]>
      }
   }
   footer: FooterLocale
}


export const locale = rosetta<RosettaPerLocaleProps<Pages>>()