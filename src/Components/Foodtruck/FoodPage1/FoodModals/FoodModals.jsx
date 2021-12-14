import React, {useState} from 'react';
import css from "./Foodmodal.module.scss";
import  close from "../../../../images/icons/closemod.svg"
import FootSlider from './FootSlider';


const FoodModals = ({data,setShowmodal,displeysetigs,showModal}) => {
    const [key,setkey]=useState(false)

setTimeout(()=>{

    setkey(showModal)


},200)

    return (
        <>
         <div className={css.modalcontainer}>

        <div className={css.closebtn} onClick={() => setShowmodal(false)}>
            <img src={close} alt=""/>
        </div>
             {key && <div className={css.modalimgandinfo}>
                 <div className={css.sliderfood}>
                     <FootSlider sliderdata={data.food_trucks[0]?.food_sliders}/>
                 </div>
                 <div className={css.infoslider}>
                     <h2>{data.title}</h2>
                     <h3>{data.date}</h3>
                     <p>{data.food_trucks[0]?.context} </p>
                     {/*{data.substring(0, 166)} <br/><br/>*/}
                     {/*{data.information.substring(167, 281)} <br/><br/>*/}
                     {/*{data.information.substring(281, 408)}*/}
                 </div>
             </div>}

    </div>

        </>
    );
};

export default FoodModals;