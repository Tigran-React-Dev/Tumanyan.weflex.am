import React from 'react';
import css from "./BasketRecoment.module.scss";
import btnrecom from "../../../images/icons/btnrecom.svg"


const BasketRecoment = ({id,title,image,bonus,description,category,price,handleAddProductCard}) => {


    const AddtoCardRecom =()=>{

        const recomobj={
            id,
            _id:Date.now(),
            title,
            image,
            bonus,
            description,
            category,
            priceitem:price,
            price:price[0].price,
            size: price.length===3 ? price[0].size : false,
            count:1,
        }

        handleAddProductCard(recomobj)
    }



     return (
          <div className={css.itemrecom}>
              <img className={css.imagerecom} src={image} alt=""/>
              <div className={css.recomtitlebtn}>
                   <p className={css.rectitle}>{title}</p>
                   <p className={css.descript}>{description}</p>
                  <div className={css.addcardandprice}>
                      <p>{price[0].price} ֏</p>
                      <img src={btnrecom} alt="" onClick={()=>AddtoCardRecom(category)}/>
                  </div>
              </div>
          </div>
    );
};

export default BasketRecoment;