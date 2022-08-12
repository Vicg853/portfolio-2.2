import type { ChangeEvent } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'

//* Importing needed components and deps
import { useState } from 'react'
import { getPageSource } from '@api-utils/locales-sources'
import { InTextLink } from '@components/mini-components/InTextLink'

//* Importing needed style elements
import { 
   Container,
   Section,
   BlockSection,
   Input,
   InputLabel,
   TextArea,
   SendButton,
   SecTitle
} from '@p-styles/global'
import { 
   PageTitle,
   inputSectionStyle,
   otherContactsStyle,
   contactSectionStyle,
   gmtOffsetStyle,
   ReqResultMessageCard
} from '@p-styles/contact'
export interface ContactPageLocaleContent {
	title: string
   contactForm: {
      name: string
      email: string
      subject: string
      message: string
      send: string
   }
   otherContactCard: {
      emailTitle: string
   }
   statusMessageCard: {
      success: string
      serverError: string
      inputError: string
      toMany: string
   }
}

type ContactPageProps = {
   pageSource: PageFullType<ContactPageLocaleContent>
   locale: string
   emailAddress: string
   mailerApiEndpoint: string
   gmtOffset: {
      gmt: string
      local: string
   }
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async ({ 
   locale, locales 
}) => {
   const pageSource = getPageSource(locale, 'contact')
   const gmtOffset: ContactPageProps['gmtOffset'] = {
      gmt: '-3',
      local: 'São Paulo'
   }
   const emailAddress = 'vicg853@gmail.com'

   if(!process.env.MAILER_API_URL) 
      throw new Error('MAILER_API_URL is not defined')
   const mailerApiEndpoint = process.env.MAILER_API_URL

   return {
      props: {
         pageSource,
         gmtOffset,
         emailAddress,
         mailerApiEndpoint,
         locale: locale ?? locales![0]
      }
   }
}

let setTimeoutVar: any;

const Contact: NextPage<ContactPageProps>  = ({
   gmtOffset,
   pageSource,
   emailAddress,
   mailerApiEndpoint
}) => {
   const {
      title: pageTitleSource,
      contactForm: contactFormSource,
      otherContactCard: otherContactCardSource,
      statusMessageCard: statusMessageCardSource
   } = pageSource.content

   interface inputType {
      err: boolean
      value: string
      matchedOneTime?: boolean
   }

   interface formStateType {
      name: inputType
      email: inputType 
      subject: inputType
      message: inputType
   }

   const [formState, setFormState] = useState<formStateType>({
      name: { err: false, value: '' },
      email: { err: false, value: '' },
      subject: { err: false, value: '' },
      message: { err: false, value: '' }
   })
   const [sendState, setSendState] = useState<{ 
      status: 'success' | 'err' | 'null' | 'loading', 
      message?: string
   }>({
      status: 'null',
      message: ''
   })

   //* Regex exp to validate email
   const emailRgx = /^[A-Za-z0-9_!#$%&'*+\-/=?^_`{|}~]{1,64}@.+(\..)*$/i
   
   function checkFields(): typeof formState {
      let updateState: formStateType;

      Object.entries(formState).forEach(([key, {value, err}]) => {
         if(!value || value === '' || (key === 'email' && !value.match(emailRgx))) 
            updateState = {...updateState, [key]: {err: true, value, 
               matchedOneTime: key === 'email' ? true : undefined}}
         else updateState = {...updateState, [key]: {err: false, value}}
      })

      return updateState! ?? formState
   }

   const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      //* Updating state that values are being updated
      setSendState({status: 'null', message: ''})
      
      const {name, value} = e.target

      //* Checking input validity
      if(value === '' || value === undefined)
         return setFormState({...formState, [name]: {err: true, value}})

      if(name === 'email' && !value.match(emailRgx) 
         && !!formState.email.matchedOneTime) 
         return setFormState({...formState, [name]: {err: true, value, matchedOneTime: true}})
      if(name === 'email' && value.match(emailRgx))
         return setFormState({...formState, [name]: {err: false, value, matchedOneTime: true}})
      
      return setFormState({...formState, [name]: {err: false, value}})
   }

   const handleSend = async () => {
      //* Preventing useless runs/submits
      if(sendState.status === 'loading') 
         return
      
      setSendState({
         status: 'loading',
      })
      
      //* Checking if all fields are correct
      const beforeSendCheck = checkFields()
      if(Object.entries(beforeSendCheck).some(([key, {err}]) => err)) {
         setSendState({
            status: 'err',
            message: statusMessageCardSource.inputError
         })
         return setFormState(beforeSendCheck)
      }

      //* Preparing data to send
      const { name, email, subject, message } = formState
         
      const jsonBody = JSON.stringify({
         name: name.value,
         from: email.value,
         subject: subject.value,
         message: message.value
      })

      await fetch(mailerApiEndpoint, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: jsonBody
      }).then(async (res) => {

         if(res.status === 422) return setSendState({
            status: 'err',
            message: statusMessageCardSource.inputError
         })
         else if(res.status === 429) return setSendState({
            status: 'err',
            message: statusMessageCardSource.toMany
         })
         else if(res.status !== 200) return setSendState({
            status: 'err',
            message: `${statusMessageCardSource.serverError}${await res.json()}`
         })

         return setSendState({
            status: 'success',
            message: statusMessageCardSource.success
         }) 
      }).catch(async err => {
         return setSendState({
            status: 'err',
            message: `${statusMessageCardSource.serverError}${err}`
         })
      })
      
      if(setTimeoutVar) clearTimeout(setTimeoutVar)
      setTimeoutVar = setTimeout(() => setSendState({
         status: 'null',
         message: ''
      }), 3000)
   }

   

   return (
      <>
      <Container>
         <PageTitle>{pageTitleSource}</PageTitle>
         <Section data-widthMax data-justStart data-wrap
         data-jusSpBet
         className={contactSectionStyle}>
            <Section data-vert className={inputSectionStyle}>
               <InputLabel className='label1'>{contactFormSource.name}</InputLabel>
               <Input type='text' autoComplete='name' name='name'
                  className='input1' placeholder={contactFormSource.name} 
                  data-err={formState.name.err}
                  onChange={e => handleInput(e)}/>

               <InputLabel className='label2'>{contactFormSource.email}</InputLabel>
               <Input type='email' autoComplete='email' name='email'
                  className='input2' placeholder={contactFormSource.email} 
                  data-err={formState.email.err}
                  onChange={e => handleInput(e)}/>

               <InputLabel className='label3'>{contactFormSource.subject}</InputLabel>
               <Input type='text' className='input3' placeholder={contactFormSource.subject} 
                  data-err={formState.subject.err} name='subject'
                  onChange={e => handleInput(e)}/>

               <InputLabel className='labelTextA'>{contactFormSource.message}</InputLabel>
               <TextArea placeholder={contactFormSource.message} 
                  data-err={formState.message.err} name='message'
                  onChange={e => handleInput(e)}/>
               <SendButton
               onClick={() => handleSend()} type='submit'
               data-status={sendState.status}>
                  {contactFormSource.send}
               </SendButton>
            </Section>
            <div data-justStart
            className={`${otherContactsStyle} ${BlockSection.__linaria.className}`}>
               <SecTitle>{otherContactCardSource.emailTitle}</SecTitle>
               <InTextLink href={`mailto:${emailAddress}`}>
                  {emailAddress}
               </InTextLink>
            </div>
            <div data-text-center
               className={`${gmtOffsetStyle} ${BlockSection.__linaria.className}`}>
               GMT {gmtOffset.gmt} | {gmtOffset.local}
            </div>
         </Section>
      </Container>
      <ReqResultMessageCard data-status={sendState.status}>
         <sub>
            {sendState.status === 'success' ? sendState.message : sendState.message}
         </sub>
      </ReqResultMessageCard>
      </>
   )
}

export default Contact