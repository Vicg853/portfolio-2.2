import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'
import type { ObjectivesType } from '@api-utils/content-retrivers/objectives'

import Image from 'next/image'
import Link from 'next/link'

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
				  alt: header!.backgroundAlt,
  	  		  	  src: '/images/pages/index/LRM_20200528_151756 (1).jpg',
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
						<div data-vert>
							<SecTitle>{objectivesText.title.split(/\n/).map(val => <>{val}<br key={val}/></>)}</SecTitle>
							<SectionDesc className={objectivesDescriptionStyle}>{objectivesText.description}</SectionDesc>
						</div>
						<div data-vert id='captions'>
							<span id='title'>{objectivesText.objectivesCaption.title}</span>
							<SectionDesc> ✅ {objectivesText.objectivesCaption.done}</SectionDesc>
							<SectionDesc> ✍️ {objectivesText.objectivesCaption.inProgress} </SectionDesc>
							<SectionDesc> ⌛ {objectivesText.objectivesCaption.todo} </SectionDesc>
							<SectionDesc> 
								<TextEffect data-underline >
									{objectivesText.objectivesCaption.hasSourceEG}:
								</TextEffect>
								&nbsp;{objectivesText.objectivesCaption.hasSource}
							</SectionDesc>
						</div>
					</Section>
					<ObjectivesGridS>
						{objectivesFetch.map(objective => {
							const comp = (
								<ObjectiveCard key={objective.id} 
								data-has-source={objective.objectiveSource ? 'true' : 'false'}>
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
				</section>
  	  		 </Container>
  	  	</>
  	)
}

export default Home
