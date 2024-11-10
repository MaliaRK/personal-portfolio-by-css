
import React from 'react'
import { Navbar } from './navbar'

const Header = () => {
  return (
    <header>
        <div className='hidden md:flex justify-between bg-gray-800 text-white mx-6 mt-6 px-36 py-5 border-2 border-cyan-500 '>
            <h3>Portfolio.</h3>
            <ul className='flex gap-9 cursor-pointer '>
                <li className='hover:text-cyan-500
                '>Home</li>
                <li className='hover:text-cyan-500'>About</li>
                <li className='hover:text-cyan-500'>Contact</li>
                <li className='hover:text-cyan-500'>Skills</li>
                <li className='hover:text-cyan-500'>Projects</li>
            </ul>
        </div>
        <div className='md:hidden'>
        <Navbar/>
        </div>
        <div className='h-2 bg-cyan-500 mx-6 hidden md:block'></div>
    </header>
  )
}

export default Header
