import { FooterLocale } from '@custom-types/locales/footer'
import type { LinksLocale } from '@custom-types/locales/menu'
import type { NavAltsLocale } from '@custom-types/locales/nav-bar'

import { pages } from './pages'

const nav: NavAltsLocale = {
   logoAlt: 'V.G.\'s logo',
   menuButton: () => (mode) => `${mode ? 'Close' : 'Open'} menu.`,
   themeButton: () => (theme) => `Set theme to ${theme === 'dark' ? 'light' : 'dark'} mode.`,
   localesMenu: {
      closeMeMsg: 'Pres again to close.',
      mainAlt: () => (isActive) => `Press or ${isActive ? 'un-' : ''}hover me to ${isActive ? 'close' : 'open'} the main menu.`,
   }
}

const menu: LinksLocale = {
   homePage: {
      text: 'Home',
      altText: 'Go to home page.',
   },
   projectsPage: {
      text: 'Projects',
      altText: 'Go to projects page.',
   },
   resumePage: {
      text: 'Resume',
      altText: 'Go to resume page.',
   },
   thisSitePage: {
      text: 'This site',
      altText: 'Go to this site page.',
   },
   contactPage: {
      text: 'Contact',
      altText: 'Go to contact page.',
   },
}

const footer: FooterLocale = {
   footerMessage: 'Hey! Thanks for checking out my portfolio!\nHere are some useful links and references,\nBest regards,\n\nVictor Rosa Gomez 😄🖥️,\nCoding dinosaurs since 2003...',
   footerSocialsTexts: {
      github: {
         name: 'Github',
         alt: 'Check out my github profile.' ,
      },
      linkedin: {
         name: 'LinkedIn',
         alt: 'Check out my LinkedIn profile.' ,
      },
      stackOverflow: {
         name: 'Stack Overflow',
         alt: 'Check out my Stack Overflow profile.' ,
      },
   },
   thanksAndReferencesTexts: {
      icons8: {
         name: 'Icons8',
         description: 'This webpage uses some of Icons8\'s icons.',
         alt: 'Go to Icons8.',
      },
      googleFonts: {
         name: 'Google Fonts',
         description: 'This webpage uses fonts provided by Google Fonts.',
         alt: 'Go to Google Fonts.',
      },
   },
   copyrightText: 'Copyright © 2021-present Victor Rosa Gomez. All rights reserved.',
}


export const enUsLocale = {
   nav,
   menu,
   page: {
      pages,
   },
   footer,
}