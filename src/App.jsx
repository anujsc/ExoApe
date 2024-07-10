import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/components/Nav'
import Landing from './assets/components/Landing'
import Work from './assets/components/Work'
import Playreel from './assets/components/Playreel'
import LocomotiveScroll from 'locomotive-scroll';
import Slide from './assets/components/Slide'
import Spread from './assets/components/Spread'
import Footer from './assets/components/Footer'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full  '>
      <Nav/>
      <Landing/>
      <Work/>
      <Playreel/>
      <Slide/>
      <Spread/>
      <Footer/>
    </div>
  )
}

export default App
