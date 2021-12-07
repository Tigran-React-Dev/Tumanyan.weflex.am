import React, {useState} from 'react';
import css from "./Orders.module.scss";
import btn2 from "../../../../images/icons/btn1.svg"
import {useDispatch} from "react-redux";
import {OldcheckAddTocard} from "../../../redux/Action/CardAction";

const Orders = ({data}) => {
const [counts, setCount]=useState(3)
    const [itionallength,setitionallength]=useState(2)
const [sowinfo,setsowinfo]=useState(false)
    const dispath=useDispatch()
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


    return (
         <div className={css.oredersitem}>
             <div className={css.imagessmoll}>
                 {
                     data.map((item,i)=>{
                        if(data.length >= 4){
                            return(
                                <>
                                    {i<=counts && <div className={css.orderimgdiv}>
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
                                    {i<=counts && <div className={css.orderimgdiv}>
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
             <p className={css.dastacupit}>Այսօր</p>
              <p className={css.descriptionorder}>
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