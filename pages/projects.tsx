import type { NextPage, GetStaticProps } from 'next'
import type { PageFullType } from '../src/locales'
import type { GetProjectsPromise } from '@api-utils/content-retrivers/projects'

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
	BlockSection,
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
import RelatedSourcesIcon from '@p-images/projects/related-sources-icon-icons8.svg'
import WebsiteIcon from '@p-images/projects/www-source-icon-icons8.svg'

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
	projectsList: GetProjectsPromise
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
		revalidate: 604800
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
				button={{
					text: 'Resume',
					action: {
						type: 'link',
						href: '/resume'
					}
				}}
         />
         <Container className={containerMargins}>
				<BlockSection data-vert-small-gap
				data-widthMax>
					<SecTitle>
						<TextEffect data-codeBigArrow>
							{mainParagraphTitle}
						</TextEffect>
					</SecTitle>
					<Paragraph data-limitWidthBig>
						{mainParagraph.split(/\n/).map(val => <>{val}<br key={val}/></>)}
					</Paragraph>
				</BlockSection>
				<BlockSection data-vert-big-gap>
				
				{projectsList === null ? (
					<Paragraph data-text-center>
						{projectsListCaptions.noProjects} 🤔😩
					</Paragraph>
				) : projectsList === 'error' ? (
					<Paragraph data-text-center>
						{projectsListCaptions.noProjects} 🤔😩
					</Paragraph>
				) : projectsList.map((project, i) => (
						<ProjectCard key={i}>
							<Image className='project-card-image' layout='fill' objectFit='cover'
							src={project.image ?? '/images/pages/projects/background.jpg'} 
							alt={`${project.title} project background illustration!`}/>
							<sub>
								<h3 className={cx(
									SecTitle.__linaria.className, 
									projectCardTitleStyles)}>
									{project.title}
								</h3>
								<span className='project-card-project-description'>
									{project.description}
								</span>
								{project.scopes && <span className='project-card-project-scope'>
									{project.scopes.length > 1 ? 
										projectsListCaptions.scope.plural
										: projectsListCaptions.scope.singular 
									}{":"}
									<span className='detail'>{project.scopes.toLocaleLowerCase()}</span>
								</span>}
								<span className='project-card-section-title'>
									{project.topics!.length > 1 ? 
										projectsListCaptions.topics.plural 
										: projectsListCaptions.topics.singular 
									}{":"}
								</span>
								<div className='project-card-project-subjects'>
									{project.topics!.map((topic, i) => (
										<ProjectCardMiniCard key={i}>{topic}</ProjectCardMiniCard>
									))}
								</div>
								<span className='project-card-section-title'>{`${projectsListCaptions.techStack}:`}</span>
								<div className='project-card-project-technologies'>
									{project.techStack!.map((tech, i) => (
										<ProjectCardMiniCard key={i}>
											{tech.url ?
												<Link href={tech.url} passHref>
													<a>{tech.name}</a>
												</Link>
											: tech.name}
										</ProjectCardMiniCard>
									))}
								</div>
								<div className='project-card-project-access'>
									<span className='title'>{projectsListCaptions.access}</span>
									<div className='content'>
										{project.resources?.map((resource, i) => (
											<Link passHref href={resource.url} key={i}>
												<a className={accessProjectLinksStyle} 
            		   					   rel='noopener noreferrer'
            		   					   target='_blank'>
													<RelatedSourcesIcon className='icon' />
													<span>{resource.label ?? projectsListCaptions.sources.related}</span>
            		   					</a>
											</Link>
										))}
										{project.ghRepo?.map((repo, i) => (
											<Link passHref href={repo} key={i}>
												<a className={accessProjectLinksStyle} 
            		   					   rel='noopener noreferrer'
            		   					   target='_blank'>
													<GithubIcon className='icon'/>
													<span>{projectsListCaptions.sources.github}</span>
            		   					</a>
											</Link>
										))}
										{project.website?.map((repo, i) => (
											<Link passHref href={repo} key={i}>
												<a className={accessProjectLinksStyle} 
            		   					   rel='noopener noreferrer'
            		   					   target='_blank'>
													<WebsiteIcon className='icon'/>
													<span>{projectsListCaptions.sources.www}</span>
            		   					</a>
											</Link>
										))}
									</div>
								</div>
							</sub>
						</ProjectCard>
				))}
				</BlockSection>
         </Container>
      </>
   )
}

export default ProjectsComponent