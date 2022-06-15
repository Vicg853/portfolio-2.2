import type { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'
import type { ProjectResult, Project, ProjectsQueryQuery } from '@gql-gen/gql-cms'

import { graphQlClient } from '@lib/graphql-client'
import { getSdk } from '@gql-gen/gql-cms'

type localeType = typeof localeFrName | typeof localeEnName | typeof localePtBrName

type ProjectType = Omit<NonNullable< ProjectsQueryQuery['getManyProjects']>[0], 'title' | 'description'> & {
   title: string 
   description: string
}

export type GetProjectsPromise = ProjectType[] | null | 'error'

export async function getProjectsList(locale: localeType, defaultLocale: localeType): Promise<GetProjectsPromise> {
   const {
      data,
      err
   } = await getSdk(graphQlClient).projectsQuery().then(data => ({
      data: data.getManyProjects,
      err: null,
   })).catch(err => ({
      data: null,
      err: err,
   }))

   if(err) {
      console.error('Error fetching objectives from GraphQL', err)
      return 'error'
   }

   if(!data) 
      return null

   const projectsList: ProjectType[] = data.map(project => {
      const title = project.title[locale ?? defaultLocale] as string
      const description = project.description[locale ?? defaultLocale] as string

      return {
         ...project,
         title,
         description,
      }
   }).sort((a, b) => 
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

   return projectsList
}