import React from 'react'

function Card(props) {
  return (
    <div>
        <div class="card shadow">
  <img src={props.img} class="card-img-top img-fluid" alt="productImage"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text"> <span class="badge bg-success">-{props.discount}%</span> <span class="text-decoration-line-through">${props.oldPrice}</span> ${props.price} ARS</p>
    <a href="https://www.youtube.com/watch?v=Zib-9ShLBn0" target='blank' class="stretched-link"></a>
  </div>
</div>
    </div>
  )
}

export default Card