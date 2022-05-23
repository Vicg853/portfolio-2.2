export interface PageLocale {
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
}

export interface PageDefaults {
   seo: {
      title: string;
      description: string;
      keywords: string[];
   }
}