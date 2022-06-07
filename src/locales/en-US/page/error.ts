import type { PageFullType } from '../../index'
import type { ErrorPages as ErrorPagesType } from '@c-types/locales/error-pages'

export const ErrorPages: PageFullType<ErrorPagesType> = {
   content: {
      404: {
         mainP: 'Thats the error code my brain threw after playing around with the Regex bellow:',
      },
      500: {
         mainP: 'Oops... Something went wrong on the server. Thats our fault, don\'t worry.\n My dinosaurs '
      },
      unknown: {
         mainP: 'Unknown error'
      }
   }
}