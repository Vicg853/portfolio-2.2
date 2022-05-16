import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'
import type { ObjectivesType } from '@api-utils/content-retrivers/objectives'

import Image from 'next/image'
import Link from 'next/link'

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
  ObjectivesGridS,
  ObjectiveCard,
  objectivesSectionStyle,
  mainPMediaQueryStyle,
  objectivesSectionTitleStyle,
  objectivesDescriptionStyle
} from '@p-styles/index'
import {
	Container,
	Section,
	SecTitle,
	CaptionedImage,
	SectionDesc
} from '@p-styles/global'


export interface IndexPageLocaleContent {
	mainP: string
	imageCaption: string
	objectivesText: {
		title: string
		description: string
		objectivesCaption: {
			title: string
			done: string
			inProgress: string
			todo: string
		}
	}
}

type PageProps =  PageFullType<IndexPageLocaleContent> & {
	objectivesFetch: ObjectivesType[]
}

export const getStaticProps: GetStaticProps<{
	locale: string
	pageSource: PageProps
}> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'index')

	//* Retrieving objectives list
	const objectivesFetch = await getObjectivesList(locale as any, 'en')

	return {
		props: {
			pageSource: {
				...pageSource,
				objectivesFetch
			},
			locale: locale ?? locales![0],
		},
		revalidate: 604800
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
	} = pageSource.mainProps!

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
									You may if you want check out the <InTextLink href='https://old.victorgomez.dev'>older version</InTextLink> {"("}only available in portuguese sorry :{"( )"}.<br/>
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
						</>
					</Callout>
				</Section>
				<Section  data-wrapRev 
				data-widthMax data-gap
				className={mainPMediaQueryStyle}>
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
				className={objectivesSectionStyle}>
					<Section data-wrap className={objectivesSectionTitleStyle}>
						<Section data-vert>
							<SecTitle>{objectivesText.title.split(/\n/).map(val => <>{val}<br key={val}/></>)}</SecTitle>
							<SectionDesc dangerouslySetInnerHTML={{ __html: objectivesText.description}}
							className={objectivesDescriptionStyle}/>
						</Section>
						<Section data-vert id='captions'>
							<span id='title'>{objectivesText.objectivesCaption.title}</span>
							<SectionDesc dangerouslySetInnerHTML={{ __html: `✅ ${objectivesText.objectivesCaption.done}`}} />
							<SectionDesc dangerouslySetInnerHTML={{ __html: `✍️ ${objectivesText.objectivesCaption.inProgress}`}} />
							<SectionDesc dangerouslySetInnerHTML={{ __html: `⌛ ${objectivesText.objectivesCaption.todo}`}} />
						</Section>
					</Section>
					<ObjectivesGridS>
						{objectivesFetch.map(objective => {
							const comp = (
								<ObjectiveCard key={objective.id}>
									<sub>
										<h4>{objective.objectiveName}</h4>
										<span>
											{objective.objectiveProgress === 'DONE' && <>✅</> }
											{objective.objectiveProgress === 'INPROGRESS' && <>✍️</>}
											{objective.objectiveProgress === 'TODO' && <>⌛</>}
										</span>
									</sub>
									<p>
										{objective.objectiveDescription}
									</p>
								</ObjectiveCard>
							)

							if(objective.objectiveSource) return (
								<Link href={objective.objectiveSource} passHref>
									<a>{comp}</a>
								</Link>
							)
							
							return comp
						})}
					</ObjectivesGridS>
				</Section>
  	  		 </Container>
  	  	</>
  	)
}

export default Home
