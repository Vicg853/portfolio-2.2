export interface PageLocale<ContentBodyType extends (Object | undefined)> {
   seo?: {
      title: string;
      description: string;
      keywords: string;
   }
   header?: {
      title: string;
      description: string;
      button?: string;
      backgroundAlt?: string;
   }
   content: ContentBodyType
}

export interface PageDefaults {
   seo: {
      title: string;
      description: string;
      keywords: string;
   }
   header: {
      defaultBackgroundAlt: string;
   }
}