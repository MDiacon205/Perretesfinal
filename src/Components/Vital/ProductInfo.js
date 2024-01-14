import React from 'react'
import data from './products.json'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
// import { CartContext } from '../Cart/cartContext';
import { useContext } from 'react';

function ProductInfo() {
  let { DarkMode } = useContext(ThemeContext);
  let { productId } = useParams();
  // let { Cart, setCart } = useContext(CartContext)
  let prodDetail = data.find(prod => prod.id == productId)
  // let initialCart = JSON.stringify(localStorage.getItem('carrito'))

  // function handleAddCart() {
  //   if(initialCart) {
  //     setCart(prodDetail)
  //     localStorage.setItem('carrito', JSON.stringify(prodDetail))
  //     console.log(Cart)
  //    } else {
      
  //   }


  //   // setCart(localStorage.getItem('carrito') + JSON.stringify(prodDetail));
  //   // localStorage.setItem('carrito', JSON.stringify(Cart))
  //   // console.log(Cart)
  // }

  return (
    <div>
      <Navbar />
      <div class={DarkMode == true ? "card h-auto w-75 mt-5 shadow mx-auto border-0 position-absolute top-50 start-50 translate-middle bgdark text-light" : "card h-auto w-75 mt-5 shadow mx-auto border-0 position-absolute top-50 start-50 translate-middle text-dark bg-body-secondary"}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={prodDetail.img} class="img-fluid rounded-start card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fs-2 border-success border-2 border-bottom">{prodDetail.title} <br /> {prodDetail.discount == null ? '' : <span class="text-decoration-line-through fs-4">${prodDetail.oldPrice}<span class="badge bg-success m-1">-{prodDetail.discount}%</span></span>}</h5>

              <p class="card-text fw-bold fs-3">${prodDetail.discount < 0 ? prodDetail.price : prodDetail.oldPrice - prodDetail.oldPrice * prodDetail.discount / 100}</p>

              <p class="card-text text-start fw-bold"><span><i class="fa-solid fa-credit-card"></i> </span>6 Cuotas sin interés de ${prodDetail.discount < 0 ? Math.floor(prodDetail.price / 6) : Math.floor(Math.round(prodDetail.oldPrice - prodDetail.oldPrice * prodDetail.discount / 100) / 6)}</p>

              <div class="container text-center">
                <div class="row row-cols-4">
                  <div class="col img-thumbnail border-rounded">
                    <img src="./images/visa.png" />
                  </div>

                  <div class="col img-thumbnail border-rounded">
                    <img src="./images/mastercard.png" />
                  </div>

                  <div class="col img-thumbnail border-rounded">
                    <img src="./images/cencosud.png" />
                  </div>

                  <div class="col img-thumbnail border-rounded">
                    <img src="./images/americanexpress.png" />
                  </div>
                </div>
              </div>

              {/* AGREGAR AL CARRO */}
              <button type="button" class="mt-3 btn btn-success w-100">Agregar al carrito</button>


              <p class="mt-4 text-start ml-2 fw-bold"><span><i class="fa-solid fa-truck"></i></span> Medios de envío</p>

              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 fw-bold text-decoration-underline">
                <div class="col">
                  <p><span><i class="fa-solid fa-envelope-circle-check"></i></span>Correo</p>
                </div>

                <div class="col">
                  <p><span><i class="fa-solid fa-horse-head"></i></span>A caballo</p>
                </div>

                <div class="col">
                  <p><span><i class="fa-solid fa-crow"></i></span>Paloma mensajera</p>
                </div>

                <div class="col">
                  <p><span><i class="fa-solid fa-plane-up"></i></span>Avión</p>
                </div>

              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ProductInfo