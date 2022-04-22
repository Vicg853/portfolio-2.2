import { styled } from 'linaria/react'
import { css } from 'linaria'
 
export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: stretch;
   width: 100vw;
   padding: 3rem 5vw;
   height: auto;
`

export const Section = styled.section`
   display: inline-flex;
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
`

export const terminalContainer  = css`
   --term-bar-height: 25px;

   width: 100%;
   max-width: 700px;
   height: 400px;
   overflow: hidden;
   
   display: flex;
   flex-direction: column;
   align-items: stretch;

   #term-bar {
      max-width: 100%;
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