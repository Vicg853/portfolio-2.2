import type { PageDefaults } from '@custom-types/locales/pages'

import Head from 'next/head'

if(!process.env.NEXT_PUBLIC_SITE_URL)
   throw new Error('NEXT_PUBLIC_SITE_URL is not defined')
interface DefaultSeoProps {
   defaultLocaleSources: PageDefaults
   location: string
   locale: string
   defaultLocale: string
}

export const GlobalSeo: React.FC<DefaultSeoProps> = ({
   location, locale, defaultLocale,
   defaultLocaleSources
}) => {
   const base = process.env.NEXT_PUBLIC_SITE_URL
   const canonicalPath = locale === defaultLocale ? 
      location : location.replace(`/${locale}`, '')
   
   return (
      <Head>
         <base href={base} target="_blank" />
         <meta charSet='utf-8' />
         <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
         <meta name="color-scheme" content="light dark" />
         
         <title>V.G. | {defaultLocaleSources.seo.title}</title>
         <meta name='description' content={defaultLocaleSources.seo.description} />
         <meta name='keywords' content={defaultLocaleSources.seo.keywords.join(',')} />
         <meta name="owner" content='Victor Rosa Gomez' />
         <meta name="author" content='Victor Rosa Gomez' />
         <link rel="canonical" href={canonicalPath} />
      </Head>
   )
}