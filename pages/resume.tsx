import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'
import type { CVPageCMSContent, SkillCategoryType } from '@api-utils/content-retrivers/cv-page-info'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'
import { getCVPageContent } from '@api-utils/content-retrivers/cv-page-info'

//* Importing main components and deps
import { useEffect, useState, memo } from 'react'
import { Header } from '@components/header'
import { InTextLink } from '@components/mini-components/InTextLink'

//* Importing styled components
import {
   Container,
   Section,
   Paragraph,
   SecTitle,
   Input
} from '@p-styles/global'
import { 
   introParagraphStyles,
   IndexCard,
   skillsContainerStyles,
   filterSkillsSectionStyle,
   SkillCard
} from '@p-styles/resume'


export interface ResumePageLocaleContent {
	
}

interface PageProps {
   locale: string
   pageSource: PageFullType<ResumePageLocaleContent>
   skills: CVPageCMSContent['skills']
}

export const getStaticProps: GetStaticProps<PageProps> = 
   async ({ locale, locales }) => {
   const pageSource = getPageSource(locale, 'resume')

   const getCVPageContentResult = await getCVPageContent()

   return {
      props: {
         locale: locale!,
         pageSource,
         skills: getCVPageContentResult.skills
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

const RawSkillsContainer = ({ skills }: {skills: CVPageCMSContent['skills']}) => {
   const [techSearch, setTechSearch] = useState<string>('')
   const [selectedCategory, setSelectedCategory] = useState<SkillCategoryType | 'all'>('all')

   return (
      <Section data-widthMax
      data-vert className={filterSkillsSectionStyle}>
         <SecTitle id='skills-section'>
            #skills
         </SecTitle>
         <Section id="filters-sections-container">
            <Section className='filters-sections' data-vert data-gap>
               <span>Category:</span>
               <select className={Input.__linaria.className} onChangeCapture={e => 
                     setSelectedCategory(e.currentTarget
                        .value as SkillCategoryType)
                  }>
                  <option value='all'>All</option>
                  {skills.categories.map(category => (
                     <option key={category} value={category}>{category}</option>
                  ))}
               </select>
            </Section>
            <Section className='filters-sections' data-vert data-gap>
               <span>Skill:</span>
               <Input onChange={e => 
                  setTechSearch(e.currentTarget.value)
               } placeholder={`e.g.: NextJs`} />
            </Section>
         </Section>
         <Section data-wrap className={skillsContainerStyles}>
            {skills.list.map(skill => {
               if ((selectedCategory === 'all' || skill.category.includes(selectedCategory))
                  && (techSearch.length === 0 || !skill.skill.search(techSearch))) return (
                  <SkillCard
                     key={skill.skill}>
                     <sub>
                        <h5>{skill.skill}</h5>
                        <span><span className='detail'>Experience years:</span> {skill.experienceYears}</span>
                        <span><span className='detail'>Projects:</span> {skill.projects}</span>
                     </sub>
                     {(skill.relatedProjectList || skill.skillSource) && (
                        <sub className='mini-cards-sub'>
                           {skill.relatedProjectList && (
                              <button onClick={() => {}}
                              className='skill-projects'>
                                 Projects
                              </button>
                           )}
                           {skill.skillSource && (
                              <a href={skill.skillSource} 
                              target='_blank' 
                              rel='noopener noreferrer'
                              className='skill-source'>
                                 Skill source
                              </a>
                           )}
                        </sub>
                     )}
                  </SkillCard>
               )
            })}
         </Section>
      </Section>
   )
}

const SkillsContainer = memo(RawSkillsContainer, () => true)

const Resume: NextPage<PageProps> = ({ locale, skills }) => {
   useEffect(() => {
      if(document.location.hash !== '') 
         return scrollTo(`${document.location.hash.replace('#', '')}-section`)
   })

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
         <Container>
            <Section data-widthMax data-wrap data-gap>
               <Section data-vert 
               className={introParagraphStyles}>
                  <SecTitle>Curriculum<br/>Vitae</SecTitle>
                  <Paragraph data-limitWidthMed>
                     On this page, you will find a list of my experiences, knowledge, skills, and a direct link to my CV. 
                     <br/><br/>
                     As knowledge is sometimes harder to picture than just describing projects, I’m taking the following approach (which I think is the best way to stream it): each technology skill card will have a year/month based number of continuous usage, and the number of projects on which I used it.
                     <br/><br/>
                     Although if you need clarification or any tips for a different approach, feel free to contact me 
                     <InTextLink href='/contact' locale={locale}>here</InTextLink> or via email:
                     <InTextLink href='mailto:vicg853@gmail.com'>vicg853@gmail.com</InTextLink>.
                  </Paragraph>
               </Section>
               <IndexCard>
                  <SecTitle>Index</SecTitle>
                  <span> 
                     - 
                     <InTextLink 
                     href='/resume#skills'>
                        Skills
                     </InTextLink>
                  </span>
                  <span> 
                     - 
                     <InTextLink 
                     href='/resume#experience'>
                        Experience
                     </InTextLink> 
                  </span>
                  <span>
                      - 
                      <InTextLink 
                      href='/resume#education'>
                         Education
                     </InTextLink> 
                  </span>
                  <span>
                      - 
                      <InTextLink href='/curriculum-vitae.pdf'>
                         Full CV PDF
                     </InTextLink> 
                  </span>
               </IndexCard>
            </Section>
            <SkillsContainer skills={skills} />
         </Container>
      </>
   )
}

export default Resume