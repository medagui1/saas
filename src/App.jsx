import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import Customers from './sections/Customers'
import SellingPoints from './sections/SellingPoints'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='font-montserrat bg-[#E0EAF3]'>
      <Hero />
      <Customers />
      <SellingPoints />
    </main>
  )
}

export default App
