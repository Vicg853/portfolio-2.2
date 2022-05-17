import { styled } from 'linaria/react'
import { css } from 'linaria'

export const introParagraphStyles = css`
   gap: 2rem;

   @media (max-width: 1370px) {
      p {
         width: 500px;
      }
   }
   @media (max-width: 1023px) {
      p {
         width: 400px;
      }
   }
   @media (max-width: 782px) {
      justify-content: center;
      p {
         width: 100%;
      }
   }
`

export const IndexCard = styled.div`
   display: block;
   width: 450px;
   height: auto;
   max-width: 100%;

   padding: 1.6rem 1.4rem;

   background: var(--pallete-bg);
   border: 0.7px solid var(--pallete-bgAlt);

   overflow: hidden;
   border-radius: 0.8rem;

   h3 {
      width: min-content;
      margin-bottom: 1rem;
   }

   &&:not(:last-child), &&:not(:first-child) {
      margin: 0.5rem 0;
   }
   &&:last-child {
      margin-top: 0.5rem;
   }

   span {
      display: block;
      color: var(--pallete-text);
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0.5rem 0;

      a {
         font-size: 0.9rem;
         color: var(--pallete-text);
         :hover {
            color: var(--pallete-accent);
         }
      }
   }
   @media (max-width: 1192px) {
      width: 300px;
   }
   @media (max-width: 900px) {
      width: 200px;
   }
   @media (max-width: 782px) {
      width: 100%;
   }
`

export const filterSkillsSectionStyle = css`
   width: 100%;
   gap: 0.7rem;

   #filters-sections-container{
      width: auto;
      justify-content: flex-start;
      gap: 2rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      
      @media (max-width: 743px) {
         gap: 0.2rem;
         justify-content: center;
         .filters-sections {
            width: 100%;
         }
      }
   }
   .filters-sections {
      width: 300px;
      display: block;
      margin: 0;
   }
   span {
      display: block;
      font-size: 0.95rem;
      color: var(--pallete-text);
      font-weight: 600;
      margin: 0.5rem 0;
   }
   select {
      display: block;
      width: 100%;
      height: unset;

      background: var(--pallete-bg);
   }
   input {
      width: 100%;
      height: 30.38px;
   }
`


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
   