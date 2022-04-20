import type { NextPage } from 'next'
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
	<span id='loading-term' style={{height: '200vh', display: 'block'}}>
		{"❯"} shell <br/>
		starting terminal and loading dinosaurs 🦖<br/>
	</span>
)

const TermuxTerminal = dynamic(() => import('@components/pages/index/termux'), {
	ssr: false,
	suspense: true,
	loading: LoadingTermComponent
})

const Home: NextPage = () => {
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
					<sub id='term-content'>
						<Suspense fallback={<LoadingTermComponent/>}>
							<TermuxTerminal />
						</Suspense>
					</sub>
  	  			</Section>
  	  		 </Container>
  	  	</>
  	)
}

export default Home
