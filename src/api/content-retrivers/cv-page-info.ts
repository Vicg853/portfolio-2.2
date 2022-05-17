export type SkillCategoryType = 'Web-frontend' | 'Backend' | 'Mobile' | 'Database' | 'Devops&Infrastructure' 
| 'Desktop' | 'Cross-platform' | 'Runtime' | 'Language' | 'Tool'

export interface ExpAndEducContent {
   institution: string
   from: string
   to?: string
   descriptionLocales: Record<string, string>
   relatedProjects?: undefined
   moreAbout?: string
}

export interface CVPageCMSContent {
   skills: {
      categories: SkillCategoryType[]
      list: {
         skill: string,
         experienceYears: number | string,
         projects: number | string,
         priority?: true,
         category: SkillCategoryType[],
         skillSource?: string
         professionalExperience?: number | string,
         relatedProjectList?: undefined
      }[]
   }
   experience: ExpAndEducContent[]
   education: ExpAndEducContent[]
}

export const getCVPageContent: () => Promise<CVPageCMSContent> = async () => {
   const experience: CVPageCMSContent['experience'] = [
      {
         institution: 'IBM',
         from: '2018-10-27',
         to: '2018-11-27',
         descriptionLocales: {
            'en': 'Observational Internship at IBM Brasil',
            'pt': 'Estágio de observação na IBM Brasil'
         }
      },
      {
         institution: 'Alpes Capital',
         from: '2020-09-01',
         to: undefined,
         descriptionLocales: {
            'en': 'Voluntary work at a Brazilian endowment fund as a full-stack developer',
            'pt': 'Trabalho voluntário no Fundo de Financiamento de Investimento no Brasil como desenvolvedor full-stack'
         },
         moreAbout: 'https://www.alpescap.com.br/gestao'
      }
   ]

   const education: CVPageCMSContent['education'] = [
      {
         institution: 'Lycée Pasteur, São Paulo - Baccalauréat Général Scientifique',
         from: new Date('2006-02-01').toISOString(),
         to: new Date('2020-10-01').toISOString(),
         descriptionLocales: {
            'en': 'French Baccalaureate - Baccalauréat Général Scientifique, Option Internationale',
            'pt': 'Ensino Médio Francês - Baccalauréat Général Scientifique, Option Internationale'
         }
      }
   ]

   const skills: CVPageCMSContent['skills']['list'] = [
      { 
         skill: 'NextJs',
         priority: true,
         projects: 2,
         experienceYears: 1.5,
         skillSource: 'https://nextjs.org/',
         category: ['Web-frontend', 'Cross-platform'] as SkillCategoryType[]
      },
      {
         skill: 'Remix.run',
         priority: true,
         projects: 2,
         experienceYears: 0.5,
         skillSource: 'https://remix.run/',
         category: ['Web-frontend', 'Backend'] as SkillCategoryType[]
      },
      {
         skill: 'Gatsby',
         priority: true,
         projects: 2,
         experienceYears: 0.8,
         skillSource: 'https://www.gatsbyjs.org/',
         category: ['Web-frontend', 'Backend'] as SkillCategoryType[]
      },
      {
         skill: 'React',
         priority: true,
         projects: 6,
         experienceYears: 2.3,
         skillSource: 'https://reactjs.org/',
         category: ['Web-frontend'] as SkillCategoryType[]
      },
      {
         skill: 'React Native Expo',
         projects: 0,
         experienceYears: 0.3,
         skillSource: 'https://expo.io/',
         category: ['Mobile'] as SkillCategoryType[]
      },
      {
         skill: 'Redux',
         priority: true,
         projects: 3,
         experienceYears: 1,
         skillSource: 'https://redux.js.org/',
         category: ['Web-frontend'] as SkillCategoryType[]
      },
      {
         skill: 'Hookstate',
         priority: true,
         projects: 3,
         experienceYears: 0.6,
         skillSource: 'https://hookstate.js.org/',
         category: ['Web-frontend'] as SkillCategoryType[]
      },
      {
         skill: 'TypeScript',
         priority: true,
         projects: 6,
         experienceYears: 2.3,
         skillSource: 'https://www.typescriptLanguage.org/',
         category: ['Language'] as SkillCategoryType[]
      },
      {
         skill: 'GraphQL',
         priority: true,
         projects: 1,
         experienceYears: 0.3,
         skillSource: 'https://graphql.org/',
         category: ['Language', 'Cross-platform']  as SkillCategoryType[]
      },
      {
         skill: 'Apollo',
         projects: 1,
         experienceYears: 0.3,
         skillSource: 'https://www.apollographql.com/',
         category: ['Backend']  as SkillCategoryType[]
      },
      {
         skill: 'Node.js',
         priority: true,
         projects: 10,
         experienceYears: 3.5,
         skillSource: 'https://nodejs.org',
         category: ['Runtime']  as SkillCategoryType[]
      },
      {
         skill: 'Deno',
         priority: true,
         projects: 1,
         experienceYears: 0.6,
         skillSource: 'https://deno.land/',
         category: ['Runtime']  as SkillCategoryType[]
      },
      {
         skill: 'Express',
         priority: true,
         projects: 5,
         experienceYears: 2.3,
         skillSource: 'https://expressjs.com/',
         category: ['Backend'] as SkillCategoryType[]
      },
      {
         skill: 'JavaScript/ECMAScript',
         priority: true,
         projects: 'unknown',
         experienceYears: '~4.5',
         skillSource: 'https://www.javascript.com/',
         category: ['Language'] as SkillCategoryType[]
      },
      {
         skill: 'Rust',
         priority: true,
         projects: 1,
         experienceYears: 0.1,
         skillSource: 'https://www.rust-Language.org/',
         category: ['Language'] as SkillCategoryType[]
      },
      {
         skill: 'Python',
         projects: 0,
         experienceYears: 0.5,
         skillSource: 'https://www.python.org/',
         category: ['Language'] as SkillCategoryType[]
      },
      {
         skill: 'C# .Net',
         projects: 2,
         experienceYears: 1,
         skillSource: 'https://dotnet.microsoft.com/',
         category: ['Language'] as SkillCategoryType[]
      },
      {
         skill: 'JQuery',
         projects: 3,
         experienceYears: 1.2,
         skillSource: 'https://jquery.com/',
         category: ['Web-frontend'] as SkillCategoryType[]
      },
      {
         skill: 'HTML',
         projects: 'uknown',
         experienceYears: '~4.5',
         category: ['Web-frontend'] as SkillCategoryType[]
      },
      {
         skill: 'CSS',
         projects: 'uknown',
         experienceYears: '~4.5',
         category: ['Web-frontend'] as SkillCategoryType[]
      },
      {
         skill: 'PHP',
         projects: 2,
         experienceYears: 1.1,
         skillSource: 'https://www.php.net/',
         category: ['Backend'] as SkillCategoryType[]
      },
      {
         skill: 'MySQL',
         priority: true,
         projects: 2,
         experienceYears: 0.7,
         skillSource: 'https://www.mysql.com/',
         category: ['Database'] as SkillCategoryType[]
      },
      {
         skill: 'MongoDB',
         priority: true,
         projects: 3,
         experienceYears: 1.5,
         skillSource: 'https://www.mongodb.com/',
         category: ['Database'] as SkillCategoryType[]
      },
      {
         skill: 'PostgreSQL',
         projects: 2,
         experienceYears: 0.6,
         skillSource: 'https://www.postgresql.org/',
         category: ['Database'] as SkillCategoryType[]
      },
      {
         skill: 'Git',
         priority: true,
         projects: 'uknown',
         experienceYears: '~4.5',
         skillSource: 'https://git-scm.com/',
         category: ['Tool'] as SkillCategoryType[]
      },
      {
         skill: 'Visual Studio Code',
         priority: true,
         projects: 'uknown',
         experienceYears: '~4.5',
         skillSource: 'https://code.visualstudio.com/',
         category: ['Tool'] as SkillCategoryType[]
      }
   ]
   return {
      skills: {
         categories: skills.map(skill => skill.category[0]).reduce((acc, curr) => {
            if (!acc.includes(curr)) {
               acc.push(curr)
            }
            return acc
         }, [] as SkillCategoryType[]),
         list: skills.sort((a, b) => {
            const aNumber = parseInt(a.experienceYears.toString().replace(/(~|<|>|\+|\-|\.)/g, ''))
            const bNumber = parseInt(b.experienceYears.toString().replace(/(~|<|>|\+|\-|\.)/g, ''))
            //Show first if priority is true
            if (!!a.priority && !b.priority) {
               return -1
            }
            if (!!b.priority && !a.priority) {
               return 1
            }
            return 0
         })
      },
      experience,
      education,
   }
}