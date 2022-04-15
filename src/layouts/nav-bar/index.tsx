import type { AnimeParams } from 'animejs'

import { useEffect, useState } from 'react'
import anime from 'animejs'
import Link from 'next/link'
import Image from 'next/image'

//* Importing resources
import { useCssThemeKey } from '../../../pages/_app'

//* Importing connected components
import { useMenu } from '../menu/state'

//* Importing styled components
import { 
   Container,
   themeButtonStyle,
   menuButtonStyle,
   logoStyle
} from './style'
const windowCheck = typeof window !== 'undefined'

export const NavBar = () => {
   //* Mini menu state hook
   const [isMenuOpen, setIsMenuOpen] = useMenu()
   
   //* Theme state hook
   const [themeKey, setThemeKey] = useCssThemeKey()

   //* Setting deps to make nav's background change after scrolling through a target
   const [scrolled, setScrolled] = useState(false)
   useEffect(() => {
      if(!windowCheck) return

      window.addEventListener('scroll', () => {
         const scrolledThoughLimit = window.scrollY > (window.innerHeight/2)
         if(scrolledThoughLimit) setScrolled(true)
         else setScrolled(false)
      })
   })


   //* Theme toggle button animations 
   const mainTargetClass = `.${themeButtonStyle}`
   const animationTargets: AnimeParams[] = [
      {
         targets: `${mainTargetClass}-svg`,
         rotate: themeKey === 'dark' ? '90deg' : '40deg',
         easing: 'spring(2, 60, 10, 10)'
      },
      {
         targets:  `${mainTargetClass}-moon-mask`,
         cx:  themeKey === 'dark' ? 30 : 12,
         cy:  themeKey === 'dark' ? 0 : 4,
         easing: 'easeOutCubic'
      },
      {
         targets: `${mainTargetClass}-moon-circle`,
         r:  themeKey === 'dark' ? 5 : 9,
         easing: 'easeOutCubic'
      },
      {
         targets:  `${mainTargetClass}-moon-lines`,
         opacity:  themeKey === 'dark' ? 1 : 0,
         easing: 'easeOutCubic'
      }
   ]
   useEffect(() => {
      animationTargets.forEach(target => anime(target))
   }, [themeKey])

   //* Menu button animations
   const menuButtonClass = `.${menuButtonStyle}`
   const menuButtonAnimationTargets: AnimeParams[] = [
      {
         targets: `${menuButtonClass}-line1`,
         translateY: isMenuOpen ? '13' : '0',
         opacity: isMenuOpen ? 0 : 1,
      },
      {
         targets: `${menuButtonClass}-line3`,
         translateY: isMenuOpen ? '-13' : '0',
         opacity: isMenuOpen ? 0 : 1,
      },
      {
         targets: `${menuButtonClass}-line2`,
         translateX: isMenuOpen ? '15' : '0',
      },
      {
         targets: `${menuButtonClass}-arrow1`,
         rotate: isMenuOpen ? '0deg' : '52.5deg',
         opacity: isMenuOpen ? 1 : 0,
      },
      {
         targets: `${menuButtonClass}-arrow2`,
         rotate: isMenuOpen ? '0deg' : '-52.5deg',
         opacity: isMenuOpen ? 1 : 0,
      }
   ]

   useEffect(() => {
      menuButtonAnimationTargets.forEach(target => anime(target))
   }, [isMenuOpen])

      
   return (
      <Container 
      data-scrolled={(scrolled && !isMenuOpen) ? 'true' : 'false'} >
         <Link href='/' passHref>
            <a className={logoStyle}>
               {themeKey === 'dark' ? 
               <Image src='/images/global/Principal_darkbg.svg'  alt='Logo' layout='fill' /> : 
               <Image src='/images/global/Principal_lightbg.svg' alt='Logo' layout='fill' />}
            </a>
         </Link>
         <sub>
            <button
               className={`${themeButtonStyle} nav-buttons`}
               role='button'
               onClick={() => setThemeKey(themeKey === 'dark' ? 'light' : 'dark')}
               aria-label={`Set color theme to ${themeKey === 'dark' ? `dark.` : `light.`}`}>
               <svg className={`${themeButtonStyle}-svg`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <mask id='moon-mask'>
                     <rect x='0' y='0' width='100%' height='100%' />
                     <circle className={`${themeButtonStyle}-moon-mask`} r='6.5' />
                  </mask>
                  <circle cx="12" cy="12" className={`${themeButtonStyle}-moon-circle`} mask='url(#moon-mask)' />
                  <g className={`${themeButtonStyle}-moon-lines`}>
                     <line strokeLinecap='round' strokeLinejoin='round' x1='12' y1='1' x2='12' y2='3' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='12' y1='21' x2='12' y2='23' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='1' y1='12' x2='3' y2='12' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='21' y1='12' x2='23' y2='12' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
                     <line strokeLinecap='round' strokeLinejoin='round' x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
                  </g>
               </svg>
            </button>
            <button  
               className={`${menuButtonStyle} nav-buttons`}
               role='button'
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               aria-label={`${isMenuOpen ? 'Close' : 'Open'} mini menu.`}>
               <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' className={`${menuButtonStyle}-menu`}>
                  <g>
                     <line className={`${menuButtonStyle}-line1`} x1='5' y1='11' x2='43' y2='11' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                     <line className={`${menuButtonStyle}-line2`} x1='5' y1='24' x2='43' y2='24' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                     <line className={`${menuButtonStyle}-line3`} x1='5' y1='37' x2='43' y2='37' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                  </g>
                  <g>
                     <line className={`${menuButtonStyle}-arrow1`} x1='5' y1='24' x2='15' y2='11' style={{transform: 'rotate(0deg)',transformOrigin: '5px center'}} strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                     <line className={`${menuButtonStyle}-arrow2`} x1='5' y1='24' x2='15' y2='37' style={{transformOrigin: '5px center'}} strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                  </g>
               </svg>
            </button>
         </sub>
         <div id='background' />
      </Container>
   )
}