import React from 'react'
import {navLinks} from '../constants'
import Button from './Button'

const NavBar = () => {
  return (
    
    <nav className='flex justify-between px-16 pb-12 items-center'>
        <div>
            <img src="icons/logo.png" alt="Logo" />
        </div>
        <div className='flex gap-12 font-bold uppercase '>
            {navLinks.map(link => (
                <a href={link.link} key={link.name} >
                    <p className={`${link.selected && 'text-secondary'} `}>{link.name}</p>
                </a>
            ))}
        </div>
        <Button text='Get started' />
    </nav>
  )
}

export default NavBar