import { css } from 'linaria'
import { styled } from 'linaria/react'

export const Container = styled.nav`
   --padding-top-bot: 2.7rem;
   --max-width: 1900px;
   --padding-sides: 4.3vw;
   position: fixed;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: var(--zIndex-nav);
   padding: var(--padding-top-bot) var(--padding-sides);

   #subcontainer {
      width: 100%;
      max-width: var(--max-width);
      position: relative;
      display: inline-flex;
      height: min-content;
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
         --margin-tolerance-topbot: 1.4rem;
         --margin-tolerance-sides: 2.5rem;
         position: absolute;
         z-index: var(--zIndex-nav);
         backdrop-filter: blur(10px);
         width: calc(100% + var(--margin-tolerance-sides) * 2);
         height: calc(100% + var(--margin-tolerance-topbot) * 2);
         left: calc(-1 * var(--margin-tolerance-sides));
         margin-bottom: 0%;
         transition: all 0.5s;
         border-radius: 0.8rem;
         opacity: 0;
         transition-property: opacity, transform;
         transition-duration: 0.5s;
      }
   }
   &&[data-scrolled='true'] > #subcontainer >  #background {
      opacity: 1;
   } 
   &&[data-scrolled='false']:not([data-menuOpen='true']):not([data-theme='dark']) svg > :is(.menu-btn-groups, .theme-btn-elements) {  
      stroke: var(--pallete-constants-nav-onHeaderColor);
      fill: var(--pallete-constants-nav-onHeaderColor);
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
   .menu-btn-elements {
      transition: all 0.3s;
   }
   .menu-btn-arrow1 {
      transform: rotate(0deg);
   }
   .menu-btn-arrow1, .menu-btn-arrow2 {
      transform-origin: 5px center;
   }

   &&[data-active='true'] {
      .menu-btn-line1 {
         transform: translateY(13px);
         opacity: 0;
      }
      .menu-btn-line3 {
         transform: translateY(-13px);
         opacity: 0;
      }
      .menu-btn-line2 { transform: translateX(15px); }
      .menu-btn-arrow1 {
         transform: rotate(0deg);
         opacity: 1;
      }
      .menu-btn-arrow2 {
         transform: rotate(0deg);
         opacity: 1;
      }
   }

   &&[data-active='false'] {
      .menu-btn-line1 {
         transform: translateY(0px);
         opacity: 1;
      }
      .menu-btn-line3 {
         transform: translateY(0px);
         opacity: 1;
      }
      .menu-btn-line2 { transform: translateX(0px); }
      .menu-btn-arrow1 {
         transform: rotate(52.5deg);
         opacity: 0;
      }
      .menu-btn-arrow2 {
         transform: rotate(-52.5deg);
         opacity: 0;
      }
   }
   
   :hover svg > g {
      stroke: var(--pallete-accent) !important;
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

   --animation-timing-fnc: cubic-bezier(0.61,-0.6, 0.39, 1.72);
   .theme-btn-elements {
      transition: all 0.8s;
      transition-timing-function: var(--animation-timing-fnc);
   }

   &&[data-isDark='true'] {
      .theme-button-svg { transform: rotate(90deg); }
      .theme-button-moon-mask {
         cx: 30;
         cy: 0;
      }
      .theme-button-moon-circle { 
         animation: theme-button-moon-circle-small
         0.8s forwards;   
         animation-timing-function: var(--animation-timing-fnc);
      }
      .theme-button-moon-lines { opacity: 1; }
   }
   &&[data-isDark='false'] {
      .theme-button-svg { transform: rotate(40deg); }
      .theme-button-moon-mask {
         cx: 12;
         cy: 4;
      }
      .theme-button-moon-circle { 
         animation: theme-button-moon-circle-big 
            0.8s forwards;   
         animation-timing-function: var(--animation-timing-fnc);
      }
      .theme-button-moon-lines { opacity: 0; }
   }
   @keyframes theme-button-moon-circle-small { from { r: 9; } to { r: 5; } }
   @keyframes theme-button-moon-circle-big { from { r: 5; } to { r: 9; } }
   
   :hover svg > circle, :hover svg > g {
      fill: var(--pallete-accent) !important;
      stroke: var(--pallete-accent) !important;
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
   
   .coloredLocaleButtonElem {
      fill: var(--pallete-bgAlt);
   }
   &&[data-scrolled='false']:not([data-menuOpen='true']):not([data-theme='dark']) .coloredLocaleButtonElem {
      fill: var(--pallete-constants-nav-onHeaderColor);   
   }

   #content-container {
      position: absolute;
      top: 100%;
      width: auto;
      height: auto;
      padding-top: 0.7rem;
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
   :hover .coloredLocaleBut {
      cursor: pointer;
      fill: var(--pallete-accent) !important;
   }
   :hover {
      overflow-y: visible;
   }
`

export const LocalesLinksSub = styled.div`
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
