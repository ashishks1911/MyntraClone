import React from 'react'
import { useParams } from 'react-router-dom'
import items from '../items.js'
import BreadCrumb from './BreadCrumb.jsx';
import ImageContainer from './ImageContainer';
import ItemInfo from './ItemInfoContainer';

const ItemDetails = () => {

  const { itemId } = useParams();
  console.log(itemId);

  const item = items.find((item) => item.id === itemId);

  return (
    <div>
      <BreadCrumb item={item} />
      <div className='item-details-container flex flex-col md:grid md:w-[96%]'>
        <ImageContainer images={item.img} />
        <ItemInfo item={item} />
      </div>
    </div>
  )
}

export default ItemDetails
