import React from 'react'
// import Home from './pages/Home'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Product from './pages/Product'
const App = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      {/* <Home /> */}
      <Product/>
    </div>
  )
}

export default App