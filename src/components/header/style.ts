import { styled } from 'linaria/react'
import { css } from 'linaria'

export const Container = styled.header`
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-start;
   
   z-index: var(--zIndex-header);

   width: 100vw;

   && > * {
      z-index: calc(var(--zIndex-header) + 1);
   }

   && > #header-background {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: var(--zIndex-header) !important;
   }
`