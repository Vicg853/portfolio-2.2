import type { IndexPageLocaleContent } from '@pages/index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'
import type { ContactPageLocaleContent } from '@pages/contact'
import type { ResumePageLocaleContent } from '@pages/resume'
import type { ThisWebSPageLocaleContent } from '@pages/this-site'
import type { ErrorPages } from '@c-types/locales/error-pages'

export interface Pages {
   index: IndexPageLocaleContent
   projects: ProjectsPageStaticLocalesSource
   contact: ContactPageLocaleContent
   resume: ResumePageLocaleContent
   thisWebS: ThisWebSPageLocaleContent
   error: ErrorPages
}