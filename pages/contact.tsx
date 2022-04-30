import type { NextPage } from 'next'
import type { PageFullType  } from '../src/locales'
import type { GetStaticProps } from 'next'

//* Importing needed components and deps
import { getPageSource } from '@api-utils/locales-sources'

export interface ContactPageLocaleContent {
	title: string
   contactForm: {
      name: string
      email: string
      subject: string
      message: string
      send: string
   }
   otherContactCard: {
      emailTitle: string
      email: string
   }
}

interface ContactPageProps extends PageFullType<ContactPageLocaleContent> {
   locale: string
   gmtOffset: {
      gmt: string
      local: string
   }
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async ({ 
   locale, locales 
}) => {
   const pageSource = getPageSource(locale, 'contact')
   const gmtOffset: ContactPageProps['gmtOffset'] = {
      gmt: -3,
      local: 'São Paulo'
   }

   return {
      props: {
         pageSource: pageSource,
         gmtOffset,
         locale: locale ?? locales![0],
      }
   }
}


const Contact: NextPage<ContactPageProps>  = ({

}) => {

}

export default Contact