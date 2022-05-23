import { styled } from 'linaria/react'
import { css } from 'linaria'

export const ObjectivesGridS = styled.div`
	display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, auto));
   grid-template-rows: auto;
   align-items: stretch;
   gap: 1rem;
   
   a {
      cursor: pointer;
      display: block;
      position: relative;
      perspective: 1500px;
   }

   a > div {
      height: 100%;
   }
`

export const objectivesSectionStyle = css`
   display: block;
   background: var(--pallete-opaque-bgContrast);
   border-radius: 0.7rem;
   padding: 1.5rem;
   margin-top: 10rem;
   margin-bottom: 5rem;
`

export const mainPMediaQueryStyle = css`
   @media (max-width: 745px) {
      justify-content: center !important;
   }
`

export const objectivesSectionTitleStyle = css`
   margin-bottom: 3.5rem;
   gap: 1rem;
   #captions > #title {
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
      color: var(--pallete-text);
   }
   #captions {
      min-width: 300px;
      justify-self: flex-end;
      height: 100%;
      gap: 0.5rem;
      * {
         text-align: start;
         display: block;
      }
   }
`

export const objectivesDescriptionStyle = css`
   margin-top: 0.7rem !important;
   display: block;
`

export const introTextStyles = css`
   width: 600px;
   
   h3 {
      width: fit-content;
      margin-bottom: 2.3rem;
   }

   @media (max-width: 1140px) {
		width: 500px;
   }
   @media (max-width: 1000px) {
		width: 400px;
   }
   @media (max-width: 900px) {
		width: 300px;
   }
   @media (max-width: 745px) {
		width: auto;
   }
`

export const ObjectiveCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   background-color: var(--pallete-bg);
   border-radius: 0.5rem;
   padding: 1rem;
   gap: 0.8rem;

   sub {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      h4 {
         font-size: 0.9rem;
         font-weight: 600;
         color: var(--pallete-accent);
         font-family: var(--fonts-secondary);         
      }
   }

   p {
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--pallete-text);
      font-family: var(--fonts-secondary);
   }

   &&[data-has-source="true"] {
      transition-property: transform, box-shadow;
      transition-duration: 0.65s;
      transition-timing-function: cubic-bezier(0.4,-0.52, 0.55, 1.49);
      box-shadow: none;

      sub > h4 {
         text-decoration: underline;
         text-decoration-color: var(--pallete-accent);
      }
      
      &&:hover {
         transform:
           rotate3d(0.5,-0.566, 0, 10deg)
           rotate(1deg)
           translateZ(-3px);
         box-shadow:
           2em 4em 6em -2em rgba(0,0,0,.5),
           1em 2em 3.5em -2.5em rgba(0,0,0,.5);
      }
   }
`

export const Paragraph = styled.p`
   color: var(--pallete-text);
   font-size: 0.8rem;
   font-family: var(--fonts-primary);
`

export const meImageStyle = css`
   position: relative;
   width: auto;
   height: auto;
   max-width: 268px;
   max-height: 308px;
   border-radius: 0.5rem;
   overflow: hidden;
`