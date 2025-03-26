import React from 'react'

const ItemQuantityDialog = ({ setShowQuantityDialog }) => {

  return (
    <div className='fixed inset-x-0 inset-y-0 bg-black bg-opacity-60 z-50'>
      <div className='flex justify-center items-center h-full'>
        <div className=' bg-white w-[25rem] p-4'>
          <div className='flex justify-between text-lg'>
            <h2>Select Qunatity</h2>
            <div className='cursor-pointer' onClick={() => setShowQuantityDialog(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3"><path fill="#000" fillRule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z" ></path></svg>
            </div>
          </div>
          <div className='mt-3'>
            {
              Array(10).fill().map((_, index) => <button key={index} className='border border-gray-400 hover:border-red-500 focus:text-red-500 focus:border-red-500 rounded-full px-5 py-3 m-1'>{index + 1}</button>)

            }
          </div>
          <div className='mt-3'>
            <button className='bg-[#ff3e6c] text-white font-bold uppercase w-full py-2'>Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemQuantityDialog
