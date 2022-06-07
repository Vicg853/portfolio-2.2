import type { GetStaticProps, NextPage } from 'next'
import type { PageFullType } from '../src/locales'
import type { ErrorPages } from '@c-types/locales/error-pages'

import Image from 'next/image'
import Link from 'next/link'

//* Importing essential components
import { Header } from '@components/header'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'

type PageProps = PageFullType<ErrorPages>

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale, locales }) => {
   const pageSource = getPageSource(locale, 'error')

   return {
      props: {
         ...pageSource
      }
   }
}

const NotFound: NextPage<PageProps> = ({ content }) => {
   const {
      mainP
   } = content[404]
   return (
      <>
         {mainP}
         window.location !== {"^https:\/\/victorgomez\.dev\/(contact|projects|resume|this-site){0,1}$"}
      </>
   )
}

export default NotFound