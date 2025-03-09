import React from 'react'
import items from '../items'
import { useOutletContext } from 'react-router-dom';

const BagItem = ({ bagItem }) => {
  const { setBagItems } = useOutletContext();

  let item = items.find((item) => item.id === bagItem.id);
  const handleRemoveItem = () => {
    setBagItems((bagItems) => bagItems.filter((item) => item.id !== bagItem.id || item.size !== bagItem.size));
  }

  return (
    <div className='w-full flex px-2 py-2.5 border rounded'>
      <div className='bag-item-left'>
        <div className='w-32 relative'>
          <div className='absolute left-1 top-1'>
            <input type="checkbox" name={item.id} id={item.id} checked className='w-4 h-4'/>
          </div>
          <img src={item.src} alt="" className='w-full' />
        </div>
      </div>
      <div className='bag-item-right pl-2 text-sm w-[80%]'>
        <h2 className='font-bold'>{item.brand}</h2>
        <h3>{item.name}</h3>
        <span className='text-xs text-gray-400'>Sold by : {item.company}</span>
        <div className='flex gap-2 py-2'>
          <div className='base-size bg-[#f5f5f6] block font-bold px-3 cursor-pointer flex items-center'>
            <span>Size : {bagItem.size}</span>
            <div className='pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" class="itemComponents-base-dropDown"><path fill-rule="evenodd" d="M0 0h6L3 3z"></path></svg>
            </div>
          </div>
          <div className='base-quantity block bg-[#f5f5f6] font-bold px-3 cursor-pointer flex items-center'>
            <span>Qty : {bagItem.qty} </span>
            <div className='pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" class="itemComponents-base-dropDown"><path fill-rule="evenodd" d="M0 0h6L3 3z"></path></svg>
            </div>
          </div>
        </div>

        <div className='flex gap-2'>
          <div className='text-[#282c3f] font-bold'>&#8377; {item.discounted_price}</div>
          <div className='text-[#282c3f] line-through'>&#8377; {item.original_price}</div>
          <div className='text-[#ff905a]'>&#8377; {item.discount_mrp}</div>
        </div>
        <div className='flex gap-1 pt-2'>
          <div><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z" fill="#282C3F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z" fill="#282C3F"></path></svg></div>
          <span className='text-xs'><strong>14 days</strong> return available</span>
        </div>
      </div>
      <div className='float-right text-xs'>
        <div className='cursor-pointer' onClick={handleRemoveItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3"><path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z" ></path></svg>
        </div>
      </div>
    </div>
  )
}

export default BagItem
