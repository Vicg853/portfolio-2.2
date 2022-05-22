import { styled } from 'linaria/react'
import { css } from 'linaria'

export const ObjectivesGridS = styled.div`
	display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, auto));
   grid-template-rows: auto;
   align-items: stretch;
   gap: 1rem;
   
   a {
      cursor: pointer;
      display: block;
      position: relative;
   }

   a > div {
      height: 100%;
   }

   @media (max-width: 862px) {
      justify-content: center;
   }
`

export const objectivesSectionStyle = css`
   background: var(--pallete-opaque-bgContrast);
   border-radius: 0.7rem;
   padding: 1.5rem;
   margin-top: 10rem;
   margin-bottom: 5rem;
   border: 1px solid var(--pallete-opaque-bgAlt);
`

export const mainPMediaQueryStyle = css`
   @media (max-width: 745px) {
      justify-content: center;
   }
`

export const objectivesSectionTitleStyle = css`
   gap: 0.5rem;
   #captions > #title {
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
      color: var(--pallete-text);
   }
   #captions {
      height: 100%;
      align-self: stretch;
   }
`

export const objectivesDescriptionStyle = css`
   margin-top: 0.7rem !important;
`

export const addGap = css`
   gap: 1rem;
   width: 600px;
   @media (max-width: 1140px) {
		width: 500px;
   }
   @media (max-width: 1000px) {
		width: 400px;
   }
   @media (max-width: 900px) {
		width: 300px;
   }
   @media (max-width: 745px) {
		width: auto;
   }
`

export const ObjectiveCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   background-color: var(--pallete-bg);
   border-radius: 0.5rem;
   border: 1px solid var(--pallete-opaque-bgAlt);
   padding: 1rem;
   gap: 0.8rem;

   sub {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      h4 {
         font-size: 0.9rem;
         font-weight: 600;
         color: var(--pallete-accent);
         font-family: var(--fonts-secondary);
      }
   }

   p {
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--pallete-text);
      font-family: var(--fonts-secondary);
   }
`

export const Paragraph = styled.p`
   color: var(--pallete-text);
   font-size: 0.8rem;
   font-family: var(--fonts-primary);
`

export const meImageStyle = css`
   position: relative;
   width: auto;
   height: auto;
   max-width: 268px;
   max-height: 308px;
   border-radius: 0.5rem;
   overflow: hidden;
`