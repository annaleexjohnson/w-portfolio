import { useState } from 'react'
import './app.scss'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Hero />
     <About />
    </div>
  )
}

export default App
