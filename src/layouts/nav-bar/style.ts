import { css } from 'linaria'
import { styled } from 'linaria/react'

export const Container = styled.nav`
   --padding-top-bot: 2.7rem;
   --padding-sides: 4.3vw;
   position: fixed;
   display: inline-flex;
   width: 100vw;
   height: min-content;
   padding: var(--padding-top-bot) var(--padding-sides);
   justify-content: space-between;
   align-items: center;
   flex-wrap: nowrap;
   z-index: var(--zIndex-nav);
   
   &&[data-scrolled='true'] {
      background-color: var(--pallete-opaque-accent2);
   }

   svg, sub, a {
      z-index: calc(var(--zIndex-nav) + 1);
   }

   #background {
      --margin-tolerance: 1rem;
      position: absolute;
      z-index: var(--zIndex-nav);
      backdrop-filter: blur(10px);
      width: calc(100% - var(--padding-sides) * 2 + var(--margin-tolerance) * 2);
      height: calc(100% - var(--padding-top-bot) * 2 + var(--margin-tolerance) * 2);
      left: calc(var(--padding-sides) - var(--margin-tolerance));
      top: calc(var(--padding-top-bot) - var(--margin-tolerance));
      margin-bottom: 0%;
      transition: all 0.5s;
      border-radius: 0.8rem;
      transform: scale(0.9);
      opacity: 0;
      transition-property: opacity, transform;
      transition-duration: 0.5s;
   }
   &&[data-scrolled='true'] #background {
      transform: scale(1);
      opacity: 1;
   }

   .nav-buttons {
      margin-left: 1rem;
   }
`

export const logoStyle = css`
   display: block;
   position: relative;
   width: 6rem;
   height: 6rem;
`

export const menuButtonStyle = css`
   width: auto;
   height: auto;
   padding: 4px;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   border-radius: 0.2rem;
   border: none;
   background-color: transparent;
   margin-right: 0.8rem;
   svg {
      width: 26px !important;
      height: 26px !important;   
   }
   svg > g {
      stroke: var(--pallete-bgAlt);
   }
`

export const themeButtonStyle = css`
   width: auto;
   height: auto;
   padding: 4px;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   border-radius: 0.2rem;
   border: none;
   background-color: transparent;
   svg {
      width: 26px !important;
      height: 26px !important;   
   }
   svg > mask > rect {
      fill: #f5f5f5;
   }
   svg > circle {
      fill: var(--pallete-bgAlt);
   }
   svg > g {
      stroke: var(--pallete-bgAlt);
   }
`