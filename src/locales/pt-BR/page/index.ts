import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'Sou apaixonado por ciência da computação e pela "whole-stack", um pesquisador entusiasta sobre o tema, desde a área de hardware a área de software. \n\nImerso neste universo aos desde 12 anos, não demorou muito para eu perceber que a área está em constante evolução, algo que acho incrível e por isso estou em constante aprendizado.\n\nNeste site é possível explorar o que já domino, minhas curiosidades e projetos (tanto em andamento, quanto para o futuro) de escopos open-source, IoT, hardware, sites, apps, relacionados a ONG, etc',
      imageCaption: 'Olá!',
      objectivesText: {
         title: 'Sempre\nna ativa &\natualizado',
         description: 'a.k.a. projetos a curto prazo (vulgo 2022)',
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
         title: 'Olá! Eu desenvolvo dinossauros 🦖',
         description: 'Sou Victor, desenvolvedor full-stack, apaixonado por ciencia da computação e a "whole-stack".',
         backgroundAlt: 'Ilustração da pagina.'
      },
   }
}