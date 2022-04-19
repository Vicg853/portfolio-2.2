import type { NextPage } from 'next'

import { Header } from '@components/header'

const Home: NextPage = () => {
  return (
    <>
      <Header
        title='Hi! I code dinosaurs 🦖'
        description='I&apos;m Victor: a computer science and whole-stack lover, &#10; but full-stack focused for the moment.'
        background={{
          type: 'image',
          srcType: 'local',
          src: '/images/pages/index/LRM_20200528_151756 (1).jpg',
        }}
       />
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Hello World! <br />
        This website is still under construction 🚧🏗️
      </div>
    </>
  )
}

export default Home
