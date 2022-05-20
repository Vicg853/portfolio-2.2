import { css } from 'linaria'

export const onlySvcContainerStyles = css`
   padding-top: 13rem;
   min-height: 100vh;

   animation: fadeIn 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
   animation-iteration-count: 1;
   animation-fill-mode: forwards;

   a {
      background: var(--pallete-bgContrast);
      transform: unset !important;
      opacity: 1 !important;
      width: auto !important;
      align-self: flex-start;

      font-size: 1rem;
   }

   @keyframes fadeIn {
      0% {
         transform: translateX(40px);
         opacity: 0;
      }
      100% {
         transform: translateX(0px);
         opacity: 1;
      }
   }
`

export const thisWebSContainerStyles = css`
   transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
   transition-property: transform, opacity;
   &&[data-transition="true"] {
      transform: translateX(-40px);
      opacity: 0.6;
   }
`

export const thisWebPSectionsStyles = css`
   gap: 3rem;
   section {
      width: calc(50% - 3rem);   
   }
   @media (max-width: 710px) {
      section {
         width: 100%;
      }
      gap: 2rem;
   }
`

export const servicesCardGridStye = css`
   position: relative;
   margin-top: 0.9rem;
   overflow: hidden;
   
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 360px));
   grid-template-rows: repeat(minmax(290px, 310px));
   row-gap: 1.8rem;
   column-gap: 1.3rem;
   justify-content: space-between;
   align-items: stretch;

   @media (max-width: 865px) {
      justify-content: center;
   }

   @media (max-width: 750px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 100%));
   }
`

const onlySvcTechStackSubShared = `
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
`
   
export const onlySvcTechStackSubStyles = css`
   ${onlySvcTechStackSubShared}
   justify-content: space-between;
   `

export const onlySvcTechStackSubSecondStyles = css`
   ${onlySvcTechStackSubShared}
   justify-content: flex-start;
`

export const onlySvcLinksSectionStyles = css`
   sub {
      justify-self: flex-end;
   }
`