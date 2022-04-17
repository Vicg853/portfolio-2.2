import {
   Container,
   socialLinkStyle,
   sourcesLinkStyle
} from './style'

import { useMenu } from '../menu/state'
import { useLocale } from '@hooks/locale-hook'

export interface SocialLinksInterface {
   name: string
   url: string
   icon: {
      src: string
      alt?: string
      type: 'url' | 'svg' | 'data'
   }
}

export interface SourcesLinksINterface {
   name: string
   url: string
   description?: string
   alt?: string
}

export const Footer = () => {
   const { footer } = useLocale()

   //TODO Improve and add graphql query to external cms api (apollo probably)
   const externalSocialLinks: SocialLinksInterface[] = [
      {
         name: footer.footerSocialsTexts['github'].name,
         url: 'https://github.com/Vicg853',
         icon: {
            type: 'url',
            src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            alt: footer.footerSocialsTexts['github'].alt
         }
      },
      {
         name: footer.footerSocialsTexts['linkedin'].name,
         url: 'https://www.linkedin.com/in/vicg853/?locale=en_US',
         icon: {
            type: 'url',
            src: 'https://static-exp1.licdn.com/sc/h/8s162nmbcnfkg7a0k8nq9wwqo',
            alt: footer.footerSocialsTexts['linkedin'].alt
         }
      },
      {
         name: footer.footerSocialsTexts['stackOverflow'].name,
         url: 'https://stackoverflow.com/users/11699778/victor-gomez',
         icon: {
            type: 'url',
            src: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196',
            alt: footer.footerSocialsTexts['stackOverflow'].alt
         }
      }
    ]

   const externalSourcesLinks: SourcesLinksINterface[] = [
      {
         name: footer.thanksAndReferencesTexts['icons8'].name,
         url: 'https://icons8.com',
         description: footer.thanksAndReferencesTexts['googleFonts'].description,
         alt: footer.thanksAndReferencesTexts['icons8'].alt
      },
      {
         name: footer.thanksAndReferencesTexts['googleFonts'].name,
         url: 'https://fonts.google.com',
         description: footer.thanksAndReferencesTexts['googleFonts'].description,
         alt: footer.thanksAndReferencesTexts['googleFonts'].alt
      },
      {
         name: footer.thanksAndReferencesTexts['unsplash'].name,
         url: 'https://unsplash.com',
         description: footer.thanksAndReferencesTexts['googleFonts'].description,
         alt: footer.thanksAndReferencesTexts['googleFonts'].alt
      }
    ]

   //* Using menu state for simple cosmetic purpose
   const [menuState] = useMenu()

   return (
      <Container data-menu-open={menuState ? 'true' : 'false'}>
         <sub >
            <section>
               <span className='decor-tag'>&lsaquo;footer&rsaquo;</span> 
               {footer.footerMessage.split('\n').map((line) => <>{line}<br /></>)}
               <span className='decor-tag'>&lsaquo;&frasl;footer&rsaquo;</span>
            </section>
            <section>
               <span className='decor-tag'>&lsaquo;socials&rsaquo;</span> 
               <br />
               {externalSocialLinks.map((val, i, fullArr) => (
                  <a className={socialLinkStyle} 
                     href={val.url}
                     rel='noopener noreferrer'
                     target='_blank'
                     key={`social-link-id-${i}`} 
                     data-remove-top-margin={i === 0 ? 'true' : 'false'}
                     data-remove-bot-margin={i === fullArr.length - 1 ? 'true' : 'false'}>
                     {(val.icon.type === 'url' || val.icon.type === 'data') && 
                        <img src={val.icon.src} alt={val.icon.alt ?? `Access to my ${val.name}`} className='icon' />}
                     {val.name}
                  </a>
               ))}
               <br />
               <span className='decor-tag'>&lsaquo;&frasl;socials&rsaquo;</span>
            </section>
            <section>
               <span className='decor-tag'>&lsaquo;thanksAndReferenceSection&rsaquo;</span> 
               <br />
               {externalSourcesLinks.map((val, i, fullArr) => (
                  <div key={`sources-link-id-${i}`} 
                  className={sourcesLinkStyle}
                  data-remove-top-margin={i === 0 ? 'true' : 'false'}
                  data-remove-bot-margin={i === fullArr.length - 1 ? 'true' : 'false'}>
                     <a rel='noopener noreferrer'
                        target='_blank' href={val.url}
                        className='link'>
                        {val.name}
                     </a>
                     {val.description &&  <span className='description'>{val.description}</span>}
                  </div>   
               ))}
               <br />
               <span className='decor-tag'>&lsaquo;&frasl;thanksAndReferenceSection&rsaquo;</span>
            </section>
         </sub>
         <div className='separator' />
         <sub>
            <span className='copyright-notice'>
               {footer.copyrightText}
            </span>
         </sub>
      </Container>
   )
}