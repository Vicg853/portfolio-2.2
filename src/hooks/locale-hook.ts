import { useRouter } from "next/router"

import { i18n } from '../locales'

export const useLocale = () => {
   const locale = useRouter().locale!
   
   return i18n.table(locale)!
}