import { styled } from 'linaria/react'

export const ExpAndEducCard = styled.div`
   display: block;
   width: 100%;
   height: auto;

   padding: 0.8rem 0.95rem;

   background: var(--pallete-bgContrast);

   border-radius: 0.8rem;

   sub {
      display: inline-flex;
      width: 100%;

      h5 {
         font-size: 1rem;
         font-weight: 600;
         font-family: var(--fonts-secondary);
         color: var(--pallete-text);
      }
      span {
         justify-self: flex-end;
         font-size: 0.9rem;
         font-weight: 400;
         font-family: var(--fonts-secondary);
         color: var(--pallete-text);
      }
      .exp-educ-card-from-date, .exp-educ-card-since-date {
         margin-left: auto;
      }
      .exp-educ-card-to-date {
         margin-left: 0.7rem;
      }

      .description-span {
         max-width: 500px;
         font-size: 0.9rem;
         font-weight: 400;
         color: var(--pallete-text);
      }

      a, button {
         width: calc(50% - 3px);
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         color: var(--pallete-text);
         background: var(--pallete-bg);

         align-items: center;
         justify-content: center;
         border-radius: 0.7rem;

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

   .details-sub {
      margin-top: 0.8rem;
   }

   && > sub[data-not-only-desc="true"] {
      display: inline-flex;
      justify-content: space-between;
      align-items: stretch;
      flex-wrap: wrap;

      .detail-links {
         gap: 3px;
         width: 300px;
         display: inline-flex;
         justify-content: flex-end;
      }

   }
   
   &&:hover > sub > a {
      opacity: 0.8;
   }
   
   @media (max-width: 976px) {
      && > sub[data-not-only-desc="true"] {
         .detail-links {
            width: 200px;
         }
         .description-span {
            max-width: 350px;
         }
      }
   }
   @media (max-width: 682px) {
      && > sub[data-not-only-desc="true"] {
         justify-content: center;
         gap: 0.8rem;
         .detail-links {
            width: 100%;
            min-height: 3rem;
         }
         .description-span {
            max-width: unset;
            width: 100%;
         }
      }
   }
`