import type { PageFullType } from '../src/locales'
import type { GetStaticProps, NextPage } from 'next'

//* Importing API utils
import { getPageSource } from '@api-utils/locales-sources'

//* Required deps and components
import { Header } from '@components/header'
import { ServiceCard } from '@components/pages/this-webs/service-card'
import {
   Container,
   Section,
   SecTitle,
   Paragraph
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
         <Header 
            title='This website'
            description='Find out more about my biggest project...'
            background={{
               type: 'image',
               srcType: 'local',
               src: '/images/pages/this-site/Screenshot 2022-05-19 165800.jpg',
               alt: 'This website page header background'
            }} /> 
         <Container>
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
               <Section data-smallGap data-wrap>
                  <ServiceCard
                     name='Portfolio (this website)'
                     version='2.0.0'
                     devStatus='dev'
                     healthEndpoint={{
                        url: 'http://localhost:4000/.well-known/apollo/server-health',
                        justCheckStatusCode: 200,
                        method: 'GET'
                     }}
                   />
               </Section>
            </Section>
         </Container>
      </>
   )
}

export default ThisWebpage