import React, { useContext } from 'react'
import { ThemeContext } from '../Vital/ThemeContext'

function Form() {
  let { DarkMode } = useContext(ThemeContext)

  return (
    <div>
      <div class="mb-3 col-12 mx-auto mt-5">
        {/* <label for="exampleFormControlInput1" class="form-label"></label> */}
        <input type="email" class="form-control w-100 m-auto shadow" id="exampleFormControlInput1" placeholder="Tu dirección de correo..." />
      </div>
      <div class="mb-3 col-12 mx-auto">
        {/* <label for="exampleFormControlTextarea1" class="form-label"><i class="fa-solid fa-comment"></i> Descríbenos tu problema...</label> */}
        <textarea class="form-control w-100 m-auto shadow" id="exampleFormControlTextarea1" rows="3" placeholder="Tu mensaje..."></textarea>
      </div>
      <button type="button" class={ DarkMode == false ? "btn btn-outline-light w-100 my-3" : "btn btn-dark w-100 my-3"}>Enviar</button>
    </div>
  )
}

export default Form