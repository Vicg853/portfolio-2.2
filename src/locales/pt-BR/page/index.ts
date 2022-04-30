import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'Sou profundamente apaixonado por ciência da computação e a chamada "whole-stack", isso me leva então procurar saber cada vez mais sobre o assunto, desde o teórico mais pesado ao prático, ou do hardware ao software como dito. \n\nEntrei nesse universo aos 12 anos. Desde então descobri inúmeras coisas sobre o assunto. E não demorou muito para eu perceber que a área está em constante evolução, algo que acho incrível: evolução constante === infinitas possibilidades.\n\nNesse site você poderá descobrir o que eu sei, aprendo e irei aprender, junto com uma variedade de projetos, de vários escopos: open-source, IoT, hardware, sites, apps, relacionados a ONG, ...',
      imageCaption: 'Aqui estou!',
      objectivesText: {
         title: 'Me mantendo sempre\natualizado &\n ativo',
         description: 'a.k.a.: meus objetivos para este ano',
         objectivesLegend: {
            done: 'Concluido 🎉',
            inProgress: 'Em curso...',
            todo: 'Em standby / não iniciado ainda',
         }
      }
   },
   mainProps: {
      header: {
         title: 'Hi! I code dinosaurs 🦖',
         description: 'Sou Victor: um apaixonado por ciencia da computação e a whole-stack, mas focado em full-stack para o momento.',
         backgroundAlt: 'Ilustração da pagina.'
      },
   }
}