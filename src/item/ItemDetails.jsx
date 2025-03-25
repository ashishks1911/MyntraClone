import React from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from './BreadCrumb.jsx';
import ImageContainer from './ImageContainer';
import ItemInfo from './ItemInfoContainer';
import { useSelector } from 'react-redux';

const ItemDetails = () => {

  const { itemId } = useParams();
  const items = useSelector((store)=>store.items);

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
