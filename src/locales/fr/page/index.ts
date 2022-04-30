import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'Je suis passionné par l\'informatique et le whole-stack  et cela ne s\'agit pas d\’une métaphore! Cela me mène à en apprendre toujours plus sur le sujet, du plus théorique aux plus pratique. \n\nDès l\'âge de 12 ans j\'explore ce sujet. J\'ai donc beaucoup appris sur ce monde et dès cette introduction j\’ai pu apprendre que ce monde est en constante évolution,  une des raisons qui justifient ma passion: évolution constante === infinité possibilités.\n\nSur ce site web vous pourrez découvrir ce que j\'apprends et vais encore apprendre, accompagné d\’une variété de projets de différentes portées: open-source, IoT, Hardware, Sites Web, Application, projets de technologie au sein de NGOs, ...',
      imageCaption: 'Moi!',
      objectivesText: {
         title: 'Paramètres\n toujours en jour &\n en route',
         description: 'a.k.a.: mes objectifs pour cette année',
         objectivesLegend: {
            done: 'Conclu 🎉',
            inProgress: 'En progrès...',
            todo: 'En pause / non commencé',
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