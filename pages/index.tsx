import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'

import React, { Suspense } from 'react'
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

export interface IndexPageLocaleContent {
	mainP: string[]
	imageCaption: string
	terminal?: any
}

export const getStaticProps: GetStaticProps<{
	locale: string
	pageSource: PageFullType<IndexPageLocaleContent>
}> = async ({ locale, locales }) => {
	const pageSource = getPageSource(locale, 'index')
	return {
		props: {
			pageSource,
			locale: locale ?? locales![0],
		},
	}
}

const Home: NextPage<{pageSource: PageFullType<IndexPageLocaleContent>}> = ({ pageSource  }) => {
  	return (
  	  	<>
  	  		<Header title='Hi! I code dinosaurs 🦖'
  	  		  	description='I&apos;m Victor: a computer science and whole-stack lover, &#10; but full-stack focused for the moment.'
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
							Olá! Tudo bem?<br/><br/> 
							Sou apaixonado por ciencia da computação, mesmo (não é frase de efeito): amo aprender qualquer coisa da area, desde o mais pratico ao teórico mais pesado, ou do hardware/binario a programação de high-level. <br/><br/>
							Entrei nesse mundo aos 12 anos e desde então aprendi diversas coisas sobre esse assunto e sei que ainda existe uma longaaa jornada para conseguir saber de tudo (algo que na verdade nunca vou alcançar, de tanto que essa area muda, acho isso incrível !!!).
						</Paragraph>
					</SectionVertical>
					<CaptionedImage data-topCaption>
						<Image src='/images/pages/index/IMG-20200226-WA0034.jpg'
							className={meImageStyle}
							alt='Olá, sou Victor: Programando dinossauros 🦖 desde 2003'
							width={268}
							height={308}
						 />
						<span>Olá, sou Victor: Programando dinossauros 🦖 desde 2003</span>
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
