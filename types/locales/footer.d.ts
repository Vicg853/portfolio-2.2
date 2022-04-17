import type { SourcesLinksINterface, SocialLinksInterface } from '@layout/footer'
export interface FooterLocale {
   footerMessage: string;
   footerSocialsTexts: {
      [key: string]: Pick<SocialLinksInterface, 'name'> & { alt: SocialLinksInterface['icon']['alt'] }
   }
   thanksAndReferencesTexts: {
      [key: string]: Pick<SourcesLinksINterface, 'name' | 'description' | 'alt'>;
   }
   copyrightText: string;
}