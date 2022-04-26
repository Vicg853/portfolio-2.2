import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: [
         'Salut! Ça va?',
         'Je suis passionné par l\'informatique et le whole-stack (vraiment, cela ne s\'agit pas d\'une hyperbole/métaphore... ): je veux tout savoir dessus, du plus pratique au théorique le plus avancé, du hardware au software...',
         'Dès l\'age de 12 ans j\'explore ce sujet. J\'ai donc beaucoup appris sur ce monde et j\'ai réalise que en effet il y en manque encore une long chemin pour tout y savoir (en effet, que cela é impossible, car il y a toujours des nouvelles et cella me fait aimer encore plus tout cela).',
         'Ici vou pourrez trouver ce que j\'ai/je suis entrain/je veut encore appr(is|endre) et encore une variété de projets de différentes portées: open-source, IoT, Hardware, Sites Web, Applica., projets de technologie au sein d\'NGOs, ...',
         'J\'espère que vous pouvez y apprécier 😄!'
      ],
      imageCaption: 'Salut! Je suis Victor: développant des dinosaures 🦖 depuis 2003!',
   },
   mainProps: {
      header: {
         title: 'Salut! Je développe des dinosaures 🦖',
         description: 'Je suis Victor: un passionné de l\'informatique et le whole-stack, mais spécialisé en full-stack pour le moment.',
         backgroundAlt: 'Background de la page principale.'
      },
   }
}