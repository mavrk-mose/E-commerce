import React from 'react'

function Description() {
  return (
    <div className="product">
                      <Link to="/Description">
                        <img src={product_image.image} alt="girl" />
                      </Link>    
                    <h3>{item.title}</h3>
                    <h2>Price: ${item.price}</h2>
                </div>
  )
}

export default Description