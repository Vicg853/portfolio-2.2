import type { ResumePageLocaleContent } from '@pages/resume'
import type { CVPageCMSContent, SkillCategoryType } from '@api-utils/content-retrivers/cv-page-info'

//* Importing main components and deps
import { useState, memo } from 'react'

import {
   Section,
   Input
} from '@p-styles/global'
import { 
   SkillCard,
   skillsContainerStyles
} from './skil-section-styles'

const RawSkillsContainer = ({ 
   skills,
   captionsLocaleSources
}: { 
   skills: CVPageCMSContent['skills'], 
   captionsLocaleSources: ResumePageLocaleContent['cvSections']['skills']
}) => {
const [techSearch, setTechSearch] = useState<string>('')
const [selectedCategory, setSelectedCategory] = useState<SkillCategoryType | 'all'>('all')

return (
   <>
      <Section id="filters-sections-container">
         <Section className='filters-sections' data-vert data-gap>
            <span>{`${captionsLocaleSources.categoryFilter}:`}</span>
            <select className={Input.__linaria.className} onChangeCapture={e => 
                  setSelectedCategory(e.currentTarget
                     .value as SkillCategoryType)
               }>
               <option value='all'>{`${captionsLocaleSources.categoryAllOption}`}</option>
               {skills.categories.map(category => (
                  <option key={category} value={category}>{category}</option>
               ))}
            </select>
         </Section>
         <Section className='filters-sections' data-vert data-gap>
            <span>{`${captionsLocaleSources.searchFilter}:`}</span>
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
                     <span>
                        <span className='detail'>{`${captionsLocaleSources.techExpYears}:`}</span> 
                        {skill.experienceYears}
                     </span>
                     <span>
                        <span className='detail'>{`${captionsLocaleSources.projectsNumber}:`}</span> 
                        {skill.projects}
                     </span>
                  </sub>
                  {(skill.relatedProjectList || skill.skillSource) && (
                     <sub className='mini-cards-sub'>
                        {skill.relatedProjectList && (
                           <button onClick={() => {}}
                           className='skill-projects'>
                              {`${captionsLocaleSources.relatedProjects}:`}
                           </button>
                        )}
                        {skill.skillSource && (
                           <a href={skill.skillSource} 
                           target='_blank' 
                           rel='noopener noreferrer'
                           className='skill-source'>
                              {`${captionsLocaleSources.skillSource}:`}
                           </a>
                        )}
                     </sub>
                  )}
               </SkillCard>
            )
         })}
      </Section>
   </>
)
}

export const SkillsContainer = memo(RawSkillsContainer, () => true)