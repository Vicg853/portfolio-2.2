import type { SourcesLinksINterface, SocialLinksInterface } from '@layout/footer'
export interface FooterLocale {
   footerMessage: string;
   footerSocialsTexts: {
      [key: string]: Pick<SocialLinksInterface, 'text' | 'altText'>
   }
   thanksAndReferencesTexts: {
      [key: string]: Pick<SourcesLinksINterface, 'name' | 'description' | 'alt'>;
   }
   copyrightText: string;
}