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
