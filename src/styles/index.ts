import { styled } from 'linaria/react'
import { css } from 'linaria'

export const objectivesGridStyle = css`
	display: grid;
   gap: 1.5rem;
	grid-template-columns: repeat(auto-fill, 330px);
	justify-content: center;
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
   min-width: 300px;

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