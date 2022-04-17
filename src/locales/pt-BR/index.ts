import { FooterLocale } from '@custom-types/locales/footer'
import type { LinksLocale } from '@custom-types/locales/menu'
import type { NavAltsLocale } from '@custom-types/locales/nav-bar'

const nav: NavAltsLocale = {
   logoAlt: 'Meu logo',
   menuButton: () => (mode) => `${mode ? 'Fechar' : 'Abrir'} o menu de navegação.`,
   themeButton: () => (theme) => `Activar o tema ${theme === 'dark' ? 'light' : 'dark'} do site.`,
}

const menu: LinksLocale = {
   homePage: {
      text: 'Home',
      altText: 'Ir a pagina principal.',
   },
   projectsPage: {
      text: 'Projetos',
      altText: 'Visualizar meus projets.',
   },
   resumePage: {
      text: 'Curriculum vitae',
      altText: 'Acessar meu curriculum vitae.',
   },
   thisSitePage: {
      text: 'Este site',
      altText: 'Acessar informações sobre esse site.',
   },
   contactPage: {
      text: 'Contato',
      altText: 'Entrar em contato.',
   },
}

const footer: FooterLocale = {
   footerMessage: 'Hey! Obrigado por acessar e ler meu site!\n Aqui estão alguns links úteis + referências!\n\n Cordialmente,\n Assinado:\n Victor Rosa Gomez 😄🖥️,\n Desenvolvendo dinossauros desde 2003...',
   footerSocialsTexts: {
      github: {
         text: 'Github',
         altText: 'Acessar meu perfil no Github.',
      },
      linkedin: {
         text: 'LinkedIn',
         altText: 'Acessar meu perfil no LinkedIn.',
      },
      stackOverflow: {
         text: 'Stack Overflow',
         altText: 'Acessar meu perfil no StackOverflow.',
      },
   },
   thanksAndReferencesTexts: {
      icons8: {
         name: 'Icons8',
         description: 'Esse site usa icônes do Icons8.',
         alt: 'Acessar ao Icons8.',
      },
      unsplash: {
         name: 'Unsplash',
         description: 'Esse site usa imagens do Unsplash.',
         alt: 'Acessar ao Unsplash.',
      },
      googleFonts: {
         name: 'Google Fonts',
         description: 'Esse site usa fontes do Google Fonts.',
         alt: 'Acessar ao Google Fonts.',
      },
   },
   copyrightText: 'Copyright © 2021-presente Victor Rosa Gomez. Todos os direitos reservados.',
}


export const ptBRLocale = {
   nav,
   menu,

   footer,
}