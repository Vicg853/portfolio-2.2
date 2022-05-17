import type { PageFullType } from '../../index'
import type { ResumePageLocaleContent } from '@pages/resume'

export const ResumePage: PageFullType<ResumePageLocaleContent> = {
   content: {
      mainParagraph: 'Nesta página, você irá encontrar uma lista com minhas experiências, conhecimento, habilidades e um link de acesso com o meu CV.\n\nComo conhecimento algumas vezes pode ser algo meio desafiador de ilustrar, adotei a seguinte abordagem (que penso ser o melhor jeito de transmitir): cada card de tecnologia/skill terá um nível de experiência baseado em anos/meses e o número de projetos na qual está participou.\n\Caso queira esclarecimento e/ou tenha qualquer sugestão de uma abordagem diferente, sinta se à vontade para mandar uma mensagem',
      contactMePageAlt: 'ou mandar um email em',
      contactMePageLink: 'aqui',
      index: {
         title: 'Sumário',
         education: 'Minha Educação',
         experience: 'Minhas Experiências',
         skills: 'Minhas Habilidades',
         cvLink: 'Baixar/Ver meu CV em PDF',
      },
      cvSections: {
         education: 'Educação',
         experience: 'Experiência',
         skills: {
            title: 'Habilidades',
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