export interface zIndexesTypes {
   nav: number
   menu: number
   header: number
}

export interface Fonts {
   primary: string
   secondary: string
   tertiary: string
}

export interface PalleteConstantsTyping {
   err: string,
   success: string,
   info: string,
   warn: string,
   header: {
      h1: string,
      h2: string
   }
}

export interface PalleteTyping {
   bg: string
   bgContrast: string
   bgAlt: string
   accent: string
   text: string
   textAlt: string
}

export interface ThemeTyping {
   pallete: PalleteTyping & {
      opaque: PalleteTyping
      constants: PalleteConstantsTyping
      opaque: {

      }
   }
   zIndex: zIndexesTypes
   fonts: Fonts
}