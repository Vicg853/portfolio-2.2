import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'

import Image from 'next/image'
import Link from 'next/link'
import { defaultLocale } from 'src/locales/configs'
import { css } from 'linaria'

//* Importing essential components
import { Header } from '@components/header'
import { InTextLink } from '@components/mini-components/InTextLink'
import { Callout } from '@components/mini-components/Callout'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'
import { getObjectivesList } from '@api-utils/content-retrivers/objectives'

//* Importing style elements
import {
  Paragraph,
  meImageStyle,
  addGap,
  objectivesGridStyle,
  ObjectiveCard
} from '@p-styles/index'
import {
	Container,
	Section,
	SecTitle,
	CaptionedImage,
	SectionDesc
} from '@p-styles/global'
interface GlobalObjectivesSourceType {
	objectiveProgress: 'to-do' | 'in-progress' | 'done'
	objectiveId: string
	objectiveSource?: string
}

interface ObjectivesSourcePageProps extends GlobalObjectivesSourceType {
	objectiveName: string,
	objectiveDescription: string,
}

interface ObjectivesSourceQueryType extends GlobalObjectivesSourceType {
	sourceI18nIterations: Record<'en' | 'pt' | 'fr', {
		objectiveName: string
		objectiveDescription: string
	}>
}

export interface IndexPageLocaleContent {
	mainP: string
	imageCaption: string
	objectivesText: {
		title: string
		description: string
		objectivesLegend: {
			done: string
			inProgress: string
			todo: string
		}
	}
}

type PageProps =  PageFullType<IndexPageLocaleContent> & {
	objectivesFetch: ObjectivesSourcePageProps[]
}

export const getStaticProps: GetStaticProps<{
	locale: string
	pageSource: PageProps
}> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'index')

	//* Retrieving objectives list
	const objectivesFetch = getObjectivesList(locale as any, 'en')

	return {
		props: {
			pageSource: {
				...pageSource,
				objectivesFetch
			},
			locale: locale ?? locales![0],
		},
	}
}

const Home: NextPage<{pageSource: PageProps, locale: string}> = ({ pageSource, locale }) => {
	const {
		mainP,
		imageCaption,
		objectivesText
	} = pageSource.content

	const {
		header
	} = pageSource.mainProps

	const objectivesFetch = pageSource.objectivesFetch

  	return (
  	  	<>
  	  		<Header title={header!.title}
  	  		  	description={header!.description}
  	  		  	background={{
  	  		  	  type: 'image',
  	  		  	  srcType: 'local',
  	  		  	  src: '/images/pages/index/LRM_20200528_151756 (1).jpg',
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
				<Section  data-wrapRev 
				data-widthMax data-gap
				className={css`
					@media (max-width: 745px) {
						justify-content: center;
   				}
				`}>
					<Section className={addGap} data-vert>
						<SecTitle>Hello<br/> World</SecTitle>
						<Paragraph>{mainP.split(/\n/).map(val => <>{val}<br key={val}/></>)}</Paragraph>
					</Section>
					<CaptionedImage data-topCaption>
						<Image src='/images/pages/index/IMG-20200226-WA0034.jpg'
							className={meImageStyle}
							alt={imageCaption}
							width={268}
							height={308}
						 />
						<span>{pageSource.content.imageCaption}</span>
					</CaptionedImage>
				</Section>
				<Section data-vert data-gap
				className={css`
					background: var(--pallete-opaque-bgContrast);
					border-radius: 0.7rem;
					padding: 1.5rem;
					margin-top: 10rem;
				`}>
					<Section data-wrap className={css`
						gap: 0.5rem;
					`}>
						<Section data-vert>
							<SecTitle>{objectivesText.title.split(/\n/).map(val => <>{val}<br key={val}/></>)}</SecTitle>
							<SectionDesc dangerouslySetInnerHTML={{ __html: objectivesText.description}}
							className={css`margin-top: 0.7rem !important;`}/>
						</Section>
						<Section data-vert>
							<SectionDesc dangerouslySetInnerHTML={{ __html: `✅ ${objectivesText.objectivesLegend.done}`}} />
							<SectionDesc dangerouslySetInnerHTML={{ __html: `✍️ ${objectivesText.objectivesLegend.inProgress}`}} />
							<SectionDesc dangerouslySetInnerHTML={{ __html: `⌛ ${objectivesText.objectivesLegend.todo}`}} />
						</Section>
					</Section>
					<Section data-wrap data-widthHundred className={objectivesGridStyle}>
						{objectivesFetch.map(objective => {
							const comp = (
								<ObjectiveCard key={objective.objectiveId}>
									<sub>
										<h4>{objective.objectiveName}</h4>
										<span>
											{objective.objectiveProgress === 'done' && <>✅</> }
											{objective.objectiveProgress === 'in-progress' && <>✍️</>}
											{objective.objectiveProgress === 'to-do' && <>⌛</>}
										</span>
									</sub>
									<p>
										{objective.objectiveDescription}
									</p>
								</ObjectiveCard>
							)

							if(objective.objectiveSource) return (
								<Link href={objective.objectiveSource}>
									{comp}
								</Link>
							)
							
							return comp
						})}
					</Section>
				</Section>
  	  		 </Container>
  	  	</>
  	)
}

export default Home
