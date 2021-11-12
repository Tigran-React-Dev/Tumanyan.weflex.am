
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper style
import 'swiper/swiper.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "./page2styles.scss";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const  Page2Slider= ({slideritem}) =>{



    return (
        <>
            <Swiper spaceBetween={0}  centeredSlides={true} loop={true} autoplay={{
                "delay": 5000,
                "disableOnInteraction": false,

            }} pagination={{
                "clickable": true,

            }} speed={1000}  navigation={false} className="mySwiper">
                {slideritem.map(({id,image})=>{
                    return(
                        <>
                            <SwiperSlide key={id}>
                                <div className="slideritem6" style={{
                                    backgroundImage: `url(${image})`

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


export default Page2Slider;