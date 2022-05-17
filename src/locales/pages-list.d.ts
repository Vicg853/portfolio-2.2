import type { IndexPageLocaleContent } from '@pages/index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'
import type { ContactPageLocaleContent } from '@pages/contact'
import type { ResumePageLocaleContent } from '@pages/resume'

export interface Pages {
   index: IndexPageLocaleContent
   projects: ProjectsPageStaticLocalesSource
   contact: ContactPageLocaleContent
   resume: ResumePageLocaleContent
}