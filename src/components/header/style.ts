import { styled } from 'linaria/react'
import { css } from 'linaria'

export const Container = styled.header`
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-start;
   transition: border 0.3s ease-in-out;
   overflow: hidden;
   
   z-index: var(--zIndex-header);

   width: 98vw;
   margin-top: 2.75vh;

   &&[data-border-radius] {
      border-radius: 0.9rem;
   }

   && > * {
      z-index: calc(var(--zIndex-header) + 1);
   }

   && > #header-background {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: var(--zIndex-header) !important;
   }

   #textContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-left: 3.9vw;
      margin-bottom: 16vh;
      max-width: 90vw;
   }

   &&[data-menu='open'] {
      border-radius: 1rem;
   }

   @media (orientation: portrait) {
      #textContent {
         margin-bottom: 10vh;
      }
   }

   //* Init animations

   #header-background {
      animation-name: HeaderIntro;
      animation-duration: 0.8s;
      animation-timing-function: cubic-bezier(0.57, -0.02, 0.04, 1.23);
      animation-iteration-count: 1;
      animation-delay: 0.1s;
      @keyframes HeaderIntro {
         0% {
            opacity: 0.6;
            transform: scale(1.3);
         }
         100% {
            opacity: 1;
            transform: scale(1);
         }
      }
   }

   #textContent > * {
      animation-name: TitleIntro;
      animation-duration: 0.5s;
      animation-timing-function: cubic-bezier(0.57, -0.02, 0.04, 1.23);
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      opacity: 0;
      transform: translateY(40px);
      @keyframes TitleIntro {
         0% {
            opacity: 0;
            transform: translateY(40px);
         }
         100% {
            opacity: 1;
            transform: translateY(0px);
         }
      }
   }
   #textContent > *:nth-child(1) {
      animation-delay: 0.3s;
   }
   #textContent > *:nth-child(2) {
      animation-delay: 0.48s;
   }
   #textContent > *:nth-child(3) {
      animation-delay: 0.51s;
   }
`

export const TitleComp = styled.h1`
   width: auto;
   font-size: 2rem;
   font-weight: 700;
   color: var(--pallete-constants-header-hText);
   font-family: var(--fonts-primary);
   ::after {
      content: '';
      display: block;
      width: 98%;
      height: 1px;
      background: var(--pallete-constants-header-hLine);
      margin-top: 0.5rem;
      border-radius: 5rem;
      opacity: 0.3;
   }
`

export const DescriptionComp = styled.h2`
   font-size: 1.1rem;
   font-weight: 500;
   color: var(--pallete-constants-header-hText);
   font-family: var(--fonts-secondary);

   opacity: 0.8;
   margin-top: 3.3rem;
   max-width: 600px;
`

export const buttonStyle = css`
   display: flex;
   align-items: center;
   justify-content: center;
   width: auto;
   height: auto;
   padding: 0.4rem 0.8rem;
   border-radius: 0.5rem;
   font-size: 1.1rem;
   font-weight: 500;
   color: var(--pallete-textAlt);
   font-family: var(--fonts-secondary);
   background: var(--pallete-bgAlt);
   border: 1.5px solid transparent;
   transition-property: background, color, border;
   transition-duration: 0.3s;
   cursor: pointer;
   outline: none;
   text-decoration: none;
   margin-top: 1.5rem;
   &:hover {
      border: 1.5px solid var(--pallete-accent);
   }
`


