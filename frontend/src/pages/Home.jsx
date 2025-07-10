import React from 'react'
import DashNavbar from '../components/DashNavbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='h-screen w-full bg-animated-gradient'>
        <DashNavbar/>
        <Hero/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home