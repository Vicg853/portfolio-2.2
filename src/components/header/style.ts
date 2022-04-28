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

      margin-left: 5vw;
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


