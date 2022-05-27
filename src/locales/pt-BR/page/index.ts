import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'Eu tinha 12 anos quando pela primeira vez interage com desenvolvimento de software ao pesquisar sobre os básicos de C# .NET.\n\nDesde então, eu me aprofundei no assunto, e estou ciente/animado sabendo de que este, está em constante evolução.\n\nAqui, é possível encontrar o que já dominou, minhas curiosidades e alguns projetos que giram em torno de tópicos como open-source, front-end, back-end, mobile, IoT, etc.',
      imageCaption: 'Olá!',
      objectivesText: {
         title: 'Sempre\nna ativa &\natualizado',
         description: 'a.k.a. vulgo objetivos para este ano',
         objectivesCaption: {
            title: 'Legenda',
            done: 'Projetos concluidos 🎉',
            inProgress: 'Projetos em andamento',
            todo: 'Projetos para o futuro',
            hasSource: 'Pressione para detalhes',
            hasSourceEG: 'Titulo sublinhado',
         }
      }
   },
   mainProps: {
      header: {
         title: 'Eu desenvolvo dinossauros 🦖!',
         description: 'Olá, sou Victor, desenvolvedor full-stack e esse é meu portfólio!',
         backgroundAlt: 'Ilustração da pagina.'
      },
      seo: {
         title: 'Home',
         description: 'Sou Victor, desenvolvedor full-stack.\n Veja aqui o meu portfólio, e saiba mais sobre mim.',
         otherOgTags: [
            {
               property: 'og:image',
               content:  '/images/pages/index/IMG-20200226-WA0034-squared-resized.jpg',
            },
            {
               property: 'og:image:alt',
               content: 'Victor Gomez\'s Portfolio Homepage Image.',
            },
            {
               property: 'og:image:width',
               content: '100',
            },
            {
               property: 'og:image:height',
               content: '100',
            },
         ],
         twitterTags: {
            image: '/images/pages/index/IMG-20200226-WA0034-squared-resized.jpg',
            imageAlt: 'Victor Gomez\'s Portfolio Homepage Image.',
            cardType: 'summary'
         }
      }
   }
}