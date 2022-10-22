import { useState } from 'react'
import './app.scss'
import SectionTitle from './assets/SectionTitle'
import Header from './components/header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Hero />
     <SectionTitle title="About Me" />
    </div>
  )
}

export default App
