import React from 'react'

function Form() {
  return (
    <div>
      <div class="mb-3 col-9 mx-auto mt-5">
        <label for="exampleFormControlInput1" class="form-label"><i class="fa-solid fa-envelope"></i> Tu dirección de correo...</label>
        <input type="email" class="form-control bg-secondary-subtle w-75 m-auto" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="mb-3 col-9 mx-auto">
        <label for="exampleFormControlTextarea1" class="form-label"><i class="fa-solid fa-comment"></i> Descríbenos tu problema...</label>
        <textarea class="form-control bg-secondary-subtle w-75 m-auto" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="mb-3 mx-auto col-9">
        <label for="formFile" class="form-label"><i class="fa-solid fa-box-archive"></i> Adjunta un archivo...</label>
        <input class="form-control bg-secondary-subtle w-75 m-auto" type="file" id="formFile" />
      </div>
      <button type="button" class="btn btn-outline-dark w-25 my-3">Enviar</button>
    </div>
  )
}

export default Form