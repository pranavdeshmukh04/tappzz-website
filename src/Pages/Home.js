import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Features from '../components/Features'
import NewArrival from '../components/NewArrival'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <NewArrival/>
      <Features />
      <Categories/>
      <Footer/>
    </div>
  )
}

export default Home
