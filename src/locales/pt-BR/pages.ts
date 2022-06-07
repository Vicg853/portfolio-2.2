import { IndexPage } from './page'
import { ProjectsPage } from './page/projects'
import { ContactPage } from './page/contact'
import { ResumePage } from './page/resume'
import { ThisWebS } from './page/this-webs'
import { ErrorPages } from './page/error'

export const pages = {
   index: IndexPage,
   projects: ProjectsPage,
   contact: ContactPage,
   resume: ResumePage,
   thisWebS: ThisWebS,
   error: ErrorPages
}