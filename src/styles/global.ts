import { styled } from 'linaria/react'

//* Global container
export const Container = styled.div`
   max-width: 85%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: stretch;
   width: auto;
   
   height: auto;
   gap: 4rem;
   padding: 3rem 0rem;
`

//* Horizontal section component
export const SectionHor = styled.section`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   flex-wrap: nowrap;
   max-width: 100%;

   &&[data-bigMinWidth] {
      width: 1200px;
   }
   &&[data-medMinWidth] {
      width: 850px;
   }
   &&[data-smallMinWidth] {
      width: 600px;
   }

   &&[data-wrap] {
      flex-wrap: wrap;
   }
   &&[data-wrapRev] {
      flex-wrap: wrap-reverse;
   }
   &&[data-gap] {
      gap: 4rem;
   }

   &&[data-justStart] {
      justify-content: flex-start;
   }
   &&[data-justEnd] {
      justify-content: flex-end;
   }

`

//* Vertical section component
export const SectionVert = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   max-width: 100%;

   &&:not([data-limitWidth]) {
      &&[data-bigMinWidth] {
         width: 1200px;
      }
      &&[data-medMinWidth] {
         width: 700px;
      }
      &&[data-smallMinWidth] {
         width: 600px;
      }
   }

   &&[data-limitWidth] {
      max-width: calc(50% - 1rem);
   }

   &&[data-gap] {
      gap: 4rem;
   }
`   

//* Section's title and description component
export const SecTitle = styled.h3`
   display: inline-flex;
   font-size: 1.2rem;
   font-weight: 500;
   color: var(--pallete-text);
   font-family: var(--fonts-secondary);
   font-style: italic;
   width: 100%;
   text-align: start;

   ::before, ::after {
      display: block;
      font-family: var(--fonts-tertiary);
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--pallete-text);
      font-style: normal;
   }
   ::before {
      content: '<';
   }
   ::after {
      content: '/>';
   }
`
export const SectionDesc = styled.p`
   display: inline-flex;
   font-size: 0.8rem;
   font-weight: 300;
   color: var(--pallete-text);
   font-family: var(--fonts-secondary);
   width: 100%;
   text-align: start;
`

//* Image with small <span> caption 
export const CaptionedImage = styled.div`
   position: relative;
   width: auto;
   height: auto;
   display: flex;
   justify-content: flex-end;
   align-items: flex-start;
   flex-direction: column;
   && > span {
      width: 80%;
      margin-left: 0.4rem;
      margin-bottom: 0.3rem;
      position: absolute;
      font-family: var(--fonts-primary);
      font-size: 0.7rem;
      color: var(--pallete-textAlt);
      background-color: var(--pallete-bgAlt);
      border-radius: 0.6rem;
      padding: 0.5rem 0.7rem;
   }
   &&[data-topCaption] {
      && > span {
         margin-bottom: 0px;
         margin-top: 0.3rem;
      }
      justify-content: flex-start;
   }
`