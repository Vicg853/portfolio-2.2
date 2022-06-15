import type { AnimeAnimParams } from 'animejs'
import type { Props } from '@pages/_app'

import { useEffect, useState } from 'react'
import anime from 'animejs'
import Link from 'next/link'

//* Importing styles 
import {
   Container,
   miniNavItems
} from './style'

//* Importing mini-nav state
import { useMenu } from './state'

interface LinksInterface {
   name: string
   path: string
   alt: string
}

export const MiniMenu: React.FC<{ pageProps: Props['pageProps']['pageSource'], locale: string }> = 
({ pageProps, locale }) => {
   const { menu } = pageProps
   
   //TODO Improve and add graphql query to external cms api (apollo probably)
   const routes: LinksInterface[] = [
      {
        path: `/`,
        name: menu.homePage.text,
        alt: menu.homePage.altText
      },
      {
        path: `/projects`,
        name: menu.projectsPage.text,
        alt: menu.projectsPage.altText
      },
      {
        path: `/resume`,
        name: menu.resumePage.text,
        alt: menu.resumePage.altText
      },
      {
        path: `/this-site`,
        name: menu.thisSitePage.text,
        alt: menu.thisSitePage.altText
      },
      {
        path: `/contact`,
        name: menu.contactPage.text,
        alt: menu.contactPage.altText
      }
    ]

   const [isMenuOpen, setIsMenuOpen] = useMenu()

   const [displayMenu, setDisplayMenu] = useState(false)

   const menuTarget = `.${Container.__linaria.className}`
   const animeMenuBg: AnimeAnimParams = {
      targets: menuTarget,
      opacity: isMenuOpen ? 1 : 0,
      scale: isMenuOpen ? 0.98 : 1.5,
      duration: 500, 
      easing: 'easeInOutBack'
   }
   
   const animeMenuItems: AnimeAnimParams = {
      targets: `.${miniNavItems}`,
      translateX: isMenuOpen ? 0 : -120,
      opacity: isMenuOpen ? 1 : 0,
      easing: 'easeInOutBack',
      delay: function(el, i) { 
         let delayResult = i * (isMenuOpen ? 40 : 10)
         return isMenuOpen ? delayResult : delayResult + 100
      },
   }
   
   //TODO Improve timings and timing related issues with this
   useEffect(() => {
      anime(animeMenuItems)
      if(isMenuOpen) setDisplayMenu(true)
      const animTimeline = anime(animeMenuBg)
      animTimeline.finished.then(() => {
         if(!isMenuOpen) setDisplayMenu(false)
         else setDisplayMenu(true)
      })
      animTimeline.play()
   }, [isMenuOpen])

   return (
      <>
         <Container data-show={displayMenu ? 'true' : 'false'}>
            <sub>
               {routes.map((link, i) => (
                  <Link 
                  passHref
                  locale={locale}
                  key={i} href={link.path}>
                     <a className={miniNavItems}
                     onClick={() => setIsMenuOpen(false)}
                     aria-label={link.alt} >
                        {link.name}
                     </a>
                  </Link>
               ))}
            </sub>
            <div id='background' />
         </Container>
      </>
   )
}