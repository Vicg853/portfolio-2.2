type OpenGraphNames = 'og:type' | 'og:image' | 'og:audio' | 'og:determiner' | 'og:locale' | 'og:locale:alternate' | 'og:video' | 'og:image' | 'og:image:url' | 'og:image:secure_url' | 'og:image:type' | 'og:image:width' | 'og:image:height' | 'og:image:alt'
type TwitterCardTypes = 'summary' | 'summary_large_image' | 'player'
export interface PageLocale {
   seo?: Partial<{
      title: string
      description: string
      keywords: string[]
      robotsFollow: ('all' | 'noindex' | 'nofollow' | 'none' | 'noarchive' | 
      'nositelinkssearchbox' | 'nosnippet' | 'indexifembedded' | 'noimageindex' | 'notranslate')[]
      metaTags: {
         name: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>['name']
         content: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>['content']
      }[]
      linkTags: {
         rel: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>['rel']
         href: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>['href']
      }[]
      ogTags: {
         title: string
         description: string
      }
      otherOgTags: {
         property: OpenGraphNames
         content: string
      }[]
      twitterTags: {
         cardType: TwitterCardTypes
         title?: string
         description?: string
         image?: string
         imageAlt?: string
         player?: {
            url: string
            width: number
            height: number
         }
      }

   }>
   header?: {
      title: string;
      description: string;
      button?: string;
      backgroundAlt?: string;
   }
}

export interface PageDefaults {
   seo: {
      title: string;
      description: string;
      keywords: string[];
      robots: ('all' | 'index' | 'follow' | 'noindex' | 'nofollow' | 'none' | 'noarchive' |
      'nositelinkssearchbox' | 'nosnippet' | 'indexifembedded' | 'noimageindex' | 'notranslate')[];
   }
}