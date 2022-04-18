import { useRouter } from "next/router"

import { i18n } from '../locales'
import { defaultLocale } from '../locales/configs'


export const useLocale = () => {
   const { locale, locales} = useRouter() as {
      locale: string
      locales: string[]
   }
   
   return {
      ...i18n.table(locale ?? defaultLocale)!,
      locale,
      locales
   }
}