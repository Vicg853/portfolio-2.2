import type { PageFullType } from '../src/locales'
import type { Service } from '@api-utils/content-retrivers/services'
import type { GetStaticProps, NextPage } from 'next'

//* Importing API utils
import { getPageSource } from '@api-utils/locales-sources'
import { getServices } from '@api-utils/content-retrivers/services'

//* Required deps and components
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '@components/header'
import { ServiceCard } from '@components/pages/this-webs/service-card'
import {
   Container,
   Section,
   SecTitle,
   Paragraph
} from '@p-styles/global'
import {
   servicesCardGridStye,
   thisWebSContainerStyles
} from '@p-styles/this-webs'
export interface ThisWebSPageLocaleContent {

}

type PageProps = {
   localeSource: PageFullType<ThisWebSPageLocaleContent>
   services: Service[]
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
   locale, locales
}) => {
   const localeSource = getPageSource(locale ?? locales![0], 'thisWebS')

   const services = await getServices(locale ?? locales![0] as any)

   return {
      props: {
         localeSource,
         services
      }
   }
}

const ThisWebpage: NextPage<PageProps> = ({
   localeSource,
   services
}) => {
   const {
      push,
      prefetch,
      beforePopState,
      asPath
   } = useRouter()

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
               alt: 'This website page header background'
            }} /> 
         <Container data-transition={initTransition ? 'true' : 'false'}
         className={thisWebSContainerStyles}>
            <Section data-vert data-widthMax data-smallGap>
               <SecTitle>Tumex proj</SecTitle>
               <Paragraph data-limitWidthMed>
                  Although I often ingress in third-party projects, my most remarkable one, which will never stop evolving, is my laboratory or as I call it the: “tumex-project”.

                  Currently, it only features this website and a couple of backend services hosted on Railway.app and Vercel... but I have bigger plans for it. I plan on building a self-managed Kubernetes cluster, that will provide a wide range of features (CI/CD environments, hosting, LXD VMs, etc). 

                  From that, I’ll probably develop storage services (a.k.a. google drive alternative), other useful services (e.g.: VPN), whole-home automation from scratch, a Jarvis-like A.I., and anything that comes to mind.

                  The biggest advantage/reason of it all?
                  I get to experience near-production original environments, solve challenges, broaden my knowledge and also have fun on the way. All without causing no one/no company any harm.
               </Paragraph>
            </Section>
            <Section data-vert data-widthMax data-smallGap>
               <SecTitle>Main services</SecTitle>
               <Paragraph>
                  p.s.: Press a card to get details about each service.
               </Paragraph>
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
                           compId={`services-section-this-site-page-${service.id}`}
                           onMouseOver={hover}
                           onClick={click}
                           {...service} />
                     )
                  })}
               </Section>
            </Section>
         </Container>
      </>
   )
}

export default ThisWebpage