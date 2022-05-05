import type { zIndexesTypes, Fonts, PalleteConstantsTyping, ThemeTyping } from '@c-types/theme'
import { css } from 'linaria'

const zIndex: zIndexesTypes = {
   nav: 50,
   menu: 40,
   header: 25,
   messagePopUp: 90,
}

const fonts: Fonts = {
   primary: '"Montserrat", sans-serif',
   secondary: '"Montserrat Alternates", sans-serif',
   tertiary: '"JetBrains Mono", sans-serif',
}

const PalleteConstants: PalleteConstantsTyping = {
   err: '#ff6b6b',
   success: '#8efa75',
   info: '#91ceff',
   warn: '#ffc085',
   header: {
      hLine:'#ffcb75',
      hText: '#f5f5f5'
   },
   nav: {
      onHeaderColor: '#f5f5f5',
   }
}

export const DarkTheme: ThemeTyping = {
   pallete: {
      bg: '#0b0a0a',
      bgContrast: '#282828',
      bgAlt: '#f5f5f5',
      accent: '#ffcb75',
      text: '#ffffff',
      textAlt: '#000000',
      opaque: {
         bg: '#0b0a0a70',
         bgContrast: '#28282870',
         bgAlt: '#f5f5f570',
         accent: '#ffcb7570',
         text: '#ffffff70',
         textAlt: '#00000070',
      },
      constants: PalleteConstants
   },
   zIndex: zIndex,
   fonts: fonts
}

export const LightTheme: ThemeTyping = {
   pallete: {
      bg: '#f5f5f5',
      bgContrast: '#e9e9e9',
      bgAlt: '#0b0a0a',
      accent: '#ffba48',
      text: '#1b1b1b',
      textAlt: '#ffffff',
      opaque: {
         bg: '#f5f5f570',
         bgContrast: '#e9e9e970',
         bgAlt: '#0b0a0a70',
         accent: '#ffba4870',
         text: '#1b1b1b70',
         textAlt: '#ffffff70',
      },
      constants: PalleteConstants
   },
   zIndex: zIndex,
   fonts: fonts
}

export const GlobalStyles = css`
   :global() {
      *{
         margin: 0px;
         padding: 0px;
         text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
         text-rendering: optimizeLegibility !important;
         -webkit-font-smoothing: antialiased !important;
         text-decoration-line: none;
         outline: none;
         font-family: var(--fonts-primary);
         box-sizing: border-box; 
         background-repeat: no-repeat;
         transition-property: color, background, background-color;
         transition-duration: 0.5s;
      }
      html{
         width: 100vw;
         overflow-x: hidden;
      }
      body {
         background: var(--pallete-bg);
      }
      @media (prefers-reduced-motion: reduce) {
         transition: all none;
      }
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
      @media (prefers-reduced-motion: reduce) {
         * {
            transition: none all !important;
         }
      }
   }
`