import React, { useContext } from 'react'
import Footer from '../Vital/Footer'
import Navbar from '../Vital/Navbar'
import Form from './Form'
import { ThemeContext } from '../Vital/ThemeContext'

function Contact() {
  let { DarkMode } = useContext(ThemeContext)

  return (
    <div>
      <Navbar />

<div class={ DarkMode == true ? "bg-contact-light" : "bg-contact-dark"}>
      <div> {/*GET IN TOUCH*/}
        <div class="container text-center p-4">
          <div class="row align-items-evenly">

            <div class="col-5 align-self-center">
            <p class={ DarkMode == false ? "fs-1 text-light" : "fs-1 text-dark"}>Ponte en contacto.</p>
            </div>
            <div class="col">
              <Form/>
            </div>

          </div>
        </div>
      </div> {/*FIN DE GET IN TOUCH*/}
</div>
      <div class="container text-center">  {/*SECCIONES MINIMALISTAS*/}
        <div class={DarkMode == true ? "row align-items-evenly m-5 text-lightYellow" : "row align-items-evenly m-5 text-body-secondary"}>

          <div class="col mt-3">
          <i class="fa-solid fa-location-dot fs-4"></i>
          <p class="fw-bold fs-5">Dirección</p>
          <p>744 Av. Perrongo</p>
          </div>

          <div class="col mt-3">
          <i class="fa-solid fa-mobile-screen-button fs-4"></i>
          <p class="fw-bold fs-5">Teléfono</p>
          <p>+54 9 2478 40 7326</p>
          </div>
          
          <div class="col mt-3">
          <i class="fa-brands fa-instagram fs-4"></i>
          <p class="fw-bold fs-5">Instagram</p>
          <p>@PerretesEcommerce</p>
          </div>  {/*FIN DE SECCIONES MINIMALISTAS*/}

        </div>
      </div>
      <Footer/>

    </div>
  )
}
export default Contact