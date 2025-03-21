import React from 'react'
import items from '../items'
import ItemContainer from '../item/ItemContainer';
import { useParams } from 'react-router-dom';

const ItemList = () => {
  const { category } = useParams();

  const itemList = items.filter((item) => item.category === category);
  console.log(itemList);
  return (
    <div className='items-container md:w-[80%] w-full justify-center md:justify-start'>
      {itemList.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList
