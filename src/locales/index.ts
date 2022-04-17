//* Defining needed types and importing needed deps for locales
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
//TODO Add pages !!! when they are ready
interface RosettaPerLocaleProps<PagesList> {
   nav: NavAltsLocale
   menu: LinksLocale
   //page: {
   //   defaults: PageDefaults
   //   pages: {
   //      [key in keyof PagesList]: PageFullType<PagesList[key]>
   //   }
   //}
   footer: FooterLocale
}

//* Importing different locales objects

import { enUsLocale } from './en-US'
import { ptBRLocale } from './pt-BR'
import { frLocale } from './fr'

export const i18n = rosetta<RosettaPerLocaleProps<Pages>>({
   'en-US': enUsLocale,
   'pt-BR': ptBRLocale,
   'fr': frLocale,
})