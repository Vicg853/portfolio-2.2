import type { PageFullType } from '../../index'
import type { ResumePageLocaleContent } from '@pages/resume'

export const ResumePage: PageFullType<ResumePageLocaleContent> = {
   mainProps: {
      header: {
         title: 'C.V.',
         description: 'Minhas experiencias e acesso ao meu C.V.',
         backgroundAlt: "Ilustração da página de C.V.",
      }
   },
   content: {
      mainParagraph: 'Descubra aqui mais sobre minhas experiências, conhecimento e competências. Você também pode visualizar meu C.V. anexado ao lado.\n\nCaso precise de mais informação ou esclarecimentos, sinta se avontade para entrar em contato',
      contactMePageAlt: 'ou mandar um email em',
      contactMePageLink: 'aqui',
      index: {
         title: 'Sumário',
         education: 'Educação',
         experience: 'Experiências',
         skills: 'Competências',
         cvLink: 'Baixar/visualizar meu CV em PDF',
      },
      cvSections: {
         education: {
            title: 'Educação',
            fromCaption: 'Inicio:',
            toCaption: 'Final:',
            sinceCaption: 'Desde:',
         },
         experience: {
            title: 'Experiência',
            fromCaption: 'Inicio:',
            toCaption: 'Final:',
            sinceCaption: 'Desde:',
         },
         skills: {
            title: 'Competências',
            categoryAllOption: 'Todas',
            categoryFilter: 'Filtrar por categoria',
            projectsNumber: 'Projetos',
            skillSource: 'Fonte',
            relatedProjects: 'Projetos relacionados',
            searchFilter: 'Pesquisar por:',
            techExpYears: 'Anos de experiência',
         },
      }
   }
}