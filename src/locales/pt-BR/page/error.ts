import type { PageFullType } from '../../index'
import type { ErrorPages as ErrorPagesType } from '@c-types/locales/error-pages'

export const ErrorPages: PageFullType<ErrorPagesType> = {
   content: {
      404: {
         mainP: 'Pagina não encontrada'
      },
      500: {
         mainP: 'Erro interno do servidor'
      },
      unknown: {
         mainP: 'Erro desconhecido'
      }
   }
}  