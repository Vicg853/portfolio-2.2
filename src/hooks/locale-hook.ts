import { useRouter } from "next/router"

import { i18n, defaultLocale } from '../locales'

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