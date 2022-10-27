import { useState } from 'react'
import './app.scss'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" id="home">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
