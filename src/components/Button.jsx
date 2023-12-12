import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-secondary rounded-xl relative z-20 w-fit'>
        <p className='uppercase text-white font-bold px-8 py-4 max-sm:text-[10px] max-sm:px-4 max-sm:py-3'>{text}</p>
    </button>
  )
}

export default Button