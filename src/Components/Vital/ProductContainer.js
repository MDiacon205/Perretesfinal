import React from 'react'
import Card from './Card'
import data from './products.json'

function ProductContainer() {
  return (
    <div>
        <div class="row row-cols-2 align-items-start mx-3">
          {data.filter(product => product.discount <= 0).map(filteredProduct =>
            <div className="col-lg-2 my-3">
            <Card
              key={filteredProduct.id}
              title={filteredProduct.title}
              price={filteredProduct.oldPrice - filteredProduct.oldPrice*filteredProduct.discount / 100}
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