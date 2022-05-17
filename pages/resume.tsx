import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'
import type { CVPageCMSContent, ExpAndEducContent } from '@api-utils/content-retrivers/cv-page-info'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'
import { getCVPageContent } from '@api-utils/content-retrivers/cv-page-info'

//* Importing main components and deps
import { useEffect } from 'react'
import { Header } from '@components/header'
import { InTextLink } from '@components/mini-components/InTextLink'
import { SkillsContainer } from '@components/pages/resume/skill-section'
import { ExpAndEcudCard } from '@components/pages/resume/exp-and-educ-cards'

//* Importing styled components
import {
   Container,
   Section,
   Paragraph,
   SecTitle,
} from '@p-styles/global'
import { 
   containerStyles,
   introParagraphStyles,
   IndexCard,
   skillsSectionStyle,
   educAndExpCardStyle
} from '@p-styles/resume'


export interface ExperienceAndEducationSources {
   title: string
   fromCaption: string
   toCaption: string
   sinceCaption: string
}

export interface ResumePageLocaleContent {
   mainParagraph: string
   contactMePageLink: string
   contactMePageAlt: string
   cvSections: {
      skills: {
         title: string
         categoryFilter: string
         categoryAllOption: string
         searchFilter: string
         techExpYears: string
         projectsNumber: string
         skillSource: string
         relatedProjects: string
      }
      experience: ExperienceAndEducationSources
      education: ExperienceAndEducationSources
   }
   index: {
      title: string
      skills: string
      experience: string
      education: string
      cvLink: string
   }
}

interface PageProps {
   locale: string
   pageSource: PageFullType<ResumePageLocaleContent>
   skills: CVPageCMSContent['skills']
   experience: (Omit<ExpAndEducContent, 'descriptionLocales' | 'to'> & {
      description: string
      to: ExpAndEducContent['to'] | null
   })[]
   education: (Omit<ExpAndEducContent, 'descriptionLocales' | 'to'> & {
      description: string
      to: ExpAndEducContent['to'] | null
   })[]
}

export const getStaticProps: GetStaticProps<PageProps> = 
   async ({ locale, locales }) => {
   const pageSource = getPageSource(locale, 'resume')

   const errDescGet = locale === 'pt' ? 'Erro ao obter descrição da página' : 
      locale === 'en' ? 'Error getting page description' : 'Error getting page description'

   const getCVPageContentResult = await getCVPageContent()

   const experience = getCVPageContentResult.experience
      .map(exp => ({
         ...exp,
         descriptionLocales: null,
         to: exp.to ?? null,
         description: exp.descriptionLocales[locale ?? locales![0]] ?? errDescGet,
      }))

   const education = getCVPageContentResult.education
      .map(edu => ({
         ...edu,
         descriptionLocales: null,
         to: edu.to ?? null,
         description: edu.descriptionLocales[locale ?? locales![0]] ?? errDescGet,
      }))

   return {
      props: {
         locale: locale!,
         pageSource,
         skills: getCVPageContentResult.skills,
         experience,
         education
      }
   }
}

const scrollTo = (id: string) => {
   if(!document)
      return
   const el = document.getElementById(id)
   if(el)
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}


const Resume: NextPage<PageProps> = ({ 
   locale, 
   skills, 
   pageSource,
   experience,
   education
}) => {
   useEffect(() => {
      if(document.location.hash !== '') 
         return scrollTo(`${document.location.hash.replace('#', '')}-section`)
   })

   const {
      mainParagraph,
      contactMePageLink,
      contactMePageAlt,
      cvSections,
      index
   } = pageSource.content

   return ( 
      <>
         <Header 
            title='Resume'
            description='Skills, experience, education and CV'
            background={{
               type: 'image',
               srcType: 'local',
               src: '/images/pages/resume/IMG_20220516_154424613-01.jpeg',
               alt: 'Resume page background image',
            }}
         />
         <Container className={containerStyles}>
            <Section data-widthMax data-wrap data-gap>
               <Section data-vert 
               className={introParagraphStyles}>
                  <SecTitle>Curriculum<br/>Vitae</SecTitle>
                  <Paragraph data-limitWidthMed>
                     {mainParagraph.split('\n').map((val, i) => (<>{val}<br key={i}/></>))}
                     <InTextLink href='/contact' locale={locale}>{contactMePageLink}</InTextLink> 
                     {contactMePageAlt}
                     <InTextLink href='mailto:vicg853@gmail.com'>vicg853@gmail.com</InTextLink>.
                  </Paragraph>
               </Section>
               <IndexCard>
                  <SecTitle>{index.title}</SecTitle>
                  <span> 
                     - 
                     <InTextLink 
                     href='/resume#skills'>
                        {index.skills}
                     </InTextLink>
                  </span>
                  <span> 
                     - 
                     <InTextLink 
                     href='/resume#experience'>
                        {index.experience}
                     </InTextLink> 
                  </span>
                  <span>
                      - 
                      <InTextLink 
                      href='/resume#education'>
                         {index.education}
                     </InTextLink> 
                  </span>
                  <span>
                      - 
                      <InTextLink href='/curriculum-vitae.pdf'>
                         {index.cvLink}
                     </InTextLink> 
                  </span>
               </IndexCard>
            </Section>
            <Section data-widthMax
            data-vert className={skillsSectionStyle}>
               <SecTitle id='skills-section'>
                  {`#${cvSections.skills.title}`}
               </SecTitle>
               <SkillsContainer 
                  skills={skills} 
                  captionsLocaleSources={cvSections.skills} 
                  />
            </Section>
            <Section data-widthMax data-vert 
            className={educAndExpCardStyle}>
               <SecTitle id='experience-section'>
                  {`#${cvSections.experience.title}`}
               </SecTitle>
               {experience.map((exp, i) => (
                  <ExpAndEcudCard
                     key={i}
                     from={exp.from}
                     to={exp.to}
                     captionSources={cvSections.experience}
                     description={exp.description}
                     type='experience'
                     institution={exp.institution}
                     relatedProjects={exp.relatedProjects}
                     moreAbout={exp.moreAbout}
                  />
               ))}
            </Section>
            <Section data-widthMax data-vert
            className={educAndExpCardStyle}>
               <SecTitle id='education-section'>
                  {`#${cvSections.education.title}`}
               </SecTitle>
               {education.map((educ, i) => (
                  <ExpAndEcudCard
                     key={i}
                     from={educ.from}
                     to={educ.to}
                     captionSources={cvSections.education}
                     description={educ.description}
                     type='experience'
                     institution={educ.institution}
                     relatedProjects={educ.relatedProjects}
                     moreAbout={educ.moreAbout}
                  />
               ))}
            </Section>
         </Container>
      </>
   )
}

export default Resume