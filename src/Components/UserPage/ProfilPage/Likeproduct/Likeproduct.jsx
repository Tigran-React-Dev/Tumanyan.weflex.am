import React from 'react';
import css from "./Likeproduct.module.scss";
import ProductBlok from "../../../Menu/ProductBlok/ProductBlok";
import {useProduct} from "../../../Providers/ProductMenu";
import {useDispatch} from "react-redux";
import {AddproductCard} from "../../../redux/Action/CardAction";


const Likeproduct = ({likeProductdata,likeproduct}) => {

    const dispath=useDispatch()

    const handleAddProductCard =(obj)=>{
        dispath(AddproductCard(obj))
    }
    console.log(likeProductdata)

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
                 })

             }


         </div>
    );
};

export default Likeproduct;