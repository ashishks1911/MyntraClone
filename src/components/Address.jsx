import React, { useState } from 'react'
import PriceDetails from '../bag/PriceDetails'

const Address = () => {
  const [addressType, setAddressType] = useState('');
  const handleOptionChange = (e) => {
    setAddressType(e.target.value);
  }
  return (
    <div className="bag-container md:grid md:p-3 mt-12 md:w-[70%]">
      <div className="bag-left-block pt-10 px-24">
        <div className="p-4 py-8 border rounded bg-white text-sm text-bold">
          <form >
            <h3 className='text-xs font-bold uppercase mt-5'>Contact Details</h3>
            <div className='mt-3 relative'>
              <input type="text" id='name' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none z-20' />
              <label htmlFor="name" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 bg-white peer-focus:text-gray-700 text-gray-400 text-xs'>Name*</label>
            </div>
            <div className='mt-3 relative flex'>
              <input type="text" id='phone' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none' />
              <label htmlFor="phone" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 bg-white peer-focus:text-gray-700 text-gray-400 text-xs '>Mobile No*</label>
            </div>
            <h3 className='text-xs font-bold uppercase mt-5'>Address</h3>
            <div className='mt-3 relative'>
              <input type="text" id='pincode' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none' />
              <label htmlFor="pincode" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 bg-white peer-focus:text-gray-700 text-gray-400 text-xs'>Pin Code*</label>
            </div>
            <div className='mt-3 relative'>
              <input type="text" id='address' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none' />
              <label htmlFor="address" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 peer-focus:text-gray-700 bg-white text-gray-400 text-xs'>Address (House No, Building, Street, Area)*</label>
              <span className='text-xs text-yellow-500'>*Please update flat/house no and society/apartment details</span>
            </div>
            <div className='mt-3 relative'>
              <input type="text" id='locality' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none' />
              <label htmlFor="locality" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 peer-focus:text-gray-700 bg-white text-gray-400 text-xs'>Locality / Town*</label>
            </div>
            <div className='mt-3  flex gap-3'>
              <div className=' w-1/2 relative'>
                <input type="text" id='locality' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none' />
                <label htmlFor="locality" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 peer-focus:text-gray-700 bg-white text-gray-400 text-xs'>City / District</label>
              </div>
              <div className=' w-1/2 relative'>
                <input type="text" id='locality' className='peer box-border w-full px-2 py-3 text-gray-500 border-gray-300 border rounded focus:outline-none' />
                <label htmlFor="locality" className=' block absolute px-1 top-3 left-2 peer-focus:top-[-0.5rem] peer-focus:pb-1 peer-focus:text-gray-700 bg-white text-gray-400 text-xs'>State</label>
              </div>
            </div>
            <h3 className='text-xs font-bold uppercase mt-5'>Address Type</h3>
            <div className='mt-3 flex gap-4 items-center'>
              <div className='flex items-center'>
                <input type="radio" value={'home'} name='addressType' onChange={handleOptionChange} className='w-4 h-4' />
                <label htmlFor="home" className='inline-block bg-white text-base px-2'>Home</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" value={'office'} name='addressType' onChange={handleOptionChange} className='w-4 h-4' />
                <label htmlFor="office" className='inline-block bg-white text-base px-2'>Office</label>
              </div>
            </div>
            {

              addressType === 'office' && <div className='my-3'>
                <p className='text-gray-500'>Is your office open on weekends? <span className='text-red-500'>*</span></p>
                <div className='mt-3 flex items-center'>
                  <input type="checkbox" name='saturday' className='w-4 h-4' />
                  <label htmlFor="saturday" className='px-2 text-gray-700'>Open On Saturday</label> <br />
                </div>
                <div className='mt-3 flex items-center'>
                  <input type="checkbox" name='sunday' className='w-4 h-4' />
                  <label htmlFor="sunday" className='px-2 text-gray-700'>Open On Sunday</label>
                </div>
              </div>
            }
            <hr className='mt-6 text-gray-50' />

            <div className='mt-3 flex items-center'>
              <input type="checkbox" name='defaultAddress' className='w-4 h-4' />
              <label htmlFor="defaultAddress" className='px-2 text-gray-700'>Make this as my default address</label>
            </div>

            <div className='mt-3'>
              <div className='flex gap-2'>
                <button type="button" className=" py-2 flex-1 border border-gray-300 text-lg font-bold rounded-md" >
                  <span>Cancel</span>
                </button>
                <button type="button" className="bg-[#ff3e6c] text-white text-lg flex-1 font-bold py-2 rounded-md">
                  <span>Save</span>
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
      <div className="bag-right-block p-4">
        <PriceDetails />
      </div>
    </div>
  )
}

export default Address
