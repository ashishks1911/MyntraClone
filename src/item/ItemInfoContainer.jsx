import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BagOffers from "../bag/BagOffers";
import WishListBagBtn from '../components/WishListBagBtn';
import SelectSize from './SelectSize';


const ItemInfo = ({ item }) => {

  const [size, setSize] = useState('');

  useEffect(() => {
    if (size.length != 0) {
      document.querySelector('.seller-info').classList.remove('hidden');
    }
  }, [size]);


  return (
    <div className="item-details-description-container">
      <h1 className="item-details-brand md:text-2xl inline-block md:block text-xl px-3 md:px-0 mt-3 md:mt-0">{item.brand}</h1>
      <h1 className="item-details-name md:text-xl inline-block md:block text-lg md:mb-4 px-3 md:px-0">{item.name}</h1>
      <div className="item-details-rating-container relative md:border-b">
        {

          item.rating != null &&
          <div className="item-details-rating absolute md:relative text-xs md:text-base right-3 bottom-16 md:top-0 md:bottom-0 z-10 md:left-1 bg-white border-2 rounded-full md:rounded">
            <div className="item-overall-rating">
              {item.rating.stars} <i className="fa-solid fa-star review-star-icon"></i>
            </div>
            <span className='px-2 text-gray-400'> | </span>
            <div className="item-rating-count">
              {item.rating.noOfReviews} Ratings
            </div>
          </div>
        }
      </div>
      <div className="item-details-price md:px-0 px-3 flex md:block">
        <span className="item-details-discounted-price md:text-2xl order-2 md:mr-3 mr-2"> <span className='md:inline hidden'>&#8377;</span> <span className='md:hidden inline'>MRP</span> {item.discounted_price}</span>
        {
          (item.discount_percentage != 0 || item.discount_mrp != 0) && <span className="item-details-original-price md:text-xl md:mr-3 mr-1">MRP &#8377;{item.original_price}</span>
        }

        {
          item.discount_percentage != 0 && <span className="item-details-discount md:text-xl order-1">({item.discount_percentage} % OFF)</span>
        }
        {
          item.discount_mrp != 0 && <span className="item-details-discount md:text-xl order-3">(Rs. {item.discount_mrp} OFF)</span>
        }
      </div>
      <div className='md:block hidden'>
        <span className="item-vatinfo">Inclusive of all taxes</span>
      </div>
      <div>
        <div className="colors-container md:block hidden">
          <div>
            <h4 className="colors-heading font-bold">More Colors</h4>
            <div className='flex'>
              {
                item.colors.map((color, index) =>
                  <Link key={index} to={`/category/${item.category}/item/${color.id}`} className='color-options'><img src={color.img} alt="" /></Link>
                )
              }
            </div>

          </div>
        </div>
        <div className='md:hidden block px-3 py-8'>
          <BagOffers />
        </div>
        <SelectSize sizes = {item.sizes} size={size} setSize={setSize} />
        <WishListBagBtn itemId={item.id} size={size} setSize={setSize} />
        <div className='seller-info p-3 mt-5 hidden'>
          <hr className='py-1' />
          <div>
            <span className="font-bold mr-2">&#8377;{item.discounted_price}</span>
            <span className="ine-through mr-2">MRP &#8377;{item.original_price}</span>
            {item.discount_percentage !==0 && <span className="text-red-500">{item.discount_percentage}% OFF</span>}
            {item.discount_mrp !==0 && <span className="text-red-500">(₹{item.discount_mrp} OFF)</span>}
          </div>
          <div className='pb-3'>
            Seller : <span className='font-bold text-red-500'>{item.company}</span>
          </div>
          <hr className='py-3' />
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
