
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper style
import 'swiper/swiper.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "./styless.scss";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';
import { useSlider } from "../../Providers/SliderProvider";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const  ProjectSlider= ({data}) =>{



    return (
        <>
            <Swiper spaceBetween={0}  centeredSlides={true} loop={true} autoplay={{
                "delay": 6000,
                "disableOnInteraction": false,

            }} pagination={{
                "clickable": true,

            }} speed={1000}  slidesPerView={1.35} spaceBetween={0}  navigation={true} className="mySwiper">
                {data.map(({id,image})=>{
                    return(
                        <>
                            <SwiperSlide key={id}>
                                <div className="slideritem1" style={{
                                    backgroundImage: `url(${image})`,

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


export default ProjectSlider;