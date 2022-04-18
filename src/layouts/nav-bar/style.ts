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
   sub {
      display: inline-flex;
      justify-content: center;
      gap: 1rem;
      padding-right: 0.8rem;
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
   svg {
      width: 26px !important;
      height: 26px !important;   
   }
   svg > g {
      stroke: var(--pallete-bgAlt);
      transition: stroke 0.3s;
   }
   
   :hover svg > g {
      stroke: var(--pallete-accent);
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
   svg > circle, svg > g {
      fill: var(--pallete-bgAlt);
      stroke: var(--pallete-bgAlt);
      transition-property: fill, stroke !important;
      transition-duration: 0.3s !important;
   }
   
   :hover svg > circle, :hover svg > g {
      fill: var(--pallete-accent);
      stroke: var(--pallete-accent);
   }
`

export const LocalesButtonsContainer = styled.div`
   position: relative;
   display: flex;
   box-sizing: border-box;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   overflow-x: visible;
   overflow-y: hidden;

   ::-webkit-scrollbar {
      display: none;
   }
   
   &&[data-active='true'] {
      overflow-y: visible;
   }
   
   svg {
      display: block;
      width: 26px !important;
      height: 26px !important;
      margin: 4px;
   }
   svg > g > g {
      transition: fill 0.3s;
   }
   :hover svg > g > g {
      fill: var(--pallete-accent) !important;
   }
   :hover {
      overflow-y: visible;
   }
`

export const LocalesLinksSub = styled.div`
   position: absolute;
   top: 100%;
   box-sizing: border-box;
   display: flex;
   width: max-content;
   flex-direction: column;
   justify-content: stretch;
   align-items: stretch;
   padding: 0.5rem;
   border-radius: 0.5rem;
   gap: 0.4rem;
   background-color: var(--pallete-bgContrast);
   cursor: initial;
   opacity: 0.2;
   transform: translateY(10%);
   transition-property: opacity, transform;
   transition-duration: cubic-bezier(0.2, 0, 0.2, 1);

   #close-me-msg {
      font-size: 0.6rem;
      color: var(--pallete-text);
      text-align: center;
      font-weight: 400;
      font-family: var(--fonts-secondary);
      margin-top: 0.3rem;
      padding: 0.3rem;
   }

   &&[data-active='true'] {
      opacity: 1;
      transform: translateY(0%);
   }

   a {
      text-align: center;
      padding: 0.4rem 0.7rem;
      color: var(--pallete-text);
      cursor: pointer;
      border-radius: 0.3rem;
      font-family: var(--fonts-primary);
   }
   a:hover {
      background-color: var(--pallete-opaque-bg);
      color: var(--pallete-accent);
   }
`
