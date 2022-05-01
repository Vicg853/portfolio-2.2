import type { PageFullType } from '../../index'
import type { ContactPageLocaleContent } from '@pages/contact'

export const ContactPage: PageFullType<ContactPageLocaleContent> = {
   content: {
      title: 'Envie-moi un message',
      contactForm: {
         name: 'Prénom et nom',
         email: 'Email',
         message: 'Message',
         subject: 'Sujet',
         send: 'Envoyer',
      },
      otherContactCard: {
         emailTitle: 'Par mail'
      },
      statusMessageCard: {
         inputError: 'Veuillez remplir tous les champs!',
         success: 'Votre message a été envoyé avec succès!',
         serverError: 'Une erreur s\'est produite:',
         toMany: 'Calmez-vous!!! Vous envoyez trop de messages! 😖😲',
      }
   },
}