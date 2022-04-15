import { styled } from 'linaria/react'
import { css } from 'linaria'

export const Container = styled.footer`
   --top-bot-spacing: 3rem;
   --sides-spacing: 4.7vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100vw;
   gap: 0.9rem;
   
   padding: var(--top-bot-spacing) var(--sides-spacing);
   background: var(--pallete-bgContrast);

   transition-property: border-radius, background-color;
   transition-duration: 0.5s;
   transition-timing-function: ease-in-out;

   && > sub {
      width: 100%;
      max-width: 1400px;
      display: inline-flex;
      align-items: stretch;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.3rem;
   }
   
   && > sub > section {
      flex-grow: 1;
      min-width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0.6rem;
      color: var(--pallete-text);
      padding-left: 0.8rem;
      font-family: var(--fonts-secondary);
      font-size: 0.8rem;
      font-weight: 500;
   }

   .separator {
      width: 100%;
      max-width: 1400px;
      height: 1px;
      background: var(--pallete-bgAlt);
      border-radius: 0.5rem;
      margin: 1rem 0;
   }

   span {
      color: var(--pallete-text);
   }

   .copyright-notice {
      font-family: var(--fonts-primary);
      font-weight: 500;
      font-size: 0.8rem;
   }
   .decor-tag {
      color: var(--pallete-accent);
      font-size: 0.8rem;
      font-weight: 500;
      font-family: var(--fonts-tertiary);
      margin-left: -0.8rem;
   }

   &&[data-menu-open='true'] {
      border-radius: 1.5rem;
   }

   @media (max-width: 620px) {
      && > sub {
         flex-direction: column;
         justify-content: stretch;
         align-items: flex-start;
      }
   }
`

export const socialLinkStyle = css`
   background-color: var(--pallete-bg);
   color: var(--pallete-text);
   border-radius: 0.5rem;
   border: 1px solid transparent;
   padding: 0.5rem 0.8rem;
   font-size: 0.8rem;
   font-weight: 500;
   font-family: var(--fonts-secondary);
   transition-property: color, border-color;
   transition-duration: 0.3s;
   transition-timing-function: ease-in-out;
   cursor: pointer;

   display: inline-flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   .icon {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
   }

   margin: 0.4rem 0;
   &&[data-remove-top-margin='true'] {
      margin-top: 0;
   }
   &&[data-remove-bot-margin='true'] {
      margin-bottom: 0;
   }
   
   &:hover {
      border: 1px solid var(--pallete-accent);
      color: var(--pallete-accent);
   }
`

export const sourcesLinkStyle = css`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 0.3rem;

   margin: 0.5rem 0;
   &&[data-remove-top-margin='true'] {
      margin-top: 0;
   }
   &&[data-remove-bot-margin='true'] {
      margin-bottom: 0;
   }

   a, span {
      display: inline-flex;
   }

   .link {
      justify-content: center;
      align-items: center;
      padding: 0.3rem 0.5rem;
      
      background: transparent;
      font-size: 0.7rem;
      font-weight: 400;
      font-family: var(--fonts-tertiary);
      color: var(--pallete-text);
      border-radius: 0.4rem;
      ::before {
         content: '->';
         margin-right: 0.5rem;
         font-size: 0.6rem;
         font-weight: 400;
         display: block;
         color: var(--pallete-text);
      }
   }
   .link:hover {
      background: var(--pallete-opaque-bg);
   }
   .description {
      font-size: 0.8rem;
      font-weight: 500;
      font-family: var(--fonts-secondary);
      color: var(--pallete-text);
      font-style: italic;
   }
`
