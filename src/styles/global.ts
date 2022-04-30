import { styled } from 'linaria/react'

//* Global container
export const Container = styled.div`
   max-width: 85%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: stretch;
   width: auto;
   overflow: visible;
   
   height: auto;
   gap: 4rem;
   padding: 3rem 0rem;
`

export const Section = styled.section`
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: nowrap;
   max-width: 100%;

   &&[data-vert] {
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
   }

   &&[data-bigMinWidth] {
      width: 1200px;
   }
   &&[data-medMinWidth] {
      width: 850px;
   }
   &&[data-smallMinWidth] {
      width: 600px;
   }
   &&[data-widthMax] {
      width: 85vw;
      max-width: 1700px;
   }
   &&[data-widthHundred] {
      width: 100%;
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
   &&[data-jusCent] {
      justify-content: center;
   }
   &&[data-jusSpArr] {
      justify-content: space-around;
   }
   &&[data-jusSpBet] {
      justify-content: space-between;
   }
   &&[data-justSpEven] {
      justify-content: space-evenly;
   }
`

//* Section's title and description component
export const SecTitle = styled.h3`
   --font-size: 1.3rem;
   --font-weight: 600;
   width: auto;
   font-size: var(--font-size);
   font-weight: var(--font-weight);
   color: var(--pallete-text);
   font-family: var(--fonts-secondary);
   text-align: start;
   align-self: flex-start;

   ::after {
      display: block;
      content: '';
      width: 98%;
      height: 1px;
      background-color: var(--pallete-accent);
      opacity: 0.5;
      font-style: normal;
      margin-top: 0.8rem;
      border-radius: 0.5rem;
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

//* Simple paragraph component
export const Paragraph = styled.p`
   color: var(--pallete-text);
   font-size: 0.95rem;
   font-family: var(--fonts-primary);

   ul {
      display: block;
      margin: 0.6rem 1.7rem;

   }
`