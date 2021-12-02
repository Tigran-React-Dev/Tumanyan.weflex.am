import React, { useState } from 'react'
import css from "./CheckBox.module.scss";
import checkt from "../../../images/icons/chechkoriginal.png"
import {useProduct} from "../../Providers/ProductMenu";

export const CheckBox = props => {

const {languae}=useProduct()
    
    return (
        <>
               

                <input
                   
                    onChange={props.onchangecheck}
                    type="checkbox"
                    value={props.product}
                    id={props.id+1}
                    checked={props.isChecked}
                    className={css.checkproduct}
                    // className={css[props.cn]}
                />
               <label htmlFor={props.id+1} className={css.container}  >
                   <div className={css.ckekckdiv} style={{ 
                       backgroundColor:props.isChecked && "#13AD54",border: props.isChecked && "1px solid #13AD54",
                       backgroundImage:props.isChecked && `url(${checkt})`
                     }}>
                   </div>
                    <p className={css.product}>{languae=="ՀԱՅ" ? props.name : languae=="ENG" ? props.nameEN : languae=="РУС" ? props.nameRU : null}</p>
                    <p className={css.price}>{+props.price !==0 && props.price + " ֏"}</p>  </label>
        </>
       )
}

export default CheckBox;