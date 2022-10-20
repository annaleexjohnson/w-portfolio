import { useState } from 'react'
import './app.scss'
import Header from './components/header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Hero />
    </div>
  )
}

export default App
