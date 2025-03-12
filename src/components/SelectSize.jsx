import React, { } from 'react'

const SelectSize = ({sizes, setSize}) => {

  return (
    <div className="size-buttons-container">
      <div className="size-buttons-header flex md:justify-start justify-between px-3 md:px-0">
        <h4 className="size-buttons-size font-bold">Select Size</h4>
        <span className="size-buttons-chart">
          <button className="size-buttons-show-chart font-bold">Size chart</button>
          <span className="size-buttons-arrow"></span>
        </span>
      </div>
      <div className='size-error-message mt-5 hidden'>
        <span className='text-red-500'>Please Select a size</span>
      </div>

      <div className="size-buttons-size-buttons md:flex-wrap md:w-full w-[24rem] overflow-x-auto nowrap mx-auto py-4 md:mx-0">
        {
          sizes.map((size) =>
            <div className="size-buttons-btn-container ">
              <button key={size} className='w-full border border-gray-400 hover:border-red-500 focus:text-red-500 focus:border-red-500 rounded-full px-5 py-3' onClick={() => setSize(size)}>{size}</button>
            </div>
          )
        }

      </div>
    </div>

  )
}

export default SelectSize
