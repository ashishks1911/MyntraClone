import React from 'react'

const BreadCrumb = ({brand}) => {
  return (
    <div className='breadcrumbs-container text-sm hidden md:block'>
      <a href="#" className="breadcrumbs-link">Home</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link">Clothing</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link">Women Clothing</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link">Kutra Sets</a>
      <span className="breadcrumbs-separator">/</span>
      <a href="#" className="breadcrumbs-link font-bold">More by {brand}</a>
    </div>
  )
}

export default BreadCrumb
