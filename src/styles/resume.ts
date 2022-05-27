import { styled } from 'linaria/react'
import { css } from 'linaria'

export const containerStyles = css`
   gap: 7rem;
   padding: 7rem 0rem;
`

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

export const skillsSectionStyle = css`
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