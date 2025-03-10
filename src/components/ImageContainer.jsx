import React, { useState } from 'react'
import MobileCarousel from './MobileCarousel';

const ImageContainer = ({ images }) => {

  return (
    <>
      <div className='item-details-image-container md:float-left hidden md:block'>
        {
          images.map((img, index) =>
            <div key={index} className='item-image-container inline-block md:w-[49%] w-full'>
              <img src={img} className="item-details-image" alt="" />
            </div>
          )
        }
      </div>
      <div className='md:hidden block'>
        <MobileCarousel images={images} />
      </div>
    </>

  )
}

export default ImageContainer
