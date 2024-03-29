import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import Customers from './sections/Customers'
import SellingPoints from './sections/SellingPoints'
import Promotion from './sections/Promotion'
import BusinessInsights from './sections/BusinessInsights'
import Plans from './sections/Plans'
import DecisionMaking from './sections/DecisionMaking'
import FAQs from './sections/FAQs'
import CallToAction from './sections/CallToAction'
import Footer from './sections/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({duration : 600})
  }, [])

  return (
    <main className='font-montserrat bg-[#E0EAF3] text-[#292526] '>
      <Hero />
      <Customers />
      <SellingPoints />
      <Promotion />
      <BusinessInsights />
      <Plans />
      <DecisionMaking />
      <FAQs />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App
