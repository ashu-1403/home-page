import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import Features from './components/Features'
import Product from './components/Product'
import Functions from './components/Functions'
import Store from './components/Store'
import TestimonialCarousel from './components/Testimonial'
import Profit from './components/Profit'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Features/>
      <Product/>
      <Functions/>
      <Store/>
      <TestimonialCarousel/>
      <Profit/>
      <Footer/>
    </div>
  )
}

export default App