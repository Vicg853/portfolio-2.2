import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: [
         'Olá! Tudo bem?',
         'Sou apaixonado por ciencia da computação, mesmo (não é frase de efeito): amo aprender qualquer coisa da area, desde o mais pratico ao teórico mais pesado, ou do hardware ao software...',
         'Entrei nesse mundo aos 12 anos e desde então aprendi diversas coisas sobre esse assunto e sei que ainda existe uma longaaa jornada para conseguir saber de tudo (algo que na verdade nunca vou alcançar, de tanto que essa area muda, acho isso incrível !!!).',
         'Aqui você pode encontrar oque eu já/estou/irei aprende(ndi|ndo|rei) assim como uma variedade de projetos de diferentes escopos: open-source, IoT, Hardware, Sites, Apps, com ONGs relacionados a tech., ...',
         'Espero que goste 😄!'
      ],
      imageCaption: 'Olá! Sou Victor: desenvolvendo dinossauros 🦖 desde 2003!',
   },
   mainProps: {
      header: {
         title: 'Hi! I code dinosaurs 🦖',
         description: 'Sou Victor: um apaixonado por ciencia da computação e a whole-stack, mas focado em full-stack para o momento.',
         backgroundAlt: 'Ilustração da pagina.'
      },
   }
}