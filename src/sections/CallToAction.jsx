import React from 'react'
import Button from '../components/Button'

const CallToAction = () => {
  return (
    <section className="py-8 px-32 max-lg:px-4 max-sm:py-4 max-lg:py-16 flex flex-col justify-center items-center">
      <h2 className="text-5xl max-sm:text-2xl font-bold capitalize  mb-8 max-sm:mb-4 max-lg:mb-6" data-aos='fade-down'>
        let's <span className="text-secondary">build</span> something  {" "}
        <span className="text-secondary">awesome</span> together!
      </h2>
      <p className='mb-8' data-aos='fade-down'>
        Try us risk free for 7 days, if you don't love us, get your money back.
      </p>
      <Button text='get started' data_aos='fade-down'/>
      <img src="images/call_to_action_image.webp" alt="" className='mt-4 top-[48px] relative z-0' data-aos='fade-down'/>
    </section>
  )
}

export default CallToAction