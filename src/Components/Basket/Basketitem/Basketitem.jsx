import React, {useCallback, useState} from 'react';
import css from "./Basketitem.module.scss";
import minus from "../../../images/icons/Minus.svg"
import plus  from "../../../images/icons/Plus.svg"
import dltbtn from "../../../images/icons/delete.svg"
import {DeleteItemCard, OnMinusCount, OnplusCount} from "../../redux/Action/CardAction";
import closeiconmobile from "../../../images/icons/closeiconbasketmobile.png"
import {useDispatch} from "react-redux";
import {useProduct} from "../../Providers/ProductMenu";


const Basketitem = ({obj}) => {
 const dispatch = useDispatch()
const {id,name,image, itionalitem,description,price,size,count,_id,category,bonus} =obj
const [show,setShow]=useState({})
const {languae}=useProduct()
    const DeleteItems =(_id)=>{
        setShow({[_id]:!show[_id]})
      setTimeout(()=>{
          dispatch(DeleteItemCard(_id))
      },200)

    }

    const onPlusCount =((obj,bonus) => {
        dispatch(OnplusCount(obj,bonus))
     })


    const onMinusCount = ((obj,bonus) => {
        dispatch(OnMinusCount(obj,bonus))
    })

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
    const fontproprty3={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Medium" : languae=="ENG" ?
                "Manrope-Medium" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }

    return (
        <>
        <>
        {!show[_id] && <div className={css.basketelement}>
        {<img className={css.productpicturent} src={process.env.REACT_APP_IMG_URL + image} alt=""/>}
        <div className={css.titleanddescription}>
            <p className={css.titleproduct} style={fontproprty}>{name}</p>
            <p className={css.description} style={fontproprty2}>{itionalitem != undefined && itionalitem?.length!=0 ? itionalitem.map(i => <span
                key={i.id}>{i.name},</span>) : description != undefined ? description : null} </p>
         </div>
        <h2 className={css.size} style={fontproprty2}>{size != undefined ? size : null}</h2>
        <div className={css.minuspluscount}>
            {count ==1 ?
                <>
                    <img className={css.onminus} src={minus} alt="" onClick={() => onMinusCount(obj)}/>
                    <img className={css.ondeletmobile} src={closeiconmobile} alt="" onClick={() => DeleteItems(_id)}/>
                </>
                :
                <img className={css.onminus2} src={minus} alt="" onClick={() => onMinusCount(obj)}/>}
            <span><p style={fontproprty3}>{count}</p></span>
            <img className={css.pluscaunt} src={plus} alt="" onClick={() => onPlusCount(obj)}/>
        </div>
        <div className={css.price}>
            <p style={fontproprty}>{price} ֏</p>
        </div>
        <img onClick={() => DeleteItems(_id)} className={css.dltbtn} src={dltbtn} alt=""/>
       </div>
        }
           </>
            {/*MOBILE BASKET ITEM JSX*/}
            <>
                {!show[_id] && <div className={css.basketelementmobile}>
                    <div className={css.titleanddprice}>
                        <p className={css.titleproductmobile} style={fontproprty}>{name}</p>
                        <div className={css.pricemobile}>
                            <p style={fontproprty}> {price} ֏</p>
                        </div>
                     </div>
                    <h2 className={css.sizemobile} style={fontproprty2}>{size != undefined ? size : null}</h2>
                    <div className={css.minuspluscountmobile}>
                        <p className={css.descriptionmobile}>{description !=null  ? <span>{description}</span> :
                            itionalitem !=undefined ? itionalitem.map(e=><span style={fontproprty2}> {e.name}, </span>) : null} </p>
                        <div className={css.countminusplus}>
                            {count ==1 ?
                                <>
                                    <img className={css.onminus} src={minus} alt="" onClick={() => onMinusCount(obj)}/>
                                    <img className={css.ondeletmobile} src={closeiconmobile} alt="" onClick={() => DeleteItems(_id)}/>
                                </>
                                :
                                <img className={css.onminus2} src={minus} alt="" onClick={() => onMinusCount(obj,bonus)}/>}
                            <span><p style={fontproprty3}>{count}</p></span>
                            <img className={css.pluscaunt} src={plus} alt="" onClick={() => onPlusCount(obj,bonus)}/>
                        </div>

                    </div>




                </div>
                }
            </>
       </>
    );
};

export default Basketitem;