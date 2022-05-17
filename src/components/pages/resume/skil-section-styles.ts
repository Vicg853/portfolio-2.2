import { styled } from 'linaria/react'
import { css } from 'linaria'

export const skillsContainerStyles = css`
   --card-width: 340px;
   --card-height: 170px;
   display: grid;
   max-height: 45vh;

   overflow-y: scroll;

   grid-template-columns: repeat(auto-fill, var(--card-width));
   align-items: stretch;
   grid-template-rows: auto;
   grid-row-gap: 1rem;
   grid-column-gap: 0.5rem;

   @media (max-width: 837px) {
      justify-content: center;
      --card-width: 100%;
   }
`

export const SkillCard = styled.div`
   width: var(--card-width);
   
   display: -webkit-inline-box;

   padding: 0.9rem 1rem;

   background: var(--pallete-bgContrast);
   border-radius: 0.8rem;

   --mini-card-gap: 0.5rem;
   sub {
      display: block;
      width: 49.5%;
      height: 100%;
      margin: 0;

      color: var(--pallete-text);

      span {
         display: inline-block;
         font-size: 0.8rem;
         font-weight: 400;
         
         .detail {
            font-weight: 600;
         }
      }

      h5 {
         word-wrap: break-word;
         font-size: 1.1rem;
         font-weight: 600;
      }

      .skill-source, .skill-projects {
         display: block;
         width: 100%;
         display: flex;
         background: var(--pallete-bg);

         align-items: center;
         justify-content: center;
         border-radius: 0.9rem;

         opacity: 0.5;
         transition-duration: 0.3s;
         transition-property: opacity, color;
         color: var(--pallete-text);
         cursor: pointer;
         border: none;

         font-size: 0.9rem;
         font-family: var(--fonts-secondary);
         font-weight: 500;

         :hover {
            color: var(--pallete-accent);
            opacity: 1;
         }
      }
   }
   
   && > .mini-cards-sub {
      margin-left: 0.3rem;
      * { height: calc(100% / 2 - var(--mini-card-gap)); }
      .skill-projects { margin-bottom: calc(var(--mini-card-gap) * 2); }
   }

   && > .mini-cards-sub :only-child {
      height: 100% !important;
      margin: 0;
   }


   :hover > .mini-cards-sub > * {
      opacity: 0.7;
   }
`