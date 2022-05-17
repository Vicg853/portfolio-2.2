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
      mainParagraph: "I love learning new software development concepts but also engaging in projects.\n\n Sadly, listing all my projects, wouldn't be a good fit for this portfolio, so I’m currently integrating an archive to store them all (in case you may be willing to check them all out).\n\n Still you’ll find here a selection of my favorite ones. Each project card contains a list with its core technologies, tech division(s) (full-stack, backend, …), description, scope and name (obviously...).",
      projectsList: {
         sources: {
            github: 'Github repository',
            www: 'Website',
            moreInf: 'More info',
            related: 'Related',
            other: 'Other',
         },
         techStack: 'Tech-stack',
         scope: { plural: 'Scopes', singular: 'Scope'},
         topics: { plural: 'Topics', singular: 'Topic'},
         access: 'Access',
         noProjects: 'Weird... No projects were found',
      }
   }
}