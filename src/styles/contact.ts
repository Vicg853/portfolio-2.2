import { styled } from 'linaria/react'
import { css } from 'linaria'

export const PageTitle = styled.h1`
   font-size: 1.3rem;
   font-weight: 700;
   color: var(--pallete-text);
   margin-top: 12rem;
   margin-bottom: 3rem;
   text-align: center;
`

export const inputSectionStyle = css`
   display: grid;
   grid-template-columns: 350px 350px;
   grid-column-gap: 3rem;
   grid-template-areas: 
      "label1 labelTxtArr"
      "input1 textarea"
      "label2 textarea"
      "input2 textarea"
      "label3 textarea"
      "input3 textarea"
      "button button";

   label:not(:first-child) {
      margin-top: 1.1rem;
   }
   button {
      margin-top: 2rem;
      grid-area: button;
      width: unset;
   }
   textarea { grid-area: textarea; align-self: stretch; height: unset;}

   .label1 { grid-area: label1; align-self: flex-end; }
   .label2 { grid-area: label2; }
   .label3 { grid-area: label3; }
   .input1 { grid-area: input1; }
   .input2 { grid-area: input2; }
   .input3 { grid-area: input3; }
   .labelTextA { grid-area: labelTxtArr; }

   @media (max-width: 810px) {
      width: 100%;
      justify-content: center;
      grid-template-columns: auto;
      grid-template-areas: 
      "label1"
      "input1"
      "label2"
      "input2"
      "label3"
      "input3"
      "labelTxtArr"
      "textarea"
      "button";
   }

   @media (max-width: 1172px) and (min-width: 810px) {
      width: 100%;
      grid-template-columns: calc(50% - var(--gap)) calc(50% - var(--gap));
      justify-content: space-between !important;
      input, textarea {
         width: unset;
         max-width: 100%;
         min-width: 100%;
      }
   }
`

export const contactSectionStyle = css`
   --gap: 3rem;
   align-items: stretch;
   gap: var(--gap);
   
   @media (max-width: 810px) {
      justify-content: center !important;
   }
`

export const otherContactsStyle = css`
   width: calc(100% - 750px - var(--gap) - 2rem);
   min-width: 200px;
   max-width: 100%;
   flex-shrink: 1;
   background: var(--pallete-opaque-bgContrast);
   padding: 1.2rem 1rem;
   border-radius: 0.7rem;

   h3 {
      font-size: 1rem;
      margin-bottom: 1.3rem;
   }   
   span, a {
      color: var(--pallete-text);
   }

   @media (max-width: 1172px) {
      width: calc(50% - var(--gap));
   }
   @media (max-width: 810px) {
      max-width: 350px;
      width: 100%;
      justify-self: center;
   }
`

export const gmtOffsetStyle = css`
   background: var(--pallete-opaque-bgContrast);
   padding: 1.2rem 1rem;
   border-radius: 0.7rem;
   margin-top: 1.5rem;
   width: 85vw;
   color: var(--pallete-text);

   @media (max-width: 1172px) {
      width: calc(50% - var(--gap));
      margin-top: 0;
   }
   @media (max-width: 810px) {
      max-width: 350px;
      width: 100%;
      justify-self: center;
   }
`

export const ReqResultMessageCard = styled.div`
   position: fixed;
   top: 10vh;
   transition: none;
   width: 0px;
   height: 0px;

   sub {
      display: block;
      padding: 1rem 1.4rem;
      border-radius: 0.5rem;
      color: var(--pallete-bg);
      font-weight: 600;
      font-size: 0.9rem;
      z-index: var(--zIndex-messagePopUp);
      transform: scale(1.4);
      opacity: 0.5;
      transition: all 0.3s ease-in-out;


   }

   &&[data-status="err"], &&[data-status="success"] {
      width: auto;
      height: auto;
      sub {
         transform: scale(1);
         opacity: 1;
      }
   }

   &&[data-status='err'] {
      sub {
         background: var(--pallete-constants-err);
      }
   }
   &&[data-status='success'] {
      sub {
         background: var(--pallete-constants-success);
      }
   }

`
