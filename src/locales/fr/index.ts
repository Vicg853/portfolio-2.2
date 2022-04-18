import { FooterLocale } from '@custom-types/locales/footer'
import type { LinksLocale } from '@custom-types/locales/menu'
import type { NavAltsLocale } from '@custom-types/locales/nav-bar'

const nav: NavAltsLocale = {
   logoAlt: 'Mon logo',
   menuButton: () => (mode) => `${mode ? 'Fermer' : 'Ouvrir'} le menu de navigation.`,
   themeButton: () => (theme) => `Activer le theme ${theme === 'dark' ? 'light' : 'dark'} du site.`,
   localesMenu: {
      closeMeMsg: 'Appuyer sur moi pour fermer le menu.',
      mainAlt: () => (isActive) => `Appuyer ou ${isActive ? 'arrête de me' : ''} survoler pour ${isActive ? 'fermer' : 'ouvrir'} le menu principal.`,
   }
}

const menu: LinksLocale = {
   homePage: {
      text: 'Home',
      altText: 'Acceder la page principale.',
   },
   projectsPage: {
      text: 'Projets',
      altText: 'Voir mês projets.',
   },
   resumePage: {
      text: 'Curriculum vitae',
      altText: 'Acceder mon curriculum vitae.',
   },
   thisSitePage: {
      text: 'Ce site',
      altText: 'Acceder la page d\'information sur ce site.',
   },
   contactPage: {
      text: 'Contact',
      altText: 'Acceder la page de contact.',
   },
}

const footer: FooterLocale = {
   footerMessage: 'Hé! Merci d\'avoir consulté mon portfolio !\n Voici quelques liens utiles + références!\n\n\n Cordialement,\n Signé :\n Victor Rosa Gomez 😄🖥️,\n Codant des dinosaures depuis 2003...',
   footerSocialsTexts: {
      github: {
         name: 'Github',
         alt: 'Aller sur mon profil Github.',
      },
      linkedin: {
         name: 'LinkedIn',
         alt: 'Aller sur mon profil LinkedIn.',
      },
      stackOverflow: {
         name: 'Stack Overflow',
         alt: 'Aller sur mon profil StackOverflow.',
      },
   },
   thanksAndReferencesTexts: {
      icons8: {
         name: 'Icons8',
         description: 'Ce site utilize des icônes d\'Icons8.',
         alt: 'Acceder a Icons8.',
      },
      unsplash: {
         name: 'Unsplash',
         description: 'Ce site utilize des images d\'Unsplash.',
         alt: 'Acceder a Unsplash.',
      },
      googleFonts: {
         name: 'Google Fonts',
         description: 'Ce site utilize des polices de caractère de Google Fonts.',
         alt: 'Acceder a Google Fonts.',
      },
   },
   copyrightText: 'Copyright © 2021-present Victor Rosa Gomez. Tous droits réservés.',
}


export const frLocale = {
   nav,
   menu,

   footer,
}