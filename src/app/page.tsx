import React from 'react'
import Header from './components/header'
import Home from './components/home/page'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Navbar } from './components/navbar';

const HomePage = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
      <Header/>
      <Home/>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default HomePage
