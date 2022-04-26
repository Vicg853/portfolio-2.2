//* Importing header types
import type {
   IHeaderProps
} from './types.d'

//* Importing needed modules
import { useState, useEffect } from 'react'
import Link from 'next/link'
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

   return (
      <Container 
      data-menu={menu ? 'open' : 'closed'}
      style={{ height: dimensions?.height ?? '100vh' }}>
         <sub id='textContent'>
            <TitleComp >{title}</TitleComp>
            <DescriptionComp >{description}</DescriptionComp>
            {button && (
               <>
                  {button.action.type === 'link' && (
                     <Link href={button.action.href} passHref>
                        <a  className={buttonStyle}>
                           {button.text}
                        </a>
                     </Link>
                  )}
                  {button.action.type === 'function' && (
                     <button  className={buttonStyle} 
                        onClick={button.action.action}>
                        {button.text}
                     </button>
                  )}
               </>
            )}
         </sub>
         
         {/*TODO - Make these elements be dynamically imported to prevent unused components to be imported on the main/per-page bundles */}
         
         {(background.type === 'color' || background.type === 'transparent') && (
            <div id='header-background'
               style={{
                  background: background.type === 'color' ? background.color : 'transparent'
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
               <div id='header-background' style={containerSpring} />
            )}
         */}
      </Container>
   )
}