import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

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
        console.log('You have this item in your bag and we have increased the quantity by 1' + item)
        setBagItems((bagItems) => bagItems.map((item) => item.id === itemId && item.size === size ? { ...item, qty: item.qty + 1 } : item));
        return;
      }
      else {
        setBagItems((bagItems) => [...bagItems, { id: itemId, size, qty }]);
      }
    }
    console.log(bagItems)
  }

  return (
    <div className="item-details-description-container">
      <h1 className="item-details-brand">{item.brand}</h1>
      <h1 className="item-details-name">{item.name}</h1>
      <div className="item-details-rating-container">
        <div className="item-details-rating">
          <div className="item-overall-rating">
            {item.rating.stars} <i className="fa-solid fa-star review-star-icon"></i>
          </div>
          <span> | </span>
          <div className="item-rating-count">
            {item.rating.noOfReviews} Ratings
          </div>
        </div>
      </div>
      <div className="item-details-price">
        <span className="item-details-discounted-price">&#8377;{item.discounted_price}</span>
        <span className="item-details-original-price">MRP &#8377;{item.original_price}</span>
        <span className="item-details-discount">({item.discount}% OFF)</span>
      </div>
      <div>
        <span className="item-vatinfo">Inclusive of all taxes</span>
      </div>
      <div>
        <div className="colors-container">
          <div>
            <h4 className="colors-heading font-bold">More Colors</h4>
            <div className='flex'>
              {
                item.colors.map((color) =>
                  <Link to={`/item/${color.id}`} className='color-options'><img src={color.img} alt="" /></Link>
                )
              }
            </div>

          </div>
        </div>
        <div className="size-buttons-container">
          <div className="size-buttons-header">
            <h4 className="size-buttons-size font-bold">Select Size</h4>
            <span className="size-buttons-chart">
              <button className="size-buttons-show-chart font-bold">Size chart</button>
              <span className="size-buttons-arrow"></span>
            </span>
          </div>
          <div className='size-error-message mt-5 hidden'>
            <span className='text-red-500'>Please Select a size</span>
          </div>
          <div className="size-buttons-size-buttons">
            {
              item.sizes.map((size) =>
                <div className="size-buttons-btn-container ">
                  <button key={size} className='w-full h-full border border-gray-400 hover:border-red-500 focus:text-red-500 focus:border-red-500 rounded-full' onClick={() => setSize(size)}>{size}</button>
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
