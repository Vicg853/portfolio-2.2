import type { AnimeParams } from 'animejs'

import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import anime from 'animejs'
import Link from 'next/link'
import Image from 'next/image'

import { useCssThemeKey } from '../../../pages/_app'

//* Importing connected components
import { useMenu } from '../menu/state'
import { useLocale } from '@hooks/locale-hook'

//* Importing styled components
import { 
   Container,
   LocalesButtonsContainer,
   LocalesLinksSub,
   themeButtonStyle,
   menuButtonStyle,
   logoStyle
} from './style'
const windowCheck = typeof window !== 'undefined'

export const NavBar = () => {
   const { route } = useRouter()
   const { nav: navTranslations, locale, locales } = useLocale()

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

      
   //* Locales menu state
   const [localesMenuOpen, setLocalesMenuOpen] = useState(false)
   const [localesMenuClicked, setLocalesMenuClicked] = useState(false)



   return (
      <Container 
      data-scrolled={(scrolled && !isMenuOpen) ? 'true' : 'false'} >
         <Link href='/' passHref locale={locale}>
            <a className={logoStyle}>
               {themeKey === 'dark' ? 
               <Image src='/images/global/Principal_darkbg.svg' 
                  priority alt={navTranslations.logoAlt} layout='fill' /> :
               <Image src='/images/global/Principal_lightbg.svg' 
                  priority alt={navTranslations.logoAlt} layout='fill' />}
            </a>
         </Link>
         <sub>
            <LocalesButtonsContainer
            data-active={(localesMenuOpen || localesMenuClicked) ? 'true' : 'false'}
            onMouseOver={() => setLocalesMenuOpen(true)}
            onMouseLeave={() => setLocalesMenuOpen(false)}
            aria-label={navTranslations.localesMenu.mainAlt()((localesMenuOpen || localesMenuClicked))}>
               <svg onClick={() => setLocalesMenuClicked(!localesMenuClicked)}
               version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink' viewBox="0 0 171 171"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,171.99654v-171.99654h171.99654v171.99654z" fill="none"></path><g fill="var(--pallete-bgAlt)"><path d="M85.5,14.24304c-39.28621,0 -71.25,31.96379 -71.25,71.25c0,11.66831 3.0734,22.57487 8.05737,32.29907l-7.72339,27.65112c-1.79889,6.42462 4.5535,12.77669 10.97974,10.97974l27.672,-7.72339c9.71628,4.97353 20.6069,8.04346 32.26428,8.04346c39.28621,0 71.25,-31.96379 71.25,-71.25c0,-39.28621 -31.96379,-71.25 -71.25,-71.25zM85.5,24.93054c33.50992,0 60.5625,27.05259 60.5625,60.5625c0,33.50992 -27.05258,60.5625 -60.5625,60.5625c-10.69314,0 -20.69598,-2.7806 -29.41846,-7.63989c-1.2295,-0.68524 -2.6797,-0.85776 -4.03565,-0.4801l-26.31519,7.3407l7.34766,-26.30127c0.37957,-1.3581 0.20701,-2.81118 -0.4801,-4.0426c-4.86901,-8.72882 -7.66077,-18.73574 -7.66077,-29.43933c0,-33.50992 27.05258,-60.5625 60.5625,-60.5625zM112.13525,46.23596c-2.94854,0.04606 -5.30255,2.47169 -5.26025,5.42029v16.93579c-0.09423,0.57367 -0.09423,1.15887 0,1.73254v27.64417c-0.02725,1.92715 0.98526,3.71968 2.64982,4.69121c1.66457,0.97153 3.72329,0.97153 5.38786,0c1.66457,-0.97153 2.67708,-2.76406 2.64982,-4.69121v-23.15625h5.34375c1.92715,0.02725 3.71968,-0.98526 4.69121,-2.64982c0.97153,-1.66457 0.97153,-3.72329 0,-5.38786c-0.97153,-1.66457 -2.76406,-2.67708 -4.69121,-2.64982h-5.34375v-12.46875c0.02073,-1.44502 -0.54464,-2.83683 -1.56718,-3.85806c-1.02254,-1.02123 -2.41508,-1.58481 -3.86007,-1.56223zM73.03125,46.3125c-1.92715,-0.02725 -3.71968,0.98526 -4.69121,2.64982c-0.97153,1.66457 -0.97153,3.72329 0,5.38786c0.97153,1.66457 2.76406,2.67708 4.69121,2.64982h16.03125v3.5625c0,4.46202 -2.01146,8.37433 -5.18372,10.99365c-1.47317,1.21549 -2.18591,3.12464 -1.86967,5.00816c0.31623,1.88352 1.61338,3.45522 3.40274,4.12295c1.78936,0.66773 3.79903,0.33003 5.27187,-0.88587c5.53449,-4.56981 9.06628,-11.53141 9.06628,-19.23889v-8.90625c-0.0003,-2.95115 -2.3926,-5.34345 -5.34375,-5.34375zM65.92712,64.125c-2.21862,-0.00939 -4.21232,1.35297 -5.00977,3.42334l-17.8125,46.3125c-1.06061,2.75529 0.3132,5.84869 3.06848,6.9093c2.75529,1.06061 5.84869,-0.3132 6.9093,-3.06848l4.16089,-10.82666h17.32544l4.16089,10.82666c1.06061,2.75529 4.15401,4.1291 6.9093,3.06848c2.75529,-1.06061 4.1291,-4.15401 3.06848,-6.9093l-17.8125,-46.3125c-0.79197,-2.05613 -2.76465,-3.41546 -4.96802,-3.42334zM65.90625,84.35889l4.55054,11.82861h-9.10108z"></path></g></g></svg>
               <LocalesLinksSub
               data-active={(localesMenuOpen || localesMenuClicked) ? 'true' : 'false'}
               onMouseOver={() => setLocalesMenuOpen(true)}
               onMouseEnter={() => setLocalesMenuOpen(true)}
               onMouseLeave={() => setLocalesMenuOpen(false)}
               onClick={() => setLocalesMenuClicked(false)}>
                  {locales.map((toLocale, i) => {
                     function getLocaleLabels() {
                        switch(toLocale) {
                           case 'en':
                              return { text: 'English 🇺🇸', alt: 'Switch language to english!' }
                           case 'pt':
                              return { text: 'Português 🇧🇷', alt: 'Mudar idioma para português!' }
                           case 'fr':
                              return { text: 'Français 🇫🇷', alt: 'Changer de langue en français!' }
                           default:
                              return { text: 'English 🇺🇸', alt: 'Switch language to english!' }
                        }
                     }

                     const localeLabels = getLocaleLabels()

                     return (
                        <Link key={i} passHref href={route} locale={toLocale} scroll={false}>
                           <a onClick={() => setLocalesMenuClicked(false)}
                           aria-label={localeLabels.alt}>{localeLabels.text}</a>
                        </Link>
                     )
                  })}
                  {localesMenuClicked && (<span id='close-me-msg'>{navTranslations.localesMenu.closeMeMsg}</span> )}
               </LocalesLinksSub>
            </LocalesButtonsContainer>
            <button
               className={themeButtonStyle}
               role='button'
               onClick={() => setThemeKey(themeKey === 'dark' ? 'light' : 'dark')}
               aria-label={navTranslations.themeButton()(themeKey.toString())}>
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
               className={menuButtonStyle}
               role='button'
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               aria-label={navTranslations.menuButton()(isMenuOpen)}>
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