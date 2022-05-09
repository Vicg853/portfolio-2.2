import { css } from 'linaria'
import { styled } from 'linaria/react'

export const calloutAlignment = css`
   @media (min-width: 900px) {
      position: absolute;
      top: calc(100vh + 1rem);
      left: 5vw;
   }
`

export const introductionSizing = css`
   width: 600px;
`

export const containerMargins = css`
   margin-top: 4rem;
   margin-bottom: 4rem;
`

export const ProjectCard = styled.div`
   position: relative;
   display: inline-flex;
   align-items: center;
   justify-content: flex-start;
   
   width: 100%;
   height: 600px;
   
   border-radius: 0.6rem;
   overflow: hidden;

   border: 1px solid var(--pallete-bgAlt);

   .project-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
   }

   --sub-card-margin: 1rem;
   sub {
      z-index: 1;
      width: 600px;
      max-width: calc(100% - var(--sub-card-margin) * 2);
      min-height: calc(100% - 2 * var(--sub-card-margin));
      margin: var(--sub-card-margin);

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      gap: 1rem;
      padding: 1.3rem 0.9rem;

      border-radius: 0.6rem;
      overflow: hidden;
      
      background: var(--pallete-opaque-bg);
      backdrop-filter: blur(1rem);

      border: 1px solid var(--pallete-bgAlt);
   }

   .project-card-project-description,
   .project-card-project-scope,
   .project-card-section-title,
   .project-card-project-access > .title {
      font-size: 0.85rem;
      font-weight: 400;
      font-family: var(--fonts-primary);
      color: var(--pallete-text);
   }

   .project-card-project-scope {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 15%;
   }
   .project-card-project-scope > .detail {
      color: var(--pallete-accent);
      margin-left: 0.5rem;
   }

   .project-card-project-subjects,
   .project-card-project-technologies {
      display: inline-flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0.2rem;  
      max-height: 64px;
      overflow-y: scroll;
   }

   .project-card-project-access {
      display: flex;
      flex-direction: column;

      background: var(--pallete-opaque-bgContrast);
      border-radius: 0.6rem;
      padding: 0.8rem 1.1rem;
      margin-top: auto;
   }
   .project-card-project-access > .title {
      font-size: 0.9rem;
   }
   .project-card-project-access > .content {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.8rem;
      margin-top: 0.8rem;
      flex-wrap: wrap;
   }

   @media (max-width: 700px) {
      border: none;
   }
`

export const projectCardTitleStyles = css`
   font-size: 1rem;
   font-weight: 700;
   ::after {
      margin-top: 0.5rem;
      width: 95%;
   }
`

export const ProjectCardMiniCard = styled.div`
   font-size: 0.85rem;
   font-weight: 400;
   font-family: var(--fonts-secondary);
   color: var(--pallete-text);
   width: auto;
   
   background-color: var(--pallete-bg);
   border-radius: 0.3rem;
   border: 1px solid var(--pallete-opaque-bgAlt);

   padding: 0.25rem 0.45rem;

   a {
      text-decoration: underline;
      text-decoration-color: var(--pallete-accent);
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 400;
      font-family: var(--fonts-secondary);
      color: var(--pallete-text);
   }
`

export const accessProjectLinksStyle = css`
   background-color: var(--pallete-bg);
   color: var(--pallete-text);
   border-radius: 0.6rem;
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
      width: 1.2rem;
      height: 1.2rem;
   }

   &:hover {
      border: 1px solid var(--pallete-accent);
      color: var(--pallete-accent);
   }
`