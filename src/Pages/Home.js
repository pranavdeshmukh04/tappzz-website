import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Features />
      <Footer/>
    </div>
  )
}

export default Home
