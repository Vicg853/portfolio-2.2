import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'Je suis passionné par l\'informatique et le "whole-stack", un chercheur enthousiaste du sujet. \n\nDès l\'âge de 12 ans je m\'approfondi dans le sujet et dès cette introduction j\’ai pu apprendre que ce sujet est en constante croissance, ce qui justifie encore plus ma passion.\n\nSur ce site web vous pourrez découvrir ce que je sais, ainsi que mes curiosités et projets (en cours et futurs) de portées open-source, IoT, Hardware, Sites Web, Application, projets de technologie au sein de NGOs, etc.',
      imageCaption: 'Salut!',
      objectivesText: {
         title: 'Paramètres\n toujours en jour &\n en route',
         description: 'a.k.a.: mes objectifs pour cette année',
         objectivesCaption: {
            title: 'Legende',
            done: 'Projets conclus 🎉',
            inProgress: 'Projets en cours',
            todo: 'Projets à venir',
         }
      }
   },
   mainProps: {
      header: {
         title: 'Salut! Je développe des dinosaures 🦖',
         description: 'Je suis Victor: un passionné de l\'informatique et le whole-stack, mais spécialisé en full-stack pour le moment.',
         backgroundAlt: 'Background de la page principale.'
      },
   }
}