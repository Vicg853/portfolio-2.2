import type { PageFullType } from '../../index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'

export const ProjectsPage: PageFullType<ProjectsPageStaticLocalesSource> = {
   mainProps: {
      header: {
         title: 'Projects',
         description: 'Some of my software dev. related projects',
         backgroundAlt: "Project's page background",
      },
      seo: {
         title: 'Projects',
         description: 'Check out some of my software development related projects.',
         keywords: ['projects', 'software', 'development', 'full-stack', 'developer', 'computer science', 'fullstack', 'backend', 'frontend']
      }
   },
   content: {
      mainParagraphTitle: 'git checkout projects',
      mainParagraph: 'Here you may go through some of my projects. Sadly listing them all wouldn’t be a good fit. As a result, I’m integrating an archive for storage.\n\nStill, you may find a section underneath containing my favorite ones!\n\nEach project card describes itself and catalogs its: tech stack, topics, and scope.',
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
         noProjects: 'Weirdly no projects were found!',
      }
   }
}