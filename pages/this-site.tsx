import type { PageFullType } from '../src/locales'
import type { GetServicePromise } from '@api-utils/content-retrivers/services'
import type { OnlySvcPageLocaleContent } from './this-site/[svc]'
import type { GetStaticProps, NextPage } from 'next'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getPlaiceholder } from 'plaiceholder'

//* Importing API utils
import { getPageSource } from '@api-utils/locales-sources'
import { getServices } from '@api-utils/content-retrivers/services'

//* Required deps and components
import { Header } from '@components/header'
import { ServiceCard } from '@components/pages/this-webs/service-card'
import {
   Container,
   Section,
   SecTitle,
   Paragraph,
   SectionDesc
} from '@p-styles/global'
import {
   servicesCardGridStye,
   thisWebSContainerStyles,
   servicesSectionStyle,
   mainPSectionStyle
} from '@p-styles/this-webs'
export interface ThisWebSPageLocaleContent {
   onlySvc: OnlySvcPageLocaleContent
   pageTitle: string
   pageDescription: string
   services: {
      title: string
      caption: string
      cardDevStats: {
         title: string
         underDev: string
         ready: string
         draft: string
         deprecated: string
      }
      version: string
      healthStats: {
         title: string
         running: string
         down: string
         unknown: string
         maintenance: string
      }
   }
}

type PageProps = {
   pageSource: PageFullType<ThisWebSPageLocaleContent>
   services: GetServicePromise[]
   headerBlurUrl: string
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
   locale, locales
}) => {
   const pageSource = getPageSource(locale ?? locales![0], 'thisWebS')

   const { base64 } = await getPlaiceholder('/images/pages/this-site/Screenshot 2022-05-19 165800.jpg')

   const services = await getServices(locale ?? locales![0] as any)

   return {
      props: {
         pageSource,
         services,
         headerBlurUrl: base64
      }
   }
}

const ThisWebpage: NextPage<PageProps> = ({
   pageSource,
   services,
   headerBlurUrl: blurData
}) => {
   const {
      push,
      prefetch,
      beforePopState,
      asPath
   } = useRouter()

   const {
      pageTitle,
      pageDescription,
      services: servicesCaptionsLocaleSources
   } = pageSource.content

   const [initTransition, setInitTransition] = useState(false)

   useEffect(() => {

      //* When coming back from service description will cause scroll 
      //* to restore to top. So when clicking on the back button (on svc details page)
      //* a query parram with #services-{id} will be added to the url.
      //* If this param is present, we will scroll to the service card with that id or
      //* fallback to the services container
      const queryPathCheckRgx = /^\/this-site#services/
      if(asPath.match(queryPathCheckRgx)) document
         .getElementById(`services-section-this-site-page-${asPath.replace(queryPathCheckRgx, '')}`)?.scrollIntoView({
         behavior: 'auto',
         block: 'nearest'
      }) ?? document.getElementById('services-section-this-site-page')?.scrollIntoView({
         behavior: 'auto',
         block: 'nearest'
      })

      beforePopState(() => {
         setInitTransition(true)
         return true
      })
   })

   return (
      <>
         <Header 
            title='This website'
            description='Find out more about my biggest project...'
            background={{
               type: 'image',
               srcType: 'local',
               src: '/images/pages/this-site/Screenshot 2022-05-19 165800.jpg',
               alt: 'This website page header background',
               blurData
            }} /> 
         <Container data-transition={initTransition ? 'true' : 'false'}
         className={thisWebSContainerStyles}>
            <section className={mainPSectionStyle}>
               <SecTitle>{pageTitle}</SecTitle>
               <Paragraph data-limitWidthMed>
                  {pageDescription.split('\n').map((p, i) => <>{p}<br key={i} /></>)}
               </Paragraph>
            </section>
            <section className={servicesSectionStyle}>
               <SecTitle>{servicesCaptionsLocaleSources.title}</SecTitle>
               <SectionDesc>
                  {servicesCaptionsLocaleSources.caption}
               </SectionDesc>
               <Section data-smallGap data-wrap 
               className={servicesCardGridStye}
               id='services-section-this-site-page'>
                  {services.map((service, key) => {
                     const hover = service.details ? 
                        () => prefetch(`/this-webs/${service.id}`) : undefined
                     const click = service.details ? 
                        () => push(`this-site/${service.id}`) : undefined

                     return (
                        <ServiceCard key={key}
                           localeSources={servicesCaptionsLocaleSources}
                           compId={`services-section-this-site-page-${service.id}`}
                           onMouseOver={hover}
                           onClick={click}
                           {...service} />
                     )
                  })}
               </Section>
            </section>
         </Container>
      </>
   )
}

export default ThisWebpage