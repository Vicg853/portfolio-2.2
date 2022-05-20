import type { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'

export type DevStatuses = 'DEV' | 'READY' | 'DRAFT'

export type HealthResponses = ({
   justCheckStatusCode: number
   checkSpecificJson?: undefined
} | {
   justCheckStatusCode?: undefined
   checkSpecificJson: string
})

export type HealthEndpoint = HealthResponses & {
   url: string
   method: 'GET' | 'POST'
   checkInterval?: number
   plannedMaintenance?: boolean
}

export interface Service {
   id: string
   name: string
   version: string
   devStatus: DevStatuses
   healthEndpoint?: HealthEndpoint
   details?: {
      description?: string
      techStack?: string[]
      links?: {
         type: 'GITHUB' | 'WEBSITE' | 'ENDPOINT' | 'OTHER'
         url: string
         label?: string
      }[]
      runsOn?: string[]
   }
}
   
export type HealthStates = 'MAINT' | 'OK' | 'DOWN' | 'UNKNOWN'

const services: Service[] = [
   {
      id: 'this-webs',
      name: 'Portfolio (this website)',
      version: '2.0.0',
      devStatus: 'DEV',
      details: {
         description: 'A',
         techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Linaria',
            'GraphQL',
            'request-graphql',
            'graphql-codegen'
         ]
      }
   },
   {
      id: 'gql-cms-api',
      name: 'GraphQl CMS API',
      version: '1.0.0',
      devStatus: 'READY'
   },
   {
      id: 'dash-ui',
      name: 'Dashboard',
      version: '1.0.0',
      devStatus: 'DEV'
   },
   {
      id: 'mail-api',
      name: 'Mailer API',
      version: '1.0.0',
      devStatus: 'READY'
   },
   {
      id: 'rusty-mail-api',
      name: 'Mailer API (rust patch)',
      version: '2.0.0',
      devStatus: 'DRAFT'
   },
   {
      id: 'health-check-api',
      name: 'Health check API',
      version: '1.0.0',
      devStatus: 'DRAFT'
   },
   {
      id: 'media-api',
      name: 'Media API',
      version: '1.0.0',
      devStatus: 'DRAFT'
   },
   {
      id: 'tux-clust',
      name: 'Tumex-cluster 1st Node',
      version: '1.0.0',
      devStatus: 'DEV'
   }
]

export async function getServices(locale: typeof localeEnName | typeof localeFrName | typeof localePtBrName): Promise<Service[]> {

   return services
}

export async function getServicesId(): Promise<string[]> {
   
   return services.map(service => service.id)
}

export async function getService(
   locale: typeof localeEnName | typeof localeFrName | typeof localePtBrName, 
   id: string): Promise<Service | undefined> {

   return services.find(service => service.id === id)
}