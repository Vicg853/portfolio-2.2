import type { PageDefaults, PageLocale } from '@custom-types/locales/pages'

import Head from 'next/head'

if(!process.env.NEXT_PUBLIC_SITE_URL)
   throw new Error('NEXT_PUBLIC_SITE_URL is not defined')
interface DefaultSeoProps {
   defaultLocaleSources: PageDefaults
   customLocaleSources?: PageLocale['seo']
   location: string
   locale: string
   locales: string[]
   defaultLocale: string
}

export const GlobalSeo: React.FC<DefaultSeoProps> = ({
   location, locale, defaultLocale, locales,
   defaultLocaleSources, customLocaleSources
}) => {
   const {
      seo
   } = defaultLocaleSources

   //* Main seo props
   const base = process.env.NEXT_PUBLIC_SITE_URL
   const canonicalPath = locale === defaultLocale ? 
      location : location.replace(`/${locale}`, '')

   //* Page or default seo props checks
   const title = customLocaleSources?.title ?? seo.title
   const description = customLocaleSources?.description ?? seo.description
   const keywords = customLocaleSources?.keywords ?? seo.keywords
   const robots = customLocaleSources?.robotsFollow?.join(',') ??
      seo.robots.join(',')

   //* Open graph props
   const ogTitle = customLocaleSources?.ogTags?.title ?? title
   const ogDescription = customLocaleSources?.ogTags?.description ?? description
   
   //* Twitter SEO props
   const twitterCard = customLocaleSources?.twitterTags?.cardType ?? 'summary_large_image'
   const twitterTitle = customLocaleSources?.twitterTags?.title ?? title
   const twitterDescription = customLocaleSources?.twitterTags?.description ?? description
   const twitterImage = customLocaleSources?.twitterTags?.image ?? undefined
   const twitterImageAlt = customLocaleSources?.twitterTags?.imageAlt ?? undefined
   const twitterPlayer = customLocaleSources?.twitterTags?.player ?? undefined
   

   return (
      <Head>
         <base href={base} target="_blank" />
         <meta charSet='utf-8' />
         <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
         <meta name="color-scheme" content="light dark" />
         <meta name="robots" content={robots} />
         
         <title>V.G. | {title}</title>
         <meta name='description' content={description} />
         <meta name='keywords' content={keywords.join(',')} />
         <meta name="owner" content='Victor Rosa Gomez' />
         <meta name="author" content='Victor Rosa Gomez' />
         <link rel="canonical" href={`${base}${canonicalPath}`} />

         {/* <!-- Locale related SEO --> */}
         <meta name="language" content={locale} />
         <meta property="og:locale" content={locale} />
         {locales.map(localeMap => localeMap !== locale ? (
            <>
               <link key={locale} rel="alternate" href={`${base}/${localeMap}${canonicalPath}`} hrefLang={localeMap} />
               <meta property="og:locale:alternate" content={localeMap} />
            </>
         ): '')}

         {/* <!-- Open Graph --> */}
         <meta property="og:type" content="website" />
         <meta property="og:site_name" content="Victor's Portfolio" />
         <meta property="og:title" content={ogTitle} />
         <meta property="og:description" content={ogDescription} />
         <meta property="og:url" content={canonicalPath} />
         {(customLocaleSources?.otherOgTags && customLocaleSources?.otherOgTags.length !== 0) 
         && customLocaleSources.otherOgTags.map((ogTag, i) => (
            <meta key={i} property={ogTag.property} content={ogTag.content} />
         ))}

         {/* <!-- Twitter Card --> */}
         <meta name="twitter:site" content="@Victor18855680" />
         <meta name="twitter:creator" content="@Victor18855680" />
         <meta name="twitter:card" content={twitterCard} />
         <meta name="twitter:title" content={twitterTitle} />
         <meta name="twitter:description" content={twitterDescription} />
         {(twitterCard === 'summary_large_image' || twitterCard === 'summary') && twitterImage && (
            <>
               <meta name="twitter:image" content={`${base}${twitterImage}`} />
               {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}
            </>
         )}
         {twitterCard === 'player' && twitterPlayer && (
            <>
               <meta name="twitter:player" content={`${base}${twitterPlayer.url}`} />
               <meta name="twitter:player:width" content={twitterPlayer.width.toString()} />
               <meta name="twitter:player:height" content={twitterPlayer.height.toString()} />
            </>
         )}
         
      </Head>
   )
}