import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { HiBars3 } from "react-icons/hi2";
import { SlBag } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='z-50 sm:h-[80px] py-3'>
      <div className="logo-container flex items-center gap-3">
        <div className='sm:hidden '>
          <HiBars3  className='w-7 h-7 text-gray-500' />
        </div>
        <Link to="/" ><img className="sm:h-[45px] h-6" src="/myntra.svg" alt="myntra logo" /></Link>
      </div>
      <nav className="nav-bar hidden md:flex">
        <Link to="/category/men" >men</Link>
        <Link to="/category/women" >women</Link>
        <Link to="/category/kids" >kids</Link>
        <Link to="/category/living" >home & living</Link>
        <Link to="/" >beauty</Link>
        <Link to="/" >studio <sup>new</sup></Link>
      </nav>
      <div className="search-bar md:flex hidden">
        <span className="material-symbols-outlined search-icon">
          search
        </span>
        <input className="search-box" type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="actions">
        <Link className="action-container px-4 md:flex hidden" to={'/'}>
          <IoPersonOutline />
          <span>Profile</span>
        </Link>
        <Link className="action-container flex px-4" to={'/wishlist'}>
          <FaRegHeart className='h-5 w-5 sm:h-4 sm:w-4' />
          <span className='md:block hidden'>Wishlist</span>
        </Link>
        <Link className="action-container flex px-4" to={'checkout/bag'}>
          <SlBag className='h-5 w-5 sm:h-4 sm:w-4' />
          <span className='md:block hidden'>Bag</span>
          <span className="bag-item-count md:bottom-6 bottom-2">0</span>
        </Link>
      </div>
    </header>);
}

export default Header
