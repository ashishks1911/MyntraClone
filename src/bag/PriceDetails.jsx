import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { checkoutActions } from '../store/checkoutSlice';

const PriceDetails = () => {

  const bagItems = useSelector((store) => store.bag);

  const items = useSelector((store) => store.items);


  const [totalMRP, setTotalMRP] = useState(0);
  const [discountOnMRP, setDiscountOnMRP] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [platformFee, setPlatformFee] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const checkoutItems = useSelector((store) => store.checkoutItems);
  const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(checkoutActions.setCheckoutItems(bagItems));
    
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
      if (bagItem.checked) {
        const item = items.find((item) => item.id === bagItem.itemId);
        totalPrice += item.original_price * bagItem.qty;
        if(totalPrice%10){
          totalPrice--;
        }
        totalDiscount += item.discount_percentage != 0 ? (item.original_price * item.discount_percentage / 100) * bagItem.qty : item.discount_mrp * bagItem.qty;
      }
    });

    setTotalMRP(totalPrice);
    setDiscountOnMRP(Math.floor(totalDiscount));
    setPlatformFee(0);
    setShippingFee(0);

  }, [bagItems]);

  useEffect(() => {
    let totalSum = totalMRP - discountOnMRP + platformFee + shippingFee;
    setTotalAmount(totalSum);

  }, [totalMRP, discountOnMRP, platformFee, shippingFee])

  return (
    checkoutItems.length!==0 && (
      <div>
        <span className='uppercase text-gray-600 text-xs font-bold'>Product details
        </span>
        <span className='text-xs px-1 font-bold text-gray-600'>({checkoutItems.length} Items)</span>
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
            <div className='text-sm font-normal pt-1'>{platformFee == 0 ? 'FREE' : `₹${platformFee}`}</div>
            <div className='text-sm font-normal pt-1 text-green-500'>{shippingFee == 0 ? 'FREE' : `₹${shippingFee}`}</div>
          </div>
        </div>
        <hr className='mt-2' />
        <div className='flex justify-between text-md font-bold py-1'>
          <span>Total Amount</span>
          <span className='text-right'>&#8377; {totalAmount}</span>
        </div>
      </div>
    )
  )
}

export default PriceDetails
