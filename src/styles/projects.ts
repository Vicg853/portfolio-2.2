import { css } from 'linaria'
import { styled } from 'linaria/react'

export const mainPSectionStyles = styled.section`
   width: 100%;
`

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
      height: calc(100% - 2 * var(--sub-card-margin));
      margin: var(--sub-card-margin);

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      gap: 1.2rem;
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
      width: 100%;
      font-size: 0.85rem;
      font-weight: 400;
      font-family: var(--fonts-primary);
      color: var(--pallete-text);
      margin-bottom: -0.6rem;
   }

   .project-card-project-description {
      flex-shrink: 2;
      overflow-y: scroll;
      word-break: break-word;
   }

   .project-card-project-scope {
      margin-top: auto;
   }
   .project-card-project-scope > .detail {
      color: var(--pallete-accent);
      margin-left: 0.5rem;
   }

   .project-card-project-subjects,
   .project-card-project-technologies {
      display: inline-block;
      max-height: 64px;
      overflow-y: scroll;

      > :not(:last-child) {
         margin-right: 0.3rem;
      }
      * {
         margin-bottom: 0.3rem;
      }
   }

   .project-card-project-access {
      background: var(--pallete-opaque-bgContrast);
      border-radius: 0.6rem;
      padding: 0.8rem 1.1rem;
   }
   .project-card-project-access > .title {
      font-size: 0.9rem;
   }
   .project-card-project-access > .content {
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.6rem;
      padding-bottom: 0.4rem;

      > :not(:last-child) {
         margin-right: 0.5rem;
      }
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
   display: inline-block;
   
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
   display: inline-block;
   background-color: var(--pallete-bg);
   color: var(--pallete-text);
   border-radius: 0.55rem;
   border: 1px solid transparent;
   padding: 0.5rem 0.8rem;
   font-size: 0.8rem;
   font-weight: 500;
   font-family: var(--fonts-secondary);
   transition-property: color, border-color;
   transition-duration: 0.3s;
   transition-timing-function: ease-in-out;
   cursor: pointer;

   --icon-size: 1.1rem;
   * {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
   }

   .icon {
      margin-right: 0.7rem;
      width: var(--icon-size);
      height: var(--icon-size);
   }

   &:hover {
      border: 1px solid var(--pallete-accent);
      color: var(--pallete-accent);
   }
`