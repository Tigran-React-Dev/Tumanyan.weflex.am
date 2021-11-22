
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper style

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "../Sliders/styles.scss";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';
import { useSlider } from "../../Providers/SliderProvider";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const  HomeSlider2= ({homepageReclam2}) =>{



    return (
        <>
            <Swiper spaceBetween={0}  centeredSlides={true} loop={true} autoplay={{
                "delay": 5000,
                "disableOnInteraction": false,

            }} pagination={{
                "clickable": true,

            }} speed={1000}  navigation={false} className="mySwiper">
                {homepageReclam2.map(({id,image})=>{
                    return(
                        <>
                            <SwiperSlide key={id}>
                                <div className="slideritem" style={{
                                    backgroundImage: `url(${process.env.REACT_APP_IMG_URL+"/slider/"+image})`

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


export default HomeSlider2;