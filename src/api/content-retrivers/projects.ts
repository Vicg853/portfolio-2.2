import type { localesArray, localeEnName, localeFrName, localePtBrName } from '../../locales/configs'

type ProjectTopis = 'IoT' | 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'W3'
type ProjectsScopes = 'Personal' | 'Business' | 'OpenSource' | 'Non-profit'

type localeType = typeof localeFrName | typeof localeEnName | typeof localePtBrName

interface ProjectFrontmatter {
   title: string
   smallDescription: string
}

type ProjectSourcesType = 'GITHUB' | 'WEBSITE' | 'MOREINFO' | 'RELATED'

export interface ProjectsSource {
   frontmatter: {
      image: string
      locales?: Record<localeType, ProjectFrontmatter>
   }
   metadata: {
      projectDate: string
      topics: ProjectTopis[]
      scopes?: ProjectsScopes[]
      techStack: {
         techName: string
         techLink?: string
      }[]
   } & ({
      ongoing: true
   } | {
      ongoing: false
      projectEndDate: string
   })
   sources: Array<{
      sourceLink: string
   } & ({
      sourceType: 'CUSTOM'
      sourceIcon: string
      sourceText: string
   } | {
      sourceType: ProjectSourcesType
   })>
} 

const temporarySource: ProjectsSource[] = [
   {
      frontmatter: {
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
         projectDate: new Date('2020-08-01').toISOString(),
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
      sources: [
         {
            sourceType: 'GITHUB',
            sourceLink: 'https://github.com/Alpes-Capital/landing-page-v2'
         },
         {
            sourceType: 'WEBSITE',
            sourceLink: 'https://alpescap-canary.victorgomez.dev/'
         },
      ]
   }
]

export type ProjectsListType = (Pick<ProjectsSource, 'metadata' | 'sources'> & {
   frontmatter: Omit<ProjectsSource['frontmatter'], 'locales'> & {
      title: ProjectFrontmatter['title']
      description: ProjectFrontmatter['smallDescription']
   }
})[]

export function getProjectsList(locale: localeType, defaultLocale: localeType): ProjectsListType {
   const projectsList = temporarySource.map(project => {
      const localeFrontmatter = project.frontmatter.locales?.[locale] ?? project.frontmatter.locales?.[defaultLocale]!

      return {
         frontmatter: {
            ...project.frontmatter,
            title: localeFrontmatter.title,
            description: localeFrontmatter.smallDescription
         },
         metadata: project.metadata,
         sources: project.sources
      }
   })

   return projectsList
}