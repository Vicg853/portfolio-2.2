import { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'
import { graphQlClient } from '@lib/graphql-client'
import { getSdk, Objectives } from '@gql-gen/graphql'

type LocalesType = typeof localeEnName | typeof localeFrName | typeof localePtBrName
export interface ObjectivesType extends Pick<Objectives, 'id' | 'objectiveProgress' | 'objectiveSource'>{
   objectiveName: string
   objectiveDescription: string
}

function notFoundObjName(locale: LocalesType): string {
   if(locale === localeEnName) 
      return 'Name not found'
   if(locale === localeFrName)
      return 'Nom pas trouvé'
   if(locale === localePtBrName) 
      return 'Nome não encontrado'
   return 'Name not found'
}

function notFoundObjDesc(locale: LocalesType): string {
   if(locale === localeEnName)
      return 'Description not found'
   if(locale === localeFrName)
      return 'Description pas trouvée'
   if(locale === localePtBrName)
      return 'Descrição não encontrada'
   return 'Description not found'   
}

export const getObjectivesList = async (
   locale: LocalesType | undefined, 
   defaultLocale: LocalesType): Promise<ObjectivesType[]> => {
   const {
      getAllObjectives: objectivesSource
   } = await getSdk(graphQlClient).objectives()

   //* Filter out only the current locale name and descriptions
	const objectivesFetch: ObjectivesType[] = objectivesSource!.map(objective => {
		const objectiveNameLocaleSource = (objective.objectiveName[locale ?? defaultLocale] ?? 
         notFoundObjName(locale ?? defaultLocale)) as string
		const objectiveDescLocaleSource = (objective.objectiveDescription[locale ?? defaultLocale] ??
         notFoundObjDesc(locale ?? defaultLocale)) as string

      return {
         id: objective.id,
         objectiveProgress: objective.objectiveProgress,
         objectiveSource: objective.objectiveSource,
         objectiveName: objectiveNameLocaleSource,
         objectiveDescription: objectiveDescLocaleSource,
      }
	}).sort((a, b) => {
      if(a.objectiveProgress === 'DONE' && b.objectiveProgress !== 'DONE') return -1
      if(a.objectiveProgress !== 'DONE' && b.objectiveProgress === 'DONE') return 1
      if(a.objectiveProgress === 'INPROGRESS' && b.objectiveProgress !== 'INPROGRESS') return -1
      if(a.objectiveProgress !== 'INPROGRESS' && b.objectiveProgress === 'INPROGRESS') return 1
      if(a.objectiveProgress === 'TODO' && b.objectiveProgress !== 'TODO') return -1
      if(a.objectiveProgress !== 'TODO' && b.objectiveProgress === 'TODO') return 1
      return 0
   })

   return objectivesFetch
}