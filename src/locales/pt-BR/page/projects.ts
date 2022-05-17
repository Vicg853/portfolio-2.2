import type { PageFullType } from '../../index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'

export const ProjectsPage: PageFullType<ProjectsPageStaticLocalesSource> = {
   mainProps: {
      header: {
         title: 'Projetos',
         description: 'Uma coleção dos meus projetos',
         backgroundAlt: "Ilustração da página de projetos",
      }
   },
   content: {
      mainParagraphTitle: 'git checkout projects',
      mainParagraph: "Como dito, tenho profundo interesse pela área e me invisto nela, não só conceitualmente, mas também com projetos práticos.\n\n Listar todos os meus projetos aqui, não combinaria corretamente com esse portfólio, então desenvolverei um arquivo com todos meus projetos.\n\nMas, aqui você poderá consultar os meus favoritos. Cada projeto contem uma lista das suas principais tecnologias/frameworks/bibliotecas/etc, seu escopo, área de atuação e uma descrição, acompanhada do nome (obviamente…).",
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