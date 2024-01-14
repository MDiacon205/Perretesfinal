import React from 'react'
import Card from '../Vital/Card'


// SIN USO ACTUAL


function Itemcarousel() { 
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="container text-center row-cols">
                <div class="row align-items-center">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div class="container text-center row-cols">
                <div class="row align-items-center">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
            </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Itemcarousel