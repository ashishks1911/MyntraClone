import React, { lazy } from 'react'
import { useSelector } from 'react-redux';
const ItemContainer = lazy(() => import('../item/ItemContainer'));
import { useParams } from 'react-router-dom';

const ItemList = () => {
  const { category } = useParams();

  const items = useSelector((store) => store.items);

  const itemList = (typeof category !== 'undefined') ? items.filter((item) => item.category === category) : items;
  return (
    <div className='items-container md:w-[80%] w-full justify-center md:justify-start'>
      {itemList.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList
