import React from 'react';
import css from "./BasketRecoment.module.scss";
import btnrecom from "../../../images/icons/btnrecom.svg"


const BasketRecoment = ({id,name,nameRU,nameEN,description,image,bonus,like,category_id,prices,itionalitem=[],handleAddProductCard}) => {



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



     return (
         <>
          <div className={css.itemrecom}>
              <img className={css.imagerecom} src={process.env.REACT_APP_IMG_URL+image} alt=""/>
              <div className={css.recomtitlebtn}>
                   <p className={css.rectitle}>{name}</p>
                   <p className={css.descript}>{description}</p>
                  <div className={css.addcardandprice}>
                      <p>{prices[0].price} ֏</p>
                      <img src={btnrecom} alt="" onClick={()=>AddtoCardRecom()}/>
                  </div>
              </div>
          </div>
             {/*Mobile ITEM Jsx*/}
             <div className={css.itemrecommobile}>
                 <div className={css.itemheader}>
                     <img className={css.imagerecom} src={process.env.REACT_APP_IMG_URL+image} alt=""/>
                     <div className={css.descriptionandname}>
                             <p className={css.rectitle}>{name}</p>
                             <p className={css.descript}>{description}</p>
                     </div>
                 </div>
                     <div className={css.addcardandprice}>
                         <p>{prices[0].price} ֏</p>
                         <img src={btnrecom} alt="" onClick={()=>AddtoCardRecom()}/>
                     </div>

                 {/*<div className={css.recomtitlebtn}>*/}


                 {/*</div>*/}
             </div>
         </>

    );
};

export default BasketRecoment;