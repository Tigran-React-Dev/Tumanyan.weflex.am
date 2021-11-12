import React, {useState} from "react";
import CheckBox from "../../Global/Checkbox/Checkbox";
import { useProduct } from "../../Providers/ProductMenu";
import css from "./ItionalProduct.module.scss";




const ItionalProduct =({idkey,setItionaldata,AddlichniyProduct,priceItional, setPriceItional,itionalitem,setItionalitem,itionaldata,setItionalData})=>{

    // const {itionaldata,setItionaldata}=useProduct()
    //  const [itionalData,setItionalData]=useState(itionaldata)


 
    const onchangecheck=(nevobj,ids)=>{
 
        const newobj1=itionaldata[ids].map((elem)=>{
            if(elem.id===nevobj.id){
                  return nevobj
            }
            return elem
         })

          const filt = newobj1.filter((e)=>e.id===nevobj.id)
              
          if(filt[0].isChecked){
            const prices=+filt[0].price
                 setPriceItional(priceItional+prices)
                setItionalitem([...itionalitem,filt[0]]) 
          }else{
            const prices=+filt[0].price
               setPriceItional(priceItional-prices)
                const newitional=itionalitem.filter((e)=>e.id !==filt[0].id)
                setItionalitem([...newitional])   
          }


        
        setItionaldata({
            ...itionaldata,
            [ids]:[...newobj1]
        })
    }



    return(
        <div className={css.itionalwraper}>
          <div className={css.itionalwrraper} onClick={AddlichniyProduct}/>
           <div className={css.itionalcategory} >
               <div className={css.banjarexen}>
                <p>Բանջարեղեն</p>
               </div>
               <div className={css.overfloscrol}>
                  <form>
                      {
                          itionaldata[idkey].filter((item)=>item.type==="Բանջարեղեն").map((obj,i)=>{
                              return(
                                <CheckBox key={i} cn="Checkboxitional" onchangecheck={(e)=>onchangecheck({
                                    ...obj,
                                    isChecked:e.target.checked
                                },idkey)} {...obj} />
                              )
                          })

                      }
                     <p className={css.souces}>Սոուսներ</p>
                     {
                          itionaldata[idkey].filter((item)=>item.type==="Սոուսներ").map((obj,i)=>{
                              return(
                                <CheckBox key={i} cn="Checkboxitional" onchangecheck={(e)=>onchangecheck({
                                    ...obj,
                                    isChecked:e.target.checked
                                },idkey)} {...obj} />
                              )
                          })

                      }
                  </form>
               </div>
           </div>
        </div>
    )
}


export default ItionalProduct;