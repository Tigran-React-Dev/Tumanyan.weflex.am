import React from 'react';
import css from "./BasketRecoment.module.scss";
import btnrecom from "../../../images/icons/btnrecom.svg"
import {useProduct} from "../../Providers/ProductMenu";


const BasketRecoment = ({id,name,nameRU,nameEN,description,image,bonus,like,category_id,prices,itionalitem=[],handleAddProductCard}) => {

const {languae}=useProduct()

    const AddtoCardRecom =()=>{

        const recomobj={
            id,
            _id:Date.now(),
            name,
            nameRU,
            nameEN,
            image,
            bonus,
            description,
            category_id,
            priceitem:prices,
            price:+prices[0].price,
            size: prices.length===1 ? undefined : prices[0].sizes.size,
            count:1,
            like,
            itionalitem,
        }

        handleAddProductCard(recomobj)
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
    const fontproprty3={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Medium" : languae=="ENG" ?
                "Manrope-Medium" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }

     return (
         <>
          <div className={css.itemrecom}>
              <img className={css.imagerecom} src={process.env.REACT_APP_IMG_URL+image} alt=""/>
              <div className={css.recomtitlebtn}>
                   <p className={css.rectitle} style={fontproprty}>{name}</p>
                   <p className={css.descript} style={fontproprty2}>{description}</p>
                  <div className={css.addcardandprice}>
                      <p style={fontproprty}>{prices[0].price} ֏</p>
                      <img src={btnrecom} alt="" onClick={()=>AddtoCardRecom()}/>
                  </div>
              </div>
          </div>
             {/*Mobile ITEM Jsx*/}
             <div className={css.itemrecommobile}>
                 <div className={css.itemheader}>
                     <img className={css.imagerecom} src={process.env.REACT_APP_IMG_URL+image} alt=""/>
                     <div className={css.descriptionandname}>
                             <p className={css.rectitle} style={fontproprty}>{name}</p>
                             <p className={css.descript} style={fontproprty2}>{description}</p>
                     </div>
                 </div>
                     <div className={css.addcardandprice}>
                         <p style={fontproprty}>{prices[0].price} ֏</p>
                         <img src={btnrecom} alt="" onClick={()=>AddtoCardRecom()}/>
                     </div>

                 {/*<div className={css.recomtitlebtn}>*/}


                 {/*</div>*/}
             </div>
         </>

    );
};

export default BasketRecoment;