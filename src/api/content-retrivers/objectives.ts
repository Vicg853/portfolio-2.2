import type { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'

type LocalesType = typeof localeEnName | typeof localeFrName | typeof localePtBrName
type TodosTypes = 'to-do' | 'in-progress' | 'done'

interface GlobalObjectivesSourceType {
	objectiveProgress: TodosTypes
	objectiveId: string
	objectiveSource?: string
}

interface ObjectiveLocalesSource {
   objectiveName: string
   objectiveDescription: string
}

export type ObjectivesSourceReturn = GlobalObjectivesSourceType & ObjectiveLocalesSource

interface ObjectivesSourceQueryType extends GlobalObjectivesSourceType {
	sourceI18nIterations: Record<LocalesType, ObjectiveLocalesSource>
}

const objectivesSource: ObjectivesSourceQueryType[] = [
   {
      objectiveId: 'finish-this-webpage',
      objectiveProgress: 'in-progress',
      objectiveSource: 'https://victorgomez.dev/',
      sourceI18nIterations: {
         'en': {
            objectiveName: 'Portfolio v2',
            objectiveDescription: 'Finish this website!'
         },
         'pt': {
            objectiveName: 'Portfolio v2',
            objectiveDescription: 'Finalizar esse site!'
         },
         'fr': {
            objectiveName: 'Portfolio v2',
            objectiveDescription: 'Finir ce site!'
         }
      },
   },
   {
      objectiveId: 'rust-lang-learn',
      objectiveProgress: 'in-progress',
      sourceI18nIterations: {
         'en': {
            objectiveName: 'Rust',
            objectiveDescription: 'Learn the rust programming language'
         },
         'pt': {
            objectiveName: 'Rust',
            objectiveDescription: 'Aprender a linguagem de programação Rust'
         },
         'fr': {
            objectiveName: 'Rust',
            objectiveDescription: 'Apprendre le langage de programmation Rust'
         }
      },
   },
   {
      objectiveId: 'k8s-lab',
      objectiveProgress: 'to-do',
      sourceI18nIterations: {
         'en': {
            objectiveName: 'Magnificent K8s',
            objectiveDescription: 'Finish learning about and setting up a Kubernetes home lab cluster'
         },
         'pt': {
            objectiveName: 'Magnífico K8s',
            objectiveDescription: 'Acabar de aprender sobre e configurar um laboratório de Kubernetes caseiro'
         },
         'fr': {
            objectiveName: 'Magnifique K8s',
            objectiveDescription: 'Finir d\'apprendre et de configurer un laboratoire de Kubernetes chez moi'
         }
      },
   },
   {
      objectiveId: 'alpes-cap-dash',
      objectiveProgress: 'to-do',
      sourceI18nIterations: {
         'en': {
            objectiveName: 'AlpesCap Dashboard',
            objectiveDescription: 'Code the AlpesCap\'s administration dashboard with Remix.run'
         },
         'pt': {
            objectiveName: 'AlpesCap Dashboard',
            objectiveDescription: 'Programar o dashboard de administração do AlpesCap com Remix.run'
         },
         'fr': {
            objectiveName: 'AlpesCap Dashboard',
            objectiveDescription: 'Programmer le dashboard d\'administration de AlpesCap avec Remix.run'
         }
      },
   },
   {
      objectiveId: 'AlpesCap website',
      objectiveProgress: 'done',
      objectiveSource: 'https://alpescap-canary.victorgomez.dev/',
      sourceI18nIterations: {
         'en': {
            objectiveName: 'AlpesCap website',
            objectiveDescription: 'Code AlpesCap\'s website with NextJs'
         },
         'pt': {
            objectiveName: 'Site AlpesCap',
            objectiveDescription: 'Programar o site da AlpesCap com NextJs'
         },
         'fr': {
            objectiveName: 'Site web AlpesCap',
            objectiveDescription: 'Programmer le site web de AlpesCap avec NextJs'
         }
      },
   },
]


//TODO Add real graphql source when apollo is ready

export const getObjectivesList = (locale: LocalesType | undefined, defaultLocale: LocalesType): ObjectivesSourceReturn[] => {
   //filter out only the current locale name and descriptions
	const objectivesFetch: ObjectivesSourceReturn[] = objectivesSource.map(objective => {
		const objectiveLocale = objective.sourceI18nIterations[(locale ?? defaultLocale)] ??
			objective.sourceI18nIterations[defaultLocale]

		return {
			...objective,
			sourceI18nIterations: null,
			objectiveName: objectiveLocale.objectiveName,
			objectiveDescription: objectiveLocale.objectiveDescription,
		}
	}).sort((a, b) => a.objectiveProgress === b.objectiveProgress ? 0 : a.objectiveProgress === 'to-do' ? 1 : -1)

   return objectivesFetch
}