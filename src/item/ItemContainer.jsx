import React from 'react'
import { useNavigate } from 'react-router-dom';

const ItemContainer = ({ item }) => {

  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/category/${item.category}/item/${itemId}`)
  }

  return (
    <div className="item-container md:w-[200px] w-[168px] group" onClick={() => handleItemClick(item.id)}>
      <div className='relative'>
        <img className="item-image" src={item.src} alt="" />
        {
          item.rating != null && <div className="item-rating">
            {item.rating.stars} <i className="fa-solid fa-star review-star-icon"></i>  |  {item.rating.noOfReviews}
          </div>
        }

      </div>
      <div className="item-actions hidden md:group-hover:flex">
        <span className="item-wishlist">
          <span className="material-symbols-outlined item-wishlist-icon">
            favorite
          </span>
          <span>Wishlist</span>
        </span>
      </div>
      <div className="item-info">
        <div className="item-brand">{item.brand}</div>
        <div className="item-name">{item.name}</div>
        <div className="item-price">
          <span className="discounted-price">₹ {item.discounted_price}</span>
          <span className="original-price">Rs. {item.original_price}</span>
          <span className="discount">{item.discount_percentage == 0 ? `${item.discount_mrp !== 0 ? `(₹${item.discount_mrp})` : ''}` : `(${item.discount_percentage} % FF)`}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer
