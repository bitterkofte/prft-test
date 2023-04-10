import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainMenu from '@component/components/MainMenu'
import MainPage from '@component/components/MainPage'
import About from '@component/components/About'
import Skills from '@component/components/Skills'
import Projects from '@component/components/Projects'
import MetaThumbnail from '../public/assets/bk-wide.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>bitterkofte</title>
        <meta name="description" content="Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="bitterkofte - Hasan Talha Çelik"/>
        <meta property="og:url" content="https://bitterkofte.vercel.app/"/>
        <meta property="og:image" content={MetaThumbnail}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bitterkofte.vercel.app/"/>
        <meta property="twitter:title" content="Hasan Talha Çelik"/>
        <meta property="twitter:description" content="Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!"/>
        <meta property="twitter:image" content={MetaThumbnail}/>
      </Head>
      {/* <MainMenu/> */}
      <MainPage/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}
