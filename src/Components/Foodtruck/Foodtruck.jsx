import React, {useEffect, useRef, useState} from 'react';
import css from "./Foodtruck.module.scss";
import Button from "../Global/Button/Button";
import FoodPage1 from "./FoodPage1/FoodPage1";
import {useSlider} from "../Providers/SliderProvider";
import FoodPage2 from "./FoodPage2/FoodPage2";
import Foodpage3 from "./FoodPage3/Foodpage3";



const Foodtruck = ({history}) => {
    const {foodTruckdata}=useSlider()
   const [activeMenu,setACtivemenu]=useState(1)
    const ref=useRef(null)
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])

    const btnFoodTruck=[
        {id:1,name:"միջոցառումներ",},
        {id:2,name:"ինֆորմացիա",},
        {id:3,name:"պատվիրել",},
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



    return (
         <div className={css.foodcontainer}>
             <div className={css.foodhdr}>
                     <h1>Food truck</h1>
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
                                     color:activeMenu===elem.id && "#13AD54"
                                 }}
                             >{elem.name}</button>
                         )
                     })
                 }
             </div>
             <div className={css.foodcontainer2}>
                 {
                     activeMenu===1 ?
                         <FoodPage1 foodTruckdata={foodTruckdata} />
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