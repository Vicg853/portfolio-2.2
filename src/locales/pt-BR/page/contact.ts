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
      },
      statusMessageCard: {
         inputError: 'Por favor, preencha todos os campos!',
         success: 'Sua mensagem foi enviada com sucesso!',
         serverError: 'Ocorreu o seguinte erro:',
         toMany: 'CALMA LÁ!!! Você está enviando muitas mensagens! 😖😲',
      }
   },
}