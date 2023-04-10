import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainMenu from '@component/components/MainMenu'
import MainPage from '@component/components/MainPage'
import About from '@component/components/About'
import Skills from '@component/components/Skills'
import Projects from '@component/components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>bitterkofte</title>
        <meta name="description" content="Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Hasan Talha Çelik"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../public/assets/bk.svg"/>
        <meta property="og:url" content="https://bitterkofte.vercel.app/"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      {/* <MainMenu/> */}
      <MainPage/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}
