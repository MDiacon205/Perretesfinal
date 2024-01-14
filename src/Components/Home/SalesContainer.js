import React from 'react'
import Card from '../Vital/Card'
import data from '../Vital/products.json'

function SalesContainer() {
  return (
    <div>
        <div class="row row-cols-2 align-items-start mx-3">
        {data.filter(product => product.discount >= 1).map(filteredProduct =>
            <div className="col-lg-2 my-3">
            <Card
              prodId={filteredProduct.id}
              title={filteredProduct.title}
              price= {filteredProduct.oldPrice - filteredProduct.oldPrice*filteredProduct.discount / 100}
              img={filteredProduct.img}
              oldPrice={filteredProduct.oldPrice}
              discount={filteredProduct.discount}
              className="col"
            />
          </div>
          )}
      </div>
    </div>
  )
}

export default SalesContainer