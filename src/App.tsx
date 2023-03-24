import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Techstack from './components/techstack/Techstack'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Techstack />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
