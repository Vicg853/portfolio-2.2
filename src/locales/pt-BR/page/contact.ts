import type { PageFullType } from '../../index'
import type { ContactPageLocaleContent } from '@pages/contact'

export const ContactPage: PageFullType<ContactPageLocaleContent> = {
   content: {
      title: 'Entre em contato',
      contactForm: {
         name: 'Nome',
         email: 'Email',
         message: 'Mensagem',
         subject: 'Assunto',
         send: 'Enviar',
      },
      otherContactCard: {
         emailTitle: 'Por email'
      }
   },
}