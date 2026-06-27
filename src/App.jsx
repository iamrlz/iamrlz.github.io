import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Achievements from './components/Achievements.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Gallery from './components/Gallery.jsx'
import Education from './components/Education.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Gallery />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
