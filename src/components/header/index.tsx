//* Importing header types
import type {
   IHeaderProps
} from './types.d'
import type { AnimeParams } from 'animejs'

//* Importing needed modules
import { useState, useEffect } from 'react'
import Link from 'next/link'
import anime from 'animejs'
import { scale } from '@utils'

//* Importing header styles and styled components
import { 
   Container,
   TitleComp,
   DescriptionComp,
   buttonStyle
} from './style'


//* Importing menu global state for cosmetic purposes
import {
   useMenu
} from '@layout/menu/state'

//* Importing header components
import { ImageBackground } from './image-bg'

const documentCheck = typeof document !== 'undefined'

export const Header: React.FC<IHeaderProps> = ({
   dimensions,
   title,
   description,
   background,
   button
}) => {
   const [menu] = useMenu()

   const [scrolled, setScrolled] = useState(0)
   useEffect(() => {
      if(!documentCheck) return
      
      window.addEventListener('scroll', () => {
         //* Get virtual height scroll pecentage
         const scrollPercent = (window.scrollY / (window.innerHeight)) * 100
         if(scrollPercent > 100) return setScrolled(100)
         else if(scrollPercent < 0) return setScrolled(0)
         else return setScrolled(scrollPercent)
      })
   })
   
   //* Loaded state for only time animations
   const [loaded, setLoaded] = useState(false)
   const initialEasing = 'spring(2, 80, 25, 0)'

   useEffect(() => {
      if(!loaded) {
         const animTl = anime.timeline()
         const translateY = [100, 0]
         animTl.add({
            targets: `.${Container.__linaria.className} > #header-background`,
            opacity: [0.6, 1],
            scale: [1.6, 1],
            duration: 1000,
            easing: initialEasing,
         }).add({
            targets: `.${TitleComp.__linaria.className}`,
            opacity: [0.6, 1],
            translateY: translateY,
            easing: initialEasing,
         }, 100).add({
            targets: `.${DescriptionComp.__linaria.className}`,
            opacity: [0.4, 1],
            translateY: translateY,
            easing: initialEasing,
         }, 150).add({
            targets: `.${buttonStyle}`,
            opacity: [0.4, 1],
            translateY: translateY,
            easing: initialEasing,
         }, 170)

      }
      setLoaded(true)
   }, [loaded])

   return (
      <Container 
      data-menu={menu ? 'open' : 'closed'}
      style={{ height: dimensions?.height ?? '100vh' }}>
         <sub id='textContent'>
            <TitleComp>{title}</TitleComp>
            <DescriptionComp>{description}</DescriptionComp>
            {button && (
               <>
                  {button.action.type === 'link' && (
                     <Link href={button.action.href} passHref>
                        <a className={buttonStyle}>
                           {button.text}
                        </a>
                     </Link>
                  )}
                  {button.action.type === 'function' && (
                     <button className={buttonStyle} 
                        onClick={button.action.action}>
                        {button.text}
                     </button>
                  )}
               </>
            )}
         </sub>
         
         {(background.type === 'color' || background.type === 'transparent') && (
            <div id='header-background'
               style={{
                  background: background.type === 'color' ? background.color : 'transparent',
               }}
             />
         )}
         {background.type === 'image' && (
            <div id='header-background'>
               <ImageBackground  {...background} />
            </div>
         )}
         {background.type === 'video' && (
            <video autoPlay loop muted playsInline
               src={background.src} id='header-background' />
         )}
         {background.type === 'component' && (<background.component />)}
         {/* 
            //TODO Add support 
            {background.type === 'threejs' && (
               <div id='header-background' />
            )}
         */}

      </Container>
   )
}