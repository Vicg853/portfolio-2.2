import type { localeEnName, localeFrName, localePtBrName } from '../../locales/configs'

export type DevStatuses = 'DEV' | 'READY' | 'DRAFT' | 'DEPRECATED'

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
      techStack?: {
         techName: string
         techLink?: string
      }[]
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
      devStatus: 'READY',
      healthEndpoint: {
         url: 'https://victorgomez.dev/api/health',
         method: 'GET',
         checkSpecificJson: '{"status":"pass","message":"Everything is fine!"}',
         checkInterval: 60000
      },
      details: {
         description: 'The current website you\'re visiting right now. I use it to show my work and abilities.',
         techStack: [
            {
               techName: 'Next.js',
               techLink: 'https://nextjs.org/'
            },
            { 
               techName: 'React',
               techLink: 'https://reactjs.org/'
            },
            { 
               techName: 'TypeScript',
               techLink: 'https://www.typescriptlang.org/'
            },
            { 
               techName: 'Linaria',
               techLink: 'https://linaria.dev/'
            },
            { 
               techName: 'GraphQL',
               techLink: 'https://graphql.org/'
            },
            { 
               techName: 'graphql-request',
               techLink: 'https://github.com/prisma-labs/graphql-request'
            },
            { 
               techName: 'graphql-codegen',
               techLink: 'https://www.graphql-code-generator.com/'
            },
            {
               techName: 'eslint',
               techLink: 'https://eslint.org/'
            }
         ],
         runsOn: [
            'Node.js',
            'Vercel' 
         ],
         links: [
            {
               type: 'WEBSITE',
               url: 'https://victorgomez.dev',
               label: 'Link'
            }
         ]
      }
   },
   {
      id: 'gql-cms-api',
      name: 'GraphQl CMS API',
      version: '1.0.0',
      devStatus: 'READY',
      healthEndpoint: {
         url: 'https://main-gql.victorgomez.dev/.well-known/apollo/server-health',
         method: 'GET',
         checkSpecificJson: '{"status":"pass"}',
         checkInterval: 60000
      },
      details: {
         description: 'The CMS server for my portfolio, etc. It is the first version and will probably go through many improvements.',
         techStack: [
            {
               techName: 'Apollo Server',
               techLink: 'https://www.apollographql.com/'
            },
            {
               techName: 'Express',
               techLink: 'https://expressjs.com/'
            },
            {
               techName: 'TypeScript',
               techLink: 'https://www.typescriptlang.org/'
            },
            {
               techName: 'GraphQL',
               techLink: 'https://graphql.org/'
            },
            {
               techName: 'Prisma ORM',
               techLink: 'https://www.prisma.io/'
            },
            {
               techName: 'graphql-codegen',
               techLink: 'https://www.graphql-code-generator.com/'
            },
            {
               techName: 'TypeGraphQL',
               techLink: 'https://www.typegraphql.com/'
            },
            {
               techName: 'eslint',
               techLink: 'https://eslint.org/'
            },
            {
               techName: 'Jest',
               techLink: 'https://jestjs.io/'
            }
         ],
         runsOn: [
            'Node.js',
            'Railway.app'
         ]
      }
   },
   {
      id: 'dash-ui',
      name: 'Dashboard',
      version: '1.0.0',
      devStatus: 'DEV',
      details: {
         description: 'For the moment serves as a CMS content management interface. Although it is not limited to it, as it will provide interaction and management features for future projects.',
         techStack: [
            {
               techName: 'Remix.run',
               techLink: 'https://remix.run/'
            },
            {
               techName: 'React',
               techLink: 'https://reactjs.org/'
            },
            {
               techName: 'TypeScript',
               techLink: 'https://www.typescriptlang.org/'
            },
            {
               techName: 'GraphQL',
               techLink: 'https://graphql.org/'
            },
            { 
               techName: 'graphql-request',
               techLink: 'https://github.com/prisma-labs/graphql-request'
            },
            { 
               techName: 'graphql-codegen',
               techLink: 'https://www.graphql-code-generator.com/'
            },
            {
               techName: 'Playwright',
               techLink: 'https://www.playwright.dev/'
            }
         ],
         runsOn: [
            'Node.js',
            'Vercel'
         ]
      }
   },
   {
      id: 'mail-api',
      name: 'Mailer API',
      version: '1.0.0',
      devStatus: 'DEPRECATED',
      details: {
         description: 'The first version of my mailer API. that is being currently used to send messages through here (contact page). The second version (that is under dev) has more features.',
         techStack: [
            {
               techName: 'Express',
               techLink: 'https://expressjs.com/'
            },
            {
               techName: 'Mongooose',
               techLink: 'https://mongoosejs.com/'
            },
            {
               techName: 'Helmet',
               techLink: 'https://helmetjs.github.io/'
            },
            {
               techName: 'express-rate-limit',
               techLink: 'https://www.npmjs.com/package/express-rate-limit'
            },
         ],
         runsOn: [
            'Node.js',
            'Railway.app'
         ]
      }
   },
   {
      id: 'mail-api-rust',
      name: 'Mailer API',
      version: '2.0.0',
      devStatus: 'READY',
      healthEndpoint: {
         url: 'https://mailer.victorgomez.dev/health',
         method: 'GET',
         checkSpecificJson: '{"status":{"server":{"status_msg":"OK","is_ok":true},"db":{"status_msg":"OK","is_ok":true}}}',
         checkInterval: 90000
      },
      details: {
         description: 'The second version of my mailer API. It is being used to send messages through here (contact page). Has newer features, improved security and I switched from using TypeScript/NodeJs to Rust.',
         techStack: [
            {
               techName: 'Rust',
               techLink: 'https://www.rust-lang.org/',
            },
            {
               techName: 'MongoDB',
               techLink: 'https://www.mongodb.com/'
            },
            { 
               techName: 'MongoDB Rust Driver',
               techLink: 'https://github.com/mongodb/mongo-rust-driver'
            },
            {
               techName: 'Rocket.rs',
               techLink: 'https://rocket.rs/'
            },
            {
               techName: 'rocket_cors',
               techLink: 'https://github.com/lawliet89/rocket_cors'
            },
            {
               techName: 'amonia',
               techLink: 'https://github.com/rust-ammonia/ammonia'
            },
            {
               techName: 'unicode-segmentation',
               techLink: 'https://github.com/unicode-rs/unicode-segmentation'
            },
            {
               techName: 'serde',
               techLink: 'https://serde.rs/'
            },
            {
               techName: 'tokio',
               techLink: 'https://tokio.rs/'
            },
            {
               techName: 'reqwest',
               techLink: 'https://github.com/seanmonstar/reqwest'
            },
            {
               techName: 'chrono',
               techLink: 'https://github.com/chronotope/chrono'
            }
         ],
         runsOn: [
            'Tokio (Rust Async Runtime)',
            'Railway.app',
            'Rust'
         ]
      }
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
      devStatus: 'DEV',
      details: {
         description: 'Still not fully operational and will go through many breaking changes. I am using it to learn about microservices with Kubernetes. It should later become my Cluster for project hosting, CI/CD, etc',
         techStack: [
            {
               techName: 'Kubernetes (k8s)',
               techLink: 'https://kubernetes.io/'
            },
            {
               techName: 'Docker',
               techLink: 'https://www.docker.com/'
            },
            {
               techName: 'Talos Linux',
               techLink: 'https://www.talos.dev/'
            },
            {
               techName: 'Linkerd',
               techLink: 'https://linkerd.io/'
            },
            {
               techName: 'external-dns',
               techLink: 'https://github.com/kubernetes-sigs/external-dns'
            }
         ],
         runsOn: [
            'Talos Linux',
            'Old Macbook Air (start with what you got)'
         ]
      }
   }  
]

export type GetServicePromise = Omit<Service, 'healthEndpoint'> & {
   checkInterval: HealthEndpoint['checkInterval'] | null
   doHealthCheck: boolean
}
export async function getServices(locale: typeof localeEnName | typeof localeFrName | typeof localePtBrName): Promise<GetServicePromise[]> {

   return services.map(service => ({
      ...service,
      checkInterval: service.healthEndpoint?.checkInterval ?? null,
      doHealthCheck: service.healthEndpoint ? true : false,
      healthEndpoint: null
   }))
}

export async function getServicesId(excludeNoDetail: boolean = false): Promise<string[]> {
   
   return services.filter(service => excludeNoDetail ? typeof service.details !== 'undefined' 
      : true).map(service => service.id)
}

export async function getService(
   locale: typeof localeEnName | typeof localeFrName | typeof localePtBrName, 
   id: string): Promise<Service | undefined> {

   return services.find(service => service.id === id)
}

export async function getServiceCheckInfo(id: Service['id']): Promise<HealthEndpoint | undefined> {
   const service = services.find(service => service.id === id)
   if (service) {
      return service.healthEndpoint
   }
   return undefined
}