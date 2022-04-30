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

const ProjectsComponent: NextPage<{pageSource: ProjectsPageSource, locale: string}> = ({ pageSource, locale }) => {

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
				<Section>
					<Callout icon={{
						type: 'emoji',
						source: '⚠️🚧'
					}}>
						<>
							{locale === 'en' && (
								<>
									This webpage is still under development, so many of its features and pages<br/>
									are still missing. Also many design and breaking changes will still occur.<br/>
									<br/>
									You may if you want check out the <InTextLink href='https://old.victorgomez.dev'>old version</InTextLink> {"("}only available in portuguese sorry :{"( )"}.<br/>
									Or you can follow this page progress...<br/>
								</>
							)}
							{locale === 'pt' && (
								<>
									Este site ainda está em desenvolvimento, então muitas peças e paginas<br/> 
									ainda estão faltando. Ainda ocorreram várias mudanças no design.<br/>
									<br/>
									Caso deseje, pode ver a <InTextLink href='https://old.victorgomez.dev'>versão antiga</InTextLink>.<br/>
									Ou seguir o progresso desta site aqui...<br/>
								</>
							)}
							{locale === 'fr' && (
								<>
									Ce site est encore en cours de développement, donc quelques de ses elements et pages<br/>
									sont encore manquants. Encore des modifications sur le design et fonctionnalités seront fréquentes.<br/>
									<br/>
									Si vous le souhaitez, vous pouvez acceder la <InTextLink href='https://old.victorgomez.dev'>version antérieure</InTextLink> {"("}seulement disponible en portugais :{"( )"}.<br/>
									Ou vous pouvez suivre le progrès de ce site ici...<br/>
								</>
							)}
						</>
					</Callout>
				</Section>
         </Container>
      </>
   )
}

export default ProjectsComponent