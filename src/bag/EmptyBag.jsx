import React from 'react'

const EmptyBag = () => {
  return (
    <div className='w-full text-center mt-32'>
      <div className='flex justify-center pt-12'>
        <div className='w-32'>
          <img src="/empty-bag.webp" alt="empty bag"/>
        </div>
      </div>
      <h1 className='uppercase text-xl font-bold pt-12'> Hey, it feels so light! </h1>
      <h3 className='text-gray-400 text-lg py-4'>There is nothing in your bag. Let's add some items.</h3>
      <div className='py-4'>
        <button className='uppercase border-red-500 text-red-500 font-bold px-4 py-2.5 rounded border'>Add items from Wishlist</button>
      </div>
    </div>
  )
}

export default EmptyBag
