import type { PageFullType } from '../../index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'

export const ProjectsPage: PageFullType<ProjectsPageStaticLocalesSource> = {
   mainProps: {
      header: {
         title: 'Projetos',
         description: 'Alguns dos meus projetos relacionados a dev. software',
         backgroundAlt: "Ilustração da página de projetos",
      }
   },
   content: {
      mainParagraphTitle: 'git checkout projects',
      mainParagraph: 'Aqui você pode descobrir parte dos meus projetos. Infelizmente, listar todos eles aqui não condiz com este portfólio. Consequentemente, desenvolverei um arquivo para armazenamento.\n\nPorém a seção abaixo ainda apresenta meus prediletos!\n\nCada card de projeto o descreve e informa seus tópicos, stack tecnológica e escopo.',
      projectsList: {
         sources: {
            github: 'Repositorio do GitHub',
            www: 'Site',
            moreInf: 'Mais informações',
            related: 'Relacionados',
            other: 'Outro',
         },
         techStack: 'Stack tecnológica',
         scope: { plural: 'Escopos', singular: 'Escopo'},
         topics: { plural: 'Tópicos', singular: 'Tópico'},
         access: 'Acesso',
         noProjects: 'Estranho... Nenhum projeto foi encontrado',
      }
   }
}