import { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'
import { request, gql } from 'graphql-request'

if(!process.env.MAIN_CMS_GQL_URL) throw new Error('MAIN_CMS_GQL_URL env var not found')
const cmsGqlUrl = process.env.MAIN_CMS_GQL_URL 

type LocalesType = typeof localeEnName | typeof localeFrName | typeof localePtBrName
type TodosTypesEnum = 'TODO' | 'INPROGRESS' | 'DONE'

interface GlobalObjectivesSourceType {
   id: string
	objectiveProgress: TodosTypesEnum
	objectiveSource?: string
}
interface ObjectiveLocalesSource {
   objectiveName: string
   objectiveDescription: string
}

export type Objectives = GlobalObjectivesSourceType & ObjectiveLocalesSource

const objectivesGql = gql`
query {
   getAllObjectives {
         id
         objectiveProgress
         objectiveSource
         objectiveName
         objectiveDescription
      }
   }
`

interface ObjectivesSourceQueryType extends GlobalObjectivesSourceType {
   objectiveName: Record<LocalesType, string>
   objectiveDescription: Record<LocalesType, string>
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

export const getObjectivesList = async (locale: LocalesType | undefined, defaultLocale: LocalesType): Promise<Objectives[]> => {
   const { getAllObjectives: objectivesSource } = await request<{
      getAllObjectives: ObjectivesSourceQueryType[]
   }>(cmsGqlUrl, objectivesGql)

   //* Filter out only the current locale name and descriptions
	const objectivesFetch: Objectives[] = objectivesSource.map(objective => {
		const objectiveNameLocaleSource = objective.objectiveName[locale ?? defaultLocale] ?? 
         notFoundObjName(locale ?? defaultLocale)
		const objectiveDescLocaleSource = objective.objectiveDescription[locale ?? defaultLocale] ??
         notFoundObjDesc(locale ?? defaultLocale)

      return {
         ...objective,
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