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
          src: '/images/pages/jacky-lo-LjX-m_UXQGM-unsplash.jpg',
        }}
       />
      <div style={{ height: '100vh' }}>
        Hello World!
      </div>
    </>
  )
}

export default Home
