import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Header } from '@components/header'

//* Importing style elements
import {
  Container,
  Section,
  terminalContainer
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

export const getStaticProps: GetStaticProps<{
	locale: string
}> = async ({ locale, locales }) => {
	return {
		props: {
			locale: locale ?? locales![0],
		},
	}
}


const Home: NextPage = ({ }) => {
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
