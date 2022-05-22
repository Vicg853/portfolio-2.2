import type { PageFullType } from '../../index'
import type { ContactPageLocaleContent } from '@pages/contact'

export const ContactPage: PageFullType<ContactPageLocaleContent> = {
   content: {
      title: 'Reach me out',
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
         toMany: 'Calm DOWN!!! To many messages were sent! 😖😲',
      }
   },
}