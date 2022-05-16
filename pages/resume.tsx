import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'

export interface ResumePageLocaleContent {
	
}

type PageProps =  PageFullType<ResumePageLocaleContent>

export const getStaticProps: GetStaticProps<{
   locale: string
   pageSource: PageProps
}> = async ({ locale, locales }) => {
   const pageSource = getPageSource(locale, 'resume')

   return {
      props: {
         locale: locale!,
         pageSource
      }
   }
}


const Resume = () => {
   return ( 
      <>
         
      </>
   )
}

export default Resume