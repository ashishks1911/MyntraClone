import React from 'react'

const ImageContainer = ({ images }) => {
  return (
    <div className='item-details-image-container'>
      {
        images.map((img) => 
          <div className="item-image-container">
            <img src={img} className="item-details-image" alt="" />
          </div>
        )
      }
    </div>

  )
}

export default ImageContainer
