import React, {  useState } from 'react';
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
import ImageGrid from '../ImageGrid';

const Menus=()=> {
  const [selectedEffect,setselectedEffect]=useState(null);
  const electedEffect=(effect)=>{
        setselectedEffect(effect)
  }
  return (
    <>
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
        <button  onClick={()=>electedEffect('FadeIn')} className='menu mr-5 ml-5'>Fade In</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('FadeOut')} className='menu mr-5 ml-5'>Fade Out</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Swipe')} className='menu mr-5 ml-5'>Swipe</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Slide')} className='menu mr-5 ml-5'>Slide</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('SlideOver')} className='menu mr-5 ml-5'>Slide Over</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('ZoomIn')} className='menu mr-5 ml-5'>Zoom In</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('ZoomOut')} className='menu mr-5 ml-5'>Zoom Out</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Shake')} className='menu mr-5 ml-5'>Shake</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Sense3D')}  className='menu mr-5 ml-5'>Sense 3D</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Trans')} className='menu mr-5 ml-5'>Trans</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Flip')} className='menu mr-5 ml-5'>Flip</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('FlipIn')} className='menu mr-5 ml-5'>Flip In</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('FlipOut')} className='menu mr-5 ml-5'>Flip Out</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Bubble')} className='menu mr-5 ml-5'>Bubble</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('BounceIn')} className='menu mr-5 ml-5'>Bounce In</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('BounceOut')} className='menu mr-5 ml-5'>Bounce Out</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('FlipForward')} className='menu mr-5 ml-5'>Flip Forward</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('FlipBackward')} className='menu mr-5 ml-5'>Flip Backward</button>
        </SwiperSlide>
        <SwiperSlide>
        <button  onClick={()=>electedEffect('Blinds')} className='menu mr-5 ml-5'>Blinds</button>
        </SwiperSlide>
       
      </Swiper> 
     
    </div>
    <ImageGrid selectedEffect={selectedEffect} ></ImageGrid>
    </>
  );
}

export default Menus;



