import React, { useEffect, useState } from 'react'
import items from '../items';

const BagRightSide = ({ bagItems }) => {

  const [totalMRP, setTotalMRP] = useState(0);
  const [discountOnMRP, setDiscountOnMRP] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [platformFee, setPlatformFee] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (bagItems.length == 0) {
      setTotalMRP(0)
      setDiscountOnMRP(0);
      setPlatformFee(0);
      setShippingFee(0);
      setTotalAmount(0);
      return;
    }
    let totalPrice = 0;
    let totalDiscount = 0;
    bagItems.forEach((bagItem) => {
      const item = items.find((item) => item.id === bagItem.id);
      totalPrice += item.original_price * bagItem.qty;
      totalDiscount += item.discount_percentage != 0 ? (item.original_price * item.discount_percentage / 100) * bagItem.qty : item.discount_mrp * bagItem.qty;

    });

    setTotalMRP(totalPrice);
    setDiscountOnMRP(Math.floor(totalDiscount));
    setPlatformFee(20);
    setShippingFee(20);

  }, [bagItems]);

  useEffect(() => {
    let totalSum = totalMRP - discountOnMRP + platformFee + shippingFee;
    setTotalAmount(totalSum);

  }, [totalMRP, discountOnMRP, platformFee, shippingFee])

  return (
    <div className="bag-right-block border-l p-4">
      <div className="coupons">
        <div className="uppercase px-3 text-xs font-bold py-4 text-gray-500">Coupons</div>
        <div className="flex text-sm items-center">
          <div className="px-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="coupons-base-couponIcon"><g fill="none" fill-rule="evenodd" transform="rotate(45 6.086 5.293)"><path stroke="#000" d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"></path><circle cx="5.35" cy="5.35" r="1.35" fill="#000" fill-rule="nonzero"></circle></g></svg>
          </div>
          <div className="font-bold w-[60%]">Apply Coupons</div>
          <button className="text-red-500 border border-red-500 px-4 py-1 text-center text-xs font-bold uppercase">Apply</button>
        </div>
        <div className="py-4 pl-12">
          <div className="text-sm"> <span className="text-red-500 font-bold cursor-pointer">Login</span> to get &#8377; 500 OFF on first order</div>
        </div>
      </div>
      <hr />
      <div className="donations">
        <div className="pl-4 pt-3">
          <span className="uppercase text-gray-600 text-xs font-bold">Support transformative social work in india</span>
        </div>
        <div className='mt-4'>
          <input type="checkbox" name="donation" id="donation" className='w-4 h-4' />
          <span className='font-bold text-sm ml-4'>Donate and make a difference</span>
          <div className='flex gap-4 pt-5'>
            <button className='rounded-full border border-gray-300 px-3 py-1 font-bold'>&#8377; 10</button>
            <button className='rounded-full border border-gray-300 px-3 py-1 font-bold'>&#8377; 20</button>
            <button className='rounded-full border border-gray-300 px-3 py-1 font-bold'>&#8377; 50</button>
            <button className='rounded-full border border-gray-300 px-3 py-1 font-bold'>&#8377; 100</button>
          </div>
        </div>
        <div>
          <button className="text-red-500 text-sm font-bold py-3" >Know More</button>
        </div>
      </div>
      <hr className='mt-3 pt-3' />
      <div>
        <span className='uppercase text-gray-600 text-xs font-bold'>Product details
        </span>
        <span className='text-xs px-1 font-bold text-gray-600'>({bagItems.length} Items)</span>
        <div className='flex justify-between'>
          <div>
            <div className='text-sm font-normal pt-1'>Total MRP</div>
            <div className='text-sm font-normal pt-1'>Discount on MRP</div>
            <div className='text-sm font-normal pt-1'>Coupon Discount</div>
            <div className='text-sm font-normal pt-1'>
              <span className='pr-1'>
                Platform Fee
              </span>
              <button className="text-red-500 text-sm font-bold" >Know More</button></div>
            <div className='text-sm font-normal pt-1'>
              <span className='pr-1'>
                Shipping Fee
              </span>
              <button className="text-red-500 text-sm font-bold" >Know More</button></div>
            <span className='text-xs text-gray-500 pb-1'>Free shipping for you</span>
          </div>
          <div className='text-right'>
            <div className='text-sm font-normal pt-1'>&#8377;{totalMRP}</div>
            <div className='text-sm font-normal pt-1 text-green-500'>- &#8377;{discountOnMRP}</div>
            <div className='text-sm pt-1'><button className='text-red-500'>Apply Coupon</button></div>
            <div className='text-sm font-normal pt-1'>&#8377;{platformFee}</div>
            <div className='text-sm font-normal pt-1 text-green-500'>{shippingFee == 0 ? 'FREE' : `'&#8377;'${shippingFee}`}</div>
          </div>
        </div>
        <hr className='mt-2' />
        <div className='flex justify-between text-md font-bold py-1'>
          <span>Total Amount</span>
          <span className='text-right'>&#8377; {totalAmount}</span>
        </div>
        <div>
          <button className='bg-[#ff3f6c] w-full uppercase text-white font-bold p-2 hover:bg-red-600'>Place order</button>
        </div>
      </div>
    </div>
  )
}

export default BagRightSide
