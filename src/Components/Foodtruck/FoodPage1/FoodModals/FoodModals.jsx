import React from 'react';
import css from "./Foodmodal.module.scss";
import  close from "../../../../images/icons/closemod.svg"
import FootSlider from './FootSlider';
import BackdropFilter from "react-backdrop-filter";

const FoodModals = ({data,setShowmodal,displeysetigs}) => {



    return (
        <div className={css.modalcontainer} >

          <div className={css.closebtn} onClick={()=>setShowmodal(false)}>
                <img src={close} alt=""/>
            </div>
            <div className={css.modalimgandinfo}>
               <div className={css.sliderfood}>
                    <FootSlider sliderdata={data.image}/>
               </div>
               <div className={css.infoslider}>
                    <h2>{data.title}</h2>
                    <h3>{data.date}</h3>
                    <p>{data.information.substring(0,166)} <br/><br/>
                        {data.information.substring(167,281)} <br/><br/>
                        {data.information.substring(281,408)} </p>

               </div>
            </div>

        </div>
    );
};

export default FoodModals;