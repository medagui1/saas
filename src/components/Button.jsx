import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-secondary rounded-xl relative z-20'>
        <p className='uppercase text-white font-bold px-8 py-4'>{text}</p>
    </button>
  )
}

export default Button