import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { SlBag } from 'react-icons/sl'
import { useOutletContext } from 'react-router-dom';

const WishListBagBtn = ({ itemId, size , setSize}) => {

  const { bagItems, setBagItems } = useOutletContext();
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector('.bag-wishlist-btn-container');
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const shouldBeSticky = rect.top > window.innerHeight;
      setIsSticky((prev) => prev !== shouldBeSticky ? shouldBeSticky : prev);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

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
  }

  return (
    <div>
      <div className={`bag-wishlist-btn-container grid grid-cols-[50%_50%] w-full md:hidden px-3 bg-white py-3 visible md:static  bottom-0`}>
        <button type="button" className="bag-btn-container order-2 md:mr-5 flex-1 md:flex-2 md:py-4 py-2" onClick={() => addToBag(itemId)}>
          <SlBag />
          <span className="add-to-bag">Add to Bag</span>
        </button>
        <button type="button" className="wishlist-btn-container md:order-2 order-1 mr-4 flex-1 md:py-4 py-2">
          <FaRegHeart />
          <span className="wishlist-btn-title">Wishlist</span>
        </button>
      </div>
      <div className={` ${isSticky ? 'fixed' : 'relative bottom-14'} bag-wishlist-btn-container grid grid-cols-[50%_50%] md:grid-cols-[60%_40%] w-full md:w-[80%] px-3 bg-white py-3 visible md:static  bottom-0`}>
        <button type="button" className="bag-btn-container order-2 md:mr-5 flex-1 md:flex-2 md:py-4 py-2" onClick={() => addToBag(itemId)}>
          <SlBag />
          <span className="add-to-bag">Add to Bag</span>
        </button>
        <button type="button" className="wishlist-btn-container md:order-2 order-1 mr-4 flex-1 md:py-4 py-2">
          <FaRegHeart />
          <span className="wishlist-btn-title">Wishlist</span>
        </button>
      </div>
    </div>
  )
}

export default WishListBagBtn
