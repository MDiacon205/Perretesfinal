import React from 'react'
import Card from './Card'
import data from './products.json'

function ProductContainer() {
  return (
    <div>
        <div class="row align-items-start m-auto">
          {data.filter(product => product.discount <= 0).map(filteredProduct =>
            <div className="col mb-3">
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