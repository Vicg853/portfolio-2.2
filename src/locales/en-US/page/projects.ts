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
      mainParagraph: {
         1: 'Projects are very important, they show and help you practice your skills.',
         2: 'Here you may find most of my projects (at least the ones code-related. Non related ones can be probably found on the',
         3: 'here (cv page)',
         4: 'For each project you can expect resources links, github repo and/or a link to the project\'s page.',
      },
   }
}