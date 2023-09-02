import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Menus.css';

// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

const Menus=()=> {
  return (
    <div className='container d-flex justify-content-center mt-5'>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
            769: {
                slidesPerView: 3, // Show three buttons per view on tablet-sized screens
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4, // Show four buttons per view on larger screens
                slidesPerGroup: 4,
              },
         
        }}
        
        navigation={true}
       
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <button className='mr-5 ml-5'>Shake</button>
        </SwiperSlide>
        <SwiperSlide>
        <button className='mr-5 ml-5'>Zoom In</button>
        </SwiperSlide>
        <SwiperSlide>
        <button className='mr-5 ml-5'>Zoom Out</button>
        </SwiperSlide>
        <SwiperSlide>
        <button className='mr-5 ml-5'>Slide Over</button>
        </SwiperSlide>
        <SwiperSlide>
        <button className='mr-5 ml-5'>Slide</button>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}

export default Menus;



