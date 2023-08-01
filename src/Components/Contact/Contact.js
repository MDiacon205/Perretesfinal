import React from 'react'
import Footer from '../Vital/Footer'
import Navbar from '../Vital/Navbar'
import Form from './Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div class="bg-container w-100">
      <img src="./specificimg/contact.jpg" class="w-100 bg-contact"/>
      <p class="fs-1 bg-centrado">Contáctanos.</p>
      </div>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact