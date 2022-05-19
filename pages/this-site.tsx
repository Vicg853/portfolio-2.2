import type { PageFullType } from '../src/locales'
import type { GetStaticProps, NextPage } from 'next'

//* Importing API utils
import { getPageSource } from '@api-utils/locales-sources'

//* Required deps and components
import {

} from '@p-styles/global'
export interface ThisWebSPageLocaleContent {

}

type PageProps = {
   localeSource: PageFullType<ThisWebSPageLocaleContent>
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
   locale, locales
}) => {
   const localeSource = getPageSource(locale ?? locales![0], 'thisWebS')

   return {
      props: {
         localeSource
      }
   }
}

const ThisWebpage: NextPage<PageProps> = ({
   localeSource
}) => {
   return (
      <>
         
      </>
   )
}

export default ThisWebpage