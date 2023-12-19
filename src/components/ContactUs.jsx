import React from 'react'
import Button from './Button'

const ContactUs = () => {
  return (
    <div className='border-t-2 border-[#292526] px-16 max-sm:px-8 py-8 mx-8'>
        <h4 className='font-bold text-xl'>
            Hey! Need a custom plan? <span className='text-secondary'>Contact Us!</span>
        </h4>
        <p className='text-md mt-2 mb-8'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
        <Button text='Get started'/>
    </div>
  )
}

export default ContactUs