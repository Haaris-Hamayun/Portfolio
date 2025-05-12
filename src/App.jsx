import { useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const servicesRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header scrollTo={{ homeRef, aboutRef, servicesRef, skillsRef, contactRef }} />
      
      <main>
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={servicesRef}><Services /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App