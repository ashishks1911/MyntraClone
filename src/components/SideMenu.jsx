import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SideMenu = ({ showSideMenu, setShowSideMenu }) => {

  // const menCategory = ['Topwear', 'Indian & festive wear', 'Bottomwear', 'Innerwear', 'Sleepwear'];

  const menCategories = [
    { id: 'Topwear', types: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Sweatshirts'] },
    { id: 'Indian & festive wear', types: ['Kurta & Kurta Sets', 'Shervani'] },
    { id: 'Bottomwear', types: ['Jeans', 'Casual Trousers', 'Formal Trousers', 'Shorts', 'Track Pants & Joggers'] },
    { id: 'Innerwear & Sleepwear', types: ['Briefs & Trucks', 'Boxers', 'Vests', 'Sleepear & Lougewear', 'Thermals'] },
    { id: 'PlusSize', types: [] },
    { id: 'Footwear', types: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers', 'Flip Flops', 'Socks'] },
    { id: 'Personal Care and Grooming', types: [] },
    { id: 'Sunglasses & Frames', types: [] },
    { id: 'Watches', types: [] },
    { id: 'Gadgets', types: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'] },
    { id: 'Bags & Bagpacks', types: [] },
    { id: 'Luggage & Trolleys', types: [] },

  ];
  const womenCategories = [
    { id: 'Indian & Fusion Wear', types: ['Kurta & Suits', 'Kurtis, Tunics & Tops', 'Sarees', 'Ethnic Wear', 'Legging, Salwar & Churidars', 'Skirts & Plazzos', 'Dress Materials', 'Lehanga Cholis', 'Dupattas & Shawls', 'Jackets'] },
    { id: 'Belts, Scarves & More', types: [] },
    { id: 'Watches & Wearables', types: [] },
    { id: 'Western Wear', types: ['Dresses', 'Tops', 'Tshirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Co-ords', 'Playsuits', 'JumpSuits', 'Shrugs', 'Sweaters & Sweatshirts', 'Jackets & Coats', 'Blazers & Waistcoats'] },
    { id: 'PlusSize', types: [] },
    { id: 'Maternity', types: [] },
    { id: 'Sunglasses & Frames', types: [] },
    { id: 'Footwear', types: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters'] },
    { id: 'Sports & Active Wear', types: ['Clothing', 'Footwear', 'Sports Accessories', 'Sports Equipment'] },
    { id: 'Lingerie & Sleepwear', types: ['Bra', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals'] },
    { id: 'Beauty & Personal Care', types: ['Makeup', 'Skincare', 'Premium Beauty', 'Lipsticks', 'Fragances'] },
    { id: 'Gadgets', types: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'] },
    { id: 'Jewellery', types: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'] },
    { id: 'Bagpacks', types: [] },
    { id: 'Handbags, Bags & Wallets', types: [] },
    { id: 'Luggage & Trolleys', types: [] },
  ];

  const kidsCategories = [
    { id: 'Boys Clothing', types: ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Trousers', 'Clothing Sets', 'Ethnic Wear', 'Track pants & Pajamas', 'Jacket, Sweater & Sweatshirts', 'Party Wear', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs'] },
    { id: 'Girls Clothing', types: ['Dresses', 'Tops', 'Tshirts', 'Clothing Sets', 'Lehanga choli', 'Kurta Sets', 'Party Wear', 'Dangarees & Jumpsuits', 'Skirts & shorts', 'Tights & Leggings', 'Jeans, Trousers & Capris', 'Jacket, Sweater & Sweatshirts', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs'] },
    { id: 'Footwear', types: ['Casual Shoes','Flipflops', 'Sports Shoes', 'Flats', 'Sandals', 'Heels', 'School Shoes', 'Socks'] },
    { id: 'Toys & Games', types: ['Learning & Development', 'Activity Toys', 'Soft Toys', 'Action Figure/ Play set'] },
    { id: 'Infants', types: ['BodySuits', 'Rompers & Sleepsuits', 'Clothing Sets', 'Tshirts & Tops', 'Dresses', 'Bottom Wear', 'Winter Wear', 'Innerwear & Sleepwear', 'Infant Care' ] },
    { id: 'Home & Bath', types: [] },
    { id: 'Personal Care', types: [] },
    { id: 'Kids Accessories', types: ['Bags & Backpacks', 'Watches', 'Jwellery & Hair Accessories', 'Sunglasses', 'Mask & Protective Gears', 'Caps & Hats'] },
    { id: 'Brands', types: ['H&M', 'Max Kids', 'Pantaloons', 'United Colors of Benetton Kids', 'YK', 'U.S. Polo Assn. kids', 'Mothercare', 'HRX'] },
    { id: 'Age', types: ['New Born', '0-2 years', '2-4Y', '4-6Y', '6-8Y', '8-10Y', '10-12Y', '12-14Y', '14Y+'] },

  ]

  const homeCategories = [
    {id:'Bed Linen & Furnishing', types:[]},
    {id:'Flooring', types:[]},
    {id:'Bath', types:[]},
    {id:'Lamps & Lighting', types:[]},
    {id:'Home Decor', types:[]},
    {id:'Cushion & cushion covers', types:[]},
    {id:'Curtains', types:[]},
    {id:'Home Gift Sets', types:[]},
    {id:'Kitchen & Table', types:[]},
    {id:'Storage', types:[]},
    {id:'Brands', types:[]},
  ];

  const beautyCategories = [
    {id:'Makeup', types:[]},
    {id:'Skincare, Bath & Body', types:[]},
    {id:'Babycare', types:[]},
    {id:'Masks', types:[]},
    {id:'Haircare', types:[]},
    {id:'Fragrances', types:[]},
    {id:'Appliances', types:[]},
    {id:`Men's Grooming`, types:[]},
    {id:'Beauty Gift & Makeup Set', types:[]},
    {id:'Premium Beauty', types:[]},
    {id:'Wellness & Hygiene', types:[]},
    {id:'Top Brands', types:[]},

  ]


  return (
    <div className={`z-50 fixed left-0 inset-y-0 w-[70%] h-auto bg-white transition duration-700 transform  ${showSideMenu ? 'translate-x-0' : '-translate-x-full'} overflow-scroll`}>
      <div className='signup-login bg-gray-700 text-white'>
        <div className='flex w-full justify-between px-4 py-4'>
          <div className='bg-white p-2'>
            <BsFillPersonLinesFill className='w-8 h-8 text-black' />
          </div>
          <div className='cursor-pointer' onClick={() => setShowSideMenu(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" class="close-icon" fill="#ffffff"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="#ffffff" d="M12.967 12L19.3 5.666a.685.685 0 000-.967.686.686 0 00-.967 0L12 11.033 5.666 4.7a.686.686 0 00-.967 0 .685.685 0 000 .967L11.033 12 4.7 18.334a.685.685 0 000 .967.686.686 0 00.967 0L12 12.967l6.334 6.334a.686.686 0 00.967 0 .685.685 0 000-.967L12.967 12z"></path></g></svg>
          </div>
        </div>
        <div className='p-4'>
          <Link to={''} className='flex justify-between'>
            <span>
              Myntra User
            </span>
            <img src="/arrow.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className='side-menu-navigation'>
        <Parent title='Men'>
          {
            menCategories.map((item) => (
              item.types.length !== 0 ? <Parent title={item.id}>
                {
                  item.types.map((category) => (
                    <Child title={category}></Child>
                  ))
                }
              </Parent> : <Child title={item.id}></Child>
            ))
          }
        </Parent>
        <Parent title='Women'>
          {
            womenCategories.map((item) => (
              item.types.length !== 0 ? <Parent title={item.id}>
                {
                  item.types.map((category) => (
                    <Child title={category}></Child>
                  ))
                }
              </Parent> : <Child title={item.id}></Child>
            ))
          }
        </Parent>
        <Parent title='Kids'>
          {
            kidsCategories.map((item) => (
              item.types.length !== 0 ? <Parent title={item.id}>
                {
                  item.types.map((category) => (
                    <Child title={category}></Child>
                  ))
                }
              </Parent> : <Child title={item.id}></Child>
            ))
          }
        </Parent>
        <Parent title='Home & Living'>
          {
            homeCategories.map((item) => (
              item.types.length !== 0 ? <Parent title={item.id}>
                {
                  item.types.map((category) => (
                    <Child title={category}></Child>
                  ))
                }
              </Parent> : <Child title={item.id}></Child>
            ))
          }
        </Parent>
        <Parent title='Beauty'>
          {
            beautyCategories.map((item) => (
              item.types.length !== 0 ? <Parent title={item.id}>
                {
                  item.types.map((category) => (
                    <Child title={category}></Child>
                  ))
                }
              </Parent> : <Child title={item.id}></Child>
            ))
          }
        </Parent>
      </div>
      <div className='mt-3 border-b h-2'>
      </div>
      <div className='mt-3 flex flex-col'>
        <Link className='text-sm p-3'>Account</Link>
        <Link className='text-sm p-3'>Orders</Link>
        <Link className='text-sm p-3 relative'>Myntra Studio <span className=' font-bold text-[10px] mx-1 px-1 bg-white border text-red-500 border-red-500 rounded-lg absolute top-2'>New</span> </Link>
        <Link className='text-sm p-3 relative'>Myntra Mall <span className=' font-bold text-[10px] mx-1 px-1 bg-white border text-red-500 border-red-500 rounded-lg absolute top-2'>New</span> </Link>
        <Link className='text-sm p-3'>Myntra Insider</Link>
        <Link className='text-sm p-3'>Gift Cards</Link>
        <Link className='text-sm p-3'>Contact Us</Link>
        <Link className='text-sm p-3'>FAQs</Link>
        <Link className='text-sm p-3'>Legal</Link>
      </div>
      <div className='h-32 bg-linear-to-r from-yellow-500 to-yellow-700'>
        <img src="/download-myntra.png" alt="download myntra app" />
      </div>

    </div>
  )
}

export default SideMenu

const Parent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-between w-full p-3' onClick={() => setIsOpen((prev) => !prev)}>
        <span className='text-sm'>{title}</span>
        <img src="/arrow.svg" alt="" className={` transition-all duration-100 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </div>
      {
        isOpen && <div className='pl-3 transition-all duration-700'>
          {children}
        </div>
      }
    </div>
  )
}

const Child = ({ title }) => {
  return (
    <div className='flex justify-between w-full p-3'>
      <span className='text-sm'>{title}</span>
    </div>
  )
}