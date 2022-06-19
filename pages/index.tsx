import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'
import type { ObjectivesType, GetObjectivesPromise } from '@api-utils/content-retrivers/objectives'

import Image from 'next/image'
import Link from 'next/link'
import { getPlaiceholder } from 'plaiceholder'

//* Importing essential components
import { Header } from '@components/header'

//* Importing api functions
import { getPageSource } from '@api-utils/locales-sources'
import { getObjectivesList } from '@api-utils/content-retrivers/objectives'

//* Importing style elements
import {
  Paragraph,
  meImageStyle,
  introTextStyles,
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
	SectionDesc,
	TextEffect
} from '@p-styles/global'


export interface IndexPageLocaleContent {
	mainP: string
	imageCaption: string
	objectivesText: {
		title: string
		description: string
		error: string
		noObjectives: string
		objectivesCaption: {
			title: string
			done: string
			inProgress: string
			todo: string
			hasSource: string
			hasSourceEG: string
		}
	}
}

type PageProps =  PageFullType<IndexPageLocaleContent> & {
	objectivesFetch: GetObjectivesPromise
	headerBlurUrl: string
}

export const getStaticProps: GetStaticProps<{
	locale: string
	pageSource: PageProps
}> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'index')

	const { base64 } = await getPlaiceholder('/images/pages/index/LRM_20200528_151756 (1).jpg')


	//* Retrieving objectives list
	const objectivesFetch = await getObjectivesList(locale as any, 'en')

	return {
		props: {
			pageSource: {
				...pageSource,
				objectivesFetch,
				headerBlurUrl: base64
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

	const blurData = pageSource.headerBlurUrl
	const objectivesFetch = pageSource.objectivesFetch

  	return (
  	  	<>
  	  		<Header title={header!.title}
  	  		  	description={header!.description}
  	  		  	background={{
  	  		  	  type: 'image',
  	  		  	  srcType: 'local',
				  alt: header!.backgroundAlt,
  	  		  	  src: '/images/pages/index/LRM_20200528_151756 (1).jpg',
				  blurData
  	  		  	}}
				button={{
					text: 'Projects',
					action: {
						type: 'link',
						href: '/projects'
					}
				}}
  	  		 />
  	  		 <Container>
				<Section  data-wrapRev 
				data-widthMax data-gap
				className={mainPMediaQueryStyle}>
					<div className={introTextStyles}>
						<SecTitle>Hello<br/> World</SecTitle>
						<Paragraph>{mainP.split(/\n/).map(val => <>{val}<br key={val}/></>)}</Paragraph>
					</div>
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
				<section
				className={objectivesSectionStyle}>
					<Section data-wrap data-jusSpBet data-stretch
					data-widthHundred	
					className={objectivesSectionTitleStyle}>
						<div>
							<SecTitle>{objectivesText.title.split(/\n/).map(val => <>{val}<br key={val}/></>)}</SecTitle>
							<SectionDesc className={objectivesDescriptionStyle}>{objectivesText.description}</SectionDesc>
						</div>
						<div data-vert id='captions'>
							<span id='title'>{objectivesText.objectivesCaption.title}</span>
							<SectionDesc> 
								<span className='progress-caption-el' data-type="DONE"/> 
								{objectivesText.objectivesCaption.done}
							</SectionDesc>
							<SectionDesc > 
								<span className='progress-caption-el' data-type="INPROGRESS"/> 
								{objectivesText.objectivesCaption.inProgress} 
							</SectionDesc>
							<SectionDesc > 
								<span className='progress-caption-el' data-type="TODO"/> 
								{objectivesText.objectivesCaption.todo} 
							</SectionDesc>
							<SectionDesc >
								<TextEffect data-underline >
									{objectivesText.objectivesCaption.hasSourceEG}:
								</TextEffect>
								&nbsp;{objectivesText.objectivesCaption.hasSource}
							</SectionDesc>
						</div>
					</Section>
					{objectivesFetch === null ? (
						<span className='objectiveIssueMessage'>
							{objectivesText.noObjectives}
						</span>
					) : objectivesFetch === 'error' ? (
						<span className='objectiveIssueMessage'>
							{objectivesText.error}
						</span>
					) : (
						<ObjectivesGridS>
							{objectivesFetch.map((objective: ObjectivesType) => {
								const comp = (
									<ObjectiveCard key={objective.id} data-progress={objective.progress}
									data-has-source={objective.source ? 'true' : 'false'}>
										<sub>
											<h4>{objective.title}</h4>
											<span className='progress-el'></span>
										</sub>
										<p>
											{objective.description}
										</p>
									</ObjectiveCard>
								)

								if(objective.source) return (
									<Link href={objective.source} passHref>
										<a>{comp}</a>
									</Link>
								)
								
								return comp
							})}
						</ObjectivesGridS>
					)}
				</section>
  	  		 </Container>
  	  	</>
  	)
}

export default Home
