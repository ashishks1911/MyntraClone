import React from 'react'

const SelectSizeDialog = ({ item, currentSize, setShowSizeDialog }) => {
  return (
    <div className='fixed inset-x-0 inset-y-0 bg-black bg-opacity-60 z-50 md:hidden'>
      <div className='flex justify-center items-center h-full'>
        <div className=' bg-white w-[25rem] p-4 m-3'>
          <div className='flex pb-2 border-b'>
            <div className='w-20'>
              <img src={item.src} alt="" className='w-full' />
            </div>
            <div className='flex justify-between w-full'>
              <div className='pl-2 flex-1'>
                <h3 className='font-bold text-lg'>{item.brand}</h3>
                <p className='text-lg font-light'>{item.name}</p>
              </div>
              <div className='cursor-pointer' onClick={() => setShowSizeDialog(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3"><path fill="#000" fillRule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z" ></path></svg>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <h2 className='text-lg py-2'>Select size</h2>
            {
              item.sizes.map((size) =>
                <button key={size} className='border border-gray-400 hover:border-red-500 focus:text-red-500 focus:border-red-500 rounded-full px-5 py-3 m-1' onClick={() => setSize(size)}>{size}</button>
              )
            }
          </div>
          <div className='mt-3'>
            <p className='text-lg text-gray-500'>Seller :{item.seller}</p>
          </div>
          <div className='mt-3'>
            <button className='bg-[#ff3e6c] text-white font-bold uppercase w-full py-2'>Done</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SelectSizeDialog
