import type { NextPage, GetStaticProps } from 'next'
import type { PageFullType } from '../src/locales'
import type { ProjectsSource, ProjectsListType } from '@api-utils/content-retrivers/projects'

//* Importing needed components and deps
import { Header } from '@components/header'
import Image from 'next/image'
import Link from 'next/link'
import { cx } from 'linaria'

//* Importing api components and deps
import { getPageSource } from '@api-utils/locales-sources'
import { getProjectsList } from '@api-utils/content-retrivers/projects'

//* Importing global and specific styled components
import { 
   Container,
	Section,
	Paragraph,
	SecTitle,
	TextEffect
} from '@p-styles/global'
import {
	ProjectCard,
	ProjectCardMiniCard,
	containerMargins,
	projectCardTitleStyles,
	accessProjectLinksStyle
} from '@p-styles/projects'

import GithubIcon from '@p-images/projects/github-source-icon-icons8.svg'
import MoreInfoIcon from '@p-images/projects/moreInf-source-icon-icons8.svg'
import WebsiteIcon from '@p-images/projects/www-source-icon-icons8.svg'

const sourceAssetLinks = [
	{ 
		type: 'RELATED', 
		url: '/images/pages/projects/related-sources-icon-icons8.svg', 
		alt: 'Related sources icon'
	},
	{ 
		type: 'CUSTOM', 
		url: '/images/pages/projects/related-sources-icon-icons8.svg', 
		alt: 'Custom source icon'
	},
]

export interface ProjectsPageStaticLocalesSource {
	mainParagraphTitle: string
   mainParagraph: string
	projectsList: {
		sources: {
			github: string
			www: string
			moreInf: string
			related: string
			other: string
		}
		techStack: string
		scope: { plural: string, singular: string }
		topics: { plural: string, singular: string }
		access: string
		noProjects: string
	}
}

type ProjectsPageSource = PageFullType<ProjectsPageStaticLocalesSource>

interface GetStaticPropsResult {
	projectsList: ProjectsListType
	pageSource: ProjectsPageSource
	locale: string
}

export const getStaticProps: GetStaticProps<GetStaticPropsResult> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'projects')
	
	const projectsList = await getProjectsList(locale as any, locales![0] as any)

	return {
		props: {
			pageSource: {
				...pageSource,
			},
			projectsList,
			locale: locale ?? locales![0],
		},
	}
}

const ProjectsComponent: NextPage<GetStaticPropsResult> = ({ pageSource, locale, projectsList }) => {
	const {
		mainParagraphTitle,
		mainParagraph,
		projectsList: projectsListCaptions
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
				data-widthMax>
					<SecTitle>
						<TextEffect data-codeBigArrow>
							{mainParagraphTitle}
						</TextEffect>
					</SecTitle>
					<Paragraph data-limitWidthBig>
						{mainParagraph.split(/\n/).map(val => <>{val}<br key={val}/></>)}
					</Paragraph>
				</Section>
				{projectsList?.map((project, i) => {
					const {
						frontmatter,
						metadata,
						sources
					} = project

					return (
						<Section data-widthMax data-vert key={i}> 
							<ProjectCard>
								<Image className='project-card-image' layout='fill' objectFit='cover'
								src={frontmatter.image} alt={`${frontmatter.title} project background illustration!`}/>
								<sub>
									<h3 className={cx(
										SecTitle.__linaria.className, 
										projectCardTitleStyles)}>
										{frontmatter.title}
									</h3>
									<span className='project-card-project-description'>
										{frontmatter.description}
									</span>
									{metadata.scopes && <span className='project-card-project-scope'>
										{metadata.scopes.length > 1 ? 
											projectsListCaptions.scope.plural
											: projectsListCaptions.scope.singular 
										}{":"}
										<span className='detail'>{metadata.scopes.toLocaleLowerCase()}</span>
									</span>}
									<span className='project-card-section-title'>
										{metadata.topics.length > 1 ? 
											projectsListCaptions.topics.plural 
											: projectsListCaptions.topics.singular 
										}{":"}
									</span>
									<section className='project-card-project-subjects'>
										{metadata.topics.map((topic, i) => (
											<ProjectCardMiniCard key={i}>{topic}</ProjectCardMiniCard>
										))}
									</section>
									<span className='project-card-section-title'>{`${projectsListCaptions.techStack}:`}</span>
									<section className='project-card-project-technologies'>
										{metadata.techStack.map((tech, i) => (
											<ProjectCardMiniCard key={i}>
												{tech.techLink ?
													<Link href={tech.techLink} passHref>
														<a>{tech.techName}</a>
													</Link>
												: tech.techName}
											</ProjectCardMiniCard>
										))}
									</section>
									<section className='project-card-project-access'>
										<span className='title'>{projectsListCaptions.access}</span>
										<div className='content'>
											{sources.map((source, i) => (
												<Link passHref href={source.sourceLink} key={i}>
													<a className={accessProjectLinksStyle} 
            		      					   rel='noopener noreferrer'
            		      					   target='_blank'>
														{source.sourceType === 'GITHUB' && (<>
															<GithubIcon className='icon'/>
															{projectsListCaptions.sources.github}
														</>)}
														{source.sourceType === 'MOREINFO' && (<>
															<MoreInfoIcon className='icon'/>
															{projectsListCaptions.sources.moreInf}
														</>)}
														{source.sourceType === 'WEBSITE' && (<>
															<WebsiteIcon className='icon'/>
															{projectsListCaptions.sources.www}
														</>)}
														{(source.sourceType === 'CUSTOM' || source.sourceType === 'RELATED') && 
															<Image className='icon' width={19} height={19}
															priority
															src={sourceAssetLinks.find(asset => asset.type === source.sourceType)!.url} 
															alt={sourceAssetLinks.find(asset => asset.type === source.sourceType)!.alt} />
														}
														{source.sourceType === 'RELATED' && projectsListCaptions.sources.related}
														{source.sourceType === 'CUSTOM' && projectsListCaptions.sources.other}
            		      					</a>
												</Link>
											))}
										</div>
									</section>
								</sub>
							</ProjectCard>
						</Section>
					)
				}) ?? (
					<Section data-widthMax data-jusCent>
						<Paragraph>
							{projectsListCaptions.noProjects} 🤔😩
						</Paragraph>
					</Section>
				)}
         </Container>
      </>
   )
}

export default ProjectsComponent