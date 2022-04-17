import { FooterLocale } from '@custom-types/locales/footer'
import type { LinksLocale } from '@custom-types/locales/menu'
import type { NavAltsLocale } from '@custom-types/locales/nav-bar'

const nav: NavAltsLocale = {
   logoAlt: 'My logo',
   menuButton: () => (mode) => `${mode ? 'Close' : 'Open'} menu.`,
   themeButton: () => (theme) => `Set theme to ${theme === 'dark' ? 'light' : 'dark'} mode.`,
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
   footerMessage: 'Hey! Thank you for checking out my portfolio!\n Here are some useful links + references\n Best regards,\n\n Signed:\n Victor Rosa Gomez 😄🖥️,\n Coding dinosaurs since 2003...',
   footerSocialsTexts: {
      github: {
         text: 'Github',
         altText: 'Go to my github profile.',
      },
      linkedin: {
         text: 'LinkedIn',
         altText: 'Go to my LinkedIn profile.',
      },
      stackOverflow: {
         text: 'Stack Overflow',
         altText: 'Go to my Stack Overflow profile.',
      },
   },
   thanksAndReferencesTexts: {
      icons8: {
         name: 'Icons8',
         description: 'This webpage uses icons from Icons8.',
         alt: 'Go to Icons8.',
      },
      unsplash: {
         name: 'Unsplash',
         description: 'This webpage uses images from Unsplash.',
         alt: 'Go to Unsplash.',
      },
      googleFonts: {
         name: 'Google Fonts',
         description: 'This webpage uses fonts from Google Fonts.',
         alt: 'Go to Google Fonts.',
      },
   },
   copyrightText: 'Copyright © 2021-present Victor Rosa Gomez. All rights reserved.',
}


export const enUsLocale = {
   nav,
   menu,

   footer,
}