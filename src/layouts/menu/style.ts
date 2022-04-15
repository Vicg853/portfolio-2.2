import { styled } from 'linaria/react' 
import { css } from 'linaria' 

export const Container = styled.nav`
   position: fixed;
   display: none;
   flex-direction: row;
   width: 100vw;
   height: 100vh;
   z-index: var(--zIndex-menu);
   align-items: center;
   padding-top: 10vh;

   background: transparent;
   background-color: var(--pallete-opaque-bgContrast);
   backdrop-filter: blur(6px);
   border-radius: 1rem;

   sub {
      overflow-y: auto;
      overflow-x: hidden;
      z-index: calc(var(--zIndex-menu) + 1);
      width: 100%;
      height: auto;
      margin: 5%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 25px;
   }

   &&[data-show='true'] {
      display: flex !important;
   }
`

export const miniNavItems = css`
   color: var(--pallete-text);
   cursor: pointer;
   background-color: var(--pallete-bg);
   width: auto;
   border-radius: 0.5rem;
   padding: 0.5rem;
   font-size: 1.2rem;
   font-weight: bold;
   border: 1px solid;
   border-color: transparent;
   transition: color 1s,
               border-color 1s;

   :hover {
      border-color: var(--pallete-accent);
      color: var(--pallete-accent);
   }
`
