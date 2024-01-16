import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/Nav'
import Logo from './components/Logo'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {

  return (
    <>
      <head>
          <title>Rufus&apos; Web Portfolio</title>
          <link rel="stylesheet" href="style.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
          <meta name="viewport" content="width, initial-scale=1"></meta>
      </head>
      <body>
        <Nav/>
        <main>
            <Logo/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
      </body>
    </>
  )
}
