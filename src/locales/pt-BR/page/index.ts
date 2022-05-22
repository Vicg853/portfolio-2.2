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
         }
      }
   },
   mainProps: {
      header: {
         title: 'Eu desenvolvo dinossauros 🦖!',
         description: 'Sou Victor, desenvolvedor full-stack, apaixonado por ciencia da computação e a "whole-stack".',
         backgroundAlt: 'Ilustração da pagina.'
      },
   }
}