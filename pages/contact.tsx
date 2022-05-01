import type { NextPage } from 'next'
import type { PageFullType  } from '../src/locales'
import type { GetStaticProps } from 'next'

//* Importing needed components and deps
import { getPageSource } from '@api-utils/locales-sources'
import { InTextLink } from '@components/mini-components/InTextLink'

//* Importing needed style elements
import { 
   Container,
   Section,
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
   gmtOffsetStyle
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

   return {
      props: {
         pageSource,
         gmtOffset,
         emailAddress,
         locale: locale ?? locales![0]
      }
   }
}


const Contact: NextPage<ContactPageProps>  = ({
   locale,
   gmtOffset,
   pageSource,
   emailAddress
}) => {
   const {
      title: pageTitleSource,
      contactForm: contactFormSource,
      otherContactCard: otherContactCardSource,
   } = pageSource.content

   return (
      <Container>
         <PageTitle>{pageTitleSource}</PageTitle>
         <Section data-widthMax data-justStart data-wrap
         data-jusSpBet
         className={contactSectionStyle}>
            <Section data-vert className={inputSectionStyle}>
               <InputLabel className='label1'>{contactFormSource.name}</InputLabel>
               <Input className='input1' placeholder={contactFormSource.name} />
               <InputLabel className='label2'>{contactFormSource.email}</InputLabel>
               <Input className='input2' placeholder={contactFormSource.email} />
               <InputLabel className='label3'>{contactFormSource.subject}</InputLabel>
               <Input className='input3' placeholder={contactFormSource.subject} />
               <InputLabel className='labelTextA'>{contactFormSource.message}</InputLabel>
               <TextArea placeholder={contactFormSource.message} />
               <SendButton>{contactFormSource.send}</SendButton>
            </Section>
            <Section data-vert data-justStart className={otherContactsStyle}>
               <SecTitle>{otherContactCardSource.emailTitle}</SecTitle>
               <InTextLink href={`mailto:${emailAddress}`}>
                  {emailAddress}
               </InTextLink>
            </Section>
            <Section data-jusCent
               className={gmtOffsetStyle}>
               GMT {gmtOffset.gmt} | {gmtOffset.local}
            </Section>
         </Section>
      </Container>
   )
}

export default Contact