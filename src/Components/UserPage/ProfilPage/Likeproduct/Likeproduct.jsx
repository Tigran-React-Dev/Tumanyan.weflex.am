import React from 'react';
import css from "./Likeproduct.module.scss";
import ProductBlok from "../../../Menu/ProductBlok/ProductBlok";
import {useDispatch} from "react-redux";
import {AddproductCard} from "../../../redux/Action/CardAction";
import ProductBlokGrand from "../../../GrandBuffet/ProductBlok/ProductBlokGrand";


const Likeproduct = ({likeProductdata,likeproduct,likeproductBuffet,likeProductdataBuffet}) => {

    const dispath=useDispatch()

    const handleAddProductCard =(obj)=>{
        dispath(AddproductCard(obj))
    }


    return (
         <div  className={css.likehdr}>
          {likeProductdata.map((obj)=>{
                    return (
                         <ProductBlok
                             likeproduct={likeproduct}
                             handleAddProductCard={handleAddProductCard}
                             key={obj.id}
                             {...obj.products}
                         />
                     )
                 })}
             {likeProductdataBuffet.map((obj)=>{
                 return (
                     <ProductBlokGrand
                         likeproductBuffet={likeproductBuffet}
                         handleAddProductCard={handleAddProductCard}
                         key={obj.id}
                         {...obj.product_buffets}
                     />
                 )
             })}
           </div>
    );
};

export default Likeproduct;