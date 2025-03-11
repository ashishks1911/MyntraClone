import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import BagOffers from "../components/BagOffers";


const ItemInfo = ({ item }) => {

  const [size, setSize] = useState('');
  const { bagItems, setBagItems } = useOutletContext();

  useEffect(() => {
    if (size.length != 0) {
      document.querySelector('.seller-info').classList.remove('hidden');
    }
  }, [size]);

  const addToBag = (itemId) => {
    const qty = 1;
    if (size.length == 0) {
      document.querySelector('.size-error-message').classList.remove('hidden');
    } else {
      let item = bagItems.filter((item) => item.id == itemId && item.size === size);
      if (item.length != 0) {
        console.log('You have this item in your bag and we have increased the quantity by 1')
        setBagItems((bagItems) => bagItems.map((item) => item.id === itemId && item.size === size ? { ...item, qty: item.qty + 1 } : item));
        return;
      }
      else {
        setBagItems((bagItems) => [...bagItems, { id: itemId, size, qty }]);
      }
    }
    console.log(bagItems)
    setSize('');
    document.querySelector('.size-error-message').classList.add('hidden');
    document.querySelector('.seller-info').classList.add('hidden');
  }

  return (
    <div className="item-details-description-container">
      <h1 className="item-details-brand md:text-2xl inline-block md:block text-xl px-3 md:px-0 mt-3 md:mt-0">{item.brand}</h1>
      <h1 className="item-details-name md:text-xl inline-block md:block text-lg md:mb-4 px-3 md:px-0">{item.name}</h1>
      <div className="item-details-rating-container relative md:border-b">
        {

          item.rating != null &&
          <div className="item-details-rating absolute md:relative text-xs md:text-base right-3 bottom-28 md:top-0 md:bottom-0 z-10 md:left-1 bg-white border-2 rounded-full md:rounded">
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
                item.colors.map((color) =>
                  <Link to={`/category/${item.category}/item/${color.id}`} className='color-options'><img src={color.img} alt="" /></Link>
                )
              }
            </div>

          </div>
        </div>
        <div className='md:hidden block px-3 py-8'>
            <BagOffers/>
        </div>
        <div className="size-buttons-container">
          <div className="size-buttons-header flex md:justify-start justify-between px-3 md:px-0">
            <h4 className="size-buttons-size font-bold">Select Size</h4>
            <span className="size-buttons-chart">
              <button className="size-buttons-show-chart font-bold">Size chart</button>
              <span className="size-buttons-arrow"></span>
            </span>
          </div>
          <div className='size-error-message mt-5 hidden'>
            <span className='text-red-500'>Please Select a size</span>
          </div>
          <div className="size-buttons-size-buttons flex-wrap">
            {
              item.sizes.map((size) =>
                <div className="size-buttons-btn-container ">
                  <button key={size} className='w-full border border-gray-400 hover:border-red-500 focus:text-red-500 focus:border-red-500 rounded-full px-5 py-3' onClick={() => setSize(size)}>{size}</button>
                </div>
              )
            }
          </div>
        </div>
        <div className="bag-wishlist-btn-container">
          <button type="button" className="bag-btn-container" onClick={() => addToBag(item.id)}>
            <span className="material-symbols-outlined">
              shopping_bag
            </span>
            <span className="add-to-bag">Add to Bag</span>
          </button>
          <button type="button" className="wishlist-btn-container">
            <span className="material-symbols-outlined">
              favorite
            </span>
            <span className="wishlist-btn-title">Wishlist</span>
          </button>
        </div>
        <div className='seller-info p-3 mt-5 hidden'>
          <hr className='py-1' />
          <div>
            <span className="font-bold mr-2">&#8377;{item.discounted_price}</span>
            <span className="ine-through mr-2">MRP &#8377;{item.original_price}</span>
            <span className="text-red-500">({item.discount}% OFF)</span>
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
