import React, {useEffect, useRef, useState} from 'react';
import css from "./Foodtruck.module.scss";
import Button from "../Global/Button/Button";
import FoodPage1 from "./FoodPage1/FoodPage1";
import {useSlider} from "../Providers/SliderProvider";
import FoodPage2 from "./FoodPage2/FoodPage2";
import Foodpage3 from "./FoodPage3/Foodpage3";
import {useTranslation} from "react-i18next"
import { useProduct } from '../Providers/ProductMenu';


const Foodtruck = ({history}) => {
    const { languae }=useProduct()
    const { t }=useTranslation()
    const {foodTruckdata,setFootruckData}=useSlider()
   const [activeMenu,setACtivemenu]=useState(1)
    const ref=useRef(null)
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])

    const btnFoodTruck=[
        {id:1,name:"միջոցառումներ",nameRU:"Мероприятия",nameEN:"Events"},
        {id:2,name:"ինֆորմացիա",nameRU:"Информация ",nameEN:"Information",},
        {id:3,name:"պատվիրել",nameRU:"Информация ",nameEN:"Order",},
    ]


    const ChangeActiveMenu =(btninfo)=>{
        switch (btninfo.id){
            case 1 :
                ref.current.scrollLeft=0;
                break
            case 2 :
                ref.current.scrollLeft=100;
                break
            case 3 :
                ref.current.scrollLeft=210;
                break
            default :
                break
        }
       setACtivemenu(btninfo.id)

    }
    const fontproprty={fontFamily:languae=="ՀԱՅ" ?
            "Mardoto-Medium" : languae=="ENG" ?
                "Manrope-Bold" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }
    const fontproprty2={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Regular" : languae=="ENG" ?
                "manrope-reg" : languae=="РУС" ?
                    "manrope-reg" : null
    }


    return (
         <div className={css.foodcontainer}>
             <div className={css.foodhdr}>
                     <h1 style={fontproprty}>{t("foodtruck")}</h1>
             </div>
             <div className={css.btnfoodmenu} ref={ref}>
                 {
                     btnFoodTruck.map((elem)=>{

                         return(
                             <button
                                 key={elem.id}
                                 className={css.btnfood}
                                 onClick={()=>ChangeActiveMenu(elem)}
                                 style={{background:activeMenu===elem.id && "#ffffff" ,
                                     boxShadow:activeMenu===elem.id && "inset -1px 0px 0px",
                                     color:activeMenu===elem.id && "#13AD54",...fontproprty
                                 }}
                             >{languae=="ՀԱՅ" ? elem.name : languae=="ENG" ? elem.nameEN : languae=="РУС" ? elem.nameRU : null}</button>
                         )
                     })
                 }
             </div>
             <div className={css.foodcontainer2}>
                 {
                     activeMenu===1 ?
                         <FoodPage1 foodTruckdata={foodTruckdata} setFootruckData={setFootruckData} />
                         :
                    activeMenu===2 ?
                        <FoodPage2/>
                        :
                    activeMenu===3 ?
                        <Foodpage3/>
                        :
                        null
                 }

             </div>
        </div>
    );
};

export default Foodtruck;