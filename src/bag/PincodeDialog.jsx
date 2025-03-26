import React, { useRef, useState } from 'react'
import { fetchCityAndDistrict } from '../utils/ApiFunctions';

const PincodeDialog = ({ setPincodeDialog }) => {

  const [pincodeError, setPincodeError] = useState(false);
  let pincode = useRef(0);
  const handleCheck = (event) => {
    event.preventDefault();
    const pin = pincode.current.value;
    if (pin.length !== 6) {
      setPincodeError(true)
    }
    else {
      const val = fetchCityAndDistrict(pin);
    }

  }

  return (
    <div className='fixed inset-x-0 inset-y-0 bg-black bg-opacity-60 z-50'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-[28rem] h-64 bg-white rounded mx-2'>
          <div className='flex justify-between px-5 py-4'>
            <h1 className='font-bold'>Enter Delivery Details</h1>
            <div className='cursor-pointer' onClick={() => setPincodeDialog(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3"><path fill="#000" fillRule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z" ></path></svg>
            </div>
          </div>
          <div className='mt-3 px-6'>
            <form className='flex justify-between border p-2 rounded focus-within:border-black'
              onSubmit={handleCheck}>
              <input type="text" placeholder='Enter Pincode' className='text-gray-500 outline-none px-1 group-h' ref={pincode} />
              <button className='font-bold uppercase text-gray-500 text-sm' type='submit'>Check</button>
            </form>
            {
              pincodeError &&
              <span className='text-red-500 text-xs px-2'>Invalid Pincode, please enter a valid pincode.</span>
            }
          </div>
          <div className='h-12 bg-gray-100 mt-3 text-center'>
            <p className='flex items-center justify-center h-full text-sm text-gray-500 font-bold'>OR</p>
          </div>
          <div className='px-3 mt-3'>
            <button className='border w-full border-black rounded py-3 text-black font-bold uppercase text-sm'>Add new address</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PincodeDialog
