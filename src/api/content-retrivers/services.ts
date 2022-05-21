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
      devStatus: 'DEV',
      healthEndpoint: {
         url: '/api/health',
         method: 'GET',
         checkInterval: 5000,
         checkSpecificJson: '{"status":"pass","message":"Everything is fine!"}'
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
         checkSpecificJson: '{"status":"pass"}'
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
      devStatus: 'READY',
      healthEndpoint: {
         url: 'https://mailer.victorgomez.dev/api/health',
         method: 'POST',
         justCheckStatusCode: 422,
      },
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