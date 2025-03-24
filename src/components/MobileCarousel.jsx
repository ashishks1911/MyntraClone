import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'


const MobileCarousel = ({ images }) => {
  return (
    <Swiper slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}  //pagination dots
      // navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      modules={[Pagination, Navigation]}
    >
      {

        images.map((img, index) => (
          <SwiperSlide key={index}><img src={img} alt=""  className='rounded-xl min-h-[32rem]'/> </SwiperSlide>))
      }
    </Swiper>
  )
}

export default MobileCarousel
