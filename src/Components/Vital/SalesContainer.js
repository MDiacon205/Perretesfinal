import React from 'react'
import Card from './Card'
import data from './products.json'

function SalesContainer() {
  return (
    <div>
        <div class="row align-items-start m-auto">
        {data.filter(product => product.discount >= 1).map(filteredProduct =>
            <div className="col">
            <Card
              key={filteredProduct.id}
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