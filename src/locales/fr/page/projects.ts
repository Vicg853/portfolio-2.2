import type { PageFullType } from '../../index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'

export const ProjectsPage: PageFullType<ProjectsPageStaticLocalesSource> = {
   mainProps: {
      header: {
         title: 'Projects',
         description: 'A collection of my projects',
         backgroundAlt: "Project's page background",
      }
   },
   content: {
      mainParagraphTitle: 'git checkout projects',
      mainParagraph: "",
      projectsList: {
         sources: {
            github: 'Repositoir sur GitHub',
            www: 'Site web',
            moreInf: 'Plus d\'informations',
            related: 'Reliés',
            other: 'Autre',
         },
         techStack: 'Stack technologique',
         scope: { plural: 'Domaines', singular: 'Domaine'},
         topics: { plural: 'Sujets', singular: 'Sujet'},
         access: 'Accès',
         noProjects: 'Etrange... Aucun projet n\'a été trouvé',
      }
   }
}