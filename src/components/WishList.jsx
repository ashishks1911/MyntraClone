import React from 'react'

const WishList = () => {
  return (
    <div className='w-full text-center mt-32'>
      <h1 className='uppercase text-xl font-bold pt-24'> Please Log In </h1>
      <h3 className='text-gray-400 text-lg py-4'>Login to view items in your wishlist.</h3>
      <div className='py-20'>
        <button className='uppercase border-blue-500 text-blue-500 font-bold px-14 py-2.5 rounded border'>login</button>
      </div>
    </div>
  )
}

export default WishList
