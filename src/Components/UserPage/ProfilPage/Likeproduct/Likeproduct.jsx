import React from 'react';
import css from "./Likeproduct.module.scss";
import ProductBlok from "../../../Menu/ProductBlok/ProductBlok";
import {useProduct} from "../../../Providers/ProductMenu";
import {useDispatch} from "react-redux";
import {AddproductCard} from "../../../redux/Action/CardAction";


const Likeproduct = ({likeproduct}) => {
    const { itionaldata,setItionaldata} = useProduct()
    const dispath=useDispatch()

    const handleAddProductCard =(obj)=>{
        dispath(AddproductCard(obj))
    }


    return (
         <div  className={css.likehdr}>
             {likeproduct.shaurma.length ? <p className={css.shaurmatitle}>շաուրմա</p> : null}
             {
                 likeproduct.shaurma.length ? likeproduct.shaurma.map((obj)=>{

                     return (
                         <ProductBlok
                             itionaldata={itionaldata}
                             handleAddProductCard={handleAddProductCard}
                             setItionaldata={setItionaldata}
                             key={obj.id}
                             {...obj}
                         />
                     )
                 })
                     :
                     null
             }
             {likeproduct.salads.length ? <p className={css.shaurmatitle}>աղցաններ</p> : null}
             {
                 likeproduct.salads.length && likeproduct.salads.map((obj)=>{

                     return (
                         <ProductBlok
                             itionaldata={itionaldata}
                             handleAddProductCard={handleAddProductCard}
                             setItionaldata={setItionaldata}
                             key={obj.id}
                             {...obj}
                         />
                     )
                 })
             }
         </div>
    );
};

export default Likeproduct;