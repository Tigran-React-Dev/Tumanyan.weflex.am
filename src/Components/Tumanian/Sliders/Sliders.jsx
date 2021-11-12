
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper style
import 'swiper/swiper.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "./styles.scss";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { useSlider } from "../../Providers/SliderProvider";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const  TumanianSlider= () =>{

    const { sliders } =useSlider()

  return (
    <>
    <Swiper spaceBetween={0}  centeredSlides={true} loop={true} autoplay={{
  "delay": 5000,
   "disableOnInteraction": false,

}} pagination={{
  "clickable": true,
  
}} speed={1000}  navigation={false} className="mySwiper">
        {sliders.map(({id,imagis,description})=>{
            return(
                <>
                <SwiperSlide key={id}>
                  <div className="slideritem" style={{
                    backgroundImage: `url(${imagis})`

                  }}
                       >
                     <h1>{description}</h1>
                     <button >Պատվիրել</button>
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


export default TumanianSlider;