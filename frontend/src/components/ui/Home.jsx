import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from '../CategoryCarousel'

const Home = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        {/* 
        <LatestJobs/>
        <Footer/> */}


    </div>
  )
}

export default Home