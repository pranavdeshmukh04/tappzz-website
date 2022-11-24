import React from 'react'
import Home from './pages/Home'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Product from './pages/Product'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App