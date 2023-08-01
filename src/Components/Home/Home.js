import React from 'react'
import Footer from '../Vital/Footer'
import Navbar from '../Vital/Navbar'
import Bannercarousel from '../Vital/Bannercarousel'
import Itemcarousel from '../Vital/Itemcarousel'
import Card from '../Vital/Card'

function Home() {
  return (
    <div>
      <Navbar />
      <Bannercarousel />
      <p class="fs-3 mt-5 border-3 border-success border-bottom mb-2">OFERTAS</p>

      <Itemcarousel />
      <Footer />
    </div>
  )
}

export default Home