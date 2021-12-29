import React, {useState} from 'react';
import css from "./Orders.module.scss";
import btn2 from "../../../../images/icons/btn1.svg"
import {useDispatch} from "react-redux";
import {OldcheckAddTocard} from "../../../redux/Action/CardAction";
import {useProduct} from "../../../Providers/ProductMenu";

const Orders = ({data}) => {
    const [counts, setCount]=useState(3)
    const [itionallength,setitionallength]=useState(2)
    const [sowinfo,setsowinfo]=useState(false)
    const dispath=useDispatch()
    const {languae}=useProduct()
    const handleeditcount =(newcount)=>{
        setsowinfo(!sowinfo)
        if(sowinfo){
            setCount(newcount-1)
            setitionallength(newcount+1)
        }else{
            setCount(3)
            setitionallength(2)
        }

    }

    const AddOldOrderToCard =(data)=>{
        dispath(OldcheckAddTocard(data))
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
         <div className={css.oredersitem}>
             <div className={css.imagessmoll}>
                 {
                     data.map((item,i)=>{
                        if(data.length >= 4){
                            return(
                                <>
                                    {i<=counts &&
                                    <div className={css.orderimgdiv}>
                                    <img className={css.imgitem} src={process.env.REACT_APP_IMG_URL+item.image} alt=""/>
                                        {item.count > 1 ? <div className={css.countitemx}>
                                                <p>x{item.count}</p>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>}
                                </>
                            )
                        }else{
                            return(
                                <>
                                    {i<=counts &&
                                    <div className={css.orderimgdiv}>
                                    <img className={css.imgitem} src={process.env.REACT_APP_IMG_URL+item.image} alt=""/>
                                        {item.count > 1 ? <div className={css.countitemx}>
                                                <p>x{item.count}</p>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>}
                                </>
                            )
                        }



                     })
                 }
             </div>
             <p className={css.dastacupit} style={fontproprty2}>Այսօր</p>
              <p className={css.descriptionorder} style={fontproprty2}>
                  {
                      data.map((e,index)=>{
                          if(data.length>=4){
                              return(
                                  <>
                                      {
  (index<=itionallength && (e.description ? `${e.name} (${e.description}),` : !e.description ? `${e.name} (${e.size}), ` :null ))

                                      }
                                  </>
                              )
                          }else{
                              return(
                                  <>
                                      {
                                          (index<=itionallength && e.description ? `${e.name} (${e.description}),` : !e.description ? `${e.name} (${e.size}), ` :null )

                                      }
                                  </>
                              )
                          }
                      })
                  }

              </p>
             {data.length > 4 ? <div className={css.btnanime} onClick={()=>handleeditcount(data.length)}>
                 <p>{data.length-4} +</p>
             </div>
             :
              null
             }

             <div className={css.priceandaddcardblok}>
                 <p>{data.reduce((val,elem)=>{
                     return val+elem.price
                 },0)} ֏</p>
                 <img src={btn2} alt="" onClick={()=>AddOldOrderToCard(data)}/>
             </div>

         </div>
    );
};

export default Orders;