import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemInfo = ({ item }) => {


  let bagItems = [];
  const addToBag = (item) => {
    bagItems.push(item);
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
        <span className="item-details-discounted-price">Rs. {item.discounted_price}</span>
        <span className="item-details-original-price">MRP {item.original_price}</span>
        <span className="item-details-discount">({item.discount}% OFF)</span>
      </div>
      <div>
        <span className="item-vatinfo">Inclusive of all taxes</span>
      </div>
      <div>
        <div className="colors-container">
          <div>
            <h4 className="colors-heading">More Colors</h4>
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
            <h4 className="size-buttons-size">Select Size</h4>
            <span className="size-buttons-chart">
              <button className="size-buttons-show-chart">Size chart</button>
              <span className="size-buttons-arrow"></span>
            </span>
          </div>
          <div className="size-buttons-size-buttons">
            {
              item.sizes.map((size) =>
                <div className="size-buttons-btn-container">
                  <span>{size}</span>
                </div>
              )
            }
          </div>
        </div>
        <div className="bag-wishlist-btn-container">
          <button type="button" className="bag-btn-container" onClick={addToBag(item)}>
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
      </div>
    </div>
  )
}

export default ItemInfo
