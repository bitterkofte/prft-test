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
        <meta name="description" content="Hasan Talha Çelik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <MainMenu/> */}
      <MainPage/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}
