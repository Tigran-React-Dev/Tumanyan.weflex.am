import React, {useCallback, useState} from 'react';
import css from "./Basketitem.module.scss";
import minus from "../../../images/icons/Minus.svg"
import plus  from "../../../images/icons/Plus.svg"
import dltbtn from "../../../images/icons/delete.svg"
import {DeleteItemCard, OnMinusCount, OnplusCount} from "../../redux/Action/CardAction";
import closeiconmobile from "../../../images/icons/closeiconbasketmobile.png"
import {useDispatch} from "react-redux";


const Basketitem = ({obj}) => {
 const dispatch = useDispatch()
const {id,name,image, itionalitem,description,price,size,count,_id,category} =obj
const [show,setShow]=useState({})

    const DeleteItems =(_id)=>{
        setShow({[_id]:!show[_id]})
      setTimeout(()=>{
          dispatch(DeleteItemCard(_id))
      },200)

    }

    const onPlusCount  =useCallback((obj) => {
        dispatch(OnplusCount(obj))
     },[])


    const onMinusCount = useCallback((obj) => {
        dispatch(OnMinusCount(obj))
    },[obj])



    return (
        <>
        <>
        {!show[_id] && <div className={css.basketelement}>
        {<img className={css.productpicturent} src={process.env.REACT_APP_IMG_URL + image} alt=""/>}
        <div className={css.titleanddescription}>
            <p className={css.titleproduct}>{name}</p>
            <p className={css.description}>{itionalitem != undefined ? itionalitem.map(i => <span
                key={i.id}>{i.name},</span>) : description != undefined ? description : null} </p>
         </div>
        <h2 className={css.size}>{size != undefined ? size : null}</h2>
        <div className={css.minuspluscount}>
            {count ==1 ?
                <>
                    <img className={css.onminus} src={minus} alt="" onClick={() => onMinusCount(obj)}/>
                    <img className={css.ondeletmobile} src={closeiconmobile} alt="" onClick={() => DeleteItems(_id)}/>
                </>
                :
                <img className={css.onminus2} src={minus} alt="" onClick={() => onMinusCount(obj)}/>}
            <span><p>{count}</p></span>
            <img className={css.pluscaunt} src={plus} alt="" onClick={() => onPlusCount(obj)}/>
        </div>
        <div className={css.price}>
            <p>{price} ֏</p>
        </div>
        <img onClick={() => DeleteItems(_id)} className={css.dltbtn} src={dltbtn} alt=""/>
       </div>
        }
           </>
            {/*MOBILE BASKET ITEM JSX*/}
            <>
                {!show[_id] && <div className={css.basketelementmobile}>
                    <div className={css.titleanddprice}>
                        <p className={css.titleproductmobile}>{name}</p>
                        <div className={css.pricemobile}>
                            <p> {price} ֏</p>
                        </div>
                     </div>
                    <h2 className={css.sizemobile}>{size != undefined ? size : null}</h2>
                    <div className={css.minuspluscountmobile}>
                        <p className={css.descriptionmobile}>{itionalitem != undefined ? itionalitem.map(i => <span
                            key={i.id}>{i.name},</span>) : description != undefined ? description : null} </p>
                        <div className={css.countminusplus}>
                            {count ==1 ?
                                <>
                                    <img className={css.onminus} src={minus} alt="" onClick={() => onMinusCount(obj)}/>
                                    <img className={css.ondeletmobile} src={closeiconmobile} alt="" onClick={() => DeleteItems(_id)}/>
                                </>
                                :
                                <img className={css.onminus2} src={minus} alt="" onClick={() => onMinusCount(obj)}/>}
                            <span><p>{count}</p></span>
                            <img className={css.pluscaunt} src={plus} alt="" onClick={() => onPlusCount(obj)}/>
                        </div>

                    </div>




                </div>
                }
            </>
       </>
    );
};

export default Basketitem;