import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { SlBag } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" ><img className="logo" src="/myntra.svg" alt="myntra logo" /></Link>
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
        <Link className="action-container px-4" to={'/'}>
          {/* <span className="material-symbols-outlined action-icon">
          person
        </span> */}
          <IoPersonOutline />
          <span>Profile</span>
        </Link>
        <Link className="action-container px-4" to={'/wishlist'}>
          <FaRegHeart />
          <span>Wishlist</span>
        </Link>
        <Link className="action-container px-4" to={'checkout/bag'}>
          <SlBag />
          <span>Bag</span>
          <span className="bag-item-count">0</span>
        </Link>
      </div>
    </header>);
}

export default Header
