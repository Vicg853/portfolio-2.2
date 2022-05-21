import type { PageFullType } from '../../src/locales'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Service } from '@api-utils/content-retrivers/services'

//* Importing some API utils
import { getServicesId, getService } from '@api-utils/content-retrivers/services'
import { getPageSource } from '@api-utils/locales-sources'

//* Importing required components and deps
import Link from 'next/link'
import { miniNavItems } from '@layout/menu/style'
import { TechElCard } from '@components/mini-components/TechElCard'
import { ExternalLink } from '@components/mini-components/ExternalLink'
import {
   Container,
   Section,
   SecTitle,
   Paragraph
} from '@p-styles/global'
import {
   onlySvcContainerStyles,
   onlySvcTechStackSubStyles,
   onlySvcTechStackSubSecondStyles,
   thisWebPSectionsStyles,
   onlySvcLinksSectionStyles
} from '@p-styles/this-webs'

//* Importing assets
import WebsiteIcon from '@p-images/projects/www-source-icon-icons8.svg'

type StaticPaths = {
   svc: string
}

export const getStaticPaths: GetStaticPaths<StaticPaths> = async () => {
   const services = await getServicesId()

   return {
      paths: services.map(svc => ({ params: { svc } })),
      fallback: 'blocking'
   }
}

export interface OnlySvcPageLocaleContent {
   serviceName: string
   runsOn: string
   techStack: string
   back: string
}


interface PageProps {
   localeSource: PageFullType<OnlySvcPageLocaleContent>
   service: Service
}

export const getStaticProps: GetStaticProps<PageProps, StaticPaths> = async ({ 
   params,
   locale,
   defaultLocale 
}) => {
   if(!params || !params.svc) return {
      redirect: {
         destination: '/this-site',
         statusCode: 404,
         permanent: false
      }
   }

   const service = await getService(locale ?? defaultLocale as any, params.svc)

   if(!service) return {
      redirect: {
         destination: '/this-site',
         statusCode: 404,
         permanent: false
      }
   }

   const localeSource = getPageSource(locale ?? defaultLocale as any, 'thisWebS')

   return {
      props: {
         service,
         localeSource: {
            ...localeSource,
            content: localeSource.content.onlySvc
         }
      }
   }
}

const ServiceDetails: React.FC<PageProps> = ({
   service: {
      name,
      id,
      details
   },
   localeSource
}) => {
   const {
      description,
      links,
      runsOn,
      techStack
   } = details!

   const {
      content: localeContent
   } = localeSource

   return (
      <>
         <Container className={onlySvcContainerStyles}>
            <Section data-wrap className={onlySvcLinksSectionStyles}>
               <Link href={`/this-site#services-${id}`} passHref>
                  <a className={miniNavItems}>
                     {localeContent.back}
                  </a>
               </Link>
               {links && (
                  <sub>
                     {links.map((link, i) => (
                        <ExternalLink key={i} href={link.url} 
                        icon={link.type === 'WEBSITE' ? { 
                           srcType: 'comp',
                           src: WebsiteIcon,
                           alt: `Service ${name} link icon`
                        } : undefined}
                        target='_blank' rel='noopener noreferrer'
                        label={link.label ?? link.type.toLocaleLowerCase()} />
                     ))}
                  </sub>
               )}
            </Section>
            <Section className={thisWebPSectionsStyles}
            data-widthMax data-stretch data-wrap>
               <Section data-vert data-smallGap 
               data-justStart>
                  <SecTitle>{localeContent.serviceName}: {name}</SecTitle>
                  {description &&  (<Paragraph>{description}</Paragraph>)}
               </Section>
               {techStack && (
                  <Section data-vert data-smallGap>
                     <SecTitle>{localeContent.techStack}</SecTitle>
                     <sub className={onlySvcTechStackSubStyles}>
                        {techStack.map((tech, i) => (
                           <TechElCard url={tech.techLink}
                           key={i} techLabel={tech.techName} />
                        ))}
                     </sub>
                  </Section>
               )}
               {runsOn && (
                  <Section data-vert data-smallGap >
                     <SecTitle>{localeContent.runsOn}:</SecTitle>
                     <sub className={onlySvcTechStackSubSecondStyles} >
                        {runsOn.map((run, i) => (
                           <TechElCard key={i} techLabel={run} />
                        ))}
                     </sub>
                  </Section>
               )}
            </Section>
         </Container>
      </>
   )
}

export default ServiceDetails