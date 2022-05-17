import type { PageFullType } from '../../index'
import type { ResumePageLocaleContent } from '@pages/resume'

export const ResumePage: PageFullType<ResumePageLocaleContent> = {
   content: {
      mainParagraph: 'On this page, you will find a list of my experiences, knowledge, skills, and a direct link to my CV.\n\nAs knowledge is sometimes harder to picture than just describing projects, I’m taking the following approach (which I think is the best way to stream it): each technology skill card has its years/month of usage/research and the number of projects using it.\n\nAlthough if you need clarification or any tips for a different approach, feel free to contact me',
      contactMePageAlt: 'or via email at',
      contactMePageLink: 'here',
      index: {
         title: 'Summary',
         education: 'My Education',
         experience: 'My Experience',
         skills: 'My Skills',
         cvLink: 'Download/See my CV in PDF',
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
            title: 'Skills',
            categoryAllOption: 'All',
            categoryFilter: 'Filter by category',
            projectsNumber: 'Projects',
            skillSource: 'Source',
            relatedProjects: 'Related Projects',
            searchFilter: 'Search for:',
            techExpYears: 'Years of experience',
         },
      }
   }
}