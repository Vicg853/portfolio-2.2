import type { AnimeAnimParams } from 'animejs'
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
}
const windowCheck = typeof window !== 'undefined'

export const MiniMenu = () => {
   //TODO Improve and add graphql query to external cms api (apollo probably)
   const routes = [
      {
        path: `/`,
        name: `Home`,
      },
      {
        path: `/projects`,
        name: `Projects`,
      },
      {
        path: `/resume`,
        name: `Resume`,
      },
      {
        path: `/this-site`,
        name: `This Site`,
      },
      {
        path: `/contact`,
        name: `Contact`,
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
                  key={i} href={link.path}>
                     <a className={miniNavItems}
                     onClick={() => setIsMenuOpen(false)}>
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