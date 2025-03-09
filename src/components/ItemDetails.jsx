import React from 'react'
import { useParams } from 'react-router-dom'
import items from '../items'
import BreadCrumb from './BreadCrumb';
import ImageContainer from './ImageContainer';
import ItemInfo from './ItemInfoContainer';

const ItemDetails = () => {

  const { itemId } = useParams();
  console.log(itemId);

  const item = items.find((item) => item.id === itemId);

  return (
    <div>
      <BreadCrumb brand={item.brand} />
      <div className='item-details-container'>
        <ImageContainer images={item.img} />
        <ItemInfo item={item} />
      </div>
    </div>
  )
}

export default ItemDetails
