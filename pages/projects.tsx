import type { NextPage, GetStaticProps } from 'next'
import type { PageFullType } from '../src/locales'

//* Importing needed components and deps
import { Header } from '@components/header'

//* Importing api components and deps
import { getPageSource } from '@api-utils/locales-sources'

//* Importing global and specific styled components
import { 
   Container,
	Section,
	Paragraph,
	SecTitle,
	TextEffect
} from '@p-styles/global'
import {
	containerMargins
} from '@p-styles/projects'

//* Importing used components
import { InTextLink } from '@components/mini-components/InTextLink'

export interface ProjectsPageStaticLocalesSource {
	mainParagraphTitle: string
   mainParagraph: string

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

const ProjectsComponent: NextPage<{pageSource: ProjectsPageSource, locale: string}> = ({ pageSource, locale }) => {
	const {
		mainParagraphTitle,
		mainParagraph
	} = pageSource.content

   return (
      <>
         <Header 
            title={pageSource.mainProps!.header!.title}
            description={pageSource.mainProps!.header!.description}
            background={{
               type: 'image',
               srcType: 'local',
               src: '/images/pages/projects/background.jpg',
               alt: pageSource.mainProps!.header!.backgroundAlt,
            }}
         />
         <Container className={containerMargins}>
				<Section data-vert data-gap
				data-widthMax data-limitWidthBig>
					<SecTitle>
						<TextEffect data-codeBigArrow>
							{mainParagraphTitle}
						</TextEffect>
					</SecTitle>
					<Paragraph data-limitWidthBig>
						{mainParagraph.split(/\n/).map(val => <>{val}<br key={val}/></>)}
					</Paragraph>
				</Section>
         </Container>
      </>
   )
}

export default ProjectsComponent