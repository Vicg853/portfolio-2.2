import type { ExperienceAndEducationSources } from '@pages/resume'
import type { ExpAndEducContent } from '@api-utils/content-retrivers/cv-page-info'
//* Importing main components and deps
import { memo } from 'react'

import { 
   ExpAndEducCard
} from './exp-educ-sec-styles'

type Props = Omit<ExpAndEducContent, 'descriptionLocales' | 'to'> & {
   type: 'experience' | 'education'
   description: string
   to: ExpAndEducContent['to'] | null
   captionSources: ExperienceAndEducationSources
   key?: any
}

const ExpAndEcudCardsRaw: React.FC<Props> = ({
   description,
   from,
   to,
   institution,
   captionSources,
   key,
   moreAbout
}) => {
   return (
      <ExpAndEducCard key={key}>
         <sub>
            <h5>{institution}</h5>
            { (!!to && to.length > 0) ? (
               <>
                  <span className='exp-educ-card-from-date'>
                     {captionSources.fromCaption}{" "}{new Date(from).toLocaleDateString()}
                  </span>
                  {" "}
                  <span className='exp-educ-card-to-date'>
                     {captionSources.toCaption}{" "}{new Date(to).toLocaleDateString()} | (DD/MM/YY)
                  </span>
               </>
            ) : (
               <span className='exp-educ-card-since-date'>
                  {captionSources.sinceCaption}{" "}{new Date(from).toLocaleDateString()} | (DD/MM/YY)
               </span>
            )}
         </sub>
         <sub className='details-sub' data-not-only-desc={moreAbout ? 'true' : 'false'}>
            <span className='description-span'>
               {description}
            </span>
            {(!!moreAbout && moreAbout.length > 0) &&
               <div className='detail-links'>
                  <a href={moreAbout} target='_blank' rel='noopener noreferrer'>
                     Info
                  </a>
               </div>
            }
         </sub>
      </ExpAndEducCard>
   )
}

export const ExpAndEcudCard = memo(ExpAndEcudCardsRaw)