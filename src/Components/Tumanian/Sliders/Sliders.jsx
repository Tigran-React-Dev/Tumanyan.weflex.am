
import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper style

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "./styles.scss";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { useSlider } from "../../Providers/SliderProvider";
import axios from "axios";
import {useProduct} from "../../Providers/ProductMenu";
import {Link} from "react-router-dom";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const  TumanianSlider= () =>{
    const [loadong,setloading]=useState(false)
    const { sliders,sliderHome1,setSliderHome1 } =useSlider()
    const {languae}=useProduct()
    useEffect(()=>{

        const sldrespons=axios.get("http://tumanyanadmin.weflex.am/api/slider_one")
        sldrespons.then(res=>setSliderHome1(res.data))
            .catch(err=>console.log(err))
        setloading(true)
    },[])



  return (
    <>
    <Swiper spaceBetween={0}  centeredSlides={true} loop={true} autoplay={{
  "delay": 5000,
   "disableOnInteraction": false,

}} pagination={{
  "clickable": true,
  
}} speed={1000}  navigation={false} className="mySwiper">

        {loadong && sliderHome1.map(({id,description,descriptionEN,image,descriptionRU,button_name,button_nameEN,button_nameRU,url})=>{
            return(
                <>
                     <SwiperSlide key={id}>
                        <div className="slideritem" style={{
                            backgroundImage: `url(${process.env.REACT_APP_IMG_URL+"/slider/"+image})`

                        }}
                        >
                            <h5 className="descriptionsld">{languae=="ՀԱՅ" ? description : languae=="ENG" ? descriptionEN : languae=="РУС" ? descriptionRU : null}</h5>
                            <button><a href={url} target="_blank">{languae == "ՀԱՅ" ? button_name : languae == "ENG" ? button_nameEN : languae == "РУС" ? button_nameRU : null}</a></button>
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