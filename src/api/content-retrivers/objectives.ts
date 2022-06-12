import { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'
import { graphQlClient } from '@lib/graphql-client'
import { getSdk, ObjectiveQueryFields } from '@gql-gen/gql-cms'

type LocalesType = typeof localeEnName | typeof localeFrName | typeof localePtBrName

export type ObjectivesType = Omit<ObjectiveQueryFields, 'title' | 'description'> & {
   title: string
   description: string | null
}

export type GetObjectivesPromise = ObjectivesType[] | null | 'error'

export const getObjectivesList = async (
   locale: LocalesType | undefined, 
   defaultLocale: LocalesType): Promise<GetObjectivesPromise> => {
   const {
      data,
      err
   } = await getSdk(graphQlClient).objectives({
      year: 2022,
   }).then(data => ({
      data: data.getManyObjectives,
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

   //* Filter out only the current locale name and descriptions
	const objectivesFetch = data.map(objective => {
		const objectiveNameLocaleSource = (objective.title![locale ?? defaultLocale]) as string
		const objectiveDescLocaleSource = (objective.description?.[locale ?? defaultLocale]) as string | null
         ?? null

      return {
         ...objective,
         title: objectiveNameLocaleSource,
         description: objectiveDescLocaleSource,
      }
	}).sort((a, b) => {
      if(a.progress === 'DONE' && b.progress !== 'DONE') return -1
      if(a.progress !== 'DONE' && b.progress === 'DONE') return 1
      if(a.progress === 'INPROGRESS' && b.progress !== 'INPROGRESS') return -1
      if(a.progress !== 'INPROGRESS' && b.progress === 'INPROGRESS') return 1
      if(a.progress === 'TODO' && b.progress !== 'TODO') return -1
      if(a.progress !== 'TODO' && b.progress === 'TODO') return 1
      return 0
   })

   return objectivesFetch
}