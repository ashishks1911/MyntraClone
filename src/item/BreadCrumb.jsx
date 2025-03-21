import React from 'react'

const BreadCrumb = ({item}) => {
  return (
    <div className='breadcrumbs-container text-sm hidden md:block'>
      <a href="#" className="breadcrumbs-link">Home</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link">Clothing</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link">{item.category.charAt(0).toUpperCase() + item.category.slice(1)} Clothing</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link">{item.subcategory}</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link font-bold">More by {item.brand}</a>
    </div>
  )
}

export default BreadCrumb
