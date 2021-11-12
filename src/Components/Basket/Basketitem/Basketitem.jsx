import React from 'react';
import css from "./Basketitem.module.scss";
import minus from "../../../images/icons/Minus.svg"
import plus  from "../../../images/icons/Plus.svg"
import dltbtn from "../../../images/icons/delete.svg"
import {DeleteItemCard, OnMinusCount, OnplusCount} from "../../redux/Action/CardAction";
import {useDispatch} from "react-redux";


const Basketitem = ({obj}) => {
 const dispatch = useDispatch()
const {id,title,image, itionalitem,description,bonus,price,size,count,_id} =obj


    const DeleteItems =(_id)=>{

    dispatch(DeleteItemCard(_id))

    }

    const onPlusCount = (obj) => {
        dispatch(OnplusCount(obj))
    }
    const onMinusCount = (obj) => {
        dispatch(OnMinusCount(obj))
    }



    return (
         <div className={css.basketelement}>
             <img className={css.productpicturent} src={image} alt="" />
             <div className={css.titleanddescription}>
                    <p className={css.titleproduct}>{title}</p>
                    <p className={css.description}>{itionalitem!=undefined ? itionalitem.map(i=><span key={i.id}>{i.product},</span>) : description !=undefined ? description : null } </p>

             </div>
             <h2 className={css.size}>{size!=undefined  ? size : null }</h2>
             <div className={css.minuspluscount}>
                 <img className={css.onminus} src={minus} alt="" onClick={()=>onMinusCount(obj)} />
                 <span><p>{count}</p></span>
                 <img className={css.pluscaunt} src={plus} alt="" onClick={()=>onPlusCount(obj)} />
             </div>
             <div className={css.price}>
                 <p  >{price}  ֏</p>
             </div>
             <img onClick={()=>DeleteItems(_id)} className={css.dltbtn} src={dltbtn} alt=""/>


        </div>
    );
};

export default Basketitem;