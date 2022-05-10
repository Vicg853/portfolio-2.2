import type { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'
import type { ProjectScopes, ProjectSource, ProjectMetadata } from '@gql-gen/graphql'

import { graphQlClient } from '@lib/graphql-client'
import { getSdk } from '@gql-gen/graphql'

type localeType = typeof localeFrName | typeof localeEnName | typeof localePtBrName
export interface ProjectsSource {
   frontmatter: {
      image: string
      title: string
      description: string
   }
   metadata: {
      startDate: ProjectMetadata['startDate']
      topics: ProjectMetadata['topics']
      scopes?: ProjectScopes | null
      techStack: ProjectMetadata['techStack']
   } & ({
      ongoing: true
   } | {
      ongoing: false
      endDate: ProjectMetadata['endDate']
   })
   sources: {
      sourceLink: ProjectSource['sourceLink'],
      sourceType: ProjectSource['sourceType']
      __typename?: undefined | null
   }[]
} 

export type ProjectsListType = ProjectsSource[] | null

export async function getProjectsList(locale: localeType, defaultLocale: localeType): Promise<ProjectsListType> {
   const {
      getAllProjects: projectsSource
   } = await getSdk(graphQlClient).projects().catch(err => {
      throw new Error(`Error querying projects:`, {
         cause: err
      })
   })

   if(!projectsSource) 
      return null

   const projectsList: ProjectsSource[] = projectsSource.map(project => {
      
      const frontmatter = {
         image: project.frontmatter.image,
         title: project.frontmatter.projectName[locale as 'en' | 'pt'] 
            ?? project.frontmatter.projectName[defaultLocale as 'en'] ?? 'Name not found',
         description: project.frontmatter.projectDescription[locale  as 'en' | 'pt'] 
            ?? project.frontmatter.projectDescription[defaultLocale  as 'en'] ?? 'Description not found',
      }

      const metadata = {
         ...project.metadata,
         __typename: null,
         endDate: project.metadata.endDate ?? null,
         ongoing: project.metadata.endDate ? false : true,
      }

      return {
         frontmatter,
         metadata,
         sources: project.sources.map(source => ({
            ...source,
            __typename: null
         }))
      }
   })

   return projectsList
}