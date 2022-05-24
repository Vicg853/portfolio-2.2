import type { PageFullType } from '../../index'
import type { ResumePageLocaleContent } from '@pages/resume'

export const ResumePage: PageFullType<ResumePageLocaleContent> = {
   mainProps: {
      header: {
         title: 'C.V.',
         description: 'Experience and access to my resume',
         backgroundAlt: "Resume page header's illustration",
      },
      seo: {
         title: 'C.V.',
         description: 'Know more about my experiences, knowledge and skills. You can also find an attachment url to my resume.',
         keywords: ['experience', 'knowledge', 'skills', 'resume', 'attachment', 'backend', 'frontend', 'developer', 'full-stack'],
      }
   },
   content: {
      mainParagraph: 'Find out here more about my experiences, knowledge, and competencies. You may also find an attachment to my C.V.!\n\nIn case you may need more information, feel free to reach me',
      contactMePageAlt: 'or at',
      contactMePageLink: 'here',
      index: {
         title: 'Index',
         skills: 'Competencies',
         education: 'Education',
         experience: 'Experience',
         cvLink: 'Download/See my resume as a PDF',
      },
      cvSections: {
         education: {
            title: 'Education',
            fromCaption: 'Start:',
            toCaption: 'End:',
            sinceCaption: 'Since:',
         },
         experience: {
            title: 'Experience',
            fromCaption: 'Start:',
            toCaption: 'End:',
            sinceCaption: 'Since:',
         },
         skills: {
            title: 'Competencies',
            categoryAllOption: 'All',
            categoryFilter: 'Filter by topic',
            projectsNumber: 'Projects count',
            skillSource: 'reference',
            relatedProjects: 'projects',
            searchFilter: 'Search for:',
            techExpYears: 'Exp. years:',
         },
      }
   }
}