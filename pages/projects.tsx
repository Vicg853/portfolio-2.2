import type { NextPage, GetStaticProps } from 'next'
import type { PageFullType } from '../src/locales'

//* Importing needed components and deps
import { Header } from '@components/header'

//* Importing api components and deps
import { getPageSource } from '@api-utils/locales-sources'

//* Importing global and specific styled components
import { 
   Container,
   SectionHor,
   Paragraph
} from '@p-styles/global'
import {
   calloutAlignment,
   introductionSizing
} from '@p-styles/projects'

//* Importing used components
import { Callout } from '@components/mini-components/Callout'
import { InTextLink } from '@components/mini-components/InTextLink'

export interface ProjectsPageStaticLocalesSource {
   mainParagraph: {
      1: string
      2: string
      3: string
      4: string
   }
}

type ProjectsPageSource = PageFullType<ProjectsPageStaticLocalesSource>

export const getStaticProps: GetStaticProps<{
	locale: string
	pageSource: ProjectsPageSource
}> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'projects')
	

	return {
		props: {
			pageSource: {
				...pageSource
			},
			locale: locale ?? locales![0],
		},
	}
}

const ProjectsComponent: NextPage<{pageSource: ProjectsPageSource}> = ({ pageSource }) => {

   return (
      <>
         <Header 
            title={pageSource.mainProps.header!.title}
            description={pageSource.mainProps.header!.description}
            background={{
               type: 'image',
               srcType: 'local',
               src: '/images/pages/projects/background.jpg',
               alt: pageSource.mainProps.header!.backgroundAlt,
            }}
         />
         <Container>
            <SectionHor>
               <Paragraph className={introductionSizing}>
                  {pageSource.content.mainParagraph['1']}
                  <br/>
                  {pageSource.content.mainParagraph['2']}
                  <InTextLink href='/resume' locale={'en'}>
                     {pageSource.content.mainParagraph['3']}
                  </InTextLink>{')'}.
                  <br/><br/>
                  {pageSource.content.mainParagraph['4']}
               </Paragraph>
            </SectionHor>
            <Callout className={calloutAlignment} 
            special='info'
            icon={{ type: 'emoji', source: 'ℹ' }}>
               <>
                  You can also check out this webpage{"'"}s info at its dedicated
                  <InTextLink href='/this-site' locale={'en'}>
                     page!
                  </InTextLink>
               </>
            </Callout>
         </Container>
      </>
   )
}

export default ProjectsComponent