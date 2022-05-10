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
      mainParagraph: "As already declared, since my 12th birthday, I have invested in learning about software development and computer science, not only conceptually, but also largely with hands-on projects.\n\nListing all projects here wouldn't be a good fit for this portfolio, so I’ll be developing an archive to store them all, in case you may want to check them ALLL.\n\nBut here, you may check out my favorite ones. Furthermore, each project contains info about its core technologies/frameworks/libraries/etc, its scope, its area of actuation, and a description, plus its name (obviously...).\n\nI hope you like them as much as I liked conceiving them 😄!",
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