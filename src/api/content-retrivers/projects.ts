import type { localesArray, localeEnName, localeFrName, localePtBrName } from '../../locales/configs'

type ProjectTopis = 'IoT' | 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'W3'
type ProjectsScopes = 'Personal' | 'Business' | 'OpenSource' | 'Non-profit'

type localeType = typeof localeFrName | typeof localeEnName | typeof localePtBrName

interface ProjectFrontmatter {
   title: string
   smallDescription: string
}

interface ProjectContent {
   mainText: string
}

interface ProjectsSource {
   frontmatter: ProjectFrontmatter & {
      title: string
      smallDescription: string
      image: string
      locales?: Record<localeType, ProjectFrontmatter>
   }
   metadata: {
      projectDate: Date
      ongoing: boolean
      topics?: ProjectTopis[]
      scopes?: ProjectsScopes[]
      techStack?: {
         techName: string
         techLink?: string
      }[]
      relatedTo?: {
         projectName: string
         projectLink: string
      }[]
   }
   content: ProjectContent & {
      locales?: Record<localeType, ProjectContent>
      mainText: string
      feats?: {
         personName: string
         profileLink?: string
      }[]
      usefulLinks?: {
         title: string
         link: string
      }[]
      moreFotos?: {
         alt: string
         source: string
      }[]
   }
   sources?: {
      github?: string
      pageUrl?: string
   }
} 

const temporarySource: ProjectsSource[] = [
   {
      frontmatter: {
         title: 'AlpesCap Webpage', 
         smallDescription: 'A webpage for the AlpesCap ORG to which I actively contribute',
         image: 'https://alpescap-canary.victorgomez.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FdefaultHeaderBg.66d044c7.jpg&w=1920&q=95',
         locales: {
            'en': {
               title: 'AlpesCap Webpage',
               smallDescription: 'A webpage for the AlpesCap ORG to which I actively contribute',
            },
            'fr': {
               title: 'Page Web AlpesCap',
               smallDescription: 'Une page web pour l\'ORG AlpesCap à laquelle je contribue activement',
            },
            'pt': {
               title: 'Site da AlpesCap',
               smallDescription: 'Site da AlpesCap na qual contribuo ativamente',
            }
         }
      },
      metadata: {
         projectDate: new Date('2020-08-01'),
         ongoing: true,
         topics: ['Frontend', 'DevOps', 'Backend'],
         scopes: ['Non-profit'],
         techStack: [
            {
               techName: 'React',
               techLink: 'https://reactjs.org/',
            },
            {
               techName: 'NextJS',
               techLink: 'https://nextjs.org/',
            },
            {
               techName: 'NodeJS',
               techLink: 'https://nodejs.org/en/',
            },
            {
               techName: 'Supabse',
               techLink: 'https://www.supabase.com/',
            },
            {
               techName: 'Styled-Components',
               techLink: 'https://styled-components.com/',
            },
            {
               techName: 'Preact',
               techLink: 'https://preactjs.com/',
            }
         ]
      },
      content: {
         mainText: 'Lorem impsum only as this website is under construction...',
         locales: {
            'en': {
               mainText: 'Lorem impsum only as this website is under construction...',
            },
            'fr': {
               mainText: 'Lorem impsum only as this website is under construction...',
            },
            'pt': {
               mainText: 'Lorem impsum only as this website is under construction...',
            },
         },
         feats: [
            {
               personName: 'Tem at AlpesCap',
               profileLink: 'https://alpescap-canary.victorgomez.dev/team'
            }
         ],
      },
      sources: {
         pageUrl: 'https://alpescap-canary.victorgomez.dev/',
         github: 'https://github.com/Alpes-Capital/landing-page-v2'
      }
   }
]

export function getProjectsList(locale: localeType): Pick<ProjectsSource, 'frontmatter' | 'metadata'>[] {
   const projectsList = temporarySource.map(project => {
      const localeFrontmatter = project.frontmatter.locales?.[locale] ?? project.frontmatter

      return {
         frontmatter: {
            ...project.frontmatter,
            ...localeFrontmatter,
            locales: undefined
         },
         metadata: project.metadata
      }
   })

   return projectsList
}