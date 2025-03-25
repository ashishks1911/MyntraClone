import React from 'react'
import { useDispatch } from 'react-redux';
import { bagActions } from '../store/bagSlice';

const RemoveItemDialog = ({ item, img, setShowDialog }) => {

  const handleCancel = () => {
    setShowDialog(false);

  }
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item));
    setShowDialog(false);

  }

  return (
    <div id='dialog' className='fixed inset-x-0 inset-y-0 bg-black bg-opacity-60 z-50 h-auto'>
      <div className='flex justify-center items-center h-full'>
        <div className=' bg-white w-[22rem] p-2'>
          <div className='flex pb-2 border-b'>
            <div className='w-16'>
              <img src={img} alt="" className='w-full' />
            </div>
            <div className='flex justify-between'>
              <div className='pl-2'>
                <h3 className='font-bold'>Move from bag</h3>
                <p className='text-[14px]'>Are you sure you want to move this item from bag ?</p>
              </div>
              <div className='cursor-pointer' onClick={handleCancel} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3"><path fill="#000" fillRule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z" ></path></svg>
              </div>
            </div>
          </div>
          <div className='flex text-sm px-4 py-2'>
            <button className='font-bold flex-1 uppercase' onClick={handleRemoveItem}>Remove</button>
            <button className='font-bold text-red-500 flex-1 border-l uppercase'>Move to Wishlist</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RemoveItemDialog
