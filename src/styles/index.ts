import { styled } from 'linaria/react'
import { css } from 'linaria'
 

export const mediaLimitWidth = css`
   @media (max-width: 862px) {
      max-width: 400px !important;
      align-self: center;
   }
`

export const objectivesGridStyle = css`
	display: grid;
   gap: 1.5rem;
	grid-template-columns: repeat(auto-fill, 330px);
	justify-content: center;
`

export const addGap = css`
   gap: 1rem;
`

export const ObjectiveCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   background-color: var(--pallete-bg);
   border-radius: 0.5rem;
   border: 0.1px solid var(--pallete-opaque-accent);
   padding: 1rem;
   gap: 0.8rem;

   sub {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      h4 {
         font-size: 0.9rem;
         font-weight: 600;
         color: var(--pallete-text);
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
   max-width: 400px;
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


export const terminalContainer  = css`
   --term-bar-height: 25px;
   max-width: 700px;
   height: 400px;
   overflow: hidden;
   
   display: flex;
   flex-direction: column;
   align-items: stretch;

   #term-bar {
      width: 100%;
      display: inline-flex;
      justify-content: flex-start;
      height: var(--term-bar-height);
      align-items: center;
      gap: 4px;
      background-color: var(--pallete-bgContrast);
      border-radius: 0.35rem;
      padding: 0rem 1rem;
      span {
         --button-size: 7px;
         border-radius: 50%;
         width: var(--button-size);
         height: var(--button-size);
      }
      .red-button {
         background: var(--pallete-constants-err);
      }
      .green-button {
         background: var(--pallete-constants-success);
      }
      .grey-button {
         background: var(--pallete-opaque-bg);
      }
   }
   #term-content {
      height: calc(100% - var(--term-bar-height));
      overflow: hidden;
      width: 100%;
      border-bottom-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
      
      border: 1.5px solid var(--pallete-bgContrast);
      border-top: none;
      font-family: var(--fonts-tertiary);
      font-weight: 500;
      font-size: 0.7rem;

      ::-webkit-scrollbar {
         width: 1rem;
      }
      ::-webkit-scrollbar-thumb {
         background: var(--pallete-bgContrast);
         background-clip: padding-box;
         border: 0.43rem solid transparent;
         border-radius: 1rem;
         :hover {
            background: var(--pallete-opaque-accent);
            background-clip: padding-box;
         }
      }
      ::-webkit-scrollbar-track {
         background: transparent;
      }

      #loading-term {
         display: block;
         align-self: center;
         justify-self: center;
         color: var(--pallete-text);
         animation: name duration timing-function delay iteration-count direction fill-mode;
         ::after {
            content: '.';
            animation-name: termLoadDotsAnimation;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            
            @keyframes termLoadDotsAnimation {
               0% {
                  content: '';
               }
               35% {
                  content: '.';
               }
               65% {
                  content: '..';
               }
               100% {
                  content: '...';
               }
            }
         }
      }
   }
`