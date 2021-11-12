
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper style
import 'swiper/swiper.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "./stylesss.scss";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay,Navigation]);


const  FootSlider= ({sliderdata}) =>{

    

  return (
    <>
    <Swiper spaceBetween={0}  centeredSlides={true} loop={true} autoplay={{
  "delay": 5000,
   "disableOnInteraction": false,

}} speed={500}  navigation={true} className="mySwiper">
        {sliderdata.map((elem,i)=>{
            return(
                <>
                <SwiperSlide key={i}>
                  <div className="slideritem5" style={{
                    backgroundImage: `url(${elem})`

                  }}
                       >
                     
                  </div>

                </SwiperSlide>

          </>
            )
        })

        }

  </Swiper>
    </>
  )
}


export default FootSlider;