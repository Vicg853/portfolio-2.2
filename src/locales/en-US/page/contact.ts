import type { PageFullType } from '../../index'
import type { ContactPageLocaleContent } from '@pages/contact'

export const ContactPage: PageFullType<ContactPageLocaleContent> = {
   content: {
      title: 'Send me a message',
      contactForm: {
         name: 'Name',
         email: 'E-mail',
         message: 'Message',
         subject: 'Subject',
         send: 'Send',
      },
      otherContactCard: {
         emailTitle: 'Via e-mail'
      },
      statusMessageCard: {
         inputError: 'Please fill all fields!',
         success: 'Your message was sent successfully!',
         serverError: 'The following error occurred:',
         toMany: 'Calm DOWN!!! You are sending too many messages! 😖😲',
      }
   },
}