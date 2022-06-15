import type { Props } from '@pages/_app'

import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from 'next/image'

import { useCssThemeKey } from '../../../pages/_app'

//* Importing connected components
import { useMenu } from '../menu/state'

//* Importing styled components
import { 
   Container,
   LocalesButtonsContainer,
   LocalesLinksSub,
   themeButtonStyle,
   menuButtonStyle,
   logoStyle
} from './style'

//* This is a temporary solution
//TODO - Find a better way to handle this
const noHeaderPages: RegExp = /^\/(this-site\/.*|contact)/

export const NavBar: React.FC<{ pageProps: Props['pageProps'], locale: string, locales: string[] }> = 
({ pageProps, locale, locales }) => {
   const { route } = useRouter()
   const { nav: navLocales } = pageProps

   //* Mini menu state hook
   const [isMenuOpen, setIsMenuOpen] = useMenu()
   
   //* Theme state hook
   const [themeKey, setThemeKey] = useCssThemeKey()

   //* Setting deps to make nav's background change after scrolling through a target
   
   const [scrolled, setScrolled] = useState(false)
   function windowsScrollCheck() {
      const scrolledThroughLimit = window.scrollY > (window.innerHeight/2)
      if(scrolledThroughLimit) return true
      else return false
   }
   
   useEffect(() => {
      const handleScroll = () => {
         setScrolled(windowsScrollCheck())
      }

      handleScroll()

      window.removeEventListener('scroll', handleScroll)
      window.addEventListener('scroll', handleScroll)
      return () => { window.removeEventListener('scroll', handleScroll) }
   }, [])
   
   //* Locales menu state
   const [localesMenuOpen, setLocalesMenuOpen] = useState(false)
   const [localesMenuClicked, setLocalesMenuClicked] = useState(false)



   return (
      <Container 
      data-showBg={(scrolled && !isMenuOpen) ? 'true' : 'false'}
      data-scrolled={(scrolled || route.match(noHeaderPages)) ? 'true' : 'false'}
      data-theme={themeKey}
      data-menuOpen={isMenuOpen ? 'true' : 'false'} >
         <div id="subcontainer">
         <Link href='/' passHref locale={locale}>
            <a className={logoStyle}>
               {(themeKey === 'dark' || (!scrolled && !isMenuOpen)) ? 
               <Image src='/images/global/Principal_darkbg.svg' 
                  priority alt={navLocales.logoAlt} layout='fill' /> :
               <Image src='/images/global/Principal_lightbg.svg' 
                  priority alt={navLocales.logoAlt} layout='fill' />}
            </a>
         </Link>
         <sub>
            <LocalesButtonsContainer
            data-active={(localesMenuOpen || localesMenuClicked) ? 'true' : 'false'}
            onMouseOver={() => setLocalesMenuOpen(true)}
            onMouseLeave={() => setLocalesMenuOpen(false)}
            data-scrolled={(scrolled || route.match(noHeaderPages)) ? 'true' : 'false'}
            data-theme={themeKey}
            data-menuOpen={isMenuOpen ? 'true' : 'false'}
            aria-label={navLocales.localesMenu
               .mainAlt[(localesMenuOpen || localesMenuClicked) ? 'active': 'inactive']}>
               <svg onClick={() => setLocalesMenuClicked(!localesMenuClicked)}
               version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink' viewBox="0 0 171 171">
                  <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                     <path d="M0,171.99654v-171.99654h171.99654v171.99654z" fill="none"></path>
                     <g className='coloredLocaleButtonElem'>
                        <path d="M85.5,14.24304c-39.28621,0 -71.25,31.96379 -71.25,71.25c0,11.66831 3.0734,22.57487 8.05737,32.29907l-7.72339,27.65112c-1.79889,6.42462 4.5535,12.77669 10.97974,10.97974l27.672,-7.72339c9.71628,4.97353 20.6069,8.04346 32.26428,8.04346c39.28621,0 71.25,-31.96379 71.25,-71.25c0,-39.28621 -31.96379,-71.25 -71.25,-71.25zM85.5,24.93054c33.50992,0 60.5625,27.05259 60.5625,60.5625c0,33.50992 -27.05258,60.5625 -60.5625,60.5625c-10.69314,0 -20.69598,-2.7806 -29.41846,-7.63989c-1.2295,-0.68524 -2.6797,-0.85776 -4.03565,-0.4801l-26.31519,7.3407l7.34766,-26.30127c0.37957,-1.3581 0.20701,-2.81118 -0.4801,-4.0426c-4.86901,-8.72882 -7.66077,-18.73574 -7.66077,-29.43933c0,-33.50992 27.05258,-60.5625 60.5625,-60.5625zM112.13525,46.23596c-2.94854,0.04606 -5.30255,2.47169 -5.26025,5.42029v16.93579c-0.09423,0.57367 -0.09423,1.15887 0,1.73254v27.64417c-0.02725,1.92715 0.98526,3.71968 2.64982,4.69121c1.66457,0.97153 3.72329,0.97153 5.38786,0c1.66457,-0.97153 2.67708,-2.76406 2.64982,-4.69121v-23.15625h5.34375c1.92715,0.02725 3.71968,-0.98526 4.69121,-2.64982c0.97153,-1.66457 0.97153,-3.72329 0,-5.38786c-0.97153,-1.66457 -2.76406,-2.67708 -4.69121,-2.64982h-5.34375v-12.46875c0.02073,-1.44502 -0.54464,-2.83683 -1.56718,-3.85806c-1.02254,-1.02123 -2.41508,-1.58481 -3.86007,-1.56223zM73.03125,46.3125c-1.92715,-0.02725 -3.71968,0.98526 -4.69121,2.64982c-0.97153,1.66457 -0.97153,3.72329 0,5.38786c0.97153,1.66457 2.76406,2.67708 4.69121,2.64982h16.03125v3.5625c0,4.46202 -2.01146,8.37433 -5.18372,10.99365c-1.47317,1.21549 -2.18591,3.12464 -1.86967,5.00816c0.31623,1.88352 1.61338,3.45522 3.40274,4.12295c1.78936,0.66773 3.79903,0.33003 5.27187,-0.88587c5.53449,-4.56981 9.06628,-11.53141 9.06628,-19.23889v-8.90625c-0.0003,-2.95115 -2.3926,-5.34345 -5.34375,-5.34375zM65.92712,64.125c-2.21862,-0.00939 -4.21232,1.35297 -5.00977,3.42334l-17.8125,46.3125c-1.06061,2.75529 0.3132,5.84869 3.06848,6.9093c2.75529,1.06061 5.84869,-0.3132 6.9093,-3.06848l4.16089,-10.82666h17.32544l4.16089,10.82666c1.06061,2.75529 4.15401,4.1291 6.9093,3.06848c2.75529,-1.06061 4.1291,-4.15401 3.06848,-6.9093l-17.8125,-46.3125c-0.79197,-2.05613 -2.76465,-3.41546 -4.96802,-3.42334zM65.90625,84.35889l4.55054,11.82861h-9.10108z"></path></g></g></svg>
               <div id='content-container'>
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
                     {localesMenuClicked && (<span id='close-me-msg'>{navLocales.localesMenu.closeMeMsg}</span> )}
                  </LocalesLinksSub>
               </div>
            </LocalesButtonsContainer>
            <button
               className={themeButtonStyle}
               role='button'
               data-isDark={themeKey === 'dark' ? 'true' : 'false'}
               onClick={() => setThemeKey(themeKey === 'dark' ? 'light' : 'dark')}
               aria-label={navLocales.themeButton[themeKey.toString() === 'dark' ? 
                  'setLight' : 'setDark']}>
               <svg className='theme-button-svg theme-btn-elements' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <mask id='moon-mask'>
                     <rect x='0' y='0' width='100%' height='100%' />
                     <circle className='theme-button-moon-mask theme-btn-elements' r='6.5' />
                  </mask>
                  <circle cx="12" cy="12" r='5' className='theme-button-moon-circle theme-btn-elements' mask='url(#moon-mask)' />
                  <g className='theme-button-moon-lines theme-btn-elements'>
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
               data-active={isMenuOpen ? 'true' : 'false'}
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               aria-label={navLocales.menuButton[isMenuOpen ? 'close' : 'open']}>
               <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
                  <g className='menu-btn-groups'>
                     <line className='menu-btn-line1 menu-btn-elements' x1='5' y1='11' x2='43' y2='11' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                     <line className='menu-btn-line2 menu-btn-elements' x1='5' y1='24' x2='43' y2='24' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                     <line className='menu-btn-line3 menu-btn-elements' x1='5' y1='37' x2='43' y2='37' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                  </g>
                  <g  className='menu-btn-groups'>
                     <line className='menu-btn-arrow1 menu-btn-elements' x1='5' y1='24' x2='15' y2='11'  strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                     <line className='menu-btn-arrow2 menu-btn-elements' x1='5' y1='24' x2='15' y2='37'  strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
                  </g>
               </svg>
            </button>
         </sub>
         <div id='background' />
         </div>
      </Container>
   )
}