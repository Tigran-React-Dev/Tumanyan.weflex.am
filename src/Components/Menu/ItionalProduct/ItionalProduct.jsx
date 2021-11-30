import React, {useState} from "react";
import CheckBox from "../../Global/Checkbox/Checkbox";
import { useProduct } from "../../Providers/ProductMenu";
import css from "./ItionalProduct.module.scss";




const ItionalProduct =({itionaldataitem,setItionaldataitem,ingredients,AddlichniyProduct,priceItional, setPriceItional,itionalitem,setItionalitem,})=>{


    
    const onchangecheck=(nevobj,id)=>{
 
    const filtr1=itionaldataitem.filter(fil=>fil.id==id)
    const newdata=filtr1[0].adds.map(elem=>{
         if(elem.id==nevobj.id){
            return nevobj

         }
         return elem
     })
    itionaldataitem.forEach(element => {
            if(element.id==id){
               
                element.adds=newdata
                
            }
            return element
        });
        setItionaldataitem([...itionaldataitem])

   const filt = newdata.filter((e)=>e.id===nevobj.id)
       
          if(filt[0].isChecked){
            const prices=+(+filt[0].price)
           
                setPriceItional(priceItional+prices)
                setItionalitem([...itionalitem,filt[0]])
          }else{
            const prices=+(+filt[0].price)
               setPriceItional(priceItional-prices)
                const newitional=itionalitem.filter((e)=>e.id !==filt[0].id)
                setItionalitem([...newitional])
          }
        
    }



    return(
        <div className={css.itionalwraper}>
          <div className={css.itionalwrraper} onClick={AddlichniyProduct}/>
           <div className={css.itionalcategory} >
              <div className={css.overfloscrol}>
              {

            itionaldataitem.map(e=>{
                     return(
               <div>
                <div className={css.banjarexen}>
                 <p>{e.name}</p>
                </div>
               <div >
              {
                e.adds.map(el=>{
                  return(
                        <div>
                           <CheckBox  cn="Checkboxitional" {...el} onchangecheck={(e)=>onchangecheck({
                               ...el,
                               isChecked:e.target.checked,
                           },el.name_id)}/>
                        </div>
                     )
                    })
              }
               </div>
            
        </div>
    )
})
}         
              </div>
               
               {/*{ingredients===undefined ?*/}
               {/*    <>*/}
               {/*    <div className={css.banjarexen}>*/}
               {/*    <p>Բանջարեղեն</p>*/}
               {/*    </div>*/}
               {/*    <div className={css.overfloscrol}>*/}
               {/*    <form>*/}
               {/*{*/}
               {/*    itionaldata[idkey].filter((item)=>item.type==="Բանջարեղեն").map((obj,i)=>{*/}
               {/*    return(*/}
               {/*    <CheckBox key={i} cn="Checkboxitional" onchangecheck={(e)=>onchangecheck({*/}
               {/*    ...obj,*/}
               {/*    isChecked:e.target.checked*/}
               {/*},idkey)} {...obj} />*/}
               {/*    )*/}
               {/*})*/}

               {/*}*/}
               {/*    <p className={css.souces}>Սոուսներ</p>*/}
               {/*{*/}
               {/*    itionaldata[idkey].filter((item)=>item.type==="Սոուսներ").map((obj,i)=>{*/}
               {/*    return(*/}
               {/*    <CheckBox key={i} cn="Checkboxitional" onchangecheck={(e)=>onchangecheck({*/}
               {/*    ...obj,*/}
               {/*    isChecked:e.target.checked*/}
               {/*},idkey)} {...obj} />*/}
               {/*    )*/}
               {/*})*/}

               {/*}*/}
               {/*    </form>*/}
               {/*    </div>*/}
               {/*    </>*/}
               {/*:*/}
               {/*<div className={css.ingredentsblok}>*/}

               {/*        {*/}
               {/*            ingredients.map(({id,ingredient,quantity},i)=>{*/}
               {/*                return <div key={id} className={css.igraditem} style={{marginTop:i==0 ? "0px" : " 1.01vw"}}>*/}
               {/*                    <p>{ingredient}</p><p>{quantity}</p>*/}
               {/*                </div>*/}
               {/*            })*/}
               {/*        }*/}

               {/*</div>*/}
               {/*}*/}
           </div>
        </div>
    )
}


export default ItionalProduct;