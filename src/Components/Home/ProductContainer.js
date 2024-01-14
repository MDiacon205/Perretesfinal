import React from 'react'
import Card from '../Vital/Card'
import data from '../Vital/products.json'

function ProductContainer() {
  return (
    <div>
        <div class="row row-cols-2 align-items-start mx-3">
          {data.filter(product => product.discount <= 0).map(filteredProduct =>
            <div className="col-lg-2 my-3">
            <Card
              prodId={filteredProduct.id}
              title={filteredProduct.title}
              price={filteredProduct.price}
              img={filteredProduct.img}
              className="col"
            />
          </div>
          )}
      </div>
    </div>
  )
}

export default ProductContainer