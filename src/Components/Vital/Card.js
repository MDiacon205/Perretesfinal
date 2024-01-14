import React from 'react'

function Card(props) {
  return (
    <div>
        <div class="card shadow">
        <img src={props.img} class="card-img-top img-fluid rounded-5" alt="productImage"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text fw-bold"> <span class="badge bg-success">{props.discount > 0 ? -props.discount+'%' : "" }</span> <span class="text-decoration-line-through">{props.discount > 0 ? '$'+props.oldPrice : ""}</span> ARS$ {props.price} </p>
    <a href={props.prodId} class="stretched-link"></a>
  </div>
</div>
    </div>
  )
}

export default Card