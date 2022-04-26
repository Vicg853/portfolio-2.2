import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'

import React, { Suspense, Fragment } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

//* Importing essential components
import { Header } from '@components/header'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'

//* Importing style elements
import {
  Container,
  SecTitle,
  Section,
  SectionVertical,
  CaptionedImage,
  Paragraph,
  terminalContainer,
  meImageStyle
} from '@p-styles/index'

const LoadingTermComponent = () => (
	<sub id='term-content' style={{width: '100%', position: 'relative', padding: '0rem 0.7rem'}}>
		<span id='loading-term' style={{height: '368px', display: 'block'}}>
			{"❯"} shell <br/>
			starting terminal and loading dinosaurs 🦖<br/>
		</span>
	</sub>
)

const TermuxTerminal = dynamic(() => import('@components/pages/index/xterm'), {
	ssr: false,
})


interface GlobalObjectivesSourceType {
	objectiveProgress: 'to-do' | 'in-progress' | 'done'
	objectiveId: string
	objectiveFeats?: string[]
	objectiveSources?: string[]
	objectiveProjects?: string[]
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
	mainP: string[]
	imageCaption: string
	terminal?: any
}

type PageProps =  PageFullType<IndexPageLocaleContent> & {
	objectives: ObjectivesSourcePageProps[]
}

export const getStaticProps: GetStaticProps<{
	locale: string
	pageSource: PageProps
}> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'index')

	//TODO Add real graphql source when apollo is ready
	const objectivesSource: ObjectivesSourceQueryType[] = [
		{
			objectiveId: 'objective-learn-rust-lang',
			objectiveProgress: 'in-progress',
			sourceI18nIterations: {
				'en': {
					objectiveName: 'Learn Rust',
					objectiveDescription: 'Learn the Rust programming language.'
				},
				'pt': {
					objectiveName: 'Aprender Rust',
					objectiveDescription: 'Aprender a linguagem de programação Rust .'
				},
				'fr': {
					objectiveName: 'Apprendre Rust',
					objectiveDescription: 'Apprendre le langage de programmation Rust.'
				}
			},
			objectiveSources: [
				'https://rust-lang.org'
			]
		}
	]
	
	//filter out only the current locale name and descriptions
	const objectives: ObjectivesSourcePageProps[] = objectivesSource.map(objective => {
		const objectiveLocale = objective.sourceI18nIterations[(locale ?? defaultLocale) as 'en' | 'pt' | 'fr'] ??
			objective.sourceI18nIterations[defaultLocale]

		return {
			...objective,
			sourceI18nIterations: null,
			objectiveName: objectiveLocale.objectiveName,
			objectiveDescription: objectiveLocale.objectiveDescription,
		}
	})

	

	return {
		props: {
			pageSource: {
				...pageSource,
				objectives
			},
			locale: locale ?? locales![0],
		},
	}
}

const Home: NextPage<{pageSource: PageProps}> = ({ pageSource  }) => {
  	return (
  	  	<>
  	  		<Header title={pageSource.mainProps.header!.title}
  	  		  	description={pageSource.mainProps.header!.description}
  	  		  	background={{
  	  		  	  type: 'image',
  	  		  	  srcType: 'local',
  	  		  	  src: '/images/pages/index/LRM_20200528_151756 (1).jpg',
  	  		  	}}
  	  		 />
  	  		 <Container>
				<Section data-wrapRev data-gap>
					<SectionVertical>
						<SecTitle>{"<"}Intro{"/>"}</SecTitle>
						<Paragraph>
							{pageSource.content.mainP.map((p, i) => <Fragment key={i}>{p}<br/><br/></Fragment>)}
						</Paragraph>
					</SectionVertical>
					<CaptionedImage data-topCaption>
						<Image src='/images/pages/index/IMG-20200226-WA0034.jpg'
							className={meImageStyle}
							alt={pageSource.content.imageCaption}
							width={268}
							height={308}
						 />
						<span>{pageSource.content.imageCaption}</span>
					</CaptionedImage>
				</Section>
  	  			<Section className={terminalContainer}>
					<sub id='term-bar'>
						<span className='red-button' />
						<span className='grey-button' />
						<span className='green-button' />
					</sub>
					<Suspense fallback={<LoadingTermComponent/>}>
						<TermuxTerminal />
					</Suspense>
  	  			</Section>
  	  		 </Container>
  	  	</>
  	)
}

export default Home
